import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

function Crew() {
  // Define an array of crew members
  const crewMembers = [
    {
      imgUrl: "/crew/image-douglas-hurley.webp",
      crewPosition: "Commander",
      crewName: "Douglas Hurley",
      crewIntro:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      imgUrl: "/crew/image-mark-shuttleworth.webp",
      crewPosition: "Mission Specialist",
      crewName: "Mark Shuttleworth",
      crewIntro:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      imgUrl: "/crew/image-victor-glover.webp",
      crewPosition: "Pilot",
      crewName: "Victor Glover",
      crewIntro:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      imgUrl: "/crew/image-anousheh-ansari.webp",
      crewPosition: "Flight Engineer",
      crewName: "Anousheh Ansari",
      crewIntro:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  // Initialize state to store the currently displayed crew member
  const [data, setData] = useState(crewMembers[0]);

  // Function to change the displayed crew member
  const showCrew = (crew) => {
    setData(crew);
  };

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <main>
        <section className="crew min-h-screen px-6 md:px-10 lg:px-48 grid justify-center items-center  md:justify-start lg:flex-col ">
          <h2 className="destination-sub-heading text-white font-barlow_condensed text-base font-normal leading-normal tracking-[2.7px] uppercase text-center pt-24 md:text-left md:text-xl md:tracking-[3.375px] md:pt-40 lg:text-[28px] lg:tracking-[4.7px] lg:pt-48 lg:col-span-2">
            <span className="font-bold opacity-25 md:mr-4 lg:mr-7 md:order-1">
              02
            </span>{" "}
            Meet your crew
          </h2>
          <div className="crew-img border-b-[0.5px] border-opacity-50 border-gray-500 md:order-3 ">
            <Image
              src={data.imgUrl}
              width={1080}
              height={1080}
              className="w-44 h-auto mx-auto mt-8 md:w-[450px]  object-cover md:mt-10  lg:w-[568px]"
              alt="crew-img"
              priority
            />
          </div>
          <div className="crew-content mt-8 md:grid md:px-20 lg:px-0  ">
            <div className="crew-nav md:order-2">
              <ul className="nav-menu flex justify-center items-center gap-x-4 md:mt-10 lg:justify-start lg:gap-x-6 lg:mt-28 ">
                {/* Map through crew members to create navigation items */}
                {crewMembers.map((crew, index) => (
                  <li
                    key={index}
                    className={`nav-item  w-3 h-3 bg-white rounded-full cursor-pointer ${
                      data.crewName === crew.crewName
                        ? "opacity-100"
                        : "opacity-20"
                    } hover:opacity-50`}
                    onClick={() => showCrew(crew)}
                  />
                ))}
              </ul>
            </div>
            <h3 className="crew-position text-white text-center font-bellefair text-base font-normal leading-normal uppercase opacity-50 mt-8 md:text-[28px] lg:text-left lg:text-[32px]">
              {data.crewPosition}
            </h3>
            <h1 className="crew-name text-white text-center font-bellefair text-2xl font-normal uppercase mt-2 md:text-[40px] lg:text-left lg:text-[56px] lg:mt-4">
              {data.crewName}
            </h1>
            <p className="intro-crew text-grayice_blue text-center font-barlow text-base font-normal leading-[25px] mt-4 md:leading-[28px] lg:text-left lg:text-lg lg:leading-8 lg:w-2/3 lg:mt-9">
              {data.crewIntro}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Crew;
