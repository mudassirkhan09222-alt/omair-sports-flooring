// ============================================================
// OMAIR SPORTS FLOORING — Central Data File
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
  { value: 20,  suffix: "+", label: "Years in Business"       },
  { value: 100, suffix: "+", label: "Projects Delivered"      },
  { value: 50,  suffix: "+", label: "Sports Facilities Built" },
  { value: 100, suffix: "%", label: "Quality Guaranteed"      },
];

// ============================================================
// SPORTS
// ============================================================
export type Sport = {
  id: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
  fullDescription?: string;
  features?: string[];
};

export const sports: Sport[] = [
  {
    id: "padel",
    name: "Padel",
    description:
      "Pakistan's pioneer padel court manufacturer since 2018 — built to FIP standards with Forte & Panoramic structures.",
    image: "/Padel Image.jpeg",
    featured: true,
    fullDescription:
      "Omair Sports Flooring is Pakistan's first and pioneer padel court manufacturer since 2018, working on Spanish and British models under International Padel Federation (FIP) standards. Our complete construction process covers site preparation (clearing, levelling and solid foundation), building Forte or Panoramic glass enclosure structures with continuous electro-welded wire mesh for injury prevention, WPT-style open entrances, specialised playing surface installation, net installation and perimeter/pole LED flood lighting.",
    features: ["FIP Certified Standards", "Forte & Panoramic Styles", "Glass Enclosure Structure", "Electro-Welded Wire Mesh", "LED Flood Lighting", "Complete Turnkey Solution"],
  },
  {
    id: "tennis",
    name: "Tennis",
    description:
      "ITF-certified acrylic hard courts and cushion systems — Medium, Medium-Fast and Medium-Slow pace options.",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80",
    featured: true,
    fullDescription:
      "We build professional outdoor tennis courts certified and classified by the International Tennis Federation (ITF). Our Hard Court Acrylic Coating systems combine primer, resurfacer and sand-mixed colour coats for a durable, consistent surface. We also offer Flexipave Multi-layer Rubber Cushion systems featuring coarse and fine cushion layers for high athletic comfort, weather resistance and shock absorption. Available in ITF pace ratings: Medium, Medium-Fast and Medium-Slow.",
    features: ["ITF Certified", "Acrylic Hard Court System", "Rubber Cushion Option", "Weather Resistant", "Custom Colours", "Line Marking Included"],
  },
  {
    id: "squash",
    name: "Squash",
    description:
      "WSF-standard hardwood maple squash court floors — 52–55mm system with EPDM shock pad and moisture barrier.",
    image: "/Squash Court.jpeg",
    fullDescription:
      "High-performance indoor squash court flooring built to World Squash Federation (WSF) standards. The system features top-grade Maple wood (with options including ashwood, birch wood, white oak or yellow pine). The complete system height is 52–55mm, structured with keel wood base (32mm × 61mm), 10mm EPDM rubber shock pad, 0.5mm polythene moisture cover sheet and top wood boards (22mm × 120mm × 1800mm) available in 1st, 2nd and 3rd grades.",
    features: ["WSF Standards", "Maple / Ashwood / Birch Options", "EPDM Shock Pad", "52–55mm System Height", "Moisture Barrier", "3 Grade Options"],
  },
  {
    id: "basketball",
    name: "Basketball",
    description:
      "FIBA-certified hardwood, PU and PVC basketball floors for indoor arenas, university halls and commercial courts.",
    image: "/images/sports/basketball-court.jpg",
    fullDescription:
      "Professional basketball flooring systems for indoor courts — available in Hevea rubber wood (530–700 kg/m³ density, high Janka hardness), multi-layer cushion-base polyurethane (PU) systems (7–20mm total thickness) and BWF-approved PVC roll-form flooring (2.0mm–5.0mm). All systems comply with DIN 18032 and EN 14904 standards and can be finished with FIBA-standard line markings, custom logos and team colours.",
    features: ["FIBA Certified", "DIN 18032 / EN 14904", "Hardwood / PU / PVC Options", "Shock Absorption System", "Custom Line Marking", "Logo Painting"],
  },
  {
    id: "futsal",
    name: "Futsal",
    description:
      "FIFA Quality 3G artificial turf and PVC futsal surfaces — safe, fast and built for competitive indoor football.",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80",
    fullDescription:
      "We provide FIFA Quality and FIFA Quality Pro 3G turf systems for futsal — featuring twin yarn quad-colour high-Dtex grass with silica sand and rubber infill for shock absorption and anti-skid performance. We also supply European-made 45mm non-infill high-density turf with PU backing for superior comfort and injury prevention. Indoor PVC futsal surfaces are also available with full FIFA futsal line markings.",
    features: ["FIFA Quality Pro", "3G Turf System", "PVC Indoor Option", "Rubber Infill System", "Anti-Skid Surface", "FIFA Line Markings"],
  },
  {
    id: "football",
    name: "Football",
    description:
      "FIFA Quality Pro 3G artificial turf pitches for training grounds, academies and community football facilities.",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80",
    fullDescription:
      "Turnkey artificial grass solutions for 5-a-side and full-sized football pitches. We provide FIFA Quality and FIFA Quality Pro 3G turf systems featuring twin yarn quad-colour high-Dtex grass with silica sand and rubber infill. We also offer European-made 45mm non-infill high-density turf with PU backing for superior comfort, weather resistance and injury prevention without loose infill. Complete civil works, lighting and fencing also available.",
    features: ["FIFA Quality Pro 3G", "High Dtex Twin Yarn", "Sand & Rubber Infill", "Shock Pad System", "Full Civil Works", "LED Floodlighting"],
  },
  {
    id: "hockey",
    name: "Hockey",
    description:
      "FIH-approved synthetic turf systems for field hockey — wet, sand-dressed and 3G options for all facility types.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
    fullDescription:
      "International Hockey Federation (FIH) approved and certified hockey turf systems designed for official matches. Options include non-filled 'wet' hockey turf (10mm–18mm pile height with required irrigation and shockpad), sand-dressed turf (13mm–20mm pile with >25% sand infill), sand-filled turf and long-pile 3G synthetic turf surfaces. Each system is tailored to climate conditions, budget and facility requirements.",
    features: ["FIH Approved & Certified", "Wet / Sand-Dressed / 3G Options", "10mm–20mm Pile Height", "Irrigation Compatible", "Shock Pad Included", "All-Weather Surface"],
  },
  {
    id: "volleyball",
    name: "Volleyball",
    description:
      "Cushioned indoor volleyball floors that meet international standards — DIN 18032 and EN 14904 compliant.",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
    fullDescription:
      "Professional indoor volleyball flooring systems using hardwood, PU or PVC surfaces that comply with DIN 18032 and EN 14904 standards. Our multi-layer cushion systems reduce joint stress and provide consistent ball response. Available with BWF-approved PVC rolls (2.0mm–5.0mm), anti-skid surfaces and solvent-free PUR coatings with fiberglass reinforcement.",
    features: ["DIN 18032 / EN 14904", "Multi-Layer Cushion System", "Anti-Skid Surface", "PUR Coating", "Fiberglass Reinforced", "Custom Colours"],
  },
  {
    id: "badminton",
    name: "Badminton",
    description:
      "BWF-approved PVC and PU badminton floors — anti-skid, fiberglass-reinforced and available in 2mm–5mm thickness.",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80",
    fullDescription:
      "BWF-approved sports flooring for badminton courts. Our PVC roll-form flooring (2.0mm–5.0mm thick) features anti-skid surfaces, solvent-free PUR coatings and fiberglass reinforcement for long-term durability. PU seamless systems are also available for high-performance academies and competition venues. Precise line markings in singles, doubles and mixed configurations included.",
    features: ["BWF Approved", "2.0mm–5.0mm PVC", "Anti-Skid PUR Coating", "Fiberglass Reinforced", "PU Option Available", "Precision Line Marking"],
  },
  {
    id: "running-track",
    name: "Running Track",
    description:
      "IAAF/World Athletics certified synthetic running track systems — sandwich, spray-coat and EPDM composite options.",
    image: "/Running Track.jpeg",
    fullDescription:
      "World Athletics (IAAF) certified outdoor synthetic track systems designed for daily training and competitive athletics. Systems include the Sandwich Running Track System (rubber elastic base layer, full-PU levelling/buffer layers and EPDM broadcast top layer), Spray-Coat Permeable System and EPDM/SBR composite track systems. All engineered for optimal energy return, weather durability and spike resistance.",
    features: ["IAAF / World Athletics Certified", "Sandwich System Available", "Spray-Coat Permeable Option", "EPDM/SBR Composite", "Spike Resistant", "All-Weather Performance"],
  },
  {
    id: "gym-fitness",
    name: "Gym & Fitness",
    description:
      "Heavy-duty rubber and PVC gym flooring — vulcanized tiles, interlocking systems and anti-fatigue rolls.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    fullDescription:
      "Heavy-duty fitness flooring solutions designed to absorb shock from heavy weights and reduce joint fatigue. We supply vulcanized molded pure rubber tiles with interlocking systems (Omipol 11mm and Flexipoli 12mm tiles in dotted, corrugated or plain gloss finishes), BS-series recycled tire/EPDM rubber tiles and anti-fatigue PVC rolls (2mm thickness with 0.3mm wear layer). Ideal for weight rooms, crossfit areas and commercial gyms.",
    features: ["Vulcanized Rubber Tiles", "11mm–12mm Thickness", "Interlocking System", "EPDM / Recycled Tire Options", "Anti-Fatigue PVC Rolls", "Heavy Weight Rated"],
  },
  {
    id: "kids-play",
    name: "Kids Play Area",
    description:
      "Non-toxic EVA foam tiles and EPDM rubber outdoor flooring — fall protection up to 3 metres for safe play areas.",
    image: "/Kids Play Area.jpeg",
    fullDescription:
      "Safe, non-toxic and impact-absorbing flooring solutions for children's playrooms, schools and outdoor playgrounds. We provide EVA interlocking soft foam tiles (extra-thick 2.5cm mats — waterproof, smell-free and anti-slip) and outdoor EPDM in-situ rubber flooring laid over an SBR shockpad base. Provides critical fall height protection up to 3 metres, flame resistance and wheelchair accessibility.",
    features: ["Non-Toxic Materials", "2.5cm EVA Foam Tiles", "EPDM In-Situ Option", "Fall Protection up to 3m", "Wheelchair Accessible", "Flame Resistant"],
  },
];

// ============================================================
// PRODUCTS
// ============================================================
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
};

export const products: Product[] = [
  {
    id: "padel-court-construction",
    name: "Padel Court Construction",
    category: "Padel",
    description:
      "Complete padel court construction from foundation to glass enclosure — Pakistan's pioneer since 2018, built to FIP standards.",
    image: "/Padel Image.jpeg",
    features: ["FIP Standards", "Forte & Panoramic", "Glass Enclosure", "LED Lighting"],
    fullDescription:
      "Omair Sports Flooring is Pakistan's first and pioneer padel court manufacturer since 2018. Working on Spanish and British models under International Padel Federation (FIP) standards, we handle every stage: site preparation, foundation, Forte or Panoramic glass structure with electro-welded wire mesh, specialised playing surface, net installation and perimeter LED flood lighting.",
    specs: [
      { label: "Standard",     value: "International Padel Federation (FIP)" },
      { label: "Models",       value: "Spanish / British"                    },
      { label: "Structures",   value: "Forte & Panoramic"                    },
      { label: "Mesh",         value: "Continuous electro-welded wire mesh"  },
      { label: "Entrance",     value: "WPT-style open entrance"              },
      { label: "Lighting",     value: "LED perimeter & pole floodlights"     },
    ],
    applications: ["Private Padel Clubs", "Hotel Facilities", "Housing Societies", "Sports Academies", "Commercial Courts", "Residential Communities"],
  },
  {
    id: "squash-hardwood-flooring",
    name: "Squash Court Hardwood Flooring",
    category: "Squash",
    description:
      "WSF-standard maple hardwood squash floors — 52–55mm system with EPDM shock pad, moisture barrier and 3 wood grades.",
    image: "/Squash Court.jpeg",
    features: ["WSF Standards", "Maple / Ashwood", "EPDM Shock Pad", "Moisture Barrier"],
    fullDescription:
      "High-performance indoor squash court flooring built to World Squash Federation (WSF) standards. Features top-grade Maple wood with options including ashwood, birch wood, white oak or yellow pine. Complete 52–55mm system: keel wood base (32mm × 61mm), 10mm EPDM rubber shock pad, 0.5mm polythene moisture cover sheet and top wood boards (22mm × 120mm × 1800mm) in 1st, 2nd and 3rd grades.",
    specs: [
      { label: "Standard",       value: "World Squash Federation (WSF)"          },
      { label: "System Height",  value: "52–55mm total"                          },
      { label: "Wood Options",   value: "Maple, Ashwood, Birch, White Oak, Pine" },
      { label: "Keel Wood",      value: "32mm × 61mm base"                       },
      { label: "Shock Pad",      value: "10mm EPDM rubber"                       },
      { label: "Moisture Layer", value: "0.5mm polythene cover sheet"            },
      { label: "Top Board",      value: "22mm × 120mm × 1800mm, 3 grades"        },
    ],
    applications: ["Professional Squash Courts", "Sports Clubs", "Universities", "Hotels", "Academies", "Competition Venues"],
  },
  {
    id: "multi-sports-hall-flooring",
    name: "Multi-Sports Hall Flooring",
    category: "Indoor",
    description:
      "DIN 18032 & EN 14904 compliant hardwood, PU and PVC systems for basketball, volleyball, badminton and multi-sport halls.",
    image: "/images/sports/indoor-sports-flooring.jpg",
    features: ["DIN 18032 / EN 14904", "Hardwood / PU / PVC", "Shock Absorption", "Multi-Sport Marking"],
    fullDescription:
      "Versatile indoor hall flooring for basketball, volleyball, badminton and multi-sports, complying with DIN 18032 and EN 14904 standards. Options include Hevea rubber wood (530–700 kg/m³, high Janka hardness), multi-layer cushion-base PU systems (7–20mm total thickness with shock-absorbing layers) and BWF-approved 2.0mm–5.0mm PVC roll-form flooring with anti-skid surfaces, solvent-free PUR coatings and fiberglass reinforcement.",
    specs: [
      { label: "Standard",       value: "DIN 18032, EN 14904"                    },
      { label: "Wood Option",    value: "Hevea rubber wood, 530–700 kg/m³"       },
      { label: "PU System",      value: "7–20mm total thickness, cushion-base"   },
      { label: "PVC Option",     value: "2.0mm–5.0mm, BWF approved"              },
      { label: "Surface",        value: "Anti-skid, solvent-free PUR coating"    },
      { label: "Reinforcement",  value: "Fiberglass reinforced"                  },
    ],
    applications: ["Basketball Courts", "Volleyball Courts", "Badminton Courts", "Multi-Sport Halls", "School Gymnasiums", "University Sports Halls"],
  },
  {
    id: "outdoor-acrylic-cushion-courts",
    name: "Outdoor Acrylic & Cushion Courts",
    category: "Outdoor",
    description:
      "ITF-certified acrylic hard courts and Flexipave cushion systems for tennis, basketball and multi-sport outdoor venues.",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80",
    features: ["ITF Certified", "Acrylic Coating System", "Rubber Cushion Option", "Weather Resistant"],
    fullDescription:
      "Professional outdoor surfaces for tennis, basketball, volleyball and handball, certified by the International Tennis Federation (ITF) for court paces. Hard Court Acrylic Coating systems combine primer, resurfacer and sand-mixed colour coats. Flexipave Multi-layer Rubber Cushion systems feature coarse and fine cushion layers for high athletic comfort, weather resistance and shock absorption. Available in Medium, Medium-Fast and Medium-Slow ITF pace ratings.",
    specs: [
      { label: "Certification",  value: "ITF — Medium / Medium-Fast / Medium-Slow" },
      { label: "Acrylic System", value: "Primer + Resurfacer + Sand-Mix Colour Coat" },
      { label: "Cushion System", value: "Flexipave multi-layer rubber"               },
      { label: "UV Stability",   value: "Colour stable for 10+ years"               },
      { label: "Drainage",       value: "Integrated drainage channels"               },
      { label: "Warranty",       value: "5–8 years"                                  },
    ],
    applications: ["Tennis Courts", "Basketball Courts", "Volleyball Courts", "Handball Courts", "School Playgrounds", "Housing Society Courts"],
  },
  {
    id: "football-futsal-artificial-turf",
    name: "Football & Futsal Artificial Turf",
    category: "Turf",
    description:
      "FIFA Quality Pro 3G turf and 45mm non-infill European turf — complete turnkey football and futsal pitch solutions.",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80",
    features: ["FIFA Quality Pro", "3G Twin Yarn Turf", "Non-Infill Option", "Shock Pad System"],
    fullDescription:
      "Turnkey artificial grass solutions for 5-a-side and full-sized football pitches. We provide FIFA Quality and FIFA Quality Pro 3G turf systems featuring twin yarn quad-colour high-Dtex grass with silica sand and rubber infill. We also offer European-made 45mm non-infill high-density turf with PU backing for superior comfort, weather resistance and injury prevention without loose infill.",
    specs: [
      { label: "Certification",  value: "FIFA Quality / FIFA Quality Pro"      },
      { label: "System",         value: "3G twin yarn, quad-colour, high Dtex" },
      { label: "Pile Height",    value: "40mm–60mm (football), 45mm non-infill" },
      { label: "Infill",         value: "Silica sand + rubber crumb"            },
      { label: "Shock Pad",      value: "10mm–20mm bonded rubber"               },
      { label: "Warranty",       value: "8–10 years"                            },
    ],
    applications: ["11v11 Football Pitches", "5-a-Side Pitches", "Futsal Courts", "Training Grounds", "School Sports", "Commercial Venues"],
  },
  {
    id: "hockey-turf",
    name: "Field Hockey Turf",
    category: "Hockey",
    description:
      "FIH-approved hockey turf systems — wet, sand-dressed and 3G synthetic options for official international matches.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80",
    features: ["FIH Approved", "Wet / Sand-Dressed / 3G", "Irrigation Compatible", "Shockpad Included"],
    fullDescription:
      "International Hockey Federation (FIH) approved and certified hockey turf systems for official matches. Options include non-filled 'wet' hockey turf (10mm–18mm pile with irrigation and shockpad), sand-dressed turf (13mm–20mm pile with >25% sand infill), sand-filled turf and long-pile 3G synthetic turf. Each system is tailored to climate conditions, budget and facility requirements.",
    specs: [
      { label: "Certification",   value: "FIH Approved & Certified"           },
      { label: "Wet Turf",        value: "10mm–18mm pile, irrigation required" },
      { label: "Sand-Dressed",    value: "13mm–20mm pile, >25% sand infill"    },
      { label: "3G Option",       value: "Long-pile synthetic turf"            },
      { label: "Shockpad",        value: "Included in all systems"             },
      { label: "Warranty",        value: "8 years"                             },
    ],
    applications: ["International Hockey Venues", "National Hockey Federations", "University Hockey Fields", "Club Facilities", "Training Centres", "Schools"],
  },
  {
    id: "running-track",
    name: "Athletic Running Tracks",
    category: "Track",
    description:
      "IAAF/World Athletics certified sandwich, spray-coat and EPDM composite running track systems for competitions and training.",
    image: "/Running Track.jpeg",
    features: ["IAAF Certified", "Sandwich System", "Spray-Coat Option", "EPDM/SBR Composite"],
    fullDescription:
      "World Athletics (IAAF) certified outdoor synthetic track systems for daily training and competitions. Systems include the Sandwich Running Track System (rubber elastic base layer, full-PU levelling/buffer layers, EPDM broadcast top layer), Spray-Coat Permeable System and EPDM/SBR composite track systems. Engineered for optimal energy return, weather durability and spike resistance.",
    specs: [
      { label: "Certification",  value: "IAAF / World Athletics"                    },
      { label: "System 1",       value: "Sandwich — rubber base + PU + EPDM top"    },
      { label: "System 2",       value: "Spray-coat permeable"                      },
      { label: "System 3",       value: "EPDM/SBR composite"                        },
      { label: "Top Layer",      value: "EPDM broadcast finish"                     },
      { label: "Performance",    value: "Optimal energy return, spike resistant"    },
    ],
    applications: ["Athletic Stadiums", "University Tracks", "School Sports Grounds", "Training Facilities", "Community Athletics", "Competition Venues"],
  },
  {
    id: "gym-fitness-flooring",
    name: "Gym & Fitness Flooring",
    category: "Gym",
    description:
      "Vulcanized rubber tiles, EPDM interlocking systems and anti-fatigue PVC rolls for commercial gyms and fitness centres.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    features: ["Vulcanized Rubber", "Interlocking System", "11mm–12mm Thickness", "Anti-Fatigue PVC"],
    fullDescription:
      "Heavy-duty fitness flooring designed to absorb shock from heavy weights and reduce joint fatigue. We supply vulcanized molded pure rubber tiles with interlocking systems (Omipol 11mm and Flexipoli 12mm tiles — dotted, corrugated or plain gloss), BS-series recycled tire/EPDM rubber tiles and anti-fatigue PVC rolls (2mm thick, 0.3mm wear layer). Ideal for weight rooms, crossfit areas and commercial fitness centres.",
    specs: [
      { label: "Rubber Tiles",   value: "Omipol 11mm, Flexipoli 12mm"          },
      { label: "Finishes",       value: "Dotted, corrugated or plain gloss"     },
      { label: "EPDM Option",    value: "BS-series recycled tire / EPDM tiles"  },
      { label: "PVC Rolls",      value: "2mm thickness, 0.3mm wear layer"       },
      { label: "System",         value: "Interlocking — no adhesive needed"     },
      { label: "Load Rating",    value: "Heavy-duty — Olympic weight rated"     },
    ],
    applications: ["Commercial Gyms", "CrossFit Boxes", "Weight Rooms", "Hotel Fitness Centres", "University Gyms", "Home Fitness Areas"],
  },
  {
    id: "kids-play-flooring",
    name: "Kids Play Area Flooring",
    category: "Play",
    description:
      "Non-toxic EVA foam tiles and EPDM rubber playground flooring — critical fall protection up to 3 metres for safe play.",
    image: "/Kids Play Area.jpeg",
    features: ["Non-Toxic", "2.5cm EVA Foam", "EPDM In-Situ", "3m Fall Protection"],
    fullDescription:
      "Safe, non-toxic and impact-absorbing flooring for children's playrooms, schools and outdoor playgrounds. EVA interlocking soft foam tiles (2.5cm thick — waterproof, smell-free, anti-slip) for indoor areas. Outdoor EPDM in-situ rubber flooring over SBR shockpad base provides critical fall height protection up to 3 metres, flame resistance and wheelchair accessibility.",
    specs: [
      { label: "Indoor Option",  value: "EVA interlocking foam tiles, 2.5cm"  },
      { label: "Outdoor Option", value: "EPDM in-situ over SBR shockpad"      },
      { label: "Fall Protection", value: "Up to 3 metres critical fall height" },
      { label: "Properties",     value: "Waterproof, smell-free, anti-slip"   },
      { label: "Safety",         value: "Flame resistant, wheelchair access"  },
      { label: "Materials",      value: "Non-toxic, child-safe certified"      },
    ],
    applications: ["School Playgrounds", "Kindergartens", "Indoor Playrooms", "Residential Play Areas", "Commercial Play Zones", "Nurseries"],
  },
  {
    id: "civil-works-fabrication",
    name: "Civil Works & Fabrication",
    category: "Civil",
    description:
      "Complete civil infrastructure by qualified engineers — site prep, foundations, lighting poles, fencing, netting and goal posts.",
    image: "/images/manufacturing/mfg-installation.jpg",
    features: ["Qualified Engineers", "High-Mast LED Lighting", "Perimeter Fencing", "Goal Posts & Hoops"],
    fullDescription:
      "Comprehensive civil infrastructure services managed by seasoned and qualified civil engineers, covering site preparation, foundation grading and remodelling. Sports fabrication includes installation of high-mast lighting poles, LED floodlighting systems, perimeter fencing, heavy-duty safety netting, goal posts and basketball hoop structures. We handle the full civil scope so you deal with one contractor for the entire project.",
    specs: [
      { label: "Engineering",    value: "Qualified civil engineers on-site"     },
      { label: "Site Works",     value: "Clearing, levelling, foundation"       },
      { label: "Lighting",       value: "High-mast poles + LED floodlights"     },
      { label: "Fencing",        value: "Perimeter chain-link or panel fencing" },
      { label: "Safety Netting", value: "Heavy-duty sports safety nets"         },
      { label: "Structures",     value: "Goal posts, basketball hoops, poles"   },
    ],
    applications: ["Sports Complexes", "Football Grounds", "Multi-Sport Facilities", "Schools & Universities", "Commercial Venues", "Residential Societies"],
  },
  {
    id: "pvc-sports-flooring",
    name: "PVC Sports Flooring",
    category: "PVC",
    description:
      "BWF-approved 2mm–5mm PVC roll flooring — anti-skid, fiberglass-reinforced with solvent-free PUR coating.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    features: ["BWF Approved", "2mm–5mm Thickness", "Anti-Skid PUR Coating", "Fiberglass Reinforced"],
    fullDescription:
      "BWF-approved PVC roll-form sports flooring (2.0mm–5.0mm thick) featuring anti-skid surfaces, solvent-free PUR coatings and fiberglass reinforcement for long-term durability. Available in rolls or tiles, PVC can be installed quickly and cost-effectively. Excellent cushioning, easy maintenance and hygienic surface resistant to bacteria and moisture.",
    specs: [
      { label: "Certification",  value: "BWF Approved"                            },
      { label: "Thickness",      value: "2.0mm – 5.0mm"                           },
      { label: "Surface",        value: "Anti-skid, solvent-free PUR coating"     },
      { label: "Reinforcement",  value: "Fiberglass layer"                        },
      { label: "Installation",   value: "Glue-down or loose-lay"                  },
      { label: "Warranty",       value: "3–5 years"                               },
    ],
    applications: ["Badminton Courts", "Table Tennis", "Dance Studios", "Fitness Centres", "Multi-Purpose Halls", "Indoor Football"],
  },
  {
    id: "pu-sports-flooring",
    name: "PU Sports Flooring",
    category: "PU",
    description:
      "Seamless polyurethane sports flooring — FIBA Level 1 & BWF certified, 7–15mm systems with 53–75% force reduction.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    features: ["FIBA Level 1", "BWF Certified", "Fully Seamless", "53–75% Force Reduction"],
    fullDescription:
      "Polyurethane (PU) sports flooring — the choice of professional venues worldwide. Applied as liquid and cured in place, it forms a completely seamless surface with exceptional elasticity and impact absorption. Our PU systems are certified to FIBA Level 1 and BWF standards. Available in 7–15mm system thickness with matte or satin finish and custom logo painting.",
    specs: [
      { label: "Certification",  value: "FIBA Level 1, BWF Approved"          },
      { label: "Material",       value: "Polyurethane — fully seamless"        },
      { label: "Thickness",      value: "7mm – 15mm system"                    },
      { label: "Force Reduction", value: "53–75%"                              },
      { label: "Finish",         value: "Matte or satin, custom logo option"   },
      { label: "Warranty",       value: "10 years"                             },
    ],
    applications: ["Professional Basketball", "Badminton Academies", "Volleyball Courts", "Squash Courts", "University Sports Halls", "Competition Venues"],
  },
];

// ============================================================
// PROJECTS
// ============================================================
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
    surface: "FIP Acrylic Padel Surface",
    description: "A complete padel club with 4 FIP-standard courts featuring full glass enclosures, Forte structure, blue acrylic surfaces, electro-welded wire mesh, LED flood lighting and spectator seating.",
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
    description: "A 6-court ITF-certified tennis academy with acrylic hard court surfaces, professional line markings, perimeter fencing and LED floodlighting.",
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
    description: "Full-size indoor basketball arena with FIBA-standard PU flooring, maple-look finish, shock absorption system, LED sports lighting and spectator seating for 300.",
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
    surface: "WSF Maple Hardwood Floor",
    description: "Four WSF-standard squash courts with glass back walls, 52–55mm maple hardwood flooring system with EPDM shock pad, professional line markings and integrated lighting.",
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
    description: "Commercial indoor futsal arena with 2 full-size courts, FIFA futsal line markings, shock-absorbent PVC flooring and LED floodlighting.",
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
    surface: "FIFA Quality Pro 3G Artificial Turf",
    description: "Full-size 11v11 football pitch with FIFA Quality Pro 3G turf, rubber crumb infill, 15mm shock pad, LED floodlighting, perimeter fencing and coaching pavilion.",
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
    description: "Luxury hotel sports complex with multi-purpose sports hall, fitness studio PVC flooring and rooftop mini tennis court — all finished to 5-star standards.",
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
    surface: "FIP Synthetic Padel Surface",
    description: "Three FIP-standard padel courts in a premium residential society — Panoramic glass structure, blue synthetic surface, LED lighting and a club lounge.",
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================
export const testimonials = [
  {
    id: "1",
    quote: "Honestly impressed. From the first meeting to final handover, the team was professional and the padel court surface is world-class.",
    name: "Ahmed Raza",
    company: "Premier Sports Club",
    project: "Padel Court — Lahore",
  },
  {
    id: "2",
    quote: "Our tennis academy now has a court that looks and plays like something out of a top European facility. Great work.",
    name: "Usman Malik",
    company: "National Tennis Academy",
    project: "Tennis Court — Karachi",
  },
  {
    id: "3",
    quote: "The basketball floor they installed for our university is solid — students love it and it still looks new after two years.",
    name: "Dr. Farhan Ahmed",
    company: "University of Lahore",
    project: "Sports Complex — Islamabad",
  },
  {
    id: "4",
    quote: "They handled everything — design, materials, installation. Our football ground is now one of the best training facilities in the region.",
    name: "Coach Bilal Hassan",
    company: "Football Training Academy",
    project: "Training Ground — Rawalpindi",
  },
];

// ============================================================
// PROCESS STEPS
// ============================================================
export const processSteps = [
  { step: "01", title: "Consultation",        description: "We sit down with you, understand your sport, your space and your budget — no pressure, just a straight conversation." },
  { step: "02", title: "Site Assessment",     description: "Our team visits the site, takes measurements, checks ground conditions and tells you exactly what's needed." },
  { step: "03", title: "Design & Planning",   description: "We create a full project plan with layouts, material specs and a clear timeline — so you know what to expect." },
  { step: "04", title: "Material Selection",  description: "We show you your options — imported brands, local production, different surface types — and help you decide." },
  { step: "05", title: "Supply & Manufacturing", description: "We manufacture or import the right materials and deliver them to site on time, every time." },
  { step: "06", title: "Installation",        description: "Our trained installation crew gets to work — methodical, clean and precise from day one to completion." },
  { step: "07", title: "Quality Check",       description: "Before handover, every surface is inspected against international standards. No shortcuts." },
  { step: "08", title: "Handover",            description: "You get the full package — completed facility, documentation, care guide and our ongoing support." },
];

// ============================================================
// WHY CHOOSE US
// ============================================================
export const whyChooseUs = [
  { number: "01", title: "Premium Materials",    description: "We import directly from top international brands — every surface meets global quality standards." },
  { number: "02", title: "Expert Installation",  description: "100+ projects completed by our trained crews. We know exactly what we're doing." },
  { number: "03", title: "20+ Years Experience", description: "Padel, tennis, basketball, squash, futsal, hockey, running tracks — we've built them all." },
  { number: "04", title: "Quality Control",      description: "Every project is inspected before handover. We don't cut corners." },
  { number: "05", title: "End-to-End Service",   description: "Design, supply, civil works, install, hand over — one team handles everything." },
  { number: "06", title: "After-Sales Support",  description: "We stay in touch after completion. Maintenance, repairs — we're always available." },
];
