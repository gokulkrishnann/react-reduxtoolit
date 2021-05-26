import React, { useRef } from 'react';
import ContactCard from '../ContactCard';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Header,
  SearchBar,
  SearchBlock,
  SearchIcon,
  SearchInput,
  NoResults,
  List
} from './styles';
const ContactList = ({
  contacts,
  term,
  updateContactHandler,
  searchKeyword
}) => {
  const inputEl = useRef(null);

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
      </SearchBar>
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
