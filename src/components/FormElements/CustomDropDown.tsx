'use client'
import React, { useState } from 'react'
import { IoChevronDownOutline } from "react-icons/io5";

interface PropsTypes{
    label: string,
    placeholder: string,
    defaultValue?: string,
    sourceList: Array<string>,
    required?: boolean,
    permanentDisabled?:boolean,
    disabled?:boolean,
    setInput: (value:string)=>void,
}
const CustomDropDown:React.FC<PropsTypes> = ({label, placeholder, defaultValue, sourceList, required, permanentDisabled, disabled, setInput}) => {
    const [value, setValue] = useState<string>((defaultValue!=="" && defaultValue!=undefined)? defaultValue:"")

    const handleOnChange = (val:string) => {
        if(val!=value){
            setInput(val)
            setValue(val)
        }
    }

  return (
    <div className='w-full flex flex-col gap-1'>
        <label className="lg:text-sm font-medium">
            {label}
            {required && <span className='text-google-red'>*</span>}
        </label>

        {permanentDisabled ?
            <div className="w-full py-3 px-4 rounded-lg text-textDarkTone bg-grayTone3 flex flex-row items-center">
                <span className="w-full text-left">{value}</span>
                <IoChevronDownOutline size={24}/>
            </div>:
            <>
                {!disabled ?
                <div className="w-full bg-white rounded-lg pr-2 focus-within:border focus-within:border-google-blue">
                    <select id={label} value={value}
                        className="w-full py-3 px-4 rounded-lg text-black bg-white focus:outline-none text-base"
                        onChange={(e)=>handleOnChange(e.target.value)}
                    >
                        {placeholder && <option value="" disabled selected hidden >{placeholder}</option>}
                        {/* {value && <option value="" disabled selected hidden>{value}</option>} */}
                        {sourceList?.map((option:any, index:number) =>{
                            return <option 
                                        key={index}
                                        value={option}
                                        className='py-4 px-5 text-base h-4'
                                    >
                                        {option}
                                    </option>
                        })}
                    </select>
                </div>:

                    <div className="w-full py-3 px-4 rounded-lg text-grayTone2 bg-white flex flex-row items-center">
                        <span className="w-full text-left">{value}</span>
                        <IoChevronDownOutline size={24}/>
                    </div>
                }
            </>
        }

    </div>
  )
}

export default CustomDropDown