import { UserDataTableType } from "@/types/dataTables";
const tempDate = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`

const tempArray = Array(20).fill({
    id: "ffkftfgfkf",
    firstName: "string",
    secondName: "string",
    post: "string",
    group: "Classique",
    email: "string@gmail.com",
    phone: "+237string",
    address: "string",
    country: "string",
    gender: "string",
    language: "string",
    nationalID: "string",
    birthDate: "string",
    lastActifDate: tempDate
})

export const USER_DATATABLE: Array<UserDataTableType> = tempArray.map((elt:UserDataTableType, i:number)=>{
    return {...elt, id: `${i}`, firstName:elt.firstName+i, secondName:elt.secondName+i}
})
// [
//     {
//         id: "ffkftfgfkf",
//         firstName: "string",
//         secondName: "string",
//         post: "string",
//         group: "Abonné",
//         email: "string",
//         phone: "string",
//         address: "string",
//         country: "string",
//         gender: "string",
//         language: "string",
//         nationalID: "string",
//         birthDate: "string",
//         lastActifDate: tempDate
//     },
//     {
//         id: "ffkrrtkfkf",
//         firstName: "string",
//         secondName: "string",
//         post: "string",
//         group: "Abonné",
//         email: "string",
//         phone: "string",
//         address: "string",
//         country: "string",
//         gender: "string",
//         language: "string",
//         nationalID: "string",
//         birthDate: "string",
//         lastActifDate: tempDate
//     },
//     {
//         id: "ffkfgfgfgfkf",
//         firstName: "string",
//         secondName: "string",
//         post: "string",
//         group: "Abonné",
//         email: "string",
//         phone: "string",
//         address: "string",
//         country: "string",
//         gender: "string",
//         language: "string",
//         nationalID: "string",
//         birthDate: "string",
//         lastActifDate: tempDate
//     },
//     {
//         id: "fffgfkfkfkf",
//         firstName: "string",
//         secondName: "string",
//         post: "string",
//         group: "Abonné",
//         email: "string",
//         phone: "string",
//         address: "string",
//         country: "string",
//         gender: "string",
//         language: "string",
//         nationalID: "string",
//         birthDate: "string",
//         lastActifDate: tempDate
//     },
//     {
//         id: "ffkrgfhfkf",
//         firstName: "string",
//         secondName: "string",
//         post: "string",
//         group: "Abonné",
//         email: "string",
//         phone: "string",
//         address: "string",
//         country: "string",
//         gender: "string",
//         language: "string",
//         nationalID: "string",
//         birthDate: "string",
//         lastActifDate: tempDate
//     },
//     {
//         id: "ffkrssdkf",
//         firstName: "string",
//         secondName: "string",
//         post: "string",
//         group: "Abonné",
//         email: "string",
//         phone: "string",
//         address: "string",
//         country: "string",
//         gender: "string",
//         language: "string",
//         nationalID: "string",
//         birthDate: "string",
//         lastActifDate: tempDate
//     },
//     {
//         id: "ffefegfgtkfkf",
//         firstName: "string",
//         secondName: "string",
//         post: "string",
//         group: "Abonné",
//         email: "string",
//         phone: "string",
//         address: "string",
//         country: "string",
//         gender: "string",
//         language: "string",
//         nationalID: "string",
//         birthDate: "string",
//         lastActifDate: tempDate
//     }
// ]