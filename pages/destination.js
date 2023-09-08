// Import React's useState hook and other necessary components
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

// Define an array of destination objects
const destinations = [
  {
    imgUrl: "/destination/image-moon.webp",
    heading: "Moon",
    content: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    timeTravel: "3 days",
  },
  {
    imgUrl: "/destination/image-mars.webp",
    heading: "Mars",
    content: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    timeTravel: "9 months",
  },
  {
    imgUrl: "/destination/image-titan.webp",
    heading: "Titan",
    content: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    timeTravel: "7 years",
  },
  {
    imgUrl: "/destination/image-europa.webp",
    heading: "Europa",
    content: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    timeTravel: "3 years",
  },
];

// Define the Destination component
const Destination = () => {
  // Initialize state using the useState hook with the first destination
  const [data, setData] = useState(destinations[0]);

  return (
    <>
      {/* Set the document head properties */}
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <main>
        {/* Create the main section for destination selection */}
        <section className="destination w-full min-h-screen px-6 md:px-10 lg:px-48 lg:grid lg:grid-cols-2 lg:justify-center lg:items-start lg:gap-x-10">
          {/* Display the sub-heading for destination selection */}
          <h2 className="destination-sub-heading text-white font-barlow_condensed text-base font-normal leading-normal tracking-[2.7px] uppercase text-center pt-24 md:text-left md:text-xl md:tracking-[3.375px] md:pt-40 lg:text-[28px] lg:tracking-[4.7px] lg:pt-48 lg:col-span-2">
            <span className="font-bold opacity-25 md:mr-4 lg:mr-7">01</span> Pick your destination
          </h2>
          {/* Display the selected destination's image */}
          <div className="destination-img">
            <Image
              src={data.imgUrl}
              width={1080}
              height={1080}
              alt="moon img"
              className="w-[170px] h-[170px] mx-auto my-8 md:w-[300px] md:h-[300px] md:my-16 lg:w-[400px] lg:h-[400px]"
              priority
            />
          </div>
          <div className="destination-content">
            {/* Create the navigation menu for destinations */}
            <div className="destination-navmenu">
              <ul className="nav-menu flex justify-center items-start gap-x-7 lg:justify-start">
                {/* Map through destinations to create navigation items */}
                {destinations.map((destination, index) => (
                  <li
                    key={index}
                    className={`nav-item cursor-pointer text-white font-barlow_condensed text-sm font-normal tracking-[2.3px] uppercase md:text-base md:tracking-[2.7px] border-b-[3px] pb-2 lg:hover:border-white lg:hover:border-opacity-50 duration-300 transition ease-in-out ${data.heading === destination.heading ? 'border-white' : 'border-transparent'}`}
                    onClick={() => setData(destination)}
                  >
                    {destination.heading}
                  </li>
                ))}
              </ul>
            </div>
            {/* Display the selected destination's heading */}
            <h1 className="destination-heading text-white text-center font-bellefair text-6xl font-normal leading-normal uppercase mt-5 md:text-[80px] md:mt-8 md:leading-none lg:text-[100px] lg:text-left lg:mt-9">
              {data.heading}
            </h1>
            {/* Display the selected destination's content */}
            <p className="destination-main-para text-grayice_blue text-center font-barlow text-base font-normal leading-6 border-b border-[#383B4B] pb-7 md:px-20 md:pb-12 lg:px-0 lg:w-4/5 lg:text-left lg:mt-3 lg:text-lg lg:leading-[32px] lg:pb-14 ">
              {data.content}
            </p>
            {/* Display destination information */}
            <div className="destination-info mt-8 md:flex md:justify-center md:items-center md:gap-x-20 lg:justify-start lg:mt-7 ">
              <div className="distance">
                <h3 className="text-grayice_blue font-barlow_condensed text-sm font-normal leading-normal tracking-[2.362px] uppercase text-center lg:text-left  ">
                  AVG. DISTANCE
                </h3>
                <h4 className="text-white text-center font-bellefair text-[28px] font-normal leading-normal uppercase pt-3 pb-8 lg:text-left">
                  {data.distance}
                </h4>
              </div>
              <div className="travel-time">
                <h3 className="text-grayice_blue font-barlow_condensed text-sm font-normal leading-normal tracking-[2.362px] uppercase text-center lg:text-left  ">
                  Est. travel time
                </h3>
                <h4 className="text-white text-center font-bellefair text-[28px] font-normal leading-normal uppercase pt-3 pb-8 lg:text-left">
                  {data.timeTravel}
                </h4>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// Export the Destination component as the default export
export default Destination;
