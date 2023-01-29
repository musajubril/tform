import React from 'react'
import { InputFields } from '../components/Fields'
import Layout from '../components/Layout'
import { useRouter } from 'next/router';

export default function Page1() {
  const [data, setData] = React.useState(typeof window !== "undefined" && JSON.parse(localStorage.getItem("data")))
    React.useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("data")))
    },[typeof window !== "undefined"])
    const [state, setState] = React.useState({
      has_gov_profile: data?.has_gov_profile,
      is_visa_holder: data?.is_visa_holder,
      my_gov: data?.my_gov,
      my_gov_username: data?.my_gov_username,
      my_gov_password: data?.my_gov_password,
    })
    React.useEffect(()=>{
      setState({
        has_gov_profile: data?.has_gov_profile,
        is_visa_holder: data?.is_visa_holder,
        my_gov: data?.my_gov,
        my_gov_username: data?.my_gov_username,
        my_gov_password: data?.my_gov_password,
      })
  },[data])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(state)
        setState({
          ...state,
          [e.target.id]: e.target.value
        })
      }
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({
          ...state,
          [e.target.id]: e.target.value
        })
      }
    const inputFields = [
      {
        label: "Do you have a Government profile",
        value: state.is_visa_holder,
        change: handleSelect,
        required: true,
        id: "is_visa_holder",
        description:
          "",
        disabled: false,
        inp_type: "select",
        options: ["Yes", "No"]
      },
      {
        label: "Visa Holder",
        value: state.has_gov_profile,
        change: handleSelect,
        required: true,
        id: "has_gov_profile",
        description:
          "",
        disabled: false,
        inp_type: "select",
        options: ["Yes", "No"]
      },
      {
        label: "MyGov",
        value: state.my_gov,
        change: handleSelect,
        required: true,
        id: "my_gov",
        description:
          "",
        disabled: false,
        inp_type: "select",
        options: ["Yes", "No"]
      },
        {
            label: "MyGov Username",
            type: "text",
            value: state.my_gov_username,
            change: handleChange,
            required: true,
            id: "my_gov_username",
            placeholder: "",
            description:
              "",
            disabled: false,
            inp_type: "input"
          },
        {
            label: "MyGov Pass",
            type: "text",
            value: state.my_gov_password,
            change: handleChange,
            required: true,
            id: "my_gov_password",
            placeholder: "",
            description:
              "",
            disabled: false,
            inp_type: "input"
          },
    ]
    const router = useRouter()
    const handlePrev = () => {
      router.push('/page-1')
    }
    const handleNext = (e:any) => {
      e.preventDefault()
        if (typeof window !== "undefined") {
            const data = JSON.parse(localStorage.getItem("data"))
            console.log(data)
            localStorage.setItem("data", JSON.stringify({...data,...state}))
            router.push('/page-3')
            }
    }
  return (
    <Layout logo={"/dog2.jpg"} inputs={inputFields} prev={"/page-1"}
    next={handleNext} />

  )
}
