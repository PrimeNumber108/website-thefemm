/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Teeth Color Corrector Serum",
    fanpage: "https://www.facebook.com/FEGCosmeticsGCC ",
    image: "/image/products/product-1.jpeg",
    desc: [
      "Instantly whiten teeth, give you the brightest smile and reduces the saturation of yellow stains.",
      "40ml",
      "From the U.S",
    ],
  },
  {
    name: "Mushroom Head Air Cushion CC Cream",
    fanpage: "https://www.facebook.com/FEGPlus",
    image: "/image/products/product-2.jpeg",
    desc: ["Make your base makeup no longer heavy.", "20g", "From the U.S"],
  },
  {
    name: "Charmante Hand Skin Serum",
    fanpage: "https://www.facebook.com/profile.php?id=100086701567012",
    image: "/image/products/product-3.jpeg",
    desc: ["Reduce wrinkles, instantly hydrate, soothe the skin.", "40ml", "From the U.S"],
  },
  {
    name: "Kasomo Hair Regrowth Spray",
    fanpage: "https://www.facebook.com/Kasomohairtherapy",
    image: "/image/products/product-4.jpeg",
    desc: [
      "Stimulates hair growth, prevents hair loss and improves graying of hair, making hair darker.",
      "75ml",
      "From the U.S",
    ],
  },
  {
    name: "Kasomo Hair Mask",
    fanpage: "https://www.facebook.com/Kasomohairmask",
    image: "/image/products/product-5.jpeg",
    desc: [
      "This rich and effective mask acts as a deep conditioner that leaves your hair softer, smoother, and stronger than first use.",
      "From the U.S",
    ],
  },
  {
    name: "Kasomo Beard And Eyebrow Growth Serum",
    fanpage: "https://www.facebook.com/Kasomobeardbrowserum",
    image: "/image/products/product-6.jpeg",
    desc: ["Stimulates beard and eyebrow growth thicker, denser and healthier.", "From the U.S"],
  },
  {
    name: "Kasomo Shampoo For Hair Loss And Dandruff",
    fanpage: "https://www.facebook.com/Kasomohairmask",
    image: "/image/products/product-7.jpeg",
    desc: ["Prevents hair loss and stops dandruff after 14 days of use.", "From the U.S"],
  },
  {
    name: "Morri Peeling Lotion",
    fanpage: "https://www.facebook.com/profile.php?id=100093059664289",
    image: "/image/products/product-8.jpeg",
    desc: ["Remove dead skin and dark spots, helps your skin become smoother and whiter.", "100ml"],
  },
  {
    name: "Trezzen Shampoo Bar Soap",
    fanpage: "https://www.facebook.com/profile.php?id=100086779023347",
    image: "/image/products/product-9.jpeg",
    desc: ["Improves gray hair, making hair darker and stronger.", "60g", "From the U.S"],
  },
  {
    name: "Berari Vein Care Fading Cream",
    fanpage: "https://www.facebook.com/profile.php?id=100093025314645",
    image: "/image/products/product-10.jpeg",
    desc: ["Reducing Varicose Veins and Spiders,  Improves blood circulation.", "30g", "From the U.S"],
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
