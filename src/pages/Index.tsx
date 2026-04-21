import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import VisualQualitySection from "@/components/VisualQualitySection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PricingSection />
    <TrustSection />
    <VisualQualitySection />
    <FeaturesSection />
    <ReviewsSection />
    <Footer />
  </div>
);

export default Index;
