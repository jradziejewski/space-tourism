export type Destination = {
  name: string;
  description: string;
  avgDistance: string;
  travelTime: string;
  image: string;
};

function createDestination(
  name: string,
  description: string,
  avgDistance: string,
  travelTime: string,
  image: string
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

const europaDescription = "";

const titanDescription = "";

export const destinations = [
  createDestination(
    "Moon",
    moonDescription,
    "384,400 km",
    "3 days",
    "../../assets/images/destinations/image-moon.png"
  ),
  createDestination(
    "Mars",
    marsDescription,
    "225 mil. km",
    "9 months",
    "../../assets/images/destinations/image-mars.png"
  ),
  createDestination(
    "Europa",
    europaDescription,
    "225 mil. km",
    "9 months",
    "../../assets/images/destinations/image-mars.png"
  ),
  createDestination(
    "Titan",
    titanDescription,
    "1.6 bil. km",
    "7 years",
    "../../assets/images/destinations/image-europa.png"
  ),
];
