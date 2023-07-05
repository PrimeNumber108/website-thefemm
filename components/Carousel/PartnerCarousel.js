import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

const partners = [
  {
    content:
      "“Kasomo is revolutionizing hair care with custom, made-to-order formulas…”",
    image: "/image/logo/1.png",
  },
  {
    content: "“Taking hair treatments to the next level...”",
    image: "/image/logo/2.png",
  },
  {
    content: "“Winner of Bespoke Styler award, GQ Grooming Awards 2019”",
    image: "/image/logo/3.png",
  },
  {
    content:
      "“Kasomo hair loss shampoo is certainly a product to test for yourself”",
    image: "/image/logo/4.png",
  },
];

const PartnerCarousel = () => {
  return (
    <div className="bg-black">
      <div className="relative partner-carousel container text-center">
        <div className="text-label mb-14 text-white">In the press</div>
        <div className="partner-prev absolute top-1/2 left-6 -translate-y-1/2 z-[2]">
          <Image
            src="/image/icon/right-arrow.png"
            alt="arrow"
            width={512}
            height={512}
            className="lg:w-16 lg:h-16 w-12 h-12 rotate-180 cursor-pointer invert"
          />
        </div>
        <div className="partner-next absolute top-1/2 right-6 -translate-y-1/2 z-[2]">
          <Image
            src="/image/icon/right-arrow.png"
            alt="arrow"
            width={512}
            height={512}
            className="lg:w-16 lg:h-16 w-12 h-12 cursor-pointer invert"
          />
        </div>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          navigation={{
            prevEl: ".partner-prev",
            nextEl: ".partner-next",
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="max-w-[680px] h-[300px]"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <h3 className="text-heading lg:text-6xl text-4xl text-white">
                {partner.content}
              </h3>
              <div className="flex-center mt-14">
                <Image
                  src={partner.image}
                  alt="logo"
                  width={150}
                  height={37}
                  className="w-36 h-9 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerCarousel;
