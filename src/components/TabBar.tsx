'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import TabLinkType from '@/types/tabLinks';
import { FaChevronRight } from "react-icons/fa6";
import '@/app/globals.css'
interface PropsTypes{
    parent: string,
    child: string,
    tabLinkItems: Array<TabLinkType>
}
const TabBar:React.FC<PropsTypes> = ({parent, child, tabLinkItems}) => {  
    const PATHNAME = usePathname()
    return (
       <div className="w-full flex flex-col gap-2">
            <div className="w-full overflow-x-hidden flex flex-row gap-2 justify-start items-center uppercase text-xl sm:text-base sm:gap-1">
                <span className="text-grayTone2">{parent}</span>
                <FaChevronRight size={20} className="text-grayTone2"/>
                <span className="text-secondary-yellow sm:text-primary-blue text-balance">{child}</span>
            </div>

            <nav className="w-full p-1 bg-gradient-to-r overflow-x-auto from-white to-white-layout rounded-xl shadow drop-shadow-lg flex flex-row justify-start items-center gap-2 tab-bar">
                {
                    tabLinkItems.map((item:TabLinkType, index:number)=>{
                        const ISACTIVE = PATHNAME === item.href
                        return <Link
                                    key={index}
                                    className={`text-center p-2 rounded-xl ${ISACTIVE?"bg-primary-blue text-white hover:text-tertiary-lightYellow":"text-grayTone2 hover:text-primary-blue hover:font-bold"}`}
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                    })
                }
            </nav>
       </div>
    )
}

export default TabBar