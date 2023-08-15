"use client";
import { useContext } from "react";
import Image from "next/image";
import SubpageHeader from "../components/subpage-header/SubpageHeader";
import CrewContext, { CrewProvider } from "./CrewContext";
import CrewMemberView from "./CrewMemberView";
import "./crew.scss";
import { crew } from "./crewData";
import CrewControls from "./CrewControls";

const Page = () => {
  return (
    <CrewProvider>
      <SubpageHeader title="Meet your crew" number={2} />
      <div className="crew">
        <CrewMemberImage />
        <div className="crew-content">
          <CrewControls />
          <CrewMemberView />
        </div>
      </div>
    </CrewProvider>
  );
};

export default Page;

const CrewMemberImage = () => {
  const { activeCrew } = useContext(CrewContext);

  if (!activeCrew || !activeCrew.image) {
    return null;
  }

  return (
    <div className="crew-image-container">
      <Image
        className={`crew-image ${
          activeCrew.name === crew[0].name ? "" : "hidden-image"
        }`}
        src={crew[0].image}
        width="327"
        height="223"
        priority
        alt={`${activeCrew.name} image}`}
      />
      <Image
        className={`crew-image ${
          activeCrew.name === crew[1].name ? "" : "hidden-image"
        }`}
        src={crew[1].image}
        width="327"
        height="223"
        priority
        alt={`${activeCrew.name} image}`}
      />
      <Image
        className={`crew-image ${
          activeCrew.name === crew[2].name ? "" : "hidden-image"
        }`}
        src={crew[2].image}
        width="327"
        height="223"
        priority
        alt={`${activeCrew.name} image}`}
      />
      <Image
        className={`crew-image ${
          activeCrew.name === crew[3].name ? "" : "hidden-image"
        }`}
        src={crew[3].image}
        width="327"
        height="223"
        priority
        alt={`${activeCrew.name} image}`}
      />
    </div>
  );
};
