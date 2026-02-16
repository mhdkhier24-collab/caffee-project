import { Badge } from "@/components/ui/badge";
import { Check, Circle, ArrowRight } from "lucide-react";

const timelineItems = [
  {
    phase: "Phase 1",
    title: "Pop-Up Phase",
    period: "2024 - 2025",
    status: "completed",
    description: "Tested our concept at tech conferences and coworking spaces. Validated demand and refined our offering.",
    milestones: [
      "50+ pop-up events",
      "10,000 cups served",
      "Community of 2,000 developers",
    ],
  },
  {
    phase: "Phase 2",
    title: "Campus Presence",
    period: "2025 - 2026",
    status: "current",
    description: "Establishing permanent locations near tech hubs and university campuses. Building partnerships with local tech companies.",
    milestones: [
      "First flagship location opened",
      "University partnerships",
      "Regular event programming",
    ],
  },
  {
    phase: "Phase 3",
    title: "Future Pods",
    period: "2027+",
    status: "upcoming",
    description: "Scaling through micro-locations in office buildings and tech parks. Subscription-based access for companies.",
    milestones: [
      "Modular pod concept",
      "Enterprise partnerships",
      "National expansion",
    ],
  },
];

export function Timeline() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono">
              {"<Timeline />"}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From pop-up events to permanent locations - here&apos;s how we&apos;re
              building the future of developer-focused coffee culture.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-background border-2 border-border rounded-full flex items-center justify-center z-10">
                    {item.status === "completed" ? (
                      <Check className="h-4 w-4 text-accent" />
                    ) : item.status === "current" ? (
                      <Circle className="h-4 w-4 text-accent fill-accent" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                      }`}
                  >
                    <div
                      className={`bg-background border border-border rounded-lg p-6 ${item.status === "current" ? "border-accent/50" : ""
                        }`}
                    >
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-2">
                        <Badge
                          variant={item.status === "current" ? "default" : "outline"}
                          className="font-mono text-xs"
                        >
                          {item.phase}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {item.period}
                        </span>
                        {item.status === "current" && (
                          <Badge className="bg-accent/20 text-accent border-0 text-xs">
                            Current
                          </Badge>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>

                      {/* Milestones */}
                      <ul className="space-y-1">
                        {item.milestones.map((milestone, i) => (
                          <li
                            key={i}
                            className={`text-sm flex items-center gap-2 ${index % 2 === 0 ? "md:justify-end" : ""
                              }`}
                          >
                            <ArrowRight className="h-3 w-3 text-accent" />
                            <span className="text-foreground">{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
