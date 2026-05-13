import Link from "next/link";

import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import ProductCard from "../../../src/components/ProductCard";
import { products } from "../../../src/data/product";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const categoryName = slug
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase().replaceAll(" ", "-") === slug,
  );

  return (
    <main className="min-h-screen bg-[#fbf8f3] text-stone-950">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex items-center gap-2 text-sm text-stone-600">
          <Link href="/" className="hover:text-stone-950">
            Home
          </Link>
          <span>›</span>
          <span>Categories</span>
          <span>›</span>
          <span className="text-stone-950">{categoryName}</span>
        </div>

        <div className="rounded-2xl bg-[#f1e7da] px-6 py-12 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-600">
            CozyNest Finds
          </p>

          <h1 className="mt-3 font-serif text-5xl">{categoryName}</h1>

          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-700">
            Curated {categoryName.toLowerCase()} finds to make your home feel
            warmer, calmer and more beautifully put together.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl">{categoryName} Finds</h2>
            <p className="mt-2 text-sm text-stone-600">
              {categoryProducts.length} products found
            </p>
          </div>

          <select className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm outline-none">
            <option>Newest</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-stone-200 bg-white px-6 py-12 text-center">
            <h2 className="font-serif text-3xl">No products found</h2>

            <p className="mt-3 text-sm text-stone-600">
              We have not added products in this category yet.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-lg bg-[#5b3218] px-6 py-3 text-sm font-bold text-white"
            >
              Back to Home
            </Link>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
