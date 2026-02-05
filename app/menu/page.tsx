import { Metadata } from "next";
import { MenuHero } from "@/components/menu/menu-hero";
import { MenuGrid } from "@/components/menu/menu-grid";
import { BuildYourBrew } from "@/components/menu/build-your-brew";
import { PairProgramming } from "@/components/menu/pair-programming";

export const metadata: Metadata = {
  title: "Menu | Caffe Syntax",
  description: "Explore our tech-themed drinks and treats. From Espresso Protocol to Cold Brew Kernel, find your perfect coding companion.",
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <MenuGrid />
      <BuildYourBrew />
      <PairProgramming />
    </>
  );
}
