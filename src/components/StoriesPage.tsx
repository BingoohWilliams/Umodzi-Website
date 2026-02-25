import { Quote } from 'lucide-react';
import climateChampionImage from 'figma:asset/e1857a897f2938d854aa3f4b8532787901925f97.png';
import cleanWaterImage from 'figma:asset/a64b8a8babfbbec849d3de14673bdc975f12570c.png';
import ecoBlocksImage from 'figma:asset/b00aca5b3f438085e28ee6b498b2c83a45deeb19.png';
import kuuwaImage from 'figma:asset/f255a9612c3ca8dd46b90a11b43aa0df1c1d882b.png';
import nurserySchoolImage from 'figma:asset/c0b5ddbd221da75a30b4fc1a228160e82c29a1bb.png';

interface StoriesPageProps {
  onNavigate: (page: string) => void;
}

export function StoriesPage({ onNavigate }: StoriesPageProps) {
  const stories = [
    {
      title: "Youth Leadership Through KUUWA",
      category: "Youth Empowerment",
      excerpt: "How our partnership with Plan International transformed young community members into leaders and trainers, creating sustainable impact at the grassroots level.",
      image: kuuwaImage,
      quote: "The training I received through KUUWA changed my life. Now I'm helping other young people in my community understand their rights and opportunities.",
      author: "Community Youth Trainer"
    },
    {
      title: "Climate Champions Making a Difference",
      category: "Climate Action",
      excerpt: "Young people in Kasungu are leading the fight against climate change through innovative tech solutions and community education programs.",
      image: climateChampionImage,
      quote: "Learning about climate risks has empowered us to take action in our communities. We're planting trees and teaching others about adaptation.",
      author: "Climate Champion Participant"
    },
    {
      title: "Building Futures with Eco-Friendly Blocks",
      category: "Economic Empowerment",
      excerpt: "Umodzi E-Blocks Company is creating jobs for youth while protecting the environment through sustainable construction materials.",
      image: ecoBlocksImage,
      quote: "I learned valuable skills in block making and now I have a stable income. This work is helping both my family and the environment.",
      author: "E-Blocks Employee"
    },
    {
      title: "Early Education, Bright Futures",
      category: "Education",
      excerpt: "Umodzi Nursery School is providing young children in Chatoloma with a strong educational foundation and empowering their parents.",
      image: nurserySchoolImage,
      quote: "The nursery school has been a blessing for our community. Our children are getting quality education close to home.",
      author: "Parent, Chatoloma"
    },
    {
      title: "Clean Water, Healthy Communities",
      category: "WASH",
      excerpt: "Providing access to clean water and sanitation services is transforming health outcomes in rural communities around Kasungu.",
      image: cleanWaterImage,
      quote: "Access to clean water has reduced illness in our village. Our children are healthier and can focus better in school.",
      author: "Community Member"
    },
    {
      title: "Empowering Girls Through SRHR Education",
      category: "Health & Rights",
      excerpt: "Young women are gaining knowledge and confidence to make informed decisions about their health and futures.",
      image: "https://images.unsplash.com/photo-1666280963024-5da21c9be270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZ2lybHMlMjBlZHVjYXRpb24lMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzA3NjQ4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "The SRHR education gave me the knowledge to advocate for myself and help my peers make better choices.",
      author: "Youth Participant"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#4153a5] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h1 className="font-['Inter:Black',sans-serif] font-black text-[48px] md:text-[64px] mb-6">
            Stories of Change
          </h1>
          <p className="text-[20px] md:text-[24px] max-w-[900px] mx-auto leading-relaxed">
            Real stories from real people whose lives have been transformed through 
            Umodzi Empowerment Organization's programs
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-[#62a456] text-white text-[12px] font-black px-3 py-1 rounded-full mb-3">
                    {story.category}
                  </div>
                  <h3 className="font-['Inter:Black',sans-serif] font-black text-[22px] text-[#4153a5] mb-3">
                    {story.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {story.excerpt}
                  </p>
                  {story.quote && (
                    <div className="bg-gray-50 p-4 rounded-lg mt-4 relative">
                      <Quote className="w-6 h-6 text-[#4153a5] opacity-30 absolute top-2 left-2" />
                      <p className="text-gray-700 italic text-[14px] pl-6">
                        "{story.quote}"
                      </p>
                      <p className="text-gray-500 text-[12px] mt-2 pl-6">
                        — {story.author}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[900px] mx-auto px-4 md:px-8 text-center">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[40px] mb-6">
            Creating Lasting Change
          </h2>
          <p className="text-gray-700 text-[20px] leading-relaxed mb-8">
            These stories represent just a fraction of the impact Umodzi Empowerment Organization 
            is making across Kasungu District. Through our commitment to youth empowerment, climate 
            action, child protection, and community development, we're building a brighter future 
            for Malawi—one life at a time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#4153a5] text-[36px] font-black mb-2">
                Communities
              </div>
              <p className="text-gray-600">Empowered through our programs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#62a456] text-[36px] font-black mb-2">
                Youth
              </div>
              <p className="text-gray-600">Trained as leaders and changemakers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#e67e22] text-[36px] font-black mb-2">
                Families
              </div>
              <p className="text-gray-600">Benefiting from sustainable solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[#4153a5] text-white">
        <div className="max-w-[900px] mx-auto px-4 md:px-8 text-center">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[40px] mb-6">
            Be Part of the Story
          </h2>
          <p className="text-[20px] mb-8 leading-relaxed">
            Your support can help us create more success stories like these. 
            Join us in empowering communities across Kasungu District.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-[#62a456] hover:bg-[#528a47] text-white font-['Inter:Black',sans-serif] font-black text-[24px] px-10 py-4 rounded-[24px] shadow-lg transition-colors"
          >
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
}
