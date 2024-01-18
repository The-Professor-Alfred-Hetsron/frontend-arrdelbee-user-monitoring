"use client"
import { 
    SearchInputField,
    SortDropDown,
    TableCardFilters,
    UserGroupBadge,
    DataTableActionBtn,
} from "@/components"
import { USER_DATATABLE_HEADERS } from "@/constants/dataTables"
import { USER_FILTERS } from "@/constants/filters"
import { USER_GROUPS } from "@/constants/user"
import { USER_DATATABLE } from "@/data/dummyTableData"
import { HeaderDataTableType, UserDataTableType } from "@/types/dataTables"
import { useState } from "react"
import "@/app/globals.css"

export default function Manage(){
    
    const [apiUserDataList, setApiUserDataList] = useState<Array<UserDataTableType>>(USER_DATATABLE);
    const [displayUserDataList, setDisplayUserDataList] = useState<Array<UserDataTableType>>(apiUserDataList);


    const sortArrayBySearch = (value:string) => {
        // console.log(value)
        if(value !== ""){
            let tempList:Array<UserDataTableType> = [...apiUserDataList]
            tempList = apiUserDataList.filter((user)=>{
                return ((user.firstName.toLowerCase().trim().includes(value.toLowerCase().trim())) ||
                        (user.secondName.toLowerCase().trim().includes(value.toLowerCase().trim())) ||
                        (user.post.toLowerCase().trim().includes(value.toLowerCase().trim())) ||
                        (user.email.toLowerCase().trim().includes(value.toLowerCase().trim())) ||
                        (user.phone.toLowerCase().trim().includes(value.toLowerCase().trim())) ||
                        (user.country.toLowerCase().trim().includes(value.toLowerCase().trim())) ||
                        (user.language.toLowerCase().trim().includes(value.toLowerCase().trim())))
                        
            })
            if(tempList.length > 0) {
                setDisplayUserDataList(tempList)
            }
        }
        else{
            setDisplayUserDataList(apiUserDataList)
        }
    }
    const sortArrayByOption = (option:string) => {
        // console.log(option)
        if(option !== ""){
            let tempList:Array<UserDataTableType> = [...apiUserDataList]
            tempList = apiUserDataList.filter((user)=>{
                return ((user.group.toLowerCase().trim().includes(option.toLowerCase().trim()))) 
            })
            if(tempList.length > 0) {
                setDisplayUserDataList(tempList)
            }
        }
        else{
            setDisplayUserDataList(apiUserDataList)
        }
    }
    const sortArrayByFilter = (filter:string) => {
        console.log(filter)
        if(filter !== ""){
            let tempList:Array<UserDataTableType> = [...apiUserDataList]
            switch (filter) {
                case "male":
                    tempList = apiUserDataList.filter((user)=>{
                        return ((user.gender.toLowerCase().trim() === (filter.toLowerCase().trim()))) 
                    })
                    if(tempList.length > 0) {
                        setDisplayUserDataList(tempList)
                    }
                    break;
                case "female":
                    tempList = apiUserDataList.filter((user)=>{
                        return ((user.gender.toLowerCase().trim() === (filter.toLowerCase().trim()))) 
                    })
                    if(tempList.length > 0) {
                        setDisplayUserDataList(tempList)
                    }
                    break;
                default:
                    break;
            }
        }else{
            setDisplayUserDataList(apiUserDataList)
        }
    }
    

    return(
        <div className="w-full h-full p-4 bg-white-layout rounded-xl flex flex-col gap-4 laptop:overflow-hidden">
            <div className="w-full flex flex-row sm:flex-col gap-2 justify-between">
                <SearchInputField
                    setInput={sortArrayBySearch}
                    placeholder="Rechercher un utilisateur: Nom, Post, Email, Group..."
                />
                <SortDropDown
                    label="Groupe"
                    sourceList={USER_GROUPS}
                    placeholder="Filtrer par Group"
                    setInput={sortArrayByOption}
                />
            </div>

            <TableCardFilters
                filterList={USER_FILTERS}
                setFilter={sortArrayByFilter}
            />

            <div className="sm:min-h-[400px] pr-2 pb-2 flex flex-col gap-2 overflow-auto rounded-scrollbar">
                {/* custom Data Table, PrimeReact was too hard to use*/}
                <div className="w-[2000px] sticky top-0 p-2 rounded-lg border-2 border-grayTone3 bg-table-header-white text-grayTone3 font-bold flex gap-1 justify-between">
                    {/* Data Table Header */}
                    {
                        USER_DATATABLE_HEADERS.map((header:HeaderDataTableType, index:number)=>{
                            return <span key={index} className="w-max text-left" style={header.minWidth}>{header.header}</span>
                        })
                    }
                    <span className="w-[150px] text-right">Action</span>
                </div>
                <div className="flex flex-col gap-2">
                    {/* Data Table Body */}
                    {
                        displayUserDataList.map((user:UserDataTableType, index:number)=>{
                            return <div key={index} className="w-[2000px] p-2 rounded-lg bg-white text-black flex gap-1 justify-between">
                                        <span className="w-[30px] text-left">{index+1}</span>
                                        <span className="w-[200px] text-left">{user.firstName}</span>
                                        <span className="w-[200px] text-left">{user.secondName}</span>
                                        <span className="w-[300px] text-left">{user.email}</span>
                                        <span className="w-[200px] text-left">{user.post}</span>
                                        <span className="w-[200px] text-left">{user.address}</span>
                                        <span className="w-[200px] text-left">{user.lastActifDate}</span>
                                        <span className="w-[300px] text-left">{<UserGroupBadge groupLabel={user.group}/>}</span>
                                        <span className="w-[150px] flex flex-row justify-end gap-1">
                                            <DataTableActionBtn
                                                enableAllBtn={true}
                                            />
                                        </span>
                                    </div>
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}