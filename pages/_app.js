import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";

const barlow_condensed = Barlow_Condensed({
  weight: ["400","700"],
  subsets: ["latin"],
  variable: "--font-barlow_condensed",
});

const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bellefair",
});

const barlow = Barlow({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${bellefair.variable} ${barlow.variable} ${barlow_condensed.variable}`}>
      <Navbar/>
      <Component {...pageProps} />
    </main>
  );
}
