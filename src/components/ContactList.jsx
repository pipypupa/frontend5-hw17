import { useContacts } from "../hooks/useContacts";
import ContactItem from "./ContactItem";

const ContactList = ({ filter }) => {
  const { contacts } = useContacts();

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {visibleContacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
