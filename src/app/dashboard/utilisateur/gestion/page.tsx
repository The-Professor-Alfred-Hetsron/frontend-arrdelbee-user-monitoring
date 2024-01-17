"use client"
import { 
    SearchInputField,
    SortDropDown,
    TableCardFilters,
    UserGroupBadge,
    CustomDataTable
} from "@/components"
import { USER_DATATABLE_HEADERS } from "@/constants/dataTables"
import { USER_FILTERS } from "@/constants/filters"
import { USER_GROUPS } from "@/constants/user"
import { USER_DATATABLE } from "@/data/dummyTableData"
import { HeaderDataTableType, UserDataTableType } from "@/types/dataTables"
import { useState } from "react"
import "@/app/globals.css"

export default function Manage(){
    
    const [selectedUsers, setSelectedUsers] = useState<Array<UserDataTableType>>([]);

    const sortArrayBySearch = (value:string) => {
        console.log(value)
    }
    const sortArrayByOption = (option:string) => {
        console.log(option)
    }
    const sortArrayByFilter = (filter:string) => {
        console.log(filter)
    }
    

    return(
        <div className="w-full h-full p-4 bg-white-layout rounded-xl flex flex-col gap-4 overflow-hidden">
            <div className="w-full flex flex-row sm:flex-col gap-2 justify-between">
                <SearchInputField
                    setInput={sortArrayBySearch}
                />
                <SortDropDown
                    label="Groupe"
                    sourceList={USER_GROUPS}
                    setInput={sortArrayByOption}
                />
            </div>

            <TableCardFilters
                filterList={USER_FILTERS}
                setFilter={sortArrayByFilter}
            />

            <div className="pr-2 pb-2 flex flex-col gap-2 overflow-auto rounded-scrollbar">
                {/* custom Data Table, PrimeReact was too hard to use*/}
                <div className="w-[1500px] sticky top-0 p-2 rounded-lg border-2 border-grayTone3 bg-table-header-white text-grayTone3 flex gap-1 justify-between">
                    {/* Data Table Header */}
                    {
                        USER_DATATABLE_HEADERS.map((header:HeaderDataTableType, index:number)=>{
                            return <span key={index} className="w-max text-left" style={header.minWidth}>{header.header}</span>
                        })
                    }
                    <span className="w-max">Action</span>
                </div>
                <div className="flex flex-col gap-2">
                    {/* Data Table Body */}
                    {
                        USER_DATATABLE.map((user:UserDataTableType, index:number)=>{
                            return <div key={index} className="w-[1500px] p-2 rounded-lg bg-white text-black flex gap-1">
                                        <span className="w-[30px] text-left">{index+1}</span>
                                        <span className="w-[200px] text-left">{user.firstName}</span>
                                        <span className="w-[200px] text-left">{user.secondName}</span>
                                        <span className="w-[200px] text-left">{user.email}</span>
                                        <span className="w-[200px] text-left">{user.post}</span>
                                        <span className="w-[200px] text-left">{user.address}</span>
                                        <span className="w-[200px] text-left">{user.lastActifDate}</span>
                                        <span className="w-[200px] text-left">{<UserGroupBadge groupLabel={user.group}/>}</span>
                                        <span className="">Action</span>
                                        {/* {
                                            USER_DATATABLE_HEADERS.map((header:HeaderDataTableType)=>{
                                                if(Object.hasOwn(user,header.field)){
                                                    return <span className="w-max text-left" style={header.minWidth}>{user[`${header.field}`]}</span>
                                                }
                                            })
                                        } */}
                                    </div>
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}