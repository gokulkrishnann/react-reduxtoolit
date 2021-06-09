import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContact, addContact } from '../../store/contact-slice';
import { Container } from './styles';
import ContactList from '../../components/Contacts/ContactList';

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const contactList = useSelector((state: any) => state.contact.users);

  const updateContactHandler = (contact) => {
    dispatch(
      editContact({
        id: contact.id,
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email
      })
    );
  };

  const addContactHandler = (contact) => {
    dispatch(
      addContact({
        id: contactList.length + 1,
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email,
        avatar: contact.avatar,
        department: contact.department,
        contribution: contact.contribution
      })
    );
  };

  const searchHandler = useCallback(
    (searchTerm) => {
      setSearchTerm(searchTerm);

      if (searchTerm !== '') {
        const newContactList = contactList.filter((contact) => {
          return Object.values(contact)
            .join(' ')
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
        setSearchResults(newContactList);
      } else {
        setSearchResults(contactList);
      }
    },
    [contactList]
  );

  useEffect(() => {
    searchHandler(searchTerm);
  }, [searchHandler, searchTerm]);

  return (
    <Container>
      <ContactList
        contacts={searchTerm.length < 1 ? contactList : searchResults}
        updateContactHandler={updateContactHandler}
        addContactHandler={addContactHandler}
        term={searchTerm}
        searchKeyword={searchHandler}
      />
    </Container>
  );
};

export default Contacts;
