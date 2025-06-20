import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  MapPin,
  ArrowLeft,
  Hotel,
  Utensils,
  Plane,
  Calendar,
  Clock,
  Users,
  Check,
  X,
  Car,
  Camera,
  Bed,
  Coffee,
  Phone,
  Mail,
  Shield,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PackageDetail({ tour, type = "domestic" }) {
  if (!tour) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 6,
  }).format(parseInt(tour.price) || 0);

  const backLink = type === "domestic" ? "/domestic" : "/international";
  const locationText = type === "domestic" ? `${tour.place}, India` : tour.country;
  const titleText = type === "domestic" ? tour.place : tour.country;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
      {/* Back Button */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost" className="text-green-700 hover:bg-green-50 transition-colors">
            <Link href={backLink}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {type === "domestic" ? "Domestic" : "International"} Tours
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-green-600 via-green-500 to-yellow-400 overflow-hidden">
        <Image
          src={tour.images || "/placeholder.svg"}
          alt={titleText}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 py-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-green-600/80 rounded-full p-3 mr-4 shadow-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <span className="text-white text-lg font-medium">{locationText}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Explore {titleText}
              </h1>

              <div className="flex flex-wrap items-center gap-8 text-white">
                <div className="flex items-center bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
                  <Calendar className="h-5 w-5 mr-3 text-yellow-300" />
                  <span className="font-semibold">{Object.keys(tour.itinerary).length} Days</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
                  <Users className="h-5 w-5 mr-3 text-yellow-300" />
                  <span className="font-semibold">Per Person</span>
                </div>
                <div className="text-4xl font-bold text-yellow-300 drop-shadow-lg">
                  ₹{formattedPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-600 to-yellow-400 rounded-full p-4 mr-5 shadow-lg">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">About This Package</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {tour.description}
              </p>
            </div>

            {/* Itinerary */}
            {tour.itinerary && Object.keys(tour.itinerary).length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-green-600 to-yellow-400 rounded-full p-4 mr-5 shadow-lg">
                    <Calendar className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Detailed Itinerary</h2>
                </div>

                <div className="space-y-8">
                  {Object.entries(tour.itinerary).map(([dayKey, day], index) => (
                    <div key={dayKey} className="group">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="bg-gradient-to-r from-green-600 to-yellow-400 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-200">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-6 border-l-4 border-green-600 shadow-sm group-hover:shadow-md transition-shadow duration-200">
                          <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                            <Clock className="h-5 w-5 mr-3 text-green-600" />
                            Day {index + 1}: {day.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {day.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions */}
            {tour.inclusions && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-green-600 to-yellow-400 rounded-full p-4 mr-5 shadow-lg">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">What's Included</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Accommodation */}
                  <div className="group p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="flex items-center">
                      {tour.inclusions.accommodation ? (
                        <div className="bg-green-500 rounded-full p-2 mr-4 shadow-md">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                      ) : (
                        <div className="bg-red-500 rounded-full p-2 mr-4 shadow-md">
                          <X className="h-5 w-5 text-white" />
                        </div>
                      )}
                      <Bed className="h-6 w-6 text-green-600 mr-4" />
                      <div>
                        <span className="font-bold text-lg text-gray-800">Accommodation</span>
                        {tour.inclusions.accommodation && (
                          <p className="text-sm text-gray-600">Premium Hotels & Resorts</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Meals */}
                  <div className="group p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="flex items-center">
                      {tour.inclusions.mealPlan ? (
                        <div className="bg-green-500 rounded-full p-2 mr-4 shadow-md">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                      ) : (
                        <div className="bg-red-500 rounded-full p-2 mr-4 shadow-md">
                          <X className="h-5 w-5 text-white" />
                        </div>
                      )}
                      <Coffee className="h-6 w-6 text-green-600 mr-4" />
                      <div>
                        <span className="font-bold text-lg text-gray-800">Meals</span>
                        {tour.inclusions.mealPlan && (
                          <p className="text-sm text-gray-600">{tour.inclusions.mealPlan}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Transportation */}
                  <div className="group p-6 bg-gradient-to-br from-green-50 to-cyan-50 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="flex items-center">
                      {tour.inclusions.transfers ? (
                        <div className="bg-green-500 rounded-full p-2 mr-4 shadow-md">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                      ) : (
                        <div className="bg-red-500 rounded-full p-2 mr-4 shadow-md">
                          <X className="h-5 w-5 text-white" />
                        </div>
                      )}
                      <Car className="h-6 w-6 text-green-600 mr-4" />
                      <div>
                        <span className="font-bold text-lg text-gray-800">Transportation</span>
                        {tour.inclusions.transfers && (
                          <p className="text-sm text-gray-600">{tour.inclusions.transfers}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Sightseeing */}
                  <div className="group p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="flex items-center">
                      {tour.inclusions.sightseeing ? (
                        <div className="bg-green-500 rounded-full p-2 mr-4 shadow-md">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                      ) : (
                        <div className="bg-red-500 rounded-full p-2 mr-4 shadow-md">
                          <X className="h-5 w-5 text-white" />
                        </div>
                      )}
                      <Camera className="h-6 w-6 text-green-600 mr-4" />
                      <div>
                        <span className="font-bold text-lg text-gray-800">Sightseeing</span>
                        {tour.inclusions.sightseeing && (
                          <p className="text-sm text-gray-600">{tour.inclusions.sightseeing}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <a href="tel:+91-9768401031" className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                      +91 9768401031
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <a href="mailto:info@gypsytours.com" className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
                      info@gypsytours.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Now Card */}
            <div className="bg-gradient-to-r from-green-600 to-yellow-400 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Book This Package</h3>
              <p className="text-green-50 mb-6">
                Ready to experience this amazing journey? Book now and get exclusive deals!
              </p>
              <Button asChild size="lg" className="w-full bg-white text-green-600 hover:bg-green-50 rounded-full px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <a
                  href="https://wa.link/fmxykw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  Book Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 