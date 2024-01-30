import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-3.jpg"}
          alt="LUSH PALETTE"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">LUSH PALETTE</h3>
            <p className="leading-6 text-center text-white">
              Empower your brand with our strategic marketing services, delivering impactful campaigns and captivating
              content for meaningful audience connections.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1600px] pt-0 flex-center md:flex-row flex-col gap-8">
        <ProductAds
          image="/image/services/service-6.jpg"
          content="Propelling over 5,000 businesses reach more than 1 million audiences for each project."
        />
        <ProductAds
          image="/image/services/service-7.jpg"
          content="In 2023, our services have helped more than 1500 businesses increase their revenue by 70%."
        />
      </div>
    </>
  );
};

export default Services;
