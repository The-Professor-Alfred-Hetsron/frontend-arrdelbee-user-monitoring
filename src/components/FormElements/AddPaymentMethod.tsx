import { CVV_REGEX } from "@/constants/form";
import React from "react";

interface PaymentMethodProps {
    isVisible : boolean,
    onClose : Function,
    name? : string,
    number? : number,
    cvv? : number,
    expiredDate? : number
}

const AddPaymentMethod: React.FC<PaymentMethodProps> = ({ isVisible, onClose, name, number, cvv, expiredDate }) => {
    if (!isVisible) return null
    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col items-center p-[10px] gap-[10px] relative w-[800px] h-[453px] bg-[#F5F5F9] rounded-[20px]">
                <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-full h-[65px] bg-[#FFFFFF] rounded-[20px]">
                    <span className="flex flex-row justify-center items-center px-0 py-[2px] gap-[10px] w-full h-full font-['Ubuntu'] not-italic font-normal text-[20px] leading-[23px] text-[#34A853]">ADD PAYMENT METHOD</span>
                    <div className="flex flex-row justify-start items-center py-0 gap-[10px] w-[30px] h-full">
                        <img src="/assets/img/addPaymentMethods/close.png" alt="close button" className="cursor-pointer" onClick={() => onClose()}/>
                    </div>
                </div>
                <div className="flex flex-row items-center p-[10px] gap-[10px] w-full h-full bg-[#FFFFFF] rounded-[20px]">
                    <div className="w-[375px] h-[272px] bg-[linear-gradient(90deg,_#D3E2F7_0%,_rgba(224,_233,_245,_0.552083)_29.27%,_#F8F8F8_100%)] rounded-[20px]">
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
                                    <span className="font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#001991]">Easin Arafat</span>
                                    <span className="font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#467CC9]">Mastercard</span>
                                </div>
                                <span className="mx-[auto] my-[0] w-full font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#467CC9]">**** **** **** <span className="text-[#001991]">1234</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-[10px] gap-[15px] w-[375px] h-[338px]">
                        <div className="flex flex-col items-start p-0 gap-[8px] w-full h-[76px] left-[51px] top-[204px] order-1">
                            <span className="w-[128px] h-[22px] font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#464748]"> Cardholder Name</span>
                            {name?
                                <input type="text" name="Gender" id="" value={name} className="box-border w-full h-[46px] left-0 top-[30px] bg-[#FFFFFF] border-[1px] px-[10px] border-[solid] border-[#EFF0F2] rounded-[8px] font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#6C768A] bg-[rgba(229,_234,_240,_0.8)]"/>
                                :
                                <input type="text" name="Gender" id="" placeholder={"Entrer le nom"} className="box-border w-full h-[46px] left-0 top-[30px] bg-[#FFFFFF] border-[1px] px-[10px] border-[solid] border-[#EFF0F2] rounded-[8px] font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#6C768A] bg-[rgba(229,_234,_240,_0.8)]"/>
                            }
                        </div>
                        <div className="flex flex-col items-start p-0 gap-[8px] w-full h-[76px] left-[51px] top-[204px] order-2">
                            <span className="w-[128px] h-[22px] font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#464748]"> Card Number</span>
                            {number?
                                <input type="number" name="card-number" id="" value={number} className="box-border w-full h-[46px] left-0 top-[30px] bg-[#FFFFFF] border-[1px] px-[10px] border-[solid] border-[#EFF0F2] rounded-[8px] font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#6C768A] bg-[rgba(229,_234,_240,_0.8)]"/>
                                :
                                <input type="number" name="card-number" id="" placeholder={"1234 5678 9876 5432"} className="box-border w-full h-[46px] left-0 top-[30px] bg-[#FFFFFF] border-[1px] px-[10px] border-[solid] border-[#EFF0F2] rounded-[8px] font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#6C768A] bg-[rgba(229,_234,_240,_0.8)]"/>
                            }
                        </div>
                        <div className="flex flex-row justify-center items-center p-0 gap-[15px] w-full h-full order-3 flex-grow-0">
                            <div className="flex flex-col items-start p-0 gap-[8px] w-full h-full left-[51px] top-[204px]">
                            {cvv?
                                <input type="number" name="cvv" id="" value={cvv} pattern={`${CVV_REGEX}`} className="box-border w-full h-[46px] left-0 top-[30px] bg-[#FFFFFF] border-[1px] px-[10px] border-[solid] border-[#EFF0F2] rounded-[8px] font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#6C768A] bg-[rgba(229,_234,_240,_0.8)]"/>
                                :
                                <input type="number" name="cvv" id="" placeholder="321" className="box-border w-full h-[46px] left-0 top-[30px] bg-[#FFFFFF] border-[1px] px-[10px] border-[solid] border-[#EFF0F2] rounded-[8px] font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#6C768A] bg-[rgba(229,_234,_240,_0.8)]"/>
                            }
                            </div>
                            <div className="flex flex-col items-start p-0 gap-[8px] w-full h-full left-[51px] top-[204px]">
                                <input type="date" name="expired-date" id="" className="box-border w-full h-[46px] left-0 top-[30px] bg-[#FFFFFF] border-[1px] px-[10px] border-[solid] border-[#EFF0F2] rounded-[8px] font-['Ubuntu'] not-italic font-normal text-[14px] leading-[160%] text-[#6C768A] bg-[rgba(229,_234,_240,_0.8)]"/>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-start px-0 py-[10px] w-full h-full order-4">
                            <button className="flex flex-row justify-center items-center px-[28px] py-[14px] gap-[8px] w-full h-full bg-[#356BB3] rounded-[15px]"><span className="font-['Ubuntu'] not-italic font-medium text-[20px] leading-[120%] text-[#FFFFFF]">Confirm</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPaymentMethod