"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Users, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const tourCategories = [
  { id: "all", name: "All Tours" },
  { id: "popular", name: "Popular" },
  { id: "europe", name: "Europe" },
  { id: "asia", name: "Asia" },
  { id: "america", name: "America" },
  { id: "africa", name: "Africa" },
]

const featuredTours = [
  {
    id: 1,
    title: "Enchanting Paris & Swiss Alps",
    location: "France & Switzerland",
    duration: "8 Days",
    groupSize: "Max 12",
    price: 199999,
    rating: 4.9,
    reviews: 128,
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg",
    categories: ["popular", "europe"],
    featured: true,
    discount: 15,
  },
  {
    id: 2,
    title: "Magical Japan Cherry Blossom Tour",
    location: "Japan",
    duration: "10 Days",
    groupSize: "Max 10",
    price: 269999,
    rating: 4.8,
    reviews: 94,
    image: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg",
    categories: ["popular", "asia"],
  },
  {
    id: 3,
    title: "Majestic Grand Canyon Adventure",
    location: "USA",
    duration: "5 Days",
    groupSize: "Max 15",
    price: 149999,
    rating: 4.7,
    reviews: 86,
    image: "https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg",
    categories: ["america"],
  },
  {
    id: 4,
    title: "Serengeti Safari Experience",
    location: "Tanzania",
    duration: "7 Days",
    groupSize: "Max 8",
    price: 299999,
    rating: 4.9,
    reviews: 72,
    image: "https://images.pexels.com/photos/259411/pexels-photo-259411.jpeg",
    categories: ["africa", "popular"],
  },
  {
    id: 5,
    title: "Greek Islands Hopping Adventure",
    location: "Greece",
    duration: "9 Days",
    groupSize: "Max 14",
    price: 229999,
    rating: 4.8,
    reviews: 103,
    image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg",
    categories: ["europe"],
    featured: true,
  },
  {
    id: 6,
    title: "Bali Tropical Paradise Retreat",
    location: "Indonesia",
    duration: "6 Days",
    groupSize: "Max 12",
    price: 159999,
    rating: 4.7,
    reviews: 89,
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg",
    categories: ["asia", "popular"],
  },
]

export default function FeaturedTours() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [visibleTours, setVisibleTours] = useState(6)
  const [hoveredTour, setHoveredTour] = useState(null)

  const filteredTours =
    activeCategory === "all" ? featuredTours : featuredTours.filter((tour) => tour.categories.includes(activeCategory))

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

  const scrollLeft = () => {
    document.getElementById("categories-container").scrollBy({ left: -200, behavior: "smooth" })
  }

  const scrollRight = () => {
    document.getElementById("categories-container").scrollBy({ left: 200, behavior: "smooth" })
  }

  // Function to format price in Indian style with commas
  const formatIndianPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-sky-100 text-sky-700 hover:bg-sky-200 px-4 py-1 text-sm">Explore The World</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Tour Packages</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover our handpicked selection of extraordinary destinations and unforgettable experiences
          </p>
        </div>

        {/* Categories Navigation */}
        <div className="relative mb-10">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-slate-700 hover:text-sky-600 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            id="categories-container"
            className="flex items-center justify-start md:justify-center space-x-2 overflow-x-auto pb-4 scrollbar-hide relative"
          >
            {tourCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-sky-600 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-sky-50 hover:text-sky-600",
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-slate-700 hover:text-sky-600 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Tours Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredTours.slice(0, visibleTours).map((tour) => (
            <motion.div
              key={tour.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              onMouseEnter={() => setHoveredTour(tour.id)}
              onMouseLeave={() => setHoveredTour(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    hoveredTour === tour.id ? "scale-110" : "scale-100",
                  )}
                />
                {tour.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.discount}% OFF
                  </div>
                )}
                {tour.featured && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-800 line-clamp-2">{tour.title}</h3>
                  <div className="flex items-center text-amber-500 ml-2 whitespace-nowrap">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{tour.rating}</span>
                    <span className="ml-1 text-xs text-slate-500">({tour.reviews})</span>
                  </div>
                </div>

                <p className="text-slate-600 mb-4 flex items-center">
                  <span className="font-medium">{tour.location}</span>
                </p>

                <div className="flex items-center justify-between mb-6 text-sm text-slate-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-sky-600" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-sky-600" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-sky-600" />
                    <span>All Year</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-slate-800">
                    <span className="text-2xl font-bold">{formatIndianPrice(tour.price)}</span>
                    <span className="text-slate-600 text-sm"> / person</span>
                  </div>
                  <Button className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-4">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {filteredTours.length > visibleTours && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setVisibleTours((prev) => prev + 3)}
              variant="outline"
              className="border-sky-600 text-sky-600 hover:bg-sky-50 rounded-full px-8 py-6"
            >
              Load More Tours
            </Button>
          </div>
        )}

        {/* View All Tours CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/tours"
            className="inline-flex items-center text-sky-600 font-medium hover:text-sky-800 transition-colors"
          >
            View All Tour Packages
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}