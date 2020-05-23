import React, { FC, useState, useEffect } from "react";
import { Collapse } from "./components/Collapse";
import styled from "@emotion/styled";
import { Entry } from "./types";
import { stages } from "./dirt2-data/stages";
import { api } from "./service";
import { CreateEntryModal } from "./components/CreateEntryModal";
import { LeaderboardEntry } from "./components/LeaderboardEntry";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

function App() {
  const [filter, setFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [entries, setEntries] = useState<Entry[]>([]);

  const createNew = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    (async () => {
      console.log(await api.getEntries());
      setEntries(await api.getEntries());
    })();
  }, []);

  return (
    <Layout>
      <Container>
        <Header>
          <label>
            Filter
            <input
              type="text"
              name="filter"
              value={filter}
              onChange={evt => setFilter(evt.target.value)}
            />
          </label>
          <button onClick={createNew}>Add new record</button>
        </Header>

        {isModalOpen && (
          <CreateEntryModal onModalClose={() => setIsModalOpen(false)} />
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
                <Collapse
                  key={`stage-${stage.id}`}
                  title={`${stage.location} - ${stage.stage}`}
                >
                  {entries
                    .filter(e => e.stageId === stage.id)
                    .map(entry => (
                      <LeaderboardEntry key={entry.id} entry={entry} />
                    ))}
                </Collapse>
              ))
          : "Loading entries..."}
      </Container>
    </Layout>
  );
}
export default App;
