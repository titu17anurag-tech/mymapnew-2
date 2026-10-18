import { FloorPlanItem, PricingPlan } from '../types';
import modernVilla from '../assets/images/villa_modern_exterior_1792171394798.jpg';
import isometric3D from '../assets/images/floorplan_3d_isometric_1792171393396.jpg';
import blueprint2D from '../assets/images/floorplan_cad_blueprint_1792171394726.jpg';
import elevationDuplex from '../assets/images/duplex_front_elevation_1792171395723.jpg';

export const HERO_IMAGES = {
  modernVilla,
  isometric3D,
  blueprint2D,
  elevationDuplex,
  // Public static path aliases
  fallbackVilla: '/images/villa_exterior.jpg',
  fallbackIsometric: '/images/floorplan_3d.jpg',
  fallbackBlueprint: '/images/floorplan_2d.jpg',
  fallbackDuplex: '/images/duplex_elevation.jpg',
};

export const SAMPLE_PLANS: FloorPlanItem[] = [
  {
    id: 'plan-30x40-duplex',
    title: '30x40 3 BHK Ground Floor & Duplex Residence',
    plotSize: '30 x 40 ft',
    totalArea: '1,200 sq.ft Site Area',
    bhk: '3 BHK Modern House',
    facing: 'East',
    vastuCompliant: true,
    floors: 'Ground Floor / Duplex Ready',
    image2D: HERO_IMAGES.blueprint2D,
    image3D: HERO_IMAGES.isometric3D,
    imageElevation: HERO_IMAGES.elevationDuplex,
    description: 'Our flagship 3 BHK floor plan for standard 30x40 ft plots. Features spacious living room, separate dining area, dedicated pooja room, modular kitchen with utility wash, master bedroom with en-suite, and parking porch.',
    rooms: [
      { name: 'Living Room', dimensions: '16\'0" x 14\'6"', vastuDirection: 'North-East (Ishanya)', details: 'Spacious lounge with TV unit and cross-ventilation windows.' },
      { name: 'Dining Area', dimensions: '11\'0" x 12\'0"', vastuDirection: 'East', details: 'Directly connected with kitchen and main entrance foyer.' },
      { name: 'Modular Kitchen + Utility', dimensions: '11\'0" x 9\'0" + Utility 5\'0" x 9\'0"', vastuDirection: 'South-East (Agni Corner)', details: 'L-shaped platform with dedicated sink, hob, and separate wash utility yard.' },
      { name: 'Dedicated Pooja Room', dimensions: '5\'0" x 8\'0"', vastuDirection: 'East / North-East', details: 'Auspicious peaceful mandir sanctuary with natural morning light.' },
      { name: 'Master Bedroom + En-Suite', dimensions: '13\'0" x 12\'0"', vastuDirection: 'South-West (Nairutya)', details: 'King size bed space, full wall wardrobe, and 8\'0" x 5\'6" attached bath.' },
      { name: 'Bedroom 2 (Children / Family)', dimensions: '11\'6" x 11\'0"', vastuDirection: 'North', details: 'Queen bed layout with study desk and wardrobe niche.' },
      { name: 'Bedroom 3 (Guest Room)', dimensions: '12\'0" x 10\'6"', vastuDirection: 'North-West (Vayu)', details: 'Generous window opening and easy access to common bath.' },
      { name: 'Covered Entrance Porch', dimensions: '11\'0" x 6\'0"', vastuDirection: 'East / North-East', details: 'Covered entry step-up with shoe console niche.' },
    ],
  },
  {
    id: 'plan-20x50-compact',
    title: '20x50 Linear 2/3 BHK Modern Compact Home',
    plotSize: '20 x 50 ft',
    totalArea: '1,000 sq.ft (Built-up: 1,750 sq.ft)',
    bhk: '3 BHK Duplex',
    facing: 'North',
    vastuCompliant: true,
    floors: 'G+1',
    image2D: HERO_IMAGES.fallbackBlueprint,
    image3D: HERO_IMAGES.fallbackIsometric,
    imageElevation: HERO_IMAGES.modernVilla,
    description: 'Engineered specifically for narrow plots. Features an internal lightwell courtyard (cut-out) ensuring exceptional daylight throughout the center of the home.',
    rooms: [
      { name: 'Drawing Room', dimensions: '13\'6" x 12\'0"', vastuDirection: 'North', details: 'Front-facing with recessed foyer storage.' },
      { name: 'Central Green Courtyard', dimensions: '6\'0" x 6\'0"', vastuDirection: 'Brahmasthan', details: 'Open-to-sky shaft providing natural stack ventilation.' },
      { name: 'Kitchen & Dining', dimensions: '12\'6" x 9\'6"', vastuDirection: 'South-East', details: 'Efficient counter with pass-through dining counter.' },
      { name: 'Master Bedroom', dimensions: '13\'0" x 11\'6"', vastuDirection: 'South-West', details: 'Back garden view with attached toilet.' },
    ],
  },
  {
    id: 'plan-40x60-luxury',
    title: '40x60 Executive 4 BHK Luxury Bungalow',
    plotSize: '40 x 60 ft',
    totalArea: '2,400 sq.ft (Built-up: 3,800 sq.ft)',
    bhk: '4 BHK Villa',
    facing: 'East',
    vastuCompliant: true,
    floors: 'G+2 Villa',
    image2D: HERO_IMAGES.fallbackBlueprint,
    image3D: HERO_IMAGES.fallbackIsometric,
    imageElevation: HERO_IMAGES.modernVilla,
    description: 'Spacious luxury bungalow with wrap-around landscaped setbacks, home theatre on second floor, servant quarters, and dual vehicle garage.',
    rooms: [
      { name: 'Grand Foyer & Living', dimensions: '22\'0" x 16\'0"', vastuDirection: 'North-East', details: 'Triple glazing and landscaped entrance vestibule.' },
      { name: 'Gourmet Kitchen & Pantry', dimensions: '14\'0" x 12\'0"', vastuDirection: 'South-East', details: 'Island workstation with wet & dry separation.' },
      { name: 'Presidential Master Suite', dimensions: '18\'0" x 15\'0"', vastuDirection: 'South-West', details: 'Dressing room, 5-fixture bath, and private sit-out.' },
      { name: 'Home Lounge & Media', dimensions: '16\'0" x 14\'0"', vastuDirection: 'North', details: 'Acoustically isolated entertainment lounge.' },
    ],
  },
  {
    id: 'plan-25x40-smart',
    title: '25x40 Smart 2 BHK Single-Floor Budget Home',
    plotSize: '25 x 40 ft',
    totalArea: '1,000 sq.ft (Ground Floor)',
    bhk: '2 BHK Single Floor',
    facing: 'West',
    vastuCompliant: true,
    floors: 'Ground Floor Only',
    image2D: HERO_IMAGES.fallbackBlueprint,
    image3D: HERO_IMAGES.fallbackIsometric,
    imageElevation: HERO_IMAGES.fallbackDuplex,
    description: 'Perfect for first-time homebuilders and senior citizens. Zero staircase barriers, smart storage niches, and future column expansion provision for 1st floor.',
    rooms: [
      { name: 'Hall / Living Space', dimensions: '14\'0" x 12\'6"', vastuDirection: 'North-West', details: 'Spacious hall welcoming family gatherings.' },
      { name: 'Modular Kitchen', dimensions: '9\'0" x 8\'6"', vastuDirection: 'South-East', details: 'Efficient parallel kitchen with dry yard.' },
      { name: 'Master Bedroom', dimensions: '12\'0" x 11\'0"', vastuDirection: 'South-West', details: 'Accommodates king bed and 3-door wardrobe.' },
      { name: 'Children / Guest Room', dimensions: '10\'6" x 10\'0"', vastuDirection: 'North', details: 'Study desk niche and large window.' },
    ],
  },
];

export const PRICING_PACKAGES: PricingPlan[] = [
  {
    id: 'starter',
    name: '2D Floor Plan (Starter)',
    price: 499,
    originalPrice: 1499,
    deliveryTime: 'Within 24 Hours',
    popular: true,
    tagline: 'Get your complete customized 2D house floor plan online in just a few clicks.',
    features: [
      'Customized 2D Floor Plan based on your plot size',
      'All room dimensions, wall thicknesses & door swings',
      'Furniture placement & movement layout',
      'Basic Vastu guidelines orientation',
      '1 Free revision round included',
      'High-Resolution PDF delivered via WhatsApp & Email',
      'Ready for contractor quotation & basic estimation',
    ],
    ctaLabel: 'Order Plan for ₹499',
  },
  {
    id: 'standard',
    name: 'Approval & Working CAD Pack',
    price: 3449,
    originalPrice: 6999,
    deliveryTime: 'Within 48 Hours',
    popular: false,
    tagline: 'Complete technical blueprints ready for Municipal Panchayat approval & site engineers.',
    features: [
      'Everything in Starter 2D Plan',
      'Detailed Technical Working Drawings with millimeter accuracy',
      'Structural Column Center-Line Grid & Beam Layout',
      'Door & Window Schedule with framing specifications',
      'Complete Municipal / Panchayat Approval Compliance',
      'Detailed Vastu Shastra Audit Report',
      '3 Free revision rounds included',
      'Direct WhatsApp consultation with Senior Architect',
    ],
    ctaLabel: 'Get Approval Pack ₹3,449',
  },
  {
    id: 'premium-3d',
    name: '3D Dream Home Complete Pack',
    price: 5449,
    originalPrice: 9999,
    deliveryTime: '2 to 3 Days',
    popular: false,
    tagline: 'The ultimate package: 2D blueprints + 3D isometric cutaways + realistic front elevation render.',
    features: [
      'Complete 2D Approval & Working CAD Blueprints',
      'Photorealistic 3D Isometric Furnished Cutaway Plan',
      'High-Definition 3D Exterior Front Elevation Render',
      'Material & Color Palette recommendations',
      'Electrical switchboard & plumbing schematic points',
      'Unlimited minor revisions until complete satisfaction',
      'AutoCAD .DWG source file + Print-ready PDF files',
      'Priority VIP Architect Support on WhatsApp & Phone',
    ],
    ctaLabel: 'Get Complete 3D Pack ₹5,449',
  },
];

export const FAQS = [
  {
    q: 'Why is the price only ₹499/-?',
    a: 'We have digitized the traditional architectural drafting workflow! Instead of paying ₹20,000+ to local draftsmen who take weeks, our specialized architectural team uses streamlined CAD frameworks to deliver custom, accurate 2D floor plans at an affordable rate of ₹499/- within 24 hours.',
  },
  {
    q: 'Can I use this floor plan for Municipal / Bank approval?',
    a: 'Yes! Our drawings strictly adhere to National Building Code (NBC) guidelines, standard plot setbacks, ventilation norms, and municipal bylaws. For formal municipal building sanction permits, our ₹3,449 Approval Pack includes the complete column-grid, room schedule, and municipal submission formats.',
  },
  {
    q: 'Will the plan be designed according to Vastu Shastra?',
    a: 'Absolutely. Every plan we create follows authentic Vastu Shastra principles: Main entrance in auspicious padas, Master Bedroom in South-West (Nairutya), Kitchen in South-East (Agni), Pooja Room in North-East (Ishanya), and central Brahmasthan open and uncluttered.',
  },
  {
    q: 'What if I need modifications in the drawing?',
    a: 'We offer "Modify as You Want"! Every package includes revision rounds. When we send your draft plan on WhatsApp, you can mark changes, voice-note your preferences, or ask our architect to adjust room sizes. We refine the plan until you are 100% satisfied.',
  },
  {
    q: 'How do I receive the floor plan?',
    a: 'You receive high-resolution, print-ready PDF files and high-contrast image files directly on WhatsApp and your registered email address. You can easily print them on standard A4 or A3 sheets at any local print shop or forward them directly to your builder/contractor.',
  },
  {
    q: 'How do I start my order right now?',
    a: 'Simply click "Send Your Requirement on WhatsApp" or use our quick form. Share your plot dimensions (e.g. 30x40 ft), facing direction, and number of bedrooms needed. Our architect will immediately review it and message you with a sample drawing!',
  },
];

export const TRUST_POINTS = [
  {
    title: 'Custom Design',
    desc: 'Customized to your exact plot dimensions, family size, road width, and budget.',
  },
  {
    title: 'Modify as You Want',
    desc: 'Flexible revisions so you get the exact dream layout before pouring concrete.',
  },
  {
    title: 'Online Delivery',
    desc: 'Instant delivery on WhatsApp in 24 hours. High-res print-ready PDF files.',
  },
  {
    title: '100% Satisfaction',
    desc: 'Vastu compliant, engineer-verified, and ready for construction & loan sanction.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Rajesh Sharma',
    city: 'Jaipur, Rajasthan',
    plot: '30 x 50 ft (East Facing)',
    text: 'I was quoted ₹18,000 by a local architect just for a basic drawing. MyMap provided a flawless Vastu-compliant 3 BHK plan with car parking in less than 24 hours on WhatsApp for just ₹499! My contractor started work immediately.',
    rating: 5,
  },
  {
    name: 'Anand Kulkarni',
    city: 'Pune, Maharashtra',
    plot: '25 x 45 ft (North Facing)',
    text: 'The 3D isometric cutaway view helped my family visualize the entire kitchen and living room layout before construction. The team did two revisions without any fuss. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Suresh Reddy',
    city: 'Hyderabad, Telangana',
    plot: '40 x 60 ft Duplex',
    text: 'Got both the 2D CAD blueprint and the front 3D elevation. Municipal permission was granted smoothly because the setbacks and ventilation calculations were pinpoint accurate.',
    rating: 5,
  },
];
