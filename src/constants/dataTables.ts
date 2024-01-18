import { HeaderDataTableType } from "@/types/dataTables";

export const USER_DATATABLE_HEADERS: Array<HeaderDataTableType> = [
    {
        field:"num",
        header:"N°",
        minWidth:{width: '30px'},
        sortable:true
    },
    {
        field:"firstName",
        header:"Nom",
        minWidth:{width: '200px'},
        sortable:true
    },
    {
        field:"secondName",
        header:"Prenom",
        minWidth:{width: '200px'},
        sortable:true
    },
    {
        field:"email",
        header:"Email",
        minWidth:{width: '300px'},
        sortable:true
    },
    {
        field:"post",
        header:"Poste",
        minWidth:{width: '200px'},
        sortable:true
    },
    {
        field:"address",
        header:"Adresse",
        minWidth:{width: '200px'},
        sortable:true
    },
    {
        field:"lastActifDate",
        header:"Récement Actif le",
        minWidth:{width: '200px'},
        sortable:false
    },
    {
        field:"group",
        header:"Groupe",
        minWidth:{width: '300px'},
        sortable:false
    }
]