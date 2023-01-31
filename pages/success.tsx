import React from 'react'

export default function Success() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center w-full gap-2'>
        <img src="/Update.gif" className="transition-all transform duration-500 hover:scale-105" alt="" />
        <div classnmae="text-2xl text-center font-extrabold">Employment Form Submitted Successfully</div>
    </div>
  )
}
