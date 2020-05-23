import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { Entry } from "../types";
import { Modal } from "./UI/Modal";
import { cars } from "../dirt2-data/cars";

interface Props {
  entry: Entry;
}

const EntryContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: 0;
  }
`;

const EntryScreenshot = styled.img`
  width: 40px;
  cursor: pointer;
`;

export const LeaderboardEntry: FC<Props> = ({ entry }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <EntryContainer>
        <div>{entry.player}</div>
        <strong>{entry.time}</strong>
        <div>{entry.condition}</div>
        <div>{cars.find(c => c.id === entry.carId)!.name}</div>
        <EntryScreenshot
          src={entry.imageUrl}
          onClick={() => setModalOpen(true)}
        />
      </EntryContainer>
      {modalOpen && (
        <Modal
          title={`${entry.player} ${entry.time}`}
          onModalClose={() => setModalOpen(false)}
        >
          <img src={entry.imageUrl} alt="" />
        </Modal>
      )}
    </>
  );
};
