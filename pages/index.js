/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";

const users = [
  {
    name: "Isabella R.",
    comment:
      "Professionalism at its best! The marketing team demonstrated a deep understanding of market trends. Their tailored campaigns elevated our brand perception and generated a positive buzz among our audience.",
    image: "/image/users/user-1.jpg",
    rating: 5,
  },
  {
    name: "Noah W.",
    comment:
      "Effective marketing solutions! This company's team not only met but exceeded our expectations. Their strategic campaigns resulted in increased leads and a notable spike in brand recognition.",
    image: "/image/users/user-2.png",
    rating: 5,
  },
  {
    name: "Grace M.",
    comment:
      "Top-tier marketing services! The team's proficiency in both traditional and digital channels set them apart. Their collaborative approach and attention to detail have been instrumental in our marketing success.",
    image: "/image/users/user-3.jpg",
    rating: 5,
  },
  {
    name: "Mason D.",
    comment:
      "Outstanding service! The marketing team's creative solutions and comprehensive strategies brought a new energy to our brand. The positive impact on our market presence was noticeable and immediate.",
    image: "/image/users/user-4.jpg",
    rating: 4,
  },
  {
    name: "Zoe L.",
    comment:
      "Incredible marketing expertise! This company's team navigated the complexities of our industry effortlessly. Their fresh approach and timely execution significantly contributed to our brand's success.",
    image: "/image/users/user-5.jpg",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <img src="/image/banners/banner-1.jpg" alt="BELLA BLOM" className="brightness-[0.8] w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">BELLA BLOM</h3>
            <p className="leading-6 text-center text-white">
              With unwavering confidence, we assure the delivery of highly effective and tailored marketing strategies
              crafted specifically for your company&apos;s success.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-2.jpg"
            alt="BELLA BLOM"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.8]"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  Count on our unwavering confidence to provide uniquely customized marketing solutions aligned with
                  your business goals.
                </p>
                <Link href="/our-services" className="block text-white tracking-[1px] w-fit pb-2">
                  <button className="btn btn-primary w-fit">OUR SERVICES</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-3.jpg"
            alt="BELLA BLOM"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.8]"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  At the heart of our mission is a team of skilled professionals devoted to converting obstacles into
                  opportunities, guaranteeing your success in an ever-changing business world.
                </p>
                <Link href="/about" className="block text-white tracking-[1px] w-fit pb-2">
                  <button className="btn btn-primary w-fit">ABOUT US</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[21px] lg:py-16 lg:px-14 py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 border border-solid border-[#5d92ff] rounded-lg gap-2.5"
            >
              <img src={user.image} alt="" className="w-[130px] h-[130px] rounded-[50%] object-cover" />
              <p className="text-lg">{user.name}</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={classnames("w-5 h-5", index + 1 <= user.rating ? "text-yellow-300" : "text-gray-300")}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <p className="leading-6 text-center break-words">{user.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
