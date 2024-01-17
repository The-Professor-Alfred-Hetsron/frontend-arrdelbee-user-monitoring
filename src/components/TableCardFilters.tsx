'use client'
import React, { useState } from 'react'
import "@/app/globals.css"
import { DataTableFilterType } from '@/types/dataTables'

interface PropsTypes{
    filterList: Array<DataTableFilterType>,
    setFilter: (value:string)=>void,
}

const TableCardFilters:React.FC<PropsTypes> = ({filterList, setFilter}) => {

    const [value, setValue] = useState<string>("")

    const handleOnChange = (val:string) => {
        if(val!=value){
            setValue(val)
            setFilter(val)
        }
    }
    
  return (
    <div className='w-full flex flex-row'>
        <span className="font-medium">Filtre rapide :</span>
        <div className="flex flex-wrap gap-2">

        </div>
    </div>
  )
}

export default TableCardFilters