import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { Entry } from "../types";
import { Modal } from "./UI/Modal";
import { cars } from "../dirt2-data/cars";
import { styles } from "../styles";
import { Flex } from "./UI/Flex";
import { VideoIcon } from "../images/VideoIcon";
import { CameraIcon } from "../images/CameraIcon";

interface Props {
  entry: Entry;
}

const EntryContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr) 2fr 0.3fr 0.3fr;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid ${styles.colors.background};

  &:last-child {
    border-bottom: 0;
  }
`;

const IconLink = styled.a`
  cursor: pointer;
  height: 24px;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
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
        <Flex justifyContent="center" alignItems="center">
          {entry.replayUrl && (
            <IconLink href={entry.replayUrl} target="_blank">
              <VideoIcon />
            </IconLink>
          )}
        </Flex>
        <IconLink onClick={() => setModalOpen(true)}>
          <CameraIcon />
        </IconLink>
      </EntryContainer>
      {modalOpen && (
        <Modal
          title={`${entry.player} ${entry.time}`}
          onModalClose={() => setModalOpen(false)}
        >
          <ModalImage src={entry.imageUrl} />
        </Modal>
      )}
    </>
  );
};
