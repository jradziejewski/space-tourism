import { barlow_condensed } from "../../styles/customFonts";

type Props = {
  text: string;
  to: string;
};

const StyledLink = (props: Props) => {
  const { text, to } = props;
  return (
    <a href={to}>
      <div className={`${barlow_condensed.className} styled-link`}>{text}</div>
    </a>
  );
};

export default StyledLink;
