"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const photos = [
  {
    id: 17,
    src: "/images/gallery (17).jpg",
    alt: "Tourists walking through heritage street",
    size: "small",
  },
  {
    id: 10,
    src: "/images/gallery (10).jpeg",
    alt: "Colorful architecture captured on tour",
    size: "large",
  },
  {
    id: 1,
    src: "/images/gallery (1).jpg",
    alt: "Temple entrance during client tour",
    size: "large",
  },

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
  {
    id: 8,
    src: "/images/gallery (8).jpeg",
    alt: "Local food enjoyed during the tour",
    size: "small",
  },
  {
    id: 18,
    src: "/images/gallery (18).jpg",
    alt: "Inside view of the temple dome",
    size: "small",
  },
];



export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const openModal = (photoId) => {
    setSelectedPhoto(photoId)
  }

  const closeModal = () => {
    setSelectedPhoto(null)
  }

  const goToPrevious = () => {
    if (selectedPhoto === null) return
    const currentIndex = photos.findIndex((photo) => photo.id === selectedPhoto)
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1
    setSelectedPhoto(photos[previousIndex].id)
  }

  const goToNext = () => {
    if (selectedPhoto === null) return
    const currentIndex = photos.findIndex((photo) => photo.id === selectedPhoto)
    const nextIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0
    setSelectedPhoto(photos[nextIndex].id)
  }

  const selectedPhotoData = photos.find((photo) => photo.id === selectedPhoto)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-8 px-4 mt-22">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-600 mb-4">Gallery</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-2xl">
          “From breathtaking landscapes to joyful moments—relive the journeys that made it all unforgettable.”
          </p>
        </div>
        
      </header>

      {/* Photo Gallery */}
      <main className="px-4 pb-16">
        <div className=" container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className={`group cursor-pointer overflow-hidden rounded-lg ${photo.size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                  }`}
                onClick={() => openModal(photo.id)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedPhoto && selectedPhotoData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute cursor-pointer top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 cursor-pointer top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div className="relative max-w-full max-h-full">
              <Image
                src={selectedPhotoData.src || "/placeholder.svg"}
                alt={selectedPhotoData.alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Photo Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full">
              <span className="text-white text-sm">
                {photos.findIndex((photo) => photo.id === selectedPhoto) + 1} / {photos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
