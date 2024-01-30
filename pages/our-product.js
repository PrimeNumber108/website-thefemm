/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Teeth Whitening Booster",
    image: "/image/products/product-1.jpg",
    desc: ["Removes deep-seated stains, enhance the whiteness of teeth.", "30ml", "From the USA"],
  },
  {
    name: "Air Cushion Cream Mushroom Head",
    image: "/image/products/product-2.jpg",
    desc: ["Lightweight, waterproof & long lasting matte concealer with mushroom head sponges.", "20g", "From the USA"],
  },
  {
    name: "Charmante Moisturizing Hand Serum",
    image: "/image/products/product-3.jpg",
    desc: ["Nourishing anti dry, split hand cream, not-greasy, anti crack hand care.", "40ml", "From the USA"],
  },
  {
    name: "Kasomo Hair Regrowth Serum",
    image: "/image/products/product-4.jpg",
    desc: ["Promote hair growth thicker, support prevent hair loss and improve baldness.", "75ml", "From the USA"],
  },
  {
    name: "Kasomo Hair Repair Mask",
    image: "/image/products/product-5.jpg",
    desc: ["Nourishing hair smoother, preventing breakage, moisturizing and adding shine.", "250ml", "From the USA"],
  },
  {
    name: "Kasomo Growth Oil For Beard & Eyebrow",
    image: "/image/products/product-6.png",
    desc: ["Promote, strengthens, darkens, softens, moisturizes beard & eyebrow growth.", "30ml", "From the USA"],
  },
  {
    name: "Kasomo Organic Shampoo For Dandruff & Hair Loss",
    image: "/image/products/product-7.jpg",
    desc: ["Restores damaged hair, prevents hair loss and relieves dandruff and itchy scalp.", "250ml", "From the USA"],
  },
  {
    name: "Morri Peeling Gel For Dark Skin",
    image: "/image/products/product-8.jpg",
    desc: [
      "Cleanse dirt and refine pores, reveal a bright complexion. Remove dark spots, dullness and blemish,....",
      "100ml",
      "From the USA",
    ],
  },
  {
    name: "Trezzen Gray Reverse Shampoo Bar",
    image: "/image/products/product-9.jpg",
    desc: [
      "Transform your gray hair into dark color. Stimulates the growth and remove hair loss.",
      "60g",
      "From the USA",
    ],
  },
  {
    name: "Berari Veins Repair Relief Cream",
    fanpage: "https://www.facebook.com/profile.php?id=100093025314645",
    image: "/image/products/product-10.jpg",
    desc: [
      "Diminish the appearance of varicose and spider veins. Promotes smooth skin and blood circulation.",
      "30g",
      "From the USA",
    ],
  },
];

const OurProduct = () => {
  return (
    <div className="px-3 py-6 lg:px-16 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 xl:gap-8">
        {products.map(({ name, image, desc }) => (
          <div key={v4()} className="flex flex-col overflow-hidden rounded shadow">
            <img src={image} alt="product" className="aspect-square"></img>
            <div className="flex flex-col gap-3 px-3 pt-4 pb-5">
              <p className="text-[16px] text-center hover:text-blue-400 text-black leading-6">{name}</p>
              <div className="flex-center">
                <ul className="space-y-1">
                  {desc.map((text) => (
                    <li key={v4()} className="text-center text-secondary">
                      &bull; {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
