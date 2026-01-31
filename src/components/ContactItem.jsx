import { useContacts } from "../hooks/useContacts";

const ContactItem = ({ id, name, number }) => {
  const { dispatch } = useContacts();

  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button onClick={() => dispatch({ type: "DELETE", payload: id })}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
