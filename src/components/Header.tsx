'use client'
import React, { useEffect, useState } from 'react'
import { APP_NAME, APP_SUB_NAME } from '@/constants/config'
import { FiMenu, FiX } from "react-icons/fi";
import { DUMMY_USER_PROFILE, DUMMY_AVATAR_PATH, DEFAULT_AVATAR_PATH } from '@/data/dummyUsers';
import Image from 'next/image';

interface PropsTypes{
    navStatus: boolean,
    navToogler: Function
}
const Header:React.FC<PropsTypes> = ({navStatus, navToogler}) => {
    const [isOnline, setIsOnline] = useState<boolean>(true);
    
    const AVATAR:string = isOnline?DUMMY_AVATAR_PATH:DEFAULT_AVATAR_PATH
    const USERNAME:string = `${DUMMY_USER_PROFILE.firstName} ${DUMMY_USER_PROFILE.secondName}`
    const EMAIL:string = DUMMY_USER_PROFILE.email


    useEffect(() => {
        // Fetch API Here
        // Check Online API Here
    }, []);

    return (
        <div className="w-full p-3 bg-white rounded-2xl shadow drop-shadow-lg flex flex-row justify-start items-center gap-2">
            <button onClick={()=>navToogler(!navStatus)} className='text-secondary-yellow'>
            {navStatus? <FiX size={24}/>
                : <FiMenu size={24}/>
            }
            </button>
            <div className="w-full flex flex-row sm:flex-col sm:gap-1">
                <div className="w-full flex flex-row text-lg sm:text-sm justify-start items-center gap-2 sm:gap-1">
                    <h1 className="text-logo-yellow font-bold">{APP_NAME}</h1>
                    -
                    <h1 className="">{APP_SUB_NAME}</h1>
                </div>
                <div className="flex flex-row gap-2 items-center sm:pt-2 sm:border-t sm:border-t-grayToneStroke">
                    <div className="w-[50px] aspect-square relative">
                        <Image src={AVATAR} alt={USERNAME} className='w-full rounded-full aspect-square absolute border-2 border-grayToneStroke' priority width={200} height={200}/>
                        <div className={`w-1.5 aspect-square absolute right-0 rounded-full ${isOnline?"bg-google-green":"bg-google-red"}`}></div>
                    </div>
                    <div className="flex flex-col text-sm">
                        <span className="font-bold">{USERNAME}</span>
                        <span className="text-grayTone2">{EMAIL}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header