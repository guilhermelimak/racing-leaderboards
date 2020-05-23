export enum Locations {
  Argentina = "Catamarca Province, Argentina",
  Australia = "Monaro, Australia",
  NewZealand = "Hawkes Bay, New Zealand",
  Spain = "Ribadelles, Spain",
  USA = "New England, USA",
  Poland = "Łęczna County, Poland",
  Monaco = "Monte Carlo, Monaco",
  Sweden = "Värmland, Sweden",
  Baumholder = "Germany, Baumholder",
  Finland = "Jämsä, Finland",
  Greece = "Argolis, Greece",
  Wales = "Powys, Wales",
  Scotland = "Perth and Kinross, Scotland"
}

export enum CarClasses {
  RX1600S = "RX Super 1600S",
  CrossKart = "Crosskart",
  GroupBRallyCross = "Group B (Rallycross)",
  RX2 = "RX2",
  RXSupercars = "RX Supercars",
  RXSupercars2019 = "RX Supercars 2019",
  H1FWD = "H1 (FWD)",
  H2FWD = "H2 (FWD)",
  H2RWD = "H2 (RWD)",
  H3RWD = "H3 (RWD)",
  GroupBRWD = "Group B (RWD)",
  GroupB4WD = "Group B (4WD)",
  R2 = "R2",
  F2KitCar = "F2 Kit Car",
  GroupA = "Group A",
  NR4 = "NR4/R4",
  UpTo2000cc = "Up to 2000cc",
  R5 = "R5",
  RallyGT = "Rally GT"
}

export enum Directions {
  Forward = "Forward",
  Reverse = "Reverse"
}

export enum Conditions {
  Dry = "Dry",
  Wet = "Wet"
}

export interface Stage {
  id: number;
  location: Locations;
  stage: string;
  distance: string;
  direction: Directions;
}

export interface Entry {
  id?: number;
  stageId: number;
  carId: number;
  player: string;
  condition: Conditions;
  time: string;
  imageUrl: string;
  replayUrl?: string;
}

export enum RaceTypes {
  Rally = "Rally",
  RallyCross = "RallyCross"
}

export interface Car {
  type: RaceTypes;
  id: number;
  carClass: CarClasses;
  name: string;
}
