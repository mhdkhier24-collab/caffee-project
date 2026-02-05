import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";

const marketGaps = [
  {
    problem: "Low-quality coffee in tech spaces",
    solution: "Premium, ethically-sourced beans roasted for optimal flavor",
  },
  {
    problem: "Inaccessible tech communities",
    solution: "Open, welcoming space for all skill levels",
  },
  {
    problem: "Lack of practical education",
    solution: "Hands-on workshops and peer learning opportunities",
  },
  {
    problem: "Overpriced specialty coffee",
    solution: "Fair pricing without compromising quality",
  },
];

export function BrandStory() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono">
              {"<BrandStory />"}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Solving 4 Market Gaps
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We identified key problems in the intersection of coffee culture
              and tech community, then built solutions from the ground up.
            </p>
          </div>

          {/* The Story */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                The Problem We Saw
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                As developers ourselves, we spent countless hours in coffee shops
                that either had terrible WiFi, uncomfortable seating, or mediocre
                coffee. Tech meetups were either too intimidating for beginners or
                too basic for experienced devs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We wanted a third place - not home, not office - where developers
                could work, learn, and connect. A place that understood our needs:
                power outlets at every seat, fast WiFi, and coffee that could
                survive a debugging marathon.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Our Solution
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Caffe Syntax is more than a coffee shop. It&apos;s a community hub
                designed specifically for the tech community. Every detail - from
                our drink names to our event programming - is crafted with
                developers in mind.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We source single-origin beans from sustainable farms, train our
                baristas in both coffee craft and tech basics, and host events
                that range from beginner-friendly workshops to advanced hackathons.
              </p>
            </div>
          </div>

          {/* Market Gaps Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {marketGaps.map((gap, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Problem */}
                    <div className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-mono text-muted-foreground">
                          {"// Problem"}
                        </span>
                        <p className="text-foreground">{gap.problem}</p>
                      </div>
                    </div>
                    {/* Solution */}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-mono text-muted-foreground">
                          {"// Solution"}
                        </span>
                        <p className="text-foreground">{gap.solution}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
