"use client";

import React from "react"

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Send } from "lucide-react";

export function EventsRegistration() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    experience: "",
    dietary: "",
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-xl mx-auto bg-card border-border">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Registration Confirmed!
              </h3>
              <p className="text-muted-foreground mb-6">
                Thank you for registering. Check your email for confirmation details
                and add the event to your calendar.
              </p>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm text-left">
                <p className="text-muted-foreground">{"// Confirmation code:"}</p>
                <p className="text-accent">CAFFE-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
              </div>
              <Button
                className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsSubmitted(false)}
              >
                Register for Another Event
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 font-mono">
              {"<Register />"}
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Event Registration
            </h2>
            <p className="text-muted-foreground">
              Reserve your spot at upcoming events. All registrations include
              complimentary coffee!
            </p>
          </div>

          {/* Registration Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono">
                    {"// Full Name *"}
                  </Label>
                  <Input
                    id="name"
                    placeholder="Ada Lovelace"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="font-mono"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono">
                    {"// Email Address *"}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ada@lovelace.dev"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="font-mono"
                  />
                </div>

                {/* Event Selection */}
                <div className="space-y-2">
                  <Label htmlFor="event" className="font-mono">
                    {"// Select Event *"}
                  </Label>
                  <Select
                    value={formData.event}
                    onValueChange={(value) =>
                      setFormData({ ...formData, event: value })
                    }
                    required
                  >
                    <SelectTrigger className="font-mono">
                      <SelectValue placeholder="Choose an event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="js-workshop">
                        Feb 5 - JavaScript Fundamentals Workshop
                      </SelectItem>
                      <SelectItem value="python-meetup">
                        Feb 8 - Python Data Science Meetup
                      </SelectItem>
                      <SelectItem value="hackathon">
                        Feb 12-14 - 48-Hour Hackathon
                      </SelectItem>
                      <SelectItem value="valentine">
                        Feb 14 - Valentine&apos;s Code Jam
                      </SelectItem>
                      <SelectItem value="react-workshop">
                        Feb 15 - React & Next.js 16 Deep Dive
                      </SelectItem>
                      <SelectItem value="design-drink">
                        Feb 20 - Design a Drink Competition
                      </SelectItem>
                      <SelectItem value="showcase">
                        Feb 28 - Monthly Project Showcase
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience Level */}
                <div className="space-y-2">
                  <Label htmlFor="experience" className="font-mono">
                    {"// Experience Level"}
                  </Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) =>
                      setFormData({ ...formData, experience: value })
                    }
                  >
                    <SelectTrigger className="font-mono">
                      <SelectValue placeholder="Your coding experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                      <SelectItem value="intermediate">
                        Intermediate (1-3 years)
                      </SelectItem>
                      <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                      <SelectItem value="expert">Expert (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Dietary Restrictions */}
                <div className="space-y-2">
                  <Label htmlFor="dietary" className="font-mono">
                    {"// Dietary Restrictions / Notes"}
                  </Label>
                  <Textarea
                    id="dietary"
                    placeholder="Any allergies or dietary requirements..."
                    value={formData.dietary}
                    onChange={(e) =>
                      setFormData({ ...formData, dietary: e.target.value })
                    }
                    className="font-mono resize-none"
                    rows={3}
                  />
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, newsletter: checked as boolean })
                    }
                  />
                  <Label htmlFor="newsletter" className="text-sm text-muted-foreground cursor-pointer">
                    Subscribe to our newsletter for event updates and coding tips
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-mono"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {"register.submit()"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
