"use client";

import { FormEvent, useState } from "react";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import { supabase } from "../../src/lib/supabase";

const createSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Decor");
  const [description, setDescription] = useState("");
  const [amazonUrl, setAmazonUrl] = useState("");
  const [featured, setFeatured] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setMessage("");
    } else {
      setMessage("Incorrect password.");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!imageFile) {
      setMessage("Please upload a product image.");
      return;
    }

    setIsSaving(true);
    setMessage("");

    const slug = createSlug(title);

    const fileExtension = imageFile.name.split(".").pop();

    const filePath = `${slug}-${Date.now()}.${fileExtension}`;

    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(filePath, imageFile);

    if (uploadError) {
      setMessage(uploadError.message);
      setIsSaving(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("product-images")
      .getPublicUrl(filePath);

    const imageUrl = publicUrlData.publicUrl;

    const { error: insertError } = await supabase.from("products").insert({
      title,
      slug,
      price,
      category,
      description,
      amazon_url: amazonUrl,
      image: imageUrl,
      featured,
    });

    if (insertError) {
      setMessage(insertError.message);
      setIsSaving(false);
      return;
    }

    setTitle("");
    setPrice("");
    setCategory("Decor");
    setDescription("");
    setAmazonUrl("");
    setFeatured(false);
    setImageFile(null);

    setMessage("Product added successfully.");

    setIsSaving(false);
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#fbf8f3] text-stone-950">
        <Header />

        <section className="mx-auto flex min-h-[70vh] max-w-md items-center px-6">
          <div className="w-full rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <h1 className="font-serif text-4xl">Admin Access</h1>

            <p className="mt-3 text-sm text-stone-600">
              Enter admin password to continue.
            </p>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              className="mt-6 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none"
            />

            {message && (
              <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                {message}
              </p>
            )}

            <button
              onClick={handleLogin}
              className="mt-5 w-full rounded-lg bg-[#5b3218] px-6 py-4 text-sm font-bold text-white"
            >
              Login
            </button>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fbf8f3] text-stone-950">
      <Header />

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="font-serif text-4xl">Add Product</h1>

        <p className="mt-3 text-sm text-stone-600">
          Add products manually for CozyNest Finds.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 rounded-2xl border border-stone-200 bg-white p-6"
        >
          <div>
            <label className="text-sm font-semibold">Product Title</label>

            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none"
              placeholder="Wooden Table Lamp"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Price</label>

            <input
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
              className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none"
              placeholder="₹1,499"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Category</label>

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none"
            >
              <option>Decor</option>
              <option>Lighting</option>
              <option>Storage</option>
              <option>Textiles</option>
              <option>Kitchen</option>
              <option>Furniture</option>
              <option>Wall Art</option>
              <option>Plants</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold">
              Amazon Affiliate URL
            </label>

            <input
              value={amazonUrl}
              onChange={(event) => setAmazonUrl(event.target.value)}
              required
              className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none"
              placeholder="https://www.amazon.in/..."
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Description</label>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={5}
              className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none"
              placeholder="Short product description..."
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Product Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={(event) =>
                setImageFile(event.target.files?.[0] ?? null)
              }
              required
              className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3"
            />
          </div>

          <label className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={featured}
              onChange={(event) => setFeatured(event.target.checked)}
            />
            Featured product
          </label>

          {message && (
            <p className="rounded-lg bg-stone-100 px-4 py-3 text-sm">
              {message}
            </p>
          )}

          <button
            disabled={isSaving}
            className="w-full rounded-lg bg-[#5b3218] px-6 py-4 text-sm font-bold text-white disabled:opacity-60"
          >
            {isSaving ? "Saving..." : "Add Product"}
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
