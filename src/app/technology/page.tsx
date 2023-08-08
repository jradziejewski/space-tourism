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
      <div className="technology">
        <div className="technology-image-container">
          <TechnologyImage />
        </div>
        <div className="technology-content">
          <TechnologyButtons />
          <TechnologyView />
        </div>
      </div>
    </TechnologyProvider>
  );
};

export default Page;

const TechnologyImage = () => {
  const { activeTechnology } = useContext(TechnologyContext);

  if (!activeTechnology || !activeTechnology.imageLandscape) {
    return null;
  }

  return (
    <>
      <Image
        className="technology-image-landscape"
        src={activeTechnology.imageLandscape}
        height="170"
        width="445"
        alt={`${activeTechnology.name} image}`}
      />
      <Image
        className="technology-image-portrait"
        src={activeTechnology.imagePortrait}
        height="170"
        width="445"
        alt={`${activeTechnology.name} image}`}
      />
    </>
  );
};
