import { StaticImageData } from "next/image";
import moonImage from "../../../public/assets/destination/image-moon.png";
import marsImage from "../../../public/assets/destination/image-mars.png";
import europaImage from "../../../public/assets/destination/image-europa.png";
import titanImage from "../../../public/assets/destination/image-titan.png";

export type Destination = {
  name: string;
  description: string;
  avgDistance: string;
  travelTime: string;
  image: StaticImageData;
};

function createDestination(
  name: string,
  description: string,
  avgDistance: string,
  travelTime: string,
  image: StaticImageData
): Destination {
  return {
    name,
    description,
    avgDistance,
    travelTime,
    image,
  };
}

const moonDescription =
  "See our planet as you’ve never seen it before. " +
  "A perfect relaxing trip away to help regain perspective and come back refreshed. " +
  "While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";

const marsDescription =
  "Don’t forget to pack your hiking boots. " +
  "You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. " +
  "It’s two and a half times the size of Everest!";

const europaDescription =
  "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. " +
  "With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, " +
  "or simple relaxation in your snug wintery cabin.";

const titanDescription =
  "The only moon known to have a dense atmosphere other than Earth, " +
  "Titan is a home away from home (just a few hundred degrees colder!). " +
  "As a bonus, you get striking views of the Rings of Saturn.";

export const destinations = [
  createDestination("Moon", moonDescription, "384,400 km", "3 days", moonImage),
  createDestination(
    "Mars",
    marsDescription,
    "225 mil. km",
    "9 months",
    marsImage
  ),
  createDestination(
    "Europa",
    europaDescription,
    "628 mil. km",
    "3 years",
    europaImage
  ),
  createDestination(
    "Titan",
    titanDescription,
    "1.6 bil. km",
    "7 years",
    titanImage
  ),
];
