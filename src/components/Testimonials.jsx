"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5,
    tourName: "Enchanting Paris & Swiss Alps",
    text: "The tour exceeded all my expectations! Our guide was incredibly knowledgeable and the itinerary was perfectly balanced between guided activities and free time to explore on our own.",
    featured: true,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Delhi, India",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5,
    tourName: "Magical Japan Cherry Blossom Tour",
    text: "Experiencing Japan during cherry blossom season was a dream come true. The accommodations were excellent and the local experiences arranged by Torus and Travels were authentic and memorable.",
    featured: true,
  },
  {
    id: 3,
    name: "Ananya Patel",
    location: "Bangalore, India",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 4,
    tourName: "Greek Islands Hopping Adventure",
    text: "The Greek Islands tour was absolutely stunning. The blue waters, white buildings, and delicious food made for an unforgettable experience. Highly recommend this package!",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur, India",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    rating: 5,
    tourName: "Serengeti Safari Experience",
    text: "The safari experience was incredible! We saw all the Big Five and our guide was exceptional at tracking wildlife. The luxury tented camps were comfortable beyond belief.",
    featured: true,
  },
  {
    id: 5,
    name: "Meera Kapoor",
    location: "Chennai, India",
    image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    rating: 5,
    tourName: "Bali Tropical Paradise Retreat",
    text: "Bali was magical! From the temples to the beaches, everything was picture-perfect. The private villa accommodation arranged by Torus and Travels was the highlight of our trip.",
  },
  {
    id: 6,
    name: "Arjun Reddy",
    location: "Hyderabad, India",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    rating: 4,
    tourName: "Majestic Grand Canyon Adventure",
    text: "The Grand Canyon is truly breathtaking. Our hiking guide was patient and encouraging, making sure everyone in the group could enjoy the experience at their own pace.",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Filter featured testimonials
  const featuredTestimonials = testimonials.filter((testimonial) => testimonial.featured)

  // Determine how many testimonials to show based on screen size
  const getVisibleCount = () => {
    if (isMobile) return 1
    return 3
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - getVisibleCount() + 1))
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - getVisibleCount() : prevIndex - 1))
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - getVisibleCount() + 1))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={cn("h-4 w-4", index < rating ? "text-amber-500 fill-amber-500" : "text-gray-300")}
        />
      ))
  }

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Travelers Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Authentic experiences shared by travelers who have explored the world with us
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
            <Quote className="h-5 w-5 mr-2 text-sky-600" />
            Featured Reviews
          </h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredTestimonials.slice(0, 3).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-3">{renderStars(testimonial.rating)}</div>

                <p className="text-slate-700 mb-3 italic">"{testimonial.text}"</p>

                <p className="text-sm text-sky-600 font-medium">Tour: {testimonial.tourName}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
            <Quote className="h-5 w-5 mr-2 text-sky-600" />
            All Reviews
          </h3>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-slate-700 hover:text-sky-600"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / getVisibleCount())}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-none w-full md:w-1/3 px-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 h-full">
                    <div className="flex items-center mb-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600">{testimonial.location}</p>
                      </div>
                    </div>

                    <div className="flex mb-3">{renderStars(testimonial.rating)}</div>

                    <p className="text-slate-700 mb-3 italic">"{testimonial.text}"</p>

                    <p className="text-sm text-sky-600 font-medium">Tour: {testimonial.tourName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-slate-700 hover:text-sky-600"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: testimonials.length - getVisibleCount() + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setAutoplay(false)
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentIndex === index ? "bg-sky-600 w-6" : "bg-slate-300 hover:bg-slate-400",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-8 py-6">
            Share Your Experience
          </Button>
        </div>
      </div>
    </section>
  )
}
