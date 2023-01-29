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
      ato: data?.ato,
      position: data?.position,
      qualification: data?.qualification,
      prev_work: data?.prev_work,
      skills: data?.skills,
    })

    React.useEffect(()=>{
      setState({
        ato: data?.ato,
        position: data?.position,
        qualification: data?.qualification,
        prev_work: data?.prev_work,
        skills: data?.skills,
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
        label: "ATO",
        value: state.ato,
        change: handleSelect,
        required: true,
        id: "ato",
        description:
          "",
        disabled: false,
        inp_type: "select",
        options: ["Yes", "No"]
      },
        {
            label: "What position are you applying for?",
            type: "text",
            value: state.position,
            change: handleChange,
            required: true,
            id: "position",
            placeholder: "",
            description:
              "",
            disabled: false,
            inp_type: "input"
          },
        {
            label: "Education Qualification",
            type: "text",
            value: state.qualification,
            change: handleChange,
            required: true,
            id: "qualification",
            placeholder: "",
            description:
              "",
            disabled: false,
            inp_type: "input"
          },
        {
            label: "Previous Work",
            type: "text",
            value: state.prev_work,
            change: handleChange,
            required: true,
            id: "prev_work",
            placeholder: "answer no if not applicable",
            description:
              "",
            disabled: false,
            inp_type: "input"
          },
        {
            label: "Skills & Qualifications",
            type: "text",
            value: state.skills,
            change: handleChange,
            required: true,
            id: "skills",
            placeholder: "",
            description:
              "Please list qualifications such as special skills, abilities, or honors that should be considered:",
            disabled: false,
            inp_type: "input"
          },
        
    ]
    const router = useRouter()
    const handlePrev = () => {
      router.push('/page-3')
    }
    const handleNext = (e:any) => {
      e.preventDefault()
        if (typeof window !== "undefined") {
            const data = JSON.parse(localStorage.getItem("data"))
            console.log(data)
            localStorage.setItem("data", JSON.stringify({...data,...state}))
            router.push('/page-5')
            }
    }
  return (
    <Layout logo={"/dog4.jpg"} inputs={inputFields} prev={"/page-3"}
    next={handleNext} />

  )
}
