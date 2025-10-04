import { FaFacebook, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1A1307] text-[#F1E5C6] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Info Section */}
        <div>
          <h3 className="text-2xl font-serif mb-6">Info</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:underline">About Us & History</a></li>
            <li><a href="#" className="hover:underline">Testimony</a></li>
            <li><a href="#" className="hover:underline">The Zam Vault</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-2xl font-serif mb-6">Support</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Jewelry Care</a></li>
            <li><a href="#" className="hover:underline">Ring Size Guide</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-2xl font-serif mb-6">Connect With Us</h3>
          <div className="flex space-x-6 mt-2 text-3xl">
            <a href="#" className="hover:opacity-80"><FaFacebook /></a>
            <a href="#" className="hover:opacity-80"><FaInstagram /></a>
            <a href="#" className="hover:opacity-80"><FaTiktok /></a>
            <a href="#" className="hover:opacity-80"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-[#2A220E] pt-6 text-center text-sm text-[#D6C9A6]">
        © {new Date().getFullYear()} ZamGems. Designed By Ceylon Innovation
      </div>
    </footer>
  );
}
