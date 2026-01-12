import { useEffect, useRef } from 'react';

// Import partner logos
import w3schools from '@/assets/partners/w3schools.jpeg';
import acwj from '@/assets/partners/acwj-new.jpeg';
import datamine from '@/assets/partners/datamine-new.jpeg';
import usafi from '@/assets/partners/usafi.jpeg';
import uict from '@/assets/partners/uict.jpeg';
import ecobank from '@/assets/partners/ecobank.png';
import nita from '@/assets/partners/nita.png';
import ucc from '@/assets/partners/ucc.png';
import ministryIct from '@/assets/partners/ministry-ict.png';
import isaca from '@/assets/partners/isaca.png';
import kyambogo from '@/assets/partners/kyambogo.png';
import centenary from '@/assets/partners/centenary.png';

const partners = [
  { name: 'W3Schools', logo: w3schools },
  { name: 'ACWJ', logo: acwj },
  { name: 'Datamine', logo: datamine },
  { name: 'USAFI', logo: usafi },
  { name: 'UICT', logo: uict },
  { name: 'Ecobank', logo: ecobank },
  { name: 'NITA', logo: nita },
  { name: 'UCC', logo: ucc },
  { name: 'Ministry of ICT', logo: ministryIct },
  { name: 'ISACA', logo: isaca },
  { name: 'Kyambogo University', logo: kyambogo },
  { name: 'Centenary Bank', logo: centenary },
];

const PartnerCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 1;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-8 md:gap-12 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Duplicate the logos for seamless infinite scroll */}
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center p-2 bg-white rounded-lg"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerCarousel;
