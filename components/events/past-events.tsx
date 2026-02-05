"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, Users, Trophy, X } from "lucide-react";

const pastEvents = [
  {
    id: 1,
    title: "New Year Hackathon 2026",
    date: "Jan 1-2, 2026",
    attendees: 95,
    highlights: ["48 projects submitted", "3 startup ideas born", "500 cups of coffee"],
    winner: "Team ByteBuilders - AI-powered study assistant",
  },
  {
    id: 2,
    title: "TypeScript Masterclass",
    date: "Jan 10, 2026",
    attendees: 48,
    highlights: ["4 hours of deep learning", "Hands-on exercises", "Certificate awarded"],
    winner: null,
  },
  {
    id: 3,
    title: "Design Systems Workshop",
    date: "Jan 18, 2026",
    attendees: 35,
    highlights: ["Built component library", "Figma to code workflow", "Team collaboration"],
    winner: null,
  },
  {
    id: 4,
    title: "January Project Showcase",
    date: "Jan 25, 2026",
    attendees: 62,
    highlights: ["15 projects demoed", "Community voting", "Networking dinner"],
    winner: "Best Project: Open-source CLI tool for API testing",
  },
];

export function PastEvents() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof pastEvents)[0] | null>(null);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 font-mono">
            {"<PastEvents />"}
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Event Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Look back at the amazing events we&apos;ve hosted. Each one brought our
            community closer together.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pastEvents.map((event) => (
            <Card
              key={event.id}
              className="bg-background border-border hover:border-accent/50 transition-colors cursor-pointer group"
              onClick={() => setSelectedEvent(event)}
            >
              <CardContent className="p-0">
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Trophy className="h-12 w-12 text-primary/50 group-hover:text-accent transition-colors" />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Event Detail Modal */}
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {selectedEvent?.title}
              </DialogTitle>
            </DialogHeader>
            {selectedEvent && (
              <div className="space-y-4">
                {/* Event Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Trophy className="h-16 w-16 text-primary/50" />
                </div>

                {/* Date & Attendees */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span>{selectedEvent.attendees} attendees</span>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-mono font-semibold text-foreground mb-2">
                    {"// Highlights"}
                  </h4>
                  <ul className="space-y-1">
                    {selectedEvent.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="text-accent">*</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Winner (if applicable) */}
                {selectedEvent.winner && (
                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                    <h4 className="font-mono font-semibold text-accent mb-1 flex items-center gap-2">
                      <Trophy className="h-4 w-4" />
                      Winner
                    </h4>
                    <p className="text-sm text-foreground">{selectedEvent.winner}</p>
                  </div>
                )}

                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => setSelectedEvent(null)}
                >
                  <X className="mr-2 h-4 w-4" />
                  Close
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
