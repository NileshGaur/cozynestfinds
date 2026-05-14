"use client";

import { useMemo, useState } from "react";
import { Filter, X } from "lucide-react";
import ProductCard from "./ProductCard";

type Product = {
  id: number;
  title: string;
  slug: string;
  price: string;
  category: string;
  image: string;
  featured?: boolean;
};

type ProductExplorerProps = {
  products: Product[];
};

const categories = [
  "All",
  "Decor",
  // "Lighting",
  // "Storage",
  // "Textiles",
  // "Kitchen",
  "Furniture",
  "Wall Art",
  "Plants",
];

const getPriceNumber = (price: string) => Number(price.replace(/[^\d]/g, ""));

export default function ProductExplorer({ products }: ProductExplorerProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState("all");
  const [productType, setProductType] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All") {
      result = result.filter((product) => product.category === activeCategory);
    }

    if (productType === "featured") {
      result = result.filter((product) => product.featured);
    }

    if (priceRange !== "all") {
      result = result.filter((product) => {
        const price = getPriceNumber(product.price);

        if (priceRange === "below-500") return price < 500;
        if (priceRange === "500-1500") return price >= 500 && price <= 1500;
        if (priceRange === "1500-2500") return price > 1500 && price <= 2500;
        if (priceRange === "2500-3500") return price > 2500 && price <= 3500;
        if (priceRange === "3500-plus") return price > 3500;

        return true;
      });
    }

    if (sortBy === "price-low-high") {
      result.sort((a, b) => getPriceNumber(a.price) - getPriceNumber(b.price));
    }

    if (sortBy === "price-high-low") {
      result.sort((a, b) => getPriceNumber(b.price) - getPriceNumber(a.price));
    }

    if (sortBy === "name-a-z") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [products, activeCategory, sortBy, priceRange, productType]);

  const appliedFilters = [
    activeCategory !== "All" ? activeCategory : null,
    priceRange !== "all" ? getPriceLabel(priceRange) : null,
    productType === "featured" ? "Featured" : null,
    sortBy !== "newest" ? getSortLabel(sortBy) : null,
  ].filter(Boolean);

  const clearFilters = () => {
    setActiveCategory("All");
    setSortBy("newest");
    setPriceRange("all");
    setProductType("all");
  };

  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h2 className="font-serif text-3xl">
            {activeCategory === "All" ? "All Finds" : `${activeCategory} Finds`}
          </h2>

          <p className="mt-2 text-sm text-stone-600">
            {filteredProducts.length} products found
          </p>
        </div>

        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex w-fit items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 shadow-sm transition hover:bg-stone-50"
        >
          <Filter size={17} />
          Filters
          {appliedFilters.length > 0 && (
            <span className="rounded-full bg-[#5b3218] px-2 py-0.5 text-xs text-white">
              {appliedFilters.length}
            </span>
          )}
        </button>
      </div>

      {appliedFilters.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {appliedFilters.map((filter) => (
            <span
              key={filter}
              className="rounded-full bg-[#efe5d8] px-4 py-2 text-xs font-semibold text-stone-700"
            >
              {filter}
            </span>
          ))}
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              activeCategory === category
                ? "border-[#2b170b] bg-[#2b170b] text-white"
                : "border-stone-200 bg-white text-stone-700 hover:border-stone-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-xl border border-stone-200 bg-white px-6 py-12 text-center">
          <h3 className="font-serif text-3xl">No products found</h3>

          <p className="mt-3 text-sm text-stone-600">
            Try changing the category or price filter.
          </p>
        </div>
      )}

      {isFilterOpen && (
        <div className="fixed inset-0 z-[100]">
          <button
            onClick={() => setIsFilterOpen(false)}
            className="absolute inset-0 bg-black/30"
          />

          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-[#fbf8f3] shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
              <div>
                <h3 className="font-serif text-3xl">Filters</h3>
                <p className="mt-1 text-sm text-stone-500">
                  Refine your cozy finds
                </p>
              </div>

              <button
                onClick={() => setIsFilterOpen(false)}
                className="rounded-full bg-white p-2 shadow-sm"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-8 px-6 py-6">
              <FilterGroup title="Sort by">
                <FilterOption
                  label="Newest"
                  active={sortBy === "newest"}
                  onClick={() => setSortBy("newest")}
                />
                <FilterOption
                  label="Price: Low to High"
                  active={sortBy === "price-low-high"}
                  onClick={() => setSortBy("price-low-high")}
                />
                <FilterOption
                  label="Price: High to Low"
                  active={sortBy === "price-high-low"}
                  onClick={() => setSortBy("price-high-low")}
                />
                <FilterOption
                  label="Name: A to Z"
                  active={sortBy === "name-a-z"}
                  onClick={() => setSortBy("name-a-z")}
                />
              </FilterGroup>

              <FilterGroup title="Price range">
                <FilterOption
                  label="All Prices"
                  active={priceRange === "all"}
                  onClick={() => setPriceRange("all")}
                />
                <FilterOption
                  label="Below ₹500"
                  active={priceRange === "below-500"}
                  onClick={() => setPriceRange("below-500")}
                />
                <FilterOption
                  label="₹500 - ₹1,500"
                  active={priceRange === "500-1500"}
                  onClick={() => setPriceRange("500-1500")}
                />
                <FilterOption
                  label="₹1,500 - ₹2,500"
                  active={priceRange === "1500-2500"}
                  onClick={() => setPriceRange("1500-2500")}
                />
                <FilterOption
                  label="₹2,500 - ₹3,500"
                  active={priceRange === "2500-3500"}
                  onClick={() => setPriceRange("2500-3500")}
                />
                <FilterOption
                  label="₹3,500+"
                  active={priceRange === "3500-plus"}
                  onClick={() => setPriceRange("3500-plus")}
                />
              </FilterGroup>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex gap-3 border-t border-stone-200 bg-[#fbf8f3] p-6">
              <button
                onClick={clearFilters}
                className="flex-1 rounded-lg border border-stone-300 bg-white px-5 py-3 text-sm font-bold text-stone-700"
              >
                Reset
              </button>

              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 rounded-lg bg-[#5b3218] px-5 py-3 text-sm font-bold text-white"
              >
                Show {filteredProducts.length} Finds
              </button>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-stone-500">
        {title}
      </h4>

      <div className="grid gap-2">{children}</div>
    </div>
  );
}

function FilterOption({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition ${
        active
          ? "border-[#5b3218] bg-[#5b3218] text-white"
          : "border-stone-200 bg-white text-stone-700 hover:border-stone-400"
      }`}
    >
      {label}

      {active && <span className="text-xs">Selected</span>}
    </button>
  );
}

function getPriceLabel(value: string) {
  const labels: Record<string, string> = {
    "below-500": "Below ₹500",
    "500-1500": "₹500 - ₹1,500",
    "1500-2500": "₹1,500 - ₹2,500",
    "2500-3500": "₹2,500 - ₹3,500",
    "3500-plus": "₹3,500+",
  };

  return labels[value] ?? value;
}

function getSortLabel(value: string) {
  const labels: Record<string, string> = {
    "price-low-high": "Price: Low to High",
    "price-high-low": "Price: High to Low",
    "name-a-z": "Name: A to Z",
  };

  return labels[value] ?? value;
}
