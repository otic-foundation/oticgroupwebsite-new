import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import webinarFlyer from '@/assets/ums-webinar.jpg';
import ZohoRegistrationModal from './ZohoRegistrationModal';

const WhatsNewSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="relative z-10 py-12 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section heading */}
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8 animate-fade-up">
            <span className="text-foreground">See what's new </span>
            <span className="text-cta">with us</span>
          </h2>

          {/* Featured flyer card */}
          <div className="glass-card-hover rounded-xl overflow-hidden max-w-4xl animate-fade-up-delay-1">
            <div className="md:flex">
              {/* Flyer image */}
              <div className="md:w-3/5 relative overflow-hidden">
                <img
                  src={webinarFlyer}
                  alt="Otic x UMS Webinar - Stop Guessing, Start Acquiring"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info panel */}
              <div className="md:w-2/5 p-6 lg:p-8 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="text-xs uppercase tracking-widest text-cta font-body font-medium">Upcoming Webinar</span>
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-3">
                  Stop Guessing. Start Acquiring.
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-2">
                  Join us to learn how agentic AI is reimagining Customer Growth and Acquisition.
                </p>
                <p className="text-xs text-muted-foreground font-body mb-6">
                  📅 19.02.2026 &nbsp;·&nbsp; 🕐 01:00 PM EAT &nbsp;·&nbsp; 📍 Zoom
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-glow px-6 py-3 rounded-lg text-cta-foreground uppercase text-sm font-medium flex items-center gap-2 group w-fit"
                >
                  Click to Register
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ZohoRegistrationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default WhatsNewSection;
