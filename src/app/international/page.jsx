import Image from "next/image";
import Link from "next/link";
import { Globe, Star, Plane, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { internationalPackages } from "@/data/internationalData";
import TourCard from "@/components/TourCard";

export default function InternationalToursPage() {
  const internationalTours = Object.values(internationalPackages).map(tour => ({
    id: tour.slug,
    destination: tour.country,
    location: tour.country,
    image: tour.images,
    rating: 4.8,
    days: Object.keys(tour.itinerary).length,
    price: tour.price,
    slug: tour.slug,
    description: tour.description,
    amenities: {
      hotel: tour.inclusions.accommodation ? true : true,
      dining: tour.inclusions.mealPlan ? true : true,
      travel: tour.inclusions.flights ? true : true,
    },
  }));

  return (
    <div className="min-h-screen">

      <section className="relative">
        <div className="absolute"></div>
        <div className="relative container mx-auto !mt-18 px-4 sm:px-6 lg:px-8 py-10 sm:mt-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent mb-6 leading-tight">
              Explore the World's
              <br />
              <span className="font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                Most Iconic Destinations
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From the Eiffel Tower to the Great Wall, discover breathtaking locations with our international tour packages crafted for comfort, adventure, and cultural immersion.
            </p>
           {/* Feature Icons */}
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
      <div className="relative container mx-auto px-4 ">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent  mb-4 sm:mb-6">
            International Tour Packages
          </h2> */}
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-22">
          {internationalTours.length > 0 ? (
            internationalTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} type="international" />
            ))
          ) : (
            <div className="col-span-3 text-center py-12 sm:py-16">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-green-100 max-w-2xl mx-auto">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Exciting Tours Coming Soon!</h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                  We're currently curating amazing international tour packages just for you.
                  Our travel experts are working hard to bring you the best experiences across the globe.
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/contact">
                    Contact Us for Custom Tours
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

