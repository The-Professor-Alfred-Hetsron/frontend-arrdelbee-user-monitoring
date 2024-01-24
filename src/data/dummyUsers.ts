import { PaymentMethod, UserProfile } from "@/types/user";

const DUMMY_PAYMENT_METHODS:Array<PaymentMethod> =[
    {
        type: "Orange Money",
        number: "+237699669966",
        expriresAt: ""
    },
    {
        type: "Mobile Money",
        number: "+237675669957",
        expriresAt: ""
    },
    {
        type: "Visa Card",
        number: "+237675669941",
        expriresAt: "2030-12-24"
    },
    {
        type: "Master Card",
        number: "+237675669648",
        expriresAt: "2030-12-24"
    },
    {
        type: "PayPal",
        number: "+237675669987",
        expriresAt: "2030-12-24"
    }
]

export const DUMMY_USER_PROFILE:UserProfile = {
    firstName: "Easin",
    secondName: "Arafat",
    post: "Ministère de la Santé",
    group: "User",
    password: "password",
    email: "uxeasin@gmail.com",
    phone: "+237699669966",
    address: "Melen",
    country: "🇨🇲 - CM - Cameroun",
    gender: "Male",
    language: "English",
    nationalID: "2035123456789123456",
    birthDate: "2023-08-15",
    paymentMethods: DUMMY_PAYMENT_METHODS,
    preferedPaymentMethod: "Paiement Mobile",
    preferedMobilePayment: "Orange money",
    preferedPaymentCard: "Mastercard"
}

export const DUMMY_AVATAR_PATH: string = "/assets/img/avatar.png"

export const DUMMY_AVATAR_FEMALE_PATH: string = "/assets/img/avatar-female.png"

export const DEFAULT_AVATAR_PATH: string = "/assets/img/avatar-default.png"


export const EMPTY_USER_PROFILE:UserProfile = {
    firstName: "",
    secondName: "",
    post: "",
    group: "",
    password: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    gender: "",
    language: "",
    nationalID: "",
    birthDate: "",
    paymentMethods: [],
    preferedPaymentMethod: "",
    preferedMobilePayment: "",
    preferedPaymentCard: ""
}