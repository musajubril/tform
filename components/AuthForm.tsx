import React from "react";
import Button from "./Button";
import { AuthFormType, AuthFormInputType } from "../interfaces";
import Input from "./Input";
import Select from "./Select";
import { useRouter } from 'next/router';
import Link from "next/link";

export default function AuthForm({ inputs, prev, next }:AuthFormType) {
    const router = useRouter()
    console.log(router)
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 bg-gray-50 sm:rounded-lg sm:px-5">
        <form onSubmit={next} className="space-y-1">
          {inputs.map((inp: AuthFormInputType, i: number) => (
            <>
            {
                inp.inp_type==="input" ?
                <Input
                key={i}
                label={inp.label}
                type={inp.type}
                value={inp.value}
                change={inp.change}
                required={inp.required}
                id={inp.id}
                placeholder={inp.placeholder}
                description={inp.description}
                disabled={false}
                />
                :
                <Select key={i}
                label={inp.label}
                value={inp.value}
                change={inp.change}
                required={inp.required}
                id={inp.id}
                description={inp.description}
                disabled={false} options={inp.options} />
            }
            </>
          ))}
          <div className="flex items-center w-full justify-between">
          <Link href={prev} className="py-[10px] px-4 text-white bg-[#5F30E2] rounded-[4px] text-sm font-medium cursor-pointer hover:bg-[#8F6EEB] disabled:bg-[#F5F6F8] focus:ring-2 focus:border-white focus:border-2 focus:ring-[#5f30e2] disabled:text-[#8F90A6] transition-all duration-500">
            Go Back
          </Link>
            {/* <Button
              size={"md"}
              value="Go Back"
              click={prev}
              location={"end"}
              disabled={router.asPath==="/page-1" ? true : false}
              type={"button"}
            /> */}
            <Button
              size={"md"}
              value="Next"
              click={()=>{}}
              location={"end"}
              disabled={router.asPath==="/page-5" ? true : false}
              type={"submit"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
