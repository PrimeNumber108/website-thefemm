import HeroCarousel from "@/components/Carousel/HeroCarousel";
import PartnerCarousel from "@/components/Carousel/PartnerCarousel";
import Feedback from "@/module/home/Feedback";
import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/module/home/ImageGallery";
import ImageSection from "@/components/ImageSection";
import ProductSection from "@/module/home/ProductSection";
import Works from "@/module/home/Works";
import Image from "next/image";
import Link from "next/link";
import CustomMarquee from "@/module/home/Marquee";
import TextLoader from "@/components/TextLoader";

export default function Home() {
  return (
    <div>
      <HeroSection
        image={
          <Image
            src="/image/banner/home-1.jpg"
            className="w-full h-full object-cover object-top -z-10"
            alt="kasomo-banner"
            fill
          />
        }
        placement="right"
        content={
          <div className="w-full h-full flex justify-center lg:items-center items-start lg:-ml-20 -ml-0 lg:px-6 sm:p-16 pt-16 px-6">
            <div className="w-full sm:w-[500px] flex-center flex-col gap-9">
              <h3 className="text-heading text-center">
                Transform your hair with intensive care
              </h3>
              <p className="text-primary text-center leading-6">
                Discover your routine, from hair products to hair accessories.
              </p>
              <Link href="/products">
                <button className="btn btn-primary">
                  SHOP ALL BEST SELLERS
                </button>
              </Link>
            </div>
          </div>
        }
      />
      <CustomMarquee />
      <HeroSection
        image={
          <Image
            src={"/image/banner/home-2.jpg"}
            className="w-full h-full object-cover object-right-top -z-10"
            alt="kasomo-banner"
            fill
          />
        }
        placement="left"
        content={
          <div className="w-full h-full flex justify-center lg:items-center items-start lg:px-6 sm:p-16 pt-16 px-6">
            <div className="w-full sm:w-[310px] flex justify-center flex-col gap-9">
              <h3 className="text-heading">Tested, Clean & Multi-use</h3>
              <p className="text-primary leading-6">
                Hair loss and thinning hair routines are designed for sensitive
                scalps as well as frizzy, damaged, and balding hair. No alcohol,
                silicone, or parabens.
              </p>
              <button className="btn btn-primary w-fit">
                SHOP ALL BEST SELLERS
              </button>
            </div>
          </div>
        }
      />
      <HeroSection
        image={
          <Image
            src={"/image/banner/home-3.jpg"}
            className="w-full h-full object-cover object-left-top -z-10"
            alt="kasomo-banner"
            fill
          />
        }
        placement="right"
        content={
          <div className="w-full h-full flex justify-center lg:items-center items-start lg:px-6 sm:p-16 pt-16 px-6 text-center lg:text-left">
            <div className="w-full sm:w-[500px] flex justify-center lg:items-start items-center flex-col gap-9">
              <span className="text-label text-white">
                Welcome to KASOMO Hair Care Zone
              </span>
              <h3 className="text-heading text-white">
                We believe that great hair is for everyone
              </h3>
              <p className="text-white leading-6">
                We know one size fits none. So we re-thought the entire model of
                mass-beauty to create haircare that’s one-in-a-million. It’s a
                radically custom approach: we create products that fit you
                alone, combining lab innovation, natural ingredients, and proven
                performance to create truly personal care.
                <br />
                <br />
                For you. For the planet. For all.
              </p>
              <TextLoader
                theme="light"
                content={
                  <Link
                    href="about"
                    className="block text-white tracking-[1px] w-fit pb-2"
                  >
                    ABOUT US
                  </Link>
                }
              />
            </div>
          </div>
        }
      />
      <ProductSection />
      <Works />
      <ImageSection
        placement="right"
        content={
          <>
            <h3 className="text-heading mb-5">
              Start with our innovative consultation
            </h3>
            <p className="text-primary leading-6">
              Over 80 factors are synthesized to create your custom formula. We
              start with micro details like hair thickness, condition, and
              texture, then move to the macro: the weather in your ZIP code,
              your workout routine, stress level, diet, and more. If you’re
              vegan or gluten-free, your KASOMO can be, too.
            </p>
            <br />
            <br />
            <p className="text-primary leading-6">
              By learning about your hair in its true context, we can give you
              products that fit—and work—better than anything before.
            </p>
            <div className="mt-10 md:mt-14">
              <button className="btn btn-primary-outline w-fit">
                SHOP ALL BEST SELLERS
              </button>
            </div>
          </>
        }
        image={<HeroCarousel />}
      />
      <ImageSection
        placement="left"
        content={
          <div className="lg:space-y-14 space-y-10">
            <h3 className="mb-5 text-3xl text-heading">
              What goes into your KASOMO is just as good as what you get out of
              it.
            </h3>
            <div>
              <span className="text-label">CERTIFIED CLEAN INGREDIENTS</span>
              <p className="mt-2 text-primary leading-6">
                Free of sulfates, parabens, phlathates check our green and safe
                ingredients here.
              </p>
            </div>
            <div>
              <span className="text-label">SUSTAINABLY SOURCED</span>
              <p className="mt-2 text-primary leading-6">
                We source the best ingredients gathered in the most ethical way.
                When we find better ways forward, we take them.
              </p>
            </div>
            <div>
              <span className="text-label">CONSCIOUS IMPACT</span>
              <p className="mt-2 text-primary leading-6">
                As a B Corp-certified company, we keep our impact on your hair,
                not the planet. We are the first and only carbon-neutral custom
                beauty brand.
              </p>
            </div>
          </div>
        }
        image={
          <Image
            src="/image/carousel/6.jpg"
            alt="KASOMO"
            width={1440}
            height={1440}
            className="block w-full h-full object-cover object-center"
          />
        }
      />
      <Feedback />
      <PartnerCarousel />
      <ImageGallery />
      <div className="relative w-full h-fit">
        <Image
          src="/image/banner/6.jpg"
          alt="Kasomo banner"
          width={1900}
          height={355}
          className="w-full h-[355px]"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 flex-center">
          <h3 className="text-heading lg:text-6xl text-2xl">
            Luxury comes in one size. Yours.
          </h3>
        </div>
      </div>
    </div>
  );
}
