import Link from "next/link";
import { Search } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop All",
    href: "/#products",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#fbf8f3]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
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

        <button className="rounded-full p-2 hover:bg-stone-100">
          <Search size={20} />
        </button>
      </div>
    </header>
  );
}
