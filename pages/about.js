import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-4.jpg"}
          alt="thefemm"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">thefemm</h3>
            <p className="leading-6 text-center text-white">
              Individual commitment to a group effort - that is what makes a team work, a company work, a society work,
              a civilization work
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl uppercase text-heading">MORE THAN 5 YEARS OF ESTABLISHMENT</h3>
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
          <b>THEFEMM</b> was established in 2019. After 5 years of operation, our company now has more than 100
          experienced employees in the field of online marketing and advertising.
        </p>
        <p>
          We have approached and cooperated with more than 17,000 individual and business customers in Cambodia, Asia,
          and some countries in Europe.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={"/image/banners/banner-5.jpg"}
            alt="thefemm"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[700px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white text-heading">WHY SHOULD YOU CHOOSE US?</h3>
            <p className="leading-6 text-center text-white">
              <b>Proven Experts</b>: Rely on our experienced team with a successful track record in diverse industries.
              <br />
              <b>Innovative Solutions</b>: Stay ahead with cutting-edge strategies for a standout brand.
              <br />
              <b>Client-Focused</b>: Experience personalized attention and flexible strategies.
              <br />
              <b>Measurable Results</b>: Achieve tangible success with our data-driven approach.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
