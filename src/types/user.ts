import { USER_GROUP } from "@/constants/user"

export interface GenericUserProfile {
    id:string,
    firstName: string,
    secondName: string,
    post: string,
    group: USER_GROUP,
    email: string,
    phone: string,
    address: string,
    country: string,
    gender: string,
    language: string,
    nationalID: string,
    birthDate: string,
    subscribedDate: string,
}

export interface UserProfile extends GenericUserProfile{
    password: string,
    paymentMethods: Array<PaymentMethod>,
    preferedPaymentMethod: string,
    preferedMobilePayment: string,
    preferedPaymentCard: string
}

export type Payments = "Orange Money" | "Mobile Money" | "Visa Card" | "Master Card" | "PayPal" 

const PAYMENT_IMG_SRC_DIR:string = "/assets/img/paymentMethods/"
export const PAYMENT_METHODS_IMG: Array<{type:Payments, img:string}> = [
    {
        type: "Orange Money",
        img: PAYMENT_IMG_SRC_DIR+"orange-money.png"
    },
    {
        type: "Mobile Money",
        img: PAYMENT_IMG_SRC_DIR+"mtn-momo.png"
    },
    {
        type: "Visa Card",
        img: PAYMENT_IMG_SRC_DIR+"visa.png"
    },
    {
        type: "Master Card",
        img: PAYMENT_IMG_SRC_DIR+"mastercard.png"
    },
    {
        type: "PayPal",
        img: PAYMENT_IMG_SRC_DIR+"paypal.png"
    }
]

export type PaymentMethod = {
    type: Payments,
    number: string,
    cvv?: string,
    expriresAt?: string
}