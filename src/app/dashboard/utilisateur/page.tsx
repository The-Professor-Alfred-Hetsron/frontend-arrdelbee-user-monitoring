'use client'
import { useState } from "react";
import '@/app/globals.css'
import { 
    AvatarCard,
    CustomInputField 
} from "@/components"
import { UserProfile } from "@/types/user";
import { DUMMY_USER_PROFILE } from "@/data/dummyUsers";
import { updateDataFromKey } from "@/utils/tools";

export default function Profile(){
    
    const [apiUserProfile, setApiUserProfile] = useState<UserProfile>(DUMMY_USER_PROFILE);
    const [displayUserProfile, setDisplayUserProfile] = useState<UserProfile>(apiUserProfile);

    const [editable, setEditable] = useState<boolean>(false);
    return(
        <div className="w-full laptop:pr-1 flex flex-row sm:flex-col gap-4 overflow-y-auto rounded-scrollbar">
            <div className="w-full h-max px-12 py-6 lg:px-5 bg-white-layout tablet:rounded-l-xl sm:rounded-xl flex flex-col gap-4 justify-start items-center">
                <AvatarCard alt={`${displayUserProfile.firstName} ${displayUserProfile.secondName}`}/>
                <div className="w-full flex flex-row lg:flex-col gap-3">
                    <CustomInputField
                        label="Nom"
                        required
                        placeholder="Entrez votre Nom"
                        type="text"
                        defaultValue={displayUserProfile.firstName}
                        editable={editable}
                        setInput={(value:string)=>{updateDataFromKey(displayUserProfile,"firstName",value)}}
                    />
                    <CustomInputField
                        label="Prenom"
                        required
                        placeholder="Entrez votre Prenom"
                        type="text"
                        defaultValue={displayUserProfile.secondName}
                        editable={editable}
                        setInput={(value:string)=>{updateDataFromKey(displayUserProfile,"secondName",value)}}
                    />
                </div>
                <CustomInputField
                    label="Poste"
                    placeholder="Entrez votre Poste"
                    type="text"
                    defaultValue={displayUserProfile.post}
                    editable={editable}
                    setInput={(value:string)=>{updateDataFromKey(displayUserProfile,"post",value)}}
                />
                <CustomInputField
                    label="Mot de Passe"
                    required
                    placeholder="Entrez votre Mot de Passe"
                    type="password"
                    defaultValue={displayUserProfile.password}
                    editable={editable}
                    setInput={(value:string)=>{updateDataFromKey(displayUserProfile,"password",value)}}
                />
                <CustomInputField
                    label="E-mail"
                    required
                    placeholder="Entrez votre adresse E-mail"
                    type="email"
                    defaultValue={displayUserProfile.email}
                    editable={editable}
                    setInput={(value:string)=>{updateDataFromKey(displayUserProfile,"email",value)}}
                />
                <CustomInputField
                    label="Téléphone"
                    required
                    placeholder="Entrez votre Numéro de Téléphone"
                    type="text"
                    defaultValue={displayUserProfile.phone}
                    editable={editable}
                    setInput={(value:string)=>{updateDataFromKey(displayUserProfile,"phone",value)}}
                />
            </div>

            <div className="w-full h-max px-12 py-6 lg:px-5 bg-white-layout tablet:rounded-r-xl sm:rounded-xl flex flex-col gap-4 justify-start items-center">
                <CustomInputField
                    label="Adresse"
                    placeholder="Entrez votre Adresse Actuelle de travail"
                    type="text"
                    defaultValue={displayUserProfile.address}
                    editable={editable}
                    setInput={(value:string)=>{updateDataFromKey(displayUserProfile,"address",value)}}
                />
                <CustomInputField
                    label="Pays"
                    placeholder="Entrez Votre Pays de travail"
                    type="text"
                    defaultValue={displayUserProfile.country}
                    editable={editable}
                    setInput={(value:string)=>{updateDataFromKey(displayUserProfile,"country",value)}}
                />
                <CustomInputField
                    label="Numéro CNI"
                    placeholder="Entrez Votre Numéro de CNI"
                    type="text"
                    required
                    defaultValue={displayUserProfile.nationalID}
                    editable={editable}
                    setInput={(value:string)=>{updateDataFromKey(displayUserProfile,"nationalID",value)}}
                />

                <div className="w-full flex flex-row justify-end">
                    <button type="button" onClick={()=>{setEditable(!editable)}} className="text-center font-bold text-white bg-primary-blue rounded-lg px-8 py-3 hover:text-tertiary-lightYellow">Modifier</button>
                </div>
            </div>
        </div>
    )
}