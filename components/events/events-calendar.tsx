"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  { date: 5, title: "JS Workshop", type: "workshop" },
  { date: 8, title: "Python Meetup", type: "meetup" },
  { date: 12, title: "Hackathon", type: "hackathon" },
  { date: 14, title: "Valentine Code Jam", type: "hackathon" },
  { date: 15, title: "React Workshop", type: "workshop" },
  { date: 18, title: "Design Competition", type: "competition" },
  { date: 20, title: "Design a Drink", type: "competition" },
  { date: 22, title: "Open Mic Demos", type: "meetup" },
  { date: 25, title: "AI/ML Workshop", type: "workshop" },
  { date: 28, title: "Monthly Showcase", type: "meetup" },
];

const eventTypeColors: Record<string, string> = {
  workshop: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30",
  hackathon: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30",
  competition: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30",
  meetup: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30",
};

export function EventsCalendar() {
  const [currentMonth] = useState(new Date(2026, 1)); // February 2026
  
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  const monthName = currentMonth.toLocaleString("default", { month: "long", year: "numeric" });

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4 font-mono">
            {"<Calendar />"}
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            February Schedule
          </h2>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(eventTypeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${color.split(" ")[0]}`} />
              <span className="text-sm text-muted-foreground capitalize">{type}</span>
            </div>
          ))}
        </div>

        {/* Calendar */}
        <Card className="bg-card border-border max-w-4xl mx-auto">
          <CardContent className="p-6">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6">
              <Button variant="ghost" size="icon" disabled>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <h3 className="text-xl font-bold font-mono text-foreground">{monthName}</h3>
              <Button variant="ghost" size="icon" disabled>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Days Header */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {days.map((day) => (
                <div key={day} className="text-center text-sm font-mono text-muted-foreground py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {/* Empty cells for days before the first day of month */}
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square p-1" />
              ))}

              {/* Days of the month */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const dayEvents = events.filter((e) => e.date === day);
                const isToday = day === 4; // Assuming current date is Feb 4

                return (
                  <div
                    key={day}
                    className={`aspect-square p-1 rounded-lg border transition-colors ${
                      dayEvents.length > 0
                        ? "border-accent/50 bg-accent/5 hover:bg-accent/10 cursor-pointer"
                        : "border-transparent hover:border-border"
                    } ${isToday ? "ring-2 ring-accent" : ""}`}
                  >
                    <div className="h-full flex flex-col">
                      <span
                        className={`text-sm font-mono ${
                          isToday ? "text-accent font-bold" : "text-foreground"
                        }`}
                      >
                        {day}
                      </span>
                      {dayEvents.length > 0 && (
                        <div className="flex-1 flex flex-col gap-1 mt-1 overflow-hidden">
                          {dayEvents.slice(0, 2).map((event, idx) => (
                            <div
                              key={idx}
                              className={`text-[10px] px-1 py-0.5 rounded truncate ${eventTypeColors[event.type]}`}
                              title={event.title}
                            >
                              <span className="hidden sm:inline">{event.title}</span>
                              <span className="sm:hidden">{event.type[0].toUpperCase()}</span>
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <span className="text-[10px] text-muted-foreground">
                              +{dayEvents.length - 2} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
