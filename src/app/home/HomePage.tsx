import Head from "next/head";
import { barlow_condensed, bellefair } from "../styles/customFonts";
import "./home.scss";
import { Metadata } from "next";
import StyledButton from "./StyledButton";

const HomePage = () => {
  return (
    <div className={`${bellefair.className} homepage`}>
      <div className="homepage-text">
        <div className="hero">
          <span className={barlow_condensed.className}>
            So, you want to travel to
          </span>
          <h1>Space</h1>
        </div>
        <p className={`${barlow_condensed.className} main-paragraph`}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <StyledButton />
    </div>
  );
};

export default HomePage;
