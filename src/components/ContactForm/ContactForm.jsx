import React from "react";
import styles from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { addContact } from "../../store/contacts";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, number } = e.target;
    dispatch(
      addContact({
        name: name.value,
        number: Number(number.value),
      })
    );
    form.reset();
  };

  return (
    <form className={styles.FormInput} onSubmit={handleSubmit}>
      <label className={styles.FormInput__label} htmlFor={nameInputId}>
        Name
        <br />
        <input
          className={styles.FormInput__input}
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
        />
      </label>
      <label className={styles.FormInput__label} htmlFor={numberInputId}>
        Number
        <br />
        <input
          className={styles.FormInput__input}
          type="tel"
          name="number"
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={styles.FormInput__button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
