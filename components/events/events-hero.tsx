import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Trophy, Code } from "lucide-react";

export function EventsHero() {
  return (
    <section className="py-16 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 font-mono">
            {"<Events />"}
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hack & <span className="text-accent">Sip</span> Events
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Where code meets community. Join our monthly events featuring
            workshops, hackathons, project showcases, and networking - all fueled
            by premium coffee.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-card rounded-lg border border-border">
              <Calendar className="h-6 w-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold font-mono text-foreground">12+</div>
              <div className="text-sm text-muted-foreground">Events/Month</div>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <Users className="h-6 w-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold font-mono text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <Trophy className="h-6 w-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold font-mono text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Hackathons</div>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <Code className="h-6 w-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold font-mono text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">Workshops</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
