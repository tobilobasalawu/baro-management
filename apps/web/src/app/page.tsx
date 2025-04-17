import Image from "next/image";

export default function Home() {
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
        <header className="absolute top-0 left-0 w-full p-4 md:p-6 flex flex-row justify-between items-center text-xs uppercase tracking-wider">
          {/* Logo */} 
          <div>
            {/* Adjusted text size slightly for consistency across breakpoints */}
            <span className="font-bold text-xl md:text-2xl text-black tracking-tighter">BARO MANAGEMENT</span>
          </div>
          
          {/* Desktop Search & Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 border border-white bg-white px-2 py-1">
              <input 
                type="text" 
                placeholder="SEARCH" 
                className="bg-white text-black placeholder-black text-xs uppercase tracking-wider focus:outline-none w-25 h-2"
              />
              {/* Search Icon for Desktop */} 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <nav className="flex space-x-4 text-black">
              <a href="#" className="hover:underline">Directory</a>
              <a href="#" className="hover:underline">Get Scouted</a>
            </nav>
          </div>

          {/* Mobile Icons */} 
          <div className="flex md:hidden items-center space-x-4 text-black">
            {/* Search Icon for Mobile */} 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            {/* Hamburger Menu Icon */} 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </header>

        {/* Main Content Area - Always visible on the left, adjusted positioning for smaller screens */}
        <div className="absolute top-1/2 left-4 md:left-6 -translate-y-1/2 text-xs uppercase tracking-wider">
          <div className="mb-2 text-black font-semibold">Discover The Roster</div>
          <a href="#" className="block text-black hover:underline">Model</a>
          <a href="#" className="block text-black hover:underline">Talent</a>
          <a href="#" className="block text-black hover:underline">Creative</a>
          <a href="#" className="block text-black hover:underline">Athlete</a>
        </div>

        {/* Bottom Right Text - adjusted positioning */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-xs uppercase tracking-wider">
          Gigi Hadid C
        </div>
      </main>

      {/* Image Gallery Section - responsive columns and gap */}
      <section className="bg-white pt-10 px-4 md:px-0 md:pt-10">
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
    </>
  );
}
