import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Leaf,
  Lightbulb,
  PackageCheck,
  Sparkles,
} from "lucide-react";

import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import ProductCard from "../../../src/components/ProductCard";
import { supabase } from "../../../src/lib/supabase";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  const { data: relatedProducts = [] } = await supabase
    .from("products")
    .select("*")
    .neq("slug", slug)
    .limit(4);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#fbf8f3]">
        <Header />

        <div className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="font-serif text-4xl">Product not found</h1>

          <Link
            href="/"
            className="mt-6 inline-block text-sm font-bold underline"
          >
            Back to home
          </Link>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fbf8f3] text-stone-950">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid items-start gap-12 lg:grid-cols-[440px_1fr]">
          <div className="w-full max-w-[380px] overflow-hidden rounded-2xl bg-stone-100 shadow-sm lg:mx-0">
            <div className="relative aspect-[2/3] w-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl pt-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
              {product.category}
            </p>

            <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              {product.title}
            </h1>

            <p className="mt-5 text-2xl font-bold">₹{product.price}</p>

            <p className="mt-6 max-w-xl text-base leading-8 text-stone-700">
              {product.description}
            </p>

            <div className="mt-7 grid gap-4 text-sm text-stone-700 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-3">
                <Leaf size={18} />
                <span>Minimal aesthetic design</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-3">
                <Lightbulb size={18} />
                <span>Perfect for cozy corners</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-3">
                <Sparkles size={18} />
                <span>Soft warm home vibe</span>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-3">
                <PackageCheck size={18} />
                <span>Curated for everyday use</span>
              </div>
            </div>

            <a
              href={product.amazon_url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-[#5b3218] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#3f220f]"
            >
              View on Amazon
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-serif text-2xl">You may also love</h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts?.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
