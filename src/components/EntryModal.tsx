import React, { FC, useState, ChangeEvent, useEffect } from "react";
import { Modal } from "./UI/Modal";
import { cars } from "../dirt2-data/cars";
import { Car, Stage, RaceTypes, Conditions, Entry } from "../types";
import { Select } from "./UI/Select";
import { stages } from "../dirt2-data/stages";
import { api } from "../api";
import styled from "@emotion/styled";
import { LabeledInput, LabeledCleaveInput } from "./UI/LabeledInput";
import { Button, ButtonKind } from "./UI/Button";
import { Label } from "./UI/Label";
import { Flex } from "theme-ui";
import firebase from "firebase";

interface SelectOption<T> {
  value: T;
  label: string;
}

const option = <T extends string>(type: T): SelectOption<T> => ({
  value: type,
  label: type,
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
  const [, setForm] = useState<Entry>();

  const [car, setCar] = useState<Car>();
  const [stage, setStage] = useState<Stage>();
  const [time, setTime] = useState("");
  const [replayUrl, setReplay] = useState("");
  const [screenshot, setScreenshot] = useState("");
  const [raceType, setRaceType] = useState<SelectOption<RaceTypes>>(
    option(RaceTypes.Rally)
  );

  const player = firebase.auth().currentUser?.email ?? "";

  useEffect(() => {
    if (isEditing && entry) {
      setForm({
        ...entry,
      });
      setCar(cars.find((c) => c.id === entry.carId));
      setStage(stages.find((s) => s.id === entry.stageId));
      setTime(entry.time);
      setReplay(entry.replayUrl || "");
      setRaceType(option(entry.raceType || RaceTypes.Rally));
      setScreenshot(entry.imageUrl);
    }
  }, [entry, isEditing]);

  const createEntry = async () => {
    console.log(car, stage, time, raceType, player, screenshot);
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
      replayUrl: replayUrl,
      imageUrl: screenshot,
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
            onChange={(option: SelectOption<RaceTypes>) => {
              setRaceType(option);
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
            onChange={(option: Car) => setCar(option)}
            getOptionLabel={(option: Car) =>
              `${option.name} [${option.carClass}]`
            }
            options={cars.filter((c) => c.type === raceType.value)}
          />
        </Label>

        <Label>
          Stages
          <Select
            value={stage}
            onChange={(option: Stage) => setStage(option)}
            getOptionLabel={(option: Stage) =>
              `${option.stage} [${option.location}]`
            }
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
            blocks: [2, 2, 3],
          }}
        />

        <LabeledInput
          label="Player"
          disabled
          value={player}
          onChange={() => {}}
        />

        <LabeledInput label="Replay" value={replayUrl} onChange={setReplay} />

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

      <Flex sx={{ justifyContent: "space-between" }}>
        <div>
          {isEditing && (
            <Button kind={ButtonKind.Danger} onClick={() => deleteEntry()}>
              Delete
            </Button>
          )}
        </div>

        <div>
          <Button onClick={() => createEntry()}>
            {isEditing ? "Update" : "Create"}
          </Button>
        </div>
      </Flex>
    </Modal>
  );
};
