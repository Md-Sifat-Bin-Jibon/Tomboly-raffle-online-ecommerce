'use client';

import usa from "@/assets/usa.png"
import logo1 from "@/assets/logo.png"

import { Search, Heart, User, ChevronDown, Menu, AlignLeft } from 'lucide-react';
import Image from "next/image";

export function Navbar() {
  return (
    <div className="w-full">
      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div >
                <Image src={logo1} alt="logo" width={40} height={40} />
              </div>
              <span className="text-xl font-bold text-gray-900">Tomboly</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search anything you need"
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none "
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Wishlist */}
              <button className="p-2 hover:bg-gray-50 rounded-md transition-colors hidden sm:block">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>

              {/* Account */}
              <button className="hidden sm:flex items-center space-x-1 p-2 hover:bg-gray-50 rounded-md transition-colors">
                <User className="h-5 w-5 text-gray-600" />
                <span className=" text-gray-700">Account</span>
              </button>

              {/* Language Selector */}
              <button className="hidden lg:flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors">
                {/* <div className="w-4 h-3 bg-blue-600 relative rounded-sm overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-1.5 bg-red-500"></div>
                  <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                </div> */}

                <Image src={usa} width={20} height={20} alt="usa"/>
                <span className=" text-gray-700">ENG</span>
                <ChevronDown className="h-5 w-5 text-gray-600" />
              </button>

              {/* Mobile Menu Button */}
              <button className="p-2 hover:bg-gray-50 rounded-md transition-colors md:hidden">
                <Menu className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="pb-4 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search anything you need"
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-blue-500 " style={{ background: 'linear-gradient(to right, #04BDEC, #0073B2)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Category and Nav Items */}
            <div className="flex items-center space-x-6">
              {/* Category Button */}
              <button className="flex items-center space-x-2   bg-white  px-3 py-2 pb-6 mt-3 rounded-t-lg transition-colors">
                <AlignLeft className="h-5 w-5 rounded-t-lg" />
                <span className=" font-medium">Category</span>
              </button>

              {/* Navigation Items */}
              <div className="hidden lg:flex items-center space-x-4">
                <button className="text-white hover:bg-blue-600 px-2 py-1 rounded transition-colors">
                  Popular
                </button>
                <button className="text-white hover:bg-blue-600 px-2 py-1 rounded transition-colors">
                  Best Deals
                </button>
                <button className="text-white hover:bg-blue-600 px-2 py-1 rounded transition-colors">
                  Recently Viewed
                </button>
                <button className="text-white hover:bg-blue-600 px-2 py-1 rounded transition-colors">
                  Trending
                </button>
                <button className="text-white hover:bg-blue-600 px-2 py-1 rounded transition-colors">
                  Raffle Draw
                </button>
              </div>
            </div>

            {/* Right Side - Balance */}
            <div className="flex items-center">
              <div className="bg-gray-800 text-white  px-3 py-1 rounded-full flex items-center space-x-2">
                <span className="text-sm">Balance:</span>
                <span className=" text-sm font-semibold">11,005</span>
                <div className="w-6 h-6 ">
                    <Image src={logo1} alt="logo1" />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}