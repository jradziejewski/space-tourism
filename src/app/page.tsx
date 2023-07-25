import Head from "next/head";
import { bellefair } from "./styles/customFonts";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Your Website Name</title>
      </Head>
      <div className={bellefair.className}>
        <h1>About Us</h1>
        <p>Welcome to our website! We are dedicated to providing...</p>
      </div>
    </>
  );
};

export default AboutPage;
