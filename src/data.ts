import { Stage, Product, FAQ, Metric } from './types';

export const METRICS: Metric[] = [
  { label: "Founded", value: "2014", description: "Over a decade of sustainable trading" },
  { label: "Global Reach", value: "40+ Countries", description: "Trusted partner across EU, Americas, and APAC" },
  { label: "Cultivated Area", value: "4,500+ Hectares", description: "Sourced through certified local farmer cooperatives" },
  { label: "Sustainable Sourcing", value: "100% Chemical-Free", description: "Zero toxic synthetic pesticides or additives" },
];

export const STAGES: Stage[] = [
  {
    id: "sourcing",
    stageNumber: "Stage 01",
    title: "Sustainable Sourcing",
    brief: "We partner with local farmers who employ traditional, chemical-free cultivation methods in biodiversity-rich spice gardens across Karnataka and Kerala.",
    mainImage: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=600&auto=format&fit=crop",
    mainImageLabel: "Traditional Cardamom Groves, Kerala",
    sideImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop",
    sideImageLabel: "Areca Palm Plantations, Karnataka"
  },
  {
    id: "quality",
    stageNumber: "Stage 02",
    title: "Quality Custody",
    brief: "Rigorous laboratory testing for moisture content, purity, and microbial standards ensures only the premium-grade harvest reaches our global clients.",
    mainImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop",
    mainImageLabel: "Multi-tier Inspection Process & Quality Line",
    sideImage: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?q=80&w=600&auto=format&fit=crop",
    sideImageLabel: "FDA Certified Lab Purity & Chromatography Analysis"
  },
  {
    id: "processing",
    stageNumber: "Stage 03",
    title: "Eco-friendly Processing",
    brief: "We harness green technology for processing spices and moulding fallen areca leaves without harmful chemicals, keeping our environmental footprint near zero.",
    mainImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
    mainImageLabel: "Precision Heat Press Block without Binders",
    subCards: [
      {
        title: "Natural Sun Drying",
        description: "Solar-assisted, moisture-controlled slow reduction safeguarding natural aroma.",
        image: "https://images.unsplash.com/photo-1596701062351-df5f8a42f3c5?q=80&w=600&auto=format&fit=crop"
      },
      {
        title: "UV Sterilization",
        description: "Non-chemical microbial management using high-frequency safe light channels.",
        image: "https://images.unsplash.com/photo-1584036561566-baf241830990?q=80&w=600&auto=format&fit=crop"
      },
      {
        title: "Precision Moulding",
        description: "Heat-pressed into premium plates & bowls with zero synthetic fillers or glues.",
        image: "https://images.unsplash.com/photo-1594911774802-8822a707caff?q=80&w=600&auto=format&fit=crop"
      },
      {
        title: "Controlled Storage",
        description: "Sealed flavor preservation silos maintaining critical air temperature indexes.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "logistics",
    stageNumber: "Stage 04",
    title: "Global Logistics",
    brief: "From our door to your port, we manage every detail of the export process with premium moisture-barrier packaging, seamless documentation, and container tracking.",
    mainImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop",
    mainImageLabel: "Efficient Ocean Transit & Shipping",
    subCards: [] // Special list UI in layout
  }
];

export const PRODUCTS: Product[] = [
  // Spices
  {
    id: "sp-cardamom",
    name: "Premium Green Cardamom Pods",
    category: "spices",
    image: "https://images.unsplash.com/photo-1627662236973-4f8259fa2441?q=80&w=600&auto=format&fit=crop",
    origin: "Idukki, Kerala, India",
    description: "Bold green cardamom pods selected carefully by size (7.5mm - 8mm+). Grown in biodiverse forest canopies which results in rich volatile essential oil content.",
    grade: "AGEB (Bold Regular Quality)",
    moisture: "< 10.5%",
    packingAvailable: ["Vacuum Seal 10kg Barrier Bag", "Double-layered PP bags 25kg"],
    specifications: [
      { param: "Volatile Oil Content", value: "Min 4.5% v/w" },
      { param: "Foreign Matter Spores", value: "Max 0.2%" },
      { param: "Thrips / Immature pods", value: "Max 1.0%" },
      { param: "Color Grading Index", value: "Deep Natural Green [Grade A]" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 18500, // USD per metric ton
    unitLabel: "Metric Ton",
    minOrderQty: 2
  },
  {
    id: "sp-pepper",
    name: "Malabar Bold Black Pepper",
    category: "spices",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=600&auto=format&fit=crop",
    origin: "Wayanad, Kerala, India",
    description: "Picked at optimum maturity and sun-dried naturally. Provides punchy levels of piperine, hot heat, and complex citrus undertones.",
    grade: "MUG-1 (Grade Premium Black)",
    moisture: "< 11.0%",
    packingAvailable: ["High barrier multi-wall kraft bags 20kg", "Jute sacks with food-grade LDPE liner 50kg"],
    specifications: [
      { param: "Piperine Concentration", value: "4.8% to 5.2%" },
      { param: "Bulk Density (g/L)", value: "Min 580 g/L" },
      { param: "Extraneous Matter", value: "Max 0.4%" },
      { param: "Aflatoxin Content", value: "None Detected [Below Limit]" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 6400,
    unitLabel: "Metric Ton",
    minOrderQty: 5
  },
  {
    id: "sp-turmeric-finger",
    name: "Alleppey Finger Turmeric (Whole)",
    category: "spices",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop",
    origin: "Alleppey, Kerala, India",
    description: "Deep orange fingers renowned globally for high curcumin levels. Double-polished for a bright, flawless earthy finish.",
    grade: "Premium Double Polished Finger",
    moisture: "< 9.0%",
    packingAvailable: ["Aseptic bulk packaging bags 25kg", "Polylined woven sacks 50kg"],
    specifications: [
      { param: "Curcumin Percentage", value: "Min 5.5% (HPLC tested)" },
      { param: "Insoluble Ash Content", value: "Max 0.5%" },
      { param: "Lead & Heavy Metals", value: "Passed EU Compliance standard" },
      { param: "Sieve Quality %", value: "98% Retained on standard gauge" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 2800,
    unitLabel: "Metric Ton",
    minOrderQty: 5
  },
  {
    id: "sp-turmeric-powder",
    name: "Nizamabad Premium Turmeric Powder",
    category: "spices",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=600&auto=format&fit=crop",
    origin: "Nizamabad, Telangana, India",
    description: "Finely ground, aromatic golden yellow ground turmeric. Exquisitely processed under cryogenic milling to lock in freshness, oil density, and medicinal curcumin values.",
    grade: "Export grade (Ultra-Fine 100 Mesh)",
    moisture: "< 8.0%",
    packingAvailable: ["Multi-layer Kraft Paper Bags with Inner PE 25kg", "Aluminium Food Foil Packs 5kg"],
    specifications: [
      { param: "Curcumin Content", value: "Min 3.8% to 4.5%" },
      { param: "Total Ash Content", value: "Max 7.0%" },
      { param: "Starch Adulterants", value: "0% [Chemically Purity Guaranteed]" },
      { param: "Salmonella Level", value: "Absent in 25 grams" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 2100,
    unitLabel: "Metric Ton",
    minOrderQty: 5
  },
  {
    id: "sp-chilli-guntur",
    name: "Guntur Teja Red Chilli Powder",
    category: "spices",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600&auto=format&fit=crop",
    origin: "Guntur, Andhra Pradesh, India",
    description: "Highly pungent, fiery bright red chilli powder ground from handpicked Stemless Teja Chillies. Promotes uniform vibrant red coloration and intense heat.",
    grade: "Hot Pepper Powder (Stemless Pure)",
    moisture: "< 8.5%",
    packingAvailable: ["High Barrier Vacuum Moisture Seal Bags 20kg", "Double Poly-lined Gunny Bags 40kg"],
    specifications: [
      { param: "Pungency Range (Scoville)", value: "35,000 - 55,000 SHU" },
      { param: "Color Value (ASTA)", value: "Min 80 - 100 ASTA" },
      { param: "Aflatoxin Rating", value: "Max 5 ppb [Strict EU Limits]" },
      { param: "Sudan Dye Additives", value: "Negative [15-Point Gas Tested]" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 3900,
    unitLabel: "Metric Ton",
    minOrderQty: 3
  },
  {
    id: "sp-chilli-kashmiri",
    name: "Kashmiri Lal Mirch (Mild Chilli Powder)",
    category: "spices",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=600&auto=format&fit=crop",
    origin: "Anantnag, Jammu & Kashmir, India",
    description: "Finely ground authentic Kashmiri red dry chillies. Gives an ultra-premium, deeply saturated royal crimson red color to foods with a mild, delightful sweet warmth.",
    grade: "Premium Royal Red Ground",
    moisture: "< 9.0%",
    packingAvailable: ["Aluminium foil vacuum packs 10kg", "Multi-wall kraft paper sacks 25kg"],
    specifications: [
      { param: "Pungency Range (Scoville)", value: "8,000 - 12,000 SHU (Mild Heat)" },
      { param: "Color Value (ASTA)", value: "110 - 140 ASTA [Super Color]" },
      { param: "Ash Content", value: "Max 6.5%" },
      { param: "Artificial Dye Test", value: "Passed Non-GMO, 100% Free" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 4400,
    unitLabel: "Metric Ton",
    minOrderQty: 3
  },
  {
    id: "sp-cumin",
    name: "Saurashtra Premium Cumin Seeds",
    category: "spices",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=600&auto=format&fit=crop",
    origin: "Unjha/Rajkot, Gujarat, India",
    description: "Highly aromatic cumin seeds (Jeera) harvested at peak maturity. Known for high volatile oil content and warm, deep earthy profile.",
    grade: "Singapore Quality 99% Purity",
    moisture: "< 8.0%",
    packingAvailable: ["Multi-layer paper bags 25kg", "Jute bags with inner poly-line 50kg"],
    specifications: [
      { param: "Volatile Essential Oil", value: "Min 2.5% v/w" },
      { param: "Total Ash Value", value: "Max 8.5%" },
      { param: "Admixture Ratio", value: "Max 1.0%" },
      { param: "Pesticide Residues", value: "Zero [Clean Lab Tested]" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 4800,
    unitLabel: "Metric Ton",
    minOrderQty: 5
  },
  {
    id: "sp-cumin-powder",
    name: "Aromatic Premium Jeera Powder",
    category: "spices",
    image: "/src/assets/images/premium_jeera_powder_1779867756589.png",
    origin: "Unjha, Gujarat, India",
    description: "Finely ground from premium sortex cumin seeds, retaining natural warmth, intense earthiness, and rich essential spice oils under temperature-controlled milling.",
    grade: "Premium Fine Ground 100% Pure",
    moisture: "< 8.0%",
    packingAvailable: ["Aluminium foil vacuum packs 10kg", "Multi-wall kraft paper sacks 25kg"],
    specifications: [
      { param: "Volatile Essential Oil", value: "Min 1.8% v/w" },
      { param: "Total Ash Value", value: "Max 7.5%" },
      { param: "Sieve Passage Index", value: "98% through 80 mesh" },
      { param: "Microbial Load", value: "Passed EU Compliance Level" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 5100,
    unitLabel: "Metric Ton",
    minOrderQty: 3
  },
  {
    id: "sp-cloves",
    name: "Premium Malabar Cloves",
    category: "spices",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=600&auto=format&fit=crop",
    origin: "Nagercoil, Tamil Nadu, India",
    description: "Sun-dried robust flower buds (Laung) featuring intense warmth. Hand-sorted containing zero headless cloves or twigs to preserve pristine eugenol levels.",
    grade: "Grade CG-1 Handpicked",
    moisture: "< 10.0%",
    packingAvailable: ["Premium vacuum pack 15kg cartons", "Standard clean PP bags 25kg"],
    specifications: [
      { param: "Eugenol Percentage", value: "Min 15% to 18%" },
      { param: "Headless Cloves Count", value: "Max 2.0%" },
      { param: "Extraneous Stems/Twigs", value: "Max 0.5%" },
      { param: "Aflatoxin Rating", value: "Undetected/Negative" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 9200,
    unitLabel: "Metric Ton",
    minOrderQty: 2
  },
  {
    id: "sp-coriander-ground",
    name: "Gujarat Green Coriander Powder",
    category: "spices",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop",
    origin: "Gondal, Gujarat, India",
    description: "Finely ground coriander seeds (Dhania Powder). Uniformly milled under controlled temperatures to retain their highly fragrant, sweet citric aroma.",
    grade: "Superfine Double Parrot Grade",
    moisture: "< 8.5%",
    packingAvailable: ["HM-HDPE inside double woven bags 25kg", "Laminated craft pouches 5kg"],
    specifications: [
      { param: "Volatile Herb Oils", value: "Min 0.8% v/w" },
      { param: "Total Ash Value", value: "Max 6.0%" },
      { param: "Starch & Silt Mix", value: "0.0% [100% Pure Coriander]" },
      { param: "Coliform Bacteria Count", value: "Negative / Sterile" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 1850,
    unitLabel: "Metric Ton",
    minOrderQty: 5
  },
  {
    id: "sp-cinnamon",
    name: "Kerala Premium Cinnamon Sticks (Dalchini)",
    category: "spices",
    image: "https://images.unsplash.com/photo-1509358721191-03cca0e980f7?q=80&w=600&auto=format&fit=crop",
    origin: "Wayanad, Kerala, India",
    description: "Sweet, highly aromatic quills of organic Ceylon/cassia type cinnamon bark grown along Kerala's moist western slopes. Warm, highly aromatic bite.",
    grade: "Exporters Special Whole Quill",
    moisture: "< 9.5%",
    packingAvailable: ["Heavy rigid corrugated cartons 10kg", "Poly bags with inner lining 25kg"],
    specifications: [
      { param: "Cinnamaldehyde Level", value: "Min 1.2% v/w" },
      { param: "Sandalwood/Silt Ash", value: "Max 1.0%" },
      { param: "Chemical Bleaching Agent", value: "Absent [Untouched, natural color]" },
      { param: "Mold Rating Index", value: "0.0% [Dry Box Humidity Managed]" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 5200,
    unitLabel: "Metric Ton",
    minOrderQty: 2
  },
  {
    id: "sp-fennel",
    name: "Unjha Bold Fennel Seeds",
    category: "spices",
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=600&auto=format&fit=crop",
    origin: "Unjha, Gujarat, India",
    description: "Slightly sweet and intensely aromatic fennel seeds (Saunf), widely preferred as a natural digestive and B2B confectionery ingredient.",
    grade: "Premium Bold Green Extra",
    moisture: "< 9.5%",
    packingAvailable: ["Woven high-density bags 25kg", "Laminated kraft barrier sacks 15kg"],
    specifications: [
      { param: "Anethole Level (Oil)", value: "Min 1.5% to 1.8%" },
      { param: "Foreign Seeds", value: "Max 0.2%" },
      { param: "Damaged / Shriveled Cur", value: "Max 0.8%" },
      { param: "ISO Standard Check", value: "ISO 3588 Compliant" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 2450,
    unitLabel: "Metric Ton",
    minOrderQty: 4
  },
  {
    id: "sp-nutmeg-mace",
    name: "Kerala Whole Nutmeg & Mace (Jaiphal & Javitri)",
    category: "spices",
    image: "https://images.unsplash.com/photo-1532713109643-df9b541fb06b?q=80&w=600&auto=format&fit=crop",
    origin: "Kottayam, Kerala, India",
    description: "Dual crop packaging. High grade whole shelled jaiphal nutmeg accompanied with selected golden-orange lacy dry outer mace flower rings.",
    grade: "Super ABCD Shelled Whole Nutmeg",
    moisture: "< 8.0%",
    packingAvailable: ["Cardboard cases with vacuum chambers 15kg", "PP Bags 25kg"],
    specifications: [
      { param: "Essential Oleoresins", value: "Min 7.5% concentration" },
      { param: "Mouldy Broken Shells", value: "0% [Double physical desk sorted]" },
      { param: "Aflatoxin B1 Level", value: "Below 2 ppb [EU Safety standard]" },
      { param: "Sieve Caliber Size", value: "Perfect Uniform Oval Selection" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 8900,
    unitLabel: "Metric Ton",
    minOrderQty: 1
  },

  // Areca Tables
  {
    id: "ar-plate-round-12",
    name: "12-inch Majestic Round Banquet Plates",
    category: "areca",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop",
    origin: "Areca Belts, Karnataka, India",
    description: "Our largest round plate option, designed for premium weddings, hefty buffet feasts and multi-course dining. Heavy-duty construction that doesn't sag or leakage.",
    grade: "Export Gold Super Class (12-inch)",
    moisture: "< 6.0% (Oven-stabilized)",
    packingAvailable: ["Poly shrink bundle of 25", "Export cardboard box 250pcs"],
    specifications: [
      { param: "Diameter Dimension", value: "30 cm / 12 Inch Round Bowl-rimmed" },
      { param: "Thermal Rigidity Index", value: "Safe for microwave & hot gravies" },
      { param: "Water Resistance Hour", value: "Holds liquids securely beyond 4 hours" },
      { param: "Surface Finish", value: "Satin Polished fallen sheath textures" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 180, // USD per 1000 pieces
    unitLabel: "1k Pieces",
    minOrderQty: 20
  },
  {
    id: "ar-plate-round-10",
    name: "10-inch Premium Round Areca Plates",
    category: "areca",
    image: "https://images.unsplash.com/photo-1531384370597-8590413be53a?q=80&w=600&auto=format&fit=crop",
    origin: "Areca Belts, Karnataka, India",
    description: "Standard dinner plates pressed from fallen palm sheaths. Features beautiful leaf patterns resembling exotic wood grain. Natural insulating, thick, water-safe, and 100% biodegradable.",
    grade: "Export Super Gold Grade (10-inch)",
    moisture: "< 6.0% (Oven-stabilized)",
    packingAvailable: ["Shrink-wrapped cluster of 25", "Export cardboard cartons 300pcs"],
    specifications: [
      { param: "Diameter Dimension", value: "25 cm / 10 Inch Round" },
      { param: "Thermal Rigidity Index", value: "Safe for microwave & freezer" },
      { param: "Hot Oil Resistance", value: "Holds liquids for up to 4 hours" },
      { param: "Biodegradation time", value: "Completely composts in 60-90 days" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 140, // USD per 1000 pieces
    unitLabel: "1k Pieces",
    minOrderQty: 30
  },
  {
    id: "ar-plate-round-7",
    name: "7-inch Small Dessert & Salad Plates",
    category: "areca",
    image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=600&auto=format&fit=crop",
    origin: "Udupi, Karnataka, India",
    description: "Dainty petite round plates engineered specifically for small pastries, appetizers, individual salad starters, side plates, or premium cake service.",
    grade: "Smooth Class Grade-A Special (7-inch)",
    moisture: "< 6.5%",
    packingAvailable: ["Shrink cluster of 25", "Export cartons 500pcs"],
    specifications: [
      { param: "Diameter Dimension", value: "18 cm / 7 Inch Round" },
      { param: "Bottom Depth", value: "1.2 cm raised lip" },
      { param: "Tensile Elasticity", value: "Sturdy [No cracking under pressure]" },
      { param: "Heavy Metals / Lead", value: "Zero [SGS laboratory certified]" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 85, // USD per 1000 pieces
    unitLabel: "1k Pieces",
    minOrderQty: 50
  },
  {
    id: "ar-plate-square-10",
    name: "10-inch Elegant Square Dine Plates",
    category: "areca",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    origin: "Shimoga, Karnataka, India",
    description: "Chic square shapes adding a highly contemporary geometric vibe to gourmet plating. Prominent raised linear walls prevent curry spills during movement.",
    grade: "Export Deluxe Premium Square (10-inch)",
    moisture: "< 6.0%",
    packingAvailable: ["Clean shrink package of 20", "Heavy Master cardboard 300pcs"],
    specifications: [
      { param: "Size Outlines", value: "25cm x 25cm Square Plate" },
      { param: "Edge Profile", value: "Rounded crisp corner folds" },
      { param: "Tear Resistance", value: "Excellent dry/wet fiber ratio" },
      { param: "Fumigation Certs", value: "SGS Gamma Air treated safe" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 165, // USD per 1000 pieces
    unitLabel: "1k Pieces",
    minOrderQty: 30
  },
  {
    id: "ar-plate-square-8",
    name: "8-inch Modern Square Lunch Plates",
    category: "areca",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop",
    origin: "Karnataka, India",
    description: "Medium-sized square model, perfect for lunches, school/company catered brunches or heavy hors d'oeuvres stations.",
    grade: "Export Standard Smooth Class (8-inch)",
    moisture: "< 6.5%",
    packingAvailable: ["Shrink-wrapped cluster of 20", "Export cardboard cartons 400pcs"],
    specifications: [
      { param: "Size Outlines", value: "20cm x 20cm Square" },
      { param: "Edge Thickness", value: "1.8mm - 2.2mm" },
      { param: "Tensile Strength", value: "Very High [Does not bend under load]" },
      { param: "Chemicals/Bleach", value: "0% [Washed with raw sanitized water]" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 120, // USD per 1000 pieces
    unitLabel: "1k Pieces",
    minOrderQty: 40
  },
  {
    id: "ar-plate-rectangle-tray",
    name: "10x6-inch Elegant Rectangle Areca Trays",
    category: "areca",
    image: "https://images.unsplash.com/photo-1536304997881-a372c179924b?q=80&w=600&auto=format&fit=crop",
    origin: "Channapatna, Karnataka, India",
    description: "Elongated flat platter design ideal for serving sushi, kebabs, street food appetizers, or baked goods. Stylish and heavily structured.",
    grade: "Export Grade Flat Rectangular Platter",
    moisture: "< 6.0%",
    packingAvailable: ["Shrink cluster of 25", "Export cardboard box 400pcs"],
    specifications: [
      { param: "Dimensions Area", value: "25.5 cm x 15.2 cm Rectangular Tray" },
      { param: "Bending Index", value: "Non-flexible, rigid central base" },
      { param: "Microwave safe", value: "Guaranteed up to 2 mins at High Power" },
      { param: "Decomposition rate", value: "100% soil bio-compost within 8 weeks" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 145, // USD per 1000 pieces
    unitLabel: "1k Pieces",
    minOrderQty: 30
  },
  {
    id: "ar-plate-hexagonal",
    name: "9-inch Hexagonal Contemporary Designer Plates",
    category: "areca",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600&auto=format&fit=crop",
    origin: "Mangalore, Karnataka, India",
    description: "Highly unique six-sided geometric dining plate to elevate visual aesthetic. Extensively requested by luxury caterers doing artisanal food festivals.",
    grade: "Geometric Class-A Designer series (9-inch)",
    moisture: "< 6.0%",
    packingAvailable: ["Hygienic shrink wrap packs of 20", "Corrugated master boxes 300pcs"],
    specifications: [
      { param: "Structural Shape", value: "6-sided Hexagon (Hex Plate)" },
      { param: "Caliber Diameter", value: "23 cm corner-to-corner" },
      { param: "Side Wall Lip", value: "1.5cm high anti-leak raise" },
      { param: "Chemical Bleaching", value: "100% Free [True organic leaf skin]" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 150, // USD per 1000 pieces
    unitLabel: "1k Pieces",
    minOrderQty: 30
  },
  {
    id: "ar-plate-heart",
    name: "8-inch Heart-Shaped Novelty Dessert Plates",
    category: "areca",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=600&auto=format&fit=crop",
    origin: "Udupi, Karnataka, India",
    description: "Beautiful heart shaped pressed plates bringing organic warmth and fun romantic touches to wedding cake stations, Valentine events or sweet shop caterers.",
    grade: "Creative Novelty Elite Finish (8-inch)",
    moisture: "< 5.8%",
    packingAvailable: ["Custom sleeve packaging of 15", "Export Cartons 300pcs"],
    specifications: [
      { param: "Visual Design", value: "Symmetrical Heart Contour Sheath" },
      { param: "Sieve Width", value: "19.5 cm span center" },
      { param: "Leakproof Tested", value: "Holds grease, sweet syrups, hot creams flawlessly" },
      { param: "Toxicity Rating", value: "Non-Toxic, completely chemical-free" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 155, // USD per 1000 pieces
    unitLabel: "1k Pieces",
    minOrderQty: 25
  },
  {
    id: "ar-plate-3comp-10",
    name: "10-inch 3-Compartment Feast plates",
    category: "areca",
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=600&auto=format&fit=crop",
    origin: "Areca Belts, Karnataka, India",
    description: "Features 3 designated deep compartments separating entrees, side salads, dry breads and chutneys, ensuring no flavor blend occurs.",
    grade: "Banquets Compartmented Superior Class (10-inch)",
    moisture: "< 6.0%",
    packingAvailable: ["Shrink packs of 25", "Export cartons 250pcs"],
    specifications: [
      { param: "Section Layout", value: "1 Large Main compartment, 2 Equal side pockets" },
      { param: "Section Wall Depth", value: "1.8 cm high divider ribbing" },
      { param: "Oven safe range", value: "Tested up to 180°C for baking/reheating" },
      { param: "Moisture seal", value: "Extremely dry, mildew preventing finish" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 160, // USD per 1000 pieces
    unitLabel: "1k Pieces",
    minOrderQty: 40
  },
  {
    id: "ar-plate-4comp-10",
    name: "10-inch 4-Compartment Deluxe Banquet Plates",
    category: "areca",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
    origin: "Tumkur, Karnataka, India",
    description: "Four separate recessed sections designed for a full Asian, Indian Thali or heavy Western buffet lunch with diverse sides and dessert pockets.",
    grade: "Deluxe Feast Multi-Pocket Series (10-inch)",
    moisture: "< 6.2%",
    packingAvailable: ["Shrink sleeve wrapping of 20", "Export cartons 250pcs"],
    specifications: [
      { param: "Compartment Count", value: "4 pockets (1 massive flat, 3 support wells)" },
      { param: "Wall Rib Rigidity", value: "Heavy-duty pressed single-piece sheath" },
      { param: "Microbial Purity", value: "Passed sanitization sterilizer test" },
      { param: "Grease Proof Index", value: "Very High [Dry/Butter Curries safe]" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 175, // USD per 1000 pieces
    unitLabel: "1k Pieces",
    minOrderQty: 40
  },
  {
    id: "ar-bowl-6",
    name: "6-inch Deep Round Soup & Salad Bowls",
    category: "areca",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
    origin: "Karnataka, India",
    description: "Generously deep bowls forged carefully with a circular flat base. Absolute premium feel for soups, chili, dynamic cereal recipes, salads or shared dips.",
    grade: "Premium Deep Salad & Soup Container (6-inch)",
    moisture: "< 6.0%",
    packingAvailable: ["Hygienic shrink wrap packs of 25", "Export cartons 400pcs"],
    specifications: [
      { param: "Volumetric Capacity", value: "Approx 450 ml (15 fluid oz)" },
      { param: "Total Depth Dimension", value: "5.5 cm deep hollow" },
      { param: "Rim Style", value: "Perfect smooth pressed comfort round lip" },
      { param: "Cold Safety", value: "Safe for freezing dynamic dessert ice creams" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 110, // USD per 1000 pieces
    unitLabel: "1k Pieces",
    minOrderQty: 50
  },
  {
    id: "ar-bowl-4",
    name: "4-inch Mini Souffle & Dip Sauce Bowls",
    category: "areca",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=600&auto=format&fit=crop",
    origin: "Karnataka, India",
    description: "Cute minor circular cups pressed specifically for serving individual chutneys, spice condiments, soy sauces, ice cream scoops, or dry spices sampling.",
    grade: "Mini Souffle & Food Sampling Cup (4-inch)",
    moisture: "< 6.5%",
    packingAvailable: ["Bulk packaging sleeve of 50", "Export boxes 1000pcs"],
    specifications: [
      { param: "Volumetric Capacity", value: "Approx 120 ml (4 fluid oz)" },
      { param: "Total Depth Dimension", value: "3.5 cm deep hollow" },
      { param: "Sieve Quality", value: "100% flat central base prevents tipping" },
      { param: "FOD Biodegradability", value: "Transforms into mineral-rich garden humus" }
    ],
    organic: true,
    fdaCertified: true,
    approxPricePerUnit: 65, // USD per 1000 pieces
    unitLabel: "1k Pieces",
    minOrderQty: 100
  }
];

export const FAQS: FAQ[] = [
  {
    id: "fq1",
    question: "Do you supply organic certification credentials with the shipments?",
    answer: "Yes, every export shipment is accompanied by authorized Phytosanitary Certificates, Certificates of Analysis (COA) printed from our ISO/SGS partner labs, and organic certifications representing the NPOP/USDA Organic regulations.",
    category: "Certifications"
  },
  {
    id: "fq2",
    question: "What is your typical lead time from contract signing to port delivery?",
    answer: "Typically, ocean shipments are ready for FOB dispatch within 14-20 days of advance payment receipt or LC (Letter of Credit) verification. This allows us to packfresh under protective vacuum-seal or gas-flushed packaging.",
    category: "Shipping"
  },
  {
    id: "fq3",
    question: "Can we request custom branding on the Areca leaf dinnerware panels?",
    answer: "Absolutely! We support custom stamp engravings using non-toxic laser branding systems or customized cardboard outer sleeves with your brand logos and food service details.",
    category: "Custom Orders"
  },
  {
    id: "fq4",
    question: "How do you preserve moisture-sensitive cardamom quality during sea transit?",
    answer: "Our premium cardamom utilizes custom three-layer high-barrier vacuum bags that prevent humidity entrance and maintain the critical moisture thresholds under 10.5%, preserving volatile essential oils.",
    category: "Logistics"
  }
];
