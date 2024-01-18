import { DataTableFilterType } from "@/types/dataTables";

export const USER_FILTERS: Array<DataTableFilterType> = [
    {
        label: "Date d’Inscription",
        value: "subscribedDate"
    },
    {
        label: "Male",
        value: "male"
    },
    {
        label: "Female",
        value: "female"
    },
    {
        label: "Date de Naissance",
        value: "birthDate"
    }
]