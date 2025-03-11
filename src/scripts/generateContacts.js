import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);

    console.log(`Додано ${number} нових контактів!`);
  } catch (error) {
    console.error(error.message);
  }
};

generateContacts(5);
