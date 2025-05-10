import FeaturedTours from "@/components/FeaturedTours";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
 <>
  <Navbar/>
  <Hero/>
  <FeaturedTours/>
  <TestimonialsSection/>
 </>
  );
}
