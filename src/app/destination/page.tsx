"use client";
import { useContext } from "react";
import Image from "next/image";
import { barlow_condensed } from "../styles/customFonts";
import SubpageHeader from "../components/subpage-header/SubpageHeader";
import DestinationButtons from "./DestinationButtons";
import DestinationContext, { DestinationProvider } from "./DestinationContext";
import "./destination.scss";
import DestinationView from "./DestinationView";
import { destinations } from "./destinationsData";
import DestinationsImagePreloadHeader from "./DestinationsImagePreloadHeader";

const Page = () => {
  return (
    <>
      <DestinationsImagePreloadHeader />
      <DestinationProvider>
        <SubpageHeader title="Pick your destination" number={1} />
        <div className={`${barlow_condensed.className} destination`}>
          <div className="destination-image-container">
            <DestinationImage />
          </div>
          <div className="destination-content-container">
            <DestinationButtons />
            <DestinationView />
          </div>
        </div>
      </DestinationProvider>
    </>
  );
};

export default Page;

const DestinationImage = () => {
  const { activeDestination } = useContext(DestinationContext);

  if (!activeDestination || !activeDestination.image) {
    return null;
  }

  return (
    <>
      <Image
        className={`destination-image ${
          activeDestination.name === "Moon" ? "visible-image" : "hidden-image"
        }`}
        src={destinations[0].image}
        height="445"
        width="445"
        priority
        alt="moon image"
      />
      <Image
        className={`destination-image ${
          activeDestination.name === "Mars" ? "visible-image" : "hidden-image"
        }`}
        src={destinations[1].image}
        height="445"
        width="445"
        priority
        alt="mars image"
      />
      <Image
        className={`destination-image ${
          activeDestination.name === "Europa" ? "visible-image" : "hidden-image"
        }`}
        src={destinations[2].image}
        height="445"
        width="445"
        priority
        alt="europa image"
      />
      <Image
        className={`destination-image ${
          activeDestination.name === "Titan" ? "visible-image" : "hidden-image"
        }`}
        src={destinations[3].image}
        height="445"
        width="445"
        priority
        alt="titan image"
      />
    </>
  );
};
