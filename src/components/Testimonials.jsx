"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Bhaskar",
    location: "Badlapur",
    rating: 4,
    text: "I had an excellent experience with Gypsy Tours. The booking process was easy, and staff were friendly and helpful. The vehicle and hotel provided by the Gypsy Tours was clean and comfortable. I would highly recommend their service to anyone looking for to visit tourist places.",
    featured: true,
  },
  {
    id: 2,
    name: "Vikas Achugatla",
    location: "Delhi, India",
    rating: 5,
    text: "it was a beautiful and wonderful experience traveling in beauty of nature I enjoyed lot. Awesome service of gypsy tours and travels, especially thanks to tour leader akshay ghag for providing the best class service and suggestions and great co-ordination and support while ongoing trip.",
    featured: true,
  },
  {
    id: 3,
    name: "Jaya Zinjurde",
    location: "Bangalore, India",
    rating: 4,
    text: "I would highly recommend Gypsy Tours and Travels to anyone planning a spiritual or cultural journey across North India. This trip was not just travel—it was an experience of the soul, and Gypsy Tours made it truly special.",
  },
  {
    id: 4,
    name: "Bhushan Desale",
    location: "Jaipur, India",
    rating: 5,
    text: "Good arrangements throghtout the tour . Had great experience with gypsy tours and travels. Cab arrangement was also best .thank you for great memorise.",
    featured: true,
  },
  {
    id: 5,
    name: "Meera Kapoor",
    location: "Chennai, India",
    rating: 5,
    text: "Bali was magical! From the temples to the beaches, everything was picture-perfect. The private villa accommodation arranged by Torus and Travels was the highlight of our trip.",
  },
  {
    id: 6,
    name: "NILOFAR KHAN",
    location: "Hyderabad, India",
    rating: 4,
    text: "I would like to express my gratitude to Gypsy tour for the exceptional Himayala package, which included all the facilities. A special acknowledgment goes to Akhshay for his unwavering support and kind-hearted nature.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const getVisibleCount = () => {
    return isMobile ? 1 : 3;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex + 1) % (testimonials.length - getVisibleCount() + 1)
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - getVisibleCount() : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % (testimonials.length - getVisibleCount() + 1)
    );
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-4 w-4",
            index < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
          )}
        />
      ));
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-base leading-relaxed text-gray-600 mb-4 max-w-2xl mx-auto">
            Authentic experiences shared by travelers who have explored the
            world with us
          </p>
        </div>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-green-700 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / getVisibleCount())
                  }%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-none w-full md:w-1/3 px-4"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                        {getInitials(testimonial.name)}
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-gray-700 mb-2">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500 italic">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {renderStars(testimonial.rating)}
                    </div>

                    <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700 mb-3">
                      {testimonial.text}
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-green-700 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
              length: testimonials.length - getVisibleCount() + 1,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoplay(false);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentIndex === index
                    ? "bg-green-700  w-6"
                    : "bg-slate-300 hover:bg-slate-400"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://g.co/kgs/jPu8cx8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-700 hover:bg-green-900 text-white shadow-md rounded-full px-4 !py-6 transition cursor-pointer">
              Share Your Experience
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
