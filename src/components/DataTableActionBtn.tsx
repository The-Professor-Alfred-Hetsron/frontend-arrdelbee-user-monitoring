import React from 'react'
import { FaRegEye, FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

interface ActionBtnsPropsType{
  enableDetailsBtn?: boolean,
  enableUpdateBtn?: boolean,
  enableDeleteBtn?: boolean,
  enableAllBtn: boolean,
  detailAction?: ()=>void,
  updateAction?: ()=>void,
  deleteAction?: ()=>void,
}

const DataTableActionBtn:React.FC<ActionBtnsPropsType> = ({
  enableDetailsBtn, enableUpdateBtn, enableDeleteBtn, enableAllBtn, detailAction, updateAction, deleteAction
}) => {
  return (
    <>
      {
        (enableDetailsBtn || enableAllBtn) &&
        <button type="button" onClick={detailAction} className="p-2 border border-google-blue text-google-blue rounded-lg bg-white hover:text-white hover:bg-google-blue"><FaRegEye size={20}/></button>
      }
      {
        (enableUpdateBtn || enableAllBtn) &&
        <button type="button" onClick={updateAction} className="p-2 border border-google-green text-google-green rounded-lg bg-white hover:text-white hover:bg-google-green" ><MdEdit size={20}/></button>
      }
      {
        (enableDeleteBtn || enableAllBtn) &&
        <button type="button" onClick={deleteAction} className="p-2 border border-google-red text-google-red rounded-lg bg-white hover:text-white hover:bg-google-red"><FaTrashAlt size={20}/></button>
      }
    </>
  )
}

export default DataTableActionBtn