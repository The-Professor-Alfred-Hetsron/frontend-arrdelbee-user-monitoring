'use client'
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";

interface PropsTypes{
    setInput: (value:string)=>void,
}

const SearchInputField:React.FC<PropsTypes> = ({setInput}) => {

    const [value, setValue] = useState<string>("")

    const handleOnChange = (val:string) => {
        if(val!=value){
            setValue(val)
            setInput(val)
        }
    }

  return (
    <div className='group w-full h-[50px] focus-within:border focus-within:border-google-blue rounded-lg px-3 py-2 bg-white flex flex-row gap-1'>
        <IoSearch size={28} className="text-grayTone3 group-focus-within:text-google-blue"/>
        <input
            type="search"
            name="search-user"
            className='w-full focus:outline-none'
            placeholder='Rechercher...'
            value={value}
            onChange={(e)=>{handleOnChange(e.target.value)}}
        />
    </div>
  )
}

export default SearchInputField