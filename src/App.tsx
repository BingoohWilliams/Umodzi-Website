import { useState } from 'react';
import { Header } from './components/Header';
import { NewsTicker } from './components/NewsTicker';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ImpactPage } from './components/ImpactPage';
import { StoriesPage } from './components/StoriesPage';
import { NewsPage } from './components/NewsPage';
import { ContactPage } from './components/ContactPage';

type Page = 'home' | 'about' | 'impact' | 'stories' | 'news' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <NewsTicker />
      
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'impact' && <ImpactPage />}
        {currentPage === 'stories' && <StoriesPage onNavigate={handleNavigate} />}
        {currentPage === 'news' && <NewsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
