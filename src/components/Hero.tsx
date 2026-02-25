import { motion } from 'motion/react';
import imgHero from "figma:asset/930751bda688aef1e81906bf90cc5f2a406bac29.png";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative h-[500px] md:h-[713px] overflow-hidden shadow-lg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          alt="Youth community engagement in Malawi" 
          className="w-full h-full object-cover" 
          src={imgHero} 
        />
        <div className="absolute inset-0 bg-[rgba(65,83,165,0.5)]" />
      </div>

      {/* Animated Accent Lines - BBC Style */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 h-1 bg-[#62a456] w-full origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 h-1 bg-[#62a456] w-full origin-left"
      />

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-[1054px] flex flex-col items-center gap-8 md:gap-[75px]">
          {/* Main Heading with BBC-style slide in */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="bg-[rgba(65,83,165,0.55)] opacity-90 rounded-[20px] md:rounded-[30px] shadow-[0px_8px_12px_4px_rgba(0,0,0,0.25)] px-6 py-6 md:px-[44px] md:py-[45px]"
          >
            <h1 className="font-['Inter:Black',sans-serif] font-black text-white text-[24px] md:text-[40px] leading-tight">
              Empowering Youth and Communities for a Sustainable Future
            </h1>
          </motion.div>

          {/* Subheading with fade in */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="font-['Inter:Black',sans-serif] font-black text-white text-[18px] md:text-[32px] leading-normal max-w-[900px] px-4"
          >
            We create lasting impact through climate action, child protection, WASH, and youth empowerment in Kasungu, Malawi
          </motion.p>

          {/* Call to Action Buttons with stagger */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-[15px] mt-4"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#62a456] hover:bg-[#528a47] text-white font-['Inter:Black',sans-serif] font-black text-[24px] md:text-[39px] px-6 py-3 md:px-[19px] md:py-[21px] rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all hover:scale-105"
            >
              Get Involved
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="bg-transparent hover:bg-white/20 text-white font-['Inter:Black',sans-serif] font-black text-[20px] md:text-[27px] px-8 py-3 md:px-[61px] md:py-[21px] rounded-[24px] border-2 border-white transition-all hover:scale-105"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
