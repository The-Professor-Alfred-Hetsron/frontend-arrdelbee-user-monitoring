import { TabLinkType } from "@/types/tabLinks";

export const USER_PATH:string = "/dashboard/utilisateur" 
export const USER_TAB_LINKS:Array<TabLinkType> = [
    {
        label: "Profile",
        href: USER_PATH
    },
    {
        label: "Gestion",
        href: `${USER_PATH}/gestion`
    },
    // {
    //     label: "Groupe",
    //     href: `${USER_PATH}/groupe`
    // }
]

export const MONITORING_PATH:string = "/dashboard/monitoring" 
export const MONITORING_TAB_LINKS:Array<TabLinkType> = [
    {
        label: "Défaut",
        href: `${MONITORING_PATH}`
    },
]