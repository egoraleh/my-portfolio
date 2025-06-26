import contacts from "@/data/contacts.ts";
import { Contact } from "@/types/contact.ts";

export function useContacts() {
    const getAllContacts = (): Contact[] => contacts

    const getContactById = (id: number): Contact | undefined =>
        contacts.find(c => c.id === id)

    return {
        getAllContacts,
        getContactById
    }
}