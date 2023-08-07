import { useContext } from "react";
import { Destination, destinations } from "./destinationsData";
import DestinationContext from "./DestinationContext";

const DestinationButtons = () => {
  const { activeDestination, selectDestination } =
    useContext(DestinationContext);

  function handleDestinationSelect(name: string) {
    const destination = destinations.find(
      (destination) => destination.name === name,
    );
    if (!destination) return;
    selectDestination(destination);
  }

  return (
    <div className="destination-buttons">
      {destinations.map((destination: Destination) => (
        <button
          key={destination.name}
          onClick={() => handleDestinationSelect(destination.name)}
          className={`destination-button ${
            destination.name === activeDestination.name
              ? "destination-button-active"
              : ""
          }`}
        >
          {destination.name}
        </button>
      ))}
    </div>
  );
};

export default DestinationButtons;
