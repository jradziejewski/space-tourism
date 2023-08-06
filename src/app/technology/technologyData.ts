import { StaticImageData } from "next/image";
import launchVehicleLandscape from "../../../public/assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportLandscape from "../../../public/assets/technology/image-spaceport-landscape.jpg";
import spaceCapsuleLandscape from "../../../public/assets/technology/image-space-capsule-landscape.jpg";

const launchVehicleDescription =
  "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
const spaceportDescription =
  "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
const spaceCapsuleDescription =
  "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

export type Technology = {
  name: string;
  description: string;
  image: StaticImageData;
};

function createTechnology(
  name: string,
  description: string,
  image: StaticImageData
): Technology {
  return {
    name,
    description,
    image,
  };
}

export const technologies = [
  createTechnology(
    "Launch Vehicle",
    launchVehicleDescription,
    launchVehicleLandscape
  ),
  createTechnology("Spaceport", spaceportDescription, spaceportLandscape),
  createTechnology(
    "Space Capsule",
    spaceCapsuleDescription,
    spaceCapsuleLandscape
  ),
];
