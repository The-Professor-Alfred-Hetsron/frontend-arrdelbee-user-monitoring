'use client'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { validateFromRegEx } from "@/utils/tools";


interface PropsTypes{
    label: string,
    placeholder: string,
    type: "text" | "email" | "password",
    defaultValue?: string,
    regex?: RegExp,
    errorMsg?: string,
    required?: boolean,
    editable:boolean,
    testValue?: string,
    setInput: (value:string)=>void,
}

const CustomInputField:React.FC<PropsTypes> = ({label, placeholder, type, defaultValue, regex, errorMsg, required, testValue, editable, setInput}) => {
    const [value, setValue] = useState<string>((defaultValue!=="" && defaultValue!=undefined)? defaultValue:"")
    const [showPWD, setShowPWD] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);


    const handleOnChange = (val:string) => {
        setValue(val)
        if(val != ""){
            setInput(val)
            if(regex!=undefined){
                const VALID_FLAG:boolean = validateFromRegEx(val, regex, setInput) && (testValue!=undefined? testValue === value: true)
                setShowError(!VALID_FLAG)
            }
        }
    }
  return (
    <div className='w-full flex flex-col gap-1'>
        <label className="lg:text-sm font-medium">
            {label}
            {required && <span className='text-google-red'>*</span>}
        </label>

        {editable?
            <>
                {(type === "text" || type === "email") && <input type={type} name={type} id={label}
                    className={`w-full py-3 px-4 rounded-lg text-black peer border focus:outline-none text-base focus-within:border-google-blue ${showError && 'invalid:border-google-red invalid:text-google-red'}`}
                    placeholder={placeholder}
                    value={value}
                    required={required}
                    onChange={(e)=>{handleOnChange(e.target.value)}}
                />}

                {type === "password" &&
                <div className='w-full relative'>
                    <button type='button' onClick={()=>{setShowPWD(!showPWD)}} className="text-grayToneStroke hover:text-google-blue absolute right-3 top-[18px]">
                        {showPWD? <FaEyeSlash size={25} className=""/> : <FaEye size={25} className=""/>}
                    </button>
                    {!showPWD?
                        <input type={type} name={type} id={label}
                            className={`w-full py-3 px-4 rounded-md text-black peer border focus:outline-none text-base focus-within:border-google-blue ${showError && 'invalid:border-google-red invalid:text-google-red'}`}
                            placeholder={placeholder}
                            value={value}
                            required={required}
                            onChange={(e)=>{handleOnChange(e.target.value)}}
                        />
                    :
                        <input type="text" name={type} id={label}
                            className={`w-full py-3 px-4 rounded-md text-black peer border focus:outline-none text-base focus-within:border-google-blue ${showError && 'invalid:border-google-red invalid:text-google-red'}`}
                            placeholder={placeholder}
                            value={value}
                            required={required}
                            onChange={(e)=>{handleOnChange(e.target.value)}}
                        />
                    }
                </div>}

                {showError && <span className="peer-invalid:visible text-google-red text-sm">{errorMsg}</span>}
            </>:
            <span className='w-full py-3 px-4 rounded-lg text-grayTone2 bg-white'>
                {value}
            </span>
        }

    </div>
  )
}

export default CustomInputField