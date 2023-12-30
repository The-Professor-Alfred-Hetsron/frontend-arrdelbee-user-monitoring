'use client'
import { useEffect, useState } from "react";
import '@/app/globals.css'
import { 
    AvatarCard,
    CustomInputField, 
    CustomDropDown,
    CustomDateInput
} from "@/components"
import { UserProfile } from "@/types/user";
import { DUMMY_USER_PROFILE } from "@/data/dummyUsers";
import { updateDataFromKey } from "@/utils/tools";
import { USER_GROUPS, USER_GENDER, LANGUAGES } from "@/constants/user";
import { DUMMY_AVATAR_PATH } from '@/data/dummyUsers'

export default function ProfilePage(){
    const [apiUserProfile, setApiUserProfile] = useState<UserProfile>({...DUMMY_USER_PROFILE});
    const [displayUserProfile, setDisplayUserProfile] = useState<UserProfile>({...apiUserProfile});
    const [avatarImg, setAvatarImg ] = useState<string | ArrayBuffer | undefined>(DUMMY_AVATAR_PATH)

    const [disabled, setDisabled] = useState<boolean>(true);
    const [hasChanged, setHasChanged] = useState<boolean>(false);

    const setValue = (source:any, key:string, newValue:any) => {
        updateDataFromKey(source,key,newValue)
        if(JSON.stringify(displayUserProfile) !== JSON.stringify(apiUserProfile)){
            setHasChanged(true)
        }else{
            setHasChanged(false)
        }
    }

    const resetProfile = () => {
        setDisplayUserProfile({...apiUserProfile})
        setDisabled(true)
    }

    const updateProfile = () => {
        if(hasChanged){
            // Post API Call Here
            
            setApiUserProfile({...displayUserProfile})
        }
    }
    
    // useEffect(() => {
    //     // Fetch User Profile API Here
    // }, []);

    return(
        <div className="w-full laptop:pr-1 flex flex-row sm:flex-col gap-4 overflow-y-auto rounded-scrollbar">
            <div className="w-full h-max px-12 py-6 lg:px-5 bg-white-layout tablet:rounded-l-xl sm:rounded-xl flex flex-col gap-4 justify-start items-center">
                <AvatarCard
                    label="Photo de Profil (Avatar)"
                    alt={`${displayUserProfile.firstName} ${displayUserProfile.secondName}`}
                    defaultValue={avatarImg}
                    disabled={disabled}
                    setImage={setAvatarImg}
                />
                <div className="w-full flex flex-row lg:flex-col gap-3">
                    <CustomInputField
                        label="Nom"
                        required
                        placeholder="Entrez votre Nom"
                        type="text"
                        defaultValue={displayUserProfile.firstName}
                        disabled={disabled}
                        setInput={(value:string)=>{setValue(displayUserProfile,"firstName",value)}}
                    />
                    <CustomInputField
                        label="Prenom"
                        required
                        placeholder="Entrez votre Prenom"
                        type="text"
                        defaultValue={displayUserProfile.secondName}
                        disabled={disabled}
                        setInput={(value:string)=>{setValue(displayUserProfile,"secondName",value)}}
                    />
                </div>
                <CustomInputField
                    label="Poste"
                    placeholder="Entrez votre Poste"
                    type="text"
                    defaultValue={displayUserProfile.post}
                    disabled={disabled}
                    setInput={(value:string)=>{setValue(displayUserProfile,"post",value)}}
                />
                <CustomDropDown
                    label="Groupe d'Utilisateur"
                    required
                    placeholder=""
                    sourceList={USER_GROUPS}
                    defaultValue={displayUserProfile.group}
                    permanentDisabled
                    setInput={(value:string)=>{setValue(displayUserProfile,"group",value)}}
                />
                <CustomInputField
                    label="Mot de Passe"
                    required
                    placeholder="Entrez votre Mot de Passe"
                    type="password"
                    defaultValue={displayUserProfile.password}
                    disabled={disabled}
                    setInput={(value:string)=>{setValue(displayUserProfile,"password",value)}}
                />
                <CustomInputField
                    label="E-mail"
                    required
                    placeholder="Entrez votre adresse E-mail"
                    type="email"
                    defaultValue={displayUserProfile.email}
                    disabled={disabled}
                    setInput={(value:string)=>{setValue(displayUserProfile,"email",value)}}
                />
                <CustomInputField
                    label="Téléphone"
                    required
                    placeholder="Entrez votre Numéro de Téléphone"
                    type="text"
                    defaultValue={displayUserProfile.phone}
                    disabled={disabled}
                    setInput={(value:string)=>{setValue(displayUserProfile,"phone",value)}}
                />
            </div>

            <div className="w-full h-max px-12 py-6 lg:px-5 bg-white-layout tablet:rounded-r-xl sm:rounded-xl flex flex-col gap-4 justify-start items-center">
                <CustomInputField
                    label="Adresse"
                    placeholder="Entrez votre Adresse Actuelle de travail"
                    type="text"
                    defaultValue={displayUserProfile.address}
                    disabled={disabled}
                    setInput={(value:string)=>{setValue(displayUserProfile,"address",value)}}
                />
                <CustomInputField
                    label="Pays"
                    placeholder="Entrez Votre Pays de travail"
                    type="text"
                    defaultValue={displayUserProfile.country}
                    disabled={disabled}
                    setInput={(value:string)=>{setValue(displayUserProfile,"country",value)}}
                />
                <div className="w-full flex flex-row lg:flex-col gap-3">
                    <CustomDropDown
                        label="Sexe"
                        required
                        placeholder="Selectionner votre sexe"
                        sourceList={USER_GENDER}
                        defaultValue={displayUserProfile.gender}
                        disabled={disabled}
                        setInput={(value:string)=>{setValue(displayUserProfile,"gender",value)}}
                    />
                    <CustomDropDown
                        label="Langue"
                        required
                        placeholder="Selectionner votre Langue de Preference"
                        sourceList={LANGUAGES}
                        defaultValue={displayUserProfile.language}
                        disabled={disabled}
                        setInput={(value:string)=>{setValue(displayUserProfile,"language",value)}}
                    />
                </div>
                <CustomInputField
                    label="Numéro CNI"
                    placeholder="Entrez Votre Numéro de CNI"
                    type="text"
                    required
                    defaultValue={displayUserProfile.nationalID}
                    disabled={disabled}
                    setInput={(value:string)=>{setValue(displayUserProfile,"nationalID",value)}}
                />
                <CustomDateInput
                    label="Date de Naissance"
                    disabled={disabled}
                    defaultValue={displayUserProfile.birthDate}
                    setInput={(value:string)=>{setValue(displayUserProfile,"birthDate",value)}}
                />
                <div className="w-full flex flex-row justify-end">
                    {disabled?
                        <button type="button" onClick={()=>{setDisabled(false)}} className="lg:w-full text-center font-bold text-white bg-primary-blue rounded-lg px-8 py-3 hover:text-tertiary-lightYellow">Modifier</button>
                        :<div className="w-full flex flex-row gap-2 justify-end">
                            {!hasChanged ?<button type="button" onClick={resetProfile} className="lg:w-full text-center font-bold text-google-red bg-white border border-google-red hover:text-white hover:bg-google-red rounded-lg px-8 py-3">Annuler</button>
                            :<button type="button" onClick={updateProfile} className="lg:w-full text-center font-bold text-white bg-secondary-yellow rounded-lg px-8 py-3 disabled:bg-grayTone3 disabled:hover:text-white">Enregistrer</button>}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}