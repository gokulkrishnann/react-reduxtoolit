import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts, editContact } from '../../redux/actions/contactActions';
import { Container } from './styles';
import ContactList from '../../components/Contacts/ContactList';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();

  const updateContactHandler = async (contact) => {
    const response: any = await dispatch(editContact(contact));
    const { id } = response;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response } : contact;
      })
    );
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);

    if (searchTerm !== '') {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(' ')
          .toLowerCase()

          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };
  const getAllContacts = useCallback(async () => {
    const allContacts: any = await dispatch(fetchContacts());
    if (allContacts) setContacts(allContacts);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  useEffect(() => {
    searchHandler(searchTerm);
  }, [searchTerm, contacts]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <ContactList
        contacts={searchTerm.length < 1 ? contacts : searchResults}
        updateContactHandler={updateContactHandler}
        term={searchTerm}
        searchKeyword={searchHandler}
      />
    </Container>
  );
};

export default Contacts;
