import { Contact } from "./contact.model";

export type Person = {
    id: number | undefined;
    name: string;
    cpf: string;
    birthdayDate: string;
    contacts: Contact[];
}
