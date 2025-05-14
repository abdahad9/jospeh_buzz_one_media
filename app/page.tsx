import Image from "next/image";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import GrowthPartner from "./components/GrowthPartner";
import ExpertiseServices from "./components/ExpertiseServices";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToActionBanner from "./components/CallToActionBanner";
import HowWeWork from "./components/HowWeWork";
import PricingPlans from "./components/PricingPlans";

export default function Home() {
  return (
    <main>
      <Header>
        <HeroBanner />
      </Header>
      <GrowthPartner />
      <ExpertiseServices />
      <WhyChooseUs />
      <CallToActionBanner />
      <HowWeWork />
      <PricingPlans />
    </main>
  );
}
