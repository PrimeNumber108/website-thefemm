import HeroSection from "@/components/HeroSection";
import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";

const Products = () => {
  return (
    <>
      <HeroSection
        image={"/image/banner/7.jpg"}
        placement="right"
        content={
          <div className="w-full h-full flex justify-center lg:items-center items-start lg:px-6 sm:p-16 pt-16 px-6">
            <div className="w-full sm:w-[500px] flex-center flex-col gap-9">
              <h3 className="text-heading text-center">
                Our line of custom hair care and supplements
              </h3>
            </div>
          </div>
        }
      />
      <ProductLayout />
      <div className="container max-w-[1600px] pt-0 flex-center md:flex-row flex-col gap-8">
        <ProductAds
          image="/image/product/8.jpg"
          content="Discover your hair care routine for fuller, stronger, softer hair"
        />
        <ProductAds
          image="/image/product/9.jpg"
          content="Life isn't perfect but your hair can be"
        />
      </div>
      <div className="bg-primary">
        <div className="container text-center max-w-[650px]">
          <h3 className="text-heading text-4xl text-white">
            About our hair care products
          </h3>
          <p className="mt-5 text-bbb tracking-[1px]">
            All Kasomo hair care products are individually bottled based on
            results from your online consultation. We get a complete view of all
            that could impact your scalp and hair to create a formula that’s
            just for you.
          </p>
        </div>
      </div>
    </>
  );
};

export default Products;
