"use cilent";
import { createContext, useMemo, useState } from "react";
import { destinations, Destination } from "./destinationsData";

const initialDestination: Destination = destinations[0];

type DestinationContextType = {
  activeDestination: Destination;
  selectDestination: (destination: Destination) => void;
};

const DestinationContext = createContext<DestinationContextType>({
  activeDestination: initialDestination,
  selectDestination: (destination: Destination) => {},
});

export const DestinationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeDestination, setActiveDestination] =
    useState<Destination>(initialDestination);

  const selectDestination = (destination: Destination) => {
    setActiveDestination(destination);
  };

  const contextValue = useMemo(
    () => ({ activeDestination, selectDestination }),
    [activeDestination]
  );

  return (
    <DestinationContext.Provider value={contextValue}>
      {children}
    </DestinationContext.Provider>
  );
};

export default DestinationContext;
