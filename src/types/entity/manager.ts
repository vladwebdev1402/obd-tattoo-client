export interface IManagerContacts {
    number: string;
    mail: string;
    viber: string;
    whatsapp: string;
    telegram: string;
}

export interface IManager {
    id: number;
    name: string;
    online: boolean;
    img: string;
    contacts: IManagerContacts;
}