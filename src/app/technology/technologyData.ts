import { StaticImageData } from "next/image";
import launchVehicleLandscape from "../../../public/assets/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclePortrait from "../../../public/assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportLandscape from "../../../public/assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "../../../public/assets/technology/image-spaceport-portrait.jpg";
import spaceCapsuleLandscape from "../../../public/assets/technology/image-space-capsule-landscape.jpg";
import spaceCapsulePortrait from "../../../public/assets/technology/image-space-capsule-portrait.jpg";

const launchVehicleDescription =
  "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
const spaceportDescription =
  "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
const spaceCapsuleDescription =
  "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

export type Technology = {
  name: string;
  description: string;
  imageLandscape: StaticImageData;
  imagePortrait: StaticImageData;
};

function createTechnology(
  name: string,
  description: string,
  imageLandscape: StaticImageData,
  imagePortrait: StaticImageData,
): Technology {
  return {
    name,
    description,
    imageLandscape,
    imagePortrait,
  };
}

export const technologies = [
  createTechnology(
    "Launch Vehicle",
    launchVehicleDescription,
    launchVehicleLandscape,
    launchVehiclePortrait,
  ),
  createTechnology(
    "Spaceport",
    spaceportDescription,
    spaceportLandscape,
    spaceportPortrait,
  ),
  createTechnology(
    "Space Capsule",
    spaceCapsuleDescription,
    spaceCapsuleLandscape,
    spaceCapsulePortrait,
  ),
];
