/* eslint-disable @next/next/no-img-element */
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Tooth Color Removal",
    image: "/image/products/product-1.jpg",
    desc: ["Conceal yellow tones in teeth to enhance and brighten your smile."],
  },
  {
    name: "Mushroomhead Air Cushion CC Cream",
    image: "/image/products/product-2.jpg",
    desc: [
      "Perfect makeup for 12 hours, with outstanding oil control, anti-greasy properties, moisturizing, and correcting uneven skin tone.",
    ],
  },
  {
    name: "Charmante Perfect Hand Moisturizing Serum",
    image: "/image/products/product-3.png",
    desc: [
      "Protect hands from environmental and home harm, smooth the skin, and deliver a refreshing, invigorating sensation.",
    ],
  },
  {
    name: "KASOMO Hair ReGrowth Serum",
    image: "/image/products/product-4.png",
    desc: [
      "Repairs the damaged scalp and reactivates the cells to promote denser hair growth. It is a one-stop answer for all of your hair growth difficulties.",
    ],
  },
  {
    name: "KASOMO Hair Nourishing Mask",
    image: "/image/products/product-5.png",
    desc: ["Perfect solution for damaged, coarse hair, help bring your smoothness back with just a few healing drops"],
  },
  {
    name: "KASOMO Beard - Brow Nourishing Oil",
    image: "/image/products/product-6.jpg",
    desc: ["Best Beard Care for Moisturizing and Softening"],
  },
  {
    name: "KASOMO Anti Hair Loss Shampoo",
    image: "/image/products/product-7.jpg",
    desc: [
      "Gently washes the hair and scalp, removing excess follicle-clogging sebum to help maintain the ideal scalp environment for healthy-looking hair.",
    ],
  },
  {
    name: "Morri Skin Peeling Gel",
    image: "/image/products/product-8.jpg",
    desc: [
      "Regular application exfoliates and maintains a clearer, more even complexion while also hydrating and smoothing the skin.",
    ],
  },
  {
    name: "Trezzen Darken Bar Soap",
    image: "/image/products/product-9.jpg",
    desc: ["Reduces grey with every wash while also thickening hair up to 85%"],
  },
  {
    name: "Berari Vein Repair Cream",
    image: "/image/products/product-10.jpg",
    desc: [
      "Reduce spider veins and fractured blood vessels rapidly, strengthen veins, and improve vein wall function to help fade unattractive spider veins.",
    ],
  },
];

const OurProduct = () => {
  return (
    <div className="px-3 py-6 lg:px-16 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 md:gap-4 xl:gap-6">
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
