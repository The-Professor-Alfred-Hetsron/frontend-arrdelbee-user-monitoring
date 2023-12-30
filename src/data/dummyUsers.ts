import { PaymentMethod, UserProfile } from "@/types/user";

const DUMMY_PAYMENT_METHODS:Array<PaymentMethod> =[
    {
        type: "Orange Money",
        number: "+237699669966",
        expriresAt: "2030-12-24"
    },
    {
        type: "Mobile Money",
        number: "+237675669966",
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
    country: "Cameroun",
    gender: "Male",
    nationalID: "2035123456789123456",
    birthDate: "2023-08-15",
    paymentMethods: DUMMY_PAYMENT_METHODS
}

export const DUMMY_AVATAR_PATH: string = "/assets/img/avatar.png"

export const DUMMY_AVATAR_FEMALE_PATH: string = "/assets/img/avatar-female.png"

export const DEFAULT_AVATAR_PATH: string = "/assets/img/avatar-default.png"
