import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Немає контактів для видалення.');
      return;
    }

    const removed = contacts.pop();
    await writeContacts(contacts);
    console.log('Видалено контакт:', removed);
  } catch (error) {
    console.error(error.message);
  }
};

removeLastContact();
