"use client";

import React, { useState } from "react";
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
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // هنا ربطنا الفورم مع الـ Backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  if (isSubmitted) {
    return (
      <Card className="bg-card border-border">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Message Sent!
          </h3>
          <p className="text-muted-foreground mb-6">
            Thanks for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
          <div className="bg-muted rounded-lg p-4 font-mono text-sm">
            <p className="text-muted-foreground">{"// Response status:"}</p>
            <p className="text-accent">200 OK - Message delivered successfully</p>
          </div>
          <Button
            className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: "", email: "", subject: "", message: "" });
            }}
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <Badge variant="outline" className="mb-4 font-mono">
        {"<ContactForm />"}
      </Badge>
      <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>

      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="font-mono">
                {"// Your Name *"}
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

            {/* Subject */}
            <div className="space-y-2">
              <Label htmlFor="subject" className="font-mono">
                {"// Subject *"}
              </Label>
              <Select
                value={formData.subject}
                onValueChange={(value) =>
                  setFormData({ ...formData, subject: value })
                }
                required
              >
                <SelectTrigger className="font-mono">
                  <SelectValue placeholder="What's this about?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="event">Event Inquiry</SelectItem>
                  <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="press">Press / Media</SelectItem>
                  <SelectItem value="careers">Careers</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="font-mono">
                {"// Your Message *"}
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us what's on your mind..."
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="font-mono resize-none min-h-[150px]"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-mono"
            >
              <Send className="mr-2 h-4 w-4" />
              {"message.send()"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}             