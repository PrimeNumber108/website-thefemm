import IngredientsCarousel from "@/components/Carousel/IngredientCarousel";
import HeroSection from "@/components/HeroSection";
import ImageSection from "@/components/ImageSection";
import TextLoader from "@/components/TextLoader";
import Image from "next/image";
import React from "react";

const Ingredients = () => {
  return (
    <>
      <HeroSection
        image={"/image/banner/8.jpg"}
        placement="right"
        content={
          <div className="w-full h-full flex fl justify-center lg:items-center items-start lg:px-6 sm:p-16 pt-16 px-6">
            <div className="w-full sm:w-[500px] flex justify-start flex-col gap-9">
              <h3 className="text-heading">
                Naturally powerful and proven effective
              </h3>
              <p className="text-primary leading-6">
                Every ingredient is meticulously researched by our world-class
                R&D team and sustainably sourced from trusted partners around
                the globe. If it’s not high quality or highly efficacious, we
                won’t use it.
              </p>
              <TextLoader content={"EXPLORE INGREDIENTS"} />
            </div>
          </div>
        }
      />
      <ImageSection
        className="bg-black"
        placement="right"
        content={
          <>
            <h3 className="text-heading mb-5 text-white">
              Leading with lab innovation
            </h3>
            <p className="text-white leading-6">
              Our in-house chemists endlessly test different combinations of
              high-performing natural and synthetic ingredients — for uniquely
              personalized formulas and always-improving results.
            </p>
          </>
        }
        image={
          <Image
            src="/image/banner/9.jpg"
            alt="KASOMO"
            width={1440}
            height={1440}
            className="block w-full h-full object-cover object-left"
          />
        }
      />
      <div className="container flex-center flex-col gap-10 text-center">
        <h3 className="text-heading text-5xl">
          Everything you want (and nothing you don’t)
        </h3>
        <p className="text-lg">
          Our formulas are cruelty-free with zero parabens, sulfates,
          phthalates, mineral oils, or GMOs. We can even make yours vegan,
          gluten-free, silicone-free, dye-free, or fragrance-free.
        </p>
        <div className="flex-center flex-wrap gap-10">
          <div className="w-36 flex-center flex-col gap-2">
            <Image
              src="/image/icon/ingredients-0.svg"
              alt="icon"
              width={38}
              height={38}
            />
            <span className="text-label tracking-wide">CRUELTY FREE</span>
          </div>
          <div className="w-36 flex-center flex-col gap-2">
            <Image
              src="/image/icon/ingredients-1.svg"
              alt="icon"
              width={38}
              height={38}
            />
            <span className="text-label tracking-wide">SULFATE FREE</span>
          </div>
          <div className="w-36 flex-center flex-col gap-2">
            <Image
              src="/image/icon/ingredients-2.svg"
              alt="icon"
              width={38}
              height={38}
            />
            <span className="text-label tracking-wide">PARABEN FREE</span>
          </div>
          <div className="w-36 flex-center flex-col gap-2">
            <Image
              src="/image/icon/ingredients-3.svg"
              alt="icon"
              width={38}
              height={38}
            />
            <span className="text-label tracking-wide">GMO FREE</span>
          </div>
          <div className="w-36 flex-center flex-col gap-2">
            <Image
              src="/image/icon/ingredients-4.svg"
              alt="icon"
              width={38}
              height={38}
            />
            <span className="text-label tracking-wide">PHTHALATE FREE</span>
          </div>
          <div className="w-36 flex-center flex-col gap-2">
            <Image
              src="/image/icon/ingredients-5.svg"
              alt="icon"
              width={38}
              height={38}
            />
            <span className="text-label tracking-wide">ALCOHOL FREE</span>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container py-10 text-center">
          <h3 className="text-heading text-4xl text-white">
            Selected & tested ingredients of KASOMO Hair Care
          </h3>
        </div>
      </div>
      <IngredientsCarousel />
    </>
  );
};

export default Ingredients;
