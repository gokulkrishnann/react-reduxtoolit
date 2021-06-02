import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../../store/contact-slice';
import { Container } from './styles';
import ContactList from '../../components/Contacts/ContactList';

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const [selectedContact, setSelectedContact] = useState(null);
  const contactList = useSelector((state: any) => state.contact.users);

  const updateContactHandler = (contact) => {
    setSelectedContact(contact);
    dispatch(
      editContact({
        id: contact.id,
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email
      })
    );
  };

  const searchHandler = (searchTerm) => {
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
  };

  useEffect(() => {
    searchHandler(searchTerm);
  }, [searchTerm, contactList]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <ContactList
        contacts={searchTerm.length < 1 ? contactList : searchResults}
        updateContactHandler={updateContactHandler}
        term={searchTerm}
        searchKeyword={searchHandler}
      />
    </Container>
  );
};

export default Contacts;
