import { CarTypes } from "./types";
// (() => {
//   let carClass = "";

//   console.log(
//     JSON.stringify(
//       [...$0.children].reduce((acc, val) => {
//         if (val.tagName === "DL") {
//           carClass = val.querySelector("dt").innerHTML;
//           return acc;
//         }

//         if (val.tagName === "UL") {
//           const cars = [...val.children].reduce((acc, carEl) => {
//             return [
//               ...acc,
//               {
//                 type: CarTypes.RallyCross,
//                 name: carEl.querySelector("a").innerHTML,
//                 carClass
//               }
//             ];
//           }, []);

//           return [...acc, ...cars];
//         }

//         return acc;
//       }, [])
//     )
//   );
// })();

export const cars = [
  { type: CarTypes.Rally, name: "Mini Cooper S", carClass: "H1 (FWD)" },
  { type: CarTypes.Rally, name: "Lancia Fulvia HF", carClass: "H1 (FWD)" },
  {
    type: CarTypes.Rally,
    name: "DS Automobiles DS 21",
    carClass: "H1 (FWD)"
  },
  {
    type: CarTypes.Rally,
    name: "Volkswagen Golf GTI 16v",
    carClass: "H2 (FWD)"
  },
  { type: CarTypes.Rally, name: "Peugeot 205 GTI", carClass: "H2 (FWD)" },
  {
    type: CarTypes.Rally,
    name: "Ford Escort Mk II",
    carClass: "H2 (RWD)"
  },
  {
    type: CarTypes.Rally,
    name: "Alpine Renault A110 1600 S",
    carClass: "H2 (RWD)"
  },
  { type: CarTypes.Rally, name: "Fiat 131 Abarth", carClass: "H2 (RWD)" },
  {
    type: CarTypes.Rally,
    name: "Opel Kadett C GT/E",
    carClass: "H2 (RWD)"
  },
  {
    type: CarTypes.Rally,
    name: "BMW E30 M3 Evo Rally",
    carClass: "H3 (RWD)"
  },
  { type: CarTypes.Rally, name: "Opel Ascona 400", carClass: "H3 (RWD)" },
  { type: CarTypes.Rally, name: "Lancia Stratos", carClass: "H3 (RWD)" },
  { type: CarTypes.Rally, name: "Renault 5 Turbo", carClass: "H3 (RWD)" },
  { type: CarTypes.Rally, name: "Datsun 240Z", carClass: "H3 (RWD)" },
  {
    type: CarTypes.Rally,
    name: "Ford Sierra Cosworth RS500",
    carClass: "H3 (RWD)"
  },
  {
    type: CarTypes.Rally,
    name: "Lancia 037 Evo 2",
    carClass: "Group B (RWD)"
  },
  {
    type: CarTypes.Rally,
    name: "Opel Manta 400",
    carClass: "Group B (RWD)"
  },
  {
    type: CarTypes.Rally,
    name: "BMW M1 Procar",
    carClass: "Group B (RWD)"
  },
  {
    type: CarTypes.Rally,
    name: "Porsche 911 SC RS",
    carClass: "Group B (RWD)"
  },
  {
    type: CarTypes.Rally,
    name: "Audi Sport quattro S1 E2",
    carClass: "Group B (4WD)"
  },
  {
    type: CarTypes.Rally,
    name: "Peugeot 205 T16 Evo 2",
    carClass: "Group B (4WD)"
  },
  {
    type: CarTypes.Rally,
    name: "Lancia Delta S4",
    carClass: "Group B (4WD)"
  },
  { type: CarTypes.Rally, name: "Ford RS200", carClass: "Group B (4WD)" },
  {
    type: CarTypes.Rally,
    name: "MG Metro 6R4",
    carClass: "Group B (4WD)"
  },
  { type: CarTypes.Rally, name: "Ford Fiesta R2", carClass: "R2" },
  { type: CarTypes.Rally, name: "Opel Adam R2", carClass: "R2" },
  { type: CarTypes.Rally, name: "Peugeot 208 R2", carClass: "R2" },
  {
    type: CarTypes.Rally,
    name: "Peugeot 306 Maxi",
    carClass: "F2 Kit Car"
  },
  {
    type: CarTypes.Rally,
    name: "SEAT Ibiza Kitcar",
    carClass: "F2 Kit Car"
  },
  {
    type: CarTypes.Rally,
    name: "Volkswagen Golf Kitcar",
    carClass: "F2 Kit Car"
  },
  {
    type: CarTypes.Rally,
    name: "Mitsubishi Lancer Evolution VI",
    carClass: "Group A"
  },
  {
    type: CarTypes.Rally,
    name: "Subaru Impreza 1995",
    carClass: "Group A"
  },
  {
    type: CarTypes.Rally,
    name: "Lancia Delta HF Integrale",
    carClass: "Group A"
  },
  {
    type: CarTypes.Rally,
    name: "Ford Escort RS Cosworth",
    carClass: "Group A"
  },
  { type: CarTypes.Rally, name: "Subaru Legacy RS", carClass: "Group A" },
  { type: CarTypes.Rally, name: "Subaru WRX STI NR4", carClass: "NR4/R4" },
  {
    type: CarTypes.Rally,
    name: "Mitsubishi Lancer Evolution X",
    carClass: "NR4/R4"
  },
  {
    type: CarTypes.Rally,
    name: "Ford Focus RS Rally 2001",
    carClass: "Up to 2000cc"
  },
  {
    type: CarTypes.Rally,
    name: "Subaru Impreza (2001)",
    carClass: "Up to 2000cc"
  },
  {
    type: CarTypes.Rally,
    name: "Citroën C4 Rally",
    carClass: "Up to 2000cc"
  },
  {
    type: CarTypes.Rally,
    name: "Škoda Fabia Rally 2005",
    carClass: "Up to 2000cc"
  },
  {
    type: CarTypes.Rally,
    name: "Ford Focus RS Rally 2007",
    carClass: "Up to 2000cc"
  },
  {
    type: CarTypes.Rally,
    name: "Subaru Impreza",
    carClass: "Up to 2000cc"
  },
  {
    type: CarTypes.Rally,
    name: "Peugeot 206 Rally",
    carClass: "Up to 2000cc"
  },
  {
    type: CarTypes.Rally,
    name: "Subaru Impreza S4 Rally",
    carClass: "Up to 2000cc"
  },
  { type: CarTypes.Rally, name: "Ford Fiesta R5", carClass: "R5" },
  { type: CarTypes.Rally, name: "Peugeot 208 R5 T16", carClass: "R5" },
  {
    type: CarTypes.Rally,
    name: "Mitsubishi Space Star R5",
    carClass: "R5"
  },
  { type: CarTypes.Rally, name: "ŠKODA Fabia R5", carClass: "R5" },
  { type: CarTypes.Rally, name: "Citroën C3 R5", carClass: "R5" },
  { type: CarTypes.Rally, name: "Volkswagen Polo GTI R5", carClass: "R5" },
  {
    type: CarTypes.Rally,
    name: "Chevrolet Camaro GT4-R",
    carClass: "Rally GT"
  },
  {
    type: CarTypes.Rally,
    name: "Porsche 911 RGT Rally Spec",
    carClass: "Rally GT"
  },
  {
    type: CarTypes.Rally,
    name: "Aston Martin V8 Vantage GT4",
    carClass: "Rally GT"
  },
  { type: CarTypes.Rally, name: "Ford Mustang GT4", carClass: "Rally GT" },
  {
    type: CarTypes.Rally,
    name: "BMW M2 Competition",
    carClass: "Rally GT"
  },
  {
    type: CarTypes.RallyCross,
    name: "Volkswagen Polo S1600",
    carClass: "RX Super 1600S"
  },
  {
    type: CarTypes.RallyCross,
    name: "Renault Clio R.S. S1600",
    carClass: "RX Super 1600S"
  },
  {
    type: CarTypes.RallyCross,
    name: "Opel Corsa Super 1600",
    carClass: "RX Super 1600S"
  },
  {
    type: CarTypes.RallyCross,
    name: "Speedcar Xtrem",
    carClass: "Crosskart"
  },
  {
    type: CarTypes.RallyCross,
    name: "Lancia Delta S4 Rallycross",
    carClass: "Group B (Rallycross)"
  },
  {
    type: CarTypes.RallyCross,
    name: "Ford RS200 Evolution",
    carClass: "Group B (Rallycross)"
  },
  {
    type: CarTypes.RallyCross,
    name: "Peugeot 205 T16 Rallycross",
    carClass: "Group B (Rallycross)"
  },
  {
    type: CarTypes.RallyCross,
    name: "MG Metro 6R4 Rallycross",
    carClass: "Group B (Rallycross)"
  },
  {
    type: CarTypes.RallyCross,
    name: "Ford Fiesta OMSE SuperCar Lite",
    carClass: "RX2"
  },
  {
    type: CarTypes.RallyCross,
    name: "Subaru WRX STI RX",
    carClass: "RX Supercars"
  },
  {
    type: CarTypes.RallyCross,
    name: "Peugeot 208 WRX",
    carClass: "RX Supercars"
  },
  {
    type: CarTypes.RallyCross,
    name: "Audi S1 EKS RX quattro",
    carClass: "RX Supercars"
  },
  {
    type: CarTypes.RallyCross,
    name: "Ford Fiesta Rallycross (Mk8)",
    carClass: "RX Supercars"
  },
  {
    type: CarTypes.RallyCross,
    name: "Renault Megane RS RX",
    carClass: "RX Supercars"
  },
  {
    type: CarTypes.RallyCross,
    name: "Volkswagen Polo R Supercar",
    carClass: "RX Supercars"
  },
  {
    type: CarTypes.RallyCross,
    name: "Ford Fiesta Rallycross (Mk7)",
    carClass: "RX Supercars"
  },
  {
    type: CarTypes.RallyCross,
    name: "Renault Clio RS RX",
    carClass: "RX Supercars 2019"
  },
  {
    type: CarTypes.RallyCross,
    name: "Renault Megane RS RX",
    carClass: "RX Supercars 2019"
  },
  {
    type: CarTypes.RallyCross,
    name: "Ford Fiesta Rallycross (Mk8)",
    carClass: "RX Supercars 2019"
  },
  {
    type: CarTypes.RallyCross,
    name: "Mini Cooper SX1",
    carClass: "RX Supercars 2019"
  },
  {
    type: CarTypes.RallyCross,
    name: "Peugeot 208 WRX",
    carClass: "RX Supercars 2019"
  },
  {
    type: CarTypes.RallyCross,
    name: "Ford Fiesta Rallycross (STARD)",
    carClass: "RX Supercars 2019"
  },
  {
    type: CarTypes.RallyCross,
    name: "Ford Fiesta RXS Evo 5",
    carClass: "RX Supercars 2019"
  },
  {
    type: CarTypes.RallyCross,
    name: "Audi S1 EKS RX quattro",
    carClass: "RX Supercars 2019"
  },
  {
    type: CarTypes.RallyCross,
    name: "Seat Ibiza RX",
    carClass: "RX Supercars 2019"
  }
];
