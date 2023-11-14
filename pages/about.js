import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-[calc(100vh-80px)]">
        <Image
          src={"/image/banner-4.jpg"}
          alt="casami-banner"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">CASAMI</h3>
            <p className="leading-6 text-center text-white">
              Our company was founded by a group of Marketing specialists with over 20 years of experience and a team of
              highly qualified individuals.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl text-heading">MORE THAN 5 YEARS OF ESTABLISHMENT</h3>
        <div>
          <svg height="100" viewBox="0 0 8 100" width="8" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m1 100c0-3.845 6-3.845 6-7.69s-6-3.845-6-7.691c0-3.845 6-3.845 6-7.69 0-3.847-6-3.847-6-7.693 0-3.843 6-3.843 6-7.687 0-3.845-6-3.845-6-7.691 0-3.845 6-3.845 6-7.69 0-3.846-6-3.846-6-7.69 0-3.847 6-3.847 6-7.694s-6-3.847-6-7.695c0-3.846 6-3.846 6-7.693 0-3.849-6-3.849-6-7.698s6-3.849 6-7.698"
              fill="none"
              stroke="#daa855"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
        <p>
          Our company&apos;s management team consists of marketing specialists with over 20 years of expertise. They
          have advised and conducted numerous large-scale marketing campaigns for well-known brands in Cambodia and the
          regions.
        </p>
        <p>
          We have more than 100 highly qualified employees. They used to work for a variety of big corporations both in
          Cambodia and abroad. They all have creativity, enthusiasm, and dedication.
        </p>
      </div>
      <div className="relative w-full min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0">
          <Image
            src={"/image/banner-5.jpg"}
            alt="casami-banner"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-50"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[650px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">OUR COMMITMENTS</h3>
            <p className="leading-6 text-center text-white">
              We are devoted to fulfilling the following standards for you:
              <br />- Dedicated consulting
              <br />- Cost optimization
              <br />- Revenue improvement
              <br />- High & rapid efficiency
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
