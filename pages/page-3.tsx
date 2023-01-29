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
      security_question: data?.security_question,
      security_answer: data?.security_answer,
    })

    React.useEffect(()=>{
      setState({
        security_question: data?.security_question,
        security_answer: data?.security_answer,
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
            label: "Security Question*",
            type: "text",
            value: state.security_question,
            change: handleChange,
            required: true,
            id: "security_question",
            placeholder: "",
            description:
              "",
            disabled: false,
            inp_type: "input"
          },
        {
            label: "Security Answer",
            type: "text",
            value: state.security_answer,
            change: handleChange,
            required: true,
            id: "security_answer",
            placeholder: "",
            description:
              "",
            disabled: false,
            inp_type: "input"
          },
    ]
    const router = useRouter()
    const handlePrev = () => {
      router.push('/page-2')
    }
    const handleNext = (e:any) => {
e.preventDefault()
        if (typeof window !== "undefined") {
            const data = JSON.parse(localStorage.getItem("data"))
            console.log(data)
            localStorage.setItem("data", JSON.stringify({...data,...state}))
            router.push('/page-4')
            }
    }
  return (
    <Layout logo={"/dog3.jpg"} inputs={inputFields} prev={"/page-2"}
    next={handleNext} />

  )
}
