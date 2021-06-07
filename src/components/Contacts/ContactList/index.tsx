import React, { useState, useRef } from 'react';
import ContactCard from '../ContactCard';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Header,
  SearchBar,
  SearchBlock,
  AddButton,
  SearchIcon,
  SearchInput,
  NoResults,
  List
} from './styles';
import { Modal } from '../../Modal';
import AddContact from '../AddContact';

const ContactList = ({
  contacts,
  term,
  updateContactHandler,
  addContactHandler,
  searchKeyword
}) => {
  const inputEl = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addContact = (contact) => {
    addContactHandler(contact);
    closeModal();
  };

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        data-testid="contact"
        contact={contact}
        editHandler={updateContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value);
  };
  return (
    <Container>
      <Header>Contacts List</Header>
      <SearchBar>
        <SearchBlock>
          <SearchInput
            ref={inputEl}
            title="Search Contacts"
            type="text"
            placeholder="Search Contacts"
            value={term}
            onChange={getSearchTerm}
          />
          <SearchIcon icon={faSearch} onClick={getSearchTerm} />
        </SearchBlock>
        <AddButton label="Add Contact" onClick={openModal} />
      </SearchBar>
      <Modal
        title={`Add Contact`}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <AddContact addContactHandler={addContact} closeModal={closeModal} />
      </Modal>
      <List data-testid="contactList">
        {renderContactList.length > 0 ? (
          renderContactList
        ) : (
          <NoResults>No Contacts available</NoResults>
        )}
      </List>
    </Container>
  );
};

export default ContactList;
