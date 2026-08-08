import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  "About us",
  "Blog",
  "Contact us",
  "Pricing",
  "Testimonials",
];

const supportLinks = [
  "Help center",
  "Terms of service",
  "Legal",
  "Privacy policy",
  "Status",
];

const socialLinks = [
  {
    name: "Instagram",
    image: "instragram.png",
  },
  {
    name: "Website",
    image: "website.png",
  },
  {
    name: "Twitter",
    image: "twitter.png",
  },
  {
    name: "YouTube",
    image: "youtube.png",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#263238] text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-6 sm:py-8 lg:px-0">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-10">

          {/* Logo + Copyright + Social Icons */}
          <div>
            <Link
              href="/"
              aria-label="Nexcent home"
              className="inline-flex items-center gap-2"
            >
              <Image
                src="/images/Logo%20(1).png"
                alt="Nexcent"
                width={24}
                height={24}
                className="h-auto w-6 object-contain"
              />
              <span className="text-[16px] font-semibold text-white sm:text-[18px] md:text-[20px]">Nexcent</span>
            </Link>

            <div className="mt-5 text-[16px] leading-[24px] text-[#f5f7fa]">
              <p>Copyright © 2020 Nexcent ltd.</p>
              <p>All rights reserved</p>
            </div>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href="#"
                  aria-label={item.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4caf4f] transition-colors hover:bg-[#429d45]"
                >
                  <Image
                    src={`/images/${encodeURIComponent(item.image)}`}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <nav>
            <h2 className="text-[14px] font-semibold text-white sm:text-[15px] md:text-[16px]">
              Company
            </h2>

            <ul className="mt-5 space-y-[9px]">
              {companyLinks.map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="text-[12px] text-[#f5f7fa] transition-colors hover:text-[#4caf4f] sm:text-[13px] md:text-[14px]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav>
            <h2 className="text-[14px] font-semibold text-white sm:text-[15px] md:text-[16px]">
              Support
            </h2>

            <ul className="mt-5 space-y-[9px]">
              {supportLinks.map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="text-[12px] text-[#f5f7fa] transition-colors hover:text-[#4caf4f] sm:text-[13px] md:text-[14px]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Stay up to date */}
          <div>
            <h2 className="text-[14px] font-semibold text-white sm:text-[15px] md:text-[16px]">
              Stay up to date
            </h2>

            <div className="relative mt-5 w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="
                  h-[36px]
                  w-full
                  rounded-md
                  border-0
                  bg-[#515b60]
                  px-3
                  pr-10
                  text-[12px]
                  text-white
                  outline-none
                  placeholder:text-[#d5dadd]
                  focus:ring-1
                  focus:ring-[#4caf4f]
                  sm:text-[13px]
                  md:text-[14px]
                "
              />

              <button
                type="button"
                aria-label="Subscribe"
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <Image
                  src="/images/send.png"
                  alt="Send"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}