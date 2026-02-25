import imgUmodziLogo from "figma:asset/5eb848577dd53b6684eb460cbae72198e831cdd4.png";
import imgHero from "figma:asset/930751bda688aef1e81906bf90cc5f2a406bac29.png";

function Company() {
  return (
    <div className="absolute cursor-pointer h-[139px] left-[123px] overflow-clip top-0 w-[381px]" data-name="Company">
      <button className="absolute block font-['Inter:Black',sans-serif] font-black leading-[0] left-[136px] not-italic text-[#4153a5] text-[40px] text-left top-[45.5px] w-[175px]">
        <p className="leading-[normal] whitespace-pre-wrap">UMODZI</p>
      </button>
      <button className="absolute block h-[117px] left-0 rounded-[276.5px] top-[10.5px] w-[116px]" data-name="Umodzi logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[276.5px] size-full" src={imgUmodziLogo} />
      </button>
    </div>
  );
}

function OurImpact() {
  return (
    <div className="bg-[#4153a5] h-[36px] overflow-clip relative rounded-[12px] shrink-0 w-[152px]" data-name="Our Impact">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[normal] left-[calc(50%-67px)] not-italic text-[24px] text-white top-[3px] w-[134px] whitespace-pre-wrap">Our Impact</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute content-stretch flex gap-[37px] items-center left-[742px] overflow-clip px-[26px] py-[16px] top-[35.5px]" data-name="Nav">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] not-italic relative shrink-0 text-[24px] text-black">{`About `}</p>
      <OurImpact />
      <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] not-italic relative shrink-0 text-[24px] text-black">Stories</p>
      <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] not-italic relative shrink-0 text-[24px] text-black">Contact</p>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[139px] overflow-x-clip overflow-y-auto shrink-0 sticky top-0 w-[1440px]" data-name="Header">
      <Company />
      <Nav />
    </div>
  );
}

function Heading() {
  return (
    <div className="bg-[rgba(65,83,165,0.55)] content-stretch flex items-center justify-center opacity-90 overflow-clip px-[44px] py-[45px] relative rounded-[30px] shadow-[0px_8px_12px_4px_rgba(0,0,0,0.25)] shrink-0" data-name="Heading">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] not-italic relative shrink-0 text-[40px] text-white w-[634px] whitespace-pre-wrap">Empowering 250,000 Students to Lead Malawi’s Future.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[75px] items-center left-[193px] top-[83px] w-[1054px]">
      <Heading />
      <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] min-w-full not-italic relative shrink-0 text-[32px] text-center text-white w-[min-content] whitespace-pre-wrap">We bridge the financial gap for university students, ensuring they stay in school today and lead sustainable businesses tomorrow</p>
    </div>
  );
}

function Apply() {
  return (
    <div className="bg-[#62a456] content-stretch flex items-center justify-center overflow-clip px-[19px] py-[21px] relative rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0" data-name="apply">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] not-italic relative shrink-0 text-[39px] text-white">Apply for Support</p>
    </div>
  );
}

function Call() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[61px] py-[21px] relative rounded-[24px] shrink-0" data-name="Call">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] not-italic relative shrink-0 text-[27px] text-white">Work with Us</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[15px] items-center left-[calc(16.67%+128px)] top-[541px]">
      <Apply />
      <Call />
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[713px] overflow-clip relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[1440px]" data-name="Hero">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(65,83,165,0.5)] inset-0" />
      </div>
      <Frame1 />
      <Frame />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Home">
      <Header />
      <Hero />
    </div>
  );
}