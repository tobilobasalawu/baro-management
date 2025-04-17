import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full text-white">
      {/* Background Image */}
      <Image
        src="/IMG_9063.jpg" // Update this if you want to use a different image
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center text-xs uppercase tracking-wider">
        <div>
          <span className="font-bold text-2xl text-black tracking-tighter">BARO MANAGEMENT</span>
        </div> 
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 border border-white bg-white px-2 py-1">
            <input 
              type="text" 
              placeholder="SEARCH" 
              className="bg-white text-black placeholder-black text-xs uppercase tracking-wider focus:outline-none w-25"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <nav className="flex space-x-4 text-black">
            <a href="#" className="hover:underline">Directory</a>
            <a href="#" className="hover:underline">Get Scouted</a>
          </nav>
        </div>
      </header>

      {/* Main Content Area - positioned vertically centered on the left */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 text-xs uppercase tracking-wider">
        <div className="mb-2 text-black font-semibold">Discover The Roster</div>
        <a href="#" className="block text-black hover:underline">Model</a>
        <a href="#" className="block text-black hover:underline">Talent</a>
        <a href="#" className="block text-black hover:underline">Creative</a>
        <a href="#" className="block text-black hover:underline">Athlete</a>
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-6 right-6 text-xs uppercase tracking-wider">
        Gigi Hadid C
      </div>

    </main>
  );
}
