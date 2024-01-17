'use client'
import React, { useState } from 'react'
import { TableCardFilters } from '.'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { HeaderDataTableType } from '@/types/dataTables';
import { USER_GROUPS_BADGES } from '@/constants/user';
import {UserGroupBadge} from '.';

interface PropsTypes{
  filterList: Array<string>,
  headerList: Array<HeaderDataTableType>,
  dataList: Array<any>,
  setSelectedData: (selectedList: Array<any>) => void
}

const CustomDataTable:React.FC<PropsTypes> = ({filterList, headerList, dataList, setSelectedData}) => {

  const [numberedDataList, setNumberedDataList] = useState<Array<any>>(dataList.map((data:Object, index:number)=>{
    return {...data, num:index+1}
  }));
  const [selectedItems, setSelectedItems] = useState<Array<any>>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const sortArrayByFilter = (filter:string) => {
    console.log(filter)
  }

  const setSelectedDataItems = (value: Array<any>) => {
    console.log(value)
  }

  const GroupBadgeTemplate = (rowData:any) =>{
    const BADGE_STYLE = USER_GROUPS_BADGES.find((group)=>{
      return group.groupLabel === rowData.group
    })

    return <UserGroupBadge {...BADGE_STYLE}/>
  }

  return (
    <div className='w-full flex flex-col gap-3'>
      {/* <TableCardFilters
        filterList={filterList}
        setFilter={sortArrayByFilter}
      /> */}


    <DataTable
      value={numberedDataList}
      dataKey="id"
      tableStyle={{ minWidth: '50rem' }}
      scrollable
      stripedRows
      paginator rows={5}
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      rowsPerPageOptions={[5, 10, 25, 50]}
      removableSort
      selectionMode="checkbox"
      selection={selectedItems}
      onSelectionChange={(e) => setSelectedDataItems(e.value)}
      filterDisplay="row"
      globalFilterFields={['firstName', 'secondName', 'email', 'address']}
      emptyMessage="Aucune correspondance"
    >
      {/* <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column> */}
        {
          headerList.map((title:HeaderDataTableType, index:number)=>{
            if(title.header === "Groupe"){
              return <Column 
                        key={index}
                        sortable={title.sortable}
                        field={title.field}
                        header={title.header}
                        style={title.minWidth}
                        body={GroupBadgeTemplate}
                        filter filterPlaceholder={`Rechercher par ${title.header}`}
                      >
                      </Column>
            }else{
              return <Column 
                        key={index}
                        sortable={title.sortable}
                        field={title.field}
                        header={title.header}
                        style={title.minWidth}
                        filter filterPlaceholder={`Rechercher par ${title.header}`}
                      >
                      </Column>
            }
          })
        }
    </DataTable>
    </div>
  )
}

export default CustomDataTable