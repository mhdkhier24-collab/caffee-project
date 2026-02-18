import { HeroSection } from "@/components/home/hero-section";
import { FeaturedDrinks } from "@/components/home/featured-drinks";
import { QRSection } from "@/components/home/qr-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { EventsPreview } from "@/components/home/events-preview";
import { CTASection } from "@/components/home/cta-section";
import { Cart } from "@/components/Cart"
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedDrinks />
      <QRSection />
      <TestimonialsSection />
      <EventsPreview />
      <CTASection />

    </>
  );
}
