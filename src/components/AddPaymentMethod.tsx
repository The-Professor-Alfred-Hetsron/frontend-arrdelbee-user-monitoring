import React, { useState } from "react";
import { CustomDropDown, PaymentCardForm } from ".";
import { PAYMENT_METHOD } from "@/constants/user";
import { UserProfile } from "@/types/user";

interface PaymentMethodProps {
    isVisible : boolean,
    onClose : Function,
    name? : string,
    number? : number,
    cvv? : number,
    expiredDate? : number,
    displayUserProfile:UserProfile,
    setValue: (value:string)=>void
}

const AddPaymentMethod: React.FC<PaymentMethodProps> = ({ isVisible, onClose, displayUserProfile,  name, number, cvv, expiredDate, setValue }) => {

    const handleOnClose = (e: any) => {
        if(e.target.id === "wrapper") onClose();
    }
    
    if (!isVisible) return null
    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleOnClose}>
            <div className="flex flex-col items-center p-[10px] gap-[10px] relative w-[800px] bg-[#F5F5F9] rounded-[20px]">
                <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-full h-[65px] bg-[#FFFFFF] rounded-[20px]">
                    <span className="flex flex-row justify-center items-center px-0 py-[2px] gap-[10px] w-full h-full font-['Ubuntu'] not-italic font-normal text-[20px] leading-[23px] text-[#34A853]">ADD PAYMENT METHOD</span>
                    <div className="flex flex-row justify-start items-center py-0 gap-[10px] w-[30px] h-full">
                        <img src="/assets/img/addPaymentMethods/close.png" alt="close button" className="cursor-pointer" onClick={() => onClose()}/>
                    </div>
                </div>
                <CustomDropDown
                    placeholder="Choisissez votre methode de paiement"
                    sourceList={PAYMENT_METHOD}
                    defaultValue={displayUserProfile.preferedPaymentMethod}
                    setInput={setValue}
                />
                <PaymentCardForm 
                    preferedPaiementMethod={displayUserProfile.preferedPaymentMethod}
                    onClose={onClose}
                    userProfileData={displayUserProfile}
                />
            </div>
        </div>
    )
}

export default AddPaymentMethod