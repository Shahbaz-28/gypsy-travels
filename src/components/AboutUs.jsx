import { Users, Globe, Leaf, Star } from "lucide-react";
import Image from "next/image";
import WhyUs from "./WhyUs";

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Imagess*/}
        <div className="absolute inset-0">
          <Image
            src="/images/gallery (12).jpeg"
            alt="Beautiful travel destination"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl w-full px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            About Gypsy Tours & Travels
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Creating unforgettable journeys and memories that last a lifetime
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <Users className="w-8 h-8 text-yellow-400 mb-3" />,
                title: "Family Friendly",
                desc: "Perfect for all ages",
              },
              {
                icon: <Globe className="w-8 h-8 text-green-400 mb-3" />,
                title: "Global Reach",
                desc: "50+ destinations",
              },
              {
                icon: <Leaf className="w-8 h-8 text-green-400 mb-3" />,
                title: "Eco-Friendly",
                desc: "Sustainable tourism",
              },
              {
                icon: <Star className="w-8 h-8 text-yellow-400 mb-3" />,
                title: "Trusted",
                desc: "10,000+ travelers",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {item.icon}
                <h3 className="font-semibold text-white text-base sm:text-lg mb-2 text-center">{item.title}</h3>
                <p className="text-sm text-white/80 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="w-full">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/gallery (4).jpeg"
                  alt="Gypsy Tours story"
                  width={600}
                  height={450}
                  className="w-full h-[450px] object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                  6 Years of Adventure
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Since 2019, we've been crafting personalized travel experiences that go beyond ordinary tourism. Our passion for exploration and commitment to authentic connections has made us a trusted partner for thousands of travelers worldwide.
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                  Our Promise
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Every journey with us is designed to create lasting memories while respecting local cultures and environments. We believe travel should enrich lives and broaden perspectives.
                </p>
              </div>

              {/* Stats */}
              <div className="pt-6">
                <div className="flex flex-wrap justify-center sm:justify-start gap-8 text-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-500">50+</div>
                    <div className="text-gray-600 mt-1">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500">10K+</div>
                    <div className="text-gray-600 mt-1">Happy Travelers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-500">6+</div>
                    <div className="text-gray-600 mt-1">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Component */}
      <div className="mb-10 sm:mb-20">
        <WhyUs />
      </div>
    </>
  );
}
