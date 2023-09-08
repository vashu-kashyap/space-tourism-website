import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";

const Technology = () => {
  // Data for different technology sections
  const technologyData = [
    {
      name: "Launch Vehicle",
      landScapeImgUrl: "/technology/image-launch-vehicle-landscape.jpg",
      portraitImgUrl: "/technology/image-launch-vehicle-portrait.jpg",
      content:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      landScapeImgUrl: "/technology/image-spaceport-landscape.jpg",
      portraitImgUrl: "/technology/image-spaceport-portrait.jpg",
      content:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space Capsule",
      landScapeImgUrl: "/technology/image-space-capsule-landscape.jpg",
      portraitImgUrl: "/technology/image-space-capsule-portrait.jpg",
      content:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  // State to manage the currently displayed technology section
  const [data, setData] = useState(technologyData[0]);

  return (
    <>
      <Head>
        {/* Define metadata for the page */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <main>
        {/* Technology section */}
        <section className="technology min-h-screen grid justify-center items-center lg:grid-cols-5 lg:gap-x-6 lg:pb-24">
          {/* Section title */}
          <h2 className="destination-sub-heading text-white font-barlow_condensed text-base font-normal leading-normal tracking-[2.7px] uppercase text-center pt-24 md:text-left md:text-xl md:tracking-[3.375px] md:pt-40 lg:text-[28px] lg:tracking-[4.7px] lg:pt-48 lg:col-span-5 px-10 lg:px-48 ">
            <span className="font-bold opacity-25 md:mr-4 lg:mr-7">03</span>{" "}
            SPACE LAUNCH 101
          </h2>
          {/* Technology images */}
          <div className="technology-img lg:order-4 lg:col-span-2 lg:justify-self-end">
            <Image
              src={data.landScapeImgUrl}
              height={1080}
              width={1080}
              alt="technology-image"
              className="w-full h-44 object-cover object-center mt-9 md:h-[310px] md:mt-0 lg:hidden"
              priority
            />
            <Image
              src={data.portraitImgUrl}
              height={1080}
              width={1080}
              alt="technology-image"
              className="w-[500px] h-[500] hidden lg:block object-cover object-center mt-9  md:mt-0"
              priority
            />
          </div>
          {/* Navigation menu for technology sections */}
          <div className="technology-navmenu lg:w-28 lg:justify-self-end">
            <ul className="navmenu flex justify-center items-center mt-8 gap-x-4 md:mt-0 lg:flex-col lg:gap-y-6 ">
              {technologyData.map((item, index) => {
                return (
                  <li
                    className={`nav-item w-10 h-10 flex justify-center items-center border-[1.5px] border-white border-opacity-25 rounded-full  text-center font-bellefair text-base font-normal leading-normal tracking-[1px] md:w-16 md:h-16 md:text-2xl lg:w-20 lg:h-20 lg:text-[32px] cursor-pointer ${item.name === data.name ? 'text-black bg-white' : 'text-white bg-black'} hover:border-opacity-100 duration-300 transition-all ease-in-out`}
                    onClick={() => {
                      setData(item);
                    }}
                    key={index}
                  >
                    {index + 1}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Technology content */}
          <div className="technology-content mt-9 px-6 lg:col-span-2  ">
            <h3 className="text-grayice_blue text-center font-barlow_condensed text-sm font-normal tracking-[2.362px] md:text-base md:tracking-[2.7px] lg:text-left">
              THE TERMINOLOGY…
            </h3>
            <h1 className="technology-name text-white font-bellefair text-2xl font-normal leading-normal uppercase text-center mt-1 md:text-[40px] md:mt-0 lg:text-left lg:text-[56px]">
              {data.name}
            </h1>
            <p className="technology-info text-grayice_blue text-center font-barlow text-base font-normal leading-6 mt-4 md:text-base md:leading-7 md:px-36 lg:text-left lg:pr-24 lg:px-0 lg:text-lg lg:leading-[32px] ">
              {data.content}
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Technology;
