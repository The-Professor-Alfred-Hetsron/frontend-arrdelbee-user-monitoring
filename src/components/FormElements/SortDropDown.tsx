'use client'
import React, { useState } from 'react'

interface PropsTypes{
    label: string,
    sourceList: Array<string>,
    placeholder:string,
    setInput: (value:string)=>void,
}

const SortDropDown:React.FC<PropsTypes> = ({label, sourceList, placeholder, setInput}) => {
    
    const [value, setValue] = useState<string>("")

    const handleOnChange = (val:string) => {
        if(val!=value){
            setInput(val)
            setValue(val.substring(val.lastIndexOf(":")))
        }
    }
  
    return (
        <div className="w-2/5 sm:w-full h-[50px] pr-2 bg-primary-blue border-2 shadow-md border-white rounded-lg">
            <select id="Sort-Table-ByOption" value={value}
                className="w-full h-full py-2 px-2 rounded-lg text-white bg-primary-blue focus:outline-none text-base"
                onChange={(e)=>handleOnChange(e.target.value)}
            >
                <option value="" disabled selected hidden >{placeholder}</option>
                {sourceList?.map((option:any, index:number) =>{
                    return <option 
                                key={index}
                                value={option}
                                className='py-4 px-5 text-base h-4'
                            >
                                {`${label}: ${option}`}
                            </option>
                })}
            </select>
        </div>
  )
}

export default SortDropDown