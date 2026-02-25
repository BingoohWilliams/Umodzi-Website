import { motion } from 'motion/react';

export function NewsTicker() {
  const newsItems = [
    "Climate Champion Project: 500+ households engaged in climate-resilient practices",
    "Umodzi Nursery School: Providing quality education to 50+ children in Chatoloma",
    "E-Blocks Company: Creating sustainable building solutions and youth employment",
    "Upkeep Program: Empowering youth with skills training and entrepreneurship"
  ];

  // Create a long array for seamless scrolling
  const repeatedItems = Array(5).fill(newsItems).flat();

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#4153a5] text-white py-2.5 overflow-hidden border-b-2 border-[#62a456] shadow-md relative"
    >
      <div className="flex items-center">
        {/* Fixed Label */}
        <div className="bg-[#62a456] px-4 py-1.5 font-black text-[13px] whitespace-nowrap flex-shrink-0 z-10">
          LATEST UPDATES
        </div>
        
        {/* Scrolling Container */}
        <div className="flex-1 overflow-hidden relative ml-4">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex items-center gap-12 whitespace-nowrap"
          >
            {repeatedItems.map((item, index) => (
              <span key={index} className="text-[13px] font-medium inline-flex items-center">
                <span className="text-[#62a456] font-black mr-2">•</span>
                {item}
              </span>
            ))}
          </motion.div>
        </div>
        
        {/* Gradient Fade on right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#4153a5] to-transparent pointer-events-none z-10" />
      </div>
    </motion.div>
  );
}
