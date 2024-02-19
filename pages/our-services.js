import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-4.jpg"}
          alt="luxorir"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.8]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">luxorir</h3>
            <p className="leading-6 text-center text-white">
              Count on our constant commitment to providing precisely tailored marketing solutions that are matched with
              your company&apos;s objectives
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1600px] pt-0 flex-center md:flex-row flex-col gap-8">
        <ProductAds
          image="/image/services/service-6.jpg"
          content="Our team of qualified specialists is committed to conquering problems, ensuring your success in the fast-paced company."
        />
        <ProductAds
          image="/image/services/service-7.jpg"
          content="In 2023, our services successfully reached more than 5,000 potential customers."
        />
      </div>
    </>
  );
};

export default Services;
