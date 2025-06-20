"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
    {
        id: 13,
        src: "/images/gallery (13).jpeg",
        alt: "Sunset view from temple stairs",
        size: "small",
    },
    {
        id: 6,
        src: "/images/gallery (6).jpg",
        alt: "Historical site visited by the group",
        size: "small",
    },
    {
        id: 14,
        src: "/images/gallery (14).jpg",
        alt: "Cultural interaction with locals",
        size: "small",
    },
    {
        id: 4,
        src: "/images/gallery (4).jpeg",
        alt: "Tourists enjoying evening aarti",
        size: "large",
    },
    {
        id: 11,
        src: "/images/gallery (11).jpeg",
        alt: "Street market exploration by clients",
        size: "large",
    },
    {
        id: 9,
        src: "/images/gallery (9).jpg",
        alt: "Morning rituals at the riverbank",
        size: "small",
    },
    {
        id: 7,
        src: "/images/gallery (7).jpg",
        alt: "Tour bus at scenic viewpoint",
        size: "small",
    },
    {
        id: 15,
        src: "/images/gallery (15).jpg",
        alt: "Evening lighting at famous shrine",
        size: "large",
    },
    {
        id: 20,
        src: "/images/gallery (20).jpg",
        alt: "Colorful lighting during festival night",
        size: "large",
    },
    {
        id: 12,
        src: "/images/gallery (12).jpeg",
        alt: "Devotional ceremony during the trip",
        size: "large",
    },

];

export default function ImageCardSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsPerView, setCardsPerView] = useState(4)
    const [isTouchDevice, setIsTouchDevice] = useState(false)

    // Check for touch device and responsive cards per view
    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth < 480) {
                setCardsPerView(1)
            } else if (window.innerWidth < 640) {
                setCardsPerView(1.5) // Shows 1 full and part of next card
            } else if (window.innerWidth < 768) {
                setCardsPerView(2)
            } else if (window.innerWidth < 1024) {
                setCardsPerView(3)
            } else {
                setCardsPerView(4)
            }
        }

        // Check if touch device
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)

        updateCardsPerView()
        window.addEventListener("resize", updateCardsPerView)
        return () => window.removeEventListener("resize", updateCardsPerView)
    }, [])

    // Auto-slide functionality (disabled for touch devices)
    useEffect(() => {
        if (isTouchDevice) return

        const timer = setInterval(() => {
            setCurrentIndex((prev) => {
                const maxIndex = Math.ceil(images.length - cardsPerView)
                return prev >= maxIndex ? 0 : prev + 1
            })
        }, 3000)

        return () => clearInterval(timer)
    }, [cardsPerView, isTouchDevice])

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : Math.ceil(images.length - cardsPerView)))
    }

    const goToNext = () => {
        setCurrentIndex((prev) => {
            const maxIndex = Math.ceil(images.length - cardsPerView)
            return prev >= maxIndex ? 0 : prev + 1
        })
    }

    const maxIndex = Math.ceil(images.length - cardsPerView)

    return (
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">Gallery</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Explore our stunning collection of travel moments
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative mx-2 sm:mx-4">
                    {/* Images Container */}
                    <div className="overflow-hidden rounded-xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out gap-3 sm:gap-4"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                            }}
                        >
                            {images.map((image) => (
                                <div
                                    key={image.id}
                                    className="flex-shrink-0"
                                    style={{
                                        width: `calc(${100 / cardsPerView}% - ${((cardsPerView - 1) * 10) / cardsPerView}px)`,
                                        paddingBottom: '8px' // Adds space for box-shadow
                                    }}
                                >
                                    <div className="group cursor-pointer h-full">
                                        <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
                                            <img
                                                src={image.src || "/placeholder.svg"}
                                                alt={image.alt}
                                                className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows - Hidden on smallest screens */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-4 bg-white/90 backdrop-blur-sm shadow-lg border-gray-200 hover:bg-white disabled:opacity-50 z-10 w-8 h-8 sm:w-10 sm:h-10"
                        onClick={goToPrevious}
                        disabled={currentIndex === 0}
                    >
                        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-4 bg-white/90 backdrop-blur-sm shadow-lg border-gray-200 hover:bg-white disabled:opacity-50 z-10 w-8 h-8 sm:w-10 sm:h-10"
                        onClick={goToNext}
                        disabled={currentIndex >= maxIndex}
                    >
                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                </div>

                {/* Dots Navigation */}
                {maxIndex > 0 && (
                    <div className="flex justify-center mt-6 sm:mt-8 gap-1 sm:gap-2">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-gray-800 w-4 sm:w-6" : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}