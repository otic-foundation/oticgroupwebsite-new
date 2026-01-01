import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ResearchSection from '@/components/ResearchSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen noise-overlay">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ResearchSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
