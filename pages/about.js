import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-5.jpg"}
          alt="ROSE BUDZZ"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">ROSE BUDZZ</h3>
            <p className="leading-6 text-center text-white">
              Established by a consortium of marketing specialists boasting two decades of experience, our company is
              supported by a team of exceptionally qualified individuals.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl uppercase text-heading">Having been established for over 10 years</h3>
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
          Our management team is composed of marketing specialists boasting over 25 years of collective expertise. They
          have successfully overseen and executed extensive marketing campaigns for prominent brands in Cambodia and the
          surrounding regions.
        </p>
        <p>
          Our workforce consists of more than 200 exceptionally skilled professionals. With prior experiences in leading
          corporations both in Cambodia and abroad, they bring a unique blend of creativity, enthusiasm, and dedication
          to our projects.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={"/image/banners/banner-6.jpg"}
            alt="ROSE BUDZZ"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.8]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[700px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white text-heading">VALUES THAT WE CREATE</h3>
            <p className="leading-6 text-center text-white">
              Our commitment is centered around achieving the following benchmarks for you: <br />
              - Dedicated consulting <br />
              - Cost optimization <br />
              - Revenue enhancement <br />
              - High and rapid efficiency <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
