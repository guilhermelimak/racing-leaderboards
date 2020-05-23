import React, { FC } from "react";
import styled from "@emotion/styled";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.div`
  z-index: 1;
  background-color: #fff;
  min-width: 600px;
  padding: 16px;
  border-radius: 3px;
  box-shadow: 0px 5px 5px 0 #00000080;
`;

const ModalContent = styled.div`
  margin-top: 8px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h4`
  margin: 0;
  margin-bottom: 8px;
`;

const CloseButton = styled.span`
  cursor: pointer;
`;

interface Props {
  title: string;
  onModalClose: () => void;
}

export const Modal: FC<Props> = ({ title, children, onModalClose }) => {
  // Close modal on esc, deactivated for now so we don't press esc by accident and
  // lose what you had on the modal. Maybe enable in the future
  // useEffect(() => {
  //   const closeOnEsc = (event: KeyboardEvent) =>
  //     event.keyCode === 27 && onModalClose();
  //
  //   document.addEventListener("keydown", closeOnEsc);
  //
  //   return () => document.removeEventListener("keydown", closeOnEsc);
  // }, [, onModalClose]);

  return (
    <ModalWrapper>
      <ModalBody>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onModalClose}>X</CloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalBody>
      <Overlay onClick={onModalClose} />
    </ModalWrapper>
  );
};
