import React, { FC } from "react";
import { useState, useEffect } from "react";
import { Entry, Stage } from "../types";
import { api } from "../api";
import { Container, Box, Button, Input, Label } from "theme-ui";
import { EntryModal } from "../components/EntryModal";
import { StageCollapse } from "../components/StageCollapse";
import { LeaderboardEntry } from "../components/LeaderboardEntry";
import { stages } from "../dirt2-data/stages";
import { Layout } from "../components/UI/Layout";
import firebase from "firebase";

const Header: FC = ({ children }) => (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "16px",
    }}
  >
    {children}
  </Box>
);

export const Leaderboards = () => {
  const [filter, setFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [entries, setEntries] = useState<Entry[]>([]);

  const createNew = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const unsubscribe = api.getEntries(setEntries);
    return () => unsubscribe();
  }, []);

  const user = firebase.auth().currentUser;

  const entriesForStage = (id: number) =>
    entries.filter(({ stageId }) => stageId === id);

  const hasEntriesForStage = (stage: Stage) =>
    !!entriesForStage(stage.id).length;

  const dedupeEntries = (acc: Entry[], entry: Entry) =>
    acc.find(
      (e) =>
        e.player.trim() === entry.player.trim() &&
        e.carId === entry.carId &&
        e.condition === entry.condition &&
        e.raceType === entry.raceType
    )
      ? acc
      : [...acc, entry];

  const sortByTime = (a: Entry, b: Entry) =>
    +a.time.replace(":", "").replace(".", "") -
    +b.time.replace(":", "").replace(".", "");

  const filterBySearch = ({ name, location }: Stage) =>
    name.toLowerCase().includes(filter.toLowerCase()) ||
    location.toLowerCase().includes(filter.toLowerCase());

  return (
    <Layout>
      <Container>
        <Header>
          {user?.email}
          <Label>
            Filter
            <Input
              value={filter}
              onChange={(evt) => setFilter(evt.target.value)}
            />
          </Label>

          <Button variant="secondary" onClick={createNew}>
            Add new record
          </Button>
        </Header>

        {isModalOpen && (
          <EntryModal
            isEditing={false}
            onModalClose={() => setIsModalOpen(false)}
          />
        )}

        {entries.length
          ? stages
              .filter(filterBySearch)
              .filter(hasEntriesForStage)
              .map((stage) => (
                <StageCollapse
                  key={`stage-${stage.id}`}
                  stage={{
                    ...stage,
                    name: `${stage.name} - ${
                      entriesForStage(stage.id).sort(sortByTime)[0].time
                    }`,
                  }}
                >
                  {entriesForStage(stage.id)
                    .sort(sortByTime)
                    .reduce(dedupeEntries, [] as Entry[])
                    .map((entry) => (
                      <LeaderboardEntry key={entry.id} entry={entry} />
                    ))}
                </StageCollapse>
              ))
          : "Loading entries..."}
      </Container>
    </Layout>
  );
};
