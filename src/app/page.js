import AboutUs from "@/components/AboutUs";
import ContactPage from "@/components/Contact";
import DomesticTour from "@/components/DomesticTour";
import { InternationalTour } from "@/components/FeaturedTours";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
 <>
   <Hero/>
   <DomesticTour/>
   <InternationalTour/>
  <TestimonialsSection/>
 </>
  );
}
