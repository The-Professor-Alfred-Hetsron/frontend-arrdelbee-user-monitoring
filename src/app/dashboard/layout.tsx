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

        <div className="w-full px-1 flex flex-col items-start gap-4 laptop:overflow-hidden">
          <Image src="/assets/img/bee-hexagons.png" alt={`${APP_NAME} Hexagons`} priority width={200} height={200} className='w-[300px] absolute right-0 top-12 -z-10'/>
          <Header navStatus={isSideVisible} navToogler={setSideVisibility}/>
          {children}
        </div>
      </div>
    )
  }