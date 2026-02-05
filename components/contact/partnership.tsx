import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Users, Calendar, Gift, ArrowRight } from "lucide-react";

const partnershipTypes = [
  {
    icon: Building2,
    title: "Corporate Partnerships",
    description: "Provide your team with premium coffee and workspace access. Custom enterprise solutions available.",
    benefits: ["Bulk coffee orders", "Meeting room access", "Team event hosting"],
  },
  {
    icon: Users,
    title: "Event Sponsorship",
    description: "Sponsor our hackathons, workshops, and community events. Get your brand in front of developers.",
    benefits: ["Logo placement", "Speaking opportunities", "Talent access"],
  },
  {
    icon: Calendar,
    title: "Venue Rental",
    description: "Host your own tech meetup, workshop, or private event in our space.",
    benefits: ["Full venue access", "AV equipment", "Catering included"],
  },
  {
    icon: Gift,
    title: "Community Partners",
    description: "Non-profits and student organizations get special rates. Let's grow the community together.",
    benefits: ["Discounted rates", "Co-marketing", "Resource sharing"],
  },
];

export function Partnership() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono">
              {"<Partnership />"}
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Partner With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Looking to collaborate? We offer various partnership opportunities
              for companies, organizations, and community groups.
            </p>
          </div>

          {/* Partnership Types Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <type.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {type.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {type.description}
                      </p>
                      <ul className="space-y-1">
                        {type.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-foreground flex items-center gap-2">
                            <span className="text-accent">*</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Ready to Partner?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Fill out the contact form above with &ldquo;Partnership Opportunity&rdquo; as
              the subject, or reach out directly to our partnerships team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-mono">
                partnerships@caffesyntax.com
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
