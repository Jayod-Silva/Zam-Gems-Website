"use client";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import L from "leaflet";
import Navbar from "../components/Header";
import { IoLocationOutline } from "react-icons/io5";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Footer from "../components/Footer";

//feature section images
import slide1 from "../assets/show1.jpg";
import slide2 from "../assets/show2.jpg";
import slide3 from "../assets/show3.jpg";
import slide4 from "../assets/show4.jpg";

const featuredItems = [
  {
    id: 1,
    title: "Salt & Sapphire",
    description:
      "A look inside our showrooms; discover the ambiance artistry, and atmosphere of our signature spaces.",
    AddressText: "Colombo Flagship Store:52 Ananda Coomarasamy Mawatha, Colombo 03",
    image: slide1,
  },
  {
    id: 2,
    title: "Sunspill",
    description:
      "Bright stones and blooming silhouettes, flowers frozen in time.",
    AddressText: "Explore the Collection",
    image: slide2,
  },
  {
    id: 3,
    title: "In Bloom",
    description:
      "A circle of light for the ones who shine on their own- every stone wrapped in its own orbit.",
    AddressText: "Explore the Collection",
    image: slide3,
  },
  {
    id: 4,
    title: "Halo'ed",
    description:
      "A circle of light for the ones who shine on their own- every stone wrapped in its own orbit.",
    AddressText: "Explore the Collection",
    image: slide4,
  },
];

// Fix default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
  googleMapsUrl: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Heade Office:81 Galle Road, Colombo 04",
    lat: 6.89334,
    lng: 79.85621,
    googleMapsUrl: "https://www.google.com/maps?q=6.89334,79.85621",
  },
  {
    id: 2,
    name: "Colombo Flagship Store: 52 Ananda Coomaraswamy Mawatha, Colombo 03",
    lat: 6.91173,
    lng: 79.85384,
    googleMapsUrl: "https://www.google.com/maps?q=6.91173,79.85384",
  },
  {
    id: 3,
    name: "Kandy Flagship Store: 548 Peradeniya Road, Kandy",
    lat: 7.28149,
    lng: 80.61937,
    googleMapsUrl: "https://www.google.com/maps?q=7.28149,80.61937",
  },
  {
    id: 4,
    name: "The Colombo Hilton",
    lat: 6.93286,
    lng: 79.84477,
    googleMapsUrl: "https://www.google.com/maps?q=6.93286,79.84477",
  },
  {
    id: 5,
    name: "The Cinnamon Grand Hote, Colombo",
    lat: 6.91802,
    lng: 79.84852,
    googleMapsUrl: "https://www.google.com/maps?q=6.91802,79.84852",
  },
  {
    id: 6,
    name: "The Cinnamon Lakeside Hotel, Colombo",
    lat: 6.92937,
    lng: 79.84931,
    googleMapsUrl: "https://www.google.com/maps?q=6.92937,79.84931",
  },
  {
    id: 7,
    name: "The Shangri-La Hotel, Colombo",
    lat: 6.92874,
    lng: 79.84439,
    googleMapsUrl: "https://www.google.com/maps?q=6.92874,79.84439",
  },
  {
    id: 8,
    name: "The Kingsbury Hotel, Colombo",
    lat: 6.93297,
    lng: 79.84232,
    googleMapsUrl: "https://www.google.com/maps?q=6.93297,79.84232",
  },
  {
    id: 9,
    name: "Bandaranaike International Airport Departure/Transit Area (2 Outlets)",
    lat: 7.18058,
    lng: 79.88479,
    googleMapsUrl: "https://www.google.com/maps?q=7.18058,79.88479",
  },
  {
    id: 10,
    name: "Ductch Hospital Complex, Galle Fort",
    lat: 6.02697,
    lng: 80.21966,
    googleMapsUrl: "https://www.google.com/maps?q=6.02697,80.21966",
  },
  {
    id: 11,
    name: "L1-65, One Galle Face Mall, Colombo",
    lat: 6.92722,
    lng: 79.84471,
    googleMapsUrl: "https://www.google.com/maps?q=6.92722,79.84471",
  },
  {
    id: 12,
    name: "Odel Shopping Complex, Colombo",
    lat: 6.0328,
    lng: 80.2169,
    googleMapsUrl: "https://www.google.com/maps?q=6.0328,80.2169",
  },
  {
    id: 13,
    name: "L1,Odel Departmnet Store, One Galle Face Mall, Colombo",
    lat: 6.92712,
    lng: 79.84503,
    googleMapsUrl: "https://www.google.com/maps?q=6.92712,79.84503",
  },
];

export default function Showrooms() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === featuredItems.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev === featuredItems.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? featuredItems.length - 1 : prev - 1));

  return (
    <div className="bg-white text-gray-800">
      <div>
        <Navbar />

        {/* Hero Section */}
        <section className="relative">
          <img
            src="src/assets/SH OGF.png"
            alt="Showroom Interior"
            className="w-full h-[90vh] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-[#FFFEFA]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ fontFamily: "Baskervville, sans-serif" }}
              className="text-4xl md:text-7xl font-light mb-10"
            >
              Experience Our
              <br /> Showrooms
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="max-w-sm text-lg leading-relaxed"
            >
              At ZAM Gems, we constantly
              <br /> strive to innovate and find
              <br /> new ways to offer you an
              <br />
              exemplary experience at our
              <br /> showrooms located across
              <br /> the nation.
              <br />
              Our showroos showcase a<br /> diverse range of products
              <br /> from our colored gemstones
              <br /> to a wide array of fine jewelry
              <br /> that are marketed and
              <br /> handled meticulously by our
              <br /> well-trained staff.
            </motion.p>
          </div>
        </section>

        {/* Metrics Section */}
        <section
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="py-25 bg-white text-center grid grid-cols-1 sm:grid-cols-3 md:mt-4 gap-10 max-w-7xl mx-auto"
        >
          <div>
            <h3 className="text-7xl font-light mb-2">15+</h3>
            <p className="uppercase tracking-wide text-sm font-bold">
              Showrooms
            </p>
            <p className="text-gray-900 mt-8 font-light">
              Across Colombo & Sri Lanka
            </p>
          </div>
          <div>
            <p className="uppercase tracking-wide text-sm font-bold">Since</p>
            <h3 className="text-7xl font-light mb-2">1976</h3>
            <p className="text-gray-900 mt-10 font-light">
              Over 45 years of trust & tradition
            </p>
          </div>
          <div>
            <p className="uppercase tracking-wide text-sm font-bold">In</p>
            <h3 className="text-7xl font-light mb-2">5</h3>
            <p className="uppercase tracking-wide text-sm font-bold">
              Star Hotels
            </p>
            <p className="text-gray-900 mt-3 font-light">
              Luxury at your convenience
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section
          style={{ fontFamily: "Baskervville, sans-serif" }}
          className="px-6 md:px-40 pt-16 grid grid-cols-1 md:grid-cols-3 gap-30 items-center"
        >
          <div>
            <h2 className="text-7xl font-light mb-4 mt-[-340px]">
              Find Us On<br /> The Map
            </h2>
            <p
              style={{ fontFamily: "montserrat, sans-serif" }}
              className="text-gray-600 text-md mb-6 text-left"
            >
              Discover your nearest showroom at<br /> your convenience.
            </p>
          </div>
          <div className="relative h-[700px] w-[900px] overflow-hidden shadow-lg">
            <MapContainer
              center={[7.5, 80.5]}
              zoom={9.5}
              scrollWheelZoom={false}
              className="h-full w-full z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locations.map((loc) => (
                <Marker key={loc.id} position={[loc.lat, loc.lng]}>
                  <Popup>
                    <strong>{loc.name}</strong>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </section>

        {/* All Showrooms List */}
        <section
          style={{ fontFamily: "Baskervville, sans-serif" }}
          className="px-6 md:px-40 py-16 bg-white "
        >
          <h2 className="text-6xl font-regular mb-6">...Or,</h2>
          <h2 className="text-6xl mt-10 font-regular mb-6">
            View All Showrooms At A Glance
          </h2>
          <ul
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="space-y-6 text-gray-700 p-6 pt-15"
          >
            {locations.map((loc) => (
              <li key={loc.id} className="flex items-start gap-5">
                <IoLocationOutline className="text-gray-500" size={30} />
                <div>
                  <a
                    href={loc.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-gray-600 font-medium hover:underline "
                  >
                    {loc.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Featured Section – SLIDE animation */}
        <section className="relative flex flex-col md:flex-row w-full bg-white overflow-hidden md:h-[700px]">
          {/* Left Text */}
          <div className="flex flex-col justify-center mt-10 px-6 md:px-20 lg:px-28 w-full md:w-1/2 text-gray-900">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ fontFamily: "Baskervville, serif" }}
              className="text-4xl md:text-6xl font-light mb-6"
            >
              {featuredItems[current].title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="text-lg md:text-sm mb-10 leading-relaxed max-w-sm"
            >
              {featuredItems[current].description}
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => (window.location.href = "/gems")}
              className="px-6 py-3 border border-black text-black font-medium hover:bg-gray-100 transition-colors duration-300 w-fit"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {featuredItems[current].AddressText}
            </motion.button>

            {/* Dots */}
            <div className="flex mt-8 space-x-3">
              {featuredItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-7 h-7 rounded-full ${
                    i === current ? "bg-black" : "border border-black"
                  } transition-all duration-300`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Image Slider (slide instead of fade) */}
          <div className="relative w-full md:w-[1300px] h-[400px] md:h-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {featuredItems.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>

            {/* Chevron Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-5 top-1/2 -translate-y-1/2 "
            >
              <SlArrowLeft className="w-25 h-auto text-gray-200 opacity-60" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-5 top-1/2 -translate-y-1/2 "
            >
              <SlArrowRight className="w-25 h-auto text-gray-200 opacity-60" />
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
