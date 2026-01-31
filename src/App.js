import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

const App = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={setFilter} />
      <ContactList filter={filter} />
    </div>
  );
};

export default App;
