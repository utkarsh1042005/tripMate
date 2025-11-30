import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import DestinationsSection from "@/components/destinations-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Replaced basic hero with new HeroSection component */}
      <HeroSection />

      {/* Features Section - Replaced basic features section with new FeaturesSection component */}
      <FeaturesSection />

      {/* Destinations Section - Replaced placeholder with new DestinationsSection component */}
      <DestinationsSection />

      <TestimonialsSection />

      {/* Pricing Section - Replaced placeholder pricing section with PricingSection component */}
      <PricingSection />

      <Footer />
    </div>
  )
}
