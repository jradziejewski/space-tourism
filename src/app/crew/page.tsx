"use client";
import { useContext } from "react";
import Image from "next/image";
import SubpageHeader from "../components/subpage-header/SubpageHeader";
import CrewContext, { CrewProvider } from "./CrewContext";
import CrewMemberView from "./CrewMemberView";
import "./crew.scss";
import CrewControls from "./CrewControls";

const Page = () => {
  return (
    <CrewProvider>
      <div>
        <SubpageHeader title="Meet your crew" number={2} />
        <CrewMemberImage />
        <CrewControls />
        <CrewMemberView />
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
        className="crew-image"
        src={activeCrew.image}
        width="327"
        height="223"
        alt={`${activeCrew.name} image}`}
      />
    </div>
  );
};
