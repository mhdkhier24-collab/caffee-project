import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { BrandStory } from "@/components/about/brand-story";
import { MissionValues } from "@/components/about/mission-values";
import { Team } from "@/components/about/team";
import { Timeline } from "@/components/about/timeline";
import { FAQ } from "@/components/about/faq";

export const metadata: Metadata = {
  title: "About | Caffe Syntax",
  description: "Learn about Caffe Syntax - our mission to bridge tech culture with premium coffee. Discover our story, team, and values.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandStory />
      <MissionValues />
      <Team />
      <Timeline />
      <FAQ />
    </>
  );
}
