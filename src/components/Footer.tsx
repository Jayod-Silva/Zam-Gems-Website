import { FaFacebook, FaYoutube, FaTiktok, FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F190A] text-[F1E5C6] mt-10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">ZAM GEMS</h4>
          <p className="text-sm">
            Exquisite gemstones and bespoke jewelry crafted with passion and heritage.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-900">About Us</a></li>
            <li><a href="#" className="hover:text-gray-900">Shop</a></li>
            <li><a href="#" className="hover:text-gray-900">Showrooms</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-900">Find a Store</a></li>
            <li><a href="#" className="hover:text-gray-900">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-gray-900">Shipping Info</a></li>
            <li><a href="#" className="hover:text-gray-900">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-900"><FaFacebook/></a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-900"><FaInstagram /></a>
            <a href="#" aria-label="Tiktok" className="hover:text-gray-900"><FaTiktok  /></a>
            <a href="#" aria-label="Youtube" className="hover:text-gray-900"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Zam Gems. All rights reserved.
      </div>
    </footer>
  );
}