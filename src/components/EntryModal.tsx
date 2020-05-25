import React, { FC, useState, ChangeEvent, useEffect } from "react";
import { Modal } from "./UI/Modal";
import { cars } from "../dirt2-data/cars";
import { Car, Stage, RaceTypes, Conditions, Entry } from "../types";
import Select from "react-select";
import { stages } from "../dirt2-data/stages";
import { api } from "../api";
import styled from "@emotion/styled";
import { LabeledInput, LabeledCleaveInput } from "./UI/LabeledInput";
import { Button, ButtonKind } from "./UI/Button";
import { Label } from "./UI/Label";
import { Flex } from "./UI/Flex";

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
  isEditing: boolean;
  entry?: Entry;
}

export const EntryModal: FC<Props> = ({ onModalClose, isEditing, entry }) => {
  const [car, setCar] = useState<Car>();
  const [stage, setStage] = useState<Stage>();
  const [time, setTime] = useState("");
  const [player, setPlayer] = useState("");
  const [replay, setReplay] = useState("");
  const [screenshot, setScreenshot] = useState("");
  const [raceType, setRaceType] = useState<SelectOption<RaceTypes>>(
    option(RaceTypes.Rally)
  );

  useEffect(() => {
    if (isEditing && entry) {
      setCar(cars.find(c => c.id === entry.carId));
      setStage(stages.find(s => s.id === entry.stageId));
      setTime(entry.time);
      setReplay(entry.replayUrl || "");
      setPlayer(entry.player);
      setRaceType(option(entry.raceType || RaceTypes.Rally));
      setScreenshot(entry.imageUrl);
    }
  }, [entry, isEditing]);

  const createEntry = async () => {
    if (!car || !stage || !time || !raceType || !player || !screenshot) {
      alert("Wrong info. fix this shit");
      return;
    }

    const newEntry = {
      ...entry,
      carId: car.id,
      stageId: stage.id,
      condition: Conditions.Dry,
      raceType: raceType.value,
      time,
      player,
      replayUrl: replay,
      imageUrl: screenshot
    };

    await (isEditing ? api.updateEntry(newEntry) : api.createEntry(newEntry));

    onModalClose();
  };

  const deleteEntry = async () => {
    if (
      !window.confirm("Are you sure you want to delete this entry?") ||
      !entry
    ) {
      return;
    }

    await api.deleteEntry(entry);

    onModalClose();
  };

  const handleFileChosen = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length !== 1) {
      alert("No files, error");
      return;
    }

    const [file] = event.target.files;
    setScreenshot(await api.uploadImage(file));
    alert("Image uploaded successfully");
  };

  return (
    <Modal
      title={`${isEditing ? "Edit" : "Create"} entry`}
      onModalClose={onModalClose}
    >
      <FormContainer>
        <Label>
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
        </Label>

        <Label>
          Cars
          <Select
            value={car}
            onChange={option => setCar(option as Car)}
            getOptionLabel={option => `${option.name} [${option.carClass}]`}
            options={cars.filter(c => c.type === raceType.value)}
          />
        </Label>

        <Label>
          Stages
          <Select
            value={stage}
            onChange={option => setStage(option as Stage)}
            getOptionLabel={option => `${option.stage} [${option.location}]`}
            options={stages}
          />
        </Label>

        <LabeledCleaveInput
          label="Time"
          value={time}
          onChange={setTime}
          options={{
            numericOnly: true,
            delimiters: [":", "."],
            blocks: [2, 2, 3]
          }}
        />

        <LabeledInput label="Player" value={player} onChange={setPlayer} />

        <LabeledInput label="Replay" value={replay} onChange={setReplay} />

        <Label>
          Screenshot
          <input
            style={{ display: "block", boxSizing: "border-box" }}
            accept="image/*"
            type="file"
            name="screenshot"
            onChange={handleFileChosen}
          />
        </Label>
      </FormContainer>

      <Flex justifyContent="space-between">
        {isEditing && (
          <Button kind={ButtonKind.Danger} onClick={() => deleteEntry()}>
            Delete
          </Button>
        )}

        <Button onClick={() => createEntry()}>
          {isEditing ? "Update" : "Create"}
        </Button>
      </Flex>
    </Modal>
  );
};
