import { useState } from 'react';
import { Calendar, ArrowRight, Leaf, Building2, GraduationCap, Wrench, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgEcoBlocks from "figma:asset/b00aca5b3f438085e28ee6b498b2c83a45deeb19.png";
import imgNursery from "figma:asset/4091498b849503fde5cf1bad8128754d4ea3e199.png";
import imgClimateChampion from "figma:asset/e1857a897f2938d854aa3f4b8532787901925f97.png";
import imgUpkeep from "figma:asset/2d3065e84699656ad7faf451786bcd1d3ae8bccc.png";

export function NewsPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };
  const newsItems = [
    {
      id: 1,
      title: "Climate Champion Project",
      category: "Climate Action",
      date: "Ongoing - 2026",
      icon: Leaf,
      color: "#62a456",
      image: imgClimateChampion,
      description: "The Climate Champion Project aims to improve knowledge and awareness of climate risks and adaptation measures among vulnerable populations. We enhance understanding of adolescents, youth, communities, and local and district level authorities on climate risks, access to climate risk information, adaptation plans development, and contribution to policy discourses.",
      pillars: [
        {
          title: "Knowledge Strengthening",
          points: [
            "Tailored climate change adaptation education and awareness programs for adolescents and youth groups",
            "Promoting active participation of girls and women in climate action and influencing",
            "Intensive climate change and gender equality sessions for community leaders and parents"
          ]
        },
        {
          title: "Access to Climate Information",
          points: [
            "Using innovative tech solutions to bridge climate information gaps",
            "Developing a gender-responsive, youth-friendly web app co-created with adolescents and youth",
            "Sharing localized climate data connected to personal stories and successful adaptation approaches"
          ]
        },
        {
          title: "Advocacy and Influencing",
          points: [
            "Capacitating adolescents and youth with communication, advocacy, and influencing skills"
          ]
        }
      ],
      impact: "Enhancing climate resilience and empowering youth to become champions of environmental conservation and policy change"
    },
    {
      id: 2,
      title: "Umodzi E-Blocks Company",
      category: "Social Enterprise",
      date: "Ongoing - 2026",
      icon: Building2,
      color: "#4153a5",
      image: imgEcoBlocks,
      description: "Umodzi E-Blocks Company, a department under Umodzi Empowerment Organization, plays a vital role in addressing climate change and youth unemployment. By producing eco-friendly blocks, it helps reduce deforestation and promotes sustainable construction. The company creates job opportunities for young people, equipping them with hands-on skills in block making, marketing, and production.",
      highlights: [
        "Producing eco-friendly blocks to reduce deforestation and promote sustainable construction",
        "Creating employment and hands-on skills training for youth in block making, marketing, and production",
        "Empowering youth economically while reducing crime and improving livelihoods",
        "Supporting local development and environmental conservation in Chatoloma and surrounding communities"
      ],
      impact: "Building resilience to climate change while fostering youth empowerment and economic growth in rural areas"
    },
    {
      id: 3,
      title: "Umodzi Nursery School",
      category: "Education",
      date: "Ongoing - 2026",
      icon: GraduationCap,
      color: "#62a456",
      image: imgNursery,
      description: "Established a nursery school in Chatoloma to support early childhood education and development. This initiative aims to provide a strong foundation for children while empowering parents in the community.",
      highlights: [
        "Located in Chatoloma, serving the local community",
        "Supporting early childhood education and development",
        "Providing a strong educational foundation for children",
        "Empowering parents through community engagement"
      ],
      impact: "Building the foundation for lifelong learning while strengthening families and communities"
    },
    {
      id: 4,
      title: "Upkeep Program",
      category: "Youth Economic Empowerment",
      date: "Ongoing - 2026",
      icon: Wrench,
      color: "#4153a5",
      image: imgUpkeep,
      description: "The Upkeep Program provides comprehensive support to youth entrepreneurs through monthly allowances, capacity-building workshops, and startup capital. This initiative empowers young people to establish and sustain their own businesses, creating economic independence and reducing unemployment in our communities.",
      highlights: [
        "Providing K50,000 monthly allowance to support program participants",
        "Delivering capacity-building workshops on business management and entrepreneurship",
        "Offering startup business capital of at least K1,000,000 to qualified youth",
        "Creating sustainable economic opportunities for young entrepreneurs"
      ],
      impact: "Transforming youth from job seekers to job creators, fostering economic resilience and self-reliance"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4153a5] to-[#62a456] text-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="w-12 h-12" />
            <h1 className="font-['Inter:Black',sans-serif] font-black text-[48px] md:text-[64px]">
              News & Updates
            </h1>
          </div>
          <p className="text-center text-[20px] md:text-[24px] max-w-[800px] mx-auto opacity-95">
            Stay informed about our ongoing projects and current initiatives making a difference in Kasungu
          </p>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#62a456] text-white font-black px-6 py-2 rounded-full text-[14px] mb-4">
              CURRENT PROJECTS 2026
            </span>
            <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[40px] mb-4">
              What We're Working On
            </h2>
            <p className="text-gray-600 text-[18px] max-w-[700px] mx-auto">
              Our four major initiatives are actively transforming lives and building sustainable futures
            </p>
          </div>

          <div className="space-y-6">
            {newsItems.map((item, index) => {
              const IconComponent = item.icon;
              const isExpanded = expandedItems.includes(item.id);
              
              return (
                <div 
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border-l-8 hover:shadow-xl transition-all duration-300"
                  style={{ borderLeftColor: item.color }}
                >
                  {/* Collapsed View */}
                  <div 
                    className={`${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex flex-col md:flex cursor-pointer`}
                    onClick={() => toggleExpand(item.id)}
                  >
                    {/* Image */}
                    <div className="md:w-1/3">
                      {typeof item.image === 'string' ? (
                        <ImageWithFallback 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-[180px] md:h-[220px] object-cover"
                        />
                      ) : (
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-[180px] md:h-[220px] object-cover"
                        />
                      )}
                    </div>

                    {/* Preview Content */}
                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div 
                            className="p-3 rounded-lg"
                            style={{ backgroundColor: `${item.color}20` }}
                          >
                            <IconComponent className="w-7 h-7" style={{ color: item.color }} />
                          </div>
                          <div>
                            <span 
                              className="font-black text-[13px] uppercase tracking-wide"
                              style={{ color: item.color }}
                            >
                              {item.category}
                            </span>
                            <p className="text-gray-500 text-[13px] flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {item.date}
                            </p>
                          </div>
                        </div>

                        <h3 className="font-['Inter:Black',sans-serif] font-black text-[24px] md:text-[28px] text-gray-900 mb-3">
                          {item.title}
                        </h3>

                        <p className="text-gray-700 text-[15px] leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      <button
                        className="mt-4 flex items-center gap-2 font-bold text-[14px] hover:gap-3 transition-all duration-200"
                        style={{ color: item.color }}
                      >
                        {isExpanded ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp className="w-5 h-5" />
                          </>
                        ) : (
                          <>
                            <span>Read More</span>
                            <ChevronDown className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="border-t border-gray-200 p-6 md:p-8 bg-gray-50 animate-in slide-in-from-top duration-300">
                      <div className="max-w-4xl">
                        <p className="text-gray-700 text-[16px] leading-relaxed mb-6">
                          {item.description}
                        </p>

                        <div className="mb-6">
                          {item.pillars ? (
                            <div className="space-y-4">
                              <h4 className="font-black text-[18px] text-gray-900 mb-4">Project Pillars:</h4>
                              {item.pillars.map((pillar, pillarIdx) => (
                                <div key={pillarIdx} className="mb-4">
                                  <h5 className="font-bold text-[16px] mb-2" style={{ color: item.color }}>
                                    {pillar.title}
                                  </h5>
                                  <ul className="space-y-2 ml-2">
                                    {pillar.points.map((point, pointIdx) => (
                                      <li key={pointIdx} className="flex items-start gap-2 text-gray-700 text-[15px]">
                                        <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                                        <span>{point}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div>
                              <h4 className="font-black text-[18px] text-gray-900 mb-4">Current Highlights:</h4>
                              <ul className="space-y-2.5">
                                {item.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-gray-700 text-[15px]">
                                    <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div 
                          className="p-5 rounded-lg"
                          style={{ backgroundColor: `${item.color}15` }}
                        >
                          <p className="text-[15px] font-bold" style={{ color: item.color }}>
                            IMPACT: <span className="font-normal text-gray-800">{item.impact}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#4153a5] to-[#62a456] text-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[36px] md:text-[40px] mb-6">
            Want to Support Our Work?
          </h2>
          <p className="text-[18px] mb-8 max-w-[600px] mx-auto opacity-95">
            Your support helps us continue these vital projects and expand our impact in the community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#4153a5] font-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Donate Now
            </a>
            <a 
              href="mailto:info@umodziempower.org"
              className="inline-block bg-transparent border-2 border-white text-white font-black px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
