import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-4.jpg"}
          alt="fineryworld"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">FINERY WORLD</h3>
            <p className="leading-6 text-center text-white">
              We will provide you with online marketing and advertising solutions for businesses.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1600px] pt-0 flex-center md:flex-row flex-col gap-8">
        <ProductAds
          image="/image/services/service-1.jpg"
          content="In 2023, we helped more than 2,000 customers grow revenue. The average growth rate is 60%."
        />
        <ProductAds
          image="/image/services/service-1.jpg"
          content="The number of our customers in 2023 increases by 70% compared to 2022, including businesses in Asia and Europe."
        />
      </div>
    </>
  );
};

export default Services;
