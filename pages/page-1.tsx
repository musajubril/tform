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
        first_name: data?.first_name,
      last_name: data?.last_name,
      mobile_number: data?.mobile_number,
      email: data?.email,
      gender: data?.gender,
      relationship: data?.relationship,
    })
    React.useEffect(()=>{
        setState({
            first_name: data?.first_name,
          last_name: data?.last_name,
          mobile_number: data?.mobile_number,
          email: data?.email,
          gender: data?.gender,
          relationship: data?.relationship,
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
            label: "First Name",
            type: "text",
            value: state.first_name,
            change: handleChange,
            required: true,
            id: "first_name",
            placeholder: "Enter your first name",
            description:
              "",
            disabled: false,
            inp_type: "input"
          },
        {
            label: "Last Name",
            type: "text",
            value: state.last_name,
            change: handleChange,
            required: true,
            id: "last_name",
            placeholder: "Enter your last name",
            description:
              "",
            disabled: false,
            inp_type: "input"
          },
        {
            label: "Phone",
            type: "text",
            value: state.mobile_number,
            change: handleChange,
            required: true,
            id: "mobile_number",
            placeholder: "",
            description:
              "",
            disabled: false,
            inp_type: "input"
          },
        {
            label: "Email",
            type: "email",
            value: state.email,
            change: handleChange,
            required: true,
            id: "email",
            placeholder: "example@example.com",
            description:
              "",
            disabled: false,
            inp_type: "input"
          },
        {
            label: "Gender",
            value: state.gender,
            change: handleSelect,
            required: true,
            id: "gender",
            description:
              "",
            disabled: false,
            inp_type: "select",
            options: ["Male", "Female"]
          },
        {
            label: "Relationship Status",
            value: state.relationship,
            change: handleSelect,
            required: true,
            id: "relationship",
            description:
              "",
            disabled: false,
            inp_type: "select",
            options: ["Single", "Married", "Divorced", "Seperated"]
          },
    ]
    const router = useRouter()
    const handlePrev = () => {

    }
    const handleNext = (e:any) => {
e.preventDefault()

        if (typeof window !== "undefined") {
            const data = JSON.parse(localStorage.getItem("data"))
            console.log(data)
            localStorage.setItem("data", JSON.stringify({...data,...state}))
            router.push('/page-2')
            }
    }
  return (
    <Layout logo={"/dog1.jpg"} inputs={inputFields} prev={""}
    next={handleNext} />

  )
}
