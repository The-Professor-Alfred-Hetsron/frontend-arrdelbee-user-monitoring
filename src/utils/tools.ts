
import { SetStateAction } from "react";

export const validateFromRegEx = (value:string, regex: RegExp, setEntity:((value:SetStateAction<string>)=>void) | ((value:string)=>void)) => {
    const IS_VALID = regex.test(value);
    console.log(IS_VALID)
    if(IS_VALID) setEntity(value)
    return IS_VALID
}


export const updateDataFromKey = (source:any, key:string, newValue:any) =>{
    if(!source.hasOwnProperty(key)){
        throw new Error(`The Source Object has no ${key} property`);
    }
    source[key] = newValue
}