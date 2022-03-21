import { createSlice, nanoid } from "@reduxjs/toolkit";

const getInitialContacts = (key) => {
  const getContactsFromLocalStorage = localStorage.getItem(key);
  return getContactsFromLocalStorage === null
    ? undefined
    : JSON.parse(getContactsFromLocalStorage);
};

if (getInitialContacts("contacts") === undefined) {
  localStorage.setItem("contacts", JSON.stringify([]));
}

const initialContacts = getInitialContacts("contacts");

const initialContactsState = {
  contacts: initialContacts,
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContactsState,
  reducers: {
    addContact: (state, { payload }) => {
      const id = nanoid();
      if (state.contacts.some((el) => el.name === payload.name)) {
        alert(`${payload.name} is already on the contacts list`);
      } else {
        state.contacts.push({
          id,
          name: payload.name,
          number: payload.number,
        });
        localStorage.setItem("contacts", JSON.stringify(state.contacts));
      }
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
