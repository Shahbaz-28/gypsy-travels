import AboutUs from "@/components/AboutUs";
import ContactPage from "@/components/Contact";
import DomesticTour from "@/components/DomesticTour";
import { InternationalTour } from "@/components/FeaturedTours";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import GallerySlider from "@/components/GallerySlider";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <DomesticTour />
      <InternationalTour />
      <WhyUs />
      <TestimonialsSection />
      <GallerySlider/>
    </>
  );
}
