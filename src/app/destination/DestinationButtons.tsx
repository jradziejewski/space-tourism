import { Destination, destinations } from "./destinationsData";

const DestinationButtons = () => {
  return (
    <div className="destination-buttons">
      {destinations.map((destination: Destination) => (
        <button key={destination.name} className="destination-button active">
          {destination.name}
        </button>
      ))}
    </div>
  );
};

export default DestinationButtons;
