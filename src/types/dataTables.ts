import { GenericUserProfile } from "./user";

export interface UserDataTableType extends GenericUserProfile{
    lastActifDate: string,
}

export type HeaderDataTableType = {
    field:string,
    header:string,
    minWidth:{width: string},
    sortable: boolean
}

export type DataTableFilterType = {
    label:string,
    value:string
}