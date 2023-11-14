import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Products = () => {
  return (
    <>
      <div className="relative w-full min-h-[calc(100vh-80px)]">
        <Image
          src={"/image/banner-7.jpg"}
          alt="casami-banner"
          fill
          className="w-full h-full object-cover object-center -z-10 brightness-75"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-heading text-white">CASAMI</h3>
            <p className="text-white text-center leading-6">
              We will provide you with Online Marketing solutions that meet the
              following criteria: minimizing costs, growing revenue, and
              enhancing profits.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1600px] pt-0 flex-center md:flex-row flex-col gap-8">
        <ProductAds
          image="/image/mkt-6.jpg"
          content="We have been assisting over 25,000 businesses in increasing their revenue fivefold."
        />
        <ProductAds
          image="/image/mkt-7.jpg"
          content="In 2022, our services reached more than 3,000 customers."
        />
      </div>
    </>
  );
};

export default Products;
