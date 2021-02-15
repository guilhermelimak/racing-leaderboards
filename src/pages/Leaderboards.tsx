import React from "react";
import { useState, useEffect } from "react";
import { Entry } from "../types";
import { api } from "../api";
import { LabeledInput } from "../components/UI/LabeledInput";
import { Button } from "../components/UI/Button";
import { EntryModal } from "../components/EntryModal";
import { StageCollapse } from "../components/StageCollapse";
import { LeaderboardEntry } from "../components/LeaderboardEntry";
import { stages } from "../dirt2-data/stages";
import styled from "@emotion/styled";
import { Layout } from "../components/UI/Layout";
import { Container } from "../components/UI/Container";
import { auth } from "firebase";
import firebase from "firebase";

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 16px;
`;

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

  return (
    <Layout>
      <Container>
        <Header>
          {user?.email}
          <LabeledInput
            label="Filter"
            marginLess={true}
            value={filter}
            onChange={setFilter}
          />

          <Button onClick={createNew}>Add new record</Button>
        </Header>

        {isModalOpen && (
          <EntryModal
            isEditing={false}
            onModalClose={() => setIsModalOpen(false)}
          />
        )}

        {entries.length
          ? stages
              .filter(
                (s) =>
                  s.stage.toLowerCase().includes(filter.toLowerCase()) ||
                  s.location.toLowerCase().includes(filter.toLowerCase())
              )
              .filter((s) => !!entries.filter((e) => e.stageId === s.id).length)
              .map((stage) => (
                <StageCollapse
                  key={`stage-${stage.id}`}
                  stage={{
                    ...stage,
                    stage: `${stage.stage} - ${
                      entries
                        .filter((e) => e.stageId === stage.id)
                        .sort(sortByTime)[0].time
                    }`,
                  }}
                >
                  {entries
                    .filter((e) => e.stageId === stage.id)
                    .sort(sortByTime)
                    .reduce(
                      (acc, val) =>
                        acc.find(
                          (v) =>
                            v.player.trim() === val.player.trim() &&
                            v.carId === val.carId &&
                            v.condition === val.condition &&
                            v.raceType === val.raceType
                        )
                          ? acc
                          : [...acc, val],
                      [] as Entry[]
                    )
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

const sortByTime = (a: Entry, b: Entry) => {
  return (
    +a.time.replace(":", "").replace(".", "") -
    +b.time.replace(":", "").replace(".", "")
  );
};
