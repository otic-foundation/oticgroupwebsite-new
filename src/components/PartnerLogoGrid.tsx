// Import partner logos
import innovationHub from '@/assets/partners/innovation-hub.png';
import ministryIct from '@/assets/partners/ministry-ict.png';
import americanCenter from '@/assets/partners/american-center.jpeg';
import w3schools from '@/assets/partners/w3schools.jpeg';
import acwj from '@/assets/partners/acwj-new.jpeg';
import datamine from '@/assets/partners/datamine-new.jpeg';
import usafi from '@/assets/partners/usafi.jpeg';
import uict from '@/assets/partners/uict.jpeg';
import ecobank from '@/assets/partners/ecobank.png';
import nita from '@/assets/partners/nita.png';
import ucc from '@/assets/partners/ucc.png';
import isaca from '@/assets/partners/isaca.png';
import centenary from '@/assets/partners/centenary.png';

const partners = [
  { name: 'National ICT Innovation Hub', logo: innovationHub },
  { name: 'Ministry of ICT & National Guidance', logo: ministryIct, large: true },
  { name: 'American Center Kampala', logo: americanCenter },
  { name: 'W3Schools', logo: w3schools },
  { name: 'ACWJ', logo: acwj },
  { name: 'Datamine', logo: datamine },
  { name: 'USAFI', logo: usafi },
  { name: 'UICT', logo: uict },
  { name: 'Ecobank', logo: ecobank },
  { name: 'NITA', logo: nita },
  { name: 'UCC', logo: ucc },
  { name: 'ISACA', logo: isaca },
  { name: 'Centenary Bank', logo: centenary },
];

const PartnerLogoGrid = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 items-center justify-items-center">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className={`flex items-center justify-center p-3 md:p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${
            partner.large ? 'col-span-2 w-full h-28 md:h-36' : 'w-full h-20 md:h-24'
          }`}
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default PartnerLogoGrid;
