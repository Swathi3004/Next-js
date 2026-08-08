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
  const paths = {
    members: <><circle cx="15" cy="11" r="4" /><circle cx="25" cy="9" r="4" /><circle cx="34" cy="12" r="4" /><path d="M7 27c0-6 4-10 8-10s8 4 8 10M19 27c0-7 4-11 9-11s9 4 9 11M29 27c0-5 3-9 7-9s7 4 7 9" /></>,
    association: <><path d="M17 29h22M19 29V8l12-6v27M25 11h2m-2 5h2m-2 5h2m5-10h2m-2 5h2m-2 5h2M9 29V17h10v12M12 21h4m-4 4h4" /></>,
    clubs: <><path d="M19 5v11l-5 3V9l5-4Zm13 0v11l5 3V9l-5-4ZM9 28c1-6 4-9 8-9s7 3 8 9M25 28c1-6 4-9 8-9s7 3 8 9M11 23l-4-2v-7l4 2v7Zm28 0 4-2v-7l-4 2v7Z" /></>,
  };
  return <div className="flex h-12 w-14 items-center justify-center rounded-br-xl rounded-tl-xl bg-[#e8f5e9]"><svg viewBox="0 0 50 34" className="h-9 w-11 stroke-[#1b5e20]" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg></div>;
}

function FeatureIllustration() {
  return <svg aria-label="People using a membership terminal" className="h-auto w-full max-w-[360px]" viewBox="0 0 360 330" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="171" cy="303" rx="148" ry="10" fill="#F1F3F4" />
    <path d="M148 30h108l-7 219H140l8-219Z" fill="#4CAF4F" /><path d="M142 34h108l-8 215H134l8-215Z" fill="#B9E3BB" />
    <path d="M145 39h97l-8 94h-93l4-94Z" fill="#E8F5E9" /><circle cx="190" cy="75" r="23" fill="#4CAF4F" /><circle cx="190" cy="67" r="9" fill="white" /><path d="M173 94c3-12 30-12 34 0-9 12-25 12-34 0Z" fill="white" />
    <path d="M139 137h94v16h-94z" fill="white" /><circle cx="151" cy="145" r="3" fill="#263238" /><circle cx="163" cy="145" r="3" fill="#263238" /><circle cx="175" cy="145" r="3" fill="#263238" />
    <path d="M138 165h91v18h-91z" fill="white" /><path d="M142 183h86v9h-86z" fill="#4CAF4F" /><path d="M141 202h84v18h-84z" fill="white" /><circle cx="152" cy="211" r="3" fill="#263238" /><circle cx="164" cy="211" r="3" fill="#263238" /><circle cx="176" cy="211" r="3" fill="#263238" /><circle cx="188" cy="211" r="3" fill="#263238" />
    <path d="M150 230h58v19h-58z" fill="#8DD293" /><path d="M154 234h49v11h-49z" fill="#72BF78" />
    <path d="M75 113c2-13 17-19 28-11l2 17-11 9-19-15Z" fill="#263238" /><circle cx="91" cy="120" r="13" fill="#F3A38D" /><path d="M78 117c-4-11 15-20 24-10l-6 8-9-5-9 7Z" fill="#263238" />
    <path d="m80 135 20 2 13 52-25 9-17-48 9-15Z" fill="#4CAF4F" /><path d="M81 148 66 175l-9-4 11-31 13 8Z" fill="#F3A38D" /><path d="m58 168-9 17c-5 9 6 14 11 6l10-17-12-6Z" fill="#F3A38D" />
    <path d="m87 194 18-8 24 59-15 11-27-62Z" fill="#1B4D2B" /><path d="m108 252 16-8 19 23-10 9-25-24Z" fill="#1B4D2B" /><path d="m129 274 17-9 7 6-15 10-9-7Z" fill="#263238" />
    <path d="m86 194 13 2-5 60-14 1 6-63Z" fill="#153E25" /><path d="m80 254 15 1 1 21-17 1 1-22Z" fill="#153E25" /><path d="m78 275 19 1 3 7-21 2-1-10Z" fill="#4CAF4F" />
    <path d="M267 64c0-12 16-18 26-10l-3 16-15 7-8-13Z" fill="#263238" /><circle cx="280" cy="78" r="13" fill="#F3A38D" /><path d="M268 75c1-13 19-17 26-8l-3 7-10-2-4 7-9-4Z" fill="#263238" />
    <path d="m274 93 22 4 14 18-14 9-14-13-5 34-27-7 14-45Z" fill="#4CAF4F" /><path d="m295 101 20 15 10-16 8 5-12 28c-3 7-10 8-15 3l-20-17 9-18Z" fill="#F3A38D" />
    <path d="m267 137 23 5-5 72-18 1v-78Z" fill="#42AC49" /><path d="m285 141 13-5 17 78-17 1-13-74Z" fill="#4CAF4F" /><path d="m267 212 19 1-2 37-17 4v-42Zm31 1 18-1 9 35-16 5-11-39Z" fill="#42AC49" /><path d="m265 249 21-1 4 7-25 4v-10Zm43-1 19-6 7 7-22 8-4-9Z" fill="#263238" />
    <path d="m259 118-31 18 6 12 36-18-11-12Z" fill="#F3A38D" /><path d="m231 135-10 6 8 11 10-6-8-11Z" fill="#4CAF4F" /><path d="M255 89h8v17h-8z" fill="#4CAF4F" />
  </svg>;
}

function StatIcon({ type }: { type: "members" | "clubs" | "events" | "payments" }) {
  const art = {
    members: <><circle cx="13" cy="11" r="6" /><circle cx="26" cy="12" r="6" /><path d="M2 29c1-8 6-12 12-12s11 4 12 12M17 27c2-6 7-9 12-9s10 3 12 9" /></>,
    clubs: <><path d="M20 3v16l-8 5V8l8-5Zm0 16 8 5V8l-8-5ZM6 34c1-7 5-11 10-11s9 4 10 11m-5-1c1-6 5-10 10-10s9 4 10 10M5 22l-4-3v-8l5 3v8l-1 0Zm30 0 5-3v-8l-5 3v8Z" /></>,
    events: <><path d="M6 29v-7h7v7m-7-7 4-5m3 5 3-6m4 13v-9h7v9m-7-9 4-6m3 6 3-4M2 32h38" /><path d="M12 9V2m12 5V0" /></>,
    payments: <><rect x="2" y="6" width="38" height="27" rx="5" /><path d="M2 14h38M29 26h6" /></>,
  };
  return <svg viewBox="0 0 42 36" className="h-10 w-12 shrink-0 stroke-[#4caf4f]" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{art[type]}</svg>;
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
      <main className="mx-auto grid min-h-[565px] max-w-[1200px] items-center gap-10 px-6 pb-12 pt-8 lg:grid-cols-[1fr_440px] lg:px-0 lg:pt-0">
        <section className="pt-4 lg:pt-0">
          <h1 className="max-w-[680px] text-[48px] font-semibold leading-[1.18] tracking-[-1.2px] text-[#4d4d4d] sm:text-[56px] lg:text-[64px]">
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
            <h2 className="text-[32px] font-semibold leading-tight tracking-[-.6px] text-[#4d4d4d]">Our Clients</h2>
            <p className="mt-2 text-[16px] text-[#717171]">We have been working with some Fortune 500+ clients</p>
          </div>
          <div className="mt-12 grid grid-cols-4 items-center justify-items-center gap-8 sm:grid-cols-7">
            {[0, 1, 2, 3, 4, 5, 6].map((logo) => <ClientLogo key={logo} variant={logo} />)}

          </div>
          <div className="mt-[72px] text-center">
            <h2 className="mx-auto max-w-[650px] text-[32px] font-semibold leading-[1.35] tracking-[-.6px] text-[#4d4d4d]">Manage your entire community<br />in a single system</h2>
            <p className="mt-2 text-[16px] text-[#717171]">Who is Nexcent suitable for?</p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-[126px]">
            <CommunityCard icon="members" title={<>Membership<br />Organisations</>} />
            <CommunityCard icon="association" title={<>National<br />Associations</>} />
            <CommunityCard icon="clubs" title={<>Clubs And<br />Groups</>} />
          </div>
          <div className="mt-24 grid items-center gap-14 pb-10 lg:grid-cols-[400px_1fr] lg:gap-[92px]">
            <div className="justify-self-center"><FeatureIllustration /></div>
            <div className="max-w-[670px]">
              <h2 className="text-[36px] font-semibold leading-[1.25] tracking-[-.8px] text-[#4d4d4d]">The unseen of spending three<br className="hidden lg:block" /> years at Pixelgrade</h2>
              <p className="mt-4 text-[14px] leading-5 text-[#717171]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
              <Link href="#learn-more" className="mt-8 inline-flex rounded bg-[#4caf4f] px-8 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#429d45]">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f7fa]">
        <div className="mx-auto grid min-h-[288px] max-w-[1075px] items-center gap-12 px-6 py-12 lg:grid-cols-[1fr_1.05fr] lg:px-0">
          <div>
            <h2 className="text-[36px] font-semibold leading-[1.25] tracking-[-.8px] text-[#4d4d4d]">Helping a local<br /><span className="text-[#4caf4f]">business reinvent itself</span></h2>
            <p className="mt-3 text-[16px] text-[#18191f]">We reached here with our hard work and dedication</p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-9">
            <StatItem icon="members" value="2,245,341" label="Members" />
            <StatItem icon="clubs" value="46,328" label="Clubs" />
            <StatItem icon="events" value="828,867" label="Event Bookings" />
            <StatItem icon="payments" value="1,926,436" label="Payments" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto grid min-h-[530px] max-w-[980px] items-center gap-16 px-6 py-14 lg:grid-cols-[370px_1fr] lg:px-0">
          <div className="justify-self-center"><FooterDesignIllustration /></div>
          <div className="max-w-[600px]">
            <h2 className="text-[36px] font-semibold leading-[1.24] tracking-[-.8px] text-[#4d4d4d]">How to design your site footer like we did</h2>
            <p className="mt-4 text-[14px] leading-5 text-[#717171]">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <Link href="#learn-more" className="mt-8 inline-flex rounded bg-[#4caf4f] px-8 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#429d45]">Learn More</Link>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f7fa]">
        <div className="mx-auto grid min-h-[392px] max-w-[1085px] items-center gap-16 px-6 py-8 lg:grid-cols-[326px_1fr] lg:px-0">
          <Image src="/images/customer-tile.png" alt="Electric vehicle app icon" width={326} height={326} className="h-[326px] w-[326px] rounded-lg object-cover" />
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
        <div className="mx-auto max-w-[1075px] px-6 text-center lg:px-0">
          <h2 className="text-[36px] font-semibold leading-tight tracking-[-.8px] text-[#4d4d4d]">Caring is the new marketing</h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[16px] leading-6 text-[#717171]">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.</p>
          <div className="mt-4 grid gap-8 md:grid-cols-3 md:gap-6">
            <BlogCard image="/images/blog-one.png" title={<>Creating Streamlined<br />Safeguarding Processes with<br />OneRen</>} />
            <BlogCard image="/images/blog-two.png" title={<>What are your safeguarding<br />responsibilities and how can<br />you manage them?</>} />
            <BlogCard image="/images/blog-three.png" title={<>Revamping the Membership<br />Model with Triathlon<br />Australia</>} />
          </div>
        </div>
      </section>
      <section className="bg-[#f5f7fa] py-10 sm:py-12">
        <div className="mx-auto flex min-h-[260px] max-w-[760px] flex-col items-center justify-center px-6 text-center">
          <h2 className="text-[46px] font-semibold leading-[1.18] tracking-[-1.2px] text-[#263238] sm:text-[56px] lg:text-[64px]">Pellentesque suscipit<br />fringilla libero eu.</h2>
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

function BlogCard({ image, title }: { image: string; title: React.ReactNode }) {
  return <article className="flex flex-col items-center">
    <Image src={image} alt="Nexcent blog article" width={352} height={286} className="h-[286px] w-full rounded-lg object-cover" />
    <div className="-mt-24 flex min-h-[176px] w-[calc(100%-48px)] flex-col items-center rounded-lg bg-[#f5f7fa] px-5 py-4 shadow-[0_8px_16px_rgba(171,190,209,0.35)]">
      <h3 className="text-[20px] font-semibold leading-7 text-[#717171]">{title}</h3>
      <Link href="#read-more" className="mt-auto pt-3 text-[20px] font-semibold text-[#4caf4f]">Readmore <span aria-hidden="true" className="ml-2 font-normal">→</span></Link>
    </div>
  </article>;
}
