import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-4.jpg"}
          alt="ROSE BUDZZ"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">ROSE BUDZZ</h3>
            <p className="leading-6 text-center text-white">
              We pledge to deliver tailored online marketing solutions that align with your goals, focusing on cost
              efficiency, revenue acceleration, and overall profit optimization
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1600px] pt-0 flex-center md:flex-row flex-col gap-8">
        <ProductAds
          image="/image/services/service-6.jpg"
          content="We've supported more than 30,000 businesses in achieving a fivefold increase in their revenue."
        />
        <ProductAds
          image="/image/services/service-7.jpg"
          content="In the year 2024, our services extended to over 5,000 customers."
        />
      </div>
    </>
  );
};

export default Services;
