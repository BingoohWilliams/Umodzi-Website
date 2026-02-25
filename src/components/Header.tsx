import imgUmodziLogo from "figma:asset/5eb848577dd53b6684eb460cbae72198e831cdd4.png";
import { Heart } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[123px] py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="h-[60px] w-[60px] md:h-[70px] md:w-[70px] rounded-full overflow-hidden flex-shrink-0">
              <img 
                alt="Umodzi Empowerment Organization Logo" 
                className="w-full h-full object-cover" 
                src={imgUmodziLogo} 
              />
            </div>
            <span className="font-['Inter:Black',sans-serif] font-black text-[#4153a5] text-[20px] md:text-[28px]">
              UMODZI
            </span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            <button
              onClick={() => onNavigate('about')}
              className={`font-medium text-[15px] lg:text-[16px] transition-colors ${
                currentPage === 'about' ? 'text-[#4153a5] font-semibold' : 'text-gray-700 hover:text-[#4153a5]'
              }`}
            >
              About
            </button>
            <button
              onClick={() => onNavigate('impact')}
              className={`font-medium text-[15px] lg:text-[16px] transition-colors ${
                currentPage === 'impact' ? 'text-[#4153a5] font-semibold' : 'text-gray-700 hover:text-[#4153a5]'
              }`}
            >
              Impact
            </button>
            <button
              onClick={() => onNavigate('stories')}
              className={`font-medium text-[15px] lg:text-[16px] transition-colors ${
                currentPage === 'stories' ? 'text-[#4153a5] font-semibold' : 'text-gray-700 hover:text-[#4153a5]'
              }`}
            >
              Stories
            </button>
            <button
              onClick={() => onNavigate('news')}
              className={`font-medium text-[15px] lg:text-[16px] transition-colors ${
                currentPage === 'news' ? 'text-[#4153a5] font-semibold' : 'text-gray-700 hover:text-[#4153a5]'
              }`}
            >
              News
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`font-medium text-[15px] lg:text-[16px] transition-colors ${
                currentPage === 'contact' ? 'text-[#4153a5] font-semibold' : 'text-gray-700 hover:text-[#4153a5]'
              }`}
            >
              Contact
            </button>
            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#62a456] hover:bg-[#528a47] text-white px-5 py-2.5 rounded-lg font-semibold text-[15px] transition-all shadow-sm hover:shadow-md"
            >
              <Heart className="w-4 h-4" fill="currentColor" />
              Donate
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu?.classList.toggle('hidden');
            }}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav id="mobile-menu" className="hidden md:hidden mt-4 pb-4 flex flex-col gap-3">
          <button
            onClick={() => onNavigate('about')}
            className={`font-medium text-[16px] text-left py-2 transition-colors ${
              currentPage === 'about' ? 'text-[#4153a5] font-semibold' : 'text-gray-700'
            }`}
          >
            About
          </button>
          <button
            onClick={() => onNavigate('impact')}
            className={`font-medium text-[16px] text-left py-2 transition-colors ${
              currentPage === 'impact' ? 'text-[#4153a5] font-semibold' : 'text-gray-700'
            }`}
          >
            Impact
          </button>
          <button
            onClick={() => onNavigate('stories')}
            className={`font-medium text-[16px] text-left py-2 transition-colors ${
              currentPage === 'stories' ? 'text-[#4153a5] font-semibold' : 'text-gray-700'
            }`}
          >
            Stories
          </button>
          <button
            onClick={() => onNavigate('news')}
            className={`font-medium text-[16px] text-left py-2 transition-colors ${
              currentPage === 'news' ? 'text-[#4153a5] font-semibold' : 'text-gray-700'
            }`}
          >
            News
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`font-medium text-[16px] text-left py-2 transition-colors ${
              currentPage === 'contact' ? 'text-[#4153a5] font-semibold' : 'text-gray-700'
            }`}
          >
            Contact
          </button>
          <a
            href="https://www.paypal.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#62a456] hover:bg-[#528a47] text-white px-6 py-3 rounded-lg font-semibold text-[16px] transition-colors shadow-sm mt-2"
          >
            <Heart className="w-4 h-4" fill="currentColor" />
            Donate
          </a>
        </nav>
      </div>
    </header>
  );
}
