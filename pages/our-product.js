/* eslint-disable @next/next/no-img-element */
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Tooth Stain Removal",
    image: "/image/products/product-1.jpg",
    desc: ["Conceal yellow tones in teeth to improve and brighten the smile."],
  },
  {
    name: "Mushroomhead Air Cushion CC Cream Brightening Skin Tone",
    image: "/image/products/product-2.jpg",
    desc: ["Perfect makeup for 12 hours, excellent oil control,anti greasy, moisturize and correct uneven skin tone."],
  },
  {
    name: "Charmante Perfect Hand Serum",
    image: "/image/products/product-3.jpg",
    desc: [
      "Protect hands, safeguard them from environmental and household damage, smoothe skin, provide refreshing, revitalizing effect",
    ],
  },
  {
    name: "KASOMO Hair Growth Serum",
    image: "/image/products/product-4.jpg",
    desc: [
      "Repairs the damaged scalp, reactivate the cells for denser hair growth. It is your one-stop solution for all your hair growth concerns",
    ],
  },
  {
    name: "KASOMO Hair Nourishing Mask",
    image: "/image/products/product-5.jpg",
    desc: ["Perfect solution for damaged, coarse hair, help bring your smoothness back with just a few healing drops"],
  },
  {
    name: "KASOMO Beard Brow Nourishing Oil",
    image: "/image/products/product-6.png",
    desc: ["Your best beard care to moisturize and soften your beard"],
  },
  {
    name: "KASOMO Anti Hair Loss Shampoo",
    image: "/image/products/product-7.jpg",
    desc: [
      "Gently cleanses hair and scalp and removes excess follicle-clogging sebum to help maintain the optimal scalp environment for healthy looking hair.",
    ],
  },
  {
    name: "Morri Skin Peeling Gel",
    image: "/image/products/product-8.jpg",
    desc: ["Regular use helps exfoliate and maintain a more clear and even complexion, hydrate and smoothen skin."],
  },
  {
    name: "Trezzen Darken Bar Soap Shampoo",
    image: "/image/products/product-9.jpg",
    desc: ["Reduces grey with every wash while also thickening hair up to 20%"],
  },
  {
    name: "Berari Vein Repair Lotion",
    fanpage: "https://www.facebook.com/profile.php?id=100093025314645",
    image: "/image/products/product-10.jpg",
    desc: [
      "Reduce spider veins and broken blood vessels quickly, strengthen veins and vein wall function, which can help fade unsightly spider veins.",
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
