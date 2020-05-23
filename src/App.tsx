import React, { FC } from "react";
import { Collapse } from "./Collapse";
import styled from "@emotion/styled";
import { Record, Directions, Conditions } from "./types";

const EntryContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;
const fakeTrack = {
  id: "fake-track-id",
  location: "oberstein",
  direction: Directions.Forward,
  distance: 12.4,
  stage: "Germany"
};

const fakeRecord: Record = {
  id: "fake-record-id",
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
  return (
    <div className="App">
      <header className="App-header">
        <Collapse title="Oberstein">
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
        </Collapse>
        <Collapse title="Oberstein">
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
        </Collapse>
        <Collapse title="Oberstein">
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
        </Collapse>
        <Collapse title="Oberstein">
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
          <RecordEntry record={fakeRecord} />
        </Collapse>
      </header>
    </div>
  );
}
export default App;

// (() => {
//   let location = "";
//   let direction = "";
//   let stage = false;
//   let distance = "";
//
//   console.log(
//     JSON.stringify(
//       [...document.querySelectorAll(".wikitable:nth-of-type(2)  td")].reduce(
//         (acc, val) => {
//           if (val.rowSpan === 12) {
//             location = val.innerHTML;
//             return acc;
//           }
//
//           if (val.rowSpan === 6) {
//             direction = val.innerHTML;
//             return acc;
//           }
//
//           if (!stage) {
//             stage = val.innerHTML;
//             return acc;
//           } else {
//             distance = val.innerHTML;
//             const result = { location, direction, stage, distance };
//             stage = false;
//             return [...acc, result];
//           }
//         },
//         []
//       )
//     )
//   );
// })();
//
// (() => {
//   let tagName = "";
//
//   console.log(
//     JSON.stringify(
//       [...$0.children].reduce((acc, val) => {
//         if (val.tagName === "dl") {
//           tagName = val.innerHTML;
//           return acc;
//         }
//
//         if (val.tagName === "ul") {
//           const cars = [val.children];
//         }
//
//         console.log(val);
//       }, [])
//     )
//   );
// })();
