import {
  Calendar,
  Users,
  Award,
  GraduationCap,
  Globe,
  Building2,
  Handshake,
  Heart,
  Sprout
} from "lucide-react";
import imgMaxwell from "figma:asset/c2734469f3ebcda7325e4e67c2d542fe25c9050e.png";
import imgVolunteer1 from "figma:asset/a203295187692fae7221d8aa3e6abcf20adca014.png";
import imgVolunteer2 from "figma:asset/6092655485fb39985a48dd9712db8122ead4c31f.png";
import imgVolunteer3 from "figma:asset/861846c1e8f8b1643a132328c53e304a62fede81.png";

// Placeholder Logo Component
const PartnerLogo = ({ name, icon: Icon, color }: { name: string, icon: any, color: string }) => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-2 group">
    <div className={`w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 border-4 border-${color}/10`}>
      <Icon className={`w-10 h-10 text-${color}`} style={{ color: color }} />
    </div>
    <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 whitespace-nowrap bg-black/50 px-3 py-1 rounded-full">
      {name}
    </span>
  </div>
);

export function AboutPage() {
  const timeline = [
    {
      year: "2016",
      event:
        "Started as a youth club to empower young people in the community",
    },
    {
      year: "2019",
      event:
        "Formally established as Umodzi Empowerment Organization",
    },
    {
      year: "2020",
      event:
        "Officially registered as an NGO with District Youth Office and National Youth Council",
    },
    {
      year: "2026",
      event:
        "32 staff members working across various departments with 7 Board of Trustees members",
    },
  ];

  const objectives = [
    {
      title: "Promote Youth Participation",
      description:
        "Advocate for youth involvement in governance and decision-making processes at the community level.",
    },
    {
      title: "Enhance Child Protection",
      description:
        "Reduce early marriages, school dropouts, and child labor by creating awareness and supporting community by-laws.",
    },
    {
      title: "Improve SRHR Knowledge",
      description:
        "Equip young people with knowledge and tools to make informed decisions about their sexual and reproductive health.",
    },
    {
      title: "Address Climate Change",
      description:
        "Implement afforestation initiatives, promote water conservation, and conduct awareness campaigns. Improve knowledge and awareness of climate risks and adaptation measures among vulnerable populations.",
    },
  ];

  const partnerships = [
    { name: "Malawi Government", icon: Building2, color: "#e67e22" },
    { name: "National Youth Council of Malawi", icon: Users, color: "#4153a5" },
    { name: "Plan International", icon: Globe, color: "#0077c8" },
    { name: "Umodzi Holdings Limited", icon: Sprout, color: "#62a456" },
    { name: "Emerge Livelihoods", icon: Handshake, color: "#f1c40f" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#4153a5] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h1 className="font-['Inter:Black',sans-serif] font-black text-[48px] md:text-[64px] mb-6">
            About Us
          </h1>
          <p className="text-[20px] md:text-[24px] max-w-[900px] mx-auto leading-relaxed">
            A community-driven, youth-focused non-governmental
            organization established in 2019 to address
            governance, child protection, and Sexual and
            Reproductive Health Rights for young people.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[40px] mb-6">
                Who We Are
              </h2>
              <p className="text-gray-700 text-[18px] leading-relaxed mb-4">
                Headquartered in Chatoloma, Kasungu, Malawi,
                Umodzi Empowerment Organization (UEO) is
                dedicated to creating lasting impacts through
                collaboration with communities, traditional
                leaders, and development partners.
              </p>
              <p className="text-gray-700 text-[18px] leading-relaxed">
                From humble beginnings as a youth club in 2016,
                we have grown significantly and now have 23
                dedicated staff members working across various
                departments, guided by a Board of Trustees
                comprising seven members providing strategic
                oversight.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#4153a5] text-white p-6 rounded-lg text-center">
                <Users className="w-12 h-12 mx-auto mb-3" />
                <div className="text-[36px] font-black">32</div>
                <div className="text-[16px]">Staff Members</div>
              </div>
              <div className="bg-[#62a456] text-white p-6 rounded-lg text-center">
                <Calendar className="w-12 h-12 mx-auto mb-3" />
                <div className="text-[36px] font-black">7</div>
                <div className="text-[16px]">Years Active</div>
              </div>
              <div className="bg-[#e67e22] text-white p-6 rounded-lg text-center col-span-2">
                <Award className="w-12 h-12 mx-auto mb-3" />
                <div className="text-[36px] font-black">7</div>
                <div className="text-[16px]">
                  Board of Trustees Members
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Maxwell Sithole */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[40px] text-center mb-12">
            Leadership
          </h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="bg-gradient-to-br from-[#4153a5] to-[#2c3e50] p-8 md:p-12 flex items-center justify-center">
                <div className="max-w-[400px] w-full">
                  <img
                    src={imgMaxwell}
                    alt="Maxwell Sithole - Executive Director"
                    className="w-full rounded-lg shadow-xl"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12">
                <h3 className="font-['Inter:Black',sans-serif] font-black text-[32px] md:text-[40px] text-[#4153a5] mb-2">
                  Maxwell Sithole
                </h3>
                <p className="text-[18px] md:text-[20px] text-gray-600 mb-6">
                  Executive Director & CEO
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Maxwell Sithole is a visionary leader,
                  development practitioner, and social
                  entrepreneur, currently serving as the
                  Executive Director of Umodzi Empowerment
                  Organization and Chief Executive Officer (CEO)
                  of Umodzi Development Holdings Limited.
                </p>

                {/* Education */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-6 h-6 text-[#4153a5]" />
                    <h4 className="font-black text-[18px]">
                      Education
                    </h4>
                  </div>
                  <ul className="space-y-2 ml-8 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#62a456] mt-1">
                        •
                      </span>
                      <span>
                        Diploma in Public Health - MUBAS,
                        Blantyre
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#62a456] mt-1">
                        •
                      </span>
                      <span>
                        BSc in Social Work - Lilongwe University
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#62a456] mt-1">
                        •
                      </span>
                      <span>
                        Currently studying Law - Unicaf
                        University, Zambia
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Global Experience */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-6 h-6 text-[#4153a5]" />
                    <h4 className="font-black text-[18px]">
                      Global Experience
                    </h4>
                  </div>
                  <p className="text-gray-700 ml-8">
                    Extensive international exposure including
                    Dubai, Germany, Poland, South Africa,
                    Eswatini, Kenya, Tanzania, and China.
                  </p>
                </div>

                {/* Key Focus Areas */}
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="bg-[#4153a5] text-white px-4 py-2 rounded-full text-[14px] font-black">
                    Leadership
                  </span>
                  <span className="bg-[#62a456] text-white px-4 py-2 rounded-full text-[14px] font-black">
                    Education
                  </span>
                  <span className="bg-[#e67e22] text-white px-4 py-2 rounded-full text-[14px] font-black">
                    Global Vision
                  </span>
                  <span className="bg-[#2c3e50] text-white px-4 py-2 rounded-full text-[14px] font-black">
                    Empowerment
                  </span>
                </div>
              </div>
            </div>

            {/* Full Width Quote/Mission */}
            <div className="bg-gradient-to-r from-[#4153a5] to-[#62a456] text-white p-8 md:p-12">
              <p className="text-[18px] md:text-[20px] leading-relaxed text-center max-w-[900px] mx-auto">
                "Through Umodzi Empowerment Organization, I am
                deeply committed to youth empowerment, education
                support, skills development, and community-based
                initiatives aimed at improving livelihoods and
                promoting self-reliance. My vision is clear:
                building empowered, resilient, and self-reliant
                communities."
              </p>
              <p className="text-center mt-4 font-black text-[16px]">
                — Maxwell Sithole
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Volunteers */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[40px] text-center mb-6">
            International Volunteers
          </h2>
          <p className="text-center text-gray-700 text-[18px] max-w-[800px] mx-auto mb-12">
            UEO welcomes volunteers from around the world who
            bring diverse skills, perspectives, and experiences
            to our community programs. Together, we're building
            bridges across cultures while making a lasting
            impact in Kasungu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={imgVolunteer1}
                alt="International volunteers collaborating with UEO team and community members by the lake"
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold text-[16px]">
                  Community Engagement
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={imgVolunteer2}
                alt="International volunteers working together with local staff in planning session"
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold text-[16px]">
                  Collaborative Planning
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={imgVolunteer3}
                alt="International volunteers participating in community training and capacity building"
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold text-[16px]">
                  Capacity Building
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#62a456]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-black text-[20px] text-[#4153a5] mb-3">
                  Why Volunteer with UEO?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#62a456] mt-1">
                      •
                    </span>
                    <span>
                      Make a real difference in climate action
                      and youth empowerment
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#62a456] mt-1">
                      •
                    </span>
                    <span>
                      Experience authentic Malawian culture and
                      community life
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#62a456] mt-1">
                      •
                    </span>
                    <span>
                      Develop cross-cultural competencies and
                      global perspectives
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#62a456] mt-1">
                      •
                    </span>
                    <span>
                      Contribute your unique skills to
                      meaningful projects
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-black text-[20px] text-[#4153a5] mb-3">
                  Volunteer Opportunities
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#62a456] mt-1">
                      •
                    </span>
                    <span>
                      Climate change education and tree planting
                      initiatives
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#62a456] mt-1">
                      •
                    </span>
                    <span>
                      Youth training and mentorship programs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#62a456] mt-1">
                      •
                    </span>
                    <span>
                      Health education and SRHR awareness
                      campaigns
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#62a456] mt-1">
                      •
                    </span>
                    <span>
                      Community development and capacity
                      building
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-700 mb-4">
                Interested in volunteering with us? We welcome
                dedicated individuals who are passionate about
                community development and sustainable change.
              </p>
              <a
                href="mailto:info@umodziempower.org"
                className="inline-block bg-[#62a456] hover:bg-[#528a47] text-white font-black px-8 py-3 rounded-lg transition-colors"
              >
                Contact Us About Volunteering
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[40px] text-center mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start"
              >
                <div className="bg-[#4153a5] text-white font-black text-[24px] px-6 py-3 rounded-lg flex-shrink-0">
                  {item.year}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                  <p className="text-gray-700 text-[18px] leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[40px] text-center mb-12">
            Core Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#4153a5] text-white font-black text-[24px] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-['Inter:Black',sans-serif] font-black text-[24px] mb-3">
                      {objective.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 md:py-24 bg-[#4153a5] text-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[40px] text-center mb-6">
            Our Partners
          </h2>
          <p className="text-[20px] text-center mb-12 max-w-[800px] mx-auto">
            We thrive through strategic partnerships that drive
            our programs' success through capacity building,
            financial support, and knowledge sharing.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl w-[200px] h-[160px] flex items-center justify-center relative"
                title={partner.name}
              >
                <PartnerLogo name={partner.name} icon={partner.icon} color={partner.color} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goal Statement */}
      <section className="py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-4 md:px-8 text-center">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[40px] mb-6">
            Our Goal
          </h2>
          <p className="text-gray-700 text-[22px] leading-relaxed">
            To empower youth and communities with access to the
            skills, knowledge, and opportunities needed in WASH,
            climate action, and sustainable development,
            enabling them to lead meaningful, inclusive, and
            lasting change.
          </p>
        </div>
      </section>
    </div>
  );
}
