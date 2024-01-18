import { UserDataTableType } from "@/types/dataTables";
const tempDate = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`

const tempArray1 = Array(5).fill({
    id: "ffkftfgfkf",
    firstName: "stringhk",
    secondName: "string",
    post: "string",
    group: "Agent ArrdelBee",
    email: "string@gmail.com",
    phone: "+237string",
    address: "string",
    country: "string",
    gender: "male",
    language: "string",
    nationalID: "string",
    birthDate: "string",
    lastActifDate: tempDate,
    subscribedDate: tempDate
})

const tempArray2 = Array(5).fill({
    id: "ffkftfgfkf",
    firstName: "stringtyt",
    secondName: "string",
    post: "string",
    group: "Classique",
    email: "string@gmail.com",
    phone: "+237string",
    address: "string",
    country: "string",
    gender: "female",
    language: "string",
    nationalID: "string",
    birthDate: "string",
    lastActifDate: tempDate,
    subscribedDate: tempDate
})

const tempArray3 = Array(3).fill({
    id: "ffkftfgfkf",
    firstName: "stringhg",
    secondName: "string",
    post: "string",
    group: "Acteur PTF",
    email: "string@gmail.com",
    phone: "+237string",
    address: "string",
    country: "string",
    gender: "male",
    language: "string",
    nationalID: "string",
    birthDate: "string",
    lastActifDate: tempDate,
    subscribedDate: tempDate
})

const globalArray = [...tempArray1, ...tempArray2, ...tempArray3]

export const USER_DATATABLE: Array<UserDataTableType> = globalArray.map((elt:UserDataTableType, i:number)=>{
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