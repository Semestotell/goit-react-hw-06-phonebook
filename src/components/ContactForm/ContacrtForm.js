import React from "react";
import { nanoid } from "nanoid";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Form, FormLabel, FormInput, FormButton } from "./ContactForm.styled.jsx"
import { add } from "redux/Slise.js";

export default function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [id, setId] = useState('');


    const dispatch = useDispatch();
    const contacts = useSelector(state => state.items);

    const handleChangeName = (evt) => {
        setName(evt.target.value)
    };
    
    const handleChangeNumber = (evt) => {
        setNumber(evt.target.value)
    };

    const reset = () => {
        setName("");
        setNumber("");
    };

    useEffect(() => {
        return setId(nanoid());
    }, [name, number]);
    
    const addContact = ({ name, number }) => {
        const newContact = { id: nanoid(), name, number };
        const check = contacts.find(
        contact => contact.name === newContact.name
        );

        check ? alert(`${name} is already exist`)
        : dispatch(add({ id,name,number }));
    }

        const handleSubmit = (evt) => {
        evt.preventDefault();
        addContact({ name, number });
        reset();
    };

        return (
            <Form onSubmit={handleSubmit}>
                <FormLabel>Name
                    <FormInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChangeName}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    >
                    </FormInput>
                </FormLabel>

                <FormLabel >Number
                    <FormInput
                        type="tel"
                        name="number"
                        value={number}
                        onChange={handleChangeNumber}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    >
                    </FormInput>
                </FormLabel>
                <FormButton type="submit">Add contact</FormButton>
            </Form>
        )
}

