import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StepperCalculator from "@/components/StepperCalculator";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen radial-gradient-bg">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <StepperCalculator />
    <Footer />
  </div>
);

export default Index;
