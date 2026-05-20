const products = [
  {
    id: 1,
    isNewArrival: true,
    releaseDate: "2026-05-12",
    category: "Accessories",
    name: "Sculptural Leather Tote",
    price: "Rs 450",
    rating: 4.8,
    reviewsCount: 124,
    stock: 12,
    sku: "SLT-1024",
    brand: "ShopVerse",
    description:
      "Crafted with premium Italian leather and designed for modern everyday luxury.",
    features: [
      "Premium Italian leather",
      "Water-resistant finish",
      "Adjustable shoulder strap",
    ],
    specifications: {
      material: "Italian Leather",
      warranty: "1 Year",
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: "3-5 Business Days",
      returns: "30-Day Free Returns",
    },
    reviews: [],
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200",
    ],
    colors: ["#111827", "#E5E7EB"],
    sizes: ["S", "M", "L"],
  },

  {
    id: 2,
    isNewArrival: true,
    releaseDate: "2026-05-14",
    category: "Apparel",
    name: "Silk Column Dress",
    price: "Rs 890",
    rating: 4.9,
    reviewsCount: 214,
    stock: 8,
    sku: "SCD-2048",
    brand: "ShopVerse",
    description:
      "Elegant silk tailoring designed for timeless sophistication.",
    features: [
      "Luxury silk fabric",
      "Premium stitching",
      "Minimal silhouette",
    ],
    specifications: {
      material: "Premium Silk",
      warranty: "6 Months",
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: "2-4 Business Days",
      returns: "30-Day Free Returns",
    },
    reviews: [],
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200",
    ],
    colors: ["#F3F4F6", "#111827"],
    sizes: ["XS", "S", "M"],
  },

  {
    id: 3,
    isNewArrival: true,
    releaseDate: "2026-05-16",
    category: "Footwear",
    name: "Minimal White Sneakers",
    price: "Rs 320",
    rating: 4.7,
    reviewsCount: 88,
    stock: 15,
    sku: "MWS-3321",
    brand: "ShopVerse",
    description:
      "Modern minimal sneakers crafted for comfort and everyday versatility.",
    features: [
      "Breathable mesh",
      "Rubber outsole",
      "Lightweight design",
    ],
    specifications: {
      material: "Mesh + Rubber",
      warranty: "1 Year",
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: "2-5 Business Days",
      returns: "30-Day Returns",
    },
    reviews: [],
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
    ],
    colors: ["#FFFFFF", "#111827"],
    sizes: ["40", "41", "42"],
  },

  {
    id: 4,
    isNewArrival: true,
    releaseDate: "2026-05-18",
    category: "Watches",
    name: "Chronograph Silver Watch",
    price: "Rs 740",
    rating: 4.9,
    reviewsCount: 310,
    stock: 6,
    sku: "CSW-8821",
    brand: "ShopVerse",
    description:
      "Luxury chronograph watch with premium steel craftsmanship.",
    features: [
      "Water resistant",
      "Steel casing",
      "Premium movement",
    ],
    specifications: {
      material: "Stainless Steel",
      warranty: "2 Years",
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: "4-7 Business Days",
      returns: "15-Day Returns",
    },
    reviews: [],
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200",
    ],
    colors: ["#D1D5DB"],
    sizes: ["One Size"],
  },

  {
    id: 5,
    isNewArrival: true,
    releaseDate: "2026-05-20",
    category: "Furniture",
    name: "Nordic Lounge Chair",
    price: "Rs 1250",
    rating: 4.8,
    reviewsCount: 65,
    stock: 4,
    sku: "NLC-6654",
    brand: "ShopVerse",
    description:
      "Premium Scandinavian-inspired lounge chair for modern interiors.",
    features: [
      "Solid oak frame",
      "Soft cushioning",
      "Minimal aesthetic",
    ],
    specifications: {
      material: "Oak Wood",
      warranty: "3 Years",
    },
    shipping: {
      freeShipping: false,
      estimatedDelivery: "7-10 Business Days",
      returns: "15-Day Returns",
    },
    reviews: [],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    ],
    colors: ["#C4B5A5"],
    sizes: ["Standard"],
  },

  {
    id: 6,
    isNewArrival: true,
    releaseDate: "2026-05-22",
    category: "Tech",
    name: "Wireless Noise Headphones",
    price: "Rs 560",
    rating: 4.9,
    reviewsCount: 520,
    stock: 22,
    sku: "WNH-4455",
    brand: "ShopVerse",
    description:
      "Immersive audio with adaptive noise cancellation.",
    features: [
      "Bluetooth 5.3",
      "40h battery",
      "Fast charging",
    ],
    specifications: {
      material: "Aluminum",
      warranty: "2 Years",
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: "2-3 Business Days",
      returns: "30-Day Returns",
    },
    reviews: [],
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200",
    ],
    colors: ["#111827"],
    sizes: ["One Size"],
  },

  {
    id: 7,
    isNewArrival: true,
    releaseDate: "2026-05-24",
    category: "Beauty",
    name: "Luxury Skincare Set",
    price: "Rs 210",
    rating: 4.7,
    reviewsCount: 145,
    stock: 18,
    sku: "LSS-5521",
    brand: "ShopVerse",
    description:
      "Premium skincare essentials for radiant skin.",
    features: [
      "Organic ingredients",
      "Hydration formula",
      "Dermatologist tested",
    ],
    specifications: {
      material: "Organic Formula",
      warranty: "N/A",
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: "2-5 Business Days",
      returns: "No Returns",
    },
    reviews: [],
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200",
    ],
    colors: ["#F9A8D4"],
    sizes: ["Standard"],
  },

  {
    id: 8,
    isNewArrival: true,
    releaseDate: "2026-05-25",
    category: "Lifestyle",
    name: "Ceramic Coffee Set",
    price: "Rs 140",
    rating: 4.6,
    reviewsCount: 74,
    stock: 25,
    sku: "CCS-1112",
    brand: "ShopVerse",
    description:
      "Minimal handcrafted ceramic coffee set.",
    features: [
      "Handcrafted finish",
      "Heat resistant",
      "Modern design",
    ],
    specifications: {
      material: "Ceramic",
      warranty: "6 Months",
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: "3-6 Business Days",
      returns: "15-Day Returns",
    },
    reviews: [],
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?q=80&w=1200",
    ],
    colors: ["#FFFFFF"],
    sizes: ["Set of 4"],
  },

  {
    id: 9,
    isNewArrival: true,
    releaseDate: "2026-05-26",
    category: "Accessories",
    name: "Classic Black Sunglasses",
    price: "Rs 180",
    rating: 4.8,
    reviewsCount: 164,
    stock: 30,
    sku: "CBS-3321",
    brand: "ShopVerse",
    description:
      "Timeless sunglasses with UV protection.",
    features: [
      "UV400 lenses",
      "Lightweight frame",
      "Luxury finish",
    ],
    specifications: {
      material: "Acetate",
      warranty: "1 Year",
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: "2-4 Business Days",
      returns: "30-Day Returns",
    },
    reviews: [],
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200",
    ],
    colors: ["#111827"],
    sizes: ["Standard"],
  },

  {
    id: 10,
    isNewArrival: true,
    releaseDate: "2026-05-28",
    category: "Bags",
    name: "Canvas Travel Backpack",
    price: "390 Rs",
    rating: 4.9,
    reviewsCount: 192,
    stock: 14,
    sku: "CTB-8871",
    brand: "ShopVerse",
    description:
      "Premium backpack designed for urban travel.",
    features: [
      "Waterproof canvas",
      "Laptop compartment",
      "Ergonomic straps",
    ],
    specifications: {
      material: "Canvas",
      warranty: "2 Years",
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: "2-5 Business Days",
      returns: "30-Day Returns",
    },
    reviews: [],
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
    ],
    colors: ["#111827", "#6B7280"],
    sizes: ["Standard"],
  },
];

export default products;