import { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { LocationInfo } from "@/components/contact/location-info";
import { PopUpSchedule } from "@/components/contact/popup-schedule";
import { Partnership } from "@/components/contact/partnership";

export const metadata: Metadata = {
  title: "Contact | Caffe Syntax",
  description: "Get in touch with Caffe Syntax. Visit our locations, send us a message, or inquire about partnerships and hosting events.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <LocationInfo />
          </div>
        </div>
      </div>
      <PopUpSchedule />
      <Partnership />
    </>
  );
}
