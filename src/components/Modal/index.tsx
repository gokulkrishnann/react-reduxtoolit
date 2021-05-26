import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  Header
} from './styles';

export const Modal = ({ title, showModal, setShowModal, children }) => {
  const modalRef = useRef();
  const [visible, setVisible] = useState(true);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    showModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [showModal, keyPress]);
  if (!visible) {
    return null;
  }
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper>
            <Header>
              <h2>{title}</h2>
              <div
                onClick={() => {
                  setVisible(false);
                }}
              >
                <CloseModalButton aria-label="Close modal" />
              </div>
            </Header>
            <ModalContent>{children}</ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
