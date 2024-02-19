/* eslint-disable @next/next/no-img-element */
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Teeth Color Corrector",
    image: "/image/products/product-1.png",
    desc: [
      "Instantly whiten teeth, give you the brightest smile and reduces the saturation of yellow stains.",
      "40ml",
      "From the U.S",
    ],
  },
  {
    name: "CC Cream -Mushroom Head Air Cushion",
    image: "/image/products/product-2.png",
    desc: ["Make your base makeup no longer heavy.", "20g", "From the U.S"],
  },
  {
    name: "Charmante Hand Skin Serum",
    image: "/image/products/product-3.jpg",
    desc: ["Reduce wrinkles, instantly hydrate, soothe the skin.", "40ml", "From the U.S"],
  },
  {
    name: "Kasomo Hair Growth Spray",
    image: "/image/products/product-4.jpeg",
    desc: ["Stimulates hair growth, prevents hair loss and improves baldness.", "75ml", "From the U.S"],
  },
  {
    name: "Kasomo Hair Mask",
    image: "/image/products/product-5.png",
    desc: [
      "Hair mask for healthy, silky hair extracted from vegan. Eliminate frizzy, dry & tangled hair in secs.",
      "From the U.S",
    ],
  },
  {
    name: "Kasomo Beard And Eyebrow Growth Serum",
    image: "/image/products/product-6.jpeg",
    desc: [
      "Regrow beards & eyebrows; thicken, lengthen beards & eyebrows; produce stronger & denser beards; Reduce thin brows, breakage.",
      "From the U.S",
    ],
  },
  {
    name: "Kasomo Shampoo For Hair Loss And Dandruff",
    image: "/image/products/product-7.jpg",
    desc: ["Prevents hair loss and stops dandruff after 7 days of use.", "From the U.S"],
  },
  {
    name: "Morri Peeling Lotion",
    image: "/image/products/product-8.jpeg",
    desc: ["Remove dead skin and dark spots, helps your skin become smoother and whiter.", "100ml"],
  },
  {
    name: "Trezzen Shampoo Bar Soap (Upgrade version)",
    image: "/image/products/product-9.jpeg",
    desc: [
      "Restore natural hair color, as your daily ordinary shampoo, make your gray or white hair turn into a young and vivid dark color again.",
      "60g",
      "From the U.S",
    ],
  },
  {
    name: "Berari Vein Care Fading Cream (Upgrade version - More effective)",
    image: "/image/products/product-10.jpeg",
    desc: ["Reducing Varicose Veins and Spiders,  Improves blood circulation.", "30g", "From the U.S"],
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
