import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmptyState({ type = "domestic" }) {
  return (
    <div className="col-span-3 text-center py-12 sm:py-16">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-green-100 max-w-2xl mx-auto">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
          <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Exciting Tours Coming Soon!</h3>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
          We're currently curating amazing {type} tour packages just for you. 
          Our travel experts are working hard to bring you the best experiences across {type === "domestic" ? "India" : "the globe"}.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
          <Link href="/contact">
            Contact Us for Custom Tours
          </Link>
        </Button>
      </div>
    </div>
  );
} 