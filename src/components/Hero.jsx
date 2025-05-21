"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/banner.jpeg",
    title: "EXPLORE THE WORLD WITH COMFORT",
    buttonText: "PLAN YOUR TRIP",
  },
  {
    id: 2,
    image: "https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "UNFORGETTABLE TRAVEL EXPERIENCES",
    buttonText: "BOOK NOW",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1548585742-110f6e08f1aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "DISCOVER HIDDEN GEMS AROUND THE GLOBE",
    buttonText: "GET IN TOUCH",
  },
];


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="relative h-[500px] w-full overflow-hidden mt-17">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === currentSlide}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h1 className="mb-8 max-w-4xl px-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white">
                {slide.title}
              </h1>
              <button
                className="bg-black/50 hover:bg-black transition duration-300 ease-in-out px-6 py-3 text-sm font-medium text-white shadow-md backdrop-blur-sm"
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
