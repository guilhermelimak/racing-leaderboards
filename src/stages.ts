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

export const stages = [
  {
    location: "Catamarca Province, Argentina",
    direction: "Forward",
    stage: "Las Juntas",
    distance: "8.25"
  },
  {
    location: "Catamarca Province, Argentina",
    direction: "Forward",
    stage: "Valle de los puentes",
    distance: "7.98"
  },
  {
    location: "Catamarca Province, Argentina",
    direction: "Forward",
    stage: "Camino de acantilados y rocas",
    distance: "5.30"
  },
  {
    location: "Catamarca Province, Argentina",
    direction: "Forward",
    stage: "San Isidro",
    distance: "4.48"
  },
  {
    location: "Catamarca Province, Argentina",
    direction: "Forward",
    stage: "Miraflores",
    distance: "3.35"
  },
  {
    location: "Catamarca Province, Argentina",
    direction: "Forward",
    stage: "El Rodeo",
    distance: "2.84"
  },
  {
    location: "Catamarca Province, Argentina",
    direction: "Reverse",
    stage: "Camino a La Puerta",
    distance: "8.25"
  },
  {
    location: "Catamarca Province, Argentina",
    direction: "Reverse",
    stage: "Valle de los puentes a la inversa",
    distance: "7.98"
  },
  {
    location: "Catamarca Province, Argentina",
    direction: "Reverse",
    stage: "Camino de acantilados y rocas inverso",
    distance: "5.30"
  },
  {
    location: "Catamarca Province, Argentina",
    direction: "Reverse",
    stage: "Camino a Coneta",
    distance: "4.48"
  },
  {
    location: "Catamarca Province, Argentina",
    direction: "Reverse",
    stage: "Huillaprima",
    distance: "3.35"
  },
  {
    location: "Catamarca Province, Argentina",
    direction: "Reverse",
    stage: "La Merced",
    distance: "2.84"
  },
  {
    location: "Monaro, Australia",
    direction: "Forward",
    stage: "Mount Kaye Pass",
    distance: "12.50"
  },
  {
    location: "Monaro, Australia",
    direction: "Forward",
    stage: "Chandlers Creek",
    distance: "12.34"
  },
  {
    location: "Monaro, Australia",
    direction: "Forward",
    stage: "Bondi Forest",
    distance: "7.01"
  },
  {
    location: "Monaro, Australia",
    direction: "Forward",
    stage: "Rockton Plains",
    distance: "6.89"
  },
  {
    location: "Monaro, Australia",
    direction: "Forward",
    stage: "Yambulla Mountain Ascent",
    distance: "6.64"
  },
  {
    location: "Monaro, Australia",
    direction: "Forward",
    stage: "Noorinbee Ridge Ascent",
    distance: "5.28"
  },
  {
    location: "Monaro, Australia",
    direction: "Reverse",
    stage: "Mount Kaye Pass Reverse",
    distance: "12.50"
  },
  {
    location: "Monaro, Australia",
    direction: "Reverse",
    stage: "Chandlers Creek Reverse",
    distance: "12.34"
  },
  {
    location: "Monaro, Australia",
    direction: "Reverse",
    stage: "Taylor Farm Sprint",
    distance: "7.01"
  },
  {
    location: "Monaro, Australia",
    direction: "Reverse",
    stage: "Rockton Plains Reverse",
    distance: "6.89"
  },
  {
    location: "Monaro, Australia",
    direction: "Reverse",
    stage: "Yambulla Mountain Descent",
    distance: "6.64"
  },
  {
    location: "Monaro, Australia",
    direction: "Reverse",
    stage: "Noorinbee Ridge Descent",
    distance: "5.28"
  },
  {
    location: "Hawkes Bay, New Zealand",
    direction: "Forward",
    stage: "Waimarama Point Forward",
    distance: "16.06"
  },
  {
    location: "Hawkes Bay, New Zealand",
    direction: "Forward",
    stage: "Te Awanga Forward",
    distance: "11.48"
  },
  {
    location: "Hawkes Bay, New Zealand",
    direction: "Forward",
    stage: "Waimarama Sprint Forward",
    distance: "8.81"
  },
  {
    location: "Hawkes Bay, New Zealand",
    direction: "Forward",
    stage: "Elsthorpe Sprint Forward",
    distance: "7.32"
  },
  {
    location: "Hawkes Bay, New Zealand",
    direction: "Forward",
    stage: "Ocean Beach Sprint Forward",
    distance: "6.61"
  },
  {
    location: "Hawkes Bay, New Zealand",
    direction: "Forward",
    stage: "Te Awanga Sprint Forward",
    distance: "4.79"
  },
  {
    location: "Hawkes Bay, New Zealand",
    direction: "Reverse",
    stage: "Waimarama Point Reverse",
    distance: "16.06"
  },
  {
    location: "Hawkes Bay, New Zealand",
    direction: "Reverse",
    stage: "Ocean Beach",
    distance: "11.48"
  },
  {
    location: "Hawkes Bay, New Zealand",
    direction: "Reverse",
    stage: "Waimarama Sprint Reverse",
    distance: "8.81"
  },
  {
    location: "Hawkes Bay, New Zealand",
    direction: "Reverse",
    stage: "Elsthorpe Sprint Reverse",
    distance: "7.32"
  },
  {
    location: "Hawkes Bay, New Zealand",
    direction: "Reverse",
    stage: "Ocean Beach Sprint Reverse",
    distance: "6.61"
  },
  {
    location: "Hawkes Bay, New Zealand",
    direction: "Reverse",
    stage: "Te Awanga Sprint Reverse",
    distance: "4.79"
  },
  {
    location: "Ribadelles, Spain",
    direction: "Forward",
    stage: "Comienzo De Bellriu",
    distance: "14.34"
  },
  {
    location: "Ribadelles, Spain",
    direction: "Forward",
    stage: "Centenera",
    distance: "10.57"
  },
  {
    location: "Ribadelles, Spain",
    direction: "Forward",
    stage: "Ascenso por valle el Gualet",
    distance: "7.00"
  },
  {
    location: "Ribadelles, Spain",
    direction: "Forward",
    stage: "Viñedos dentro del valle Parra",
    distance: "6.81"
  },
  {
    location: "Ribadelles, Spain",
    direction: "Forward",
    stage: "Viñedos Dardenyà",
    distance: "6.55"
  },
  {
    location: "Ribadelles, Spain",
    direction: "Forward",
    stage: "Descenso por carretera",
    distance: "4.58"
  },
  {
    location: "Ribadelles, Spain",
    direction: "Reverse",
    stage: "Final de Bellriu",
    distance: "14.34"
  },
  {
    location: "Ribadelles, Spain",
    direction: "Reverse",
    stage: "Camino a Centenera",
    distance: "10.57"
  },
  {
    location: "Ribadelles, Spain",
    direction: "Reverse",
    stage: "Salida desde Montverd",
    distance: "7.00"
  },
  {
    location: "Ribadelles, Spain",
    direction: "Reverse",
    stage: "Ascenso bosque Montverd",
    distance: "6.81"
  },
  {
    location: "Ribadelles, Spain",
    direction: "Reverse",
    stage: "Viñedos Dardenyà inversa",
    distance: "6.55"
  },
  {
    location: "Ribadelles, Spain",
    direction: "Reverse",
    stage: "Subida por carretera",
    distance: "4.58"
  },
  {
    location: "New England, USA",
    direction: "Forward",
    stage: "Beaver Creek Trail Forward",
    distance: "12.86"
  },
  {
    location: "New England, USA",
    direction: "Forward",
    stage: "North Fork Pass",
    distance: "12.50"
  },
  {
    location: "New England, USA",
    direction: "Forward",
    stage: "Hancock Creek Burst",
    distance: "6.89"
  },
  {
    location: "New England, USA",
    direction: "Forward",
    stage: "Fuller Mountain Ascent",
    distance: "6.64"
  },
  {
    location: "New England, USA",
    direction: "Forward",
    stage: "Tolt Valley Sprint Forward",
    distance: "6.10"
  },
  {
    location: "New England, USA",
    direction: "Forward",
    stage: "Hancock Hill Sprint Forward",
    distance: "6.01"
  },
  {
    location: "New England, USA",
    direction: "Reverse",
    stage: "Beaver Creek Trail Reverse",
    distance: "12.86"
  },
  {
    location: "New England, USA",
    direction: "Reverse",
    stage: "North Fork Pass Reverse",
    distance: "12.50"
  },
  {
    location: "New England, USA",
    direction: "Reverse",
    stage: "Fury Lake Depart",
    distance: "6.89"
  },
  {
    location: "New England, USA",
    direction: "Reverse",
    stage: "Fuller Mountain Descent",
    distance: "6.64"
  },
  {
    location: "New England, USA",
    direction: "Reverse",
    stage: "Tolt Valley Sprint Reverse",
    distance: "6.10"
  },
  {
    location: "New England, USA",
    direction: "Reverse",
    stage: "Hancock Hill Sprint Reverse",
    distance: "6.01"
  },
  {
    location: "Łęczna County, Poland",
    direction: "Forward",
    stage: "Zaróbka",
    distance: "16.46"
  },
  {
    location: "Łęczna County, Poland",
    direction: "Forward",
    stage: "Zienki",
    distance: "13.42"
  },
  {
    location: "Łęczna County, Poland",
    direction: "Forward",
    stage: "Marynka",
    distance: "9.25"
  },
  {
    location: "Łęczna County, Poland",
    direction: "Forward",
    stage: "Kopina",
    distance: "7.03"
  },
  {
    location: "Łęczna County, Poland",
    direction: "Forward",
    stage: "Lejno",
    distance: "6.72"
  },
  {
    location: "Łęczna County, Poland",
    direction: "Forward",
    stage: "Czarny Las",
    distance: "6.62"
  },
  {
    location: "Łęczna County, Poland",
    direction: "Reverse",
    stage: "Zagórze",
    distance: "16.46"
  },
  {
    location: "Łęczna County, Poland",
    direction: "Reverse",
    stage: "Jezioro Rotcze",
    distance: "13.42"
  },
  {
    location: "Łęczna County, Poland",
    direction: "Reverse",
    stage: "Borysik",
    distance: "9.25"
  },
  {
    location: "Łęczna County, Poland",
    direction: "Reverse",
    stage: "Józefin",
    distance: "7.03"
  },
  {
    location: "Łęczna County, Poland",
    direction: "Reverse",
    stage: "Jagodno",
    distance: "6.82"
  },
  {
    location: "Łęczna County, Poland",
    direction: "Reverse",
    stage: "Jezioro Lukie",
    distance: "6.62"
  },
  {
    location: "Monte Carlo, Monaco",
    direction: "Forward",
    stage: "Vallée descendante",
    distance: "10.87"
  },
  {
    location: "Monte Carlo, Monaco",
    direction: "Forward",
    stage: "Pra d’Alart",
    distance: "9.83"
  },
  {
    location: "Monte Carlo, Monaco",
    direction: "Forward",
    stage: "Col de Turini - Départ en descente",
    distance: "6.85"
  },
  {
    location: "Monte Carlo, Monaco",
    direction: "Forward",
    stage: "Gordolon - Courte montée",
    distance: "5.17"
  },
  {
    location: "Monte Carlo, Monaco",
    direction: "Forward",
    stage: "Col de Turini sprint en montée",
    distance: "4.73"
  },
  {
    location: "Monte Carlo, Monaco",
    direction: "Forward",
    stage: "Route de Turini Descente",
    distance: "3.95"
  },
  {
    location: "Monte Carlo, Monaco",
    direction: "Reverse",
    stage: "Route de Turini",
    distance: "10.87"
  },
  {
    location: "Monte Carlo, Monaco",
    direction: "Reverse",
    stage: "Col de Turini Départ",
    distance: "9.83"
  },
  {
    location: "Monte Carlo, Monaco",
    direction: "Reverse",
    stage: "Route de Turini Montée",
    distance: "6.84"
  },
  {
    location: "Monte Carlo, Monaco",
    direction: "Reverse",
    stage: "Col de Turini - Descente",
    distance: "5.17"
  },
  {
    location: "Monte Carlo, Monaco",
    direction: "Reverse",
    stage: "Col de Turini - Sprint en descente",
    distance: "4.73"
  },
  {
    location: "Monte Carlo, Monaco",
    direction: "Reverse",
    stage: "Approche du Col de Turini - Montée",
    distance: "3.95"
  },
  {
    location: "Värmland, Sweden",
    direction: "Forward",
    stage: "Hamra",
    distance: "12.34"
  },
  {
    location: "Värmland, Sweden",
    direction: "Forward",
    stage: "Ransbysäter",
    distance: "11.98"
  },
  {
    location: "Värmland, Sweden",
    direction: "Forward",
    stage: "Elgsjön",
    distance: "7.28"
  },
  {
    location: "Värmland, Sweden",
    direction: "Forward",
    stage: "Stor-jangen Sprint",
    distance: "6.69"
  },
  {
    location: "Värmland, Sweden",
    direction: "Forward",
    stage: "Älgsjön Sprint",
    distance: "5.25"
  },
  {
    location: "Värmland, Sweden",
    direction: "Forward",
    stage: "Östra Hinnsjön",
    distance: "5.19"
  },
  {
    location: "Värmland, Sweden",
    direction: "Reverse",
    stage: "Lysvik",
    distance: "12.34"
  },
  {
    location: "Värmland, Sweden",
    direction: "Reverse",
    stage: "Norraskoga",
    distance: "11.98"
  },
  {
    location: "Värmland, Sweden",
    direction: "Reverse",
    stage: "Älgsjön",
    distance: "7.28"
  },
  {
    location: "Värmland, Sweden",
    direction: "Reverse",
    stage: "Stor-jangen Sprint Reverse",
    distance: "6.69"
  },
  {
    location: "Värmland, Sweden",
    direction: "Reverse",
    stage: "Skogsrallyt",
    distance: "5.25"
  },
  {
    location: "Värmland, Sweden",
    direction: "Reverse",
    stage: "Björklangen",
    distance: "5.19"
  },
  {
    location: "Germany, Baumholder",
    direction: "Forward",
    stage: "Oberstein",
    distance: "11.67"
  },
  {
    location: "Germany, Baumholder",
    direction: "Forward",
    stage: "Hammerstein",
    distance: "10.81"
  },
  {
    location: "Germany, Baumholder",
    direction: "Forward",
    stage: "Kreuzungsring",
    distance: "6.31"
  },
  {
    location: "Germany, Baumholder",
    direction: "Forward",
    stage: "Verbundsring",
    distance: "5.85"
  },
  {
    location: "Germany, Baumholder",
    direction: "Forward",
    stage: "Innerer Feld-Sprint",
    distance: "5.56"
  },
  {
    location: "Germany, Baumholder",
    direction: "Forward",
    stage: "Waldaufstieg",
    distance: "5.39"
  },
  {
    location: "Germany, Baumholder",
    direction: "Reverse",
    stage: "Frauenberg",
    distance: "11.67"
  },
  {
    location: "Germany, Baumholder",
    direction: "Reverse",
    stage: "Ruschberg",
    distance: "10.70"
  },
  {
    location: "Germany, Baumholder",
    direction: "Reverse",
    stage: "Kreuzungsring reverse",
    distance: "6.31"
  },
  {
    location: "Germany, Baumholder",
    direction: "Reverse",
    stage: "Verbundsring Reverse",
    distance: "5.85"
  },
  {
    location: "Germany, Baumholder",
    direction: "Reverse",
    stage: "Innerer Feld-Sprint (umgekehrt)",
    distance: "5.56"
  },
  {
    location: "Germany, Baumholder",
    direction: "Reverse",
    stage: "Waldabstieg",
    distance: "5.39"
  },
  {
    location: "Jämsä, Finland",
    direction: "Forward",
    stage: "Kakaristo",
    distance: "16.20"
  },
  {
    location: "Jämsä, Finland",
    direction: "Forward",
    stage: "Kontinjärvi",
    distance: "15.05"
  },
  {
    location: "Jämsä, Finland",
    direction: "Forward",
    stage: "Kotajärvi",
    distance: "8.10"
  },
  {
    location: "Jämsä, Finland",
    direction: "Forward",
    stage: "Iso Oksjärvi",
    distance: "8.04"
  },
  {
    location: "Jämsä, Finland",
    direction: "Forward",
    stage: "Kailajärvi",
    distance: "7.51"
  },
  {
    location: "Jämsä, Finland",
    direction: "Forward",
    stage: "Naarajärvi",
    distance: "7.43"
  },
  {
    location: "Jämsä, Finland",
    direction: "Reverse",
    stage: "Pitkäjärvi",
    distance: "16.20"
  },
  {
    location: "Jämsä, Finland",
    direction: "Reverse",
    stage: "Hämelahti",
    distance: "14.96"
  },
  {
    location: "Jämsä, Finland",
    direction: "Reverse",
    stage: "Oksala",
    distance: "8.10"
  },
  {
    location: "Jämsä, Finland",
    direction: "Reverse",
    stage: "Järvenkylä",
    distance: "8.05"
  },
  {
    location: "Jämsä, Finland",
    direction: "Reverse",
    stage: "Jyrkysjärvi",
    distance: "7.55"
  },
  {
    location: "Jämsä, Finland",
    direction: "Reverse",
    stage: "Paskuri",
    distance: "7.34"
  },
  {
    location: "Argolis, Greece",
    direction: "Forward",
    stage: "Anodou Farmakas",
    distance: "9.60"
  },
  {
    location: "Argolis, Greece",
    direction: "Forward",
    stage: "Pomona Érixi",
    distance: "5.09"
  },
  {
    location: "Argolis, Greece",
    direction: "Forward",
    stage: "Koryfi Dafni",
    distance: "4.50"
  },
  {
    location: "Argolis, Greece",
    direction: "Forward",
    stage: "Perasma Platani",
    distance: "10.69"
  },
  {
    location: "Argolis, Greece",
    direction: "Forward",
    stage: "Ourea Spevsi",
    distance: "5.74"
  },
  {
    location: "Argolis, Greece",
    direction: "Forward",
    stage: "Abies Koiláda",
    distance: "7.09"
  },
  {
    location: "Argolis, Greece",
    direction: "Reverse",
    stage: "Kathodo Leontiou",
    distance: "9.60"
  },
  {
    location: "Argolis, Greece",
    direction: "Reverse",
    stage: "Fourkéta Kourva",
    distance: "4.50"
  },
  {
    location: "Argolis, Greece",
    direction: "Reverse",
    stage: "Ampelonas Ormi",
    distance: "4.95"
  },
  {
    location: "Argolis, Greece",
    direction: "Reverse",
    stage: "Tsiristra Théa",
    distance: "10.36"
  },
  {
    location: "Argolis, Greece",
    direction: "Reverse",
    stage: "Pedines Epidaxi",
    distance: "5.38"
  },
  {
    location: "Argolis, Greece",
    direction: "Reverse",
    stage: "Ypsona tou Dasos",
    distance: "6.59"
  },
  {
    location: "Powys, Wales",
    direction: "Forward",
    stage: "River Severn Valley",
    distance: "11.40"
  },
  {
    location: "Powys, Wales",
    direction: "Forward",
    stage: "Sweet Lamb",
    distance: "9.90"
  },
  {
    location: "Powys, Wales",
    direction: "Forward",
    stage: "Fferm Wynt",
    distance: "5.70"
  },
  {
    location: "Powys, Wales",
    direction: "Forward",
    stage: "Dyffryn Afon",
    distance: "5.70"
  },
  {
    location: "Powys, Wales",
    direction: "Forward",
    stage: "Bidno Moorland",
    distance: "4.90"
  },
  {
    location: "Powys, Wales",
    direction: "Forward",
    stage: "Pant Mawr",
    distance: "4.70"
  },
  {
    location: "Powys, Wales",
    direction: "Reverse",
    stage: "Bronfelen",
    distance: "11.40"
  },
  {
    location: "Powys, Wales",
    direction: "Reverse",
    stage: "Geufron Forest",
    distance: "10.00"
  },
  {
    location: "Powys, Wales",
    direction: "Reverse",
    stage: "Fferm Wynt Reverse",
    distance: "5.70"
  },
  {
    location: "Powys, Wales",
    direction: "Reverse",
    stage: "Dyffryn Afon Reverse",
    distance: "5.70"
  },
  {
    location: "Powys, Wales",
    direction: "Reverse",
    stage: "Bidno Moorland Reverse",
    distance: "4.80"
  },
  {
    location: "Powys, Wales",
    direction: "Reverse",
    stage: "Pant Mawr Reverse",
    distance: "5.10"
  },
  {
    location: "Perth and Kinross, Scotland",
    direction: "Forward",
    stage: "Newhouse Bridge",
    distance: "12.86"
  },
  {
    location: "Perth and Kinross, Scotland",
    direction: "Forward",
    stage: "South Morningside",
    distance: "12.58"
  },
  {
    location: "Perth and Kinross, Scotland",
    direction: "Forward",
    stage: "Annbank Station",
    distance: "7.77"
  },
  {
    location: "Perth and Kinross, Scotland",
    direction: "Forward",
    stage: "Rosebank Farm",
    distance: "7.16"
  },
  {
    location: "Perth and Kinross, Scotland",
    direction: "Forward",
    stage: "Old Butterstone Muir",
    distance: "5.82"
  },
  {
    location: "Perth and Kinross, Scotland",
    direction: "Forward",
    stage: "Glencastle Farm",
    distance: "5.25"
  },
  {
    location: "Perth and Kinross, Scotland",
    direction: "Reverse",
    stage: "Newhouse Bridge Reverse",
    distance: "12.98"
  },
  {
    location: "Perth and Kinross, Scotland",
    direction: "Reverse",
    stage: "South Morningside Reverse",
    distance: "12.66"
  },
  {
    location: "Perth and Kinross, Scotland",
    direction: "Reverse",
    stage: "Annbank Station Reverse",
    distance: "7.59"
  },
  {
    location: "Perth and Kinross, Scotland",
    direction: "Reverse",
    stage: "Rosebank Farm Reverse",
    distance: "6.96"
  },
  {
    location: "Perth and Kinross, Scotland",
    direction: "Reverse",
    stage: "Old Butterstone Muir Reverse",
    distance: "5.66"
  },
  {
    location: "Perth and Kinross, Scotland",
    direction: "Reverse",
    stage: "Glencastle Farm Reverse",
    distance: "5.24"
  }
];
