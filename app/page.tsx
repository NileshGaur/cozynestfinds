import Image from "next/image";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import ProductCard from "../src/components/ProductCard";
import { supabase } from "../src/lib/supabase";
import HeroImage from "../public/hero.png";

const categories = [
  "All",
  "Decor",
  "Lighting",
  "Storage",
  "Textiles",
  "Kitchen",
  "Furniture",
  "Wall Art",
  "Plants",
];

export default async function Home() {
  const { data: products = [] } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-[#fbf8f3] text-stone-950">
      <Header />

      <section className="relative mx-auto h-[520px] max-w-7xl overflow-hidden bg-stone-100">
        <Image
          src={HeroImage}
          alt="Cozy living room"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf8f3] via-[#fbf8f3]/0 to-transparent" />

        <div className="relative z-10 flex h-full max-w-xl flex-col justify-center px-6 md:px-10">
          <h1 className="font-serif text-5xl leading-tight md:text-6xl">
            Cozy pieces for your happy space.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-stone-800">
            Simple, warm and aesthetic finds to make your home feel like you.
          </p>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-serif text-3xl">All Finds</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-lg border border-stone-200 bg-white px-5 py-2 text-sm text-stone-700"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
