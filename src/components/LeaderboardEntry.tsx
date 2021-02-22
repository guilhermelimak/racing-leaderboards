import React, { FC, useState } from "react";
import { Entry } from "../types";
import { Modal } from "./UI/Modal";
import { cars } from "../dirt2-data/cars";
import { Box, Flex, Image, Link } from "theme-ui";
import { VideoIcon } from "../images/VideoIcon";
import { CameraIcon } from "../images/CameraIcon";
import { EntryModal } from "./EntryModal";

interface Props {
  entry: Entry;
}

const EntryContainer: FC<{ onClick: () => void }> = ({ children, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      padding: "10px",
      display: "grid",
      cursor: "pointer",
      gridTemplateColumns: "repeat(3, 1fr) 2fr 0.3fr 0.3fr",
      justifyItems: "center",
      alignItems: "center",
      borderBottom: "1px solid background",

      "&:last-child": {
        borderBottom: "0",
      },
    }}
  >
    {children}
  </Box>
);

export const LeaderboardEntry: FC<Props> = ({ entry }) => {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  return (
    <>
      <EntryContainer onClick={() => setEditModalOpen(true)}>
        <div>{entry.player}</div>

        <strong>{entry.time}</strong>

        <div>{entry.condition}</div>

        <div>{cars.find((c) => c.id === entry.carId)!.name}</div>

        <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
          {entry.replayUrl && (
            <Link
              sx={{ height: "24px" }}
              onClick={(e) => e.stopPropagation()}
              href={entry.replayUrl}
              target="_blank"
            >
              <VideoIcon />
            </Link>
          )}
        </Flex>

        {entry.imageUrl ? (
          <Link
            sx={{ height: "24px" }}
            onClick={(e) => {
              e.stopPropagation();
              setImageModalOpen(true);
            }}
          >
            <CameraIcon />
          </Link>
        ) : (
          <span style={{ color: "red", fontSize: "14px" }}>
            Missing evidence!
          </span>
        )}
      </EntryContainer>

      {imageModalOpen && (
        <Modal
          title={`${entry.player} ${entry.time}`}
          onModalClose={() => setImageModalOpen(false)}
        >
          <Image src={entry.imageUrl} />
        </Modal>
      )}

      {editModalOpen && (
        <EntryModal
          isEditing={true}
          entry={entry}
          onModalClose={() => setEditModalOpen(false)}
        />
      )}
    </>
  );
};
