export type USER_GROUP = "Classique" | "Abonné" | "Acteur PTF" | "Organisation" | "Agent ArrdelBee" | "Administrateur"

export const USER_GROUPS: Array<string> = [
    "Classique",
    "Abonné",
    "Acteur PTF",
    "Organisation",
    "Agent ArrdelBee",
    "Administrateur"
]

export const USER_GROUPS_BADGES = [
    {
        groupLabel: "Classique",
        fontColorStyle: "text-google-green",
        bgColorStyle: "bg-light-green"
    },
    {
        groupLabel: "Abonné",
        fontColorStyle: "text-secondary-yellow",
        bgColorStyle: "bg-tertiary-lightYellow"
    },
    {
        groupLabel: "Acteur PTF",
        fontColorStyle: "text-primary-blue",
        bgColorStyle: "bg-lightBlue"
    },
    {
        groupLabel: "Organisation",
        fontColorStyle: "text-brown",
        bgColorStyle: "bg-light-brown"
    },
    {
        groupLabel: "Agent ArrdelBee",
        fontColorStyle: "text-accent-purple",
        bgColorStyle: "bg-light-purple"
    },
    {
        groupLabel: "Administrateur",
        fontColorStyle: "text-white",
        bgColorStyle: "bg-primary-blue"
    }
]


export const USER_GENDER: Array<string> = [
    "Male",
    "Female"
]

export const LANGUAGES: Array<string> = [
    "English",
    "Français"
]