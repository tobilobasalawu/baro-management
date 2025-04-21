'use client'; // Mark as Client Component

import Image from "next/image";
import { useState } from 'react'; // Import useState

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false); // State for mobile search

  return (
    <>
      <main className="relative min-h-screen w-full text-white">
        {/* Background Image */}
        <Image
          src="/IMG_9063.jpg"
          alt="Hero background"
          fill
          className="object-cover -z-10"
          quality={100}
        />

        {/* Header */}
        <header className="absolute top-0 left-0 w-full p-4 md:p-6 flex flex-row justify-between items-center text-xs md:text-sm uppercase tracking-wider">
          {/* Logo - Hidden on mobile when search is open */}
          <div className={`${isMobileSearchOpen ? 'hidden' : 'block'} md:block`}>
            <h1 className="text-black font-bold text-sm md:text-xl">Baro Management</h1>
          </div>
          
          {/* Desktop Search & Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 border border-white bg-white px-2 py-1">
              <input 
                type="text" 
                placeholder="SEARCH" 
                className="bg-white text-black placeholder-black text-[9px] md:text-xs uppercase tracking-wider focus:outline-none w-25 h-2"
              />
              {/* Search Icon for Desktop */} 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <nav className="flex space-x-4 text-black text-sm md:text-base">
              <a href="/directory" className="hover:underline">Directory</a>
              <a href="#" className="hover:underline">Get Scouted</a>
            </nav>
          </div>

          {/* Mobile Icons - Hidden when search is open */} 
          <div className={`flex md:hidden items-center space-x-4 text-black ${isMobileSearchOpen ? 'hidden' : 'flex'}`}>
            {/* Search Icon for Mobile - Toggles search input */}
            <button onClick={() => setIsMobileSearchOpen(true)} className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            {/* Hamburger Menu Icon - Add onClick to open sidebar */}
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
                autoFocus // Automatically focus the input when it appears
              />
              {/* Close Search Button */} 
              <button onClick={() => setIsMobileSearchOpen(false)} className="ml-2 text-black focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </header>

        {/* Main Content Area - Centered and horizontal on all screens */}
        <div className="absolute top-[15vh] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm uppercase tracking-wider text-center w-full">
          <div className="mb-4 text-black md:text-white font-bold text-base md:text-2xl md:font-extrabold">DISCOVER THE ROSTER</div>
          <div className="flex flex-row items-center justify-center space-x-4">
            <a href="#" className="text-black md:text-white hover:underline whitespace-nowrap text-sm md:text-base md:font-bold">MODEL</a>
            <a href="#" className="text-black md:text-white hover:underline whitespace-nowrap text-sm md:text-base md:font-bold">TALENT</a>
            <a href="#" className="text-black md:text-white hover:underline whitespace-nowrap text-sm md:text-base md:font-bold">CREATIVE</a>
            <a href="#" className="text-black md:text-white hover:underline whitespace-nowrap text-sm md:text-base md:font-bold">ATHLETE</a>
          </div>
        </div>

      </main>

      {/* Image Gallery Section - responsive columns and gap */}
      <section className="bg-white pt-32 md:pt-20 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* First Image */}
          <div className="relative aspect-[3/4]">
            <Image
              src="/IMG_9072.jpg"
              alt="Model in floral dress"
              fill
              className="object-cover"
            />
          </div>
          {/* Second Image */}
          <div className="relative aspect-[3/4]">
            <Image
              src="/IMG_9092.jpg"
              alt="Model in casual wear"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Models.com Style Section */}
      <section className="bg-white py-16 px-4 md:px-8">
        {/* Top Navigation */}
        <div className="container mx-auto mb-12">
          <nav className="flex flex-wrap justify-around border-b border-gray-300 pb-2">
            <a href="#" className="text-xl md:text-3xl font-serif text-black hover:opacity-75">MODELS</a>
            <a href="#" className="text-xl md:text-3xl font-serif text-black hover:opacity-75">CREATIVES</a>
            <a href="#" className="text-xl md:text-3xl font-serif text-black hover:opacity-75">FASHION</a>
            <a href="#" className="text-xl md:text-3xl font-serif text-black hover:opacity-75">BEAUTY</a>
          </nav>
        </div>

        {/* Content Grid */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Left, Image Right */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-black order-2 md:order-1">
              <p className="text-xs md:text-sm mb-1">News</p>
              <h3 className="text-lg md:text-2xl font-bold">Our talent rivals the industry's best—exceptional models ready to elevate any project with professionalism, versatility & impact.</h3>
            </div>
            {/* Image Content */}
            <div className="relative aspect-w-3 aspect-h-4 w-full md:w-1/2 order-1 md:order-2">
              <Image 
                src="/IMG_9085.jpg" 
                alt="Cover" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text Left, Image Right */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-black order-2 md:order-1">
              <h3 className="text-lg md:text-2xl font-bold">Discover emerging talent that meets the highest industry standards—refined, reliable, and ready to bring your vision to life.</h3>
            </div>
            {/* Image Content */}
            <div className="relative aspect-w-3 aspect-h-4 w-full md:w-1/2 order-1 md:order-2">
              <Image 
                src="/IMG_9061.jpg" 
                alt="Model Ranking" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-16 px-4 md:px-8 text-black font-light">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-[9px] md:text-xs uppercase tracking-wider">
          {/* Column 1 */}
          <div>
            <a href="#" className="block mb-0.5 hover:opacity-75">About Us</a>
            <a href="#" className="block mb-0.5 hover:opacity-75">Contact</a>
            <a href="#" className="block mb-0.5 hover:opacity-75">Privacy Policy</a>
            <a href="#" className="block mb-0.5 hover:opacity-75">Cookie Policy</a>
          </div>
          
          {/* Column 2 */}
          <div>
            <p className="text-gray-500 mt-4">Copyright 2025</p> {/* Adjusted styling for copyright */}
          </div>

          {/* Column 3 */}
          <div>
            <a href="#" className="block mb-0.5 hover:opacity-75">Instagram</a>
            <a href="#" className="block mb-0.5 hover:opacity-75">Facebook</a>
            <a href="#" className="block hover:opacity-75">X</a>
            <a href="mailto:Barotalentmanagement@gmail.com" className="block hover:opacity-75">Email</a>
          </div>
        </div>
      </footer>

      {/* Mobile Sidebar */} 
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Make inner container full height and flex column */}
        <div className="p-4 flex flex-col h-full">
          {/* Close Button (remains at top-right relative to sidebar) */}
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="absolute top-4 right-4 text-black focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Top section: Sidebar Navigation */}
          <div> 
            <nav className="mt-10 flex flex-col space-y-4 text-sm uppercase tracking-wider">
              <a href="/directory" className="hover:opacity-75">Directory</a>
              <a href="#" className="hover:opacity-75">Get Scouted</a>
            </nav>
          </div>

          {/* Bottom section: Footer Links (pushed to bottom) */} 
          <div className="mt-auto"> {/* Use mt-auto to push this block down */} 
            <hr className="mb-6 border-gray-300" /> {/* Divider moved here */} 
            <div className="text-xs uppercase tracking-wider space-y-2">
              <a href="#" className="block hover:opacity-75">About Us</a>
              <a href="#" className="block hover:opacity-75">Contact</a>
              <a href="#" className="block hover:opacity-75">Privacy Policy</a>
              <br></br>
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
