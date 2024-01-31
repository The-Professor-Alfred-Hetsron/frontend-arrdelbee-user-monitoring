"use client"
import { USER_PATH } from "@/constants/tabsLinks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home(){
    const router = useRouter()
    // useEffect(() => {
    //     router.push(USER_PATH)
    // }, []);
    return(
        <div className="">
            {/* Put your Content Here */}
            Dashboard Home
        </div>
    )
}