export enum Locations {
  Argentina = "Catamarca Province, Argentina",
  Australia = "Monaro, Australia",
  NewZealand = "Hawkes Bay, New Zealand",
  Spawn = "Ribadelles, Spain",
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

export enum Directions {
  Forward = "Forward",
  Reverse = "Reverse"
}

export enum Conditions {
  Dry = "Dry",
  Wet = "Wet"
}

export interface Track {
  id: string;
  location: Locations;
  stage: string;
  distance: number;
  direction: Directions;
}

export interface Record {
  id: string;
  trackId: string;
  player: string;
  condition: Conditions;
  time: string;
  image: string;
}

export enum CarTypes {
  Rally = "Rally",
  RallyCross = "RallyCross"
}

export interface Car {
  type: CarTypes;
  class: CarClasses;
  name: string;
}

export enum CarClasses {
  HistoricH1FWD = "Historic Rally H1 (FWD)",
  HistoricH2FWD = "Historic Rally H2 (FWD)",
  HistoricH2EWD = "Historic Rally H2 (RWD)",
  F2Kit = "F2 Kit Car",
  HistoricH3RWD = "Historic Rally H3 (RWD)",
  HistoricGroupB4WD = "Historic Rally Group B (4WD)",
  HistoricGroupBRWD = "Historic Rally Group B (RWD)",
  ModernGroupA = "Modern Rally Group A",
  ModernGT = "Modern Rally GT",
  ModernR2 = "Modern Rally R2",
  ModernR4 = "Modern Rally NR4/R4",
  UpTo2000cc4WD = "Up to 2000cc (4WD)",
  ModernR5 = "Modern Rally R5"
}
