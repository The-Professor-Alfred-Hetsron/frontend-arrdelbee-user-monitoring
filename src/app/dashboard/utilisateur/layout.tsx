'use client'
import {
  TabBar
} from "@/components"
import { USER_TAB_LINKS } from "@/constants/tabsLinks"
import { usePathname } from 'next/navigation'


export default function UserLayout({
    children,
  }: {
    children: React.ReactNode
  }){

    const PATHNAME = usePathname()
    const LINK_ARRAY = PATHNAME.split("/")
    const PARENT = "Utilisateur"
    const CHILD = PARENT.toUpperCase() === LINK_ARRAY[LINK_ARRAY.length-1].toUpperCase()? USER_TAB_LINKS[0].label : LINK_ARRAY[LINK_ARRAY.length-1]
    
    return(
      <>
        <TabBar
            parent={PARENT}
            child={CHILD}
            tabLinkItems={USER_TAB_LINKS}
        />
        {children}
      </>
    )
  }