"use cilent";
import { createContext, useMemo, useState } from "react";
import { crew } from "./crewData";
import { Crew } from "./crewData";

const initialCrew: Crew = crew[0];

type CrewContextType = {
  activeCrew: Crew;
  selectCrew: (crew: Crew) => void;
};

const CrewContext = createContext<CrewContextType>({
  activeCrew: initialCrew,
  selectCrew: (crew: Crew) => {},
});

export const CrewProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeCrew, setActiveCrew] = useState<Crew>(initialCrew);

  const selectCrew = (crew: Crew) => {
    setActiveCrew(crew);
  };

  const contextValue = useMemo(
    () => ({ activeCrew, selectCrew }),
    [activeCrew]
  );

  return (
    <CrewContext.Provider value={contextValue}>{children}</CrewContext.Provider>
  );
};
export default CrewContext;
