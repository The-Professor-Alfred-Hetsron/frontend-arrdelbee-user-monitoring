import { PaymentMethod, PAYMENT_METHODS_IMG, Payments } from '@/types/user'
import Image from 'next/image'
import React from 'react'

interface PropsTypes{
    method:PaymentMethod,
    disabled: boolean,
    editAction: ()=>void,
    removeAction: ()=>void
}
const PaymentCard:React.FC<PropsTypes> = ({method, disabled, editAction, removeAction}) => {
    const {type, number, expriresAt} = method
    const getImageFromType = (type:Payments) => {
        const IMG_PATH = PAYMENT_METHODS_IMG.find(item=>{
            return item.type === type
        })?.img
        return IMG_PATH
    }
    const [month, date, year] = new Date(`${expriresAt}`).toLocaleDateString("en-US").split("/");
  return (
    <div className='lg:w-full p-2 flex flex-col gap-2 rounded-lg bg-white'>
        <div className="flex flex-row gap-1">
            <Image src={`${getImageFromType(type)}`} alt={type} className='w-[100px] aspect-video rounded-md' priority width={200} height={200}/>
            <div className="flex flex-col gap-1">
                <span className="font-bold">...{number.substring(number.length-3)}</span>
                {expriresAt?
                    <span className="text-grayTone2 text-xs">Expire Le {month}/{year}</span>
                    :
                    <span className="text-grayTone2 text-xs">{type}</span>
                }
                
            </div>
        </div>

        {!disabled && <div className="pt-2 border-t border-grayToneStroke flex flex-row justify-between text-sm">
            <button type="button" onClick={editAction} className="py-1 px-1.5 uppercase rounded-md text-google-green font-bold hover:bg-google-green hover:text-white">EDITER</button>
            <button type="button" onClick={removeAction} className="py-1 px-1.5 uppercase rounded-md text-google-red font-bold hover:bg-google-red hover:text-white">RETIRER</button>
        </div>}
    </div>
  )
}

export default PaymentCard