'use client'
import React, { useState } from 'react'

interface PropsTypes{
    label: string,
    defaultValue?: string,
    required?: boolean,
    disabled?:boolean,
    setInput: (value:string)=>void,
}
const CustomDateInput:React.FC<PropsTypes> = ({label, defaultValue,required, disabled,setInput }) => {
    const TODAY = `${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(-2)}-${("0" + new Date().getDate()).slice(-2)}`
    const [value, setValue] = useState<string>((defaultValue!=="" && defaultValue!=undefined)? defaultValue:TODAY)
    
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

            {!disabled?
                <input type="date" name={label} id={label}
                    className="w-full py-3 px-4 rounded-lg text-black peer border focus:outline-none text-base focus-within:border-google-blue"
                    value={value}
                    required={required}
                    onChange={(e)=>{handleOnChange(e.target.value)}}
                />:
                <span className='w-full py-3 px-4 rounded-lg text-grayTone2 bg-white'>
                    {value}
                </span>
            }
        </div>
  )
}

export default CustomDateInput