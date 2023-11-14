/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "FEG Hair Growth Spray",
    fanpage: "https://www.facebook.com/FEGCosmeticsGCC ",
    image: "/image/products/product-1.jpg",
    desc: ["Reduces Hair fall & Damage", "50ml", "From the USA"],
  },
  {
    name: "FEG Plus Eyelash Vitalizer",
    fanpage: "https://www.facebook.com/FEGPlus",
    image: "/image/products/product-2.jpeg",
    desc: ["Nourish healthy and long eyelashes", "5ml", "From the USA"],
  },
  {
    name: "FEG Plus Repair Eye Cream",
    fanpage: "https://www.facebook.com/longnaturallashes",
    image: "/image/products/product-3.jpg",
    desc: ["Brighten and even skin tone in the under-eye area", "20ml", "From the USA"],
  },
  {
    name: "Kasomo Hair Regrowth Spray",
    fanpage: "https://www.facebook.com/Kasomohairtherapy",
    image: "/image/products/product-4.webp",
    desc: ["Stimulate beard & eyebrow growth faster", "75ml", "From the USA"],
  },
  {
    name: "Kasomo Hair Mask",
    fanpage: "https://www.facebook.com/Kasomohairmask",
    image: "/image/products/product-5.webp",
    desc: ["Promote hair smoothness & thickness", "250ml", "From the USA"],
  },
  {
    name: "Kasomo Beard and Brow Growth Serum",
    fanpage: "https://www.facebook.com/Kasomobeardbrowserum",
    image: "/image/products/product-6.jpg",
    desc: ["Support beard & brow growth", "30ml", "From the USA"],
  },
  {
    name: "Kasomo Hair Loss Shampoo",
    fanpage: "https://www.facebook.com/Kasomohairmask",
    image: "/image/products/product-7.jpg",
    desc: ["Improve hair loss & Promote hair thickness", "250ml", "From the USA"],
  },
  {
    name: "Morri Peeling Lotion",
    fanpage: "https://www.facebook.com/morrilanddddd",
    image: "/image/products/product-8.jpg",
    desc: ["Remove dullness, blemish, acne spots, dark spots & whiten skin", "100ml", "From the USA"],
  },
  {
    name: "Trezzen Shampoo Bar Soap",
    fanpage: "https://www.facebook.com/halalashopp",
    image: "/image/products/product-9.jpg",
    desc: [
      "Blacken hair, strongly prevent hair loss, dandruff, itching, gives smooth, shiny hair",
      "60g",
      "From the USA",
    ],
  },
  {
    name: "Berari Vein Care Fading Cream",
    fanpage: "https://www.facebook.com/profile.php?id=100093025314645",
    image: "/image/products/product-10.jpg",
    desc: [
      "Diminish the appearance of varicose and spider veins / Reduce swelling and pain / Improves blood circulation",
      "30g",
      "From the USA",
    ],
  },
];

const OurProduct = () => {
  return (
    <div className="px-3 py-6 lg:px-16 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 xl:gap-6">
        {products.map(({ name, fanpage, image, desc }) => (
          <div key={v4()} className="flex flex-col overflow-hidden rounded shadow">
            <Link target="_blank" href={fanpage}>
              <img src={image} alt="product"></img>
            </Link>
            <div className="flex flex-col gap-3 px-3 pt-4 pb-5">
              <p className="text-[16px] text-center hover:text-blue-400 text-black leading-6">
                <Link target="_blank" href={fanpage}>
                  {name}
                </Link>
              </p>
              <div className="flex-center">
                <ul className="space-y-1">
                  {desc.map((text) => (
                    <li key={v4()} className="text-center text-secondary">
                      &bull; {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-center">
                <Link target="_blank" href={fanpage}>
                  <p className="px-3 py-1.5 uppercase bg-[#EE427F] text-white block w-fit rounded-md text-sm hover:bg-[#ff78a7]">
                    View fanpage
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
