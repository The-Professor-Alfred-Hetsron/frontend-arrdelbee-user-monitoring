'use client'
import React, { useState } from 'react'
import { IoChevronDownOutline } from "react-icons/io5";

interface Country {
    name: string;
    flag: string;
    code: string;
}

interface PropsTypes{
    label: string,
    placeholder: string,
    defaultValue?: string,
    sourceList?: Array<string>,
    countryList?: Array<Country>,
    required?: boolean,
    permanentDisabled?:boolean,
    disabled?:boolean,
    setInput: (value:string)=>void,
}
const CustomDropDown:React.FC<PropsTypes> = ({label, placeholder, defaultValue, sourceList, countryList, required, permanentDisabled, disabled, setInput}) => {
    const [value, setValue] = useState<string>((defaultValue!=="" && defaultValue!=undefined)? defaultValue:"")

    const handleOnChange = (val:string) => {
        if(val!=value){
            setValue(val)
            // console.log(val)
            // console.log(val.substring(val.lastIndexOf(" - ")+3))
            setInput(val.substring(val.lastIndexOf(" - ")+3))
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
                        {countryList?.map((country) => (
                            <option key={country.code} value={`${country.flag} - ${country.code} - ${country.name}`}>
                                {`${country.flag} - ${country.code} - ${country.name}`}
                            </option>
                        ))}
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