import { isString } from "@/utils";
import Image from "next/image";
import React from "react";

const HeroSection = ({ image, placement = "right", content }) => {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex">
      <div className="absolute inset-0">
        {isString(image) ? (
          <Image
            src={image}
            className="w-full h-full object-cover object-top -z-10"
            alt="casimi-banner"
            fill
          />
        ) : (
          image
        )}
      </div>
      <div
        className={`absolute inset-0 flex ${
          placement === "right" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="lg:basis-1/2" />
        <div className="flex-1">{content}</div>
      </div>
    </div>
  );
};

export default HeroSection;
