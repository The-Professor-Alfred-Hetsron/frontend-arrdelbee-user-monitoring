'use client'
import { useState } from 'react';
import {
  SideBar,
  Header
} from "@/components"
import Image from 'next/image'
import { APP_NAME } from '@/constants/config'

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }){

    const [ isSideVisible, setSideVisibility ] = useState(true)

    return(
      <div className="w-screen h-screen flex flex-row p-3 gap-4">
        {isSideVisible && <SideBar navToogler={setSideVisibility}/>}

        <div className="h-full w-full flex flex-col gap-4">
          <Image src="/assets/img/bee-hexagons.png" alt={`${APP_NAME} Hexagons`} width={100} height={100} className='w-[250px] absolute right-0 top-10 -z-10'/>
          <Header navStatus={isSideVisible} navToogler={setSideVisibility}/>
          {children}
        </div>
      </div>
    )
  }