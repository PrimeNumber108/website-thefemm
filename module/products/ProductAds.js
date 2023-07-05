import Image from "next/image";
import React from "react";

const ProductAds = ({ image, content }) => {
  return (
    <div className="relative rounded-sm overflow-hidden shadow-sm">
      <div className="max-w-[650px] h-fit">
        <Image
          src={image}
          alt="product"
          width={600}
          height={600}
          className="aspect-[2/1.2] object-cover object-bottom brightness-75"
        />
      </div>
      <div className="absolute inset-0 flex-center">
        <p className="px-8 text-heading text-center sm:text-3xl text-2xl text-white">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ProductAds;
