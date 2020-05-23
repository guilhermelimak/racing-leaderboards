import React, { FC, useState, ChangeEvent } from "react";
import { Modal } from "./UI/Modal";
import { cars } from "../dirt2-data/cars";
import { Car, Stage, RaceTypes, Conditions } from "../types";
import Select from "react-select";
import { stages } from "../dirt2-data/stages";
import { Global, css } from "@emotion/core";
import { api } from "../service";
import styled from "@emotion/styled";
import { LabeledInput } from "./UI/LabeledInput";
import { Button } from "./UI/Button";

interface SelectOption<T> {
  value: T;
  label: string;
}

const option = <T extends string>(type: T): SelectOption<T> => ({
  value: type,
  label: type
});

const raceTypes = [option(RaceTypes.Rally), option(RaceTypes.RallyCross)];

const FormContainer = styled.div`
  display: Flex;
  flex-direction: column;
`;

interface Props {
  onModalClose: () => void;
}

export const CreateEntryModal: FC<Props> = ({ onModalClose }) => {
  const [car, setCar] = useState<Car>();
  const [stage, setStage] = useState<Stage>();
  const [time, setTime] = useState("");
  const [player, setPlayer] = useState("");
  const [replay, setReplay] = useState("");
  const [raceType, setRaceType] = useState<SelectOption<RaceTypes>>(
    option(RaceTypes.Rally)
  );

  const [screenshot, setScreenshot] = useState("");

  const createEntry = () => {
    if (!car || !stage || !time || !raceType || !player) {
      alert("Wrong info. fix this shit");
      return;
    }

    return api.createEntry({
      carId: car.id,
      stageId: stage.id,
      condition: Conditions.Dry,
      time,
      player,
      replayUrl: replay,
      imageUrl: screenshot
    });
  };

  const handleFileChosen = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length !== 1) {
      alert("No files, error");
      return;
    }

    const [file] = event.target.files;
    setScreenshot(await api.uploadImage(file));
  };

  return (
    <Modal title="Create entry" onModalClose={() => onModalClose()}>
      <Global
        styles={css`
          body {
            overflow: hidden;
          }
          input {
            width: 100%;
            margin-bottom: 8px;
          }
        `}
      />
      <FormContainer>
        <label>
          Race type
          <Select
            value={raceType}
            onChange={option => {
              setRaceType(option as SelectOption<RaceTypes>);
              setCar(undefined);
              setStage(undefined);
            }}
            options={raceTypes}
          />
        </label>

        <label>
          Cars
          <Select
            value={car}
            onChange={option => setCar(option as Car)}
            getOptionLabel={option => `${option.name} [${option.carClass}]`}
            options={cars.filter(c => c.type === raceType.value)}
          />
        </label>

        <label>
          Stages
          <Select
            value={stage}
            onChange={option => setStage(option as Stage)}
            getOptionLabel={option => `${option.stage} [${option.location}]`}
            options={stages}
          />
        </label>

        <LabeledInput label="Time" value={time} onChange={setTime} />

        <LabeledInput label="Player" value={player} onChange={setPlayer} />

        <LabeledInput label="Replay" value={replay} onChange={setReplay} />

        <label>
          Screenshot
          <input
            accept="image/*"
            type="file"
            name="screenshot"
            onChange={handleFileChosen}
          />
        </label>
      </FormContainer>
      <Button onClick={() => createEntry()}>submit</Button>
    </Modal>
  );
};
