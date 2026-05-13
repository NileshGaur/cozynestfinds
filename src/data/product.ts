export type Product = {
  id: number;
  title: string;
  slug: string;
  price: string;
  category: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Minimal Ceramic Vase",
    slug: "minimal-ceramic-vase",
    price: "₹899",
    category: "Decor",
    image: "/products/pin109.png",
  },
  {
    id: 2,
    title: "Wooden Table Lamp",
    slug: "wooden-table-lamp",
    price: "₹1,499",
    category: "Lighting",
    image: "/products/pin110.png",
  },
  {
    id: 3,
    title: "Chunky Knit Throw Blanket",
    slug: "chunky-knit-throw-blanket",
    price: "₹1,799",
    category: "Textiles",
    image: "/products/pin111.png",
  },
  {
    id: 4,
    title: "Scented Soy Candle",
    slug: "scented-soy-candle",
    price: "₹599",
    category: "Decor",
    image: "/products/pin112.png",
  },
  {
    id: 5,
    title: "Abstract Wall Art",
    slug: "abstract-wall-art",
    price: "₹699",
    category: "Wall Art",
    image: "/products/pin113.png",
  },
  {
    id: 6,
    title: "Small Indoor Plant",
    slug: "small-indoor-plant",
    price: "₹499",
    category: "Plants",
    image: "/products/pin114.png",
  },
  {
    id: 7,
    title: "Woven Storage Basket",
    slug: "woven-storage-basket",
    price: "₹999",
    category: "Storage",
    image: "/products/pin115.png",
  },
  {
    id: 8,
    title: "Fairy String Lights",
    slug: "fairy-string-lights",
    price: "₹449",
    category: "Lighting",
    image: "/products/pin116.png",
  },
];
