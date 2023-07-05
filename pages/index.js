import Image from "next/image";
import Link from "next/link";
import CustomMarquee from "@/module/home/Marquee";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-auto">
        <video className="brightness-90" autoPlay={true} muted loop>
          <source src="/video/banner.mp4" type="video/mp4"></source>
        </video>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-heading text-white">CASAMI</h3>
            <p className="text-white text-center leading-6">
              We are confident in our ability to provide the most effective
              Marketing strategies for your company.
            </p>
          </div>
        </div>
      </div>
      <CustomMarquee />
      <div className="relative w-full min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0">
          <Image
            src={"/image/banner-1.jpg"}
            alt="casami-banner"
            fill
            className="w-full h-full object-cover object-center -z-10 brightness-50"
          />
        </div>
        <div className={`absolute inset-0 flex`}>
          <div className="flex-1">
            <div className="w-full h-full flex justify-center items-center lg:px-6 sm:p-16 pt-16 px-8">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="text-2xl text-white text-center sm:px-0 px-8">
                  We will provide you with Online Marketing solutions that meet
                  the following criteria: minimizing costs, growing revenue, and
                  enhancing profits.
                </p>
                <Link
                  href="/our-services"
                  className="block text-white tracking-[1px] w-fit pb-2"
                >
                  <button className="btn btn-primary w-fit">
                    OUR SERVICES
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0">
          <Image
            src={"/image/banner-2.avif"}
            alt="casami-banner"
            fill
            className="w-full h-full object-cover object-center -z-10 brightness-50"
          />
        </div>
        <div className={`absolute inset-0 flex`}>
          <div className="flex-1">
            <div className="w-full h-full flex justify-center items-center lg:px-6 sm:p-16 pt-16 px-8">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="text-2xl text-white text-center sm:px-0 px-8">
                  Our company was founded by a group of Marketing specialists
                  with over 20 years of experience and a team of highly
                  qualified individuals.
                </p>
                <Link
                  href="/about"
                  className="block text-white tracking-[1px] w-fit pb-2"
                >
                  <button className="btn btn-primary w-fit">ABOUT US</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
