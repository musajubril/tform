import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'
import { SelectType } from '../interfaces'

export default function Select({label, value, change, required, id, description, disabled, options}: SelectType) {
  return (
    <div>
        <div className="flex-col flex gap-[6px]">
            <div className="text-[#28293D]">{label}{required && <span className='text-red-600 font-extrabold'>*</span>}</div>
            <div className="h-8 relative">
                <select required={required} onChange={change} id={id} value={value}  className='px-4 h-8 rounded-[4px] border border-[#C7C9D9] placeholder-[#555770] w-full focus:border-[#5F30E2] ' disabled={disabled}>
                    <option value="">Please Select</option>
                        {
                            options.map((opt, i)=>(
                                <option value={opt} key={i} selected={opt===value}>
                                    {opt}
                                </option>
                            ))
                        }
                    </select>
            </div>
            <div className="text-xs text-[#555770] font-normal flex justify-start ">{description}</div>
        </div>
    </div>
  )
}
