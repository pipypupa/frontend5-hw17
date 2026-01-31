import { useRef } from "react";
import { nanoid } from "nanoid";
import { useContacts } from "../hooks/useContacts";

const ContactForm = () => {
  const nameRef = useRef();
  const numberRef = useRef();
  const { contacts, addContact } = useContacts();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const number = numberRef.current.value.trim();

    const exists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (exists) {
      alert(`${name} already exists`);
      return;
    }

    addContact({ id: nanoid(), name, number });
    e.target.reset();
    nameRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input ref={nameRef} required />
      </label>
      <label>
        Number
        <input ref={numberRef} required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
