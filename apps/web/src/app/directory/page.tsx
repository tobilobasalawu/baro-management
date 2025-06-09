'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';

// Sample model data with proper image paths and names
const sampleModels = [
  { 
    id: 1, 
    name: 'Aisha Johnson', 
    image: '/IMG_9061.jpg',
    age: 24,
    height: "5'9\"",
    measurements: "34-24-34",
    location: "New York",
    experience: "5 years"
  },
  { 
    id: 2, 
    name: 'Blake Chen', 
    image: '/IMG_9063.jpg',
    age: 26,
    height: "6'0\"",
    measurements: "38-30-38",
    location: "Los Angeles",
    experience: "3 years"
  },
  { 
    id: 3, 
    name: 'Carmen Rodriguez', 
    image: '/IMG_9072.jpg',
    age: 22,
    height: "5'8\"",
    measurements: "34-26-36",
    location: "Miami",
    experience: "2 years"
  },
  { 
    id: 4, 
    name: 'David Kim', 
    image: '/IMG_9085.jpg',
    age: 28,
    height: "6'2\"",
    measurements: "40-32-40",
    location: "Chicago",
    experience: "6 years"
  },
  { 
    id: 5, 
    name: 'Elena Smith', 
    image: '/IMG_9092.jpg',
    age: 25,
    height: "5'10\"",
    measurements: "36-26-36",
    location: "London",
    experience: "4 years"
  },
  { 
    id: 6, 
    name: 'Marcus Lee', 
    image: '/IMG_9061.jpg',
    age: 27,
    height: "6'1\"",
    measurements: "38-30-38",
    location: "Toronto",
    experience: "5 years"
  },
  { 
    id: 7, 
    name: 'Nina Patel', 
    image: '/IMG_9063.jpg',
    age: 23,
    height: "5'7\"",
    measurements: "34-24-34",
    location: "Mumbai",
    experience: "3 years"
  },
  { 
    id: 8, 
    name: 'Oliver Brown', 
    image: '/IMG_9072.jpg',
    age: 29,
    height: "6'3\"",
    measurements: "42-32-42",
    location: "Paris",
    experience: "7 years"
  },
  { 
    id: 9, 
    name: 'Priya Shah', 
    image: '/IMG_9085.jpg',
    age: 24,
    height: "5'8\"",
    measurements: "34-26-36",
    location: "Dubai",
    experience: "4 years"
  },
  { 
    id: 10, 
    name: 'Zara Williams', 
    image: '/IMG_9092.jpg',
    age: 26,
    height: "5'11\"",
    measurements: "36-26-36",
    location: "Sydney",
    experience: "5 years"
  },
];

export default function Directory() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedModel, setSelectedModel] = useState<typeof sampleModels[0] | null>(null);
  const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

  useEffect(() => {
    if (selectedModel) {
      console.log("Selected Model:", selectedModel);
    }
  }, [selectedModel]);

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
            <div 
              key={model.id} 
              className="aspect-[3/4] relative group cursor-pointer"
              onClick={() => setSelectedModel(model)}
            >
              <Image
                src={model.image}
                alt={model.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                className="object-cover"
                priority={index < 5}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-sm font-medium">{model.name}</p>
                <div className="flex items-center mt-1 text-xs">
                  <span>Tap for details</span>
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </div>
              {/* Mobile tap indicator */}
              <div className="absolute top-2 right-2 md:hidden">
                <div className="bg-white/90 rounded-full p-1.5 shadow-sm">
                  <svg 
                    className="w-4 h-4 text-gray-700" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                    />
                  </svg>
                </div>
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
                    <div 
                      key={model.id} 
                      onClick={() => setSelectedModel(model)}
                      className="text-black hover:opacity-75 flex items-center justify-between space-x-4 group cursor-pointer p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100"
                    >
                      <div className="flex items-center space-x-4">
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
                      </div>
                      <div className="flex items-center text-gray-400 group-hover:text-gray-600">
                        <span className="text-xs mr-1 hidden md:inline">View Details</span>
                        <span className="text-xs mr-1 md:hidden">Tap</span>
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Model Detail Modal */}
      {selectedModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={selectedModel.image}
                alt={selectedModel.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedModel.name}</h2>
                <button 
                  onClick={() => setSelectedModel(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Age</p>
                  <p className="font-medium text-black">{selectedModel.age || 'N/A'} years</p>
                </div>
                <div>
                  <p className="text-gray-600">Height</p>
                  <p className="font-medium text-black">{selectedModel.height || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Measurements</p>
                  <p className="font-medium text-black">{selectedModel.measurements || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Location</p>
                  <p className="font-medium text-black">{selectedModel.location || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600">Experience</p>
                  <p className="font-medium text-black">{selectedModel.experience || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* See More Button */}
      <div className="text-center py-12">
        <button className="text-black uppercase text-sm tracking-wider hover:opacity-75">
          SEE MORE
        </button>
      </div>
    </main>
  );
}
