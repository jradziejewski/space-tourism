"use client";
import SubpageHeader from "../components/subpage-header/SubpageHeader";
import "./destination.scss";
import { barlow_condensed } from "../styles/customFonts";
import DestinationButtons from "./DestinationButtons";
import DestinationContext, { DestinationProvider } from "./DestinationContext";
import { useContext } from "react";

const Page = () => {
  const { activeDestination } = useContext(DestinationContext);

  return (
    <DestinationProvider>
      <div className={`${barlow_condensed.className}`}>
        <SubpageHeader title="Pick your destination" number={1} />
        <DestinationButtons />
        <SomeComponent />
      </div>
    </DestinationProvider>
  );
};

export default Page;

const SomeComponent = () => {
  const { activeDestination } = useContext(DestinationContext);
  return <span>{activeDestination.name}</span>;
};
