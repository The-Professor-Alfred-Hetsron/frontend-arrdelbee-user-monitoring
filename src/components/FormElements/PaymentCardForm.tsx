import { CVV_REGEX } from "@/constants/form";
import React, { useState } from "react";
import { CustomDateInput, CustomDropDown, CustomInputField } from "..";
import { CARD_PAYMENT, MOBILE_PAYMENT } from "@/constants/user";
import { DUMMY_USER_PROFILE } from "@/data/dummyUsers";
import { PaymentMethod, Payments, UserProfile } from "@/types/user";
import { updateDataFromKey } from "@/utils/tools";

interface PaymentMethodProps {
    preferedPaiementMethod : string,
    name? : string,
    number? : number,
    cvv? : number,
    expiredDate? : number,
    onClose: Function
}

const PaymentCardForm: React.FC<PaymentMethodProps> = ({ preferedPaiementMethod, onClose, name, number, cvv, expiredDate }) => {
    const [apiUserProfile, setApiUserProfile] = useState<UserProfile>({...DUMMY_USER_PROFILE});
    const [displayUserProfile, setDisplayUserProfile] = useState<UserProfile>({...apiUserProfile});
    const [hasChanged, setHasChanged] = useState<boolean>(false);
    const [paymentCard, setPaymentCard] = useState<PaymentMethod>({
        cvv: "123",
        number: "00237 698 765 432",
        expriresAt: "2023-06",
        type: "Master Card"
    });


    const setValue = (source:any, key:string, newValue:any) => {
        updateDataFromKey(source,key,newValue)
        if(JSON.stringify(displayUserProfile) !== JSON.stringify(apiUserProfile)){
            setHasChanged(true)
        }else{
            setHasChanged(false)
        }
    }

    const addPaymentAction = (paymentMethod: PaymentMethod, value : Payments) =>{
        let tempUserProfile: UserProfile = {...displayUserProfile}
        paymentMethod.type = value;
        console.log(paymentMethod)
        tempUserProfile.paymentMethods.push(paymentMethod)
        console.log(tempUserProfile.paymentMethods)
        setDisplayUserProfile(tempUserProfile)
        setHasChanged(true)
        onClose()
    }

    const updateProfile = () => {
        if(hasChanged){
            // Post API Call Here

            setApiUserProfile({...displayUserProfile})
            setHasChanged(false)
        }
    }
    
    if (preferedPaiementMethod == "Paiement Mobile") {
        return(
            <div className="flex flex-row items-center p-[15px] gap-[10px] w-full h-full bg-[#FFFFFF] rounded-[20px]">
            <div className="w-[375px] bg-[linear-gradient(90deg,_#D3E2F7_0%,_rgba(224,_233,_245,_0.552083)_29.27%,_#F8F8F8_100%)] rounded-[20px]">
                <img src="/assets/img/addPaymentMethods/design-card.png" alt="design" className="absolute" />
                <div className="flex flex-col justify-between items-start p-[10px] gap-[10px] w-full h-full left-0 top-[0.5px] rounded-[20px]">
                    <div className="flex flex-row justify-between items-center px-[20px] py-[10px] gap-[10px] mx-[auto] my-[0] w-[355px] h-[67px]">
                        <img src="/assets/img/addPaymentMethods/tabler.png" alt="tabler"/>
                        <img src="/assets/img/addPaymentMethods/streamline.png" alt="wifi"/>
                    </div>
                    <div className="flex flex-col justify-between items-start px-[15px] py-[40px] gap-[10px] mx-[auto] my-[0] w-[355px] h-[92.5px]">
                        <img src="/assets/img/addPaymentMethods/sim-card-chip.png" alt="sim card"/>
                    </div>
                    <div className="flex flex-row justify-between items-center p-[10px] gap-[50px] mx-[auto] my-[0] w-[355px] h-full">
                        <div className="flex flex-col justify-center items-start gap-[10px] w-full h-full pl-[8px]">
                            <span className="font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#001991]">{displayUserProfile.firstName+" "+displayUserProfile.secondName}</span>
                            <span className="font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#467CC9]">{displayUserProfile.preferedMobilePayment}</span>
                        </div>
                        <span className="mx-[auto] my-[0] w-full font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#467CC9] text-center">*** *** <span className="text-[#001991]">123</span></span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-[10px] gap-[15px] w-[375px] ">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                    { displayUserProfile.preferedMobilePayment == "Mobile money" ?
                        <img src="/assets/img/paymentMethods/mtn-momo.png" alt="Mobile Money icon" className="w-[50px] h-[35px] rounded-[8px]"/>
                        :
                        <img src="/assets/img/paymentMethods/orange-money.png" alt="Orange Money icon" className="w-[50px] h-[35px] rounded-[8px]"/>
                    }
                    <CustomDropDown
                        placeholder="Choisissez votre methode de paiement mobile"
                        sourceList={MOBILE_PAYMENT}
                        defaultValue={displayUserProfile.preferedMobilePayment}
                        setInput={(value:string)=>{setValue(displayUserProfile,"preferedMobilePayment",value)}}
                    />
                </div>
                
                <div className="flex flex-col items-start p-0 gap-[8px] w-full left-[51px] top-[204px] order-2">
                    <CustomInputField
                        label="Numero de téléphone"
                        required
                        placeholder="Entrez votre numero"
                        type="text"
                        disabled={false}
                        setInput={(value:string)=>{setValue(paymentCard,"number",value)}}
                            />
                </div>
                <div className="flex flex-row justify-center items-start px-0 py-[10px] w-full order-4">
                    <button onClick={paymentCard? (displayUserProfile.preferedMobilePayment == "Mobile money"? () => {addPaymentAction(paymentCard, "Mobile Money")} : () => {addPaymentAction(paymentCard, "Orange Money")}) :() => null} className="flex flex-row justify-center items-center px-[28px] py-[14px] gap-[8px] w-full bg-[#356BB3] rounded-[15px]"><span className="font-['Ubuntu'] not-italic font-medium text-[20px] leading-[120%] text-[#FFFFFF]">Confirmer</span></button>
                </div>
            </div>
        </div>
        )
    } 
    return(
        <div className="flex flex-row items-center p-[15px] gap-[10px] w-full bg-[#FFFFFF] rounded-[20px]">
            <div className="w-[375px] bg-[linear-gradient(90deg,_#D3E2F7_0%,_rgba(224,_233,_245,_0.552083)_29.27%,_#F8F8F8_100%)] rounded-[20px]">
                <img src="/assets/img/addPaymentMethods/design-card.png" alt="design" className="absolute" />
                <div className="flex flex-col justify-between items-start p-[10px] gap-[10px] w-full h-full left-0 top-[0.5px] rounded-[20px]">
                    <div className="flex flex-row justify-between items-center px-[20px] py-[10px] gap-[10px] mx-[auto] my-[0] w-[355px] h-[67px]">
                        <img src="/assets/img/addPaymentMethods/tabler.png" alt="tabler"/>
                        <img src="/assets/img/addPaymentMethods/streamline.png" alt="wifi"/>
                    </div>
                    <div className="flex flex-col justify-between items-start px-[15px] py-[40px] gap-[10px] mx-[auto] my-[0] w-[355px] h-[92.5px]">
                        <img src="/assets/img/addPaymentMethods/sim-card-chip.png" alt="sim card"/>
                    </div>
                    <div className="flex flex-row justify-between items-center p-[10px] gap-[50px] mx-[auto] my-[0] w-[355px] h-full">
                        <div className="flex flex-col justify-center items-start gap-[10px] w-full h-full pl-[8px]">
                            <span className="font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#001991]">{displayUserProfile.firstName+" "+displayUserProfile.secondName}</span>
                            <span className="font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#467CC9]">{displayUserProfile.preferedPaymentCard}</span>
                        </div>
                        <span className="mx-[auto] my-[0] w-full font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#467CC9]">**** **** **** <span className="text-[#001991]">1234</span></span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center  gap-[15px] w-[375px]">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                    { displayUserProfile.preferedPaymentCard == "Mastercard" ?

                        <img src="/assets/img/paymentMethods/mastercard.png" alt="Mastercard icon" className="w-[50px] h-[35px] rounded-[8px]"/>
                        :
                        <img src="/assets/img/paymentMethods/visa.png" alt="Visa icon" className="w-[50px] h-[35px] rounded-[8px]"/>

                    }
                    <CustomDropDown
                        placeholder="Choisissez votre methode de paiement mobile"
                        sourceList={CARD_PAYMENT}
                        defaultValue={displayUserProfile.preferedPaymentCard}
                        setInput={(value:string)=>{setValue(displayUserProfile,"preferedPaymentCard",value)}}
                    />
                </div>
                <div className="flex flex-col items-start p-0 gap-[8px] w-full left-[51px] top-[204px] order-2">
                    <CustomInputField
                        label="Numero de Carte"
                        required
                        placeholder="Entrez votre numero"
                        type="text"
                        disabled={false}
                        setInput={(value:string)=>{setValue(paymentCard,"number",value)}}
                            />
                </div>
                <div className="flex flex-row justify-center items-center p-0 gap-[15px] w-full order-3 flex-grow-0">
                    <div className="flex flex-col items-start p-0 gap-[8px] w-full h-full left-[51px] top-[204px]">
                        <CustomInputField
                            label="cvv"
                            required
                            placeholder="CVV"
                            type="text"
                            disabled={false}
                            setInput={(value:string)=>{setValue(paymentCard,"cvv",value)}}
                                />
                    </div>
                    <div className="flex flex-col items-start p-0 gap-[8px] w-full h-full left-[51px] top-[204px]">
                        <CustomDateInput
                        label="Date d'expiration"
                        isForPayment={true}
                        required
                        disabled={false}
                        setInput={(value:string)=>{setValue(paymentCard,"expriresAt",value)}}
                            />
                    </div>
                </div>
                <div className="flex flex-row justify-center items-start px-0 w-full order-4">
                    <button onClick={paymentCard? (displayUserProfile.preferedPaymentCard == "Mastercard"? () => {addPaymentAction(paymentCard, "Master Card")} : () => {addPaymentAction(paymentCard, "Visa Card")}) :() => null} className="flex flex-row justify-center items-center px-[28px] gap-[8px] w-full bg-[#356BB3] h-[50px] rounded-[15px]"><span className="font-['Ubuntu'] not-italic font-medium text-[20px] leading-[120%] text-[#FFFFFF]">Confirmer</span></button>
                </div>
            </div>
        </div>
    )
}

export default PaymentCardForm