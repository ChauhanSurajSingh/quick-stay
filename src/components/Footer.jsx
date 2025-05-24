import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#f6f9fc] px-6 pt-10 text-gray-600 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-8">
        {/* Logo + Description + Socials */}
        <div className="max-w-sm min-w-0">
          <img
            src={assets.logo}
            alt="Hotel Logo"
            className="mb-4 h-9 opacity-80 invert"
          />
          <p className="text-sm leading-relaxed">
            Discover the world's most extraordinary places to stay — from
            boutique hotels to luxury villas and private islands.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <img
              src={assets.instagramIcon}
              alt="Instagram"
              aria-label="Instagram"
              className="w-6 cursor-pointer hover:opacity-70"
            />
            <img
              src={assets.facebookIcon}
              alt="Facebook"
              aria-label="Facebook"
              className="w-6 cursor-pointer hover:opacity-70"
            />
            <img
              src={assets.twitterIcon}
              alt="Twitter"
              aria-label="Twitter"
              className="w-6 cursor-pointer hover:opacity-70"
            />
            <img
              src={assets.linkendinIcon}
              alt="LinkedIn"
              aria-label="LinkedIn"
              className="w-6 cursor-pointer hover:opacity-70"
            />
          </div>
        </div>

        {/* Company Links */}
        <div className="min-w-[140px]">
          <p className="font-playfair text-lg text-gray-800">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {["About", "Careers", "Press", "Blog", "Partners"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-black">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div className="min-w-[140px]">
          <p className="font-playfair text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {[
              "Help Center",
              "Safety Information",
              "Cancellation Options",
              "Contact Us",
              "Accessibility",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-black">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="max-w-sm min-w-0">
          <p className="font-playfair text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className="mt-4 flex max-w-xs">
            <input
              type="email"
              placeholder="Your email"
              className="h-9 w-full rounded-l border border-gray-300 bg-white px-3 text-sm outline-none"
            />
            <button
              type="submit"
              className="flex h-9 w-10 cursor-pointer items-center justify-center rounded-r bg-black hover:bg-gray-900"
            >
              <img
                src={assets.arrowIcon}
                alt="Submit"
                className="w-3.5 invert"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <hr className="mt-10 border-gray-300" />
      <div className="flex flex-col items-center justify-between gap-3 py-5 text-sm md:flex-row">
        <p>© {new Date().getFullYear()} QuickStay. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          {["Privacy", "Terms", "Sitemap"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-black">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
