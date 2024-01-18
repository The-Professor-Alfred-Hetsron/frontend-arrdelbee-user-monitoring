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
    const [selectedFilter, setSelectedFilter] = useState<string>("");

    const handleOnFilterSelect = (val:string) => {
        console.log(value)
        console.log(val)
        if(val===value){
            setSelectedFilter("")
            setFilter("")
            setValue("")
        }else{
            setSelectedFilter(val)
            setFilter(val)
            setValue(val)
        }
    }
    
  return (
    <div className='w-full flex flex-row items-baseline gap-2'>
        <span className="w-[150px] font-medium">Filtre rapide :</span>
        <div className="flex flex-wrap gap-2">
            {
                filterList.map((filter:DataTableFilterType, index:number)=>{
                    return <button type="button" onClick={()=>{handleOnFilterSelect(filter.value)}} className={(selectedFilter === filter.value)?"rounded-3xl px-2 py-1 bg-white border-2 border-secondary-yellow text-black font-bold":"rounded-3xl px-2 py-1 bg-white border-2 border-grayTone3 text-grayTone3"}>
                        {filter.label}
                    </button>
                })
            }
        </div>
    </div>
  )
}

export default TableCardFilters