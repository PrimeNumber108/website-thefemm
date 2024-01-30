import Image from "next/image";
import React from "react";

const ProductAds = ({ image, content }) => {
  return (
    <div className="relative overflow-hidden rounded-sm shadow-sm">
      <div className="max-w-[650px] h-fit">
        <Image
          src={image}
          alt="product"
          width={600}
          height={600}
          className="object-cover object-bottom brightness-75"
        />
      </div>
      <div className="absolute inset-0 flex-center">
        <p className="px-8 text-2xl text-center text-white text-heading sm:text-3xl">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ProductAds;
