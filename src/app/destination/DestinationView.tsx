import { useContext } from "react";
import DestinationContext from "./DestinationContext";
import { bellefair } from "../styles/customFonts";

const DestinationView = () => {
  const { activeDestination } = useContext(DestinationContext);

  return (
    <div className="destination-view">
      <h1 className={`${bellefair.className}`}>{activeDestination.name}</h1>
      <p>{activeDestination.description}</p>
    </div>
  );
};

export default DestinationView;
