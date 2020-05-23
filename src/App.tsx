import React, { FC, useState } from "react";
import { Collapse } from "./Collapse";
import styled from "@emotion/styled";
import { Record, Directions, Conditions, Track, Locations } from "./types";
import { stages } from "./stages";
import { Modal } from "./Modal";

const EntryContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;
const fakeTrack: Track = {
  id: 20,
  location: Locations.Baumholder,
  direction: Directions.Forward,
  distance: "12.4",
  stage: "Germany"
};

const fakeRecord: Record = {
  id: 30,
  trackId: fakeTrack.id,
  player: "David",
  time: "3021",
  condition: Conditions.Dry,
  image: ""
};

interface Props {
  record: Record;
}

const RecordEntry: FC<Props> = ({ record }) => {
  return (
    <EntryContainer>
      <div>{record.player}</div>
      <div>{record.time}</div>
      <div>{record.image}</div>
    </EntryContainer>
  );
};

function App() {
  const [filter, setFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createNew = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <header className="App-header">
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
              <RecordEntry record={fakeRecord} />
              <RecordEntry record={fakeRecord} />
              <RecordEntry record={fakeRecord} />
              <RecordEntry record={fakeRecord} />
              <RecordEntry record={fakeRecord} />
            </Collapse>
          ))}
      </header>
    </div>
  );
}
export default App;
