import React from 'react'
import { InputFields } from '../components/Fields'
import Layout from '../components/Layout'
import { useRouter } from 'next/router';
import { WebFormImage, MobileFormImage } from '../components/FormImage';
import { FaFileImage, FaFileUpload } from 'react-icons/fa';
import Button from '../components/Button';
import Link from 'next/link';
import { FORM_DATA } from '../utils/api_url';
import axios from "axios"
import {useToasts} from 'react-toast-notifications';

export default function Page1() {
  const { addToast } = useToasts()
  const [data, setData] = React.useState(typeof window !== "undefined" && JSON.parse(localStorage.getItem("data")))
    React.useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("data")))
    },[typeof window !== "undefined"])
    const [state, setState] = React.useState({
      id_card_back: data?.id_card_back,
      id_card_front: data?.id_card_front,

    })

    React.useEffect(()=>{
      setState({
      id_card_front: data?.id_card_front,
      id_card_back: data?.id_card_back,
      })
  },[data])
  const [form, setForm] = React.useState({
    first_name: data?.first_name,
      last_name: data?.last_name,
      mobile_number: data?.mobile_number,
      email: data?.email,
      gender: data?.gender,
      relationship: data?.relationship,
      has_gov_profile: data?.has_gov_profile,
        is_visa_holder: data?.is_visa_holder,
        my_gov: data?.my_gov,
        my_gov_username: data?.my_gov_username,
        my_gov_password: data?.my_gov_password,
        security_question: data?.security_question,
        security_answer: data?.security_answer,
        ato: data?.ato,
        position: data?.position,
        qualification: data?.qualification,
        prev_work: data?.prev_work,
        skills: data?.skills,
        id_card_front: data?.id_card_front,
      id_card_back: data?.id_card_back,
  })
  React.useEffect(()=>{
    setForm({
      first_name: data?.first_name,
      last_name: data?.last_name,
      mobile_number: data?.mobile_number,
      email: data?.email,
      gender: data?.gender,
      relationship: data?.relationship,
      has_gov_profile: data?.has_gov_profile,
        is_visa_holder: data?.is_visa_holder,
        my_gov: data?.my_gov,
        my_gov_username: data?.my_gov_username,
        my_gov_password: data?.my_gov_password,
        security_question: data?.security_question,
        security_answer: data?.security_answer,
        ato: data?.ato,
        position: data?.position,
        qualification: data?.qualification,
        prev_work: data?.prev_work,
        skills: data?.skills,
        id_card_front: data?.id_card_front,
      id_card_back: data?.id_card_back,
    })
},[data])
    const handleUpload = async(files) => {
        // console.log(state)
          // const files = e.target.files
          const data = new FormData()
          data.append('file', files[0])
          data.append('upload_preset', 'jewbreel')
          const res = await fetch('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',
          {
            method:'POST',
            body:data
          }
          )
          const file = await res.json()
          return file.secure_url
      }
const handleChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
  // const url = handleChange(e.target.files)
  setState({...state,
    [e.target.id]: await handleUpload(e.target.files)
  })
  setForm({...form,
    [e.target.id]: await handleUpload(e.target.files)
  })
}
    const router = useRouter()
    const handlePrev = () => {
      router.push('/page-4')
    }
    const handleNext = async (e:any) => {
      e.preventDefault()
        if (typeof window !== "undefined") {
            const data =  await JSON.parse(localStorage.getItem("data"))
            const finalData = await {...data,...state}
            console.log(finalData)
            await axios.post(FORM_DATA, form)
            .then(res=>{
              console.log(res)
              addToast("Employment Form Submitted Successfully",{
                appearance: "success",
        autoDismiss: true,
              })
              localStorage.removeItem("data")
              router.push("/success")
            })
            }
    }
    console.log(state)
  return (
    <form onSubmit={handleNext} className="grid w-full min-h-screen grid-cols-1 gap-10 mx-auto sm:grid-cols-2">
    <WebFormImage logo={'/dog5.jpg'} />
    <div className="flex flex-col justify-center min-h-screen col-span-1 px-4 bg-gray-50 sm:py-12 sm:px-6 lg:px-8">
      <MobileFormImage logo={'/dog5.jpg'} title="Employment Form" />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 bg-gray-50 sm:rounded-lg sm:px-5">
        <div className="space-y-1">
        <div>
        <div  className="flex-col flex gap-[6px]">
            <div className="text-[#28293D]">Identity Card<span className='text-red-600 font-extrabold'>*</span></div>
            <div className="relative">
              {
                state.id_card_front ?
                <img src={state.id_card_front} />
                :
              <label htmlFor="id_card_front" className="max-w-[400px] w-full flex flex-col items-center justify-center h-40 border-2 rounded-[8px] border-dashed bg-white shadow border-[#C7C9D9] text-[#C7C9D9] cursor-pointer text-center">
                <FaFileUpload className='h-10 w-10 text-[#555770]' />
                <div className="text-[#555770]">Click To Select And Upload The Front Of Your Identity Card</div>
              </label>
              }
                <input onChange={handleChange} type="file" required={true} id="id_card_front" className='px-4 py-2 h-12 rounded-[4px] border border-[#C7C9D9] placeholder-[#555770] w-full focus:border-[#5F30E2] invisible' />
            </div>
            <div className="relative">
              {
                state.id_card_back ?
                <img src={state.id_card_back} />
                :
              <label htmlFor="id_card_back" className="max-w-[400px] w-full flex flex-col items-center justify-center h-40 border-2 rounded-[8px] border-dashed bg-white shadow border-[#C7C9D9] text-[#C7C9D9] cursor-pointer text-center">
                <FaFileUpload className='h-10 w-10 text-[#555770]' />
                <div className="text-[#555770]">Click To Select And Upload The Back Of Your Identity Card</div>
              </label>
              }
                <input onChange={handleChange} type="file" required={true} id="id_card_back" className='px-4 py-2 h-12 rounded-[4px] border border-[#C7C9D9] placeholder-[#555770] w-full focus:border-[#5F30E2] invisible' />
            </div>
            {/* <div className="text-xs text-[#555770] font-normal flex justify-start ">{description}</div> */}
        </div>
    </div>
        </div>
        </div>
        <div className="flex items-center w-full justify-between">
        <Link href={"/page-4"} className="py-[10px] px-4 text-white bg-[#5F30E2] rounded-[4px] text-sm font-medium cursor-pointer hover:bg-[#8F6EEB] disabled:bg-[#F5F6F8] focus:ring-2 focus:border-white focus:border-2 focus:ring-[#5f30e2] disabled:text-[#8F90A6] transition-all duration-500">
            Go Back
          </Link>
            {/* <Button
              size="md"
              value="Go Back"
              click={handlePrev}
              location="end"
              disabled={router.asPath==="/page-1" ? true : false}
              type={"button"}
            /> */}
            <button type="submit" className="py-[10px] px-4 text-white bg-[#5F30E2] rounded-[4px] text-sm font-medium cursor-pointer hover:bg-[#8F6EEB] disabled:bg-[#F5F6F8] focus:ring-2 focus:border-white focus:border-2 focus:ring-[#5f30e2] disabled:text-[#8F90A6] transition-all duration-500">
            Submit
          </button>
            {/* <Button
              size="md"
              value="Submit"
              click={()=>{}}
              location="end"
              disabled={router.asPath==="/page-5" ? false : false}
              type={"submit"}
            /> */}
          </div>
        </div>
    </div>
  </form>
  )
}
