import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-4.jpg"}
          alt="BELLA BLOM"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">BELLA BLOM</h3>
            <p className="leading-6 text-center text-white">
              Count on our unwavering confidence to provide uniquely customized marketing solutions aligned with your
              business goals.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1600px] pt-0 flex-center md:flex-row flex-col gap-8">
        <ProductAds
          image="/image/services/service-6.jpg"
          content="Dedicated to overcoming challenges, our team of skilled professionals ensures your success in the fast-paced business."
        />
        <ProductAds
          image="/image/services/service-7.jpg"
          content="In 2023, our services successfully reached more than 4,000 potential customers."
        />
      </div>
    </>
  );
};

export default Services;
