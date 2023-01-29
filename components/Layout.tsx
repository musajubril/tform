import React from 'react'
import { FaMailBulk, FaEye } from 'react-icons/fa'
import AuthForm from './AuthForm'
import { WebFormImage, MobileFormImage } from './FormImage'

export default function Layout({logo, inputs, prev, next}) {
  return (
    <div className="grid w-full min-h-screen grid-cols-1 gap-10 mx-auto sm:grid-cols-2">
    <WebFormImage logo={logo} />
    <div className="flex flex-col justify-center min-h-screen col-span-1 px-4 bg-gray-50 sm:py-12 sm:px-6 lg:px-8">
      <MobileFormImage logo={logo} title="Employment Form" />
      <AuthForm
        inputs={inputs}
        prev={prev}
        next={next}
      />
    </div>
  </div>
  )
}
