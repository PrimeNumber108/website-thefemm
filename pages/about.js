import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-5.jpg"}
          alt="BELLA BLOM"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">LUST PALETTE</h3>
            <p className="leading-6 text-center text-white">
              At the heart of our mission is a team of skilled professionals devoted to converting obstacles into
              opportunities, guaranteeing your success in an ever-changing business world.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl uppercase text-heading">More than 6 years of establishment</h3>
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
          The leadership of our company comprises marketing experts with over two decades of experience, providing
          guidance and overseeing numerous extensive marketing initiatives for renowned brands all over the world.
        </p>
        <p>
          Our team consists of over 100 extensively qualified individuals, each with prior experience at prominent
          corporations in Cambodia and internationally. Their collective attributes include creativity, enthusiasm, and
          unwavering dedication to their work.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={"/image/banners/banner-6.jpg"}
            alt="BELLA BLOM"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[650px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white text-heading">OUR COMMITMENTS</h3>
            <p className="leading-6 text-center text-white max-w-[400px]">
              - Your success is our mission <br />
              - Maintain the highest standards of quality and professionalism <br />
              - Deliver unparalleled excellence in every aspect of our service <br />
              - Prioritize transparency, integrity, and open communication, fostering trust with our clients and
              partners <br />
              -Consistently innovate and adapt <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
