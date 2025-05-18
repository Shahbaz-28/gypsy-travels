import Image from "next/image"
import { Globe, Users, Award, Clock } from "lucide-react"

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg"
          alt="Beautiful travel destination"
          width={1920}
          height={1080}
          className="object-cover w-full h-full brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover the World with <br className="hidden sm:block" />Gypsy Travels
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl">
            Creating unforgettable journeys and extraordinary experiences.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-600 mb-4 sm:mb-6">Our Story</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              Founded in 2005, Gypsy Travels began with a simple yet profound mission: to connect travelers with
              authentic experiences that transform their understanding of the world.
            </p>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              What started as a small operation with just three passionate travel enthusiasts has grown into a globally
              recognized travel company, serving thousands of adventurers each year across six continents.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Despite our growth, we remain committed to our founding principles: personalized service, sustainable
              travel practices, and creating journeys that go beyond sightseeing to foster genuine connections with
              places and people.
            </p>
          </div>
          <div className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
            <Image
              src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg"
              alt="Gypsy Travels founders"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-sky-600 mb-8 sm:mb-12">Why Choose Gypsy Travels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Global Expertise</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                With operations in over 50 countries, our local knowledge ensures authentic experiences.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Personalized Service</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We craft each journey to match your unique preferences and travel style.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Award-Winning</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Recognized for excellence with multiple industry awards and accolades.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Our dedicated team is available around the clock to assist you during your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0066a6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <p className="text-white/80">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <p className="text-white/80">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10k+</div>
              <p className="text-white/80">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <p className="text-white/80">Tour Packages</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-sky-600 mb-8 sm:mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600">Sustainability</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We're committed to responsible tourism that preserves destinations for future generations. Our tours
                minimize environmental impact and support local communities.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600">Authenticity</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We believe in genuine experiences that connect travelers with local cultures. Our itineraries go beyond
                tourist attractions to reveal the true essence of each destination.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600">Excellence</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                From meticulous planning to flawless execution, we strive for excellence in every aspect of your
                journey. Our attention to detail ensures memorable, worry-free travel experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}