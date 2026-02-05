import { Badge } from "@/components/ui/badge";
import { Coffee, Code } from "lucide-react";

export function MenuHero() {
  return (
    <section className="py-16 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 font-mono">
            {"<Menu />"}
          </Badge>

          {/* Icons */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <Coffee className="h-10 w-10 text-primary" />
            <span className="text-4xl font-mono text-muted-foreground">+</span>
            <Code className="h-10 w-10 text-accent" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-accent">Tech-Themed</span> Menu
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every drink is crafted with the same precision as clean code.
            Filter by your preferences and find your perfect brew to fuel your
            next commit.
          </p>

          {/* Size Guide */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
              <span className="font-mono text-sm text-accent">Byte</span>
              <span className="text-muted-foreground text-sm">=</span>
              <span className="text-sm text-foreground">Small (8oz)</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
              <span className="font-mono text-sm text-accent">Mega</span>
              <span className="text-muted-foreground text-sm">=</span>
              <span className="text-sm text-foreground">Medium (12oz)</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
              <span className="font-mono text-sm text-accent">Giga</span>
              <span className="text-muted-foreground text-sm">=</span>
              <span className="text-sm text-foreground">Large (16oz)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
