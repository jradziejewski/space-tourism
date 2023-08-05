import { StaticImageData } from "next/image";
import douglasHurleyImage from "../../../public/assets/crew/image-douglas-hurley.png";
import markShuttleworthImage from "../../../public/assets/crew/image-mark-shuttleworth.png";
import victorGloverImage from "../../../public/assets/crew/image-victor-glover.png";
import anoushehAnsariImage from "../../../public/assets/crew/image-anousheh-ansari.png";

const douglasHurleyDescription =
  "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
const markShuttleworthDescription =
  "Mark Richard Shuttleworth is a South African-British entrepreneur who is the founder and CEO of Canonical, the company behind the development of the Linux-based Ubuntu operating system.";
const victorGloverDescription =
  "Victor Jerome Glover is an American aerospace engineer, aviator, naval officer, test pilot, and NASA astronaut. On November 15, 2020, he launched to the International Space Station as a crew member of Expedition 64.";
const anoushehAnsariDescription =
  "Anousheh Ansari is an Iranian-American engineer and co-founder and chairwoman of Prodea Systems. Her previous business accomplishments include serving as co-founder and CEO of Telecom Technologies, Inc.";

export type Crew = {
  role: string;
  name: string;
  description: string;
  image: StaticImageData;
};

function createCrew(
  role: string,
  name: string,
  description: string,
  image: StaticImageData
): Crew {
  return {
    role,
    name,
    description,
    image,
  };
}

export const crew = [
  createCrew(
    "Commander",
    "Douglas Hurley",
    douglasHurleyDescription,
    douglasHurleyImage
  ),
  createCrew(
    "Mission Specialist",
    "Mark Shuttleworth",
    markShuttleworthDescription,
    markShuttleworthImage
  ),
  createCrew(
    "Pilot",
    "Victor Glover",
    victorGloverDescription,
    victorGloverImage
  ),
  createCrew(
    "Flight Engineer",
    "Anousheh Ansari",
    anoushehAnsariDescription,
    anoushehAnsariImage
  ),
];
