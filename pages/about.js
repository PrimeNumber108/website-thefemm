import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-4.jpg"}
          alt="LUSH PALETTE"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">LUST PALETTE</h3>
            <p className="leading-6 text-center text-white">
              Our mission is to empower businesses through innovation and growth, making a positive impact on our
              clients and communities.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl text-heading">FROM THE STARTING POINT TO THE PEAK</h3>
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
          Over the years, our achievements have been marked by sustained excellence. We&apos;ve garnered industry
          recognition for innovative solutions, received accolades for outstanding customer service.
        </p>
        <p>
          These achievements reflect our ongoing commitment to delivering unparalleled quality and setting new standards
          in the ever-evolving business landscape.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={"/image/banners/banner-5.jpg"}
            alt="LUSH PALETTE"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[650px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white text-heading">OUR DEDICATION</h3>
            <p className="leading-6 text-center text-white">
              Committed to excellence, we innovate, exceed expectations, and make a positive impact in every aspect of
              our business, fostering enduring partnerships.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
