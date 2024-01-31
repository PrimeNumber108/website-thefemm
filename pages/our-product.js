/* eslint-disable @next/next/no-img-element */
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Tooth Color Improving Toothpaste",
    image: "/image/products/product-1.jpg",
    desc: [
      "To brighten and increase the brightness of your smile, cover up any yellow tones in your teeth.",
      "30ml",
      "Made in USA",
    ],
  },
  {
    name: "Morri Exfoliating Body Lotion",
    image: "/image/products/product-2.jpg",
    desc: ["Eliminate dark spots, dullness, blemishes, and brighten your skin.", "100ml", "Made in USA"],
  },
  {
    name: "Berari Vein Blurring Lotion",
    image: "/image/products/product-3.png",
    desc: [
      "Minimize the visibility of spider and varicose veins; lessen discomfort and edema; enhances blood flow",
      "30ml",
      "Made in USA",
    ],
  },
  {
    name: "Charmante Softening and Brightening Hand Serum",
    image: "/image/products/product-4.png",
    desc: [
      "Heals chapped skin, softens and moisturizes hand skin, and brightens its whiteness.",
      "40ml",
      "Made in USA",
    ],
  },
  {
    name: "Trezzen Hair Color Improving Soap",
    image: "/image/products/product-5.jpg",
    desc: [
      "Blacken hair to give it a smooth, glossy finish and effectively prevent dandruff, hair loss, and itching",
      "60g",
      "Made in USA",
    ],
  },
  {
    name: "Melasma treatment cream",
    image: "/image/products/product-6.png",
    desc: [
      "The moisturizer deeply hydrates and fades dark spots, pigmentation, and redness while soothing irritation with pro-retinol.",
      "30g",
      "Made in USA",
    ],
  },
];

const OurProduct = () => {
  return (
    <div className="px-3 py-6 lg:px-16 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 md:gap-4 xl:gap-8">
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
