export const USER_NAME_REGEX = /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$/g

export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

export const PASSWORD_REGEX = /^(?=.*[A-Za-z0-9])(?=.*[@#$%^&+=!])(?=.{8,})/