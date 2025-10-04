import { useState, useEffect } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import heroImg from "../assets/hero-img.png";
import bespokeImg from "../assets/bespoke.png";
import Navbar from "../components/Header";
import Testimonials from "../components/Testimonials-comp";
import LogoLoop from "../components/Logoloop";
import Footer from "../components/Footer";

//feature section images
import slide1 from "../assets/salt-saphire.png";
import slide2 from "../assets/sunpill.png";
import slide3 from "../assets/bloom.png";
import slide4 from "../assets/halo.png";
import slide5 from "../assets/evergreen.png";
import slide6 from "../assets/aquegreen.png";

// Monthly images - add all 12 months
import january from "../assets/june.png";
import february from "../assets/june.png";
import march from "../assets/june.png";
import april from "../assets/june.png";
import may from "../assets/june.png";
import june from "../assets/june.png";
import july from "../assets/june.png";
import august from "../assets/june.png";
import september from "../assets/june.png";
import october from "../assets/july.png";
import november from "../assets/june.png";
import december from "../assets/june.png";

// Legacy section icons
import showroomIcon from "../assets/showroom-icon.png";
import globeIcon from "../assets/globe-icon.png";
import legacyIcon from "../assets/Legacy-icon.png";
import awardIcon from "../assets/award-icon.png";
import employeeIcon from "../assets/employee-icon.png";

// Top Picks product images
import top1 from "../assets/top1.png";
import top2 from "../assets/top2.png";
import top3 from "../assets/top3.png";
import top4 from "../assets/top4.png";
import top5 from "../assets/top5.png";
import top6 from "../assets/top6.png";
import top7 from "../assets/top7.png";
import top8 from "../assets/top8.png";

import cat1 from "../assets/cat-1.png";
import cat2 from "../assets/cat-2.png";
import cat3 from "../assets/cat-3.png";
import cat4 from "../assets/cat-4.png";
import cat5 from "../assets/cat-5.png";
import cat6 from "../assets/cat-6.png";

const categories = [
  { name: "RINGS", img: cat1 },
  { name: "NECKLACES", img: cat2 },
  { name: "PENDANTS", img: cat3 },
  { name: "BRACELETS", img: cat4 },
  { name: "BANGLES", img: cat5 },
  { name: "EARRINGS", img: cat6 },
];

const imageLogos = [
  {
    src: top1,
    alt: "Company 1",
  },
  {
    src: top2,
    alt: "Company 2",
  },
  {
    src: top3,
    alt: "Company 3",
  },
];

const featuredItems = [
  {
    id: 1,
    title: "Salt & Sapphire",
    description:
      "A selection of blue stones in oceanic hues, from sapphires to topaz- inspired by the infinite shades of the sea.",
    buttonText: "Explore the Collection",
    image: slide1,
  },
  {
    id: 2,
    title: "Sunspill",
    description:
      "Bright stones and blooming silhouettes, flowers frozen in time.",
    buttonText: "Explore the Collection",
    image: slide2,
  },
  {
    id: 3,
    title: "In Bloom",
    description:
      "A circle of light for the ones who shine on their own- every stone wrapped in its own orbit.",
    buttonText: "Explore the Collectionn",
    image: slide3,
  },
  {
    id: 4,
    title: "Halo'ed",
    description:
      "A circle of light for the ones who shine on their own- every stone wrapped in its own orbit.",
    buttonText: "Explore the Collection",
    image: slide4,
  },
  {
    id: 5,
    title: "Evergreen",
    description:
      "Drawn from the island's lush greenery: rich green tones reflecting the living earth.",
    buttonText: "Explore the Collection",
    image: slide5,
  },
  {
    id: 6,
    title: "Aquamarine",
    description:
      "A tribute to Sri Lanka's coastal beauty and tranquil lagoons- with cool toned gemstones that reflect the glistening waters.",
    buttonText: "Explore the Collection",
    image: slide6,
  },
];

const legacyItems = [
  {
    icon: <img src={showroomIcon} alt="Showrooms" width={110} height={110} />,
    title: "15 Showrooms Nationwide",
  },
  {
    icon: (
      <img src={globeIcon} alt="Global Presence" width={110} height={110} />
    ),
    title: "Global Exhibition Presence",
  },
  {
    icon: <img src={legacyIcon} alt="Legacy" width={110} height={110} />,
    title: "A Legacy Spanning 3 Generations",
  },
  {
    icon: <img src={awardIcon} alt="Award Winners" width={110} height={110} />,
    title: "National Export Award Winners",
  },
  {
    icon: <img src={employeeIcon} alt="Employees" width={110} height={110} />,
    title: "225+ Employees Across Divisions",
  },
];

// Mock product data for Top Picks section
const topPicksProducts = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    description: "Elegant solitaire diamond ring",
    price: 1299.0,
    image: top1,
  },
  {
    id: 2,
    name: "Sapphire Necklace",
    description: "Blue sapphire pendant necklace",
    price: 899.0,
    image: top2,
  },
  {
    id: 3,
    name: "Pearl Earrings",
    description: "Classic pearl drop earrings",
    price: 459.0,
    image: top3,
  },
  {
    id: 4,
    name: "Gold Bracelet",
    description: "18K gold chain bracelet",
    price: 749.0,
    image: top4,
  },
  {
    id: 5,
    name: "Emerald Ring",
    description: "Vintage emerald cocktail ring",
    price: 1899.0,
    image: top5,
  },
  {
    id: 6,
    name: "Ruby Pendant",
    description: "Red ruby heart pendant",
    price: 699.0,
    image: top6,
  },
  {
    id: 7,
    name: "Diamond Studs",
    description: "Round diamond stud earrings",
    price: 1599.0,
    image: top7,
  },
  {
    id: 8,
    name: "Gold Bangle",
    description: "Traditional gold bangle",
    price: 1299.0,
    image: top8,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTopPicksSlide, setCurrentTopPicksSlide] = useState(0);

  // Featured collection slider auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === featuredItems.length - 1 ? 0 : prev + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Monthly scenery slider logic
  const monthlyImages = [
    { src: january, alt: "January Collection", month: 0 }, // January is 0 in JavaScript Date
    { src: february, alt: "February Collection", month: 1 },
    { src: march, alt: "March Collection", month: 2 },
    { src: april, alt: "April Collection", month: 3 },
    { src: may, alt: "May Collection", month: 4 },
    { src: june, alt: "June Collection", month: 5 },
    { src: july, alt: "July Collection", month: 6 },
    { src: august, alt: "August Collection", month: 7 },
    { src: september, alt: "September Collection", month: 8 },
    { src: october, alt: "October Collection", month: 9 },
    { src: november, alt: "November Collection", month: 10 },
    { src: december, alt: "December Collection", month: 11 },
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  // Get current month and set the corresponding image
  useEffect(() => {
    const updateMonthlyImage = () => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth(); // 0-11 (January-December)

      // Find the image that matches the current month
      const currentMonthImageIndex = monthlyImages.findIndex(
        (image) => image.month === currentMonth
      );

      if (currentMonthImageIndex !== -1) {
        setCurrentMonthIndex(currentMonthImageIndex);
      }
    };

    // Update immediately on mount
    updateMonthlyImage();

    // Set up interval to check for month changes daily
    const dailyCheck = setInterval(() => {
      updateMonthlyImage();
    }, 24 * 60 * 60 * 1000); // Check once per day

    return () => clearInterval(dailyCheck);
  }, []);

  // Top Picks carousel navigation functions
  const handleNextTopPicks = () => {
    const productsPerSlide = 4;
    const maxSlide = Math.ceil(topPicksProducts.length / productsPerSlide) - 1;
    setCurrentTopPicksSlide((current) =>
      current === maxSlide ? 0 : current + 1
    );
  };

  const handlePrevTopPicks = () => {
    const productsPerSlide = 4;
    const maxSlide = Math.ceil(topPicksProducts.length / productsPerSlide) - 1;
    setCurrentTopPicksSlide((current) =>
      current === 0 ? maxSlide : current - 1
    );
  };

  // Calculate visible products based on current slide
  const getVisibleProducts = () => {
    const productsPerSlide = 4;
    const startIndex = currentTopPicksSlide * productsPerSlide;
    return topPicksProducts.slice(startIndex, startIndex + productsPerSlide);
  };

  return (
    <div className="bg-[#FFFEFA] min-h-screen scrollbar-hide">
      <Navbar />
      <div className="w-full">
        {/* Hero Section */}
        <section className="absolute md:mt-20 left-0 top-10 w-full overflow-hidden h-[600px] md:h-[820px]">
          <img
            loading="lazy"
            src={heroImg}
            alt="Beautiful gemstone necklace on wooden background"
            className="w-full h-[600px] md:h-[820px] object-cover object-center"
            style={{ objectPosition: "center 60%" }}
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>

          <div className="absolute top-30 left-36 max-w-md text-white">
            <h1
              style={{ fontFamily: "Baskervville, sans-serif" }}
              className="text-[80px] font-normal leading-tight"
            >
              Beautiful Gemstones From The Heart Of Sri Lanka
            </h1>
            <p
              className="mt-5 text-[20px] max-w-sm opacity-80"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              And some related food here maybe something seasonal that we change
              once in a while / newest shoots?
            </p>
          </div>
        </section>

        {/* Category Section */}
        <section className="mt-[600px] md:mt-[820px] py-16 md:py-10 px-4 md:px-1">
          <div className="container mx-auto">
            <h2 className="text-center text-4xl font-regular tracking-widest mb-12">
              Shop By{" "}
              <span
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="uppercase text-5xl font-regular"
              >
                CATEGORY
              </span>
            </h2>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-2 justify-items-center px-20">
              {categories.map(({ name, img }) => (
                <div
                  key={name}
                  className="group w-full max-w-[200px] cursor-pointer flex flex-col items-center transition-transform duration-300 hover:scale-103"
                >
                  <div className="w-full aspect-[2/4] overflow-hidden rounded-md shadow-md">
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 z-10"
                      loading="lazy"
                    />
                  </div>
                  <p
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    className="mt-4 text-md font-medium tracking-wide text-gray-700 group-hover:text-gray-900 transition-colors duration-300 z-20"
                  >
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collection Slider Section */}
        <section className="mt-10 px-0 md:px-10 lg:px-0">
          <div className="relative w-full md:h-[600px] lg:h-[815px]  overflow-hidden">
            {/* Slides */}
            {featuredItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Content Overlay - Left Aligned */}
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 md:px-2">
                    <div className="max-w-md ml-0 md:ml-5 text-black p-6 md:p-8 rounded-lg">
                      <h2
                        style={{ fontFamily: "Baskervville, sans-serif" }}
                        className="text-3xl md:text-7xl font-normal mb-4"
                      >
                        {item.title}
                      </h2>
                      <p
                        className="mb-6 text-lg md:text-xl max-w-md"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      ></p>

                      <p
                        className="mt-7 text-lg md:text-md max-w-md"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {item.description}
                      </p>

                      <button
                        className="px-6 py-3 mt-15 border border-black text-black font-medium hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                        onClick={() => (window.location.href = "/gems")}
                      >
                        {item.buttonText}
                      </button>

                      {/* Navigation Dots */}
                      <div className="flex mt-8 space-x-2 ">
                        {featuredItems.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={() => goToSlide(dotIndex)}
                            className={`w-10 h-10 rounded-full cursor-pointer ${
                              dotIndex === currentSlide
                                ? "bg-black"
                                : "bg-transparent border border-black bg-opacity-50"
                            }`}
                            aria-label={`Go to slide ${dotIndex + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Monthly Scenery Slider Section */}
        <section className="w-full overflow-hidden ">
          {/* Option 1: Static monthly image (no sliding) */}
          <div className=" w-full flex justify-center">
            <img
              src={monthlyImages[currentMonthIndex]?.src}
              alt={monthlyImages[currentMonthIndex]?.alt}
              className="w-[1700px] object-fit h-64 md:h-80 lg:h-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-20 text-center max-w-7xl mx-auto px-4">
          <h3
            style={{ fontFamily: "Baskervville, sans-serif" }}
            className="text-5xl font-medium mb-17"
          >
            The ZAM Legacy
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-30 text-gray-700">
            {legacyItems.map(({ icon, title }) => (
              <div
                key={title}
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="flex flex-col items-center space-y-8"
              >
                <div className="text-gray-900">{icon}</div>
                <p className=" text-sm font-semibold tracking-wide">{title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bespoke Section */}
        <section className="relative bg-black text-white rounded-md overflow-hidden max-w-full mx-auto">
          <img
            loading="lazy"
            src={bespokeImg}
            alt="Bespoke jewelry ring with diamonds and emerald"
            className="w-full h-200 object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col justify-start items-end p-8">
            <h3
              style={{ fontFamily: "Baskervville, sans-serif" }}
              className="text-8xl font-serif font-regular mb-4 self-start pl-20 pt-20"
            >
              Bespoke
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Jewelry
            </h3>
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="max-w-lg mb-6 p-20 text-xl opacity-90 self-start"
            >
              You imagine. We create.
              <br /> Crafted uniquely for you.
              <br /> Ready to create your dream piece?
            </p>
            <div className="p-20">
              <button
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="justify-end border border-white px-3 py-3 text-xl font-normal hover:bg-white hover:text-black transition cursor-pointer"
              >
                Design your legacy &gt;
              </button>
            </div>
          </div>
        </section>

        {/* Top Picks Section */}
        <section className="py-20 shadow-sm max-w-full mx-auto">
          <div className="container mx-auto px-4">
            <h2
              style={{ fontFamily: "Baskervville, sans-serif" }}
              className="text-center text-5xl font-regular tracking-widest mb-12 font-serif"
            >
              Top Picks
            </h2>

            {/* Top Picks Carousel */}
            <div className="relative mt-15 max-w-7xl mx-auto">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out">
                  {getVisibleProducts().map((product) => (
                    <div key={product.id} className="flex-shrink-0 w-1/4 px-3">
                      <div className=" rounded-lg overflow-hidden cursor-pointer">
                        {/* Product Image */}
                        <div className="aspect-square bg-gray-100 flex items-center justify-center">
                          <img
                          loading="lazy"
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="p-4 text-center">
                          <h3
                            className="font-medium text-gray-900 mb-2"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            {product.name}
                          </h3>
                          <p
                            className="text-gray-600 text-sm mb-3"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                          >
                            {product.description}
                          </p>
                          <div className="flex justify-center items-center space-x-2">
                            <span
                              className="text-lg font-semibold text-gray-900"
                              style={{ fontFamily: "Montserrat, sans-serif" }}
                            >
                              ${product.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                className="absolute left-[-50px] top-40 transform -translate-y-1/2 -translate-x-6 cursor-pointer z-10"
                onClick={handlePrevTopPicks}
              >
                <HiOutlineChevronLeft className="w-15 h-15 text-gray-700" />
              </button>

              <button
                className="absolute right-[-50px] top-40 transform -translate-y-1/2 translate-x-6 cursor-pointer z-10"
                onClick={handleNextTopPicks}
              >
                <HiOutlineChevronRight className="w-15 h-15 text-gray-700" />
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials section - using the global state */}
        <Testimonials />

        <div className="bg-white pt-20 max-w-full mx-auto">
          <h1 
          style={{ fontFamily: "Baskervville, sans-serif" }}
          className="text-center text-5xl font-medium tracking-widest mb-12 font-serif">Affiliates</h1>

          <div
            className="max-w-9xl mx-auto "
            style={{
              height: "240px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LogoLoop
              logos={imageLogos}
              speed={60}
              direction="left"
              logoHeight={200}
              gap={80}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
        </div>

      </div>
      <Footer />
      
    </div>
  );
}
