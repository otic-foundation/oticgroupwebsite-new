import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen noise-overlay bg-[#f7f8fb] dark:bg-[#050914] transition-colors">
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
