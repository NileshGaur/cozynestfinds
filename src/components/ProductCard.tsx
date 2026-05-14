import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  slug: string;
  price: string;
  category: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative h-64 overflow-hidden bg-stone-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover object-top transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex items-start justify-between gap-4 p-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-400">
            {product.category}
          </p>

          <h3 className="mt-2 text-sm font-bold text-stone-950">
            {product.title}
          </h3>

          <p className="mt-1 text-sm font-semibold text-stone-900">
            ₹{product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
