import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

const partners = [
  { name: "TechCorp", industry: "Software" },
  { name: "CloudScale", industry: "Cloud Services" },
  { name: "DataFlow", industry: "Analytics" },
  { name: "DevTools Inc", industry: "Developer Tools" },
  { name: "AI Labs", industry: "AI/ML" },
  { name: "StartupHub", industry: "Incubator" },
  { name: "CodeAcademy", industry: "Education" },
  { name: "OpenSource Foundation", industry: "Non-profit" },
];

export function Partners() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 font-mono">
            {"<Partners />"}
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our Tech Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading tech companies to bring you the best
            events, workshops, and opportunities.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <Building2 className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{partner.name}</h3>
              <p className="text-xs text-muted-foreground">{partner.industry}</p>
            </div>
          ))}
        </div>

        {/* Partner CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in partnering with us?
          </p>
          <a
            href="/contact"
            className="font-mono text-accent hover:underline"
          >
            {"contact.partnership()"}
          </a>
        </div>
      </div>
    </section>
  );
}
