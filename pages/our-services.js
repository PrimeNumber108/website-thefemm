import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-4.jpeg"}
          alt="CATCHYN"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.8]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">CATCHYN</h3>
            <p className="leading-6 text-center text-white">
              We will provide you with online marketing and advertising solutions for businesses, such as: Overall
              marketing strategy, key visual, digital marketing plan and online advertising…
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1600px] pt-0 flex-center md:flex-row flex-col gap-8">
        <ProductAds
          image="/image/services/service-4.jpeg"
          content="After 4 years, we helped more than 1,000 customers grow revenue. The average growth rate is 50%."
        />
        <ProductAds
          image="/image/services/service-5.jpeg"
          content="The number of our customers in 2023 increases by 70% compared to 2022, including businesses in Southeast Asia and Northeast Asia."
        />
      </div>
    </>
  );
};

export default Services;
