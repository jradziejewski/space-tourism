import { useContext } from "react";
import TechnologyContext from "./TechnologyContext";
import { barlow_condensed, bellefair } from "../styles/customFonts";

const TechnologyView = () => {
  const { activeTechnology } = useContext(TechnologyContext);

  return (
    <div className={`${barlow_condensed.className} technology-view`}>
      <span className="terminology-header">The terminology...</span>
      <h1 className={`${bellefair.className}`}>{activeTechnology.name}</h1>
      <p className="technology-description">{activeTechnology.description}</p>
      <div className="technology-divider" />
    </div>
  );
};

export default TechnologyView;
