import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ResearchSection from '@/components/ResearchSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ResearchSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
