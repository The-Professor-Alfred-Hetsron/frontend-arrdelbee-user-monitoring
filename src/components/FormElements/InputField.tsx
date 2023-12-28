import React, { SetStateAction, useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { validateFromRegEx } from "@/utils/form";


interface PropsTypes{
    label: string,
    placeholder: string,
    type: "text" | "email" | "password",
    defaultValue?: string,
    regex: RegExp,
    setInput: (value:SetStateAction<string>)=>void,
}

const InputField:React.FC<PropsTypes> = ({label, placeholder, type, defaultValue, regex, setInput}) => {
    const [value, setValue] = useState<string>((defaultValue!=="" && defaultValue!=undefined)? defaultValue:"")
    const [showPWD, setShowPWD] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);


    const handleOnChange = (val:string) => {
        setValue(val)
        console.log("Input = ",val)
        if(val !== ""){
            const VALID_FLAG:boolean = validateFromRegEx(val, regex, setInput)
            setShowError(!VALID_FLAG)
        }
        }
  return (
    <div className='w-full flex flex-col gap-1'>
        <label className="lg:text-sm font-medium">{label}</label>

        {(type === "text" || type === "email") && <input type={type} name={type} id={label}
            className={`py-3 px-4 rounded-md text-black peer border focus:outline-none border-grayToneStroke text-base w-full focus-within:border-google-blue ${showError && 'invalid:border-google-red invalid:text-google-red'}`}
            placeholder={placeholder}
            value={value}
            required
            onChange={(e)=>{handleOnChange(e.target.value)}}
        />}

        {type === "password" &&
        <div className='w-full relative'>
            <button type='button' onClick={()=>{setShowPWD(!showPWD)}} className="text-grayToneStroke hover:text-google-blue absolute right-3 top-[18px]">
                {showPWD? <FaEyeSlash size={25} className="" /> : <FaEye size={25} className="" />}
            </button>
            {!showPWD?
                <input type={type} name={type} id={label}
                    className={`py-3 px-4 rounded-md text-black peer border focus:outline-none border-grayToneStroke text-base w-full focus-within:border-google-blue ${showError && 'invalid:border-google-red invalid:text-google-red'}`}
                    placeholder={placeholder}
                    value={value}
                    required
                    onChange={(e)=>{handleOnChange(e.target.value)}}
                />
            :
                <input type="text" name={type} id={label}
                    className={`py-3 px-4 rounded-md text-black peer border focus:outline-none border-grayToneStroke text-base w-full focus-within:border-google-blue ${showError && 'invalid:border-google-red invalid:text-google-red'}`}
                    placeholder={placeholder}
                    value={value}
                    required
                    onChange={(e)=>{handleOnChange(e.target.value)}}
                />
            }
        </div>}

        {showError && <span className="peer-invalid:visible text-google-red">Ce {placeholder} est invalid, bien vouloir entrez une valeur valide</span>}

    </div>
  )
}

export default InputField