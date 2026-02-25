import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface FocusAreasSectionProps {
  focusAreas: any[];
  isClimateModalOpen: boolean;
  setIsClimateModalOpen: (open: boolean) => void;
  isUpkeepModalOpen: boolean;
  setIsUpkeepModalOpen: (open: boolean) => void;
  isOrphanageModalOpen: boolean;
  setIsOrphanageModalOpen: (open: boolean) => void;
  isSRHRModalOpen: boolean;
  setIsSRHRModalOpen: (open: boolean) => void;
  isWashModalOpen: boolean;
  setIsWashModalOpen: (open: boolean) => void;
  climateImage1: string;
  climateImage2: string;
  washImage1: string;
  washImage2: string;
  washImage3: string;
  srhrImage1: string;
  srhrImage2: string;
  srhrImage3: string;
  mzuzuUniversity: string;
  luanarUniversity: string;
  domasi: string;
  mubas: string;
  uniMalawi: string;
  comHeathSciences: string;
  mulunguzi: string;
}

export function FocusAreasSection(props: FocusAreasSectionProps) {
  const focusRef = useRef(null);
  const focusInView = useInView(focusRef, { once: true, margin: "-100px" });

  const {
    focusAreas,
    isClimateModalOpen,
    setIsClimateModalOpen,
    isUpkeepModalOpen,
    setIsUpkeepModalOpen,
    isOrphanageModalOpen,
    setIsOrphanageModalOpen,
    isSRHRModalOpen,
    setIsSRHRModalOpen,
    isWashModalOpen,
    setIsWashModalOpen,
    climateImage1,
    climateImage2,
    washImage1,
    washImage2,
    washImage3,
    srhrImage1,
    srhrImage2,
    srhrImage3,
    mzuzuUniversity,
    luanarUniversity,
    domasi,
    mubas,
    uniMalawi,
    comHeathSciences,
    mulunguzi,
  } = props;

  return (
    <section ref={focusRef} className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* BBC-style animated accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={focusInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 h-1 bg-[#62a456] w-full origin-left"
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={focusInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[40px] text-center mb-12"
        >
          What We Do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0, scale: 0.9 }}
              animate={focusInView ? { y: 0, opacity: 1, scale: 1 } : { y: 60, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4153a5]/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-['Inter:Black',sans-serif] font-black text-[24px] text-[#4153a5] mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {area.description}
                </p>
                {(index === 0 || index === 1 || index === 2 || index === 3 || index === 4) && (
                  <Dialog
                    open={index === 0 ? isClimateModalOpen : index === 1 ? isUpkeepModalOpen : index === 2 ? isOrphanageModalOpen : index === 3 ? isSRHRModalOpen : isWashModalOpen}
                    onOpenChange={index === 0 ? setIsClimateModalOpen : index === 1 ? setIsUpkeepModalOpen : index === 2 ? setIsOrphanageModalOpen : index === 3 ? setIsSRHRModalOpen : setIsWashModalOpen}
                  >
                    <DialogTrigger asChild>
                      <button className="bg-[#62a456] hover:bg-[#528a47] text-white px-4 py-2 rounded-md transition-all hover:scale-105 font-bold">
                        Learn More
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      {index === 0 ? (
                        <>
                          <DialogHeader>
                            <DialogTitle className="text-[28px] text-[#4153a5] font-['Inter:Black',sans-serif] font-black">
                              Climate Champions Project
                            </DialogTitle>
                            <DialogDescription className="text-gray-600">
                              Comprehensive information about our flagship climate change adaptation project in Kasungu District
                            </DialogDescription>
                          </DialogHeader>

                          <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full grid-cols-4">
                              <TabsTrigger value="overview">Overview</TabsTrigger>
                              <TabsTrigger value="pillars">Pillars</TabsTrigger>
                              <TabsTrigger value="results">Results</TabsTrigger>
                              <TabsTrigger value="details">Details</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="space-y-4 mt-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <img
                                  src={climateImage1}
                                  alt="Youth participating in tree planting activities"
                                  className="w-full h-64 object-cover rounded-lg"
                                />
                                <img
                                  src={climateImage2}
                                  alt="Community members working on climate adaptation seedlings"
                                  className="w-full h-64 object-cover rounded-lg"
                                />
                              </div>

                              <div>
                                <h3 className="text-[20px] font-bold text-[#4153a5] mb-2">Introduction</h3>
                                <p className="text-gray-700 leading-relaxed">
                                  Malawi, a landlocked country in southeastern Africa, struggles with profound challenges stemming
                                  from the far-reaching effects of climate change. The country experiences recurring extreme weather
                                  and climate events, such as droughts, floods, and cyclones, which severely impact agriculture, food
                                  security, and access to basic services.
                                </p>
                                <p className="text-gray-700 leading-relaxed mt-3">
                                  Kasungu district represents a rural setting where climate impacts and socio-economic vulnerabilities
                                  are more pronounced. The district relies heavily on rain-fed agriculture, making it susceptible to
                                  climate variability and extreme weather events. Community members—particularly adolescents, youth,
                                  girls, and women—are especially vulnerable to climate change risks and impacts.
                                </p>
                              </div>

                              <div>
                                <h3 className="text-[20px] font-bold text-[#4153a5] mb-2">Project Justification</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                  While the Malawian government has implemented important policy instruments including the National
                                  Climate Change Management Policy (NCCMP), the National Adaptation Plan (NAP Framework), and updated
                                  Nationally Determined Contributions (NDCs), significant gaps still exist:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                  <li>Unequal access to resources and decision-making spaces</li>
                                  <li>Limited active involvement of young women and youth in climate change adaptation efforts</li>
                                  <li>Inequalities in access to education, decision-making, and economic opportunities accelerated by gender norms</li>
                                  <li>Limited internet penetration hampering access to online climate change resources, especially in rural areas</li>
                                  <li>Limited access to localized and inclusive climate change information</li>
                                  <li>Lack of awareness on how to interpret and use climate information for adaptation strategies and policy discourse</li>
                                </ul>
                              </div>

                              <div>
                                <h3 className="text-[20px] font-bold text-[#4153a5] mb-2">Project Objectives</h3>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                  <strong>Main Objective:</strong> Improve knowledge and awareness of climate risks and adaptation
                                  measures among vulnerable populations.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                  <strong>Specific Objective:</strong> To enhance the understanding of adolescents, youth, communities,
                                  and local and district-level authorities on climate risks, access and utilization of climate risk
                                  information, adaptation plans development, and contribution to policy discourses.
                                </p>
                              </div>
                            </TabsContent>

                            <TabsContent value="pillars" className="space-y-4 mt-4">
                              <div>
                                <h3 className="text-[20px] font-bold text-[#4153a5] mb-2">1. Knowledge Strengthening</h3>
                                <p className="text-gray-700 leading-relaxed">
                                  Tailored climate change adaptation education and awareness programs implemented to address the
                                  specific needs of adolescents and youth groups, promoting active participation of girls and women
                                  in climate action and influencing. Community leaders and parents undergo intensive climate change
                                  and gender equality sessions to broaden impact.
                                </p>
                              </div>

                              <div>
                                <h3 className="text-[20px] font-bold text-[#4153a5] mb-2">2. Access to Climate Information</h3>
                                <p className="text-gray-700 leading-relaxed">
                                  The project uses innovative tech solutions to bridge climate information gaps by developing a
                                  gender-responsive, youth-friendly web app co-created with adolescents and youth. This app shares
                                  localized climate data, connecting it to personal stories and successful adaptation approaches.
                                </p>
                              </div>

                              <div>
                                <h3 className="text-[20px] font-bold text-[#4153a5] mb-2">3. Advocacy and Influencing</h3>
                                <p className="text-gray-700 leading-relaxed">
                                  Capacitate adolescents and youth with communications, advocacy, and influencing skills to enable
                                  them to participate meaningfully in climate policy discussions and decision-making processes at
                                  community, district, and national levels.
                                </p>
                              </div>
                            </TabsContent>

                            <TabsContent value="results" className="space-y-4 mt-4">
                              <div>
                                <h3 className="text-[18px] font-bold text-[#4153a5] mb-2">Result 1: Knowledge Enhancement</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                  Adolescents and youth, particularly girls and young women, increase knowledge on climate change
                                  risk, adaptation strategies, and sustainable resource management.
                                </p>
                                <p className="text-gray-700 font-semibold mb-2">Key Activities:</p>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                                  <li>Conduct assessment of existing knowledge and needs among target groups</li>
                                  <li>Support review and finalization of tailored training curriculum</li>
                                  <li>Training of Trainers (ToT) for youth groups and local authorities</li>
                                  <li>Conduct peer-to-peer learning sessions</li>
                                  <li>Organize community-level learning sessions for leaders and caregivers</li>
                                </ul>
                              </div>

                              <div>
                                <h3 className="text-[18px] font-bold text-[#4153a5] mb-2">Result 2: Co-Created Web Application</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                  Adolescents, youth, and project partners co-create a gender-responsive and youth-friendly web
                                  application and information materials on climate adaptation.
                                </p>
                                <p className="text-gray-700 font-semibold mb-2">Key Activities:</p>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                                  <li>High resolution climate data collection and processing for project target regions</li>
                                  <li>Engage communities in mapping and analyzing potential climate-related changes</li>
                                  <li>Organize co-creation workshops for web app design</li>
                                  <li>Develop gender-responsive and youth-friendly web application</li>
                                  <li>Populate app with localized climate data, risks, adaptation strategies, and stories</li>
                                  <li>Conduct user testing and gather feedback for continuous improvement</li>
                                  <li>Develop and disseminate child-friendly information materials</li>
                                </ul>
                              </div>

                              <div>
                                <h3 className="text-[18px] font-bold text-[#4153a5] mb-2">Result 3: Advocacy Participation</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                  Adolescents and youth, particularly girls and young women, participate in climate change adaptation
                                  advocacy and influencing interventions at community, district, and national levels.
                                </p>
                                <p className="text-gray-700 font-semibold mb-2">Key Activities:</p>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                                  <li>Training of Trainers in gender equality, child rights, communication, advocacy, and influencing</li>
                                  <li>Mobilize youth groups to organize community-level awareness campaigns</li>
                                  <li>Organize influencing workshops at district level to connect youth to decision-makers</li>
                                  <li>Train Local and District Authorities on gender equality, inclusion, and youth participation</li>
                                  <li>Support youth-led groups to develop content for awareness campaigns</li>
                                  <li>Organize influencing workshop at national level to connect youth to policymakers</li>
                                  <li>Provide organizational capacity building to youth-led organizations</li>
                                </ul>
                              </div>
                            </TabsContent>

                            <TabsContent value="details" className="space-y-4 mt-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="font-bold text-[#4153a5] mb-2">Donor</h4>
                                  <p className="text-gray-700">Flemish Government (Flanders)</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="font-bold text-[#4153a5] mb-2">Duration</h4>
                                  <p className="text-gray-700">3 Years (March 1, 2024 – February 28, 2027)</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="font-bold text-[#4153a5] mb-2">Budget</h4>
                                  <p className="text-gray-700">€578,392.95</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="font-bold text-[#4153a5] mb-2">Reach</h4>
                                  <p className="text-gray-700">60,000 people (ages 10-35)</p>
                                </div>
                              </div>

                              <div>
                                <h3 className="text-[18px] font-bold text-[#4153a5] mb-2">Target Areas</h3>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                  Six Traditional Authorities in Kasungu District:
                                </p>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                  <li>T/A Mnyanja</li>
                                  <li>T/A Santhe</li>
                                  <li>T/A Chisemphere</li>
                                  <li>T/A Chisinga</li>
                                  <li>T/A Chisikwa</li>
                                  <li>T/A Kaluluma</li>
                                </ul>
                              </div>

                              <div>
                                <h3 className="text-[18px] font-bold text-[#4153a5] mb-2">Implementing Partners</h3>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                  <li>Plan International Malawi</li>
                                  <li>Plan International Belgium</li>
                                  <li>Nazka Mapps</li>
                                  <li>Climate Scale</li>
                                  <li>Umodzi Empowerment Organization (Youth-Led Partner)</li>
                                  <li>Nzotheka Youth Led Organization</li>
                                </ul>
                              </div>

                              <div>
                                <h3 className="text-[18px] font-bold text-[#4153a5] mb-2">Government Stakeholders</h3>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                  <li>Environmental District Officer (EDO)</li>
                                  <li>District Youth Officer (DYO)</li>
                                  <li>District Forestry Officer (DFO)</li>
                                  <li>District Education Manager (DEM)</li>
                                </ul>
                              </div>

                              <div>
                                <h3 className="text-[18px] font-bold text-[#4153a5] mb-2">Stakeholder Roles</h3>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                  <li>Joint Planning and provision of guidance</li>
                                  <li>Development of training content</li>
                                  <li>Facilitation of trainings</li>
                                  <li>Joint Monitoring</li>
                                </ul>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </>
                      ) : index === 1 ? (
                        <>
                          <DialogHeader>
                            <DialogTitle className="text-[28px] text-[#4153a5] font-['Inter:Black',sans-serif] font-black">
                              Student Upkeep Support Program
                            </DialogTitle>
                            <DialogDescription className="text-gray-600">
                              Empowering vulnerable university students across Malawi to build sustainable futures
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-6 mt-4">
                            <div className="bg-[#62a456] text-white p-6 rounded-lg">
                              <h3 className="text-[24px] font-bold mb-3">📣 Big News for Malawi's Youth!</h3>
                              <p className="text-lg">
                                We're thrilled to announce that our donor has responded to the heartfelt plea of young people across Malawi.
                                The Student Upkeep Support Program is now officially launching — and it will cover all public universities nationwide!
                              </p>
                            </div>

                            <div>
                              <h3 className="text-[22px] font-bold text-[#4153a5] mb-3">Participating Universities</h3>
                              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                                  <div className="flex justify-center items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <img src={mzuzuUniversity} alt="Mzuzu University" className="w-full h-auto max-h-24 object-contain" />
                                  </div>
                                  <div className="flex justify-center items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <img src={luanarUniversity} alt="LUANAR" className="w-full h-auto max-h-24 object-contain" />
                                  </div>
                                  <div className="flex justify-center items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <img src={domasi} alt="Domasi College of Education" className="w-full h-auto max-h-24 object-contain" />
                                  </div>
                                  <div className="flex justify-center items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <img src={mubas} alt="MUBAS" className="w-full h-auto max-h-24 object-contain" />
                                  </div>
                                  <div className="flex justify-center items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow md:col-span-1">
                                    <img src={uniMalawi} alt="University of Malawi" className="w-full h-auto max-h-24 object-contain" />
                                  </div>
                                  <div className="flex justify-center items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <img src={comHeathSciences} alt="College of Health Sciences" className="w-full h-auto max-h-24 object-contain" />
                                  </div>
                                  <div className="flex justify-center items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                                    <img src={mulunguzi} alt="Mulunguzi University" className="w-full h-auto max-h-24 object-contain" />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-gray-50 p-5 rounded-lg">
                                <h4 className="font-bold text-[#4153a5] mb-2 text-lg">Duration</h4>
                                <p className="text-gray-700">3-year project (2026–2029)</p>
                              </div>
                              <div className="bg-gray-50 p-5 rounded-lg">
                                <h4 className="font-bold text-[#4153a5] mb-2 text-lg">Coverage</h4>
                                <p className="text-gray-700">All public universities across Malawi</p>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-[22px] font-bold text-[#4153a5] mb-3">Program Benefits</h3>
                              <div className="space-y-3">
                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                  <span className="text-[#62a456] text-xl font-bold">✅</span>
                                  <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Monthly Upkeep Allowance</h4>
                                    <p className="text-gray-700">MK 50,000 per month to support your daily needs</p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                  <span className="text-[#62a456] text-xl font-bold">✅</span>
                                  <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Business & Financial Literacy Training</h4>
                                    <p className="text-gray-700">Learn essential skills to manage finances and start your own business</p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                  <span className="text-[#62a456] text-xl font-bold">✅</span>
                                  <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Mentorship and Career Guidance</h4>
                                    <p className="text-gray-700">Get personalized support to plan your career path</p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 bg-[#4153a5] text-white p-4 rounded-lg">
                                  <span className="text-[#62a456] text-xl font-bold">💡</span>
                                  <div>
                                    <h4 className="font-bold mb-1">Business Startup Grants</h4>
                                    <p>After one year of receiving support, selected youth will receive capital to launch their own income-generating ventures!</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-[22px] font-bold text-[#4153a5] mb-3">Eligible Students</h3>
                              <div className="bg-gray-50 p-5 rounded-lg">
                                <p className="text-gray-700 text-lg">
                                  📌 All vulnerable students enrolled at public universities across Malawi
                                </p>
                              </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg">
                              <p className="text-gray-800 font-semibold mb-2">⚠️ Important Message</p>
                              <p className="text-gray-700">
                                This is a life-changing opportunity. Let's use it wisely. These funds are meant to uplift your future —
                                not for alcohol or misuse. Let's rise together. Let's build a future.
                              </p>
                            </div>
                          </div>
                        </>
                      ) : index === 2 ? (
                        <>
                          <DialogHeader>
                            <DialogTitle className="text-[28px] text-[#4153a5] font-['Inter:Black',sans-serif] font-black">
                              Mzuzu Orphanage Center
                            </DialogTitle>
                            <DialogDescription className="text-gray-600">
                              Providing a safe haven, quality education, and healthcare for vulnerable children
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-4 mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-bold text-[#4153a5] mb-2">Current Population</h4>
                                <p className="text-gray-700">50 orphans and growing</p>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-bold text-[#4153a5] mb-2">Partner</h4>
                                <p className="text-gray-700">Malawi Government</p>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-[20px] font-bold text-[#4153a5] mb-3">What We Provide</h3>
                              <div className="space-y-3">
                                <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                                  <span className="text-[#62a456] text-lg font-bold">✓</span>
                                  <p className="text-gray-700">Quality education in a nurturing environment</p>
                                </div>
                                <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                                  <span className="text-[#62a456] text-lg font-bold">✓</span>
                                  <p className="text-gray-700">Healthcare services and regular check-ups</p>
                                </div>
                                <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                                  <span className="text-[#62a456] text-lg font-bold">✓</span>
                                  <p className="text-gray-700">Safe shelter and nutritious meals</p>
                                </div>
                                <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                                  <span className="text-[#62a456] text-lg font-bold">✓</span>
                                  <p className="text-gray-700">Psychosocial support and counseling</p>
                                </div>
                                <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                                  <span className="text-[#62a456] text-lg font-bold">✓</span>
                                  <p className="text-gray-700">Life skills training and mentorship</p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-[#4153a5] text-white p-5 rounded-lg">
                              <h3 className="text-[20px] font-bold mb-3">Our Mission for These Children</h3>
                              <p className="leading-relaxed">
                                To provide a loving, stable environment where vulnerable children can heal, grow, and develop the skills
                                they need to build successful futures. We're committed to not just meeting their basic needs, but empowering
                                them to reach their full potential.
                              </p>
                            </div>
                          </div>
                        </>
                      ) : index === 3 ? (
                        <>
                          <DialogHeader>
                            <DialogTitle className="text-[28px] text-[#4153a5] font-['Inter:Black',sans-serif] font-black">
                              Child Protection & SRHR
                            </DialogTitle>
                            <DialogDescription className="text-gray-600">
                              Promoting child protection and sexual reproductive health rights among youth in Malawi
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-4 mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                              <img
                                src={srhrImage1}
                                alt="Youth SRHR awareness sessions"
                                className="w-full h-48 object-cover rounded-lg"
                              />
                              <img
                                src={srhrImage2}
                                alt="Community health education"
                                className="w-full h-48 object-cover rounded-lg"
                              />
                              <img
                                src={srhrImage3}
                                alt="Youth engagement activities"
                                className="w-full h-48 object-cover rounded-lg"
                              />
                            </div>

                            <div>
                              <h3 className="text-[20px] font-bold text-[#4153a5] mb-3">Our Approach</h3>
                              <p className="text-gray-700 leading-relaxed mb-3">
                                In partnership with Plan International and local organizations, we work to protect children and promote
                                sexual and reproductive health rights awareness among young people across Kasungu and surrounding districts.
                              </p>
                            </div>

                            <div>
                              <h3 className="text-[20px] font-bold text-[#4153a5] mb-3">Key Focus Areas</h3>
                              <div className="space-y-3">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="font-bold text-gray-900 mb-2">Child Protection</h4>
                                  <p className="text-gray-700">
                                    Working with communities to prevent child abuse, exploitation, and harmful practices while creating
                                    safe spaces for children to grow and thrive.
                                  </p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="font-bold text-gray-900 mb-2">SRHR Education</h4>
                                  <p className="text-gray-700">
                                    Providing comprehensive, age-appropriate education on sexual and reproductive health, helping young
                                    people make informed decisions about their bodies and futures.
                                  </p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="font-bold text-gray-900 mb-2">Youth Empowerment</h4>
                                  <p className="text-gray-700">
                                    Training youth champions to become advocates for their peers, creating a youth-led movement for
                                    health and rights in their communities.
                                  </p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h4 className="font-bold text-gray-900 mb-2">Community Engagement</h4>
                                  <p className="text-gray-700">
                                    Engaging parents, teachers, and community leaders to create supportive environments that protect
                                    children and promote healthy behaviors.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-[#62a456] text-white p-5 rounded-lg">
                              <h3 className="text-[20px] font-bold mb-3">Impact</h3>
                              <p className="leading-relaxed">
                                Through awareness campaigns, peer education, and community dialogues, we're helping to break down barriers
                                and stigma while empowering young people with the knowledge and resources they need to protect themselves
                                and make healthy choices.
                              </p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <DialogHeader>
                            <DialogTitle className="text-[28px] text-[#4153a5] font-['Inter:Black',sans-serif] font-black">
                              WASH & Clean Water
                            </DialogTitle>
                            <DialogDescription className="text-gray-600">
                              Providing access to clean water and sanitation services while promoting environmental protection
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-4 mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                              <img
                                src={washImage1}
                                alt="Water point construction"
                                className="w-full h-48 object-cover rounded-lg"
                              />
                              <img
                                src={washImage2}
                                alt="Community hygiene education"
                                className="w-full h-48 object-cover rounded-lg"
                              />
                              <img
                                src={washImage3}
                                alt="Sanitation facilities"
                                className="w-full h-48 object-cover rounded-lg"
                              />
                            </div>

                            <div>
                              <h3 className="text-[20px] font-bold text-[#4153a5] mb-3">Our Mission</h3>
                              <p className="text-gray-700 leading-relaxed">
                                Access to clean water and proper sanitation is a fundamental human right. Through our WASH initiatives,
                                we're working to ensure communities in Kasungu have sustainable access to safe water, improved sanitation,
                                and proper hygiene practices.
                              </p>
                            </div>

                            <div>
                              <h3 className="text-[20px] font-bold text-[#4153a5] mb-3">What We Do</h3>
                              <div className="space-y-3">
                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                  <span className="text-[#62a456] text-xl font-bold">💧</span>
                                  <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Water Point Construction</h4>
                                    <p className="text-gray-700">
                                      Building and rehabilitating boreholes and water points to provide reliable access to clean water
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                  <span className="text-[#62a456] text-xl font-bold">🚽</span>
                                  <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Sanitation Facilities</h4>
                                    <p className="text-gray-700">
                                      Constructing latrines and promoting improved sanitation practices in schools and communities
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                  <span className="text-[#62a456] text-xl font-bold">🧼</span>
                                  <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Hygiene Promotion</h4>
                                    <p className="text-gray-700">
                                      Conducting hygiene education sessions focusing on handwashing, menstrual hygiene, and disease prevention
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                                  <span className="text-[#62a456] text-xl font-bold">🌱</span>
                                  <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Environmental Protection</h4>
                                    <p className="text-gray-700">
                                      Implementing climate-smart interventions to protect water sources and promote sustainable water management
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-[#4153a5] text-white p-5 rounded-lg">
                              <h3 className="text-[20px] font-bold mb-3">Community Impact</h3>
                              <p className="leading-relaxed">
                                By improving access to WASH services, we're not only improving public health but also empowering communities—
                                especially women and girls—who often bear the burden of water collection. Clean water and proper sanitation
                                mean children can stay in school, families stay healthier, and communities can thrive.
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
