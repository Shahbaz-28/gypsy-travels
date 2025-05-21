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
    image:
      "https://images.pexels.com/photos/32035596/pexels-photo-32035596/free-photo-of-charming-swiss-town-in-autumn-by-the-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Switzerland's Alpine Charm",
    subtitle: "Immerse yourself in breathtaking landscapes and charming villages",
    position: "center",
    cta: "Discover Switzerland",
  },
  {
    image: "https://images.pexels.com/photos/3021382/pexels-photo-3021382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Experience Roma, Italy",
    subtitle: "Dive into the heart of Italian art, food, and history",
    position: "right",
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
      <div className="w-2 h-2 mx-1 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out" />
    ),
    appendDots: (dots) => (
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
        <div className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">{dots}</div>
      </div>
    ),
  }

  const getPositionClasses = (position) => {
    switch (position) {
      case "left":
        return "items-center justify-start sm:pl-12 md:pl-16 lg:pl-24"
      case "right":
        return "items-center justify-end sm:pr-12 md:pr-16 lg:pr-24"
      case "center":
        return "items-center justify-center"
      case "left-bottom":
        return "items-end justify-start pb-20 sm:pb-24 sm:pl-12 md:pl-16 lg:pl-24"
      case "right-bottom":
        return "items-end justify-end pb-20 sm:pb-24 sm:pr-12 md:pr-16 lg:pr-24"
      default:
        return "items-center justify-start sm:pl-12 md:pl-16 lg:pl-24"
    }
  }

  const textVariants = {
    hidden: (position) => ({
      opacity: 0,
      x: position === "right" ? 50 : position === "left" ? -50 : 0,
      y: position.includes("bottom") ? 30 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: (position) => ({
      opacity: 0,
      x: position === "right" ? 50 : position === "left" ? -50 : 0,
      y: position.includes("bottom") ? 30 : 0,
      transition: {
        duration: 0.4,
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
                  quality={90}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r 
                  ${
                    slide.position === "right"
                      ? "from-transparent via-black/20 to-black/50"
                      : slide.position === "center"
                        ? "from-black/30 via-black/20 to-black/30"
                        : "from-black/50 via-black/20 to-transparent"
                  }`}
                />
              </div>

              {/* Content */}
              <div className={`absolute inset-0 flex px-4 ${getPositionClasses(slide.position)}`}>
                <AnimatePresence mode="wait">
                  {currentSlide === index && (
                    <motion.div
                      key={`content-${index}`}
                      custom={slide.position}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={`text-white max-w-xs sm:max-w-sm md:max-w-md ${
                        slide.position === "center"
                          ? "text-center"
                          : slide.position === "right"
                            ? "text-right"
                            : "text-left"
                      }`}
                    >
                      <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2 drop-shadow-md"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        className="text-sm sm:text-base md:text-lg font-light mb-4 text-white/90 drop-shadow-md"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <Button className="rounded-full bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-sm sm:text-base shadow-md">
                          {slide.cta}
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
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
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm pointer-events-auto transform hover:scale-105 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm pointer-events-auto transform hover:scale-105 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
