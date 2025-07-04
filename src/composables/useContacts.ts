import contacts from '@/consts/contacts.ts';
import { Contact } from '@/types/Contact.ts';

export function useContacts() {
    const getAllContacts = (): Contact[] => contacts.sort((a: Contact, b: Contact): number => a.id - b.id);

    const getContactById = (id: number): Contact | undefined =>
        contacts.find((c: Contact): boolean => c.id === id);

    return {
        getAllContacts,
        getContactById,
    };
}