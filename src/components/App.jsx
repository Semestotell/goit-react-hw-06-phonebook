import React from 'react';
import { Section } from './Section/Section';
import ContactForm from './ContactForm/ContacrtForm'
import { Filter } from './Filter/Filter';
import { ContactsList } from './Conatcts/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/Slise';


export function App() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  }

    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} handleChange={handleChange} />
          <ContactsList />
        </Section>
      </>
    )
  }

