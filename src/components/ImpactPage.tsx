import { Sprout, Users, Droplet, Building2, GraduationCap } from 'lucide-react';
import kuuwaProjectImage from 'figma:asset/38527ca0618bda5508c1a6d8e8ee69a5022e8e1c.png';
import umodziAcademyLogo from 'figma:asset/c0b5ddbd221da75a30b4fc1a228160e82c29a1bb.png';
import umodziEcoBlocksImage from 'figma:asset/b00aca5b3f438085e28ee6b498b2c83a45deeb19.png';

export function ImpactPage() {
  const projects = [
    {
      icon: Sprout,
      title: "Climate Champion Project",
      description: "Improving knowledge and awareness of climate risks and adaptation measures among vulnerable populations.",
      pillars: [
        {
          name: "Knowledge Strengthening",
          details: "Tailored climate change adaptation education programs for adolescents and youth groups, promoting active participation of girls and women in climate action."
        },
        {
          name: "Access to Climate Information",
          details: "Using innovative tech solutions including a gender-responsive, youth-friendly web app co-created with adolescents to share localized climate data."
        },
        {
          name: "Advocacy and Influencing",
          details: "Capacitating adolescents and youth with communication, advocacy, and influencing skills to drive policy changes."
        }
      ],
      image: "https://images.unsplash.com/photo-1651838677683-f642527059c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBlbnZpcm9ubWVudGFsJTIwQWZyaWNhfGVufDF8fHx8MTc3MDc2NDg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Users,
      title: "KUUWA Project",
      description: "Partnership with Plan International providing capacity-building and financial support for youth empowerment.",
      highlights: [
        "Training young people as community trainers to promote governance and child protection",
        "Partnering with multiple youth-led organizations for sustainable grassroots impact",
        "Promoting child protection and SRHR awareness among youth",
        "Ensuring sustainable impact through community-based approaches"
      ],
      image: kuuwaProjectImage
    },
    {
      icon: GraduationCap,
      title: "Umodzi Nursery School",
      description: "Supporting early childhood education and development in Chatoloma.",
      highlights: [
        "Providing a strong foundation for children's education",
        "Empowering parents in the community through engagement",
        "Creating accessible early learning opportunities",
        "Supporting holistic child development"
      ],
      image: umodziAcademyLogo
    },
    {
      icon: Building2,
      title: "Umodzi Eco-Blocks Company",
      description: "Addressing climate change and youth unemployment through eco-friendly block production.",
      highlights: [
        "Producing eco-friendly blocks to reduce deforestation",
        "Creating job opportunities for young people",
        "Providing hands-on skills in block making and production",
        "Supporting local development and environmental conservation",
        "Building resilience to climate change in rural communities"
      ],
      image: umodziEcoBlocksImage
    }
  ];

  const futureGoals = [
    "Enhance climate change awareness and afforestation initiatives to mitigate environmental degradation in Kasungu District",
    "Expand programs addressing child protection and SRHR awareness in underserved communities",
    "Increase youth participation in governance and decision-making processes",
    "Strengthen partnerships to scale up projects and ensure sustainability of initiatives"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#4153a5] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h1 className="font-['Inter:Black',sans-serif] font-black text-[48px] md:text-[64px] mb-6">
            Our Impact
          </h1>
          <p className="text-[20px] md:text-[24px] max-w-[900px] mx-auto leading-relaxed">
            Creating lasting change through strategic projects and partnerships in Kasungu, Malawi
          </p>
        </div>
      </section>

      {/* Key Projects */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[40px] text-center mb-12">
            Key Projects & Achievements
          </h2>
          
          <div className="space-y-16">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-[#4153a5] text-white p-3 rounded-lg">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="font-['Inter:Black',sans-serif] font-black text-[32px] text-[#4153a5]">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-[18px] leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {project.pillars && (
                      <div className="space-y-4">
                        {project.pillars.map((pillar, pIndex) => (
                          <div key={pIndex} className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-black text-[18px] mb-2">{pillar.name}</h4>
                            <p className="text-gray-600">{pillar.details}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {project.highlights && (
                      <ul className="space-y-3">
                        {project.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-3">
                            <div className="bg-[#62a456] w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-gray-700">{highlight}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[40px] text-center mb-12">
            Future Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureGoals.map((goal, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-[#62a456] text-white font-black text-[20px] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-[18px] leading-relaxed">
                    {goal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-[#4153a5] text-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[40px] text-center mb-12">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[48px] font-black mb-2">4+</div>
              <div className="text-[20px]">Major Projects</div>
            </div>
            <div>
              <div className="text-[48px] font-black mb-2">23</div>
              <div className="text-[20px]">Dedicated Staff</div>
            </div>
            <div>
              <div className="text-[48px] font-black mb-2">6+</div>
              <div className="text-[20px]">Partner Organizations</div>
            </div>
            <div>
              <div className="text-[48px] font-black mb-2">7</div>
              <div className="text-[20px]">Years of Impact</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
