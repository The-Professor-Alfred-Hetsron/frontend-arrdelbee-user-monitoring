export interface UserProfile{
    firstName: string,
    secondName: string,
    post: string,
    group: string,
    password: string,
    email: string,
    phone: string,
    address: string,
    country: string,
    gender: string,
    language: string,
    nationalID: string,
    birthDate: string,
    paymentMethods: Array<PaymentMethod>
}

type Payments = "Orange Money" | "Mobile Money" | "Credit Card" | "PayPal" 

export interface PaymentMethod{
    type: Payments,
    number: string,
    expriresAt?: string
}