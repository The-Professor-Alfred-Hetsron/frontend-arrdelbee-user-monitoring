'use client'
import {
  TabBar
} from "@/components"
import { MONITORING_TAB_LINKS } from "@/constants/tabsLinks"
import { usePathname } from 'next/navigation'



export default function MonitoringLayout({
    children,
  }: {
    children: React.ReactNode
  }){
    const PATHNAME = usePathname()
    const LINK_ARRAY = PATHNAME.split("/")
    const PARENT = "Monitoring"
    const CHILD = PARENT.toUpperCase() === LINK_ARRAY[LINK_ARRAY.length-1].toUpperCase()? MONITORING_TAB_LINKS[0].label : LINK_ARRAY[LINK_ARRAY.length-1]
    
    return(
      <>
        <TabBar
            parent={PARENT}
            child={CHILD}
            tabLinkItems={MONITORING_TAB_LINKS}
        />
        {children}
      </>
    )
  }