'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import 'animate.css';
import { MenuItemType } from "@/types/sidebarNavigation"
import { APP_NAME, APP_SUB_NAME } from '@/constants/config'
import { TbLogout2 } from "react-icons/tb";
import { SideBarNavItem } from "@/components"
import { FaUsers } from "react-icons/fa";
import { MdMonitorHeart } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { USER_PATH, MONITORING_PATH } from '@/constants/tabsLinks'


interface PropsType{
    navToogler: Function
}
const SideBar:React.FC<PropsType> = ({navToogler}) => {
    const PATHNAME = usePathname()
    const MENU_LIST: Array<MenuItemType> = [
        {
            label: "Accueil",
            href: "/dashboard",
            icon: <MdHome size={20}/>
        },{
            label: "Utilisateur",
            href: USER_PATH,
            icon: <FaUsers size={20}/>
        },{
            label: "Monitoring",
            href: MONITORING_PATH,
            icon: <MdMonitorHeart size={20}/>
        },
    ]
    const LOGOUT:MenuItemType = {
        label: "Déconnexion",
        href: "/",
        icon: <TbLogout2 size={20}/>
    }
    const PATH_ARRAY: Array<string> = PATHNAME.toLowerCase().split("/")
    return (
        <div className="w-[300px] h-full lg:w-screen lg:h-screen lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:z-50 lg:inset-0 lg:bg-black/20 lg:backdrop-blur-sm lg:dark:bg-slate-900/80">
            <button onClick={()=>navToogler(false)} className='text-amber-400 hidden lg:flex lg:absolute lg:right-8 lg:top-8'>
                <FiX size={32}/>
            </button>
            <nav className="w-[300px] h-full p-3 bg-white rounded-2xl shadow drop-shadow-lg flex flex-col justify-start items-center gap-2 animate__animated animate__fadeInLeft">
                <div className="w-full flex flex-col gap-2 justify-start items-center">
                    <Image src="/assets/img/logo.png" alt={`${APP_NAME} Logo`} width={100} height={100} className='w-[120px] aspect-square'/>
                    <h1 className="text-logo-yellow text-2xl font-bold">{APP_NAME}</h1>
                    <h1 className="text-lg">{APP_SUB_NAME}</h1>
                </div>

                <div className="w-full h-full overflow-y-auto p-3 flex flex-col justify-start items-center">
                    <div className="w-full h-full mb-2 flex flex-col justify-start items-center gap-2 border-b border-grayToneStroke">
                        {
                            MENU_LIST.map((item:MenuItemType, index:number)=>{
                                const ISACTIVE = PATHNAME.toLowerCase().includes(item.label.toLowerCase()) || (PATH_ARRAY[PATH_ARRAY.length-1] === "dashboard" && item.label==="Accueil")
                                return <SideBarNavItem
                                            key={index}
                                            label={item.label}
                                            href={item.href}
                                            icon={item.icon}
                                            active={ISACTIVE}
                                        />
                            })
                        }
                    </div>
                    <SideBarNavItem
                        label={LOGOUT.label}
                        href={LOGOUT.href}
                        icon={LOGOUT.icon}
                    />
                </div>
            </nav>
        </div>
    )
}

export default SideBar