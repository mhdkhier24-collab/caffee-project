"use client";

import React from "react"
import { useRef, useState, useEffect } from "react";
import { EventsRegistration } from "./events-registration"; // تأكد من المسار الصحيح للفورم
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Code,
  Trophy,
  Presentation,
  Coffee,
} from "lucide-react";

type EventType = "all" | "workshop" | "hackathon" | "competition" | "meetup";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
  attendees: number;
  maxAttendees: number;
  icon: React.ElementType;
  tags: string[];
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "JavaScript Fundamentals Workshop",
    description: "Master the core concepts of JavaScript with hands-on exercises. Perfect for beginners and those looking to refresh their skills.",
    date: "Feb 5, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Workshop Room A",
    type: "workshop",
    attendees: 18,
    maxAttendees: 25,
    icon: Code,
    tags: ["JavaScript", "Beginner"],
  },
  {
    id: 2,
    title: "Python Data Science Meetup",
    description: "Connect with fellow data enthusiasts. Lightning talks, networking, and of course, great coffee.",
    date: "Feb 8, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Main Floor",
    type: "meetup",
    attendees: 32,
    maxAttendees: 40,
    icon: Coffee,
    tags: ["Python", "Data Science"],
  },
  {
    id: 3,
    title: "48-Hour Hackathon: Build for Good",
    description: "Create solutions for local nonprofits. Form teams, build projects, and compete for prizes. Meals and coffee included!",
    date: "Feb 12-14, 2026",
    time: "Starts 6:00 PM Friday",
    location: "Entire Venue",
    type: "hackathon",
    attendees: 78,
    maxAttendees: 100,
    icon: Trophy,
    tags: ["All Levels", "Team Event"],
  },
  {
    id: 4,
    title: "Valentine's Code Jam",
    description: "Special themed hackathon - build something with love! Solo or pair programming welcome. Romantic comedy movie marathon included.",
    date: "Feb 14, 2026",
    time: "6:00 PM - 10:00 PM",
    location: "Entire Venue",
    type: "hackathon",
    attendees: 45,
    maxAttendees: 60,
    icon: Trophy,
    tags: ["Fun", "Themed"],
  },
  {
    id: 5,
    title: "React & Next.js 16 Deep Dive",
    description: "Explore the latest features in Next.js 16 including cache components, the new runtime, and React 19.2 features.",
    date: "Feb 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Workshop Room A",
    type: "workshop",
    attendees: 45,
    maxAttendees: 50,
    icon: Code,
    tags: ["React", "Next.js", "Advanced"],
  },
  {
    id: 6,
    title: "Design a Drink Competition",
    description: "Create your own tech-themed drink! Submit your recipe, we'll brew the top 5, and attendees vote for the winner. Winning drink joins our menu!",
    date: "Feb 20, 2026",
    time: "4:00 PM - 7:00 PM",
    location: "Bar Area",
    type: "competition",
    attendees: 23,
    maxAttendees: 30,
    icon: Presentation,
    tags: ["Creative", "Fun"],
  },
  {
    id: 7,
    title: "Monthly Project Showcase",
    description: "Demo your side projects, get feedback, and be inspired by what others are building. 5-minute presentations followed by Q&A.",
    date: "Feb 28, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "Main Floor",
    type: "meetup",
    attendees: 28,
    maxAttendees: 50,
    icon: Presentation,
    tags: ["Demo", "Networking"],
  },
];

const filterOptions: { value: EventType; label: string }[] = [
  { value: "all", label: "All Events" },
  { value: "workshop", label: "Workshops" },
  { value: "hackathon", label: "Hackathons" },
  { value: "competition", label: "Competitions" },
  { value: "meetup", label: "Meetups" },
];

const eventTypeColors: Record<string, string> = {
  workshop: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
  hackathon: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
  competition: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
  meetup: "bg-green-500/20 text-green-600 dark:text-green-400",
};

export function EventsList() {
  const [filter, setFilter] = useState<EventType>("all");

  const filteredEvents =
    filter === "all"
      ? upcomingEvents
      : upcomingEvents.filter((event) => event.type === filter);
  const registrationRef = useRef<HTMLDivElement>(null);
  const [selectedEventForForm, setSelectedEventForForm] = useState<string>("");


  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4 font-mono">
            {"<UpcomingEvents />"}
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              variant={filter === option.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(option.value)}
              className="font-mono"
            >
              {option.label}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="bg-background border-border hover:border-accent/50 transition-colors"
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${eventTypeColors[event.type]}`}>
                      <event.icon className="h-5 w-5" />
                    </div>
                    <Badge
                      variant="secondary"
                      className={`${eventTypeColors[event.type]} font-mono text-xs`}
                    >
                      {event.type}
                    </Badge>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
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
                      className="h-full bg-accent rounded-full"
                      style={{
                        width: `${(event.attendees / event.maxAttendees) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {event.maxAttendees - event.attendees} spots left
                  </p>
                </div>

                {/* Registration Button */}
                <Button
                  onClick={() => {
                    setSelectedEventForForm(event.title); // يحدد الحدث الذي ضغط عليه
                    registrationRef.current?.scrollIntoView({ behavior: "smooth" }); // ينقلك للفورم
                  }}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

              </CardContent>
            </Card>
          ))}
        </div>
        <div ref={registrationRef} className="mt-12">
          <EventsRegistration selectedEventForForm={selectedEventForForm} />
        </div>
      </div>

    </section>
  );
}
