/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";

const users = [
  {
    name: "Sovan DY",
    comment:
      "A wonderful site for online shopping! Excellent customer service throughout the entire process. The team is knowledgeable and goes above and beyond at every turn. I’d recommend their FEG hair growth spray.",
    image: "/image/users/user-1.jpg",
    rating: 5,
  },
  {
    name: "Berlinda De la Cruz",
    comment:
      "Very good product, just used only 8 days so can not see the visible results but i feel comfortable and fresh when applied, no side effects. 4 stars because delivery is a little bit slow.",
    image: "/image/users/user-2.jpg",
    rating: 4,
  },
  {
    name: "Venus Amanda",
    comment:
      "I got a hair serum from FEG and I’m very satisfied. They are high-quality and worth the money. The store also offered free shipping at that price so that’s a plus!",
    image: "/image/users/user-3.png",
    rating: 5,
  },
  {
    name: "Jane Amatsu",
    comment: "Pricing is fair and transparent - definitely value for money.",
    image: "/image/users/user-4.png",
    rating: 5,
  },
  {
    name: "Jennifer Abraham",
    comment:
      "The product quality is consistently outstanding, exceeding my expectations every time. Also I was completely impressed with their professionalism and customer service. 5 stars absolutely.",
    image: "/image/users/user-5.png",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div>
      <div className="relative">
        <video className="brightness-90" autoPlay={true} muted loop>
          <source src="/video/banner.mp4" type="video/mp4"></source>
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white text-heading">CASAMI</h3>
            <p className="leading-6 text-center text-white">
              We are confident in our ability to provide the most effective Marketing strategies for your company.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0">
          <Image
            src="/image/banner-1.jpg"
            alt="casami-banner"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-50"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  We will provide you with Online Marketing solutions that meet the following criteria: minimizing
                  costs, growing revenue, and enhancing profits.
                </p>
                <Link href="/our-services" className="block text-white tracking-[1px] w-fit pb-2">
                  <button className="btn btn-primary w-fit">OUR SERVICES</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0">
          <Image
            src="/image/banner-6.jpeg"
            alt="casami-banner"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-50"
          />
        </div>
        <div className="absolute inset-0 flex">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center w-full h-full px-8 pt-16 lg:px-6 sm:p-16">
              <div className="w-full sm:w-[600px] flex justify-center items-center lg:text-start text-center flex-col gap-9">
                <p className="px-8 text-2xl text-center text-white sm:px-0">
                  Our company was founded by a group of Marketing specialists with over 20 years of experience and a
                  team of highly qualified individuals.
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
                    class={classnames("w-5 h-5", index + 1 <= user.rating ? "text-yellow-300" : "text-gray-300")}
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
