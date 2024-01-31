import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-4.jpeg"}
          alt="LUZLURE"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">LUZLURE</h3>
            <p className="leading-6 text-center text-white">
              We will provide you with the social media marketing solutions you need: Facebook Marketing; Google
              Marketing; Tiktok Marketing
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1600px] pt-0 flex-center md:flex-row flex-col gap-8">
        <ProductAds
          image="/image/services/service-4.jpg"
          content="We have supported over 20,000 businesses across various industries in significantly boosting their revenue over the past years."
        />
        <ProductAds
          image="/image/services/service-5.jpg"
          content="In 2023, we acquired an additional 4,000 new customers and assisted them in achieving remarkable."
        />
      </div>
    </>
  );
};

export default Services;
