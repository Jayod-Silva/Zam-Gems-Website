import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline, IoSearchOutline, IoChevronDown } from "react-icons/io5";
import logo from "/src/assets/header-logo.png";
import navbespoke from "../assets/nav-Bespoke.png";

const navLinks = [
  { name: "About Us", href: "/gem" }, // Now points to your gem page
  { name: "Testimonial", href: "/testimonial" },
  { name: "The Vault", href: "/the-vault" },
  { name: "Shop", href: "/shop" },
  { name: "Showrooms", href: "/showrooms" },
];

const shopDropdown = [
  {
    title: "Gems",
    items: [
      { name: "Alexandrites", href: "/gem" },
      { name: "Blue Sapphires", href: "/gem" },
      { name: "Mixed Sapphires", href: "/gem" },
      { name: "Padparadscha", href: "/gem" },
      { name: "Rubies", href: "/gem" },
      { name: "Cats Eye", href: "/gem" }
    ],
  },
  {
    title: "Jewelry",
    items: [
      { name: "Rings", href: "/gem" },
      { name: "Necklaces", href: "/gem" },
      { name: "Earrings", href: "/gem" },
      { name: "Bracelets", href: "/gem" },
      { name: "Pendants", href: "/gem" }
    ],
  },
  {
    title: "By Collection",
    items: [
      { name: "Salt & Sapphire", href: "/gem" },
      { name: "Sunsphill", href: "/gem" },
      { name: "In Bloom", href: "/gem" },
      { name: "Halo'ed", href: "/gem" },
      { name: "Evergreen", href: "/gem" },
      { name: "Aquamarine", href: "/gem" },
      { name: "Under $1000", href: "/gem" }
    ],
  },
  {
    title: "Custom",
    image: navbespoke,
    items: [
      { name: "Design Your Own", href: "/gem" },
      { name: "Create an exquisite piece that's uniquely yours.", href: "/gem" }
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const shopButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation(); // Get current location

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        shopButtonRef.current &&
        !shopButtonRef.current.contains(event.target as Node)
      ) {
        setShopDropdownOpen(false);
      }
    };

    if (shopDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [shopDropdownOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
  };

  const handleShopClick = () => {
    setShopDropdownOpen(open => !open);
  };

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      <header className="w-full fixed bg-[#FFFEFA] z-50 py-2 border-b border-gray-200">
        {/* Top Row */}
        <div 
        style={{ fontFamily: "Baskervville, sans-serif" }}
        className="flex items-center justify-between px-3 md:px-30 py-3 md:py-4">
          {/* Left: Find a Store */}
          <Link
            to="/find-store"
            className="hidden md:flex items-center text-lg text-gray-800 hover:text-yellow-600 mt-5"
          >
            <IoLocationOutline className="mr-2 text-3xl" /> 
            Find a Store
          </Link>

          {/* Center: Logo */}
          <Link
            to="/"
            className="flex justify-center ml-[90px] md:ml-0"
            onClick={handleLinkClick}
          >
            <img
              src={logo}
              alt="Zam Gems Logo"
              className="h-auto w-[180px] md:w-[300px] object-contain"
              loading="lazy"
            />
          </Link>

          {/* Right: Contact */}
          <Link
            to="/contact-us"
            className="hidden md:flex items-center text-lg text-gray-800 hover:text-yellow-600 mt-5"
            onClick={handleLinkClick}
          >
            <BsTelephone className="mr-2 text-2xl" /> 
            Contact Us
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav 
        style={{ fontFamily: "Baskervville, sans-serif" }}
        className="hidden md:flex justify-center space-x-20 text-lg font-medium text-gray-800 pb-3 mt-4 relative">
          {navLinks.map((link) =>
            link.name === "Shop" ? (
              <div key={link.name} className="relative flex items-center">
                <button
                  ref={shopButtonRef}
                  className={`flex items-center hover:text-yellow-600 cursor-pointer transition-colors duration-200 ${
                    isActiveLink(link.href) || shopDropdownOpen
                      ? "text-yellow-600 border-b-2 border-yellow-600"
                      : "text-gray-800"
                  }`}
                  onClick={handleShopClick}
                >
                  {link.name}
                  <IoChevronDown 
                    className={`ml-1 text-xl transition-transform duration-300 ${
                      shopDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Shop Dropdown */}
                {shopDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[90vw] max-w-6xl bg-white shadow-2xl border border-gray-200 rounded-lg z-50"
                  >
                    <div className="flex w-full">
                      {shopDropdown.map((col, idx) => (
                        <div
                          key={idx}
                          className="flex-1 px-6 py-6 border-r last:border-r-0 border-gray-100"
                        >
                          <div className="mb-2 flex flex-col items-left mt-4">
                            <span className="font-semibold text-gray-800 text-lg">{col.title}</span>
                            {col.image && (
                              <img
                                src={col.image}
                                alt={col.title}
                                className="w-60 h-45 mt-7 object-cover"
                              />
                            )}
                          </div>
                          <ul className="space-y-2 mt-7">
                            {col.items.map((item, i) => (
                              <li key={i}>
                                <Link
                                  to={item.href}
                                  className="block px-2 py-1 rounded hover:text-yellow-600 cursor-pointer transition-colors"
                                  onClick={handleLinkClick}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`hover:text-yellow-600 transition-colors duration-200 ${
                  isActiveLink(link.href)
                    ? "text-yellow-600 border-b-2 border-yellow-600"
                    : "text-gray-800"
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            )
          )}
          <button className="hover:text-yellow-600 text-3xl cursor-pointer text-gray-800 transition-colors duration-200">
            <IoSearchOutline />
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col space-y-3 py-4 px-6 text-base text-gray-700">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`block transition-colors duration-200 px-3 py-2 rounded-lg ${
                      isActiveLink(link.href)
                        ? "text-yellow-600 font-semibold bg-yellow-50"
                        : "hover:text-gray-900"
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button className="flex items-center space-x-2 hover:text-gray-900 transition-colors duration-200 px-3 py-2">
                  <IoSearchOutline /> 
                  <span>Search</span>
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="pt-[110px] md:pt-[140px]" />
    </>
  );
}