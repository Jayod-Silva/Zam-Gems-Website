import React, { useState, type JSX } from "react";

// VaultPage.tsx
// React + TypeScript + Tailwind CSS single-file page component
// Place gem images in public/images/ with names: ruby.jpg, emerald.jpg, padparadscha.jpg, ceylon.jpg, semi.jpg, cats-eye.jpg, map-gems.png, hero-ring.png

type Gem = {
  id: string;
  name: string;
  image: string;
  short: string;
  detail: string;
};

const GEMS: Gem[] = [
  {
    id: "ruby",
    name: "Ruby",
    image: "/images/ruby.jpg",
    short: "The fiery red stone of passion and royalty.",
    detail:
      "Rubies are prized for their intense red color. Historically associated with nobility and protection, fine rubies command high value and are often heat-treated to improve clarity and color.",
  },
  {
    id: "emerald",
    name: "Emerald",
    image: "/images/emerald.jpg",
    short: "Green symbol of rebirth and elegance.",
    detail:
      "Emeralds are treasured for their lush green hues. They often contain inclusions called 'jardin' that are accepted as part of their character. High-quality emeralds are rare and historically linked to royalty and spiritual texts.",
  },
  {
    id: "padparadscha",
    name: "Padparadscha",
    image: "/images/padparadscha.jpg",
    short: "A rare salmon-pink sapphire from Sri Lanka.",
    detail:
      "Padparadscha sapphires carry a unique pink-orange color. These are rare and much sought after by collectors. Sri Lanka is one of the classic sources for fine padparadscha.",
  },
  {
    id: "ceylon",
    name: "Ceylon Blue Sapphire",
    image: "/images/ceylon.jpg",
    short: "Electric blue sapphires from the gem island.",
    detail:
      "Ceylon sapphires (from Sri Lanka) are known for their bright, lively blue color. They have been coveted for centuries and appear in major historic collections.",
  },
  {
    id: "semi",
    name: "Semi-Precious Stones",
    image: "/images/semi.jpg",
    short: "A curated selection of lesser-known beauties.",
    detail:
      "This group includes topaz, aquamarine, garnet, and more. Though not always classified as 'precious', these stones have outstanding variety and collectible interest.",
  },
  {
    id: "cats-eye",
    name: "Cat's Eye",
    image: "/images/cats-eye.jpg",
    short: "Unique chatoyancy that resembles an eye.",
    detail:
      "Cat's Eye gems show a light band that moves across the stone. Chrysoberyl cat's eye is the classic variety and is appreciated for its distinctive optical effect.",
  },
];

export default function VaultPage(): JSX.Element {
  const [selected, setSelected] = useState<Gem | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f7f5f2] to-white text-gray-900">
      {/* Top navigation placeholder */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-xl font-serif tracking-wide">The Vault</div>
        <nav className="text-sm">{/* add nav links if needed */}</nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-6">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-serif text-5xl lg:text-6xl leading-tight">Welcome To
              <span className="block text-6xl lg:text-7xl mt-2">The Vault</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-base leading-relaxed text-justify">
              Explore the extraordinary world of stones. Learn about the most iconic gemstones — their stories, symbolism, and the beauty that defines them.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <button
                onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
                className="inline-flex items-center gap-2 text-sm font-medium"
                aria-label="scroll down"
              >
                Learn more
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 hidden lg:block">
            <img src="/images/hero-ring.png" alt="gem rings" className="mx-auto max-w-[420px]" />
          </div>
        </div>
      </section>

      {/* Two-column section */}
      <section className="max-w-6xl mx-auto px-6 mt-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-3xl">The Fascinating World of Gems &amp; Jewelry</h2>
            <p className="mt-4 text-sm leading-relaxed text-justify">
              Sri Lanka, often called the "Gem Island," has been revered for centuries for its breathtaking array of precious stones. Legend speaks of the "Tears of Adam," shed at Adam's Peak in a moment of divine repentance, said to have seeded the land with gems.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-justify">
              Renowned explorers and scholars like Marco Polo, Ptolemy, and Ibn Sina marveled at Sri Lanka's treasures. From ancient myths like Sinbad the Sailor to royal collections around the world, these stones have long captured global imagination.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-justify">
              Today, gems like the electric Ceylon Blue Sapphire, the fiery Ruby, and the rare Padparadscha continue to shine as symbols of beauty, rarity, and cultural legacy — making Sri Lanka a revered source of the world's finest gemstones.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img src="/images/map-gems.png" alt="map of sri lanka made of gems" className="max-w-[300px]" />
          </div>
        </div>
      </section>

      {/* Key Gemstones */}
      <section className="max-w-6xl mx-auto px-6 mt-8 mb-20">
        <h3 className="text-center font-serif text-2xl">Key Gemstones</h3>
        <p className="text-center text-sm mt-2">Click on a gem to read more.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {GEMS.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelected(g)}
              className="group bg-white/60 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center shadow-md hover:shadow-xl focus:outline-none"
              aria-label={`Open details for ${g.name}`}
            >
              <div className="w-40 h-40 flex items-center justify-center">
                <img
                  src={g.image}
                  alt={g.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-lg font-serif">{g.name}</div>
              <div className="mt-2 text-sm text-center text-gray-600 hidden group-hover:block">{g.short}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Detail drawer / modal */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full md:w-3/4 lg:w-1/2 bg-white rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row gap-6"
          >
            <div className="md:w-1/2 flex items-center justify-center">
              <img src={selected.image} alt={selected.name} className="max-w-full max-h-80 object-contain" />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-serif">{selected.name}</h4>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-500 hover:text-gray-800"
                  aria-label="Close details"
                >
                  ✕
                </button>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-justify">{selected.detail}</p>
              <div className="mt-6">
                <a href="#" className="text-sm underline">Read full article</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="max-w-6xl mx-auto px-6 py-12 text-center text-sm text-gray-500">
        © The Vault — Demo implementation. Replace images and fine-tune typography for production.
      </footer>
    </div>
  );
}
