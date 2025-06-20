import Link from "next/link"
import { ArrowRight, MapPin, Plane, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { domesticPackages } from "@/data/domesticData"
import TourCard from "@/components/TourCard"
export default function DomesticToursPage() {
  const domesticTours = Object.values(domesticPackages).map((tour) => ({
    id: tour.slug,
    destination: tour.place,
    location: `${tour.place}, India`,
    image: tour.images,
    rating: 4.8,
    days: Object.keys(tour.itinerary).length,
    price: tour.price,
    slug: tour.slug,
    description: tour.description,
    amenities: {
      hotel: tour.inclusions.accommodation,
      dining: tour.inclusions.mealPlan ? true : true,
      travel: tour.inclusions.transfers ? true : true,
    },
  }))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute"></div>
        <div className="relative container mx-auto !mt-18 px-4 sm:px-6 lg:px-8 py-10 sm:mt-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent mb-6 leading-tight">
              Discover India's
              <br />
              <span className="font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                Magnificent Destinations
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the rich heritage, diverse landscapes, and vibrant cultures of India through our expertly
              crafted domestic tour packages designed for discerning travelers.
            </p>

            <div className="flex justify-center gap-6 mb-10 text-[#7a9e76]">
              <div className="flex flex-col items-center text-center">
                <MapPin className="w-10 h-10 mb-1" />
                <span className="text-sm text-[#555555]">Top Destinations</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-10 h-10 mb-1" />
                <span className="text-sm text-[#555555]">Group Friendly</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Plane className="w-10 h-10 mb-1" />
                <span className="text-sm text-[#555555]">Seamless Travel</span>
              </div>
            </div>




          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="tours" className="py-2">
        <div className="container mx-auto px-4  mb-22">
          {/* Section Header */}
          {/* <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-6">India’s Most Loved Travel Experiences</h2>
            
          </div> */}

          {/* Tours Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticTours.length > 0 ? (
              domesticTours.map((tour) => <TourCard key={tour.id} tour={tour} type="domestic" />)
            ) : (
              <div className="col-span-full">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center max-w-2xl mx-auto">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Exceptional Tours Coming Soon</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Our travel experts are curating extraordinary domestic experiences tailored to create unforgettable
                    memories. Be the first to explore these handpicked destinations.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/contact">Get Notified</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
