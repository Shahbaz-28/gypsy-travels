import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowRight, Hotel, Utensils, Plane, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const domesticTours = [
  {
    id: "domestic-1",
    destination: "Goa",
    location: "Goa, India",
    image: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.6,
    days: 5,
    price: 49999,
    amenities: {
      hotel: true,
      dining: true,
      travel: true,
    },
  },
  {
    id: "domestic-2",
    destination: "Kerala",
    location: "Kerala, India",
    image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.8,
    days: 7,
    price: 69999,
    amenities: {
      hotel: true,
      dining: true,
      travel: true,
    },
  },
  {
    id: "domestic-3",
    destination: "Rishikesh",
    location: "Rishikesh, India",
    image: "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg",
    rating: 4.7,
    days: 4,
    price: 39999,
    amenities: {
      hotel: true,
      dining: true,
      travel: true,
    },
  },
];

export default function DomesticTour() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0066a6] mb-4">Popular Domestic Destinations</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover amazing places within India and plan your next domestic trip
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domesticTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TourCard({ tour }) {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 6,
  }).format(tour.price);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-100 transition-transform hover:shadow-lg group">
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={tour.image || "/placeholder.svg"}
          alt={tour.destination}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-[#0066a6]" />
          <span className="text-sm font-medium">{tour.location}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(tour.rating)
                  ? "text-amber-400 fill-amber-400"
                  : i < tour.rating
                  ? "text-amber-400 fill-amber-400"
                  : "text-slate-300"
              }`}
            />
          ))}
          <span className="ml-2 text-slate-700 font-medium">{tour.rating}</span>
          <div className="ml-auto flex items-center text-[#0066a6]">
            <span className="font-medium">{tour.days} Days</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-5">
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <Hotel className="h-5 w-5 text-slate-500 mb-1" />
              <span className="text-xs text-slate-600">Hotel</span>
            </div>
            <div className="flex flex-col items-center">
              <Utensils className="h-5 w-5 text-slate-500 mb-1" />
              <span className="text-xs text-slate-600">Dining</span>
            </div>
            <div className="flex flex-col items-center">
              <Plane className="h-5 w-5 text-slate-500 mb-1" />
              <span className="text-xs text-slate-600">Travel</span>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-slate-800">₹{formattedPrice}</p>
            <p className="text-sm text-slate-500">per person</p>
          </div>
          <Button asChild className="bg-[#0066a6] text-white hover:bg-[#00558c]">
            <Link href={`/tours/${tour.id}`}>
              View Details <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
