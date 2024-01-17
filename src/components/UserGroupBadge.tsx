import { USER_GROUP } from '@/constants/user';
import React from 'react'
import { GoDotFill } from "react-icons/go";

interface PropsTypes{
    groupLabel: USER_GROUP
}
const UserGroupBadge:React.FC<PropsTypes> = ({groupLabel}) => {
  return (
    <>
        {
            groupLabel === "Classique" &&
            <div className="w-max flex gap-2 items-center border border-white rounded-2xl px-4 py-1 text-google-green bg-light-green">
                <GoDotFill size={20}/>
                <span className="">{groupLabel}</span>
            </div>
        }
        {
            groupLabel === "Abonné" &&
            <div className="w-max flex gap-2 items-center border border-white rounded-2xl px-4 py-1 text-secondary-yellow bg-tertiary-lightYellow">
                <GoDotFill size={20}/>
                <span className="">{groupLabel}</span>
            </div>
        }
        {
            groupLabel === "Acteur PTF" &&
            <div className="w-max flex gap-2 items-center border border-white rounded-2xl px-4 py-1 text-primary-blue bg-lightBlue">
                <GoDotFill size={20}/>
                <span className="">{groupLabel}</span>
            </div>
        }
        {
            groupLabel === "Organisation" &&
            <div className="w-max flex gap-2 items-center border border-white rounded-2xl px-4 py-1 text-brown bg-light-brown">
                <GoDotFill size={20}/>
                <span className="">{groupLabel}</span>
            </div>
        }
        {
            groupLabel === "Agent ArrdelBee" &&
            <div className="w-max flex gap-2 items-center border border-white rounded-2xl px-4 py-1 text-accent-purple bg-light-purple">
                <GoDotFill size={20}/>
                <span className="">{groupLabel}</span>
            </div>
        }
        {
            groupLabel === "Administrateur" &&
            <div className="w-max flex gap-2 items-center border border-white rounded-2xl px-4 py-1 text-accent-purple bg-primary-blue">
                <GoDotFill size={20}/>
                <span className="">{groupLabel}</span>
            </div>
        }
    </>
  )
}

export default UserGroupBadge