"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/images/banner.jpeg",
    title: "Escape Reality. Live Your Dreams.",
    subtitle: "Life's too short for ordinary vacations. Your extraordinary adventure awaits...",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Turn Wanderlust Into Reality",
    subtitle: "Stop dreaming. Start living. Your perfect getaway is just one click away.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1548585742-110f6e08f1aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Adventure Is Calling Your Name",
    subtitle: "Don't let another year pass by wondering 'what if'. Your time is NOW.",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] w-full overflow-hidden mt-16 sm:mt-20">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
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
            {/* Enhanced gradient for dramatic effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-pulse">
                    {slide.title}
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 font-medium italic max-w-3xl mx-auto leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* Simplified CTA button */}
                <div className="relative group">
                  <Button className="bg-green-600 hover:bg-green-700 cursor-pointer text-white font-bold text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 sm:w-6 " />
                      <a
                        href="https://wa.link/fmxykw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3"
                      >
                        <span className="uppercase tracking-wide">BOOK NOW</span>
                      </a>
                    </div>
                  </Button>
                </div>

                {/* Social proof */}
                <p className="text-white/80 text-sm mt-4 font-medium">
                  ⭐Creating unforgettable travel experiences around the world
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-3 text-white transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-3 text-white transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-10 rounded-full transition-all duration-300 ${index === currentSlide
              ? "bg-white shadow-lg"
              : "bg-white/40 hover:bg-white/60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
