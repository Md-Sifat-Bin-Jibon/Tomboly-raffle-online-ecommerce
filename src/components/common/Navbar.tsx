"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import Select from "react-select";
import Image from "next/image";
import logo from "../../assets/Vector.png";

const countryOptions = [
  { value: "us", label: "🇺🇸 United States" },
  { value: "gb", label: "🇬🇧 United Kingdom" },
  { value: "fr", label: "🇫🇷 France" },
  { value: "de", label: "🇩🇪 Germany" },
  { value: "in", label: "🇮🇳 India" },
  { value: "jp", label: "🇯🇵 Japan" },
];

const Navbar = () => {
  return (
    <section className="bg-white">
      <div className="w-full py-4 px-6 flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex flex-row gap-1 flex-shrink-0 items-center">
          <Image src={logo} alt="Logo" width={40} height={40} priority />
          <h1>Tomboly</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-6">
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          {/* Favorite Icon */}
          <MdFavoriteBorder className="text-gray-700 text-xl cursor-pointer hover:text-red-500" />

          {/* User Icon & Account */}
          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
            <LuUser className="text-xl" />
            <span className="text-sm">Account</span>
          </div>

          {/* Language Selector */}
          <div className="w-36">
            <Select
              options={countryOptions}
              defaultValue={countryOptions[0]}
              isSearchable={false}
              className="text-sm"
              styles={{
                control: (base) => ({
                  ...base,
                  borderRadius: "9999px",
                  padding: "2px 6px",
                  minHeight: "35px",
                  fontSize: "0.875rem",
                }),
                dropdownIndicator: (base) => ({
                  ...base,
                  padding: "0 4px",
                }),
                valueContainer: (base) => ({
                  ...base,
                  paddingLeft: "8px",
                }),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
