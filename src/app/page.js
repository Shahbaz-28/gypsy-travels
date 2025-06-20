import DomesticTour from "@/components/DomesticTour";
import { InternationalTour } from "@/components/FeaturedTours";
import GallerySlider from "@/components/GallerySlider";
import Hero from "@/components/Hero";
import TestimonialsSection from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <DomesticTour />
      <InternationalTour />
      <WhyUs />
      <GallerySlider/>
      <TestimonialsSection />
    </>
  );
}
