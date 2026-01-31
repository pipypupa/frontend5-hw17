import { createContext, useReducer, useEffect } from "react";

export const ContactsContext = createContext();

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((c) => c.id !== action.payload);
    case "INIT":
      return action.payload;
    default:
      return state;
  }
};

export const ContactsProvider = ({ children }) => {
  const [contacts, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const saved = localStorage.getItem("contacts");
    dispatch({
      type: "INIT",
      payload: saved ? JSON.parse(saved) : initialContacts,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <ContactsContext.Provider value={{ contacts, dispatch }}>
      {children}
    </ContactsContext.Provider>
  );
};
