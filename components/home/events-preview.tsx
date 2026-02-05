"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, ArrowRight, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "React Workshop: Building with Next.js 16",
    date: "Feb 15, 2026",
    time: "2:00 PM - 5:00 PM",
    type: "Workshop",
    attendees: 45,
    maxAttendees: 50,
    location: "Main Floor",
  },
  {
    id: 2,
    title: "Hack & Sip: Valentine's Code Jam",
    date: "Feb 14, 2026",
    time: "6:00 PM - 10:00 PM",
    type: "Hackathon",
    attendees: 78,
    maxAttendees: 100,
    location: "Entire Venue",
  },
  {
    id: 3,
    title: "Design a Drink Competition",
    date: "Feb 20, 2026",
    time: "4:00 PM - 7:00 PM",
    type: "Competition",
    attendees: 23,
    maxAttendees: 30,
    location: "Bar Area",
  },
];

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-card border border-border rounded-lg p-3 min-w-[60px]">
            <span className="text-2xl md:text-3xl font-bold font-mono text-foreground">
              {value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-muted-foreground mt-1 block capitalize">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}

export function EventsPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 font-mono">
            {"<UpcomingEvents />"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hack & Sip Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our community events - from coding workshops to hackathons,
            there&apos;s always something brewing.
          </p>

          {/* Countdown to Next Event */}
          <div className="mb-12">
            <p className="text-sm text-muted-foreground mb-4 font-mono">
              {"// Next event starts in:"}
            </p>
            <CountdownTimer targetDate="2026-02-14T18:00:00" />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="bg-card border-border hover:border-accent/50 transition-colors group"
            >
              <CardContent className="p-6">
                {/* Event Type Badge */}
                <Badge
                  variant={
                    event.type === "Hackathon"
                      ? "default"
                      : event.type === "Workshop"
                        ? "secondary"
                        : "outline"
                  }
                  className="mb-4 font-mono"
                >
                  {event.type}
                </Badge>

                {/* Event Title */}
                <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span>
                      {event.attendees}/{event.maxAttendees} registered
                    </span>
                  </div>
                </div>

                {/* Capacity Bar */}
                <div className="mb-4">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all"
                      style={{
                        width: `${(event.attendees / event.maxAttendees) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {event.maxAttendees - event.attendees} spots left
                  </p>
                </div>

                {/* Register Button */}
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors bg-transparent"
                >
                  <Link href="/events">
                    Register
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono">
            <Link href="/events">
              {"events.getAll()"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
