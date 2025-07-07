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

const servicePoints = [
  "Fully licensed and insured technicians with industry certifications",
  "Locally owned and operated — we know Vancouver homes and weather",
  "Same-day and emergency services across the Lower Mainland",
  "Honest, upfront pricing with no hidden costs",
  "Friendly, professional customer service",
  "Work backed by warranty on parts and labor",
];


export default function ServicesPage() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCardCount, setVisibleCardCount] = useState(1);

  useEffect(() => {
    const updateCardCount = () => {
      const width = window.visualViewport ? window.visualViewport.width : window.innerWidth;
      if (width < 640) {
        setVisibleCardCount(1);
      } else if (width < 900) {
        setVisibleCardCount(2);
      } else if (width < 1200) {
        setVisibleCardCount(3);
      } else {
        setVisibleCardCount(4);
      }
      setStartIndex(0);
    };

    updateCardCount();
    window.addEventListener('resize', updateCardCount);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateCardCount);
    }
    return () => {
      window.removeEventListener('resize', updateCardCount);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateCardCount);
      }
    };
  }, []);

  const visibleServices = [
    ...services.slice(startIndex, startIndex + visibleCardCount),
    ...services.slice(0, Math.max(0, startIndex + visibleCardCount - services.length)),
  ];

  return (
    <div className="relative w-full bg-gradient-to-r from-gray-300 via-white to-gray-300">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] sm:h-[55vh] overflow-hidden">
        <Image
          src="/images/layer_27.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent z-10" />
      </div>

      {/* Hero Text */}
      <div className="absolute top-4 left-4 right-4 sm:top-10 sm:left-20 md:left-36 max-w-[700px] p-4 sm:p-6 z-10 text-white">
        <h2 className="flex items-center gap-2 mb-1">
          <div className="w-2 h-5 sm:w-2.5 sm:h-7 bg-red-600" />
          <span className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold">
            OUR SERVICES
          </span>
        </h2>
        <h3 className="text-base sm:text-lg md:text-2xl 2xl:text-3xl font-semibold mt-1 sm:mt-2">
          Complete Plumbing, Heating, and Gas Fitting Services for Homes & Businesses
        </h3>
        <p className="text-sm sm:text-base md:text-lg 2xl:text-xl mt-2 sm:mt-4">
          Leader Plumbing offers a wide range of residential and commercial services, tailored to meet your comfort, safety, and efficiency needs.
        </p>
      </div>

      {/* Card Section */}
      <div className="relative z-10 -mt-24 sm:-mt-32 md:-mt-26 lg:!-mt-36 2xl:-mt-42 pb-8 sm:pb-16 overflow-hidden">
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-2 sm:gap-4 w-full max-w-[1700px] 2xl:w-[80vw]">
            <button
              onClick={() => setStartIndex((prev) => (prev - 1 + services.length) % services.length)}
              className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 bg-gray-300 shadow-md rounded flex items-center justify-center"
            >
              <FaChevronLeft size={16} className="text-gray-600" />
            </button>

            <div className="flex-1 overflow-hidden">
              <div className="flex gap-3 sm:gap-6 2xl:gap-10 justify-center">
                {visibleServices.map(service => (
                  <div
                    key={service.title}
                    className="flex-shrink-0 w-full w-[58vw] sm:w-[30vw] md:w-[30vw] lg:w-[24vw] xl:w-[20vw] 2xl:w-[16vw]
                    bg-gradient-to-b from-gray-100 to-slate-300 from-50% shadow-md rounded-lg 
                    overflow-hidden hover:shadow-lg transition-all
                    h-[450px] sm:h-[470px] md:h-[500px] xl:h-[550px]"
                  >
                    <div className="p-1 sm:p-2">
                      <div className="relative w-full h-[250px] rounded-md overflow-hidden border shadow-sm">
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
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-2 sm:pt-3 flex-grow flex flex-col">
                      <h3 className="font-bold text-sm sm:text-base md:text-lg 2xl:text-xl text-black mb-1 sm:mb-2">
                        {service.title}
                      </h3>
                      <ul className="text-[11px] sm:text-sm 2xl:text-base text-gray-700 leading-tight pr-1">
                        {service.items.map(item => (
                          <li key={item} className="relative pl-6 mb-2">
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
              onClick={() => setStartIndex((prev) => (prev + 1) % services.length)}
              className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 bg-gray-300 shadow-md rounded flex items-center justify-center"
            >
              <FaChevronRight size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden px-6 lg:px-0 pt-16 lg:pt-24">
        {/* Mobile/Tablet Image */}
        <div className="block min-[1266px]:hidden relative w-full max-w-md mx-auto h-[400px] sm:h-[500px] mb-8 translate-y-[-40px] sm:translate-y-[-80px] md:translate-y-[-50px]">
          <Image
            src="/images/workerimagecombo.png"
            alt="Mobile and Tablet Background"
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            priority
          />
        </div>

        {/* Content */}
        <div className="w-full flex flex-col pl-[5.5vw] justify-between lg:flex-row">

          {/* Left: Text Content */}
          <div className="w-[90vw] lg:w-[48%] flex flex-col justify-center z-20">
            <div className="border-l-[0.6vw] border-red-600  mb-[2vw]">
              <h2 className="text-[6vw] ml-5 md:text-[2.2vw] font-bold text-black leading-tight">
                WHY CHOOSE LEADER PLUMBING
              </h2>
            </div>
            <h3 className="text-[4vw] md:text-[1.8vw] font-semibold text-black mb-[3vw]">
              Local, Licensed, and Always Reliable
            </h3>

            <div className="space-y-[1.2vw]">
              {servicePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-[1.5vw]">
                  <Image
                    src="/images/settings.png"
                    alt="Red gear icon"
                    width={24}
                    height={24}
                    className="mt-[0.3vw]"
                  />
                  <span className="text-[3vw] md:text-[1.3vw] text-gray-800">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full-width background image starting after text */}
          <div className="hidden min-[1266px]:block w-[48%]">
            <img
              src="/images/whychoose.png"
              alt="Why Choose Us Visual"
              className='w-[100%]'
            />
          </div>
        </div>
      </section>


    </div>
  );
}
