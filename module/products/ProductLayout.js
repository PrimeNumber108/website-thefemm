import React from "react";
import Image from "next/image";
const products = [
  {
    src: "/image/mkt-1.jpeg",
    name: "Facebook Marketing",
  },
  {
    src: "/image/mkt-2.jpg",
    name: "Google Marketing",
  },
  {
    src: "/image/mkt-3.jpg",
    name: "Tiktok Marketing",
  },
  {
    src: "/image/mkt-4.jpeg",
    name: "Marketing Offline",
  },
  {
    src: "/image/mkt-5.jpg",
    name: "Branding",
  },
];
const ProductLayout = () => {
  return (
    <div className="relative container lg:pt-[100px] pt-[50px]">
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-6">
        {products.map((product, index) => (
          <div key={index} className="mx-auto">
            <div className="product-box max-w-[250px] h-auto lg:mt-[40px] mt-[20px]">
              <Image
                src={product.src}
                alt={product.name}
                width={250}
                height={330}
                className="product-image product-image--front object-cover w-full h-full"
              />
            </div>
            <div className="text-center mt-3 font-serif text-xl">
              <p>{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLayout;
