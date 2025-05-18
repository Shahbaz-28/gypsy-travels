"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Calendar, Star, Hotel, Utensils, Plane, ShieldCheck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const featuredTours = [
  {
    id: 1,
    location: "France & Switzerland",
    duration: "8 Days",
    price: 199999,
    rating: 4.9,
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg",
    amenities: ["hotel", "dining", "travel", "cleaning"],
  },
  {
    id: 2,
    location: "Japan",
    duration: "10 Days",
    price: 269999,
    rating: 4.8,
    image: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg",
    amenities: ["hotel", "dining", "travel", "cleaning"],
  },
  {
    id: 3,
    location: "USA",
    duration: "5 Days",
    price: 149999,
    rating: 4.7,
    image: "https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg",
    amenities: ["hotel", "dining", "travel"],
  },
  {
    id: 4,
    location: "Tanzania",
    duration: "7 Days",
    price: 299999,
    rating: 4.9,
    image: "https://images.pexels.com/photos/259411/pexels-photo-259411.jpeg",
    amenities: ["hotel", "dining", "travel", "cleaning"],
  },
  {
    id: 5,
    location: "Greece",
    duration: "9 Days",
    price: 229999,
    rating: 4.8,
    image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg",
    amenities: ["hotel", "dining", "travel", "cleaning"],
  },
  {
    id: 6,
    location: "Indonesia",
    duration: "6 Days",
    price: 159999,
    rating: 4.7,
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg",
    amenities: ["hotel", "dining", "travel"],
  },
]

export default function FeaturedTours() {
  const [hoveredTour, setHoveredTour] = useState(null)
hoveredTour
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

  // Function to format price in Indian style with commas
  const formatIndianPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* <Badge className="mb-3 bg-sky-100 text-sky-700 hover:bg-sky-200 px-4 py-1 text-sm">Premium Experiences</Badge> */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Tour Packages</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover our handpicked selection of extraordinary destinations and unforgettable experiences
          </p>
        </div>

        {/* Tours Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredTours.map((tour) => (
            <motion.div
              key={tour.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              variants={itemVariants}
              onMouseEnter={() => setHoveredTour(tour.id)}
              onMouseLeave={() => setHoveredTour(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.location}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    hoveredTour === tour.id ? "scale-110" : "scale-100",
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="font-medium text-sm">{tour.location}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < Math.floor(tour.rating)
                            ? "fill-amber-500 text-amber-500"
                            : "fill-slate-200 text-slate-200",
                          i === Math.floor(tour.rating) && tour.rating % 1 > 0
                            ? "fill-amber-500/50 text-amber-500/50"
                            : "",
                        )}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-slate-700">{tour.rating}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Calendar className="h-4 w-4 mr-1 text-sky-600" />
                    <span className="text-sm font-medium">{tour.duration}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex items-center justify-between mb-6 py-3 border-y border-slate-100">
                  {tour.amenities.includes("hotel") && (
                    <div className="flex flex-col items-center text-slate-600 group">
                      <div className="p-2 rounded-full bg-slate-50 group-hover:bg-sky-50 transition-colors">
                        <Hotel className="h-4 w-4 text-sky-600" />
                      </div>
                      <span className="text-xs mt-1">Hotel</span>
                    </div>
                  )}
                  {tour.amenities.includes("dining") && (
                    <div className="flex flex-col items-center text-slate-600 group">
                      <div className="p-2 rounded-full bg-slate-50 group-hover:bg-sky-50 transition-colors">
                        <Utensils className="h-4 w-4 text-sky-600" />
                      </div>
                      <span className="text-xs mt-1">Dining</span>
                    </div>
                  )}
                  {tour.amenities.includes("travel") && (
                    <div className="flex flex-col items-center text-slate-600 group">
                      <div className="p-2 rounded-full bg-slate-50 group-hover:bg-sky-50 transition-colors">
                        <Plane className="h-4 w-4 text-sky-600" />
                      </div>
                      <span className="text-xs mt-1">Travel</span>
                    </div>
                  )}
                  {tour.amenities.includes("cleaning") && (
                    <div className="flex flex-col items-center text-slate-600 group">
                      <div className="p-2 rounded-full bg-slate-50 group-hover:bg-sky-50 transition-colors">
                        <ShieldCheck className="h-4 w-4 text-sky-600" />
                      </div>
                      <span className="text-xs mt-1">Cleaning</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-slate-800">
                    <span className="text-2xl font-bold">{formatIndianPrice(tour.price)}</span>
                    <span className="text-slate-500 text-xs block">per person</span>
                  </div>
                  <Button className="bg-sky-600 cursor-pointer hover:bg-sky-700 text-white rounded-full px-4 shadow-sm shadow-sky-200">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
