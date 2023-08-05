import { useContext } from "react";
import CrewContext from "./CrewContext";
import { barlow_condensed, bellefair } from "../styles/customFonts";

const CrewMemberView = () => {
  const { activeCrew } = useContext(CrewContext);

  return (
    <div className={`${bellefair.className} crew-view`}>
      <span className="crew-role">{activeCrew.role}</span>
      <span className="crew-name">{activeCrew.name}</span>
      <p className={`${barlow_condensed.className} crew-description`}>
        {activeCrew.description}
      </p>
    </div>
  );
};

export default CrewMemberView;
