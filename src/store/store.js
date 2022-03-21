import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts";

const store = configureStore({
  reducer: contactsReducer,
});

export default store;
