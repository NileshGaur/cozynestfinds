import Link from "next/link";
import { Mail, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-[#f5efe6]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="font-serif text-3xl text-stone-950">CozyNest</div>
          <div className="-mt-1 font-serif text-sm italic text-stone-700">
            finds
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-stone-600">
            Finds that make your space warmer and your life simpler.
          </p>

          <div className="mt-5 flex gap-4 text-stone-800">
            <Mail size={18} />
            <Music2 size={18} />
            <Mail size={18} />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-stone-950">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-stone-600">
            <Link href="/">Home</Link>
            <Link href="#">Shop All</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-stone-950">Categories</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-stone-600">
            <Link href="#">Bedroom</Link>
            <Link href="#">Living Room</Link>
            <Link href="#">Kitchen</Link>
            <Link href="#">Decor</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-stone-950">Newsletter</h4>
          <p className="mt-4 text-sm text-stone-600">
            Get cozy inspo & new finds straight to your inbox.
          </p>

          <div className="mt-5 flex overflow-hidden rounded-lg border border-stone-300 bg-white">
            <input
              placeholder="Your email address"
              className="w-full px-4 py-3 text-sm outline-none"
            />
            <button className="bg-[#5b3218] px-4 text-sm font-bold text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <p className="pb-6 text-center text-xs text-stone-500">
        © 2026 CozyNest Finds. All rights reserved.
      </p>
    </footer>
  );
}
