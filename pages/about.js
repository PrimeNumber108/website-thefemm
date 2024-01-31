import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-5.jpeg"}
          alt="LUZLURE"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">LUZLURE</h3>
            <p className="leading-6 text-center text-white">
              Great achievements in business are never accomplished by one person alone; they are the result of
              teamwork.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl uppercase text-heading">MORE THAN 6 YEARS OF ESTABLISHMENT</h3>
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
          LUZLURE was established in 2018. After six years of formation and development, our company currently has more
          than 120 experienced employees in the fields of marketing and online advertising.
        </p>
        <p>
          We have approached and cooperated with more than 20,000 individual and business customers in Cambodia, Asia,
          and some countries in Europe.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={"/image/banners/banner-6.png"}
            alt="LUZLURE"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[650px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white text-heading">WHY SHOULD YOU CHOOSE US?</h3>
            <p className="leading-6 text-center text-white">
              - Choose us for our unique and effective marketing strategy. <br />
              - Creative, flexible team focused on real value for your business. <br />
              - High performance, reasonable costs - the right choice. <br />
              - Proven success, diverse marketing solutions, committed to your growth. <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
