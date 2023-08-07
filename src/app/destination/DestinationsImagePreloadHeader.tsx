import Head from "next/head";

const DestinationsImagePreloadHeader = () => {
  return (
    <Head>
      <link
        rel="preload"
        href="../../../public/assets/destination/image-mars.png"
        as="image"
      />
      <link
        rel="preload"
        href="../../../public/assets/destination/image-moon.png"
        as="image"
      />
      <link
        rel="preload"
        href="../../../public/assets/destination/image-europa.png"
        as="image"
      />
      <link
        rel="preload"
        href="../../../public/assets/destination/image-titan.png"
        as="image"
      />
    </Head>
  );
};

export default DestinationsImagePreloadHeader;
