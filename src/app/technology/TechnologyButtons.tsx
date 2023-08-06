import { useContext } from "react";
import { technologies, Technology } from "./technologyData";
import TechnologyContext from "./TechnologyContext";
import { bellefair } from "../styles/customFonts";

const TechnologyButtons = () => {
  const { activeTechnology, selectTechnology } = useContext(TechnologyContext);

  function handleTechnologySelect(name: string) {
    const currentTechnology = technologies.find(
      (technology: Technology) => technology.name === name
    );
    if (!currentTechnology) return;
    selectTechnology(currentTechnology);
  }

  return (
    <div className={`${bellefair.className} technology-buttons`}>
      {technologies.map((technology: Technology, index: number) => (
        <button
          key={technology.name}
          onClick={() => handleTechnologySelect(technology.name)}
          className={`technology-button ${
            activeTechnology.name === technology.name && `active`
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default TechnologyButtons;
