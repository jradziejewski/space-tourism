import { barlow_condensed } from "@/app/styles/customFonts";
import "./subpageheader.scss";

type SubpageHeaderProps = {
  title: string;
  number: number;
};

const SubpageHeader = ({ title, number }: SubpageHeaderProps) => {
  return (
    <div className={`${barlow_condensed.className} subpage-header`}>
      <span>0{number}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SubpageHeader;
