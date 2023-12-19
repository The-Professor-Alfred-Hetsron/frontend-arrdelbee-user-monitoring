import React from 'react'
import { APP_NAME, APP_SUB_NAME } from '@/constants/config'
import { FiMenu, FiX } from "react-icons/fi";

interface PropsTypes{
    navStatus: boolean,
    navToogler: Function
}
const Header:React.FC<PropsTypes> = ({navStatus, navToogler}) => {
    return (
        <div className="p-3 bg-white rounded-2xl shadow drop-shadow-lg flex flex-row justify-center items-center">
            <div className="w-full flex flex-row justify-start items-center gap-2">
                <button onClick={()=>navToogler(!navStatus)} className='text-secondary-yellow'>
                {navStatus? <FiX size={24}/>
                    : <FiMenu size={24}/>
                }
                </button>
                <h1 className="text-logo-yellow text-lg font-bold">{APP_NAME}</h1>
                -
                <h1 className="text-lg">{APP_SUB_NAME}</h1>
            </div>
        </div>
    )
}

export default Header