"use client";
import { useContext } from "react";
import Image from "next/image";
import SubpageHeader from "../components/subpage-header/SubpageHeader";
import TechnologyContext, { TechnologyProvider } from "./TechnologyContext";
import TechnologyView from "./TechnologyView";
import TechnologyButtons from "./TechnologyButtons";
import { technologies } from "./technologyData";
import "./technology.scss";

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
        className={`technology-image-landscape ${
          activeTechnology === technologies[0] ? "" : "hidden-image"
        }`}
        src={technologies[0].imageLandscape}
        height="170"
        width="445"
        priority
        alt={`${activeTechnology.name} image}`}
      />
      <Image
        className={`technology-image-landscape ${
          activeTechnology === technologies[1] ? "" : "hidden-image"
        }`}
        src={technologies[1].imageLandscape}
        height="170"
        width="445"
        priority
        alt={`${activeTechnology.name} image}`}
      />
      <Image
        className={`technology-image-landscape ${
          activeTechnology === technologies[2] ? "" : "hidden-image"
        }`}
        src={technologies[2].imageLandscape}
        height="170"
        width="445"
        priority
        alt={`${activeTechnology.name} image}`}
      />
      <Image
        className={`technology-image-portrait ${
          activeTechnology === technologies[0] ? "" : "hidden-image"
        }`}
        src={technologies[0].imagePortrait}
        height="170"
        width="445"
        priority
        alt={`${activeTechnology.name} image}`}
      />
      <Image
        className={`technology-image-portrait ${
          activeTechnology === technologies[1] ? "" : "hidden-image"
        }`}
        src={technologies[1].imagePortrait}
        height="170"
        width="445"
        priority
        alt={`${activeTechnology.name} image}`}
      />
      <Image
        className={`technology-image-portrait ${
          activeTechnology === technologies[2] ? "" : "hidden-image"
        }`}
        src={technologies[2].imagePortrait}
        height="170"
        width="445"
        priority
        alt={`${activeTechnology.name} image}`}
      />
    </>
  );
};
