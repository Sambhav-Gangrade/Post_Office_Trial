"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MenuIcon, MenuIconHandle } from '@/components/ui/menu';
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useRef } from 'react';
import Image from "next/image";

const data = [
  {
    id: 1,
    image: "/images/herosection1.png",
    bg: '#ffffff',
    text: 'Take a Mock Test',
  },
  {
    id: 2,
    image: "/images/herosection2.png",
    bg: '#ffffff',
    text: 'Take a Mock Test',
  },
  {
    id: 3,
    image: "/images/herosection3.png",
    bg: '#ffffff',
    text: 'Take a Mock Test',
  },
];
const mobiledata = [
  {
    mid: 1,
    mimage: "/images/phonehero1s.png",
    mbg: '#ffffff',
    mtext: 'Take a Mock Test',
  },
  {
    mid: 2,
    mimage: "/images/phonehero2s.png",
    mbg: '#ffffff',
    mtext: 'Take a Mock Test',
  },
  {
    mid: 3,
    mimage: "/images/phonehero3s.png",
    mbg: '#ffffff',
    mtext: 'Take a Mock Test',
  },
];
const testimonials = [
  {
    quote:
      "Post Office Exam made my study easy. I took tests on my phone anytime. The answers helped me learn. I passed the Post Office exam in my first try!",
    name: "Pooja K.",
    designation: "Nagpur",
    src: "/images/girl1.png",
  },
  {
    quote:
      "The mock tests felt just like the real exam. I liked using English and Marathi. The subject-wise tests for GK and Postal Geography were very useful.",
    name: "Ravi S.",
    designation: "Pune",
    src: "/images/boy2.png",
  },
  {
    quote:
      "This app gave me confidence. The test results and rank helped me stay focused. Thank you for making it simple to prepare!",
    name: "Ankita M.",
    designation: "Nashik",
    src: "/images/girl2.png",
  },
  {
    quote:
      "I used to worry about time management in exams, but these practice tests taught me how to solve quickly. The explanations for wrong answers really helped me improve.",
    name: "Sameer T.",
    designation: "Aurangabad",
    src: "/images/boy1.png",
  },
  {
    quote:
      "The daily quiz feature was my favorite. Just 10 minutes a day made a big difference. I cleared the exam with confidence, thanks to this app!",
    name: "Rohit G.",
    designation: "Solapur",
    src: "/images/boy4.png",
  },
];

export default function PostOfficeExamsPage() {
  const images = [
    "/images/herosection1.png",
    "/images/herosection2.png",
    "/images/herosection3.png",
  ];
  const [isOpen, setIsOpen] = useState(false);
  const iconRef = useRef<MenuIconHandle>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      if (newState) {
        iconRef.current?.startAnimation();
      } else {
        iconRef.current?.stopAnimation();
      }
      return newState;
    });
  };


  return (
    <div className="bg-white">
      <nav className="md:hidden top-0 left-0 z-50 w-full px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className='mt-2 ml-2'>
          <img
            src="/images/navbar_logo.png"
            className='w-[80%]'
          />
        </div>

        {/* Custom Animated Menu Icon */}
        <button onClick={toggleMenu} className="z-50 md:hidden text-white mr-6 ">
          <MenuIcon ref={iconRef} />
        </button>

        {/* Overlay Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-screen z-40
              flex flex-col items-center justify-center space-y-6
              bg-white/10 backdrop-blur-lg"
            >
              <a href="#home" onClick={toggleMenu} className="text-2xl font-semibold text-red-600">Home</a>
              <a href="#about" onClick={toggleMenu} className="text-2xl font-semibold text-red-600">About</a>
              <a href="#services" onClick={toggleMenu} className="text-2xl font-semibold text-red-600">Blog</a>
              <a href="#contact" onClick={toggleMenu} className="text-2xl font-semibold text-red-600">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>



      <header className='hidden md:block absolute top-0 left-0 z-50 w-full'>
        <nav className='w-full h-[15vh] flex justify-between items-center px-[8%] gap-[12vw]'>

          {/* Logo */}
          <div>
            <img src="/images/navbar_logo.png" className='pt-4 w-[7vw]' />
          </div>

          {/* Nav Links */}
          <div className='flex items-center gap-[4vw]'>
            {["HOME", "ABOUT US", "BLOG", "CONTACT US"].map((item, i) => (
              <a
                key={i}
                href=""
                className='group relative inline-block text-black font-bold text-lg 2xl:text-xl pb-1'
              >
                {item}
                <span className='absolute bottom-0 left-0 w-full h-1 bg-red-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
              </a>
            ))}
          </div>

          {/* Language Dropdown + Sign In */}
          <div className='flex items-center gap-[1vw] whitespace-nowrap'>

            {/* 🌐 Language Dropdown Button */}
            <div className="relative group">
              <button className="flex items-center gap-[0.5vw] bg-gradient-to-b from-[#e5cd99] via-[#e9d4a6] to-[#ffc549]  text-[#6B4F1D] font-semibold rounded-full px-[1vw] h-[2.8vw] text-[1.1vw] shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ffe7b0] hover:bg-[#fbe3a1] active:bg-[#fbe3a1]">
                🌐
                <span className="ml-2 flex items-center gap-[0.3vw]">
                  Language
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[2vw] w-[2vw] text-[#6B4F1D] transition-transform duration-200 group-hover:rotate-180"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              {/* Dropdown menu (on hover) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-white border border-[#d8c29a] rounded-xl p-3 shadow-lg text-sm z-50 min-w-[8vw] text-center">
                <a href="#" className="block px-2 py-1 hover:bg-[#ffecc4] rounded-md text-[#6B4F1D] font-bold text-[1vw]">English</a>
                <a href="#" className="block px-2 py-1 hover:bg-[#ffecc4] rounded-md text-[#6B4F1D] font-bold text-[1vw]">हिंदी</a>
              </div>
            </div>


            {/* 🔐 Sign In Button */}
            <button className="flex justify-end text-inline text-center font-bold rounded-full p-3 pl-14 pr-14 text-[4vw] lg:text-[1.1vw] bg-gradient-to-b from-red-600 via-red-700 to-red-900 text-white hover:scale-110 transition-all duration-300 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(255,0,0,0.8)]">
              Sign In
            </button>
          </div>
        </nav>
      </header>


      <section className="block md:hidden h-[85vh] w-full">
        <Swiper
          loop={true}
          spaceBetween={30}
          speed={2500}
          autoplay={{ delay: 1200, disableOnInteraction: false }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          modules={[Autoplay, EffectFade]}
          className="w-full h-auto"
        >
          {mobiledata.map((slide) => (
            <SwiperSlide
              key={slide.mid}

            >
              {/* Image Background */}
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={slide.mimage}
                  alt=""
                  className="w-[100%] h-auto object-contain"
                />
              </div>

              {/* Overlay Button */}
              <div className='flex justify-center'>
                <motion.button
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className=" z-10 w-[64%] lg:w-[17%] text-center rounded-full pt-3 pb-3 pl-12 pr-12 text-[4.3vw] lg:text-[1.4vw] font-bold bg-gradient-to-b from-red-600 via-red-700 to-red-900 text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.8)] "

                >
                  {slide.mtext}
                </motion.button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="hidden md:block mt-40 h-screen w-full bg-white">
        <Swiper
          loop={true}
          spaceBetween={30}
          speed={2500}
          autoplay={{ delay: 1200, disableOnInteraction: false }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          modules={[Autoplay, EffectFade]}
          className="w-full h-[80vh]"
        >
          {data.map((slide) => (
            <SwiperSlide
              key={slide.id}
              style={{ backgroundColor: slide.bg }}
              className="relative flex items-center justify-center h-[50vh]"
            >
              {/* Image Background */}
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={slide.image}
                  alt=""
                  className="w-[85%] h-[] object-contain"
                />
              </div>

              {/* Overlay Button */}
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-[19%] left-[8%] z-10 w-[80%] lg:w-[17%] text-center rounded-full pt-3 pb-3 pl-6 pr-6 text-[4vw] lg:text-[1.4vw] font-bold bg-gradient-to-b from-red-600 via-red-700 to-red-900 text-white hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.8)] "

              >
                {slide.text}
              </motion.button>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section>
        <div className=" -mt-18 lg:-mt-60 flex flex-col overflow-visible lg:overflow-hidden ">
          <ContainerScroll
            titleComponent={
              <>
                <div className="div max-w-5xl mx-auto text-center">
                  <h1 className="text-[7.5vw] lg:text-[2.6vw] font-semibold text-black leading-none mt-10 md:mt-0">
                    See How the <span className="text-red-600">App Works </span>
                    <br />
                  </h1>
                  <p className="text-[3.5vw] lg:text-[1.7vw] font-semibold leading-none mt-3 ">Watch a quick demo to know how you can practice, track progress, and get promoted</p>
                </div>
              </>
            }
          >
            <img

            />
          </ContainerScroll>
        </div>
      </section>
      <section className="-mt-60 lg:mt-0 bg-white text-black">
        <div className="w-[90%] mx-auto px-2">
          <h1 className="text-center text-[6vw] md:text-[2.4vw] font-semibold">
            About us
          </h1>

          <p className="text-center text-[4vw] md:text-[1.7vw] font-semibold my-4 mt-5">
            One app for your
            <span className="text-red-600"> Promotion, Practice,</span>
            <span className="text-black"> and </span>
            <span className="text-red-600">Progress</span>
          </p>

          <p className="text-center text-[3.5vw] md:text-[1.3vw] font-mono leading-relaxed my-4 mb-20">
            Our app helps India Post workers get promotions by passing departmental exams. You can take mock tests like the real exam, practice questions, and see your progress. Use it anytime, anywhere—on your phone or computer, and in your own language. No coaching needed. Many postal staff already use it to get better jobs and higher pay.
          </p>
        </div>
      </section>

      <section className="w-[85%] -mt-16 lg:mt-0 mx-auto py-10">
        <div className="w-full mx-auto">
          <h1 className="flex flex-wrap gap-2 text-center lg:text-left text-[6vw] md:text-[2.4vw] font-bold">
            <span>
              <img
                src="/images/pp_heading.png"
                className='w-[8.3vw] h-[8.3vw] lg:w-full lg:h-auto'
              />
            </span>
            <span className='text-red-600'> Pick a Plan </span>That Helps You Study Better
          </h1>
          <p className='mt-4 text-[3.2vw] lg:text-[1.3vw] font-semibold'> <span className='font-bold text-[3.2vw] lg:text-[1.3vw]'>Want to crack the Post Office exam faster?</span> Choose a study plan that gives you all the tools to practice smart and succeed.</p>
        </div>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">

          {/* Card 1 */}
          <CardContainer className="inter-var group transition-all">
            <CardBody
              className="bg-white relative group/card 
             dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
             dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
             w-full h-auto rounded-xl p-12 border 
             shadow-[inset_8px_-8px_20px_rgba(0,0,0,0.1)] max-h-[1000px]"
            >
              <CardItem translateZ="60" className="text-[6vw] lg:text-[1.2vw] font-bold text-black dark:text-white flex items-center gap-2">
                <img src="/images/plan_icon1.png" />Starter <span className="font-normal gap-0">Plan</span>
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-black opacity-0 text-l max-w-sm -mt-19 dark:text-neutral-300">
                <span className='font-bold text-4xl'>₹ </span><span className='-ml-2 text-[8.8vw] lg:text-[2.6vw] font-bold text-red-800'>199</span><span className="ml-2 relative inline-block text-3xl font-bold text-black
  after:content-[''] after:absolute after:w-[2px] after:h-[220%] rounded-full
  after:bg-red-600 after:top-[-59%] after:left-[52%] after:-translate-x-1/2 
  after:rotate-74 after:origin-center">
                  ₹300
                </span>
                <span className='ml-2 text-[3.3vw] font-semibold lg:text-[0.9vw]'> per month</span>

              </CardItem>
              <CardItem translateZ={60} as="button" className="mt-14 px-10 py-1 rounded-3xl bg-gradient-to-b from-red-600 via-red-700 to-red-900 dark:bg-white dark:text-black text-white text-2xl font-bold">
                FREE
              </CardItem>
              <CardItem as="div" translateZ="60" className="text-black text-l max-w-sm mt-3 dark:text-neutral-300">
                <div className="opacity-0 mt-4 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                Try 3 tests and see how the app works – no payment needed!
               
              </CardItem>
              <CardItem translateZ={60} as="button" className="mt-8 w-[95%] text-center rounded-full p-2 text-[3vw] lg:text-[1.1vw] bg-[#ece7dd] font-semibold mb-[5vw] lg:mb-[2vw] 
             hover:bg-gradient-to-b from-red-600 via-red-700 to-red-900 hover:text-white 
             transition-all duration-600 inline-block shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]"
              >
                Sign Up
              </CardItem>
              <CardItem translateZ="60" className="w-full">
                <div className="flex flex-col 2xl:gap-3 font-semibold">
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">3 Number of Attempts</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">25 Questions per Test</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Repetitive Questions</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Limited Performance Tracking</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">View Exam History</p>
                  </div>
                  <div>
                    <img src="/images/plan_wrong_icon.png" alt="Wrong" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Review Answers</p>
                  </div>
                  <div>
                    <img src="/images/plan_wrong_icon.png" alt="Wrong" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Pause &amp; Resume Test</p>
                  </div>
                  <div>
                    <img src="/images/plan_wrong_icon.png" alt="Wrong" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Set Goals</p>
                  </div>
                  <div>
                    <img src="/images/plan_wrong_icon.png" alt="Wrong" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Past Papers Limited Access</p>
                  </div>
                  <div>
                    <img src="/images/plan_wrong_icon.png" alt="Wrong" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Bookmark Questions</p>
                  </div>
                  <div>
                    <img src="/images/plan_wrong_icon.png" alt="Wrong" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Customer Support</p>
                  </div>
                 

                </div>
              </CardItem>

            </CardBody>
          </CardContainer>

          {/* Card 2 */}
          <CardContainer className="inter-var">
            <CardBody
              className="bg-white relative group/card 
             dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
             dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
             w-full h-auto rounded-xl p-12 border 
             shadow-[inset_8px_-8px_20px_rgba(0,0,0,0.1)] max-h-[1000px]"
            >
              <CardItem translateZ="60" className="text-[6vw] lg:text-[1.2vw] font-bold text-black dark:text-white flex items-center gap-2">
                <img src="/images/plan_icon2.png" />Smart <span className="font-normal gap-0">Plan</span>
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-black text-l max-w-sm mt-8 dark:text-neutral-300">
                <span className='font-bold text-4xl'>₹ </span><span className='-ml-2 text-[8.8vw] lg:text-[2.6vw] font-bold text-red-800'>199</span><span className="ml-2 relative inline-block text-3xl font-bold text-black
  after:content-[''] after:absolute after:w-[2px] after:h-[220%] rounded-full
  after:bg-red-600 after:top-[-59%] after:left-[52%] after:-translate-x-1/2 
  after:rotate-74 after:origin-center">
                  ₹300
                </span>
                <span className='ml-2 text-[3.3vw] font-semibold lg:text-[0.9vw]'> per month</span>

              </CardItem>
              <CardItem as="p" translateZ="60" className="text-black text-l max-w-sm mt-8 dark:text-neutral-300">
                Great for monthly practice with real exam-style tests and answers.
              </CardItem>
              <CardItem translateZ={60} as="button" className="mt-8 w-[95%] text-center rounded-full p-2 text-[3vw] lg:text-[1.1vw] bg-[#ece7dd] font-semibold mb-[5vw] lg:mb-[2vw] 
             hover:bg-gradient-to-b from-red-600 via-red-700 to-red-900 hover:text-white 
             transition-all duration-600 inline-block shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]"
              >
                Get Started
              </CardItem>
              <CardItem translateZ="60" className="w-full ">
                <div className="flex flex-col 2xl:gap-3 font-semibold">
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">5 Attempts per month</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Practice with real exam pattern</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Review Answers</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Pause &amp; Resume Test</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Mostly Unique Questions</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Advanced Performance Tracking</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Set Goals</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">View Exam History</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Unlimited Past Papers Access</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Bookmark Questions</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Customer Support</p>
                  </div>
                </div>
              </CardItem>


            </CardBody>
          </CardContainer>

          {/* Card 3 */}
          <CardContainer className="inter-var">
            <CardBody
              className="bg-white relative group/card 
             dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
             dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
             w-full h-auto rounded-xl p-12 border 
             shadow-[inset_8px_-8px_20px_rgba(0,0,0,0.1)] max-h-[1000px]"
            >
              <CardItem translateZ="60" className="text-[6vw] lg:text-[1.2vw] font-bold text-black dark:text-white flex items-center gap-2">
                <img src="/images/plan_icon3.png" />Achiever <span className="font-normal gap-0">Plan</span>
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-black text-l max-w-sm mt-8 dark:text-neutral-300">
                <span className='font-bold text-4xl'>₹ </span><span className='-ml-2 text-[8.8vw] lg:text-[2.6vw] font-bold text-red-800'>549</span><span className="ml-2 relative inline-block text-3xl font-bold text-black
  after:content-[''] after:absolute after:w-[2px] after:h-[220%] rounded-full
  after:bg-red-600 after:top-[-59%] after:left-[52%] after:-translate-x-1/2 
  after:rotate-74 after:origin-center">
                  ₹700
                </span>
                <span className='ml-2 text-[3.3vw] font-semibold lg:text-[0.9vw]'> quarterly</span>

              </CardItem>
              <CardItem as="p" translateZ="60" className="text-black text-l max-w-sm mt-8 dark:text-neutral-300">
                Best for serious learners more tests, detailed reports, past papers.
              </CardItem>
              <CardItem translateZ={60} as="button" className="mt-8 w-[95%] text-center rounded-full p-2 text-[3vw] lg:text-[1.1vw] bg-[#ece7dd] font-semibold mb-[5vw] lg:mb-[2vw] 
             hover:bg-gradient-to-b from-red-600 via-red-700 to-red-900 hover:text-white 
             transition-all duration-600 inline-block shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]"
              >
                Get Started
              </CardItem>
              <CardItem translateZ="60" className="w-full mt-4">
                <div className="flex flex-col 2xl:gap-3 font-semibold">
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">20 Attempts in 3 Months</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Everything in Smart Plan</p>
                  </div>
                  
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>



                </div>
              </CardItem>

            </CardBody>
          </CardContainer>

          {/* Card 4 */}
          <CardContainer className="inter-var">
            <CardBody
              className="bg-white relative group/card 
             dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
             dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
             w-full h-auto rounded-xl p-12 border 
             shadow-[inset_8px_-8px_20px_rgba(0,0,0,0.1)] max-h-[1000px]"
            >
              <CardItem translateZ="60" className="text-[6vw] lg:text-[1.2vw] font-bold text-black dark:text-white flex items-center gap-2">
                <img src="/images/plan_icon4.png" />Champion <span className="font-normal gap-0">Plan</span>
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-black text-l max-w-sm mt-8 dark:text-neutral-300">
                <span className='font-bold text-4xl'>₹ </span><span className='-ml-2 text-[8.8vw] lg:text-[2.6vw] font-bold text-red-800'>999</span><span className="ml-2 relative inline-block text-3xl font-bold text-black
  after:content-[''] after:absolute after:w-[2px] after:h-[260%] rounded-full
  after:bg-red-600 after:top-[-75%] after:left-[54%] after:-translate-x-1/2 
  after:rotate-79 after:origin-center">
                  ₹1200
                </span>
                <span className='ml-3 text-[3.3vw] font-semibold lg:text-[0.9vw]'> 6 months</span>

              </CardItem>
              <CardItem as="p" translateZ="60" className="text-black text-l max-w-sm mt-8 dark:text-neutral-300">
                Practice unlimited, learn fast, and get fully ready for your exam.
              </CardItem>
              <CardItem translateZ={60} as="button" className="mt-8 w-[95%] text-center rounded-full p-2 text-[3vw] lg:text-[1.1vw] bg-[#ece7dd] font-semibold mb-[5vw] lg:mb-[2vw] 
             hover:bg-gradient-to-b from-red-600 via-red-700 to-red-900 hover:text-white 
             transition-all duration-600 inline-block shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]"
              >
                Get Started
              </CardItem>
              <CardItem translateZ="60" className="w-full mt-4">
                <div className="flex flex-col 2xl:gap-3 font-semibold">
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Unlimited Attempts in 6 Months</p>
                  </div>
                  <div>
                    <img src="/images/plan_correct_icon.png" alt="Correct" className="mr-2 2xl:mr-3 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw] 2xl:text-[0.8vw]">Everything in Achiever Plan</p>
                  </div>
                  
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>
                  <div className="opacity-0 select-none">
                    <img src="/images/plan_correct_icon.png" className="mr-2 inline w-[3vw] lg:w-[0.9vw]" />
                    <p className="inline text-[3vw] lg:text-[0.9vw]">Placeholder</p>
                  </div>

                </div>
              </CardItem>

            </CardBody>
          </CardContainer>

        </div>
      </section>



      <section className='text-black -mt-15 lg:-mt-28 md:-mt-45'>
        <div className="w-[85%] mx-auto mt-8 lg:mt-25 bg-gray-100 rounded-3xl p-8 md:p-12">
          <div className="flex flex-wrap justify-center md:justify-normal gap-3 md:gap-0">
            <div className="w-[90%] md:w-[35%]">
              <img src="/images/secure_payment.png" alt="Secure Payment" className="w-[100%] md:w-[19vw]" />
            </div>
            <div className="w-[100%] md:w-[60%] flex flex-col gap-2 md:gap-5">
              <h1 className="text-center md:text-left text-[6vw] md:text-[3.1vw] font-semibold">
                Secure Payment <span className="text-red-600">Options </span>
              </h1>
              <div className="text-[4.5vw] md:text-[1.6vw] flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                <h3>Pay safely using</h3>
                <img src="images/phonepe.png" alt="Phonepe" />
              </div>
              <h2 className="p-3 bg-white text-center w-full text-[5vw] md:text-[1.7vw]">
                YOUR PAYMENT IS <span className="font-bold">100% SAFE </span>
                AND PROTECTED
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className='flex flex-col items-center gap-3 text-center mt-10 mb-20 md:mb-20 text-black'>
          <h1 className='text-center text-[6vw] lg:text-[2.5vw] font-semibold'>Frequently Asked
            <span className='text-red-600'> Questions</span>
          </h1>
          <div className="w-[85%] m-auto p-3 rounded-lg shadow-md bg-[#f8ebe3] mt-5 mb-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[3.7vw] lg:text-[1.5vw] font-semibold">What is Post Office Exam <br className='block md:hidden' /> Application ?</AccordionTrigger>
                <AccordionContent className="text-[2.9vw] lg:text-[1.1vw] flex flex-col gap-4 text-balance font-semibold">
                  <p>
                    Post Office Exam Application is an online app that helps students prepare for various Post Office exams like GDS (Gramin Dak Sevak), Postman, MTS (Multi-Tasking Staff), and others. In this app, users can practice different types of questions and improve their preparation by solving mock tests and quizzes. It is made to support candidates in learning and practicing easily from their mobile or computer.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-[85%] m-auto p-3 rounded-lg shadow-md bg-[#f8ebe3] mb-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"

            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[3.7vw] lg:text-[1.5vw] font-semibold">Is it free to use?</AccordionTrigger>
                <AccordionContent className="text-[2.9vw] lg:text-[1.1vw] flex flex-col gap-4 text-balance font-semibold">
                  <p>Yes, the Post Office Exam Application offers a free plan that you can start using right away. With the free plan, you can access basic features and start your exam preparation. If you want full access to all features like full mock tests, detailed solutions, and more practice sets, you can upgrade to a paid plan which starts at just ₹199 per month.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-[85%] m-auto p-3 rounded-lg shadow-md bg-[#f8ebe3] mb-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"

            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[3.7vw] lg:text-[1.5vw] font-semibold">How do I take a mock test?</AccordionTrigger>
                <AccordionContent className="text-[2.9vw] lg:text-[1.1vw] flex flex-col gap-4 text-balance font-semibold">
                  <p>To take a mock test, simply sign in to the Post Office Exam Application using your account. After logging in, select the exam or subject you want to practice. Then, click on the “Start Test” button to begin your mock test. It’s quick and easy to get started with your preparation.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-[85%] m-auto p-3 rounded-lg shadow-md bg-[#f8ebe3] mb-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"

            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[3.7vw] lg:text-[1.5vw] font-semibold">Are the tests like the real exam?</AccordionTrigger>
                <AccordionContent className="text-[2.9vw] lg:text-[1.1vw] flex flex-col gap-4 text-balance font-semibold">
                  <p>Yes, the tests in the Post Office Exam Application are designed to look and feel like the actual Post Office exams. The format, question style, and timing are kept similar so that you can get comfortable with the real exam pattern. This helps you feel more confident and prepared on the exam day.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-[85%] m-auto p-3 rounded-lg shadow-md bg-[#f8ebe3] mb-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"

            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[3.7vw] lg:text-[1.5vw] font-semibold">Can I practice only one subject <br className='block md:hidden' /> like GK or Vocabulary?</AccordionTrigger>
                <AccordionContent className="text-[2.9vw] lg:text-[1.1vw] flex flex-col gap-4 text-balance font-semibold">
                  <p>Yes, you can choose to practice only one subject such as General Knowledge, Vocabulary, or any other subject you prefer. The app gives you the option to focus on a single subject or take the full mock test covering all subjects together, based on your choice.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-[85%] m-auto p-3 rounded-lg shadow-md bg-[#f8ebe3] mb-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"

            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[3.7vw] lg:text-[1.5vw] font-semibold">Will I get my marks after the test?</AccordionTrigger>
                <AccordionContent className="text-[2.9vw] lg:text-[1.1vw] flex flex-col gap-4 text-balance font-semibold">
                  <p>Yes, after completing each test, you will see your marks, the time you took, and a summary of your mistakes. This helps you understand your performance and improve better.</p></AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-[85%] m-auto p-3 rounded-lg shadow-md bg-[#f8ebe3] mb-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"

            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[3.7vw] lg:text-[1.5vw] font-semibold">Can I use this app in my language?</AccordionTrigger>
                <AccordionContent className="text-[2.9vw] lg:text-[1.1vw] flex flex-col gap-4 text-balance font-semibold">
                  <p>Yes, the app is available in multiple languages including Hindi, Marathi, English, and more. You can choose your preferred language to make learning easier.</p></AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

      </section>
      <section>
        <AnimatedTestimonials testimonials={testimonials} />
      </section>




      <section className='bg-white text-black pb-6'>
        <footer className="bg-gray-50 py-12 -mt-18 md:mt-16 mb-8 rounded-t-[2.5rem] rounded-b-[2.5rem] w-[85%] mx-auto">
          <div className="mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div className="flex flex-col items-center lg:items-start">
                <img
                  alt="Post Office Logo"
                  width="350"
                  height="350"
                  className="object-contain w-[350px]"
                  src="/images/post office page.png"
                />
              </div>
              <div className="text-center lg:text-left">
                <h4 className="text-3xl font-semibold mb-8">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      className="text-base md:text-xl text-gray-600 hover:text-red-600 transition-colors"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base md:text-xl text-gray-600 hover:text-red-600 transition-colors"
                      href="/about"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base md:text-xl text-gray-600 hover:text-red-600 transition-colors"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>

                </ul>
              </div>
              <div className="text-center lg:text-left">
                <h4 className="text-3xl font-semibold mb-8">Pricing</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      className="text-base md:text-xl text-gray-600 hover:text-red-600 transition-colors"
                      href="#"
                    >
                      Start with Free Plan
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base md:text-xl text-gray-600 hover:text-red-600 transition-colors"
                      href="#"
                    >
                      Buy Premium Plan
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base md:text-xl text-gray-600 hover:text-red-600 transition-colors"
                      href="#"
                    >
                      Plan Comparison
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-left">
                <h4 className="text-3xl font-semibold mb-8">Contact Info</h4>
                <ul className="space-y-4">
                  <li className="flex items-center justify-center lg:justify-start gap-4">
                    <a href="#" className="flex items-center gap-4">
                      <img
                        alt="Phone"
                        width="28"
                        height="28"
                        src="/images/footer_call_img.png"
                      />
                      <span className="text-base md:text-xl text-gray-600 hover:text-red-600 transition-colors">
                        +91 01234 56789
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start gap-4">
                    <a href="#" className="flex items-center gap-4">
                      <img
                        alt="Phone"
                        width="28"
                        height="28"
                        src="/images/footer_email_img.png"
                      />
                      <span className="text-base md:text-xl text-gray-600 hover:text-red-600 transition-colors">
                        support@postofficeexam.in
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>

  );
}
