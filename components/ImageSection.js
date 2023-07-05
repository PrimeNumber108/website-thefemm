import { isString } from "@/utils";
import Image from "next/image";
import React from "react";

const ImageSection = ({
  image,
  content,
  placement = "right",
  className = "",
  imageClassName = "",
}) => {
  return (
    <div
      className={`${
        placement === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex flex-col-reverse w-full lg:h-[700px] h-full ${className}`}
    >
      <div className="lg:w-1/2 w-full h-full flex-center">
        <div className="max-w-[500px] lg:py-[140px] py-[70px] mx-6 lg:text-left text-center">
          {content}
        </div>
      </div>
      <div
        className={`relative lg:w-1/2 w-full lg:h-full h-[500px] ${imageClassName}`}
      >
        {isString(image) ? (
          <Image
            src={image}
            className="w-full h-full object-cover object-top -z-10"
            alt="banner"
            fill
          />
        ) : (
          image
        )}
      </div>
    </div>
  );
};

export default ImageSection;
