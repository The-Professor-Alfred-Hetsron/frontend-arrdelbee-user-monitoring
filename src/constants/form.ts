export const USER_NAME_REGEX = /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$/g

export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export const PASSWORD_REGEX = /^(?=.*[A-Za-z0-9])(?=.*[@#$%^&+=!])(?=.{8,})/

export const CVV_REGEX = /^[0-9]{3}$/

export const PHONE_REGEX = /^(0|\\+237|00237)?6[0-9]{8}$/

export const CARD_NUMBER_REGEX = /^[0-9]{16}$/