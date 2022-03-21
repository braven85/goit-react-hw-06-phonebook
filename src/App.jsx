import "./App.css";
import React from "react";

import { Repository } from "./components/Repository/Repository";
import HorizontalLine from "./components/HorizontalLine/HorizontalLine";

import ContactForm from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";

const App = () => {
  return (
    <div className="App">
      <Repository />
      <HorizontalLine />
      <h1>Phonebook</h1>
      <ContactForm />
      <HorizontalLine />
      <h1>Contacts</h1>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
