import { internationalPackages } from "@/data/internationalData";
import TourCard from "@/components/TourCard";
import EmptyState from "@/components/EmptyState";
import { mapTourData } from "@/utils/tourUtils";

export function InternationalTour() {
  const internationalTours = Object.values(internationalPackages).map(tour => mapTourData(tour, "international"));

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">Popular International Destinations</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore amazing destinations around the world and plan your next international adventure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {internationalTours.length > 0 ? (
            internationalTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} type="international" />
            ))
          ) : (
            <EmptyState type="international" />
          )}
        </div>
      </div>
    </section>
  );
}


