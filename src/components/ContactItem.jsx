import { useContacts } from "../hooks/useContacts";

const ContactItem = ({ id, name, number }) => {
  const { deleteContact } = useContacts();

  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
