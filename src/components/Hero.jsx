"use client"

import { useRef, useState } from "react"
import Slider from "react-slick"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const slides = [
  {
    image: "https://images.pexels.com/photos/4117546/pexels-photo-4117546.jpeg",
    title: "Discover the Charm of Germany",
    subtitle: "Journey through historic castles and bustling cities",
    position: "left",
    cta: "Explore Germany",
  },
  {
    image: "https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg",
    title: "Explore the Beauty of Santorini",
    subtitle: "Unwind amidst iconic whitewashed buildings and azure waters",
    position: "right",
    cta: "Visit Santorini",
  },
  {
    image: "https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg",
    title: "Switzerland's Alpine Charm",
    subtitle: "Immerse yourself in breathtaking landscapes and charming villages",
    position: "center",
    cta: "Discover Switzerland",
  },
  {
    image: "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg",
    title: "Experience Roma, Italy",
    subtitle: "Dive into the heart of Italian art, food, and history",
    position: "left-bottom",
    cta: "Tour Rome",
  },
]

export default function Hero() {
  const sliderRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    fade: true,
    beforeChange: (_, next) => setCurrentSlide(next),
    customPaging: () => (
      <div className="w-3 h-3 mx-1 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out" />
    ),
    appendDots: (dots) => (
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <div className="flex items-center bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">{dots}</div>
      </div>
    ),
  }

  const getPositionClasses = (position) => {
    switch (position) {
      case "left":
        return "justify-start items-center pl-8 md:pl-16 lg:pl-24"
      case "right":
        return "justify-end items-center pr-8 md:pr-16 lg:pr-24"
      case "center":
        return "justify-center items-center text-center"
      case "left-bottom":
        return "justify-start items-end pb-24 pl-8 md:pl-16 lg:pl-24"
      case "right-bottom":
        return "justify-end items-end pb-24 pr-8 md:pr-16 lg:pr-24"
      default:
        return "justify-start items-center pl-8 md:pl-16 lg:pl-24"
    }
  }

  const textVariants = {
    hidden: (position) => ({
      opacity: 0,
      x: position === "right" ? 100 : position === "left" ? -100 : 0,
      y: position.includes("bottom") ? 50 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: (position) => ({
      opacity: 0,
      x: position === "right" ? 100 : position === "left" ? -100 : 0,
      y: position.includes("bottom") ? 50 : 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    }),
  }

  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      <div className="relative h-full">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-screen w-full">
              {/* Image with overlay gradient */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={`${slide.title}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={85}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r 
                  ${
                    slide.position === "right"
                      ? "from-transparent via-black/30 to-black/60"
                      : slide.position === "center"
                        ? "from-black/40 via-black/30 to-black/40"
                        : "from-black/60 via-black/30 to-transparent"
                  }`}
                />
              </div>

              {/* Content */}
              <div className={`absolute inset-0 flex ${getPositionClasses(slide.position)}`}>
                <AnimatePresence mode="wait">
                  {currentSlide === index && (
                    <motion.div
                      key={`content-${index}`}
                      custom={slide.position}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={`text-white max-w-lg px-6 py-8 rounded-lg ${
                        slide.position === "center"
                          ? "text-center"
                          : slide.position === "right"
                            ? "text-right"
                            : "text-left"
                      }`}
                    >
                      <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        className="text-lg md:text-xl font-light mb-8 text-white/90"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        <Button className="rounded-full bg-sky-600 hover:bg-sky-700 text-white px-6 py-6 text-base font-medium">
                          {slide.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation buttons with improved styling */}
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm pointer-events-auto transform hover:scale-105 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm pointer-events-auto transform hover:scale-105 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress bar */}
        {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-10">
          <motion.div
            className="h-full bg-sky-600"
            initial={{ width: 0 }}
            animate={{ width: `${(currentSlide + 1) * 25}%` }}
            transition={{ duration: 0.5 }}
          />
        </div> */}
      </div>
    </div>
  )
}
