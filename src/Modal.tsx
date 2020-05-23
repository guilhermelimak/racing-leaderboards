import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import Select from "react-select";
import { Car } from "./types";
import { cars } from "./cars";

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

interface Props {
  title: string;
  onModalClose: () => void;
}

export const Modal: FC<Props> = ({ title, children, onModalClose }) => {
  const [selectedCar, setSelectedCar] = useState<Car | null>();
  return (
    <ModalWrapper>
      <ModalBody>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle> <span onClick={onModalClose}>X</span>
        </ModalHeader>
        <ModalContent>
          <label>
            Cars
            <Select
              value={selectedCar}
              onChange={option => setSelectedCar(option as Car)}
              getOptionLabel={option =>
                `${option.name} [${option.type}][${option.carClass}]`
              }
              options={cars}
            />
          </label>
          {children}
        </ModalContent>
      </ModalBody>
      <Overlay onClick={onModalClose} />
    </ModalWrapper>
  );
};
