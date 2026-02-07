"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Database,
  RefreshCw,
  Layers,
  Zap,
  Coffee,
} from "lucide-react";

const featuredDrinks = [
  {
    id: 1,
    name: "Espresso Protocol",
    description: "Pure, concentrated energy. The foundation of every great codebase.",
    price: "$4.50",
    image: "/image/photo3.jpg",
    icon: Cpu,
    tags: ["Hot", "High Caffeine"],
    color: "from-amber-600 to-amber-800",
  },
  {
    id: 2,
    name: "Cold Brew Kernel",
    description: "Smooth, low-level performance. 18-hour steeped for optimal execution.",
    price: "$5.50",
    icon: Database,
    tags: ["Cold", "High Caffeine"],
    color: "from-sky-600 to-sky-800",
    image: "/image/photo2.jpg"
  },
  {
    id: 3,
    name: "Latte Loop",
    description: "Iterative comfort in every sip. Silky smooth until the last drop.",
    price: "$5.00",
    icon: RefreshCw,
    tags: ["Hot", "Medium Caffeine"],
    color: "from-orange-500 to-orange-700",
    image: "/image/photo4.jpg"
  },
  {
    id: 4,
    name: "Mocha Stack",
    description: "Layered chocolate and espresso. A full-stack flavor experience.",
    price: "$6.00",
    image: "/image/photo1.jpg",
    icon: Layers,
    tags: ["Hot", "Medium Caffeine"],
    color: "from-rose-600 to-rose-800",
  },
  {
    id: 5,
    name: "Syntax Shot",
    description: "Quick, precise, powerful. Execute your morning in one line.",
    price: "$3.50",
    image: "/image/photo5.jpg",

    icon: Zap,
    tags: ["Hot", "Extreme Caffeine"],
    color: "from-yellow-500 to-amber-600",
  },
];

export function FeaturedDrinks() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % featuredDrinks.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + featuredDrinks.length) % featuredDrinks.length
    );
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 font-mono">
            {"<FeaturedDrinks />"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Signature Brews
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crafted for developers, by coffee enthusiasts. Each drink is
            optimized for maximum productivity.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full hidden md:flex bg-transparent"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full hidden md:flex bg-transparent"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {featuredDrinks.map((drink) => (
                <div
                  key={drink.id}
                  className="w-full flex-shrink-0 "
                >
                  <Card className="overflow-hidden bg-background border-border">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className={`bg-gradient-to-br ${drink.color} p-12 flex items-center justify-center min-h-[300px] relative overflow-hidden`}>
                          {/* خلفية متدرجة */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${drink.color}`} />

                          {/* تأثير فقاعات */}
                          <div className="absolute top-4 right-8 w-6 h-6 rounded-full bg-white/10 blur-sm" />
                          <div className="absolute bottom-8 left-12 w-8 h-8 rounded-full bg-white/5 blur-sm" />

                          {/* الصورة */}
                          <div className="relative z-10">
                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                              <Image
                                src={drink.image}
                                alt={drink.name}
                                width={192}
                                height={192}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Content Section */}
                        <div className="p-8 flex flex-col justify-center">
                          <div className="flex gap-2 mb-4">
                            {drink.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="font-mono text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-2 font-mono">
                            {drink.name}
                          </h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {drink.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-accent font-mono">
                              {drink.price}
                            </span>
                            <Button
                              asChild
                              className="bg-primary text-primary-foreground hover:bg-primary/90"
                            >
                              <Link href="/menu">Order Now</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredDrinks.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === activeIndex
                  ? "bg-accent w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-4 md:hidden">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="font-mono bg-transparent">
            <Link href="/menu">
              {"menu.getAll()"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
