import { Hero } from './Hero';
import { Target, Users, Heart, Leaf } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FocusAreasSection } from './FocusAreasSection';
import climateImage1 from 'figma:asset/e1857a897f2938d854aa3f4b8532787901925f97.png';
import climateImage2 from 'figma:asset/3d78d4e78b5e60181bf49e3285dae38a4230467d.png';
import orphanageImage from 'figma:asset/4091498b849503fde5cf1bad8128754d4ea3e199.png';
import mzuzuUniversity from 'figma:asset/e2d0ab8b3ca1684bfd822f7fa7af8c26ce8859fd.png';
import luanarUniversity from 'figma:asset/74b90de6612cc39fdcb2d7d219e15caad7936f17.png';
import domasi from 'figma:asset/681f8ce9fbb6150c190ef811fc08587365bb0b46.png';
import mubas from 'figma:asset/9cbcd6d4f324faa2100ffadfdb9ddd4fbb6e3454.png';
import uniMalawi from 'figma:asset/953cb47996bdbaa84cfe22e2af9ea873c07be9f7.png';
import comHeathSciences from 'figma:asset/18adaa4b0cfd2eb0499998b7d3b2ca7a1cc096dc.png';
import mulunguzi from 'figma:asset/b3a3df0a1c5e6461432cb340d02e80f6535a67f9.png';
import washImage1 from 'figma:asset/7c4764fd0703791cfb07ecdfb680340cf0371ce4.png';
import washImage2 from 'figma:asset/a64b8a8babfbbec849d3de14673bdc975f12570c.png';
import washImage3 from 'figma:asset/a05cdfba16f225be4d4097d4443521bc1df77a20.png';
import srhrImage1 from 'figma:asset/66981dd487f46320526290ee7d021ec2a2d5a1aa.png';
import srhrImage2 from 'figma:asset/4203702793cfda490f2058a27aaed226ab0efd14.png';
import srhrImage3 from 'figma:asset/1e8a372fa40b14d00eafbad609e86aa3f22c8191.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

// Animated Core Values Section Component
function CoreValuesSection({ coreValues }: { coreValues: any[] }) {
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <section ref={valuesRef} className="py-16 md:py-24 relative">
      {/* BBC-style animated accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={valuesInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 h-1 bg-[#4153a5] w-1/3 origin-left"
      />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={valuesInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[40px] text-center mb-12"
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={valuesInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#4153a5] rounded-full mb-4"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-['Inter:Black',sans-serif] font-black text-[20px] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [isClimateModalOpen, setIsClimateModalOpen] = useState(false);
  const [isUpkeepModalOpen, setIsUpkeepModalOpen] = useState(false);
  const [isOrphanageModalOpen, setIsOrphanageModalOpen] = useState(false);
  const [isWashModalOpen, setIsWashModalOpen] = useState(false);
  const [isSRHRModalOpen, setIsSRHRModalOpen] = useState(false);

  const coreValues = [
    {
      icon: Heart,
      title: "Community Engagement",
      description: "Collaborating with local leaders and youth networks to achieve shared goals"
    },
    {
      icon: Target,
      title: "Accountability",
      description: "Ensuring transparency and integrity in all our activities"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Focusing on long-term impact through strategic and environmentally conscious initiatives"
    },
    {
      icon: Users,
      title: "Innovation",
      description: "Promoting creative and sustainable solutions to address community challenges"
    }
  ];

  const focusAreas = [
    {
      title: "Climate Champion Project",
      description: "Funded by the Flemish Government and implemented in partnership with Plan International, improving knowledge and awareness of climate risks and adaptation measures among vulnerable populations through tailored education programs and tech solutions.",
      image: climateImage2
    },
    {
      title: "Student Upkeep Support Program",
      description: "A 3-year program (2026-2029) providing vulnerable university students with monthly allowances of MK 50,000, business training, mentorship, and startup grants to build sustainable futures. Donor: Muller Schneder family.",
      image: "https://images.unsplash.com/photo-1735603598090-8efd0ecfbf9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxhd2klMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGdyYWR1YXRpb258ZW58MXx8fHwxNzcwNzYwMjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Mzuzu Orphanage Center",
      description: "Home to 50 orphans and growing, partnering with the Malawi government to provide quality education, healthcare, and a safe haven for vulnerable children in Mzuzu City.",
      image: orphanageImage
    },
    {
      title: "Child Protection & SRHR",
      description: "Partnering with Plan International and local organizations to promote child protection and sexual reproductive health rights awareness among youth.",
      image: "https://images.unsplash.com/photo-1738390102781-c58d4c9ad0f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxhd2klMjBzdHVkZW50cyUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzA3NjQ4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "WASH & Clean Water",
      description: "Providing access to clean water and sanitation services while promoting environmental protection and climate-smart interventions.",
      image: washImage1
    }
  ];

  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });

  return (
    <div>
      <Hero onNavigate={onNavigate} />

      {/* Mission & Vision Section */}
      <section ref={missionRef} className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* BBC-style animated accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={missionInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 left-0 h-1 bg-[#62a456] w-full origin-left"
        />
        
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={missionInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#4153a5]"
            >
              <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[32px] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To ensure improved health and well-being of young people through access to primary health care, 
                including sexual and reproductive health and rights (SRHR), by delivering gender-responsive civic 
                education and providing safe water and sanitation services.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={missionInView ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#62a456]"
            >
              <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[32px] mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A society where everyone has access to nutritious food, clean water, safe living conditions, 
                and where child protection, youth development, WASH, and gender equality are upheld at community, 
                national, and international levels.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <CoreValuesSection coreValues={coreValues} />

      {/* Focus Areas */}
      <FocusAreasSection 
        focusAreas={focusAreas}
        isClimateModalOpen={isClimateModalOpen}
        setIsClimateModalOpen={setIsClimateModalOpen}
        isUpkeepModalOpen={isUpkeepModalOpen}
        setIsUpkeepModalOpen={setIsUpkeepModalOpen}
        isOrphanageModalOpen={isOrphanageModalOpen}
        setIsOrphanageModalOpen={setIsOrphanageModalOpen}
        isSRHRModalOpen={isSRHRModalOpen}
        setIsSRHRModalOpen={setIsSRHRModalOpen}
        isWashModalOpen={isWashModalOpen}
        setIsWashModalOpen={setIsWashModalOpen}
        climateImage1={climateImage1}
        climateImage2={climateImage2}
        washImage1={washImage1}
        washImage2={washImage2}
        washImage3={washImage3}
        srhrImage1={srhrImage1}
        srhrImage2={srhrImage2}
        srhrImage3={srhrImage3}
        mzuzuUniversity={mzuzuUniversity}
        luanarUniversity={luanarUniversity}
        domasi={domasi}
        mubas={mubas}
        uniMalawi={uniMalawi}
        comHeathSciences={comHeathSciences}
        mulunguzi={mulunguzi}
      />

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[#4153a5]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-white text-[36px] md:text-[48px] mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-white text-[20px] md:text-[24px] mb-8 max-w-[800px] mx-auto">
            Partner with us to empower youth, protect children, and build sustainable communities in Malawi
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#62a456] hover:bg-[#528a47] text-white font-['Inter:Black',sans-serif] font-black text-[28px] px-12 py-4 rounded-[24px] shadow-lg transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
