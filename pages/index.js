import Head from "next/head";
import Link from "next/link";

// Define the Home component
export default function Home() {
  return (
    <>
      {/* Set the page title and favicon */}
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
        {/* Hero section */}
        <section className="hero min-h-screen px-6  flex flex-col justify-center items-center   lg:flex-row lg:pt-44 lg:justify-between lg:items-center">
          <div className="hero-content mt-20 md:px-40 lg:mt-0  ">
            {/* Subtitle */}
            <h2 className="text-grayice_blue text-center lg:text-left font-barlow_condensed font-normal text-base md:text-xl lg:text-3xl leading-normal tracking-[2.7px] md:tracking-[3.7px] uppercase">
              So, you want to travel to
            </h2>
            {/* Title */}
            <h1 className="text-white text-center lg:text-left font-bellefair text-[80px] md:text-[150px] font-normal leading-[100px] md:leading-[150px] uppercase mt-4 lg:mt-6">
              Space
            </h1>
            {/* Description */}
            <p className="text-grayice_blue text-center lg:text-left font-barlow font-normal text-base lg:text-[18px] leading-6 lg:leading-8 mt-4 lg:mt-6 lg:w-[450px]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well, sit back, and relax because we’ll give you a truly out
              of this world experience!
            </p>
          </div>
          {/* Explore button */}
          <div className="explore-btn w-full flex justify-center items-center mt-20 md:mt-40 lg:mt-0 relative">
            {/* Link to the home page */}
            <div className="flex justify-center items-center mt-20 md:mt-40 lg:mt-0 relative group/item cursor-pointer ">
              <Link href={"/"}>
                <button className="w-[150px] h-[150px] md:w-[240px] md:h-[240px] bg-white flex-shrink-0 rounded-full text-black text-center font-bellefair text-xl md:text-3xl font-normal tracking-[1.25px] uppercase ">
                  Explore
                </button>
              </Link>
              <div className="overlay w-[350px] h-[350px] bg-white rounded-full opacity-0 absolute group-hover/item:opacity-20 duration-300 transition-opacity ease-in-out hidden lg:block "></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
