/* eslint-disable @next/next/no-img-element */
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Tooth Color Removal",
    image: "/image/products/product-1.png",
    desc: ["Charmante hand skin softening and brightening serum.", "40ml", "Made in USA"],
  },
  {
    name: "Trezzen Hair Color Improving Bar Soap",
    image: "/image/products/product-2.jpg",
    desc: [
      "Hair blackening soap makes hair shiny and effectively prevents dandruff, hair loss, and itching.",
      "60g",
      "Made in USA",
    ],
  },
  {
    name: "Melasma treatment cream",
    image: "/image/products/product-3.jpg",
    desc: [
      "The moisturizer deeply hydrates and fades dark spots, pigmentation, and redness while soothing irritation with pro-retinol.",
      "30g",
      "Made in USA",
    ],
  },
  {
    name: "HolySmile Teeth Color Improving Toothpaste",
    image: "/image/products/product-4.jpg",
    desc: [
      "To brighten and increase the brightness of your smile, cover up any yellow tones in your teeth.",
      "30ml",
      "Made in USA",
    ],
  },
  {
    name: "Berari Vein Blurring Lotion",
    image: "/image/products/product-5.png",
    desc: [
      "Minimize the visibility of spider and varicose veins; lessen discomfort and edema; enhances blood flow.",
      "30ml",
      "Made in USA",
    ],
  },
  {
    name: "KASOMO Beard - Brow Nourishing Oil",
    image: "/image/products/product-6.jpg",
    desc: ["The cream removes blemishes, dullness, blemishes and brightens your skin.", "100ml", "Made in USA"],
  },
];

const OurProduct = () => {
  return (
    <div className="px-3 py-6 lg:px-16 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 md:gap-4 xl:gap-6">
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
