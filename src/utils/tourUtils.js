export function mapTourData(tour, type = "domestic") {
  return {
    id: tour.slug,
    destination: type === "domestic" ? tour.place : tour.country,
    location: type === "domestic" ? `${tour.place}, India` : tour.country,
    image: tour.images,
    rating: 4.8,
    days: Object.keys(tour.itinerary).length,
    price: tour.price,
    slug: tour.slug,
    description: tour.description,
    amenities: {
      hotel: tour.inclusions.accommodation,
      dining: tour.inclusions.mealPlan,
      travel: type === "domestic" ? tour.inclusions.transfers : tour.inclusions.flights,
    },
  };
} 