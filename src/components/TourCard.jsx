import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowRight, Hotel, Utensils, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TourCard({ tour, type = "domestic" }) {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 6,
  }).format(tour.price);

  const linkPath = type === "international"
    ? `/international-packages/${tour.slug || tour.id}`
    : `/domestic-packages/${tour.slug || tour.id}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-100 transition-transform hover:shadow-lg group">
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={tour.image || "/placeholder.svg"}
          alt={tour.destination}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-gray-600" />
          <span className="text-sm text-gray-500 italic">{tour.location}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(tour.rating)
                  ? "text-amber-400 fill-amber-400"
                  : i < tour.rating
                    ? "text-amber-400 fill-amber-400"
                    : "text-slate-300"
                }`}
            />
          ))}
          <span className="ml-2 text-base leading-relaxed text-gray-600">{tour.rating}</span>
          <div className="ml-auto flex items-center text-gray-600">
            <span className="text-base leading-relaxed">{tour.days} Days</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-5">
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <Hotel className="h-5 w-5 text-slate-500 mb-1" />
              <span className="text-sm text-gray-500 italic">Hotel</span>
            </div>
            <div className="flex flex-col items-center">
              <Utensils className="h-5 w-5 text-slate-500 mb-1" />
              <span className="text-sm text-gray-500 italic">Dining</span>
            </div>
            <div className="flex flex-col items-center">
              <Plane className="h-5 w-5 text-slate-500 mb-1" />
              <span className="text-sm text-gray-500 italic">Travel</span>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-semibold text-gray-800">₹{formattedPrice}</p>
            <p className="text-sm text-gray-500 italic">per person</p>
          </div>
          <Button asChild className="bg-green-700 hover:bg-green-900 text-white shadow-md rounded px-4 py-2 transition">
            <Link href={linkPath} className="flex items-center">
              View Details <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>

        </div>
      </div>
    </div>
  );
} 