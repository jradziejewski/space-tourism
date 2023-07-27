import "./globals.scss";
import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "A website that promotes space tourism.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="favicon" href="../../public/favicon" />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
