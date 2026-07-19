import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-gray-300">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              OREBI.
            </h2>

            <p className="text-sm leading-7 text-gray-400">
              Discover premium fashion, accessories and lifestyle products.
              We provide quality products with fast delivery and secure
              shopping experience.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Shop
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-white duration-300 cursor-pointer">
                New Arrivals
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                Best Sellers
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                Featured Products
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                Sale
              </li>
            </ul>
          </div>

          {/* Customer */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Customer Service
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-white duration-300 cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                FAQs
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                Shipping
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                Returns
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-gray-400">
              <p>📍 Dhaka, Bangladesh</p>
              <p>📞 +880 1768073488</p>
              <p>✉ mdronyhossen201@gmail.com</p>
              <p>🕒 Mon - Sat : 9AM - 8PM</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} OREBI. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white duration-300">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white duration-300">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-white duration-300">
              Cookies
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;