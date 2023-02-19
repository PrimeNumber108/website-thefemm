import HeroSection from "@/components/HeroSection";
import ImageSection from "@/components/ImageSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <HeroSection
        image={"/image/banner/10.png"}
        placement="right"
        content={
          <div className="w-full h-full flex justify-center lg:items-center items-start lg:px-6 sm:p-16 pt-16 px-6">
            <div className="w-full sm:w-[500px] flex-center flex-col gap-9">
              <h3 className="text-heading text-center">
                You’re a queen, your hair is your crown
              </h3>
            </div>
          </div>
        }
      />
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-heading text-5xl">A new standard in beauty</h3>
        <div>
          <svg
            height="100"
            viewBox="0 0 8 100"
            width="8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 100c0-3.845 6-3.845 6-7.69s-6-3.845-6-7.691c0-3.845 6-3.845 6-7.69 0-3.847-6-3.847-6-7.693 0-3.843 6-3.843 6-7.687 0-3.845-6-3.845-6-7.691 0-3.845 6-3.845 6-7.69 0-3.846-6-3.846-6-7.69 0-3.847 6-3.847 6-7.694s-6-3.847-6-7.695c0-3.846 6-3.846 6-7.693 0-3.849-6-3.849-6-7.698s6-3.849 6-7.698"
              fill="none"
              stroke="#daa855"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
        <p>
          <span className="font-bold">
            Mass haircare is designed for “the masses”
          </span>{" "}
          with a few narrow products intended for as many people as possible.
          Your results may vary, but your options stay the same.
        </p>
        <p>
          <span className="font-bold">
            We believe everyone deserves extraordinary care
          </span>{" "}
          and that making things custom is the only way to give everyone their
          best individual results.
        </p>
      </div>
      <ImageSection
        className="bg-black text-white"
        placement="right"
        content={
          <div>
            <h3 className="text-heading mb-5 text-white">
              An evolving process
            </h3>
            <p className="leading-6 text-white">
              Progress is built into every Kasomo formula. We routinely update
              our products with new ingredients and complexes developed by our
              R&D lab, and seasonally adjust your formulas to match the
              conditions in your ZIP code. You’re part of the process too—tell
              us how your haircare performs using Review & Refine, and we’ll
              tweak your next order for even better results over time.
            </p>
            <div className="mt-10 md:mt-14">
              <button className="btn btn-white-outline w-fit">
                <Link href="/products">GET YOUR ROUTINE</Link>
              </button>
            </div>
          </div>
        }
        image={
          <Image
            src="/image/banner/11.jpg"
            alt="KASOMO"
            width={1440}
            height={1440}
            className="block w-full h-full object-cover object-center"
          />
        }
      />
      <ImageSection
        placement="left"
        content={
          <div>
            <h3 className="text-heading mb-5">
              Naturally high-performing formulas
            </h3>
            <p className="leading-6">
              Our in-house R&D team in Paris is staffed by gifted chemists who
              combine natural ingredients in innovative ways, giving you clean
              haircare and impeccable results. They’re the reason our formulas
              offer new answers to individual hair needs, not the same old mass
              solutions.
            </p>
            <div className="mt-10 md:mt-14">
              <button className="btn btn-primary-outline w-fit">
                <Link href="/ingredients">SEE ALL INGREDIENTS</Link>
              </button>
            </div>
          </div>
        }
        image={
          <Image
            src="/image/banner/14.jpg"
            alt="KASOMO"
            width={1440}
            height={1440}
            className="block w-full h-full object-cover object-center"
          />
        }
      />

      <ImageSection
        placement="right"
        content={
          <div className="lg:space-y-14 space-y-10">
            <h3 className="text-heading mb-5">Cleaning up the industry</h3>
            <p className="leading-6">
              We’re a company who wants to change beauty practices, so we’re
              changing the way beauty companies practice. As a certified B
              Corporation, we’re proving that good business is always
              sustainable. With Kasomo, there’s nothing sacrificed to bring you
              great hair—not trees, materials, wages, or performance. We can all
              thrive together.
            </p>
          </div>
        }
        image={
          <Image
            src="/image/banner/12.jpg"
            alt="KASOMO"
            width={1440}
            height={1440}
            className="block w-full h-full object-cover object-center"
          />
        }
      />
      <div className="bg-primary">
        <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
          <h3 className="text-heading text-4xl text-white">
            Paris meets New York meets...you?
          </h3>
          <p className="text-white">
            Founded in France, Kasomo operates proudly out of Brooklyn, where
            our HQ dreams up what’s next and our factory bottles every product
            fresh to order; the lab remains in the heart of Paris. If you’re
            interested in what we do, we’re always looking to add to our richly
            diverse and talented team.
          </p>
          <div className="">
            <button className="btn btn-white-outline w-fit">
              <Link href="/products">SEE WHAT&apos;S OPEN</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
