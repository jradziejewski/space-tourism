"use client";
import { useContext } from "react";
import SubpageHeader from "../components/subpage-header/SubpageHeader";
import "./technology.scss";
import TechnologyContext, { TechnologyProvider } from "./TechnologyContext";
import Image from "next/image";
import TechnologyView from "./TechnologyView";
import TechnologyButtons from "./TechnologyButtons";

const Page = () => {
  return (
    <TechnologyProvider>
      <SubpageHeader title="Space Launch 101" number={3} />
      <TechnologyImage />
      <TechnologyButtons />
      <TechnologyView />
    </TechnologyProvider>
  );
};

export default Page;

const TechnologyImage = () => {
  const { activeTechnology } = useContext(TechnologyContext);

  if (!activeTechnology || !activeTechnology.image) {
    return null;
  }

  return (
    <Image
      className="technology-image"
      src={activeTechnology.image}
      height="170"
      width="445"
      alt={`${activeTechnology.name} image}`}
    />
  );
};
