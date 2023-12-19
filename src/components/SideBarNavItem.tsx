import React from 'react'
import Link from 'next/link';
import { MenuItemType } from "@/types/sidebarNavigation"

interface MenuItem extends MenuItemType{
    active?: boolean,
}

const SideBarNavItem:React.FC<MenuItem> = ({label, href, icon, active}) => {
  return (
    <Link href={href} className={`w-full p-3 rounded-xl flex flex-row gap-2 items-center justify-start ${active?"bg-primary-blue text-white":"text-grayTone2"} hover:bg-primary-blue hover:text-white`}>
        {icon}
        {label}
    </Link>
  )
}

export default SideBarNavItem