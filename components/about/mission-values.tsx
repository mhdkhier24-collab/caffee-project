import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users, Leaf, Zap } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Quality First",
    description: "From beans to code, we never compromise on quality. Every cup is crafted with care.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Building connections between developers at all levels. Everyone belongs here.",
  },
  {
    icon: Lightbulb,
    title: "Tech Innovation",
    description: "Embracing technology to enhance the coffee experience and empower our community.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Ethically sourced beans, eco-friendly practices, and supporting our local ecosystem.",
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description: "Growing together through workshops, mentorship, and shared knowledge.",
  },
  {
    icon: Target,
    title: "Accessibility",
    description: "Fair pricing, welcoming atmosphere, and resources for developers at every stage.",
  },
];

export function MissionValues() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 font-mono">
              {"<Mission />"}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-4">
                &ldquo;To fuel innovation by combining{" "}
                <span className="text-accent">high-quality caffeine</span> with{" "}
                <span className="text-primary">tech community building</span>,
                creating spaces where great ideas are brewed.&rdquo;
              </p>
              <p className="text-muted-foreground">
                We believe the best software is written with good coffee, and the
                best communities are built over shared experiences.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 font-mono">
              {"<Values />"}
            </Badge>
            <h3 className="text-2xl font-bold text-foreground">Our Core Values</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:border-accent/50 transition-colors group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
