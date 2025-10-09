import React, { useState, type JSX } from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

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
    image: "src/assets/Gem1.png",
    short: "The fiery red stone of passion and royalty.",
    detail:
      "Rubies are prized for their intense red color. Historically associated with nobility and protection, fine rubies command high value and are often heat-treated to improve clarity and color.",
  },
  {
    id: "emerald",
    name: "Emerald",
    image: "src/assets/Gem2.png",
    short: "Green symbol of rebirth and elegance.",
    detail:
      "Emeralds are treasured for their lush green hues. They often contain inclusions called 'jardin' that are accepted as part of their character. High-quality emeralds are rare and historically linked to royalty and spiritual texts.",
  },
  {
    id: "padparadscha",
    name: "Padparadscha",
    image: "src/assets/Gem3.png",
    short: "A rare salmon-pink sapphire from Sri Lanka.",
    detail:
      "Padparadscha sapphires carry a unique pink-orange color. These are rare and much sought after by collectors. Sri Lanka is one of the classic sources for fine padparadscha.",
  },
  {
    id: "ceylon",
    name: "Ceylon Blue Sapphire",
    image: "src/assets/Gem4.png",
    short: "Electric blue sapphires from the gem island.",
    detail:
      "Ceylon sapphires (from Sri Lanka) are known for their bright, lively blue color. They have been coveted for centuries and appear in major historic collections.",
  },
  {
    id: "semi",
    name: "Semi-Precious Stones",
    image: "src/assets/Gem5.png",
    short: "A curated selection of lesser-known beauties.",
    detail:
      "This group includes topaz, aquamarine, garnet, and more. Though not always classified as 'precious', these stones have outstanding variety and collectible interest.",
  },
  {
    id: "cats-eye",
    name: "Cat's Eye",
    image: "src/assets/Gem6.png",
    short: "Unique chatoyancy that resembles an eye.",
    detail:
      "Cat's Eye gems show a light band that moves across the stone. Chrysoberyl cat's eye is the classic variety and is appreciated for its distinctive optical effect.",
  },
];

export default function VaultPage(): JSX.Element {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white via-[#f7f5f2] to-white text-gray-900 mt-25">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pt-6">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1 text-center lg:text-left">
              <h1
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="font-serif text-[#372a0a] text-5xl lg:text-6xl leading-tight font-light"
              >
                Welcome To
                <span
                  style={{ fontFamily: "Baskervville, sans-serif" }}
                  className="block text-6xl lg:text-7xl mt-2"
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Vault
                </span>
              </h1>

              <div className="absolute flex-1 hidden lg:block right-0 bottom-10">
                <img
                  src="src/assets/vaulethero.png"
                  alt="gem rings"
                  className="w-1200"
                />
              </div>

              <p
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="mt-48 max-w-xl text-lg mx-auto lg:mx-0 text-base leading-relaxed text-justify"
              >
                Explore the extraordinary{" "}
                <span className="font-bold">world of stones.</span> Learn
                <br /> about the most iconic gemstones — their stories,
                <br /> symbolism, and the beauty that defines them.
              </p>
              <div className="mt-2 flex justify-center lg:justify-start">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 600, behavior: "smooth" })
                  }
                  className="inline-flex items-center gap- ml-[-30px] text-sm font-medium"
                  aria-label="scroll down"
                >
                  <svg
                    className="w-40 h-auto"
                    viewBox="0 0 30 30"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Two-column section */}
        <section className="max-w-6xl mx-auto px-6 mt-12 py-16">
          <div
            style={{ fontFamily: "Baskervville, sans-serif" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="font-serif text-6xl font-light"
              >
                The Fascinating
                <br />
                <span className="text-6xl">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;World of
                </span>
              </h2>
              <p className="absolute ml-85 text-9xl mt-3">&</p>
              <h3 className="text-7xl ml-23 font-normal">
                &nbsp;&nbsp;&nbsp;Gems
                <br /> Jewelry
              </h3>

              <div
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="text-md mt-10"
              >
                <p className="mt-4 leading-relaxed text-justify">
                  Sri Lanka, often called the "Gem Island," has been revered for
                  centuries for its breathtaking array of precious stones.
                  Legend speaks of the "Tears of Adam," shed at Adam's Peak in a
                  moment of divine repentance, said to have seeded the land with
                  gems.
                </p>
                <p className="mt-4 leading-relaxed text-justify">
                  Renowned explorers and scholars like Marco Polo, Ptolemy, and
                  Ibn Sina marveled at Sri Lanka's treasures. From ancient myths
                  like Sinbad the Sailor to royal collections around the world,
                  these stones have long captured global imagination.
                </p>
                <p className="mt-4 leading-relaxed text-justify">
                  Today, gems like the electric Ceylon Blue Sapphire, the fiery
                  Ruby, and the rare Padparadscha continue to shine as symbols
                  of beauty, rarity, and cultural legacy — making Sri Lanka a
                  revered source of the world's finest gemstones.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="src/assets/Lanka.png"
                alt="map of sri lanka made of gems"
                className="max-w-[350px]"
              />
            </div>
          </div>
        </section>

        {/* Key Gemstones */}
        <section className="max-w-6xl mx-auto px-6 mt-8 mb-20">
          <h3
            style={{ fontFamily: "Baskervville, sans-serif" }}
            className="text-center font-serif text-5xl"
          >
            Key
            <br /> Gemstones
          </h3>
          <p
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="text-center text-sm mt-2"
          >
            Click on a gem to read more.
          </p>

          <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
            {GEMS.map((g, index) => {
              // Determine row: 3 gems per row (for md and above)
              const isEvenRow = Math.floor(index / 3) % 2 === 1;

              return (
                <div key={g.id} className="relative flex flex-col items-center">
                  <button
                    onClick={() =>
                      setSelected(selected === g.id ? null : g.id)
                    }
                    className="group relative flex flex-col items-center focus:outline-none"
                  >
                    <div className="relative w-48 h-48 flex items-center justify-center overflow-hidden rounded-xl cursor-pointer">
                      <img
                        src={g.image}
                        alt={g.name}
                        className="w-full h-full object-contain transition-all duration-500 transform group-hover:scale-110 group-hover:blur-[2px] group-hover:-scale-x-100"
                      />
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                        <p
                          style={{ fontFamily: "Poppins, sans-serif" }}
                          className="text-sm text-gray-800 px-3"
                        >
                          {g.short}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 text-lg font-serif text-gray-900">
                      {g.name}
                    </div>
                  </button>

                  {/* Drawer logic */}
                  {selected === g.id && (
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl p-4 w-80 z-10 border border-gray-200 animate-fade-in ${
                        isEvenRow ? "bottom-full mb-4" : "top-full mt-4"
                      }`}
                      style={{
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-serif">{g.name}</h4>
                        <button
                          onClick={() => setSelected(null)}
                          className="text-gray-500 hover:text-gray-800 cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="mt-3 flex justify-center">
                        <img
                          src={g.image}
                          alt={g.name}
                          className="max-w-[100px] h-auto object-contain"
                        />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-justify">
                        {g.detail}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
