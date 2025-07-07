"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const services = [
  {
    title: "PLUMBING SERVICES",
    image: "/images/plumbing-services-img.jpg",
    offsetX: 0,
    offsetY: 0,
    zoom: 100,
    items: [
      "Leak detection and repair",
      "Drain cleaning and clogged pipe solutions",
      "Hot water tank repair and replacement",
      "Fixture installations (toilets, faucets, sinks, etc.)",
      "Sewer line inspections and repairs",
    ],
  },
  {
    title: "HEATING SERVICES",
    image: "/images/heating-services-img.jpg",
    offsetX: 0,
    offsetY: 0,
    zoom: 100,
    items: [
      "Furnace repair, maintenance, and installations",
      "Boiler servicing and replacement",
      "Thermostat and zone control setup",
      "Radiant floor heating",
      "Seasonal system tune-ups",
    ],
  },
  {
    title: "COOLING SERVICES",
    image: "/images/cooling-services-img.jpg",
    offsetX: 0,
    offsetY: 0,
    zoom: 100,
    items: [
      "Air conditioning system installation and repair",
      "Ductless mini-split solutions",
      "Annual AC maintenance",
      "Indoor air quality improvements",
    ],
  },
  {
    title: "GAS FITTING SERVICES",
    image: "/images/gas-fitting-services-img.jpg",
    offsetX: 0,
    offsetY: 0,
    zoom: 100,
    items: [
      "Certified gas line installations and upgrades",
      "BBQ line setups",
      "Gas appliance hook-ups",
      "Safety inspections and pressure testing",
    ],
  },
  {
    title: "24/7 Emergency Services",
    image: "/images/plumber-working-writing.jpg",
    offsetX: 0,
    offsetY: 0,
    zoom: 100,
    items: [
      "Rapid response for plumbing leaks, burst pipes, or system breakdowns",
      "No extra charge for nights or weekends",
      "Phone support from trained professionals",
    ],
  },
];

export default function ServicesPage() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCardCount, setVisibleCardCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setVisibleCardCount(1);
      else if (width <= 1060) setVisibleCardCount(2); // <= 1024 means at 1024 px show 2 cards
      else setVisibleCardCount(4);
      setStartIndex(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleServices = [
    ...services.slice(startIndex, startIndex + visibleCardCount),
    ...services.slice(0, Math.max(0, startIndex + visibleCardCount - services.length)),
  ];
  const isPrevDisabled = false;
  const isNextDisabled = false;

  return (
    <div className="relative w-full bg-white">
      <div className="relative w-full h-[40vh] sm:h-[55vh] lg:h-[55vh] overflow-hidden">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div
              className="relative w-full h-full"
              style={{ transform: `translate(0px, 0px) scale(1)`, transformOrigin: 'top center' }}
            >
              <Image
                src="/images/layer_27.jpg"
                alt="Background"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-4 left-4 right-4 sm:top-10 sm:left-20 md:left-36 max-w-[700px] p-4 sm:p-6 z-10 text-white drop-shadow-lg">
        <h2 className="flex items-center gap-2 mb-1">
          <div className="w-2 h-5 sm:w-2.5 sm:h-7 bg-red-600"></div>
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">OUR SERVICES</span>
        </h2>
        <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white mt-1 sm:mt-2">
          Complete Plumbing, Heating, and Gas Fitting Services for Homes & Businesses
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-white mt-2 sm:mt-4">
          Leader Plumbing offers a wide range of residential and commercial services, tailored to meet your comfort, safety, and efficiency needs.
        </p>
      </div>

      <div className="relative z-10 -mt-16 sm:-mt-24 md:-mt-32 pb-8 sm:pb-16 overflow-hidden">
        <div className="flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 w-full">
          <button
            onClick={() =>
              setStartIndex((prev) =>
                (prev - 1 + services.length) % services.length
              )
            }

            className={`w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 shadow-md rounded transition-all ${isPrevDisabled ? 'opacity-30 cursor-not-allowed' : 'hover:from-gray-200 hover:to-gray-400'}`}
            disabled={isPrevDisabled}
            aria-label="Previous services"
          >
            <FaChevronLeft size={16} className="text-gray-600" />
          </button>

          <div className="flex justify-center flex-1 overflow-hidden">
            <div
              className="flex gap-3 sm:gap-6 transition-all duration-300 ease-in-out"
              style={{
                width: `calc(${visibleCardCount} * 260px)`,
                maxWidth: '100%',
                justifyContent: 'center',
              }}
            >
              {visibleServices.map(service => (
                <div
                  key={service.title}
                  className="flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-300 shadow-md sm:shadow-lg rounded-lg overflow-hidden hover:shadow-lg transition-all w-[260px] sm:w-[280px] md:w-[300px]"
                >
                  <div className="p-1 sm:p-2">
                    <div className="relative w-full aspect-square rounded-md overflow-hidden border shadow-sm h-[250px]">
                      <div
                        className="absolute w-full h-full"
                        style={{
                          transform: `translate(${service.offsetX}px, ${service.offsetY}px) scale(${service.zoom / 100})`,
                          transformOrigin: 'center',
                        }}
                      >
                        <Image src={service.image} alt={service.title} fill className="object-cover" />
                      </div>
                    </div>
                  </div>

                  <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-2 sm:pt-3 flex-grow flex flex-col ">
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-black mb-1 sm:mb-2">{service.title}</h3>
                    <ul className="text-[8px] sm:text-sm text-gray-600 leading-[1.15] overflow-visible pr-1">
                      {service.items.map(item => (
                        <li key={item} className="relative pl-6 mb-2 text-[11px] sm:text-sm text-gray-700 leading-tight">
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 text-red-600 text-5xl leading-none">•</span>
                          {item}
                        </li>


                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() =>
              setStartIndex((prev) =>
                (prev + 1) % services.length
              )
            }
            className={`w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 shadow-md rounded transition-all ${isNextDisabled ? 'opacity-30 cursor-not-allowed' : 'hover:from-gray-200 hover:to-gray-400'}`}
            disabled={isNextDisabled}
            aria-label="Next services"
          >
            <FaChevronRight size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
