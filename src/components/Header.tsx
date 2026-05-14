"use client";

import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";

type SearchProduct = {
  id: number;
  title: string;
  slug: string;
  image: string;
  price: string;
  category: string;
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/#products" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<SearchProduct[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const query = searchTerm.trim();

    if (!query) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);

      const { data } = await supabase
        .from("products")
        .select("id,title,slug,image,price,category")
        .or(
          `title.ilike.%${query}%,category.ilike.%${query}%,description.ilike.%${query}%`,
        )
        .limit(5);

      setSuggestions(data ?? []);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm("");
    setSuggestions([]);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#fbf8f3]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/" className="leading-none">
          <div className="font-serif text-3xl text-stone-950">CozyNest</div>
          <div className="-mt-1 text-right font-serif text-sm italic text-stone-700">
            finds
          </div>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-semibold text-stone-900 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="border-b-2 border-transparent pb-1 hover:border-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="relative hidden w-full max-w-xs md:block">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
          />

          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search finds..."
            className="w-full rounded-full border border-stone-200 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-stone-400"
          />

          {searchTerm && (
            <div className="absolute right-0 top-12 w-full overflow-hidden rounded-xl border border-stone-200 bg-white shadow-lg">
              {isSearching ? (
                <p className="px-4 py-3 text-sm text-stone-500">Searching...</p>
              ) : suggestions.length > 0 ? (
                suggestions.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    onClick={clearSearch}
                    className="flex gap-3 border-b border-stone-100 px-3 py-3 hover:bg-stone-50"
                  >
                    <div className="relative h-14 w-10 overflow-hidden rounded-md bg-stone-100">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-stone-950">
                        {product.title}
                      </p>
                      <p className="mt-1 text-xs text-stone-500">
                        {product.category} · {product.price}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="px-4 py-3 text-sm text-stone-500">
                  No products found
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
