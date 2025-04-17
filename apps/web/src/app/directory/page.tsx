'use client';

import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';

// Sample model data with proper image paths
const sampleModels = [
  { id: 1, name: 'Model 1', image: '/IMG_9061.jpg' },
  { id: 2, name: 'Model 2', image: '/IMG_9063.jpg' },
  { id: 3, name: 'Model 3', image: '/IMG_9072.jpg' },
  { id: 4, name: 'Model 4', image: '/IMG_9085.jpg' },
  { id: 5, name: 'Model 5', image: '/IMG_9092.jpg' },
];

export default function Directory() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

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
              className="text-sm text-black hover:opacity-75"
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
            </div>
          ))}
        </div>
      </div>

      {/* List View */}
      <div className={`px-8 py-8 ${viewMode === 'list' ? 'block' : 'hidden'}`}>
        <div className="space-y-4">
          {alphabet.map((letter) => (
            <div key={letter} id={letter}>
              <h2 className="text-2xl font-bold mb-4">{letter}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleModels
                  .filter(model => model.name.startsWith(letter))
                  .map(model => (
                    <a key={model.id} href="#" className="text-black hover:opacity-75">
                      {model.name}
                    </a>
                  ))
                }
              </div>
            </div>
          ))}
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
