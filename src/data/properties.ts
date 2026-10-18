import { Property } from '../types';
import heroVillaImg from '../assets/images/hero_property_villa_1789448557171.jpg';
import luxuryResidenceImg from '../assets/images/luxury_residence_exterior_1789448571396.jpg';
import commercialPlazaImg from '../assets/images/commercial_plaza_modern_1789448583711.jpg';
import luxuryVillaFacadeImg from '../assets/images/luxury_villa_facade_1792330113684.jpg';
import primePlotImg from '../assets/images/prime_residential_plot_1792330114327.jpg';
import modernCommercialPlazaImg from '../assets/images/modern_commercial_plaza_1792330114921.jpg';
import luxuryInteriorLivingImg from '../assets/images/luxury_interior_living_1792330115035.jpg';

export const PROPERTIES: Property[] = [
  // 1. Residential House (Chenab Nagar) - 10 Marla
  {
    id: 'prop-1',
    title: 'Modern 10 Marla Double-Storey House',
    category: 'Residential',
    location: 'Chenab Nagar',
    areaDetail: 'Near Central Commercial & Family Park',
    purpose: 'For Sale',
    priceDisplay: 'Available on Request',
    priceCategory: '1.5-3.5',
    bedrooms: 4,
    bathrooms: 4,
    area: '10 Marla (35 × 65 ft)',
    featured: true,
    shortDescription: 'Modern double-storey construction featuring 4 en-suite bedrooms, dual TV lounges, contemporary kitchen, car porch, and open terraces.',
    fullDescription: 'Constructed to high structural standards, this 10 Marla double-storey house in Chenab Nagar provides an ideal home for an established family. Ground floor includes a spacious car porch, front green patch, guest drawing room, master bedroom with bath, family lounge, and an imported modular kitchen. The upper level offers three well-lit bedrooms with attached baths, upper lounge, and dual open-air terraces. Clean registry documents ready for direct transfer.',
    image: luxuryVillaFacadeImg,
    gallery: [
      luxuryVillaFacadeImg,
      luxuryInteriorLivingImg,
      heroVillaImg,
      luxuryResidenceImg
    ],
    features: [
      'Dimensions: 35 × 65 ft (10 Marla)',
      '4 Master bedrooms with attached baths',
      'Spacious car porch for SUV',
      'Dual TV lounges & formal drawing room',
      'Imported porcelain tile flooring',
      'Direct ownership registry & verified title'
    ],
    badge: 'House'
  },

  // 2. Residential Plot (Chenab Nagar) - 10 Marla
  {
    id: 'prop-plot-1',
    title: '10 Marla Prime Residential Plot',
    category: 'Plot',
    location: 'Chenab Nagar',
    areaDetail: 'Sector 2, Fully Developed Block',
    purpose: 'For Sale',
    priceDisplay: 'Available on Request',
    priceCategory: '1.5-3.5',
    bedrooms: null,
    bathrooms: null,
    area: '10 Marla Plot (35 × 65 ft)',
    featured: true,
    shortDescription: 'Level ground plot located on a 40-foot wide avenue with immediate construction permission, electricity, and water lines connected.',
    fullDescription: 'A prime 10 Marla residential plot positioned in one of the most serene, well-developed sectors of Chenab Nagar. Ideal for building a custom family residence. The plot is on a 40-foot wide asphalt road with nearby mosque, park, and convenience stores. Clear title registry with immediate physical possession upon deal completion.',
    image: primePlotImg,
    gallery: [
      primePlotImg,
      luxuryVillaFacadeImg,
      heroVillaImg
    ],
    features: [
      'Plot Size: 10 Marla (35 × 65 ft)',
      '40-Foot wide carpeted road front',
      'Water supply, electricity & sewerage active',
      'Immediate physical possession',
      'Peaceful gated neighborhood street',
      'Direct registry transfer via Nasir Real Estate'
    ],
    badge: 'Plot'
  },

  // 3. Residential House (Chiniot) - 1 Kanal
  {
    id: 'prop-2',
    title: 'Luxury 1 Kanal Executive Residence',
    category: 'Residential',
    location: 'Chiniot',
    areaDetail: 'Main Residential Boulevard, Chiniot',
    purpose: 'For Sale',
    priceDisplay: 'Available on Request',
    priceCategory: 'above-3.5',
    bedrooms: 5,
    bathrooms: 6,
    area: '1 Kanal (50 × 90 ft)',
    featured: true,
    shortDescription: 'High-end executive mansion offering 5 luxury en-suite bedrooms, grand double-height foyer, manicured front lawn, and 3-car garage.',
    fullDescription: 'Representing premier architectural craftsmanship in Chiniot, this 1 Kanal custom-built house features solid ash woodwork, grand entrance foyer, imported Spanish sanitary fixtures, dual designer kitchens (main + dirty kitchen), servant quarter with separate access, and an expansive rooftop with sweeping horizon views. An elite residence built with durable brick structure.',
    image: luxuryResidenceImg,
    gallery: [
      luxuryResidenceImg,
      luxuryInteriorLivingImg,
      luxuryVillaFacadeImg,
      heroVillaImg
    ],
    features: [
      'Plot Dimension: 1 Kanal (50 × 90 ft)',
      '5 Master en-suite bedrooms with walk-in closets',
      'Grand double-height foyer with chandelier space',
      '3-Car covered garage and lush front lawn',
      'Commercial grade wiring & water storage',
      'Verified ownership documents'
    ],
    badge: 'Luxury House'
  },

  // 4. Commercial Plot (Chiniot / Faisalabad Road) - 1 Kanal
  {
    id: 'prop-plot-2',
    title: '1 Kanal Commercial Boulevard Plot',
    category: 'Plot',
    location: 'Chiniot',
    areaDetail: 'Main Bypass / Chamber Growth Corridor',
    purpose: 'For Investment',
    priceDisplay: 'Available on Request',
    priceCategory: 'commercial',
    bedrooms: null,
    bathrooms: null,
    area: '1 Kanal Commercial Plot',
    featured: true,
    shortDescription: 'High-visibility corner commercial plot located along the active Chiniot bypass corridor with massive front elevation potential.',
    fullDescription: 'A high-yield commercial investment asset positioned on the bustling Chiniot bypass with heavy inter-city commercial traffic connecting Faisalabad and surrounding districts. Exceptional potential for developing a multi-story commercial plaza, private hospital, corporate bank branch, or showroom complex.',
    image: modernCommercialPlazaImg,
    gallery: [
      modernCommercialPlazaImg,
      primePlotImg,
      commercialPlazaImg
    ],
    features: [
      'Direct main boulevard frontage',
      'Corner location with dual wide-road access',
      'High footfall & commercial vehicular transit',
      'Approved for multi-level commercial construction',
      'Clear institutional ownership documents',
      'Rapid capital growth zone'
    ],
    badge: 'Commercial Plot'
  },

  // 5. Residential House (Chenab Nagar) - 12 Marla
  {
    id: 'prop-3',
    title: 'Contemporary 12 Marla Designer Villa',
    category: 'Residential',
    location: 'Chenab Nagar',
    areaDetail: 'Scenic View Sector, Chenab Nagar',
    purpose: 'For Sale',
    priceDisplay: 'Available on Request',
    priceCategory: '1.5-3.5',
    bedrooms: 4,
    bathrooms: 5,
    area: '12 Marla (40 × 67.5 ft)',
    featured: true,
    shortDescription: 'Custom architectural villa featuring modern glass facade, expansive family lounge, rooftop patio, and premium interior woodwork.',
    fullDescription: 'Designed for discerning buyers seeking contemporary aesthetics in Chenab Nagar. Features floor-to-ceiling double-glazed windows, a serene central light court, separate drawing and dining halls, 4 private en-suite bedrooms, a chef kitchen with granite islands, and roof garden terrace overlooking the surroundings.',
    image: heroVillaImg,
    gallery: [
      heroVillaImg,
      luxuryInteriorLivingImg,
      luxuryVillaFacadeImg,
      luxuryResidenceImg
    ],
    features: [
      'Modern glass front elevation',
      'Corner plot with extra sunlight & ventilation',
      'Open-plan living & formal entertainment spaces',
      'Rooftop recreation patio with panoramic view',
      'Dedicated laundry room & store',
      'Ready for immediate move-in'
    ],
    badge: 'Villa'
  },

  // 6. Residential Plot (Chenab Nagar) - 5 Marla
  {
    id: 'prop-plot-3',
    title: '5 Marla Ready-to-Build Plot',
    category: 'Plot',
    location: 'Chenab Nagar',
    areaDetail: 'Central Residential Sector, Paved Street',
    purpose: 'For Sale',
    priceDisplay: 'Available on Request',
    priceCategory: 'under-1.5',
    bedrooms: null,
    bathrooms: null,
    area: '5 Marla Plot (25 × 45 ft)',
    featured: true,
    shortDescription: 'Ready-to-build 5 Marla residential plot in a peaceful gated street, perfect for immediate home construction with all utilities active.',
    fullDescription: 'A high-demand 5 Marla residential plot located in a peaceful, secure residential pocket of Chenab Nagar. With water, electricity, and drainage lines already active at site, this plot offers the exact standard footprint (25 × 45 ft) for building a modern double-storey 3 or 4 bedroom family residence.',
    image: primePlotImg,
    gallery: [
      primePlotImg,
      luxuryVillaFacadeImg,
      heroVillaImg
    ],
    features: [
      'Plot Dimensions: 25 × 45 ft (Standard 5 Marla)',
      'Underground utility connections active',
      'Paved street with streetlights & security',
      'Close to schools, market, and transport',
      'Immediate construction approval',
      'Direct owner transfer registry'
    ],
    badge: 'Plot'
  },

  // 7. Commercial Plaza (Chiniot)
  {
    id: 'prop-4',
    title: 'Multi-Storey Commercial Plaza',
    category: 'Commercial',
    location: 'Chiniot',
    areaDetail: 'Commercial Corridor / Main Access Road',
    purpose: 'For Investment',
    priceDisplay: 'Available on Request',
    priceCategory: 'commercial',
    bedrooms: null,
    bathrooms: 4,
    area: '1,800 Sq Ft per Floor (4 Levels)',
    featured: true,
    shortDescription: 'High-visibility multi-level commercial plaza situated on a bustling avenue with strong rental yield potential for offices and showrooms.',
    fullDescription: 'A premier commercial property built for corporate tenants, financial institutions, private clinics, or retail displays. Offers expansive glass display frontages, multiple rentable floors, dedicated wide client parking, lift shaft provision, and heavy-duty 3-phase commercial electrical supply.',
    image: commercialPlazaImg,
    gallery: [
      commercialPlazaImg,
      modernCommercialPlazaImg,
      luxuryInteriorLivingImg
    ],
    features: [
      'Prime commercial boulevard visibility',
      'Multiple rentable floors with open floor plans',
      'Dedicated customer & staff parking in front',
      '3-Phase commercial electrical connection',
      'Substantial monthly rental yield potential',
      'Approved municipal commercial building plan'
    ],
    badge: 'Commercial Plaza'
  },

  // 8. Residential House (Chenab Nagar) - 7 Marla
  {
    id: 'prop-5',
    title: '7 Marla Solid Brick Family House',
    category: 'Residential',
    location: 'Chenab Nagar',
    areaDetail: 'Peaceful Residential Block',
    purpose: 'For Sale',
    priceDisplay: 'Available on Request',
    priceCategory: 'under-1.5',
    bedrooms: 3,
    bathrooms: 3,
    area: '7 Marla (30 × 52.5 ft)',
    featured: true,
    shortDescription: 'Comfortable family house built with durable brick masonry, well-ventilated rooms, fitted kitchen, and covered car porch.',
    fullDescription: 'An inviting 7 Marla residence featuring solid foundation and practical floor zoning. Features 3 well-proportioned bedrooms with attached bathrooms, a bright central family lounge, fitted kitchen, utility courtyard, and direct rooftop access with open sky views. Ideal for first-time homebuyers looking for dependable quality in Chenab Nagar.',
    image: luxuryVillaFacadeImg,
    gallery: [
      luxuryVillaFacadeImg,
      luxuryInteriorLivingImg,
      luxuryResidenceImg
    ],
    features: [
      '7 Marla dimension (30 × 52.5 ft)',
      'Solid brick masonry construction',
      'Gas, water & electricity active',
      'Comfortable car porch & side passage',
      'Quiet family neighborhood',
      'Immediate possession on transfer'
    ],
    badge: 'House'
  },

  // 9. Residential Plot (Chenab Nagar) - 1 Kanal
  {
    id: 'prop-plot-4',
    title: '1 Kanal Corner Residential Plot',
    category: 'Plot',
    location: 'Chenab Nagar',
    areaDetail: 'Executive Enclave, Wide Boulevard',
    purpose: 'For Sale',
    priceDisplay: 'Available on Request',
    priceCategory: 'above-3.5',
    bedrooms: null,
    bathrooms: null,
    area: '1 Kanal Plot (50 × 90 ft)',
    featured: true,
    shortDescription: 'Prestigious 1 Kanal corner plot on a 50-foot wide boulevard, perfect for an executive residence or architectural villa.',
    fullDescription: 'A rare 1 Kanal corner residential plot situated in the prestigious executive sector of Chenab Nagar. Benefiting from wide dual-road access, this parcel of land offers uncompromised flexibility for modern architectural planning, expansive front and side lawns, and multi-car parking. All utilities ready for immediate connection.',
    image: primePlotImg,
    gallery: [
      primePlotImg,
      luxuryVillaFacadeImg,
      heroVillaImg
    ],
    features: [
      '1 Kanal dimension (50 × 90 ft)',
      'Corner plot with dual road frontage',
      '50-Foot wide main boulevard entrance',
      'Fully developed area with underground utilities',
      'Direct possession and registration',
      'Ideal for executive custom villa'
    ],
    badge: 'Corner Plot'
  }
];

export const BUSINESS_INFO = {
  name: 'Nasir Real Estate',
  tagline: 'Find the right property. Make the right move.',
  location: 'Chenab Nagar, Chiniot',
  chamber: 'Chamber of Faisalabad',
  phoneDisplay: '03163370864',
  phoneHref: 'tel:+923163370864',
  whatsappNumber: '923163370864',
  whatsappBaseUrl: 'https://wa.me/923163370864',
  getWhatsAppPropertyUrl: (propertyTitle: string, location: string) => {
    const text = `Hello Nasir Real Estate, I am interested in ${propertyTitle} (${location}). Please let me know the demand and available details.`;
    return `https://wa.me/923163370864?text=${encodeURIComponent(text)}`;
  },
  getWhatsAppCustomUrl: (message: string) => {
    return `https://wa.me/923163370864?text=${encodeURIComponent(message)}`;
  }
};
