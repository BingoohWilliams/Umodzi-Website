import imgUmodziLogo from "figma:asset/5eb848577dd53b6684eb460cbae72198e831cdd4.png";

function Company() {
  return (
    <div className="h-[139px] overflow-clip relative shrink-0 w-[381px]" data-name="Company">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[normal] left-[136px] not-italic text-[#4153a5] text-[40px] top-[45.5px] w-[175px] whitespace-pre-wrap">UMODZI</p>
      <div className="absolute h-[117px] left-0 rounded-[276.5px] top-[10.5px] w-[116px]" data-name="Umodzi logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[276.5px] size-full" src={imgUmodziLogo} />
      </div>
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
    <div className="content-stretch flex gap-[37px] items-center overflow-clip px-[26px] py-[16px] relative shrink-0" data-name="Nav">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] not-italic relative shrink-0 text-[24px] text-black">{`About `}</p>
      <OurImpact />
      <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] not-italic relative shrink-0 text-[24px] text-black">Stories</p>
      <p className="font-['Inter:Black',sans-serif] font-black leading-[normal] not-italic relative shrink-0 text-[24px] text-black">Contact</p>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between overflow-x-clip overflow-y-auto px-[123px] shrink-0 sticky top-0 w-[1440px]" data-name="Header">
      <Company />
      <Nav />
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="About">
      <Header />
    </div>
  );
}