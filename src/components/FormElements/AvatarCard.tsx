'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'
import { BsUpload } from "react-icons/bs";
import { uploadImage } from '@/utils/tools';
import { DEFAULT_AVATAR_PATH } from '@/data/dummyUsers';
interface PropsTypes{
    label: string,
    alt: string,
    required?: boolean,
    disabled?:boolean,
    defaultValue?: string | ArrayBuffer | undefined,
    setImage: Dispatch<SetStateAction<string | ArrayBuffer | undefined>>,
}
const AvatarCard: React.FC<PropsTypes> = ({label, alt, required, disabled, defaultValue, setImage}) => {
  const [value, setValue] = useState<string | ArrayBuffer | undefined>((defaultValue!=="" && defaultValue!=undefined)? defaultValue:DEFAULT_AVATAR_PATH)

    const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      uploadImage(event, setImage, setValue)
    }
  return (
    <div className='w-full flex flex-col gap-1 items-start sm:items-center'>
        <label className="lg:text-sm font-medium">
            {label}
            {required && <span className='text-google-red'>*</span>}
        </label>
        {!disabled?
          <div className="w-[250px] relative aspect-square rounded-2xl bg-slate-300 border border-slate-500 border-dotted">
              <div className='w-full aspect-square rounded-2xl flex flex-col bg-[rgba(0,0,0,0.5)] text-white justify-center items-center absolute'>
                  <BsUpload size={32}/>
                  <span className='text-center text-[20px] font-normal leading-normal tracking-wide'>Ajouter l’image</span>
              </div>
              <input onChange={handleOnChange} required className='w-full absolute aspect-square rounded-2xl file:text-transparent file:hover:cursor-pointer file:border-0 file:w-full file:aspect-square file:bg-transparent' type="file" accept="image/*" />
              {value && (
                  <Image className="w-full aspect-square rounded-2xl" src={`${value}`} alt={alt} width={200} height={200}/>
              )}
          </div>
          :<Image src={`${value}`} alt={alt} priority className='rounded-2xl w-[250px] aspect-square' width={200} height={200} />
        }
        
    </div>
  )
}

export default AvatarCard