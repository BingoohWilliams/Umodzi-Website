import { Mail, Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#2c3e50] text-white py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[123px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div>
            <h3 className="font-['Inter:Black',sans-serif] font-black text-[24px] mb-4">
              UMODZI
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A community-driven, youth-focused NGO dedicated to creating lasting impacts through collaboration in Kasungu, Malawi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Inter:Black',sans-serif] font-black text-[20px] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => onNavigate?.('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('impact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Our Impact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('stories')}
                  className="hover:text-white transition-colors text-left"
                >
                  Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('news')}
                  className="hover:text-white transition-colors text-left"
                >
                  News
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Our Focus */}
          <div>
            <h4 className="font-['Inter:Black',sans-serif] font-black text-[20px] mb-4">
              Our Focus
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => onNavigate?.('impact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Climate Action
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('impact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Child Protection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('impact')}
                  className="hover:text-white transition-colors text-left"
                >
                  WASH Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('impact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Youth Empowerment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('impact')}
                  className="hover:text-white transition-colors text-left"
                >
                  SRHR Education
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('impact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Upkeep Program
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Inter:Black',sans-serif] font-black text-[20px] mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>P.O. Box 55, Nkhamenya, Kasungu, Malawi</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:info@umodziempower.org"
                  className="hover:text-white transition-colors break-all"
                >
                  info@umodziempower.org
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">Office Hours:</p>
                  <p className="text-sm">Mon-Fri: 8:00 AM - 4:30 PM</p>
                  <p className="text-sm">Sat-Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-600 text-center text-gray-400">
          <p>© 2026 Umodzi Empowerment Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
