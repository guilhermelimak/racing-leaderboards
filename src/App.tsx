import React, { FC, useState } from "react";
import { Collapse } from "./components/Collapse";
import styled from "@emotion/styled";
import { Entry, Directions, Conditions, Track, Locations } from "./types";
import { stages } from "./dirt2-data/stages";
import { Modal } from "./components/Modal";

const fakeTrack: Track = {
  id: 20,
  location: Locations.Baumholder,
  direction: Directions.Forward,
  distance: "12.4",
  stage: "Germany"
};

const fakeEntry: Entry = {
  id: 30,
  trackId: fakeTrack.id,
  player: "David",
  time: "3021",
  condition: Conditions.Dry,
  image: ""
};

interface Props {
  entry: Entry;
}

const EntryContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: 0;
  }
`;

const LeaderboardEntry: FC<Props> = ({ entry }) => {
  return (
    <EntryContainer>
      <div>{entry.player}</div>
      <div>{entry.time}</div>
      <div>{entry.image}</div>
    </EntryContainer>
  );
};

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

function App() {
  const [filter, setFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createNew = () => {
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <Container>
        <div>
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
        </div>

        {isModalOpen && (
          <Modal
            onModalClose={() => setIsModalOpen(false)}
            title="Add new entry"
          >
            test
          </Modal>
        )}

        {stages
          .filter(
            s =>
              s.stage.toLowerCase().includes(filter.toLowerCase()) ||
              s.location.toLowerCase().includes(filter.toLowerCase())
          )
          .map(t => (
            <Collapse key={t.id} title={`${t.location} - ${t.stage}`}>
              <LeaderboardEntry entry={fakeEntry} />
              <LeaderboardEntry entry={fakeEntry} />
              <LeaderboardEntry entry={fakeEntry} />
              <LeaderboardEntry entry={fakeEntry} />
              <LeaderboardEntry entry={fakeEntry} />
            </Collapse>
          ))}
      </Container>
    </Layout>
  );
}
export default App;
