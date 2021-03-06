import { Car, CarClasses, RaceTypes } from "../types";

export const cars: Car[] = [
  {
    type: RaceTypes.Rally,
    name: "Mini Cooper S",
    carClass: CarClasses.H1FWD,
    id: 0
  },
  {
    type: RaceTypes.Rally,
    name: "Lancia Fulvia HF",
    carClass: CarClasses.H1FWD,
    id: 1
  },
  {
    type: RaceTypes.Rally,
    name: "DS Automobiles DS 21",
    carClass: CarClasses.H1FWD,
    id: 2
  },
  {
    type: RaceTypes.Rally,
    name: "Volkswagen Golf GTI 16v",
    carClass: CarClasses.H2FWD,
    id: 3
  },
  {
    type: RaceTypes.Rally,
    name: "Peugeot 205 GTI",
    carClass: CarClasses.H2FWD,
    id: 4
  },
  {
    type: RaceTypes.Rally,
    name: "Ford Escort Mk II",
    carClass: CarClasses.H2RWD,
    id: 5
  },
  {
    type: RaceTypes.Rally,
    name: "Alpine Renault A110 1600 S",
    carClass: CarClasses.H2RWD,
    id: 6
  },
  {
    type: RaceTypes.Rally,
    name: "Fiat 131 Abarth",
    carClass: CarClasses.H2RWD,
    id: 7
  },
  {
    type: RaceTypes.Rally,
    name: "Opel Kadett C GT/E",
    carClass: CarClasses.H2RWD,
    id: 8
  },
  {
    type: RaceTypes.Rally,
    name: "BMW E30 M3 Evo Rally",
    carClass: CarClasses.H3RWD,
    id: 9
  },
  {
    type: RaceTypes.Rally,
    name: "Opel Ascona 400",
    carClass: CarClasses.H3RWD,
    id: 10
  },
  {
    type: RaceTypes.Rally,
    name: "Lancia Stratos",
    carClass: CarClasses.H3RWD,
    id: 11
  },
  {
    type: RaceTypes.Rally,
    name: "Renault 5 Turbo",
    carClass: CarClasses.H3RWD,
    id: 12
  },
  {
    type: RaceTypes.Rally,
    name: "Datsun 240Z",
    carClass: CarClasses.H3RWD,
    id: 13
  },
  {
    type: RaceTypes.Rally,
    name: "Ford Sierra Cosworth RS500",
    carClass: CarClasses.H3RWD,
    id: 14
  },
  {
    type: RaceTypes.Rally,
    name: "Lancia 037 Evo 2",
    carClass: CarClasses.GroupBRWD,
    id: 15
  },
  {
    type: RaceTypes.Rally,
    name: "Opel Manta 400",
    carClass: CarClasses.GroupBRWD,
    id: 16
  },
  {
    type: RaceTypes.Rally,
    name: "BMW M1 Procar",
    carClass: CarClasses.GroupBRWD,
    id: 17
  },
  {
    type: RaceTypes.Rally,
    name: "Porsche 911 SC RS",
    carClass: CarClasses.GroupBRWD,
    id: 18
  },
  {
    type: RaceTypes.Rally,
    name: "Audi Sport quattro S1 E2",
    carClass: CarClasses.GroupB4WD,
    id: 19
  },
  {
    type: RaceTypes.Rally,
    name: "Peugeot 205 T16 Evo 2",
    carClass: CarClasses.GroupB4WD,
    id: 20
  },
  {
    type: RaceTypes.Rally,
    name: "Lancia Delta S4",
    carClass: CarClasses.GroupB4WD,
    id: 21
  },
  {
    type: RaceTypes.Rally,
    name: "Ford RS200",
    carClass: CarClasses.GroupB4WD,
    id: 22
  },
  {
    type: RaceTypes.Rally,
    name: "MG Metro 6R4",
    carClass: CarClasses.GroupB4WD,
    id: 23
  },
  {
    type: RaceTypes.Rally,
    name: "Ford Fiesta R2",
    carClass: CarClasses.R2,
    id: 24
  },
  {
    type: RaceTypes.Rally,
    name: "Opel Adam R2",
    carClass: CarClasses.R2,
    id: 25
  },
  {
    type: RaceTypes.Rally,
    name: "Peugeot 208 R2",
    carClass: CarClasses.R2,
    id: 26
  },
  {
    type: RaceTypes.Rally,
    name: "Peugeot 306 Maxi",
    carClass: CarClasses.F2KitCar,
    id: 27
  },
  {
    type: RaceTypes.Rally,
    name: "SEAT Ibiza Kitcar",
    carClass: CarClasses.F2KitCar,
    id: 28
  },
  {
    type: RaceTypes.Rally,
    name: "Volkswagen Golf Kitcar",
    carClass: CarClasses.F2KitCar,
    id: 29
  },
  {
    type: RaceTypes.Rally,
    name: "Mitsubishi Lancer Evolution VI",
    carClass: CarClasses.GroupA,
    id: 30
  },
  {
    type: RaceTypes.Rally,
    name: "Subaru Impreza 1995",
    carClass: CarClasses.GroupA,
    id: 31
  },
  {
    type: RaceTypes.Rally,
    name: "Lancia Delta HF Integrale",
    carClass: CarClasses.GroupA,
    id: 32
  },
  {
    type: RaceTypes.Rally,
    name: "Ford Escort RS Cosworth",
    carClass: CarClasses.GroupA,
    id: 33
  },
  {
    type: RaceTypes.Rally,
    name: "Subaru Legacy RS",
    carClass: CarClasses.GroupA,
    id: 34
  },
  {
    type: RaceTypes.Rally,
    name: "Subaru WRX STI NR4",
    carClass: CarClasses.NR4,
    id: 35
  },
  {
    type: RaceTypes.Rally,
    name: "Mitsubishi Lancer Evolution X",
    carClass: CarClasses.NR4,
    id: 36
  },
  {
    type: RaceTypes.Rally,
    name: "Ford Focus RS Rally 2001",
    carClass: CarClasses.UpTo2000cc,
    id: 37
  },
  {
    type: RaceTypes.Rally,
    name: "Subaru Impreza (2001)",
    carClass: CarClasses.UpTo2000cc,
    id: 38
  },
  {
    type: RaceTypes.Rally,
    name: "Citroën C4 Rally",
    carClass: CarClasses.UpTo2000cc,
    id: 39
  },
  {
    type: RaceTypes.Rally,
    name: "Škoda Fabia Rally 2005",
    carClass: CarClasses.UpTo2000cc,
    id: 40
  },
  {
    type: RaceTypes.Rally,
    name: "Ford Focus RS Rally 2007",
    carClass: CarClasses.UpTo2000cc,
    id: 41
  },
  {
    type: RaceTypes.Rally,
    name: "Subaru Impreza",
    carClass: CarClasses.UpTo2000cc,
    id: 42
  },
  {
    type: RaceTypes.Rally,
    name: "Peugeot 206 Rally",
    carClass: CarClasses.UpTo2000cc,
    id: 43
  },
  {
    type: RaceTypes.Rally,
    name: "Subaru Impreza S4 Rally",
    carClass: CarClasses.UpTo2000cc,
    id: 44
  },
  {
    type: RaceTypes.Rally,
    name: "Ford Fiesta R5",
    carClass: CarClasses.R5,
    id: 45
  },
  {
    type: RaceTypes.Rally,
    name: "Peugeot 208 R5 T16",
    carClass: CarClasses.R5,
    id: 46
  },
  {
    type: RaceTypes.Rally,
    name: "Mitsubishi Space Star R5",
    carClass: CarClasses.R5,
    id: 47
  },
  {
    type: RaceTypes.Rally,
    name: "ŠKODA Fabia R5",
    carClass: CarClasses.R5,
    id: 48
  },
  {
    type: RaceTypes.Rally,
    name: "Citroën C3 R5",
    carClass: CarClasses.R5,
    id: 49
  },
  {
    type: RaceTypes.Rally,
    name: "Volkswagen Polo GTI R5",
    carClass: CarClasses.R5,
    id: 50
  },
  {
    type: RaceTypes.Rally,
    name: "Chevrolet Camaro GT4-R",
    carClass: CarClasses.RallyGT,
    id: 51
  },
  {
    type: RaceTypes.Rally,
    name: "Porsche 911 RGT Rally Spec",
    carClass: CarClasses.RallyGT,
    id: 52
  },
  {
    type: RaceTypes.Rally,
    name: "Aston Martin V8 Vantage GT4",
    carClass: CarClasses.RallyGT,
    id: 53
  },
  {
    type: RaceTypes.Rally,
    name: "Ford Mustang GT4",
    carClass: CarClasses.RallyGT,
    id: 54
  },
  {
    type: RaceTypes.Rally,
    name: "BMW M2 Competition",
    carClass: CarClasses.RallyGT,
    id: 55
  },
  {
    type: RaceTypes.RallyCross,
    name: "Volkswagen Polo S1600",
    carClass: CarClasses.RX1600S,
    id: 56
  },
  {
    type: RaceTypes.RallyCross,
    name: "Renault Clio R.S. S1600",
    carClass: CarClasses.RX1600S,
    id: 57
  },
  {
    type: RaceTypes.RallyCross,
    name: "Opel Corsa Super 1600",
    carClass: CarClasses.RX1600S,
    id: 58
  },
  {
    type: RaceTypes.RallyCross,
    name: "Speedcar Xtrem",
    carClass: CarClasses.CrossKart,
    id: 59
  },
  {
    type: RaceTypes.RallyCross,
    name: "Lancia Delta S4 Rallycross",
    carClass: CarClasses.GroupBRallyCross,
    id: 60
  },
  {
    type: RaceTypes.RallyCross,
    name: "Ford RS200 Evolution",
    carClass: CarClasses.GroupBRallyCross,
    id: 61
  },
  {
    type: RaceTypes.RallyCross,
    name: "Peugeot 205 T16 Rallycross",
    carClass: CarClasses.GroupBRallyCross,
    id: 62
  },
  {
    type: RaceTypes.RallyCross,
    name: "MG Metro 6R4 Rallycross",
    carClass: CarClasses.GroupBRallyCross,
    id: 63
  },
  {
    type: RaceTypes.RallyCross,
    name: "Ford Fiesta OMSE SuperCar Lite",
    carClass: CarClasses.RX2,
    id: 64
  },
  {
    type: RaceTypes.RallyCross,
    name: "Subaru WRX STI RX",
    carClass: CarClasses.RXSupercars,
    id: 65
  },
  {
    type: RaceTypes.RallyCross,
    name: "Peugeot 208 WRX",
    carClass: CarClasses.RXSupercars,
    id: 66
  },
  {
    type: RaceTypes.RallyCross,
    name: "Audi S1 EKS RX quattro",
    carClass: CarClasses.RXSupercars,
    id: 67
  },
  {
    type: RaceTypes.RallyCross,
    name: "Ford Fiesta Rallycross (Mk8)",
    carClass: CarClasses.RXSupercars,
    id: 68
  },
  {
    type: RaceTypes.RallyCross,
    name: "Renault Megane RS RX",
    carClass: CarClasses.RXSupercars,
    id: 69
  },
  {
    type: RaceTypes.RallyCross,
    name: "Volkswagen Polo R Supercar",
    carClass: CarClasses.RXSupercars,
    id: 70
  },
  {
    type: RaceTypes.RallyCross,
    name: "Ford Fiesta Rallycross (Mk7)",
    carClass: CarClasses.RXSupercars,
    id: 71
  },
  {
    type: RaceTypes.RallyCross,
    name: "Renault Clio RS RX",
    carClass: CarClasses.RXSupercars2019,
    id: 72
  },
  {
    type: RaceTypes.RallyCross,
    name: "Renault Megane RS RX",
    carClass: CarClasses.RXSupercars2019,
    id: 73
  },
  {
    type: RaceTypes.RallyCross,
    name: "Ford Fiesta Rallycross (Mk8)",
    carClass: CarClasses.RXSupercars2019,
    id: 74
  },
  {
    type: RaceTypes.RallyCross,
    name: "Mini Cooper SX1",
    carClass: CarClasses.RXSupercars2019,
    id: 75
  },
  {
    type: RaceTypes.RallyCross,
    name: "Peugeot 208 WRX",
    carClass: CarClasses.RXSupercars2019,
    id: 76
  },
  {
    type: RaceTypes.RallyCross,
    name: "Ford Fiesta Rallycross (STARD)",
    carClass: CarClasses.RXSupercars2019,
    id: 77
  },
  {
    type: RaceTypes.RallyCross,
    name: "Ford Fiesta RXS Evo 5",
    carClass: CarClasses.RXSupercars2019,
    id: 78
  },
  {
    type: RaceTypes.RallyCross,
    name: "Audi S1 EKS RX quattro",
    carClass: CarClasses.RXSupercars2019,
    id: 79
  },
  {
    type: RaceTypes.RallyCross,
    name: "Seat Ibiza RX",
    carClass: CarClasses.RXSupercars2019,
    id: 80
  }
];
