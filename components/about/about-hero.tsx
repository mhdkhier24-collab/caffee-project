import { Badge } from "@/components/ui/badge";
import { Coffee, Code, Heart } from "lucide-react";

export function AboutHero() {
  return (
    <section className="py-16 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 font-mono">
            {"<About />"}
          </Badge>

          {/* Icons */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <Coffee className="h-10 w-10 text-primary" />
            <Heart className="h-6 w-6 text-accent animate-pulse" />
            <Code className="h-10 w-10 text-accent" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Story</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            Caffe Syntax was born from a simple observation: developers deserve
            better than vending machine coffee. We&apos;re on a mission to create
            spaces where great code and great coffee come together.
          </p>
        </div>
      </div>
    </section>
  );
}
