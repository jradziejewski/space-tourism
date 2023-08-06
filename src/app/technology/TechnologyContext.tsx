"use cilent";
import { createContext, useMemo, useState } from "react";
import { technologies, Technology } from "./technologyData";

const initialTechnology = technologies[0];

type TechnologyContextType = {
  activeTechnology: Technology;
  selectTechnology: (technology: Technology) => void;
};

const TechnologyContext = createContext<TechnologyContextType>({
  activeTechnology: initialTechnology,
  selectTechnology: (technology: Technology) => {},
});

export const TechnologyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeTechnology, setActiveTechnology] =
    useState<Technology>(initialTechnology);

  const selectTechnology = (technology: Technology) => {
    setActiveTechnology(technology);
  };

  const contextValue = useMemo(
    () => ({ activeTechnology, selectTechnology }),
    [activeTechnology]
  );

  return (
    <TechnologyContext.Provider value={contextValue}>
      {children}
    </TechnologyContext.Provider>
  );
};
export default TechnologyContext;
