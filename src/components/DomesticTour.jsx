import { domesticPackages } from "@/data/domesticData";
import TourCard from "@/components/TourCard";
import EmptyState from "@/components/EmptyState";
import { mapTourData } from "@/utils/tourUtils";

export default function DomesticTour() {
  const domesticTours = Object.values(domesticPackages).map(tour => mapTourData(tour, "domestic"));

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">Popular Domestic Destinations</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover amazing places within India and plan your next domestic trip
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domesticTours.length > 0 ? (
            domesticTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} type="domestic" />
            ))
          ) : (
            <EmptyState type="domestic" />
          )}
        </div>
      </div>
    </section>
  );
}


