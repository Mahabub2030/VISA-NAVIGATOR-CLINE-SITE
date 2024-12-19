import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="container mx-auto px-5 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and Tagline */}
          <div>
            <h2 className="text-white text-2xl font-bold flex items-center gap-2">
              <span className="text-blue-500">📄</span> Visa Navigator
            </h2>
            <p className="mt-2">
              Your comprehensive global travel visa resource.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">All Visas</li>
              <li className="hover:text-white cursor-pointer">Add Visa</li>
              <li className="hover:text-white cursor-pointer">My Added Visas</li>
              <li className="hover:text-white cursor-pointer">My Visa Applications</li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Connect With Us
            </h3>
            <div className="flex items-center gap-4 text-xl mb-4">
              <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
            </div>
            <p className="flex items-center gap-2 hover:text-white cursor-pointer">
              <HiOutlineMail /> support@visanavigator.com
            </p>
            <p className="flex items-center gap-2 hover:text-white cursor-pointer mt-2">
              <GoLocation /> Global Support Center
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-600 mt-10 border-t border-gray-700 pt-5">
          © 2024 Visa Navigator. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;