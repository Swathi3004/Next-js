import Link from "next/link";
import Image from "next/image";
import Footer from "./components/layout/Footer";

const navigation = ["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"];

function NexcentMark({ className = "h-6 w-[34px] shrink-0" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 34 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h10.8L5.4 9.4 0 0Z" fill="#4CAF4F" />
      <path d="M11.7 0h10.8l-5.4 9.4L11.7 0Z" fill="#4CAF4F" />
      <path d="M5.85 10.2h10.8l-5.4 9.35-5.4-9.35Z" fill="#4CAF4F" />
      <path d="m11.7 19.95 5.4-9.35 5.4 9.35H11.7Z" fill="#4CAF4F" />
      <path d="M23.2 0H34l-5.4 9.4L23.2 0Z" fill="#263238" />
      <path d="m23.2 19.95 5.4-9.35 5.4 9.35H23.2Z" fill="#263238" />
      <path d="M5.4 10.2h11.7l-5.85 10.1L5.4 10.2Z" stroke="#263238" strokeWidth=".6" />
    </svg>
  );
}

function HeroIllustration() {
  return (
    <svg aria-label="Developer working beside a computer" className="h-auto w-full max-w-[520px]" viewBox="0 0 540 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="28" y="68" width="390" height="248" rx="24" fill="#f3f8f6" stroke="#d7e7df" strokeWidth="2" />
      <rect x="28" y="68" width="390" height="40" rx="18" fill="#4caf4f" />
      <circle cx="52" cy="88" r="4" fill="#d1f7d3" />
      <circle cx="68" cy="88" r="4" fill="#d1f7d3" />
      <circle cx="84" cy="88" r="4" fill="#d1f7d3" />
      <path d="M48 132h90" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
      <path d="M48 160h132" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <rect x="48" y="190" width="108" height="120" rx="18" fill="#ffffff" opacity="0.9" />
      <rect x="48" y="190" width="108" height="28" rx="10" fill="#4caf4f" />
      <path d="M72 226h60" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
      <path d="M72 252h52" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
      <path d="M72 278h48" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" />
      <rect x="202" y="132" width="150" height="172" rx="20" fill="#1f2937" />
      <rect x="212" y="142" width="130" height="144" rx="14" fill="#0f1720" />
      <path d="M232 162h92" stroke="#7dd3fc" strokeWidth="4" strokeLinecap="round" />
      <path d="M232 188h68" stroke="#7dd3fc" strokeWidth="4" strokeLinecap="round" />
      <path d="M232 214h56" stroke="#7dd3fc" strokeWidth="4" strokeLinecap="round" />
      <path d="M232 240h86" stroke="#7dd3fc" strokeWidth="4" strokeLinecap="round" />
      <path d="M232 266h72" stroke="#7dd3fc" strokeWidth="4" strokeLinecap="round" />
      <path d="M232 292h86" stroke="#7dd3fc" strokeWidth="4" strokeLinecap="round" />
      <path d="M232 318h48" stroke="#7dd3fc" strokeWidth="4" strokeLinecap="round" />
      <path d="M420 102h68v32h-68z" fill="#4caf4f" rx="12" />
      <path d="M428 112h52v12h-52z" fill="#ffffff" />
      <path d="M428 132h40v8h-40z" fill="#ffffff" opacity="0.75" />
      <rect x="60" y="330" width="148" height="24" rx="12" fill="#d9dadb" />
      <path d="M94 362h82" stroke="#cfd8dc" strokeWidth="10" strokeLinecap="round" />
      <path d="M416 68h48" stroke="#1f2937" strokeWidth="10" strokeLinecap="round" />
      <path d="M456 68h24" stroke="#1f2937" strokeWidth="10" strokeLinecap="round" />
      <path d="M380 116c-5 0-8-2-8-8V74c0-6 3-8 8-8h120c5 0 8 2 8 8v34c0 6-3 8-8 8H380Z" fill="#4caf4f" opacity="0.95" />
      <path d="M402 102c16-14 34-22 58-24 28-2 54 7 68 20" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <path d="M336 318c0 22-10 34-28 34s-28-12-28-34 10-34 28-34 28 12 28 34Z" fill="#d9dadb" />
      <path d="M295 234c0-24 17-44 36-44h10v30h30v86h-60c-18 0-16-36-16-36Z" fill="#4caf4f" />
      <path d="M329 160c6 0 14 5 16 12l16 77-6 4-20-69c-2-7-6-24-6-24Z" fill="#1f2937" />
      <path d="M330 160a11 11 0 1 1 0 22 11 11 0 0 1 0-22Z" fill="#f8fafc" />
      <path d="M334 166h8v10h-8z" fill="#1f2937" />
      <circle cx="344" cy="168" r="2" fill="#1f2937" />
      <path d="M338 176c2 0 9 2 12 5v1l-18 4c0-3 1-9 6-10Z" fill="#1f2937" />
      <path d="M382 248l18-18 34 16-18 18-34-16Z" fill="#4caf4f" opacity="0.95" />
      <path d="M366 240l22 10" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="376" cy="242" r="3" fill="#ffffff" />
      <path d="M336 328h56" stroke="#1f2937" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

function ClientLogo({ variant }: { variant: number }) {
  const logos = [
    "Logo 2.png",
    "Vector (1).png",
    "Logo (2).png",
    "Logo (3).png",
    "Logo (4).png",
    "Logo (5).png",
    "Logo (2).png",
  ];

  return (
    <Image
      src={`/images/${encodeURIComponent(logos[variant])}`}
      alt={`Client logo ${variant + 1}`}
      width={80}
      height={48}
      className="h-9 w-10 object-contain"
    />
  );
}

function CommunityIcon({ type }: { type: "members" | "association" | "clubs" }) {
  const iconMap = {
    members: "Icon.png",
    association: "Icon (1).png",
    clubs: "Icon (2).png",
  };
  return <div className="flex h-12 w-14 items-center justify-center rounded-br-xl rounded-tl-xl bg-[#e8f5e9]"><Image src={`/images/${encodeURIComponent(iconMap[type])}`} alt={`${type} icon`} width={44} height={48} className="h-9 w-11 object-contain" /></div>;
}



function StatIcon({
  type,
}: {
  type: "members" | "clubs" | "events" | "payments";
}) {
  const icons = {
    members: "Icon (3).png",
    clubs: "Icon (4).png",
    events: "Icon (5).png",
    payments: "Icon (6).png",
  };

  return (
    <Image
      src={`/images/${encodeURIComponent(icons[type])}`}
      alt={`${type} icon`}
      width={48}
      height={48}
      className="h-10 w-12 shrink-0 object-contain"
    />
  );
}

function FooterDesignIllustration() {
  return <svg aria-label="Person designing a mobile sign-up screen" className="h-auto w-full max-w-[350px]" viewBox="0 0 350 380" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M226 23c0-17 12-28 27-28s27 11 27 28v13h-54V23Z" fill="#4CAF4F" /><path d="M233 25c0-12 8-20 20-20s20 8 20 20v8h-40v-8Z" fill="#E8F5E9" />
    <g transform="rotate(-17 282 55)"><rect x="253" y="32" width="63" height="69" rx="7" fill="#4CAF4F" /><rect x="257" y="36" width="55" height="61" rx="4" stroke="#347E3A" /><circle cx="284" cy="64" r="11" fill="white" /><path d="m283 53 9 11-9 11" stroke="#4CAF4F" strokeWidth="4" /></g>
    <path d="M113 78c0-13 10-23 23-23h117c13 0 23 10 23 23v249c0 13-10 23-23 23H136c-13 0-23-10-23-23V78Z" fill="#455A64" /><path d="M121 87c0-11 8-19 19-19h109c11 0 19 8 19 19v231c0 11-8 19-19 19H140c-11 0-19-8-19-19V87Z" fill="white" />
    <path d="M151 65h37c6 0 9 5 9 10v3h-55v-3c0-5 3-10 9-10Z" fill="#455A64" /><path d="M159 111h71v5h-71z" fill="#4CAF4F" /><circle cx="194" cy="97" r="5" fill="#4CAF4F" /><path d="M188 105c1-6 11-6 12 0h-12Z" fill="#4CAF4F" />
    <path d="M145 130h98v19h-98z" fill="#F8FAF8" /><path d="M145 160h98v19h-98z" fill="#F8FAF8" /><path d="M145 190h98v19h-98z" fill="#F8FAF8" /><path d="M154 138h47v4h-47zm0 30h57v4h-57zm0 30h45v4h-45z" fill="#4CAF4F" /><path d="M148 221h96v19h-96z" fill="#F8FAF8" /><circle cx="158" cy="231" r="3" fill="#4CAF4F" /><circle cx="167" cy="231" r="3" fill="#4CAF4F" /><circle cx="176" cy="231" r="3" fill="#4CAF4F" /><circle cx="185" cy="231" r="3" fill="#4CAF4F" /><circle cx="194" cy="231" r="3" fill="#4CAF4F" /><path d="M155 270h82v24h-82z" fill="#4CAF4F" /><text x="177" y="286" fill="white" fontSize="8">SIGN UP</text>
    <path d="M276 216c19-19 30-33 43-22 11 10-6 27-25 42-14 12-27 20-43 22l7-42 18 0Z" fill="#4CAF4F" /><path d="M273 255c21-9 36-8 53 1-12 17-37 28-63 25l10-26Z" fill="#4CAF4F" />
    <path d="M53 140c3-16 23-22 33-9l-3 18-20 3-10-12Z" fill="#263238" /><circle cx="73" cy="154" r="14" fill="#F9B08E" /><path d="M60 151c0-13 18-20 27-10l-4 9-11-1-4 7-8-5Z" fill="#263238" />
    <path d="m58 169 29 3 15 58-35 8-17-54 8-15Z" fill="#4CAF4F" /><path d="m84 177 27-23 8 8-24 31-11-16Z" fill="#F9B08E" /><path d="m110 153 8-13 5 4-7 17-6-8Z" fill="#F9B08E" />
    <path d="m65 236 20-3 9 85-20 1-9-83Z" fill="#263238" /><path d="m85 235 18-7 19 83-18 4-19-80Z" fill="#1E343A" /><path d="m74 315 21 1 2 11-27 1 4-13Zm30-2 19-4 8 8-23 7-4-11Z" fill="#4CAF4F" />
    <path d="M21 151c-20 0-27 15-21 32 6 17 24 22 38 14l9 13c-25 18-59 4-61-29-1-27 20-45 43-32v17c-3-9-4-15-8-15Z" fill="white" stroke="#4CAF4F" /><path d="m16 168 13 4v15H13l3-19Z" fill="#4CAF4F" />
    <path d="M18 329h221" stroke="#AAB1B3" /><path d="M18 329h155" stroke="#D8DDDE" strokeWidth="2" />
  </svg>;
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f5f7fa]">
      <header>
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-6 lg:px-0"
      >
        <Link href="/" aria-label="Nexcent home">
  <Image
    src="/images/Logo%20(1).png"
    alt="Nexcent"
    width={150}
    height={50}
    priority
    className="h-auto w-[150px] object-contain"
  />
</Link>

        <div className="hidden items-center gap-[50px] text-[15px] font-normal text-[#18191f] md:flex">
          {navigation.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-[#4caf4f]">
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 text-[14px] font-medium">
          <Link href="#login" className="px-2 py-2 text-[#4caf4f] transition-opacity hover:opacity-75">
            Login
          </Link>
          <Link
            href="#signup"
            className="rounded-md bg-[#4caf4f] px-5 py-2.5 text-white shadow-sm transition-colors hover:bg-[#429d45]"
          >
            Sign up
          </Link>
        </div>
      </nav>
      </header>
      <main className="mx-auto grid min-h-[565px] max-w-[1200px] items-center gap-8 px-6 pb-12 pt-8 md:gap-10 lg:grid-cols-[1fr_440px] lg:px-0 lg:pt-0">
        <section className="pt-4 lg:pt-0">
          <h1 className="max-w-[680px] text-[32px] font-semibold leading-[1.18] tracking-[-1.2px] text-[#4d4d4d] sm:text-[48px] lg:text-[64px]">
            Lessons and insights <span className="block text-[#4caf4f]">from 8 years</span>
          </h1>
          <p className="mt-5 text-[15px] text-[#717171]">Where to grow your business as a photographer: site or social media?</p>
          <Link href="#register" className="mt-8 inline-flex rounded bg-[#4caf4f] px-8 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#429d45]">Register</Link>
        </section>
        <div className="justify-self-center lg:justify-self-end">
           <Image
    src="/images/Illustration.png"
    alt="Developer working with technology"
    width={500}
    height={500}
    priority
    className="h-auto w-full max-w-[500px] object-contain"
  />
        </div>
        <div className="col-span-full flex justify-center gap-2 self-end"><span className="h-2.5 w-2.5 rounded-full bg-[#4caf4f]" /><span className="h-2.5 w-2.5 rounded-full bg-[#4caf4f]/40" /><span className="h-2.5 w-2.5 rounded-full bg-[#4caf4f]/30" /></div>
      </main>
      <section className="bg-white pb-20 pt-11">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center">
            <h2 className="text-[24px] font-semibold leading-tight tracking-[-.6px] text-[#4d4d4d] sm:text-[28px] md:text-[32px]">Our Clients</h2>
            <p className="mt-2 text-[16px] text-[#717171]">We have been working with some Fortune 500+ clients</p>
          </div>
          <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
            {[0, 1, 2, 3, 4, 5, 6].map((logo) => <ClientLogo key={logo} variant={logo} />)}

          </div>
          <div className="mt-[72px] text-center">
            <h2 className="mx-auto max-w-[650px] text-[20px] font-semibold leading-[1.35] tracking-[-.6px] text-[#4d4d4d] sm:text-[24px] md:text-[28px] lg:text-[32px]">Manage your entire community<br />in a single system</h2>
            <p className="mt-2 text-[16px] text-[#717171]">Who is Nexcent suitable for?</p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-[126px]">
            <CommunityCard icon="members" title={<>Membership<br />Organisations</>} />
            <CommunityCard icon="association" title={<>National<br />Associations</>} />
            <CommunityCard icon="clubs" title={<>Clubs And<br />Groups</>} />
          </div>
          <div className="mt-12 grid items-center gap-8 pb-10 md:mt-24 md:gap-14 lg:grid-cols-[400px_1fr] lg:gap-[92px]">
            <div className="justify-self-center">
  <Image
    src="/images/Frame%2035.png"
    alt="People using a membership system"
    width={360}
    height={330}
    className="h-auto w-full max-w-[360px] object-contain"
  />
</div>
            <div className="max-w-[670px]">
              <h2 className="text-[20px] font-semibold leading-[1.25] tracking-[-.8px] text-[#4d4d4d] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]">The unseen of spending three<br className="hidden lg:block" /> years at Pixelgrade</h2>
              <p className="mt-4 text-[14px] leading-5 text-[#717171]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
              <Link href="#learn-more" className="mt-8 inline-flex rounded bg-[#4caf4f] px-8 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#429d45]">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f7fa]">
        <div className="mx-auto grid min-h-[288px] max-w-[1075px] items-center gap-8 px-6 py-12 md:gap-12 lg:grid-cols-[1fr_1.05fr] lg:px-0">
          <div>
            <h2 className="text-[22px] font-semibold leading-[1.25] tracking-[-.8px] text-[#4d4d4d] sm:text-[26px] md:text-[30px] lg:text-[36px]">Helping a local<br /><span className="text-[#4caf4f]">business reinvent itself</span></h2>
            <p className="mt-3 text-[16px] text-[#18191f]">We reached here with our hard work and dedication</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-x-12 md:gap-y-9">
            <StatItem icon="members" value="2,245,341" label="Members" />
            <StatItem icon="clubs" value="46,328" label="Clubs" />
            <StatItem icon="events" value="828,867" label="Event Bookings" />
            <StatItem icon="payments" value="1,926,436" label="Payments" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto grid min-h-[530px] max-w-[980px] items-center gap-8 px-6 py-14 md:gap-16 lg:grid-cols-[370px_1fr] lg:px-0">
          <div className="justify-self-center">
  <Image
    src="/images/pana.png"
    alt="Person designing a mobile sign-up screen"
    width={350}
    height={380}
    className="h-auto w-full max-w-[350px] object-contain"
  />
</div>
          <div className="max-w-[600px]">
            <h2 className="text-[22px] font-semibold leading-[1.24] tracking-[-.8px] text-[#4d4d4d] sm:text-[26px] md:text-[30px] lg:text-[36px]">How to design your site footer like we did</h2>
            <p className="mt-4 text-[14px] leading-5 text-[#717171]">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <Link href="#learn-more" className="mt-8 inline-flex rounded bg-[#4caf4f] px-8 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#429d45]">Learn More</Link>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f7fa]">
        <div className="mx-auto grid min-h-[392px] max-w-[1085px] items-center gap-8 px-6 py-8 md:gap-16 lg:grid-cols-[326px_1fr] lg:px-0">
          <Image
  src="/images/T%20icon.jpg"
  alt="Tesla customer icon"
  width={326}
  height={326}
  className="h-[326px] w-[326px] rounded-lg object-cover"
/>
          <div className="max-w-[750px]">
            <p className="text-[16px] leading-[24px] text-[#717171]">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique purus malesuada. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <h3 className="mt-5 text-[20px] font-semibold text-[#4caf4f]">Tim Smith</h3>
            <p className="mt-2 text-[16px] text-[#89939e]">British Dragon Boat Racing Association</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              {[0, 1, 2, 3, 4, 5].map((logo) => <ClientLogo key={logo} variant={logo} />)}
              <Link href="#customers" className="inline-flex items-center gap-3 text-[20px] font-semibold text-[#4caf4f]">Meet all customers <span aria-hidden="true" className="text-2xl font-normal">→</span></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12">
  <div className="mx-auto max-w-[1080px] px-6 text-center lg:px-0">

    <h2 className="text-[24px] font-semibold leading-tight tracking-[-0.8px] text-[#4d4d4d] sm:text-[28px] md:text-[32px] lg:text-[36px]">
      Caring is the new marketing
    </h2>

    <p className="mx-auto mt-3 max-w-[650px] text-[14px] leading-[20px] text-[#717171]">
      The Nexcent blog is the best place to read about the latest membership insights,
      trends and more. See who&apos;s joining the community, read about how our community
      are increasing their membership income and lot&apos;s more.
    </p>

    <div className="mt-7 grid gap-8 md:grid-cols-3 md:gap-5">
      
      <BlogCard
        image="/images/image%201.jpg"
        title={
          <>
            Creating Streamlined
            <br />
            Safeguarding Processes with
            <br />
            OneRen
          </>
        }
      />

      <BlogCard
        image="/images/image%202.jpg"
        title={
          <>
            What are your safeguarding
            <br />
            responsibilities and how can
            <br />
            you manage them?
          </>
        }
      />

      <BlogCard
        image="/images/image%203.jpg"
        title={
          <>
            Revamping the Membership
            <br />
            Model with Triathlon
            <br />
            Australia
          </>
        }
      />

    </div>
  </div>
</section>
      <section className="bg-[#f5f7fa] py-10 sm:py-12">
        <div className="mx-auto flex min-h-[260px] max-w-[760px] flex-col items-center justify-center px-6 text-center">
          <h2 className="text-[28px] font-semibold leading-[1.18] tracking-[-1.2px] text-[#263238] sm:text-[40px] md:text-[48px] lg:text-[64px]">Pellentesque suscipit<br />fringilla libero eu.</h2>
          <Link href="#demo" className="mt-8 inline-flex items-center gap-3 rounded bg-[#4caf4f] px-8 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#429d45]">Get a Demo <span aria-hidden="true" className="text-lg font-normal">→</span></Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function CommunityCard({ icon, title }: { icon: "members" | "association" | "clubs"; title: React.ReactNode }) {
  return <article className="min-h-[260px] rounded-lg bg-white px-5 py-6 text-center shadow-[0_1px_3px_rgba(171,190,209,0.4)]">
    <div className="flex justify-center"><CommunityIcon type={icon} /></div>
    <h3 className="mt-4 text-[28px] font-bold leading-[1.25] tracking-[-.5px] text-[#4d4d4d]">{title}</h3>
    <p className="mx-auto mt-3 max-w-[260px] text-[14px] leading-5 text-[#717171]">Our membership management software provides full automation of membership renewals and payments</p>
  </article>;
}

function StatItem({ icon, value, label }: { icon: "members" | "clubs" | "events" | "payments"; value: string; label: string }) {
  return <div className="flex items-center gap-3"><StatIcon type={icon} /><div><p className="text-[28px] font-bold leading-8 tracking-[-.4px] text-[#4d4d4d]">{value}</p><p className="mt-1 text-[16px] leading-4 text-[#717171]">{label}</p></div></div>;
}

function BlogCard({
  image,
  title,
}: {
  image: string;
  title: React.ReactNode;
}) {
  return (
    <article className="flex flex-col items-center">

      {/* Blog Image */}
      <Image
        src={image}
        alt="Nexcent blog article"
        width={350}
        height={220}
        className="h-[220px] w-full rounded-lg object-cover"
      />

      {/* Floating Content Card */}
      <div
        className="
          relative
          -mt-[62px]
          flex
          min-h-[125px]
          w-[calc(100%-24px)]
          flex-col
          items-center
          rounded-lg
          bg-[#f5f7fa]
          px-4
          py-4
          shadow-[0_8px_16px_rgba(171,190,209,0.35)]
        "
      >
        <h3 className="text-[15px] font-semibold leading-[20px] text-[#717171]">
          {title}
        </h3>

        <Link
          href="#read-more"
          className="
            mt-auto
            pt-3
            text-[15px]
            font-semibold
            text-[#4caf4f]
          "
        >
          Readmore
          <span className="ml-2 font-normal">→</span>
        </Link>
      </div>

    </article>
  );
}
