"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "ali ",
    role: "Senior Developer @ TechCorp",
    avatar: "SC",
    rating: 5,
    text: "The Cold Brew Kernel got me through a 12-hour debugging session. Best coffee I've had outside of Seattle. The vibe here is perfect for focused work.",
    language: "TypeScript",
  },
  {
    id: 2,
    name: "ahmed",
    role: "CS Student, Stanford",
    avatar: "MJ",
    rating: 5,
    text: "Finally, a coffee shop that understands developers! The power outlets everywhere, fast WiFi, and amazing Espresso Protocol make this my second home.",
    language: "Python",
  },
  {
    id: 3,
    name: "dddd",
    role: "Freelance Full-Stack Dev",
    avatar: "ER",
    rating: 5,
    text: "The Hack & Sip events are incredible. Met my co-founder here over a Mocha Stack. This place is more than coffee - it's a community.",
    language: "JavaScript",
  },
  {
    id: 4,
    name: "Davidaa",
    role: "Backend Engineer @ StartupXYZ",
    avatar: "DK",
    rating: 5,
    text: "I've tried every coffee shop in the city for remote work. Caffe Syntax wins hands down. The Syntax Shot is my go-to for morning standups.",
    language: "Go",
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "DevOps Lead @ CloudScale",
    avatar: "PP",
    rating: 5,
    text: "The attention to detail here mirrors good code - clean, efficient, delightful. Plus, where else can I discuss Kubernetes over artisan coffee?",
    language: "Rust",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 font-mono">
            {"<Testimonials />"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Developers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy developers who've made Caffe Syntax their
            coding headquarters.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
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

            {/* Cards */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-background border-border">
                      <CardContent className="p-8">
                        <div className="flex flex-col items-center text-center">
                          {/* Quote Icon */}
                          <Quote className="h-10 w-10 text-accent/30 mb-6" />

                          {/* Rating */}
                          <div className="flex gap-1 mb-4">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="h-5 w-5 fill-accent text-accent"
                                />
                              )
                            )}
                          </div>

                          {/* Quote Text */}
                          <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-2xl">
                            &ldquo;{testimonial.text}&rdquo;
                          </blockquote>

                          {/* Author */}
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 border-2 border-accent">
                              <AvatarFallback className="bg-primary text-primary-foreground font-mono">
                                {testimonial.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="text-left">
                              <p className="font-semibold text-foreground">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.role}
                              </p>
                            </div>
                            <Badge
                              variant="secondary"
                              className="font-mono text-xs hidden sm:inline-flex"
                            >
                              {testimonial.language}
                            </Badge>
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
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-accent w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
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
        </div>
      </div>
    </section>
  );
}
