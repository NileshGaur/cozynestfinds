import Image from "next/image";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import ProductExplorer from "../src/components/ProductExplorer";
import { supabase } from "../src/lib/supabase";
import HeroImage from "../public/hero.png";

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

      <ProductExplorer products={products ?? []} />

      <Footer />
    </main>
  );
}
