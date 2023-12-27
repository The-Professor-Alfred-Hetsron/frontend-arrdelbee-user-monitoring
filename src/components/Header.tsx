import React from 'react'
import { APP_NAME, APP_SUB_NAME } from '@/constants/config'
import { FiMenu, FiX } from "react-icons/fi";

interface PropsTypes{
    navStatus: boolean,
    navToogler: Function
}
const Header:React.FC<PropsTypes> = ({navStatus, navToogler}) => {
    return (
        <div className="w-full p-3 bg-white rounded-2xl shadow drop-shadow-lg flex flex-row justify-start items-center gap-2">
            <button onClick={()=>navToogler(!navStatus)} className='text-secondary-yellow'>
            {navStatus? <FiX size={24}/>
                : <FiMenu size={24}/>
            }
            </button>
            <div className="w-full flex flex-row text-lg sm:text-sm justify-start items-baseline gap-2 sm:gap-1">
                <h1 className="text-logo-yellow font-bold">{APP_NAME}</h1>
                -
                <h1 className="">{APP_SUB_NAME}</h1>
            </div>
        </div>
    )
}

export default Header