import React from "react";
import Image from "next/image";
const products = [
  {
    front: "/image/product/1-front.jpg",
    back: "/image/product/1-back.jpg",
    name: "Kasomo Hair Spray",
  },
  {
    front: "/image/product/2-front.jpg",
    back: "/image/product/2-back.jpg",
    name: "Kasomo Hair Shampoo",
  },
  {
    front: "/image/product/3-front.jpg",
    back: "/image/product/3-back.jpg",
    name: "Kasomo Hair Mask",
  },
  {
    front: "/image/product/4-front.jpg",
    back: "/image/product/4-back.jpg",
    name: "Kasomo Hair & Scalp Derma Roller",
  },
  {
    front: "/image/product/5-front.png",
    back: "/image/product/5-back.jpg",
    name: "Kasomo Scalp Massager",
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
                src={product.front}
                alt="KASOMO"
                width={250}
                height={330}
                className="product-image product-image--front"
              />
              <Image
                src={product.back}
                alt="KASOMO"
                width={250}
                height={330}
                className="product-image product-image--back"
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
