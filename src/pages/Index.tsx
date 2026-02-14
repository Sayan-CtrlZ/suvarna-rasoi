import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import TastingMenu from "@/components/TastingMenu";
import ChefSpotlight from "@/components/ChefSpotlight";
import WineCellar from "@/components/WineCellar";
import PrivateDining from "@/components/PrivateDining";
import Testimonials from "@/components/Testimonials";
import ReservationSection from "@/components/ReservationSection";
import GallerySection from "@/components/GallerySection";
import JournalSection from "@/components/JournalSection";
import MembersLounge from "@/components/MembersLounge";
import FooterSection from "@/components/FooterSection";
import AmbientToggle from "@/components/AmbientToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <TastingMenu />
      <ChefSpotlight />
      <WineCellar />
      <PrivateDining />
      <Testimonials />
      <ReservationSection />
      <GallerySection />
      <JournalSection />
      <MembersLounge />
      <FooterSection />
      <AmbientToggle />
    </div>
  );
};

export default Index;
