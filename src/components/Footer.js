import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-6 py-3 w-full rounded-lg text-purple-500 bg-purple-100">
      <div className="max-w-screen-xl mx-auto text-sm md:text-base flex flex-wrap justify-center sm:justify-between gap-4">
        <div className="flex items-center justify-start">EliteAppMakers</div>
        <div className="flex text-purple-500 items-center justify-end gap-x-2 sm:gap-x-3">
          <Link
            className="text-purple-500"
            to="https://nela.eliteappmakers.in/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-purple-500"
            to="https://nela.eliteappmakers.in/terms-and-conditions"
          >
            Terms and Conditions
          </Link>
          <Link
            className="text-purple-500"
            to="https://nela.eliteappmakers.in/contact-us"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
