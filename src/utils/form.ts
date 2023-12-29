import { SetStateAction } from "react";


export const validateFromRegEx = (value:string, regex: RegExp, setEntity:(value:SetStateAction<string>)=>void) => {
    const IS_VALID = regex.test(value);
    console.log(IS_VALID)
    if(IS_VALID) setEntity(value)
    return IS_VALID
}