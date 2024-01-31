/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Serum for Teeth Whitening",
    fanpage: "https://www.facebook.com/LoungeForLady",
    image: "/image/products/product-1.jpg",
    desc: [
      "Mask the yellow hues in your teeth, promoting an improvement and amplification of your radiant smile.",
      "30ml",
      "Made in USA",
    ],
  },
  {
    name: "CC Cream with Mushroom Applicator",
    fanpage: "https://www.facebook.com/bestcccream",
    image: "/image/products/product-2.png",
    desc: [
      "Hides blemishes, evens out skin tone, and reduces the appearance of dark spots and redness, resulting in a naturally beautiful and glowing complexion. ",
      "20ml",
      "Made in USA",
    ],
  },
  {
    name: "Serum for hand skin - Charmante",
    fanpage: "https://www.facebook.com/wegiveyourealbeauty/?ref=page_internal",
    image: "/image/products/product-3.jpg",
    desc: [
      "Hydrates and softens the skin on your hands, repairing chapped areas and imparting a radiant brightness to enhance the overall appearance of your hands",
      "40ml",
      "Made in USA",
    ],
  },
  {
    name: "Kasomo Hair Regrowth Serum",
    fanpage: "https://www.facebook.com/Kasomohairtherapy",
    image: "/image/products/product-4.jpg",
    desc: ["Accelerate the growth of your beard and hair with a stimulating formula.", "75ml", "Made in USA"],
  },
  {
    name: "Kasomo Masque for smoothening hair",
    fanpage: "https://www.facebook.com/Kasomohairmask",
    image: "/image/products/product-5.jpg",
    desc: ["Enhance hair smoothness and thickness with our specialized formula.", "250ml", "Made in USA"],
  },
  {
    name: "Kasomo Serum for Beard and Brow Growth",
    fanpage: "https://www.facebook.com/Kasomobeardbrowserum",
    image: "/image/products/product-6.jpg",
    desc: ["Promote and support the growth of your beard and eyebrows.", "30ml", "Made in USA"],
  },
  {
    name: "Berari Vein Repair Cream",
    fanpage: "https://www.facebook.com/profile.php?id=100093025314645",
    image: "/image/products/product-7.jpg",
    desc: [
      "Reduce the visibility of varicose and spider veins, alleviate swelling and pain, and enhance blood circulation.",
      "30g",
      "Made in USA",
    ],
  },
  {
    name: "Kasomo Shampoo for reducing hair loss",
    fanpage: "https://www.facebook.com/Kasomohairmask",
    image: "/image/products/product-8.jpg",
    desc: ["Enhance hair growth and promote thicker strands to combat hair loss effectively.", "250ml", "Made in USA"],
  },
];

const OurProduct = () => {
  return (
    <div className="px-3 py-6 lg:px-16 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 md:gap-4 xl:gap-6">
        {products.map(({ name, fanpage, image, desc }) => (
          <div key={v4()} className="flex flex-col overflow-hidden rounded shadow">
            <Link target="_blank" href={fanpage}>
              <img src={image} alt="product" className="aspect-square"></img>
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
