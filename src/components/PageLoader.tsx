"use client";

import { useTransition } from "react";

export function PageTransitionLoader() {
  const [isPending] = useTransition();

  if (!isPending) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-stone-200" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#5b3218]" />
        </div>
        <p className="text-sm font-medium text-stone-700">Loading...</p>
      </div>
    </div>
  );
}
