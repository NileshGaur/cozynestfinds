import Link from "next/link";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f3] text-stone-950">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">
          About CozyNest Finds
        </p>

        <h1 className="mt-4 font-serif text-5xl leading-tight">
          Curated cozy finds for simple, beautiful homes.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-9 text-stone-700">
          CozyNest Finds is a curated home finds website built for people who
          love warm, minimal, Pinterest-worthy spaces. We collect simple,
          aesthetic and practical home products that can make your room feel
          calmer, softer and more personal.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="font-serif text-2xl">Minimal</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Clean products that do not make your space feel crowded or noisy.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="font-serif text-2xl">Cozy</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Warm textures, soft lighting and calm details for everyday
              comfort.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="font-serif text-2xl">Curated</h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              We focus on selected finds instead of overwhelming you with too
              many choices.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-[#f1e7da] p-8 md:p-10">
          <h2 className="font-serif text-3xl">Our goal</h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            Our goal is simple: help you discover home products that feel
            useful, beautiful and easy to style. Whether you are decorating a
            bedroom, desk corner, living room or kitchen, CozyNest Finds helps
            you find pieces that fit a calm and cozy lifestyle.
          </p>

          <Link
            href="/#products"
            className="mt-8 inline-block rounded-lg bg-[#5b3218] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#3f220f]"
          >
            Explore Finds
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
