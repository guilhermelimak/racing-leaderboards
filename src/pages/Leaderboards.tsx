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

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
    (async () => {
      setEntries(await api.getEntries());
    })();
  }, []);

  return (
    <Layout>
      <Container>
        <Header>
          <LabeledInput label="Filter" value={filter} onChange={setFilter} />

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
                s =>
                  s.stage.toLowerCase().includes(filter.toLowerCase()) ||
                  s.location.toLowerCase().includes(filter.toLowerCase())
              )
              .filter(s => !!entries.filter(e => e.stageId === s.id).length)
              .map(stage => (
                <StageCollapse key={`stage-${stage.id}`} stage={stage}>
                  {entries
                    .filter(e => e.stageId === stage.id)
                    .map(entry => (
                      <LeaderboardEntry key={entry.id} entry={entry} />
                    ))}
                </StageCollapse>
              ))
          : "Loading entries..."}
      </Container>
    </Layout>
  );
};
