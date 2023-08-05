import { useContext } from "react";
import { Crew, crew } from "./crewData";
import CrewContext from "./CrewContext";

const Crew = () => {
  const { activeCrew, selectCrew } = useContext(CrewContext);

  function handleCrewSelect(name: string) {
    const currentCrew = crew.find((crew) => crew.name === name);
    if (!currentCrew) return;
    selectCrew(currentCrew);
  }

  return (
    <div className="crew-controls">
      {crew.map((crewMember: Crew) => (
        <button
          key={crewMember.name}
          onClick={() => handleCrewSelect(crewMember.name)}
          className={`crew-button ${
            crewMember.name === activeCrew.name && "active"
          }`}
        >
          {" "}
        </button>
      ))}
    </div>
  );
};

export default Crew;
