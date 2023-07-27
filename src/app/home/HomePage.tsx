import Head from "next/head";
import { barlow_condensed, bellefair } from "../styles/customFonts";
import "./home.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "A website that promotes space tourism.",
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <div className="hero">
        <span className={barlow_condensed.className}>
          So, you wanna travel to
        </span>
        <h1>Space</h1>
      </div>
      <div></div>
    </>
  );
};

export default HomePage;
