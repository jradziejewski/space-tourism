import { useContext } from "react";
import DestinationContext from "./DestinationContext";
import { bellefair } from "../styles/customFonts";

const DestinationView = () => {
  const { activeDestination } = useContext(DestinationContext);

  return (
    <div className="destination-view">
      <h1 className={`${bellefair.className}`}>{activeDestination.name}</h1>
      <p className="destination-description">{activeDestination.description}</p>
      <div className="destination-divider" />
      <Feature
        featureText="Avg. Distance"
        featureValue={activeDestination.avgDistance}
      />
      <Feature
        featureText="Est. Travel Time"
        featureValue={activeDestination.travelTime}
      />
    </div>
  );
};

export default DestinationView;

type FeatureProps = {
  featureText: string;
  featureValue: string;
};

const Feature = ({ featureText, featureValue }: FeatureProps) => {
  return (
    <div className="destination-feature">
      <span>{featureText}</span>
      <p className={bellefair.className}>{featureValue}</p>
    </div>
  );
};
