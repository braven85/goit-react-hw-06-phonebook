import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";

const filteredContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
};

const ContactsList = () => {
  const contacts = useSelector((state) =>
    filteredContacts(state.contacts, state.filter)
  );

  return (
    <ul>
      {contacts !== undefined &&
        contacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
};

export default ContactsList;
