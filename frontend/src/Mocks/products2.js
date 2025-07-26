// We could make images an Array. 
export const products = [
  {
    id: "1",
    name: "Serenity Blue Luxe Velvet Pillow",
    description: "Premium velvet pillow with elegant blue hue, perfect for modern living spaces",
    price: 300,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Serenity-Blue-Luxe-Cushion.webp",
    colors: ["Grey Stripe", "Grey", "Off White Boucle", "White"],
    materials: ["Velvet", "Linen"],
    sizes: ["18×18", "20×20"],
    category: "pillow",
    subcategory: "luxury",
    rating: 4.5,
    reviews: 24,
    isNew: Math.random() < 0.5,
    onSale: Math.random() < 0.3,
    stock: 15,
    stock: 15,
    createdAt: "2023-10-15",
    tags: ["velvet", "luxury", "living-room", "bedroom"]
  },
  {
    id: "glossy-pink-curtain-1",
    name: "Glossy Pink Plain Curtain Panel (Pair)",
    description: "Set of 2 elegant glossy pink sheer curtains made from high-quality polyester fabric. Each panel measures 1.5m wide with 2m sheer length (total 3m when hung). Provides excellent light filtration while adding a soft pink hue to your room. Perfect for bedrooms and living spaces seeking modern elegance.",
    price: 2800,
    originalPrice: 3200,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/main/ecommerce-images/curtains/plain-pink-curtain.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/main/ecommerce-images/curtains/plain-pink-curtain.webp",
      // Add more image URLs here
    ],
    colors: ["pink"],
    colorNames: {
      pink: "Blush Pink"
    },
    materials: ["polyester"],
    sizes: [
      {
        name: "Standard Pair",
        panelWidth: "1.5m",
        panelLength: "2m",
        totalWidth: "3m",
        price: 2800
      }
    ],
    category: "curtains",
    subcategory: "glossy",
    collection: "Plain Elegance",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 13,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["sheer-curtains", "pink", "modern", "bedroom", "living-room", "light-filtering"],
    features: [
      "Set of 2 curtain panels",
      "Each panel: 1.5m wide x 2m long",
      "100% polyester sheer fabric",
      "Machine washable",
      "Light filtering",
      "Ready-to-hang"
    ],
    careInstructions: "Machine wash cold with similar colors. Tumble dry low. Do not bleach. Iron on low heat if needed.",
  },
  // White fabric curtain with purple prints
  {
    id: "white-fabric-curtain-with-purple-prints-1",
    name: "White Fabric Curtain with Purple Botanical Prints",
    description: "Elevate your space with this set of 2 premium white curtains featuring elegant purple floral prints. Made from 100% breathable cotton, these curtains combine style with functionality - offering maximum light filtration while maintaining privacy. Each panel measures 1.5m wide (3m total width) with a 2m drop length, perfect for standard windows. The digitally printed design ensures color vibrancy that lasts through multiple washes. Includes matching tie-backs and all necessary hanging hardware for easy installation.",
    price: 3500,
    originalPrice: 4000,
    image: "/images/curtains/white-fabric-curtain-with-purple-prints.webp",
    images: [
      "/images/curtains/white-fabric-curtain-with-purple-prints.webp",
      "/images/curtains/white-fabric-curtain-with-purple-prints2.webp",
    ],
    colors: ["white"],
    colorNames: {
      white: "Classic White"
    },
    materials: ["cotton"],
    sizes: [
      {
        name: "Standard Pair",
        panelWidth: "1.5m",
        panelLength: "2m",
        totalWidth: "3m",
        price: 3500
      },
    ],
    category: "curtains",
    subcategory: "printed-curtains",
    collection: "Botanical Elegance",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 12.5,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["cotton-curtains", "white-curtains", "purple-print", "botanical", "bedroom", "living-room", "light-filtering", "ready-to-hang"],
    features: [
      "Set of 2 premium printed curtain panels",
      "1.5m width per panel (3m total when hung)",
      "2m drop length (standard) or 2.5m (extra long)",
      "100% premium cotton fabric for breathability",
      "Digital printing ensures fade-resistant colors",
      "Includes matching fabric tie-backs",
      "Pre-attached hanging hooks for easy installation",
      "Blocks 85% of light while maintaining privacy"
    ],
    careInstructions: "Machine wash cold (max 30°C) with mild detergent. Tumble dry on low heat. Iron on cotton setting if needed. Do not bleach. For longest life, wash separately before first use.",
  },
  {
    id: "matte-marigold-knot-pillow-1",
    name: "Matte Marigold Knot Pillow",
    description: "A bold and cheerful hand-crafted knot pillow in a soft matte marigold yellow. Its sculptural shape and vivid color add instant charm to any modern or playful interior.",
    price: 500,
    originalPrice: 500,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/matte-marigold-knot-pillow.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/matte-marigold-knot-pillow.webp"
    ],
    colors: ["yellow"],
    colorNames: {
      yellow: "Matte Marigold"
    },
    materials: ["soft cotton blend"],
    category: "knot-pillows",
    subcategory: "decorative",
    collection: "Bright Tones",
    rating: 4.5,
    reviews: 12,
    isNew: true,
    onOffer: false,
    salePercentage: 0,
    createdAt: "2024-01-22",
    stock: 15,
    tags: ["yellow pillow", "knot decor", "marigold", "modern cushion", "bold accent"],
    features: [
      "Handmade knot structure",
      "Soft matte cotton-blend texture",
      "Bright marigold yellow finish",
      "Ideal for living spaces, bedrooms, or nurseries",
      "Lightweight and plush feel"
    ]
  },
  {
    id: "2",
    name: "Emerald Green Art Splash Knot Pillow",
    description: "Handcrafted knot pillow with vibrant emerald green splash design",
    price: 300,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Art-Splash-emerald-green-knot.webp",
    colors: ["Emerald Green"],
    materials: ["Textured Polyester"],
    sizes: ["16×16"],
    category: "pillow",
    subcategory: "statement",
    rating: 4.2,
    reviews: 18,
    isNew: true,
    onSale: Math.random() < 0.3,
    createdAt: "2023-10-15",
    stock: 8,
    tags: ["artistic", "handmade", "accent-piece"]
  },
  {
    id: "glossy-yellow-curtain-1",
    name: "Glossy Yellow Plain Curtain Panel (Pair)",
    description: "Set of 2 elegant glossy yellow sheer curtains made from high-quality polyester fabric. Each panel measures 1.5m wide with 2m sheer length (total 3m when hung). Provides excellent light filtration while adding a soft yellow hue to your room. Perfect for bedrooms and living spaces seeking modern elegance.",
    price: 2800,
    originalPrice: 3200,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/curtains/plain-yellow-curtain.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/curtains/plain-yellow-curtain.webp",
      // Add more image URLs here
    ],
    colors: ["yellow"],
    colorNames: {
      pink: "Blush Yellow"
    },
    materials: ["polyester"],
    sizes: [
      {
        name: "Standard Pair",
        panelWidth: "1.5m",
        panelLength: "2m",
        totalWidth: "3m",
        price: 2800
      }
    ],
    category: "curtains",
    subcategory: "glossy",
    collection: "Plain Elegance",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 13,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["sheer-curtains", "yellow", "modern", "bedroom", "living-room", "light-filtering"],
    features: [
      "Set of 2 curtain panels",
      "Each panel: 1.5m wide x 2m long",
      "100% polyester sheer fabric",
      "Machine washable",
      "Light filtering",
      "Ready-to-hang"
    ],
    careInstructions: "Machine wash cold with similar colors. Tumble dry low. Do not bleach. Iron on low heat if needed.",
  },
  {
    id: "earthtone-knot-pillow-1",
    name: "Earthtone Knot Pillow",
    description: "A beautifully hand-crafted knot pillow in a rich earthtone brown-orange shade. Perfect for adding a cozy, modern accent to any room.",
    price: 500,
    originalPrice: 500,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/Earthtone-knot-pillow.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/Earthtone-knot-pillow.webp"
      // Add more angles if available
    ],
    colors: ["brown"],
    colorNames: {
      brown: "Earthtone"
    },
    materials: ["velvet"],
    category: "knot-pillows",
    subcategory: "decorative",
    collection: "Warm Tones",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 13,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["earthtone", "knot pillow", "burnt orange", "cozy decor", "modern accent"],
    features: [
      "Handmade knot design",
      "Soft velvet texture",
      "Perfect as a decor piece or headrest",
      "Ideal for sofas, beds, or chairs"
    ],
  },
  {
    id: "3",
    name: "Golden Mist Luxury Velvet Pillow",
    description: "Opulent golden velvet pillow that adds warmth to any decor",
    price: 300,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Golden-Mist-Cushion.webp",
    colors: ["Blue", "Grey Stripe", "Off White", "White"],
    materials: ["Velvet"],
    sizes: ["18×18", "20×20"],
    category: "pillow",
    subcategory: "luxury",
    rating: 4.2,
    reviews: 15,
    isNew: Math.random() < 0.5,
    onSale: Math.random() < 0.3,
    createdAt: "2023-10-15",
    stock: 12,
    tags: ["velvet", "luxury", "golden", "statement"]
  },
  {
    id: "glossy-brown-curtain-1",
    name: "Glossy Brown Plain Curtain Panel (Pair)",
    description: "Set of 2 elegant glossy brown sheer curtains made from high-quality polyester fabric. Each panel measures 1.5m wide with 2m sheer length (total 3m when hung). Provides excellent light filtration while adding a soft brown hue to your room. Perfect for bedrooms and living spaces seeking modern elegance.",
    price: 2800,
    originalPrice: 3200,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/curtains/plain-brown-curtain.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/curtains/plain-brown-curtain.webp",
      // Add more image URLs here
    ],
    colors: ["brown"],
    colorNames: {
      pink: "Brown"
    },
    materials: ["polyester"],
    sizes: [
      {
        name: "Standard Pair",
        panelWidth: "1.5m",
        panelLength: "2m",
        totalWidth: "3m",
        price: 2800
      }
    ],
    category: "curtains",
    subcategory: "glossy",
    collection: "Plain Elegance",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 13,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["sheer-curtains", "brown", "modern", "bedroom", "living-room", "light-filtering"],
    features: [
      "Set of 2 curtain panels",
      "Each panel: 1.5m wide x 2m long",
      "100% polyester sheer fabric",
      "Machine washable",
      "Light filtering",
      "Ready-to-hang"
    ],
    careInstructions: "Machine wash cold with similar colors. Tumble dry low. Do not bleach. Iron on low heat if needed.",
  },
  {
    id: "golden-bronze-knot-pillow-1",
    name: "Golden Bronze Knot Pillow",
    description: "A luxurious hand-crafted knot pillow made from soft, shiny velvet in a rich golden bronze color. Its elegant sheen and unique design make it the perfect statement piece for sofas, beds, or reading corners.",
    price: 500,
    originalPrice: 500,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/golden-bronze-knot-pillow.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/golden-bronze-knot-pillow.webp"
      // Add more images if needed
    ],
    colors: ["gold"],
    colorNames: {
      gold: "Golden Bronze"
    },
    materials: ["velvet"],
    category: "knot-pillows",
    subcategory: "decorative",
    collection: "Warm Tones",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 13,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["golden", "knot pillow", "bronze decor", "velvet cushion", "modern accent"],
    features: [
      "Handmade knot design",
      "Shiny velvet texture",
      "Striking golden bronze color",
      "Perfect as a decor piece or headrest",
      "Ideal for sofas, beds, or reading corners"
    ],
  },
  {
    id: "5",
    name: "Luxury White Pillow with Gold Foil Stripes",
    description: "Elegant white cushion with metallic gold foil stripe detailing",
    price: 300,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Luxury-White-Cushion-with-Gold-Foil.webp",
    colors: ["White/Gold"],
    materials: ["Cotton Blend", "Metallic Foil"],
    sizes: ["18×18"],
    category: "pillow",
    subcategory: "luxury",
    rating: 4.2,
    reviews: 30,
    isNew: Math.random() < 0.5,
    onSale: Math.random() < 0.3,
    createdAt: "2023-10-15",
    stock: 20,
    tags: ["gold foil", "luxury", "minimalist"]
  },
  {
    id: "glossy-deep-blue-curtain-1",
    name: "Glossy Deep Blue Plain Curtain Panel (Pair)",
    description: "Set of 2 elegant glossy purple sheer curtains made from high-quality polyester fabric. Each panel measures 1.5m wide with 2m sheer length (total 3m when hung). Provides excellent light filtration while adding a soft purple hue to your room. Perfect for bedrooms and living spaces seeking modern elegance.",
    price: 2800,
    originalPrice: 3200,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/curtains/plain-deep-purple-curtain.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/curtains/plain-deep-purple-curtain.webp",
      // Add more image URLs here
    ],
    colors: ["purple"],
    colorNames: {
      pink: "Purple"
    },
    materials: ["polyester"],
    sizes: [
      {
        name: "Standard Pair",
        panelWidth: "1.5m",
        panelLength: "2m",
        totalWidth: "3m",
        price: 2800
      }
    ],
    category: "curtains",
    subcategory: "glossy",
    collection: "Plain Elegance",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 13,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["sheer-curtains", "purple", "modern", "bedroom", "living-room", "light-filtering"],
    features: [
      "Set of 2 curtain panels",
      "Each panel: 1.5m wide x 2m long",
      "100% polyester sheer fabric",
      "Machine washable",
      "Light filtering",
      "Ready-to-hang"
    ],
    careInstructions: "Machine wash cold with similar colors. Tumble dry low. Do not bleach. Iron on low heat if needed.",
  },
  {
    id: "6",
    name: "Urban Grid Modern Throw Pillow",
    description: "Contemporary grid design pillow for urban-inspired interiors",
    price: 300,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Grid-Throw-Pillow.webp",
    colors: ["Black/White"],
    materials: ["Polyester"],
    sizes: ["18×18"],
    category: "pillow",
    subcategory: "geometric",
    rating: 4.0,
    reviews: 15,
    isNew: Math.random() < 0.5,
    onSale: Math.random() < 0.3,
    createdAt: "2023-10-15",
    stock: 14,
    tags: ["modern", "geometric", "urban", "contemporary"]
  },
  {
    id: "7",
    name: "Multiple Colors Knot Pillows",
    description: "A collection of vibrant, hand-crafted knot pillows made from soft velvet in multiple colors. Perfect for adding a playful and cozy accent to any space. Whether it's for your sofa, bed, or reading corner, these colorful knot pillows bring both comfort and style.",
    price: 500,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/MultiColor-knot-pillow.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/MultiColor-knot-pillow.webp"
      // Add more angles or color variations if available
    ],
    colors: ["brown", "red", "gold", "yellow", "blue", "black", "white"],
    colorNames: {
      brown: "Earthtone",
      red: "Rust",
      gold: "Goldenrod",
      yellow: "Sunshine",
      blue: "Royal Blue",
      black: "Midnight",
      white: "Snow"
    },
    materials: ["velvet"],
    sizes: ["16×16"],
    category: "knot-pillows",
    subcategory: "luxury",
    rating: 4.3,
    reviews: 28,
    isNew: Math.random() < 0.5,
    onSale: Math.random() < 0.3,
    createdAt: "2023-10-15",
    stock: 7,
    tags: ["multicolor", "knot pillow", "velvet", "cozy decor", "playful accent"],
    features: [
      "Handmade knot design",
      "Available in multiple vibrant colors",
      "Soft velvet texture",
      "Perfect as a decor piece or headrest",
      "Ideal for sofas, beds, or chairs"
    ],
  },
  {
    id: "8",
    name: "Royal Azure Velvet Throw Pillow",
    description: "Rich azure blue velvet pillow for regal elegance",
    price: 300,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Royal-Azure.webp",
    colors: ["Azure Blue"],
    materials: ["Velvet"],
    sizes: ["18×18"],
    category: "pillow",
    subcategory: "luxury",
    rating: 5.0,
    reviews: 42,
    isNew: Math.random() < 0.5,
    onSale: Math.random() < 0.3,
    createdAt: "2023-10-15",
    stock: 5,
    tags: ["velvet", "blue", "luxury", "statement"]
  },
  {
    id: "11",
    name: "Luxury Black Pillow with Gold Foil Stripes",
    description: "Dramatic black cushion with striking gold foil stripes",
    price: 300,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Luxury-Black-Cushion-with-Gold-Foil.webp",
    colors: ["Black/Gold"],
    materials: ["Cotton Blend", "Metallic Foil"],
    sizes: ["20×20"],
    category: "pillow",
    subcategory: "luxury",
    rating: 5.0,
    reviews: 56,
    isNew: Math.random() < 0.5,
    onSale: Math.random() < 0.3,
    createdAt: "2023-10-15",
    stock: 3,
    tags: ["premium", "gold foil", "luxury", "statement"]
  },
  // Grouped variants: Urban Geometry Series:
  {
    id: "urban-geometry-series",
    name: "Urban Geometry Throw Pillow Collection",
    variants: [
      {
        id: "22",
        name: "Urban Geometry Multicolor Pillow",
        color: "Multicolor",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Geometry-Design.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 8,
        onSale: Math.random() < 0.3
      },
      {
        id: "24",
        name: "Urban Geometry Red Pillow",
        color: "Red",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Geometry-Design2.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 6,
        onSale: Math.random() < 0.3
      },
      {
        id: "25",
        name: "Urban Geometry Dark Red Pillow",
        color: "Dark Red",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Geometry-Design3.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 5,
        onSale: Math.random() < 0.3
      },
      {
        id: "28",
        name: "Urban Geometry White Pillow",
        color: "White",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Geometry-Design4.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 10,
        onSale: Math.random() < 0.3
      },
      {
        id: "29",
        name: "Urban Geometry White/Grey Pillow",
        color: "White/Grey",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Geometry-Design5.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 7,
        onSale: Math.random() < 0.3
      },
      {
        id: "32",
        name: "Urban Geometry White/Black Pillow",
        color: "White/Black",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Geometry-Design6.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 9,
        onSale: Math.random() < 0.3
      },
      {
        id: "36",
        name: "Urban Geometry Abstract Pillow",
        color: "Multicolor Abstract",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Geometry-Design7.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 4,
        onSale: Math.random() < 0.3
      },
      {
        id: "39",
        name: "Urban Geometry White/Geometric Pillow",
        color: "White/Geometric",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Geometry-Design8.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 6,
        onSale: Math.random() < 0.3
      },
      {
        id: "40",
        name: "Urban Geometry Black/White Pillow",
        color: "Black/White",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Geometry-Design9.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 8,
        onSale: Math.random() < 0.3
      }
    ],
    description: "Modern geometric design pillow collection featuring contemporary abstract patterns. These versatile throw pillows add artistic flair to sofas, beds, or accent chairs. Made with durable, colorfast polyester that maintains its vibrant look.",
    category: "pillow",
    subcategory: "geometric",
    materials: ["polyester", "cotton"],
    careInstructions: "Spot clean or dry clean only",
    rating: 4.5,
    reviews: 112,
    isNew: false,
    onSale: false,
    tags: ["modern", "geometric", "abstract",],
    dimensions: {
      insertSize: "18×18 inches",
      pillowcaseSize: "19×19 inches"
    },
    createdAt: "2023-09-10"
  },
  // Grouped variant: Plain series
  {
    id: "plain-series",
    name: "Minimalist Plain Throw Pillow Collection",
    variants: [
      {
        id: "42",
        name: "Multicolor Plain Throw Pillow",
        color: "Multicolor",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/plain-design.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 12,
        onSale: Math.random() < 0.3
      },
      {
        id: "43",
        name: "Red Plain Throw Pillow",
        color: "Red",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Red-plain-design.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 8,
        onSale: Math.random() < 0.3
      },
      {
        id: "45",
        name: "Yellow Plain Throw Pillow",
        color: "Yellow",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Yellow-plain-design.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 10,
        onSale: Math.random() < 0.3
      },
      {
        id: "48",
        name: "Mustard Yellow Plain Throw Pillow",
        color: "Mustard Yellow",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Yellow-plain-design2.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 7,
        onSale: Math.random() < 0.3
      },
      {
        id: "46",
        name: "Light Purple Plain Throw Pillow",
        color: "Lavender",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Light-purple-plain-design.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 9,
        onSale: Math.random() < 0.3
      },
      {
        id: "47",
        name: "Light Beige Plain Throw Pillow",
        color: "Oatmeal",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Light-beige-plain-design.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 15,
        onSale: Math.random() < 0.3
      },
      {
        id: "brown-plain-pillow1",
        name: "Brown Plain Throw Pillow",
        color: "brown",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Brown-plain-design.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 15,
        onSale: Math.random() < 0.3
      },
      {
        id: "red-plain-pillow2",
        name: "Red Plain Throw Pillow",
        color: "red",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Red-plain-design2.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 8,
        onSale: Math.random() < 0.3
      },
      {
        id: "yellow-plain-pillow3",
        name: "Yellow Plain Throw Pillow",
        color: "yellow",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Yellow-plain-design3.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 7,
        onSale: Math.random() < 0.3
      },
    ],
    description: "A timeless collection of solid-color throw pillows for a clean, versatile look. Perfect for layering with patterned pillows or standalone minimalism. Made with ultra-soft, durable fabric that resists fading.",
    category: "pillow",
    subcategory: "plain",
    materials: ["woven-fabric"],
    careInstructions: "Machine washable (cold), tumble dry low",
    rating: 4.3,
    reviews: 89,
    isNew: false,
    tags: ["minimalist", "solid", "versatile", "modern",],
    dimensions: {
      insertSize: "18×18 inches",
      pillowcaseSize: "19×19 inches"
    },
    createdAt: "2023-08-05"
  },
  // Grouped variant: Urban wave series
  {
    id: "urban-wave-series",
    name: "Urban Wave Throw Pillow Collection",
    variants: [
      {
        id: "30",
        name: "Urban Wave Blue Pillow",
        color: "Navy Blue",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Wave-Design.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 7,
        onSale: Math.random() < 0.3
      },
      {
        id: "33",
        name: "Urban Wave Grey Pillow",
        color: "Charcoal Grey",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Wave-Design2.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 5,
        onSale: Math.random() < 0.3
      },
      {
        id: "34",
        name: "Urban Wave Multicolor Pillow",
        color: "Multicolor",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Wave-Design3.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 6,
        onSale: Math.random() < 0.3
      },
      {
        id: "41",
        name: "Urban Wave Pastel Pillow",
        color: "Pastel Colors",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Wave-Design4.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 4,
        onSale: Math.random() < 0.3
      },
      {
        id: "44",
        name: "Urban Wave Red Pillow",
        color: "Burgundy Red",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Urban-Wave-Design5.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 3,
        onSale: Math.random() < 0.3
      }
    ],
    description: "Fluid wave-inspired designs that bring movement and energy to your space. The organic patterns complement both modern and traditional decor styles.",
    category: "pillow",
    subcategory: "wavy-design",
    materials: ["polyester"],
    rating: 4.3,
    reviews: 89,
    tags: ["wave", "organic", "flowing", "modern"],
    createdAt: "2024-01-15"
  },
  // Grouped variant: Scarlet Web series
  {
    id: "scarlet-web-series",
    name: "Scarlet Web Throw Pillow Collection",
    variants: [
      {
        id: "4",
        name: "Scarlet Web Red Pillow",
        color: "Scarlet Red",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Red-Scarlet-Web.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 10,
        onSale: Math.random() < 0.3
      },
      {
        id: "16",
        name: "Scarlet Web Red Pattern Pillow",
        color: "Red/White",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Red-Scarlet-Web2.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 8,
        onSale: Math.random() < 0.3
      },
      {
        id: "17",
        name: "Scarlet Web Red Geometric Pillow",
        color: "Red/Black",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Red-Scarlet-Web3.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 6,
        onSale: Math.random() < 0.3
      },
      {
        id: "18",
        name: "Scarlet Web Black Pillow",
        color: "Black/White",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Black-Scarlet-Web.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 9,
        onSale: Math.random() < 0.3
      }
    ],
    description: "Bold web-inspired geometric patterns that make dramatic statements. These high-contrast designs work particularly well in modern and industrial interiors.",
    category: "pillow",
    subcategory: "geometric",
    materials: ["polyester"],
    rating: 4.6,
    reviews: 76,
    tags: ["geometric", "bold", "contrast", "modern"],
    createdAt: "2024-01-15"
  },
  // Grouped variant: FLoral
  {
    id: "floral-series",
    name: "Botanical Floral Throw Pillow Collection",
    variants: [
      {
        id: "Tropical-Floral-Throw-Pillow",
        name: "Tropical Floral Throw Pillow",
        color: "Multicolor",
        pattern: "Traditional Floral",
        image: "/images/pillows/Tropical-Floral-Throw-Pillow.webp",
        images: [
          "/images/pillows/Tropical-Floral-Throw-Pillow2.webp",
          "/images/pillows/Tropical-Floral-Throw-Pillow.webp",
          "/images/pillows/Tropical-Floral-Throw-Pillow3.webp"
        ],
        price: 300,
        originalPrice: 400,
        sizes: ["18×18"],
        stock: 10,
        onSale: Math.random() < 0.3
      },
      {
        id: "37",
        name: "Classic Floral Throw Pillow",
        color: "Pastel",
        pattern: "Abstract Floral",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Floral-Design2.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 8,
        onSale: Math.random() < 0.3
      },
      {
        id: "49",
        name: "Water-Color Floral Throw Pillow",
        color: "Vibrant",
        pattern: "Tropical Blooms",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Floral-Design3.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 6,
        onSale: Math.random() < 0.3
      },
      {
        id: "floral-design-4",
        name: "Vintage Flora Luxe Throw Pillow",
        color: "Vibrant",
        pattern: "Tropical Blooms",
        image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Floral-Design4.webp",
        price: 300,
        sizes: ["18×18"],
        stock: 6,
        onSale: Math.random() < 0.3
      }
    ],
    description: "A vibrant collection of floral throw pillows featuring hand-drawn botanical prints. Each design brings a touch of nature indoors, perfect for adding a pop of color to sofas, beds, or reading nooks. Made with fade-resistant ink and plush fabric.",
    category: "pillow",
    subcategory: "floral",
    materials: ["polyester"],
    rating: 4.7,
    reviews: 145,
    isNew: true,
    tags: ["botanical", "blooms", "garden", "vintage", "romantic", "spring", "tropical"],
    dimensions: {
      insertSize: "18×18 inches",
      pillowcaseSize: "19×19 inches"
    },
    createdAt: "2024-01-15"
  },
  {
    id: "26",
    name: "Savanna Sunset Zigzag Pillow",
    description: "Warm-toned zigzag pattern inspired by African sunsets",
    price: 300,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/pillow-cusions/Savanna-Sunset-Zigzag-Design.webp",
    colors: ["Terracotta", "Mustard", "Cream"],
    materials: ["Polyester"],
    sizes: ["18×18"],
    category: "pillow",
    subcategory: "ethnic",
    rating: 4.4,
    reviews: 19,
    isNew: Math.random() < 0.5,
    onSale: Math.random() < 0.3,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["ethnic", "zigzag", "tribal", "warm tones"]
  },
];

export const curtains = [
  {
    id: "glossy-pink-curtain-1",
    name: "Glossy Pink Plain Curtain Panel (Pair)",
    description: "Set of 2 elegant glossy pink sheer curtains made from high-quality polyester fabric. Each panel measures 1.5m wide with 2m sheer length (total 3m when hung). Provides excellent light filtration while adding a soft pink hue to your room. Perfect for bedrooms and living spaces seeking modern elegance.",
    price: 2800,
    originalPrice: 3200,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/main/ecommerce-images/curtains/plain-pink-curtain.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/main/ecommerce-images/curtains/plain-pink-curtain.webp",
      // Add more image URLs here
    ],
    colors: ["pink"],
    colorNames: {
      pink: "Blush Pink"
    },
    materials: ["polyester"],
    sizes: [
      {
        name: "Standard Pair",
        panelWidth: "1.5m",
        panelLength: "2m",
        totalWidth: "3m",
        price: 2800
      }
    ],
    category: "curtains",
    subcategory: "glossy",
    collection: "Plain Elegance",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 13,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["sheer-curtains", "pink", "modern", "bedroom", "living-room", "light-filtering"],
    features: [
      "Set of 2 curtain panels",
      "Each panel: 1.5m wide x 2m long",
      "100% polyester sheer fabric",
      "Machine washable",
      "Light filtering",
      "Ready-to-hang"
    ],
    careInstructions: "Machine wash cold with similar colors. Tumble dry low. Do not bleach. Iron on low heat if needed.",
  },
  {
    id: "glossy-yellow-curtain-1",
    name: "Glossy Yellow Plain Curtain Panel (Pair)",
    description: "Set of 2 elegant glossy yellow sheer curtains made from high-quality polyester fabric. Each panel measures 1.5m wide with 2m sheer length (total 3m when hung). Provides excellent light filtration while adding a soft yellow hue to your room. Perfect for bedrooms and living spaces seeking modern elegance.",
    price: 2800,
    originalPrice: 3200,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/curtains/plain-yellow-curtain.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/curtains/plain-yellow-curtain.webp",
      // Add more image URLs here
    ],
    colors: ["yellow"],
    colorNames: {
      pink: "Blush Yellow"
    },
    materials: ["polyester"],
    sizes: [
      {
        name: "Standard Pair",
        panelWidth: "1.5m",
        panelLength: "2m",
        totalWidth: "3m",
        price: 2800
      }
    ],
    category: "curtains",
    subcategory: "glossy",
    collection: "Plain Elegance",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 13,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["sheer-curtains", "yellow", "modern", "bedroom", "living-room", "light-filtering"],
    features: [
      "Set of 2 curtain panels",
      "Each panel: 1.5m wide x 2m long",
      "100% polyester sheer fabric",
      "Machine washable",
      "Light filtering",
      "Ready-to-hang"
    ],
    careInstructions: "Machine wash cold with similar colors. Tumble dry low. Do not bleach. Iron on low heat if needed.",
  },
  {
    id: "glossy-brown-curtain-1",
    name: "Glossy Brown Plain Curtain Panel (Pair)",
    description: "Set of 2 elegant glossy brown sheer curtains made from high-quality polyester fabric. Each panel measures 1.5m wide with 2m sheer length (total 3m when hung). Provides excellent light filtration while adding a soft brown hue to your room. Perfect for bedrooms and living spaces seeking modern elegance.",
    price: 2800,
    originalPrice: 3200,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/curtains/plain-brown-curtain.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/curtains/plain-brown-curtain.webp",
      // Add more image URLs here
    ],
    colors: ["brown"],
    colorNames: {
      pink: "Brown"
    },
    materials: ["polyester"],
    sizes: [
      {
        name: "Standard Pair",
        panelWidth: "1.5m",
        panelLength: "2m",
        totalWidth: "3m",
        price: 2800
      }
    ],
    category: "curtains",
    subcategory: "glossy",
    collection: "Plain Elegance",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 13,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["sheer-curtains", "brown", "modern", "bedroom", "living-room", "light-filtering"],
    features: [
      "Set of 2 curtain panels",
      "Each panel: 1.5m wide x 2m long",
      "100% polyester sheer fabric",
      "Machine washable",
      "Light filtering",
      "Ready-to-hang"
    ],
    careInstructions: "Machine wash cold with similar colors. Tumble dry low. Do not bleach. Iron on low heat if needed.",
  },
  {
    id: "glossy-deep-blue-curtain-1",
    name: "Glossy Deep Blue Plain Curtain Panel (Pair)",
    description: "Set of 2 elegant glossy purple sheer curtains made from high-quality polyester fabric. Each panel measures 1.5m wide with 2m sheer length (total 3m when hung). Provides excellent light filtration while adding a soft purple hue to your room. Perfect for bedrooms and living spaces seeking modern elegance.",
    price: 2800,
    originalPrice: 3200,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/curtains/plain-deep-purple-curtain.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/curtains/plain-deep-purple-curtain.webp",
      // Add more image URLs here
    ],
    colors: ["purple"],
    colorNames: {
      pink: "Purple"
    },
    materials: ["polyester"],
    sizes: [
      {
        name: "Standard Pair",
        panelWidth: "1.5m",
        panelLength: "2m",
        totalWidth: "3m",
        price: 2800
      }
    ],
    category: "curtains",
    subcategory: "glossy",
    collection: "Plain Elegance",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 13,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["sheer-curtains", "purple", "modern", "bedroom", "living-room", "light-filtering"],
    features: [
      "Set of 2 curtain panels",
      "Each panel: 1.5m wide x 2m long",
      "100% polyester sheer fabric",
      "Machine washable",
      "Light filtering",
      "Ready-to-hang"
    ],
    careInstructions: "Machine wash cold with similar colors. Tumble dry low. Do not bleach. Iron on low heat if needed.",
  },
  {
    id: "white-fabric-curtain-with-purple-prints-1",
    name: "White Fabric Curtain with Purple Botanical Prints",
    description: "Elevate your space with this set of 2 premium white curtains featuring elegant purple floral prints. Made from 100% breathable cotton, these curtains combine style with functionality - offering maximum light filtration while maintaining privacy. Each panel measures 1.5m wide (3m total width) with a 2m drop length, perfect for standard windows. The digitally printed design ensures color vibrancy that lasts through multiple washes. Includes matching tie-backs and all necessary hanging hardware for easy installation.",
    price: 3500,
    originalPrice: 4000,
    image: "/images/curtains/white-fabric-curtain-with-purple-prints.webp",
    images: [
      "/images/curtains/white-fabric-curtain-with-purple-prints.webp",
      "/images/curtains/white-fabric-curtain-with-purple-prints2.webp",
    ],
    colors: ["white"],
    colorNames: {
      white: "Classic White"
    },
    materials: ["cotton"],
    sizes: [
      {
        name: "Standard Pair",
        panelWidth: "1.5m",
        panelLength: "2m",
        totalWidth: "3m",
        price: 3500
      },
    ],
    category: "curtains",
    subcategory: "printed-curtains",
    collection: "Botanical Elegance",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 12.5,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["cotton-curtains", "white-curtains", "purple-print", "botanical", "bedroom", "living-room", "light-filtering", "ready-to-hang"],
    features: [
      "Set of 2 premium printed curtain panels",
      "1.5m width per panel (3m total when hung)",
      "2m drop length (standard) or 2.5m (extra long)",
      "100% premium cotton fabric for breathability",
      "Digital printing ensures fade-resistant colors",
      "Includes matching fabric tie-backs",
      "Pre-attached hanging hooks for easy installation",
      "Blocks 85% of light while maintaining privacy"
    ],
    careInstructions: "Machine wash cold (max 30°C) with mild detergent. Tumble dry on low heat. Iron on cotton setting if needed. Do not bleach. For longest life, wash separately before first use.",
  },
]

export const knot_pillows = [
  {
    id: "earthtone-knot-pillow-1",
    name: "Earthtone Knot Pillow",
    description: "A beautifully hand-crafted knot pillow in a rich earthtone brown-orange shade. Perfect for adding a cozy, modern accent to any room.",
    price: 500,
    originalPrice: 500,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/Earthtone-knot-pillow.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/Earthtone-knot-pillow.webp"
      // Add more angles if available
    ],
    colors: ["brown"],
    colorNames: {
      brown: "Earthtone"
    },
    materials: ["velvet"],
    category: "knot-pillows",
    subcategory: "decorative",
    collection: "Warm Tones",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 13,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["earthtone", "knot pillow", "burnt orange", "cozy decor", "modern accent"],
    features: [
      "Handmade knot design",
      "Soft velvet texture",
      "Perfect as a decor piece or headrest",
      "Ideal for sofas, beds, or chairs"
    ],
  },
  {
    id: "multicolor-knot-pillow-1",
    name: "Multiple Colors Knot Pillows",
    description: "A collection of vibrant, hand-crafted knot pillows made from soft velvet in multiple colors. Perfect for adding a playful and cozy accent to any space. Whether it's for your sofa, bed, or reading corner, these colorful knot pillows bring both comfort and style.",
    price: 500,
    originalPrice: 500,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/MultiColor-knot-pillow.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/MultiColor-knot-pillow.webp"
      // Add more angles or color variations if available
    ],
    colors: ["brown", "red", "gold", "yellow", "blue", "black", "white"],
    colorNames: {
      brown: "Earthtone",
      red: "Rust",
      gold: "Goldenrod",
      yellow: "Sunshine",
      blue: "Royal Blue",
      black: "Midnight",
      white: "Snow"
    },
    materials: ["velvet"],
    category: "knot-pillows",
    subcategory: "decorative",
    collection: "Warm Tones",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 13,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["multicolor", "knot pillow", "velvet", "cozy decor", "playful accent"],
    features: [
      "Handmade knot design",
      "Available in multiple vibrant colors",
      "Soft velvet texture",
      "Perfect as a decor piece or headrest",
      "Ideal for sofas, beds, or chairs"
    ],
  },
  {
    id: "golden-bronze-knot-pillow-1",
    name: "Golden Bronze Knot Pillow",
    description: "A luxurious hand-crafted knot pillow made from soft, shiny velvet in a rich golden bronze color. Its elegant sheen and unique design make it the perfect statement piece for sofas, beds, or reading corners.",
    price: 500,
    originalPrice: 500,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/golden-bronze-knot-pillow.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/golden-bronze-knot-pillow.webp"
      // Add more images if needed
    ],
    colors: ["gold"],
    colorNames: {
      gold: "Golden Bronze"
    },
    materials: ["velvet"],
    category: "knot-pillows",
    subcategory: "decorative",
    collection: "Warm Tones",
    rating: 4.4,
    reviews: 19,
    isNew: true,
    onOffer: true,
    salePercentage: 13,
    createdAt: "2024-01-15",
    stock: 11,
    tags: ["golden", "knot pillow", "bronze decor", "velvet cushion", "modern accent"],
    features: [
      "Handmade knot design",
      "Shiny velvet texture",
      "Striking golden bronze color",
      "Perfect as a decor piece or headrest",
      "Ideal for sofas, beds, or reading corners"
    ],
  },
  {
    id: "matte-marigold-knot-pillow-1",
    name: "Matte Marigold Knot Pillow",
    description: "A bold and cheerful hand-crafted knot pillow in a soft matte marigold yellow. Its sculptural shape and vivid color add instant charm to any modern or playful interior.",
    price: 500,
    originalPrice: 500,
    image: "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/matte-marigold-knot-pillow.webp",
    images: [
      "https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/knot-pillows/matte-marigold-knot-pillow.webp"
    ],
    colors: ["yellow"],
    colorNames: {
      yellow: "Matte Marigold"
    },
    materials: ["soft cotton blend"],
    category: "knot-pillows",
    subcategory: "decorative",
    collection: "Bright Tones",
    rating: 4.5,
    reviews: 12,
    isNew: true,
    onOffer: false,
    salePercentage: 0,
    createdAt: "2024-01-22",
    stock: 15,
    tags: ["yellow pillow", "knot decor", "marigold", "modern cushion", "bold accent"],
    features: [
      "Handmade knot structure",
      "Soft matte cotton-blend texture",
      "Bright marigold yellow finish",
      "Ideal for living spaces, bedrooms, or nurseries",
      "Lightweight and plush feel"
    ]
  }

]