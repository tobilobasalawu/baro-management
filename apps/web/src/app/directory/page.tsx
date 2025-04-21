'use client';

import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';

// Sample model data with proper image paths and names
const sampleModels = [
  { id: 1, name: 'Aisha Johnson', image: '/IMG_9061.jpg' },
  { id: 2, name: 'Blake Chen', image: '/IMG_9063.jpg' },
  { id: 3, name: 'Carmen Rodriguez', image: '/IMG_9072.jpg' },
  { id: 4, name: 'David Kim', image: '/IMG_9085.jpg' },
  { id: 5, name: 'Elena Smith', image: '/IMG_9092.jpg' },
  { id: 6, name: 'Marcus Lee', image: '/IMG_9061.jpg' },
  { id: 7, name: 'Nina Patel', image: '/IMG_9063.jpg' },
  { id: 8, name: 'Oliver Brown', image: '/IMG_9072.jpg' },
  { id: 9, name: 'Priya Shah', image: '/IMG_9085.jpg' },
  { id: 10, name: 'Zara Williams', image: '/IMG_9092.jpg' },
];

export default function Directory() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

  // Group models by first letter
  const modelsByLetter = alphabet.reduce((acc, letter) => {
    acc[letter] = sampleModels.filter(model => 
      model.name.toUpperCase().startsWith(letter)
    );
    return acc;
  }, {} as Record<string, typeof sampleModels>);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Navigation Categories */}
      <div className="pt-32 pb-8 text-center">
        <nav className="flex justify-center space-x-8 text-sm uppercase tracking-wider">
          <a href="#" className="text-black hover:opacity-75">MODEL</a>
          <a href="#" className="text-black hover:opacity-75">TALENT</a>
          <a href="#" className="text-black hover:opacity-75">CREATIVE</a>
          <a href="#" className="text-black hover:opacity-75">ATHLETE</a>
        </nav>
      </div>

      {/* Alphabetical Navigation */}
      <div className="w-full overflow-x-auto">
        <div className="flex justify-center space-x-4 px-4 py-6 min-w-max">
          {alphabet.map((letter) => (
            <a
              key={letter}
              href={`#${letter}`}
              className={`text-sm hover:opacity-75 ${
                modelsByLetter[letter].length > 0 ? 'text-black' : 'text-gray-300'
              }`}
            >
              {letter}
            </a>
          ))}
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex justify-end px-8 py-4 space-x-4">
        <button
          onClick={() => setViewMode('list')}
          className={`text-sm uppercase ${viewMode === 'list' ? 'text-black' : 'text-gray-400'}`}
        >
          LIST VIEW
        </button>
        <button
          onClick={() => setViewMode('grid')}
          className={`text-sm uppercase ${viewMode === 'grid' ? 'text-black' : 'text-gray-400'}`}
        >
          GRID VIEW
        </button>
      </div>

      {/* Models Grid */}
      <div className={`px-4 py-8 ${viewMode === 'grid' ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sampleModels.map((model, index) => (
            <div key={model.id} className="aspect-[3/4] relative group cursor-pointer">
              <Image
                src={model.image}
                alt={model.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                className="object-cover"
                priority={index < 5}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-sm font-medium">{model.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* List View */}
      <div className={`px-8 py-8 ${viewMode === 'list' ? 'block' : 'hidden'}`}>
        <div className="space-y-8">
          {alphabet.map((letter) => {
            const models = modelsByLetter[letter];
            if (models.length === 0) return null;

            return (
              <div key={letter} id={letter} className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6 text-black">{letter}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {models.map(model => (
                    <a 
                      key={model.id} 
                      href="#" 
                      className="text-black hover:opacity-75 flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 relative overflow-hidden">
                        <Image
                          src={model.image}
                          alt={model.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <span className="text-sm uppercase tracking-wider group-hover:underline">
                        {model.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* See More Button */}
      <div className="text-center py-12">
        <button className="text-black uppercase text-sm tracking-wider hover:opacity-75">
          SEE MORE
        </button>
      </div>
    </main>
  );
}
