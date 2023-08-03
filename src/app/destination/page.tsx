import SubpageHeader from "../components/subpage-header/SubpageHeader";
import "./destination.scss";
import { barlow_condensed } from "../styles/customFonts";
import DestinationButtons from "./DestinationButtons";

const Page = () => {
  return (
    <div className={`${barlow_condensed.className}`}>
      <SubpageHeader title="Pick your destination" number={1} />
      <DestinationButtons />
    </div>
  );
};

export default Page;
