'use client'

import React, { SetStateAction, useState } from "react";
import Image from 'next/image'
import { APP_NAME } from "@/constants/config";
import { InputField } from "@/components";
import { USER_NAME_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from "@/constants/form";
import { validateFromRegEx } from "@/utils/tools";
import { useRouter } from "next/navigation";
import { Span } from "next/dist/trace";

type FormType = "signUp" | "signIn" | "forgotPassword" | "resetPassword" | "successRecovery"
export default function Auth(){

    const router = useRouter()

    const USER_NAME_ERROR_MSG:string = "Ce nom d'utilisateur est invalid, utilisez '-' ou '_' pour les espaces"
    const EMAIL_ERROR_MSG:string = "Cette adresse e-mail est invalid, bien vouloir entrez une valeur valide"
    const PASSWORD_ERROR_MSG:string = "Ce mot de passe ne doit pas etre court, doit contenir des valeurs alphanumérique et des caractères spéciaux @#$%^&+=!"
    const CONFIRM_PWD_ERROR_MSG:string = "Le mot de passe de confirmation ne correspond pas au mot de passe fourni. Veuillez vérifier et réessayer."

    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [formType, setFormType] = useState<FormType>("signUp");
    const [isLinkSent, setIsLinkSent] = useState<boolean>(false);

    const initInput = (type: FormType) => {
        setFormType(type)
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setIsLinkSent(false)
    }

    const printInput = () => {
        console.log("name = ", name)
        console.log("email = ", email)
        console.log("password = ", password)
        console.log("confirmPassword = ", confirmPassword)
    }


    const submitRegisterLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        printInput()
        router.push("/dashboard")
    }

    const submitMagicLink = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        printInput()
        setIsLinkSent(true)
        setTimeout(()=>{
            initInput("resetPassword")
        }, 3000)
    }

    const submitNewCredentials = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        printInput()
        initInput("successRecovery")
    }

    return(
        <div className="w-screen h-screen relative bg-[url(/assets/img/auth-bg-img.png)] bg-cover bg-center lg:bg-left sm:flex sm:flex-col sm:justify-center sm:items-center">
            {/* Put your Content Here For Login SignUp and Forgot Password*/}
            
            <Image src="/assets/img/auth-logo.png" alt={`${APP_NAME} Logo`} priority className="w-[300px] lg:w-[200px] aspect-auto rounded-lg drop-shadow-2xl shadow absolute left-8 top-8 lg:left-2 lg:top-2 sm:hidden" width={200} height={200}/>
            <Image src="/assets/img/logo.png" alt={`${APP_NAME} Logo`} priority className="w-[300px] sm:relative tablet:hidden" width={200} height={200}/>

            <div className="w-[600px] h-[750px] lg:w-screen lg:h-screen lg:p-20 sm:p-3 flex flex-col justify-center items-center absolute right-28 top-10 lg:right-0 lg:top-0">
                
                {(formType === "signUp" || formType === "signIn") && <form onSubmit={submitRegisterLogin} className="w-full h-full bg-[#FFFFFFCC] p-8 lg:p-5 rounded-2xl drop-shadow-2xl shadow flex flex-col">
                    <div className="w-full flex flex-row sm:flex-col flex-1">
                        <div className="grow flex flex-col">
                            <div className="w-[300px] flex flex-row gap-2">
                                <span>Bienvenue sur</span>
                                <h1 className="text-secondary-yellow uppercase">{APP_NAME}</h1>
                            </div>
                            <span className="text-4xl font-bold capitalize">{formType === "signUp" ? "Inscription": "Connexion"}</span>
                        </div>
                        {formType === "signUp" &&<div className="flex flex-col text-left justify-start sm:items-start items-end text-sm">
                            <span className="text-right">Vous avez un Compte?</span>
                            <button onClick={()=>{initInput("signIn")}} className="text-secondary-yellow hover:text-primary-blue text-left">Connectez-vous</button>
                        </div>}
                        {formType === "signIn" &&<div className="flex flex-col text-left justify-start sm:items-start items-end text-sm">
                            <span className="text-right">Vous n&apos;avez pas de Compte?</span>
                            <button onClick={()=>{initInput("signUp")}} className="text-secondary-yellow hover:text-primary-blue text-left">Inscrivez-vous</button>
                        </div>}
                    </div>

                    {formType === "signUp" && <>
                        <div className="w-full h-full flex flex-col gap-4 sm:gap-2 justify-center items-center">
                            <InputField label="Entrez votre adresse e-mail" placeholder="E-mail" type="email" regex={EMAIL_REGEX} setInput={setEmail} errorMsg={EMAIL_ERROR_MSG}/>
                            <InputField label="Entrez votre nom d'utilisateur" placeholder="Nom d'Utilisateur" type="text" regex={USER_NAME_REGEX} setInput={setName} errorMsg={USER_NAME_ERROR_MSG}/>
                            <InputField label="Entrez votre mot de passe" placeholder="Mot de Passe" type="password" regex={PASSWORD_REGEX} setInput={setPassword} errorMsg={PASSWORD_ERROR_MSG}/>
                            <InputField label="Confirmez votre mot de passe" placeholder="Mot de Passe" type="password" regex={PASSWORD_REGEX} setInput={setConfirmPassword} errorMsg={password !== confirmPassword?CONFIRM_PWD_ERROR_MSG:PASSWORD_ERROR_MSG}/>
                        </div>
                        
                        <button type="submit" className="text-center font-bold text-white bg-primary-blue rounded-lg px-8 py-3 lg:mt-2 hover:bg-secondary-yellow hover:text-primary-blue">S&apos;Inscrire</button>
                    </>}

                    {formType === "signIn" && <>
                        <div className="w-full h-full flex flex-col gap-4 sm:gap-2 justify-center items-center">
                            <InputField label="Entrez votre nom d&apos;utilisateur" placeholder="Nom d'Utilisateur" type="text" regex={USER_NAME_REGEX} setInput={setName} errorMsg={USER_NAME_ERROR_MSG}/>
                            <InputField label="Entrez votre mot de passe" placeholder="Mot de Passe" type="password" regex={PASSWORD_REGEX} setInput={setPassword} errorMsg={PASSWORD_ERROR_MSG}/>
                            <div className="w-full flex flex-row justify-end items-end">
                                <button onClick={()=>{initInput("forgotPassword")}} className="text-primary-blue hover:text-secondary-yellow text-left">Mot de Passe oublié?</button>
                            </div>
                        </div>
                        <button type="submit" className="text-center font-bold text-white bg-primary-blue rounded-lg px-8 py-3 lg:mt-2 hover:bg-secondary-yellow hover:text-primary-blue">Se Connecter</button>
                    </>}

                </form>}

                {formType === "forgotPassword" &&<form onSubmit={submitMagicLink} className="w-full h-[70%] sm:h-[80%] bg-[#FFFFFFCC] p-8 lg:p-5 rounded-2xl drop-shadow-2xl shadow flex flex-col gap-2 justify-evenly">
                    <div className="w-full flex flex-col gap-4">
                        <span className="text-4xl sm:text-3xl font-bold capitalize">Mot de Passe Oublié ?</span>
                        <span className="">Veuillez saisir votre adresse e-mail pour recevoir un lien de réinitialisation de mot de passe dans votre boîte de réception.</span>
                    </div>
                    <div className="w-full flex flex-col gap-4 sm:gap-2 justify-center items-center">
                        <InputField label="Entrez votre adresse e-mail" placeholder="E-mail" type="email" regex={EMAIL_REGEX} setInput={setEmail} errorMsg={EMAIL_ERROR_MSG}/>
                        {!isLinkSent?<button type="submit" className="w-full text-center font-bold text-white bg-primary-blue rounded-lg px-8 py-3 lg:mt-2 hover:bg-secondary-yellow hover:text-primary-blue">Envoyer le lien</button>
                        :<span className="text-google-green text-sm">Lien de réinitialisation envoyé avec succès. Veuillez vérifier votre boîte de réception.</span>}
                        <div className="w-full flex flex-row justify-center items-center">
                            <button onClick={()=>{initInput("signIn")}} className="text-primary-blue hover:text-secondary-yellow text-left">Retour à la connexion</button>
                        </div>
                    </div>
                </form>}

                {formType === "resetPassword" &&<form onSubmit={submitNewCredentials} className="w-full h-full bg-[#FFFFFFCC] p-8 lg:p-5 rounded-2xl drop-shadow-2xl shadow flex flex-col">
                    <div className="w-full flex flex-col gap-4">
                        <span className="text-4xl font-bold capitalize">Reinitialliser votre Mot de Passe</span>
                        <span className="">Veuillez saisir votre nouveau mot de passe</span>
                    </div>
                    <div className="w-full h-full flex flex-col gap-4 sm:gap-2 justify-evenly items-center">
                        <InputField label="Entrez votre mot de passe" placeholder="Mot de Passe" type="password" regex={PASSWORD_REGEX} setInput={setPassword} errorMsg={PASSWORD_ERROR_MSG}/>
                        <InputField label="Confirmez votre mot de passe" placeholder="Mot de Passe" type="password" regex={PASSWORD_REGEX} setInput={setConfirmPassword} errorMsg={password !== confirmPassword?CONFIRM_PWD_ERROR_MSG:PASSWORD_ERROR_MSG}/>
                        <button type="submit" className="w-full text-center font-bold text-white bg-primary-blue rounded-lg px-8 py-3 lg:mt-2 hover:bg-secondary-yellow hover:text-primary-blue">Reinitialliser</button>
                    </div>
                </form>}

                {formType === "successRecovery" &&<div className="w-full h-[60%] bg-[#FFFFFFCC] p-8 lg:p-5 rounded-2xl drop-shadow-2xl shadow flex flex-col justify-between">
                    <div className="w-full flex flex-col gap-6">
                        <span className="text-4xl font-bold capitalize sm:text-3xl">Reinitialisation Reussi</span>
                        <span className="">La réinitialisation de votre mot de passe a été effectuée avec succès.</span>
                    </div>
                        <button onClick={()=>{initInput("signIn")}} className="w-full mb-5 text-center font-bold text-white bg-primary-blue rounded-lg px-8 py-3 lg:mt-2 hover:bg-secondary-yellow hover:text-primary-blue">Se Connecter</button>
                </div>}
            </div>
        </div>
    )
}