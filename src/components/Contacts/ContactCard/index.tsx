import React, { useState } from 'react';
import { data } from '../../../api/missingdata';
import {
  Container,
  Image,
  Name,
  Attribute,
  ImageContent,
  Content
} from './styles';
import EditContact from '../EditContact';
import { Modal } from '../../Modal';

const ContactCard = (props) => {
  const { id, first_name, last_name, email, avatar } = props.contact;
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const updateContact = (contact) => {
    props.editHandler(contact);
    setShowModal(false);
  };
  return (
    <Container onClick={openModal}>
      <ImageContent>
        <Image key={avatar} src={avatar} />
      </ImageContent>
      <Content>
        <Name>
          {first_name}
          {` `}
          {last_name}
        </Name>
      </Content>
      <Content>
        <Attribute>{data[id - 1]?.department}</Attribute>
      </Content>
      <Content>
        <Attribute>{email}</Attribute>
      </Content>
      <Content>
        <Attribute>{data[id - 1]?.contribution}</Attribute>
      </Content>
      <Modal
        title={`Edit Contact "${first_name} ${last_name}"`}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <EditContact
          {...props}
          updateContactHandler={updateContact}
          closeModal={closeModal}
        />
      </Modal>
    </Container>
  );
};

export default ContactCard;
