import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-5.jpg"}
          alt="luxorir"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">luxorir</h3>
            <p className="leading-6 text-center text-white">
              At the core of our purpose is a team of competent experts dedicated to transforming hurdles into
              opportunities, ensuring your success in a rapidly changing business environment.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl uppercase text-heading">More than 5 years of establishment</h3>
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
          Our company&apos;s leadership consists of marketing specialists with over two decades of experience, who have
          provided counsel and overseen countless major marketing campaigns for well-known companies throughout the
          world.
        </p>
        <p>
          Our team comprises of approximately 100 highly qualified experts, each with past experience at major
          organizations in Cambodia and beyond. Their shared characteristics include inventiveness, excitement, and
          uncompromising commitment to their profession.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={"/image/banners/banner-6.jpg"}
            alt="luxorir"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.9]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[700px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white text-heading">OUR COMMITMENTS</h3>
            <p className="leading-6 text-center text-white">
              We are proud of the values we bring: <br />
              - Your success is our objective. <br />
              - Maintain the highest level of quality and professionalism. <br />
              - Prioritize openness, integrity, and open communication to build trust with our clients and partners.
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
