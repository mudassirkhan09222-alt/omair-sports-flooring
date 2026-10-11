// ============================================================
// OMAIR SPORTS FLOORING — Central Data File
// Replace placeholder values with real company data as needed
// ============================================================

export const siteConfig = {
  name: "OMAIR SPORTS FLOORING",
  tagline: "Premium Sports Flooring & Court Solutions",
  phone: "+92 300 000 0000",
  whatsapp: "+92 300 000 0000",
  email: "info@omairsportsflooring.com",
  address: "Lahore, Pakistan",
  instagram: "https://instagram.com/omairsportsflooring",
  facebook: "https://facebook.com/omairsportsflooring",
  linkedin: "https://linkedin.com/company/omairsportsflooring",
  youtube: "https://youtube.com/@omairsportsflooring",
};

export const stats = [
  { value: 10,  suffix: "+", label: "Years in Business"       },
  { value: 100, suffix: "+", label: "Projects Delivered"      },
  { value: 50,  suffix: "+", label: "Sports Facilities Built" },
  { value: 100, suffix: "%", label: "Quality Guaranteed"      },
];

export type Sport = {
  id: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const sports: Sport[] = [
  {
    id: "padel",
    name: "Padel",
    description:
      "We build padel courts from the ground up — full glass enclosures, premium blue surfaces, proper lighting and everything in between.",
    image: "/Padel Image.jpeg",
    featured: true,
  },
  {
    id: "tennis",
    name: "Tennis",
    description:
      "Hard courts, clay courts, synthetic grass — we supply and install the right surface for your players and your budget.",
    image:
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80",
    featured: true,
  },
  {
    id: "basketball",
    name: "Basketball",
    description:
      "Indoor maple-look PVC floors or outdoor acrylic surfaces — built for real game performance and long-term durability.",
    image: "/images/sports/basketball-court.jpg",
  },
  {
    id: "squash",
    name: "Squash",
    description:
      "Hardwood and synthetic squash court floors with perfect ball response, built to WSF standards.",
    image: "/Squash Court.jpeg",
  },
  {
    id: "futsal",
    name: "Futsal",
    description:
      "Shock-absorbent indoor futsal surfaces that are safe for players, easy to maintain and great to play on.",
    image:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80",
  },
  {
    id: "football",
    name: "Football",
    description:
      "FIFA-quality artificial turf for training grounds, academies and community pitches across Pakistan.",
    image:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80",
  },
  {
    id: "volleyball",
    name: "Volleyball",
    description:
      "Cushioned indoor volleyball floors that reduce joint stress and meet international match requirements.",
    image:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
  },
  {
    id: "badminton",
    name: "Badminton",
    description:
      "Non-slip PVC and wooden badminton floors with precise court markings — ideal for clubs and academies.",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80",
  },
  {
    id: "other",
    name: "Other Sports",
    description:
      "Gyms, multipurpose halls, running tracks — we have the right flooring for any sport, any space.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  fullDescription?: string;
  specs?: { label: string; value: string }[];
  applications?: string[];
  gallery?: string[];
};

export const products: Product[] = [
  {
    id: "indoor-sports-flooring",
    name: "Indoor Sports Flooring",
    category: "Indoor",
    description:
      "Engineered for real play — our indoor sports floors absorb impact, stay grippy and look great year after year.",
    image: "/images/sports/indoor-sports-flooring.jpg",
    features: ["Shock Absorption", "Anti-Slip Surface", "Multi-Sport Marking", "Long Durability"],
    fullDescription:
      "Our indoor sports flooring systems are designed to meet the demands of professional athletes and recreational players alike. Built using imported materials and installed by our certified teams, these floors deliver consistent performance, player safety and long service life. Whether you need a single-sport court or a multi-use sports hall, we have the right system for you.",
    specs: [
      { label: "Thickness",        value: "4mm – 12mm depending on system" },
      { label: "Shock Absorption", value: "Up to 68% (EN 14808)"           },
      { label: "Surface",          value: "Non-slip, textured finish"       },
      { label: "Colours",          value: "Custom colours available"        },
      { label: "Installation",     value: "Professional glue-down or loose-lay" },
      { label: "Warranty",         value: "5–10 years"                      },
    ],
    applications: ["Basketball Courts", "Badminton Courts", "Volleyball Courts", "Multi-Sport Halls", "School Gyms", "Hotel Sports Facilities"],
  },
  {
    id: "outdoor-sports-flooring",
    name: "Outdoor Sports Flooring",
    category: "Outdoor",
    description:
      "Built to handle Pakistan's heat and rain — our outdoor surfaces stay flat, safe and performance-ready all year.",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80",
    features: ["UV Resistant", "All-Weather", "Drainage System", "Low Maintenance"],
    fullDescription:
      "Designed specifically for outdoor use in Pakistan's climate, our outdoor sports surfaces withstand extreme heat, monsoon rain and heavy foot traffic. UV-stabilised materials prevent fading and cracking. Built-in drainage channels keep the court safe and playable in wet conditions.",
    specs: [
      { label: "Material",     value: "Acrylic or polyurethane based"     },
      { label: "UV Stability", value: "High — colour stable for 10+ years" },
      { label: "Drainage",     value: "Integrated drainage channels"       },
      { label: "Surface",      value: "Textured, anti-slip finish"         },
      { label: "Thickness",    value: "3mm – 8mm"                          },
      { label: "Warranty",     value: "5 years"                            },
    ],
    applications: ["Outdoor Basketball", "Tennis Courts", "Netball", "Multi-Sport Areas", "School Playgrounds", "Housing Society Courts"],
  },
  {
    id: "pvc-sports-flooring",
    name: "PVC Sports Flooring",
    category: "PVC",
    description:
      "A practical, affordable option that still delivers excellent cushioning and consistent ball response.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    features: ["Easy Installation", "Hygienic Surface", "Colour Fast", "Noise Reduction"],
    fullDescription:
      "PVC sports flooring is the most popular choice for indoor sports in Pakistan. It offers excellent cushioning, easy maintenance and a hygienic surface that's resistant to bacteria and moisture. Available in rolls or tiles, PVC can be installed quickly and cost-effectively in any indoor sports space.",
    specs: [
      { label: "Material",      value: "Multi-layer PVC with foam backing"    },
      { label: "Thickness",     value: "4mm – 8mm"                            },
      { label: "Ball Rebound",  value: "Consistent — meets EN 12235"          },
      { label: "Surface",       value: "Smooth or textured options"           },
      { label: "Installation",  value: "Glue-down or loose-lay"               },
      { label: "Warranty",      value: "3–5 years"                            },
    ],
    applications: ["Badminton", "Table Tennis", "Indoor Football", "Dance Studios", "Fitness Centres", "Multi-Purpose Halls"],
  },
  {
    id: "pu-sports-flooring",
    name: "PU Sports Flooring",
    category: "PU",
    description:
      "The gold standard for serious sports facilities — seamless, elastic and built to FIBA and BWF requirements.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    features: ["High Elasticity", "Seamless Surface", "FIBA Certified", "Custom Colours"],
    fullDescription:
      "Polyurethane (PU) sports flooring is the choice of professional venues worldwide. Applied as a liquid and cured in place, it forms a completely seamless surface with exceptional elasticity and impact absorption. Our PU systems are certified to FIBA, BWF and other international standards.",
    specs: [
      { label: "Material",      value: "Polyurethane — fully seamless"      },
      { label: "Thickness",     value: "7mm – 15mm system"                  },
      { label: "Elasticity",    value: "Excellent — 53–75% force reduction" },
      { label: "Certification", value: "FIBA Level 1, BWF approved"         },
      { label: "Surface",       value: "Matte or satin finish, custom logo" },
      { label: "Warranty",      value: "10 years"                           },
    ],
    applications: ["Professional Basketball", "Badminton", "Volleyball", "Squash", "University Sports Halls", "Competition Venues"],
  },
  {
    id: "synthetic-surfaces",
    name: "Synthetic Sports Surfaces",
    category: "Synthetic",
    description:
      "Looks and plays like natural grass — without the maintenance cost, water usage or seasonal downtime.",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80",
    features: ["Natural Feel", "Consistent Bounce", "All-Weather", "Low Friction"],
    fullDescription:
      "Synthetic sports surfaces combine the aesthetics of natural materials with the durability and consistency of engineered products. Ideal for tennis, padel, hockey and multi-sport use, these surfaces require minimal upkeep and perform consistently in all weather conditions.",
    specs: [
      { label: "Material",      value: "Sand-filled or sand & rubber-filled" },
      { label: "Pile Height",   value: "12mm – 20mm"                         },
      { label: "Base System",   value: "Asphalt, concrete or compacted sub-base" },
      { label: "Surface",       value: "Sand or rubber infill"               },
      { label: "Maintenance",   value: "Brushing and irrigation only"        },
      { label: "Warranty",      value: "8 years"                             },
    ],
    applications: ["Tennis", "Padel", "Hockey", "Cricket Training", "Multi-Sport", "Residential Courts"],
  },
  {
    id: "artificial-turf",
    name: "Artificial Turf",
    category: "Turf",
    description:
      "FIFA-certified turf systems for football and hockey — available with shock pads for player safety.",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80",
    features: ["FIFA Approved", "Natural Look", "Shock Pad System", "Minimal Maintenance"],
    fullDescription:
      "Our artificial turf systems are certified to FIFA Quality Pro and FIFA Quality standards. Designed for football, hockey and multi-sport use, each system includes a shock-absorbing pad layer for player safety. We supply and install everything from the base to the top layer.",
    specs: [
      { label: "Certification", value: "FIFA Quality Pro / FIFA Quality"    },
      { label: "Pile Height",   value: "40mm – 60mm for football"           },
      { label: "Infill",        value: "Rubber crumb + silica sand"         },
      { label: "Shock Pad",     value: "10mm–20mm bonded rubber pad"        },
      { label: "Base",          value: "Asphalt or compacted aggregate"     },
      { label: "Warranty",      value: "8–10 years"                         },
    ],
    applications: ["Football Pitches", "Hockey Fields", "Training Grounds", "School Sports", "Community Pitches", "Commercial Venues"],
  },
  {
    id: "court-surfaces",
    name: "Court Surfaces",
    category: "Court",
    description:
      "Acrylic, polyurethane or synthetic court surfaces for padel, tennis, basketball and multi-sport courts.",
    image: "/Padel Image.jpeg",
    features: ["ITF Certified", "Custom Line Marking", "Professional Finish", "Court Painting"],
    fullDescription:
      "Our court surface systems are designed for padel, tennis, basketball and multi-sport courts. Available in acrylic, PU and synthetic options, each system provides a consistent, professional playing surface. We handle everything from surface preparation and base levelling to final line marking and court painting.",
    specs: [
      { label: "Material",      value: "Acrylic, PU or synthetic"          },
      { label: "Thickness",     value: "3mm – 10mm depending on surface"   },
      { label: "Certification", value: "ITF, FIBA options available"       },
      { label: "Line Marking",  value: "Precision painted to sport spec"   },
      { label: "Colours",       value: "Full colour range available"       },
      { label: "Warranty",      value: "5 years"                           },
    ],
    applications: ["Padel Courts", "Tennis Courts", "Basketball Courts", "Multi-Sport Courts", "Squash Courts", "Badminton Courts"],
  },
  {
    id: "sports-flooring-systems",
    name: "Complete Flooring Systems",
    category: "Systems",
    description:
      "We don't just supply a surface — we deliver the full system: base, cushion layer, finish and line markings.",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80",
    features: ["Full System Supply", "Technical Support", "Installation Included", "Warranty"],
    fullDescription:
      "A complete sports flooring system is more than just the top surface. It includes proper sub-base preparation, a cushioning layer, the performance surface and all finishing work. We supply and install the entire system under one contract — no separate contractors, no coordination headaches.",
    specs: [
      { label: "Sub-base",      value: "Concrete or asphalt preparation"   },
      { label: "Cushion Layer", value: "Rubber or foam base layer"          },
      { label: "Surface",       value: "PVC, PU or acrylic top layer"       },
      { label: "Line Marking",  value: "Included in all systems"            },
      { label: "Project Mgmt",  value: "Dedicated project manager"         },
      { label: "Warranty",      value: "Full system warranty included"      },
    ],
    applications: ["New Build Sports Halls", "Renovation Projects", "Multi-Court Facilities", "Commercial Venues", "Hotels", "Universities"],
  },
];

export type Project = {
  id: string;
  name: string;
  location: string;
  sport: string;
  type: "Indoor" | "Outdoor";
  category: string;
  image: string;
  year: string;
  client?: string;
  area?: string;
  surface?: string;
  description?: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    name: "Premium Padel Club",
    location: "Lahore, Pakistan",
    sport: "Padel",
    type: "Outdoor",
    category: "Padel",
    image: "/Padel Image.jpeg",
    year: "2024",
    client: "Private Sports Club",
    area: "800 sqm",
    surface: "Premium Acrylic Court Surface",
    description: "A complete padel club facility featuring 4 professional padel courts with full glass enclosures, blue acrylic surfaces, LED flood lighting, spectator seating and changing rooms. Designed and built to international padel federation standards.",
  },
  {
    id: "project-2",
    name: "International Tennis Academy",
    location: "Karachi, Pakistan",
    sport: "Tennis",
    type: "Outdoor",
    category: "Tennis",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80",
    year: "2024",
    client: "National Tennis Academy",
    area: "1,200 sqm",
    surface: "ITF Acrylic Hard Court",
    description: "A 6-court tennis academy with ITF-certified acrylic hard court surfaces, professional line markings, perimeter fencing, floodlighting and a full coaching facility. One of the largest tennis academies in Karachi.",
  },
  {
    id: "project-3",
    name: "University Sports Complex",
    location: "Islamabad, Pakistan",
    sport: "Basketball",
    type: "Indoor",
    category: "Basketball",
    image: "/images/sports/basketball-court.jpg",
    year: "2023",
    client: "University of Islamabad",
    area: "600 sqm",
    surface: "PU Maple-Look Sports Floor",
    description: "A full-size indoor basketball arena with PU sports flooring in maple wood appearance, FIBA-standard markings, shock absorption system, LED sports lighting and spectator seating for 300 people.",
  },
  {
    id: "project-4",
    name: "Professional Squash Courts",
    location: "Lahore, Pakistan",
    sport: "Squash",
    type: "Indoor",
    category: "Squash",
    image: "/Squash Court.jpeg",
    year: "2023",
    client: "Lahore Squash Club",
    area: "320 sqm",
    surface: "Hardwood Squash Court Floor",
    description: "Four PSA-standard squash courts with glass back walls, hardwood flooring, professional line markings and integrated lighting. Built to World Squash Federation specifications for competitive play.",
  },
  {
    id: "project-5",
    name: "Indoor Futsal Arena",
    location: "Faisalabad, Pakistan",
    sport: "Futsal",
    type: "Indoor",
    category: "Futsal",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80",
    year: "2023",
    client: "Faisalabad Sports Authority",
    area: "900 sqm",
    surface: "PVC Futsal Surface",
    description: "A commercial indoor futsal arena with 2 full-size futsal courts, shock-absorbent PVC flooring, FIFA futsal line markings, LED floodlighting and spectator galleries.",
  },
  {
    id: "project-6",
    name: "Football Training Ground",
    location: "Rawalpindi, Pakistan",
    sport: "Football",
    type: "Outdoor",
    category: "Football",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80",
    year: "2024",
    client: "Football Training Academy",
    area: "7,200 sqm",
    surface: "FIFA Quality Artificial Turf",
    description: "A full-size 11v11 football pitch with FIFA Quality certified artificial turf, rubber crumb infill, shock pad system, floodlighting, perimeter fencing and a modern coaching pavilion.",
  },
  {
    id: "project-7",
    name: "Hotel Sports Facility",
    location: "Lahore, Pakistan",
    sport: "Multi-Sport",
    type: "Indoor",
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    year: "2024",
    client: "5-Star Hotel Group",
    area: "1,500 sqm",
    surface: "PVC Multi-Sport Flooring",
    description: "A luxury hotel sports complex featuring a multi-purpose sports hall, indoor swimming pool surrounds, fitness studio flooring and a rooftop mini tennis court — all finished to 5-star standards.",
  },
  {
    id: "project-8",
    name: "Residential Padel Courts",
    location: "DHA Lahore, Pakistan",
    sport: "Padel",
    type: "Outdoor",
    category: "Padel",
    image: "/Padel Image.jpeg",
    year: "2024",
    client: "DHA Housing Society",
    area: "600 sqm",
    surface: "Synthetic Padel Surface",
    description: "Three premium padel courts within a residential housing society — glass enclosures, synthetic blue court surfaces, LED lighting and a club lounge. One of the first residential padel facilities in DHA Lahore.",
  },
];

export const testimonials = [
  {
    id: "1",
    quote:
      "Honestly impressed. From the first meeting to final handover, the team was professional and the padel court surface is world-class.",
    name: "Ahmed Raza",
    company: "Premier Sports Club",
    project: "Padel Court — Lahore",
  },
  {
    id: "2",
    quote:
      "Our tennis academy now has a court that looks and plays like something out of a top European facility. Great work.",
    name: "Usman Malik",
    company: "National Tennis Academy",
    project: "Tennis Court — Karachi",
  },
  {
    id: "3",
    quote:
      "The basketball floor they installed for our university is solid — students love it and it still looks new after two years.",
    name: "Dr. Farhan Ahmed",
    company: "University of Lahore",
    project: "Sports Complex — Islamabad",
  },
  {
    id: "4",
    quote:
      "They handled everything — design, materials, installation. Our football ground is now one of the best training facilities in the region.",
    name: "Coach Bilal Hassan",
    company: "Football Training Academy",
    project: "Training Ground — Rawalpindi",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We sit down with you, understand your sport, your space and your budget — no pressure, just a straight conversation.",
  },
  {
    step: "02",
    title: "Site Assessment",
    description:
      "Our team visits the site, takes measurements, checks the ground conditions and tells you exactly what's needed.",
  },
  {
    step: "03",
    title: "Design & Planning",
    description:
      "We create a full project plan with layouts, material specs and a clear timeline — so you know what to expect.",
  },
  {
    step: "04",
    title: "Material Selection",
    description:
      "We show you your options — imported brands, local production, different surface types — and help you decide.",
  },
  {
    step: "05",
    title: "Supply & Manufacturing",
    description:
      "We manufacture or import the right materials and deliver them to site on time, every time.",
  },
  {
    step: "06",
    title: "Installation",
    description:
      "Our trained installation crew gets to work — methodical, clean and precise from day one to completion.",
  },
  {
    step: "07",
    title: "Quality Check",
    description:
      "Before we hand over, every surface is inspected against international standards. No shortcuts.",
  },
  {
    step: "08",
    title: "Handover",
    description:
      "You get the full package — completed facility, documentation, care guide and our ongoing support number.",
  },
];

export const whyChooseUs = [
  {
    number: "01",
    title: "Premium Materials",
    description: "We import directly from top international brands — every surface meets global quality standards.",
  },
  {
    number: "02",
    title: "Expert Installation",
    description: "100+ projects completed by our trained crews. We know exactly what we're doing.",
  },
  {
    number: "03",
    title: "10+ Years Experience",
    description: "Padel, tennis, basketball, squash, futsal — we've built them all, for over a decade.",
  },
  {
    number: "04",
    title: "Quality Control",
    description: "Every project is inspected before handover. We don't cut corners.",
  },
  {
    number: "05",
    title: "End-to-End Service",
    description: "Design, supply, install, hand over — one team handles everything.",
  },
  {
    number: "06",
    title: "After-Sales Support",
    description: "We stay in touch after completion. Maintenance, repairs — we're always available.",
  },
];
