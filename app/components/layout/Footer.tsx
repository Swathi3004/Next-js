import Link from "next/link";

const companyLinks = ["About us", "Blog", "Contact us", "Pricing", "Testimonials"];
const supportLinks = ["Help center", "Terms of service", "Legal", "Privacy policy", "Status"];
const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "Dribbble", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#22313d] text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-0">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <LogoIcon />
              <span className="text-[24px] font-semibold tracking-[-0.5px]">Nexcent</span>
            </div>
            <p className="max-w-[320px] text-[15px] leading-7 text-[#cbd6e1]">
              Nexcent is the best place for business owners to grow memberships, automate payments and stay connected with their customers.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-white transition hover:bg-white/10"
                  aria-label={item.name}
                >
                  {item.name.slice(0, 1)}
                </Link>
              ))}
            </div>
          </div>

          <nav>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8fb3c5]">Company</h2>
            <ul className="mt-6 space-y-3">
              {companyLinks.map((label) => (
                <li key={label}>
                  <Link href="#" className="text-[15px] text-[#cbd6e1] transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8fb3c5]">Support</h2>
            <ul className="mt-6 space-y-3">
              {supportLinks.map((label) => (
                <li key={label}>
                  <Link href="#" className="text-[15px] text-[#cbd6e1] transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="rounded-3xl bg-[#16242d] p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8fb3c5]">Stay up to date</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#cbd6e1]">
              Subscribe to our newsletter for the latest updates and product news.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent text-[15px] text-white placeholder:text-[#9fb7c5] outline-none"
              />
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#4caf4f] text-white transition hover:bg-[#3b9741]" aria-label="Subscribe">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LogoIcon() {
  return (
    <div className="flex items-center justify-center rounded-full bg-[#4caf4f] p-2 text-white shadow-[0_12px_30px_rgba(76,175,79,0.25)]">
      <svg viewBox="0 0 34 24" className="h-6 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h10.8L5.4 9.4 0 0Z" fill="#ffffff" />
        <path d="M11.7 0h10.8l-5.4 9.4L11.7 0Z" fill="#ffffff" />
        <path d="M5.85 10.2h10.8l-5.4 9.35-5.4-9.35Z" fill="#ffffff" opacity="0.65" />
        <path d="m11.7 19.95 5.4-9.35 5.4 9.35H11.7Z" fill="#ffffff" opacity="0.65" />
        <path d="M23.2 0H34l-5.4 9.4L23.2 0Z" fill="#16383d" />
        <path d="m23.2 19.95 5.4-9.35 5.4 9.35H23.2Z" fill="#16383d" />
        <path d="M5.4 10.2h11.7l-5.85 10.1L5.4 10.2Z" stroke="#ffffff" strokeWidth=".6" />
      </svg>
    </div>
  );
}
