const products = [
  {
    id: 1,

    category: "Accessories",

    name: "Sculptural Leather Tote",

    price: "$450",

    rating: 4.8,

    reviewsCount: 124,

    stock: 12,

    sku: "SLT-1024",

    brand: "ShopVerse",

    description:
      "Crafted with premium Italian leather and designed for modern everyday luxury. A timeless silhouette with spacious interiors and elevated detailing.",

    features: [
      "Premium Italian leather",
      "Water-resistant finish",
      "Adjustable shoulder strap",
      "Soft microfiber interior",
      "Magnetic closure system",
    ],

    specifications: {
      material: "Italian Leather",
      dimensions: "40 x 30 x 12 cm",
      weight: "1.2kg",
      warranty: "1 Year",
    },

    shipping: {
      freeShipping: true,
      estimatedDelivery: "3-5 Business Days",
      returns: "30-Day Free Returns",
    },

    reviews: [
      {
        id: 1,
        name: "Sophia Carter",
        rating: 5,
        comment:
          "Exceptional craftsmanship and premium feel. Looks even better in person.",
      },

      {
        id: 2,
        name: "Emily Watson",
        rating: 4,
        comment:
          "Beautiful bag with spacious interior. Perfect for daily use.",
      },
    ],

    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800",

    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200",

      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1200",

      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",

      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200",
    ],

    colors: [
      "#111827",
      "#E5E7EB",
      "#6C63FF",
    ],

    sizes: ["S", "M", "L"],
  },

  {
    id: 2,

    category: "Apparel",

    name: "Silk Column Dress",

    price: "$890",

    rating: 4.9,

    reviewsCount: 214,

    stock: 8,

    sku: "SCD-2048",

    brand: "ShopVerse",

    description:
      "Elegant modern tailoring with luxurious silk texture designed for timeless sophistication and elevated styling.",

    features: [
      "Luxury silk fabric",
      "Breathable lining",
      "Minimal silhouette",
      "Premium stitching",
      "Wrinkle-resistant finish",
    ],

    specifications: {
      material: "Premium Silk",
      dimensions: "Regular Fit",
      weight: "700g",
      warranty: "6 Months",
    },

    shipping: {
      freeShipping: true,
      estimatedDelivery: "2-4 Business Days",
      returns: "30-Day Free Returns",
    },

    reviews: [
      {
        id: 1,
        name: "Olivia Brown",
        rating: 5,
        comment:
          "Absolutely stunning quality and perfect fitting.",
      },

      {
        id: 2,
        name: "Emma Wilson",
        rating: 5,
        comment:
          "Minimal, elegant, and premium feel throughout.",
      },
    ],

    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800",

    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200",

      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200",

      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200",

      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
    ],

    colors: [
      "#F3F4F6",
      "#111827",
      "#EC4899",
    ],

    sizes: ["XS", "S", "M"],
  },
];

export default products;