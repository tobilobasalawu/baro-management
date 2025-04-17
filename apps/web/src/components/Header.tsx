'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full p-4 md:p-6 flex flex-row justify-between items-center text-xs uppercase tracking-wider">
        {/* Logo - Hidden on mobile when search is open */}
        <div className={`${isMobileSearchOpen ? 'hidden' : 'block'} md:block`}>
          <a href="/" className="block">
            <Image
              src="/logo.png"
              alt="BARO MANAGEMENT"
              width={60}
              height={60}
              className="w-[40px] h-[40px] md:w-[100px] md:h-[90px] object-contain"
              priority
            />
          </a>
        </div>
        
        {/* Desktop Search & Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 border border-white bg-white px-2 py-1">
            <input 
              type="text" 
              placeholder="SEARCH" 
              className="bg-white text-black placeholder-black text-[9px] uppercase tracking-wider focus:outline-none w-25 h-2"
            />
            {/* Search Icon for Desktop */} 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <nav className="flex space-x-4 text-black">
            <a href="/directory" className="hover:underline">Directory</a>
            <a href="#" className="hover:underline">Get Scouted</a>
          </nav>
        </div>

        {/* Mobile Icons - Hidden when search is open */} 
        <div className={`flex md:hidden items-center space-x-4 text-black ${isMobileSearchOpen ? 'hidden' : 'flex'}`}>
          <button onClick={() => setIsMobileSearchOpen(true)} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <button onClick={() => setIsSidebarOpen(true)} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Mobile Search Input - Appears when isMobileSearchOpen is true */}
        {isMobileSearchOpen && (
          <div className="flex md:hidden items-center w-full bg-white p-2 absolute top-0 left-0 mt-2 mx-2 shadow-md">
            <input 
              type="text" 
              placeholder="SEARCH..." 
              className="flex-grow bg-transparent text-black placeholder-gray-500 text-sm focus:outline-none px-2"
              autoFocus
            />
            <button onClick={() => setIsMobileSearchOpen(false)} className="ml-2 text-black focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </header>

      {/* Mobile Sidebar */} 
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 flex flex-col h-full">
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="absolute top-4 right-4 text-black focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <nav className="mt-10 flex flex-col space-y-4 text-sm uppercase tracking-wider">
            <a href="/directory" className="hover:opacity-75">Directory</a>
            <a href="#" className="hover:opacity-75">Get Scouted</a>
          </nav>

          <div className="mt-auto">
            <hr className="mb-6 border-gray-300" />
            <div className="text-xs uppercase tracking-wider space-y-2">
              <a href="#" className="block hover:opacity-75">About Us</a>
              <a href="#" className="block hover:opacity-75">Contact</a>
              <a href="#" className="block hover:opacity-75">Privacy Policy</a>
              <br />
              <a href="#" className="block hover:opacity-75">Instagram</a>
              <a href="#" className="block hover:opacity-75">Facebook</a>
              <a href="#" className="block hover:opacity-75">X</a>
              <a href="mailto:Barotalentmanagement@gmail.com" className="block hover:opacity-75">Email</a>
              <p className="text-gray-500 pt-4">Copyright 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for Sidebar */} 
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)} 
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        ></div>
      )}
    </>
  );
} 