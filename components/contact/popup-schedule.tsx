import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

const popups = [
  {
    event: "TechCrunch Disrupt",
    location: "Moscone Center, SF",
    date: "March 10-12, 2026",
    booth: "Hall A, Booth 42",
  },
  {
    event: "DevWeek Conference",
    location: "Oakland Convention Center",
    date: "March 25-27, 2026",
    booth: "Lounge Area",
  },
  {
    event: "Stanford Tech Career Fair",
    location: "Stanford University",
    date: "April 5, 2026",
    booth: "Main Quad",
  },
  {
    event: "Google I/O Fringe",
    location: "Shoreline Amphitheatre",
    date: "May 14-15, 2026",
    booth: "Developer Lounge",
  },
];

export function PopUpSchedule() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono">
              {"<PopUpSchedule />"}
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pop-Up Locations
            </h2>
            <p className="text-muted-foreground">
              Can&apos;t make it to our flagship location? Find us at these upcoming
              tech events and conferences.
            </p>
          </div>

          {/* Pop-ups Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {popups.map((popup, index) => (
              <Card key={index} className="bg-background border-border hover:border-accent/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    {popup.event}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{popup.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span>{popup.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{popup.booth}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Want to know when we&apos;re coming to an event near you?
            </p>
            <p className="text-sm text-accent font-mono mt-2">
              Subscribe to our newsletter for pop-up announcements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
