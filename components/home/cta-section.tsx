"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Coffee, Sparkles, Check, Github, Mail } from "lucide-react";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "community_signup",
          email: email,
          createdAt: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };


  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 font-mono">
            {"<JoinCommunity />"}
          </Badge>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to{" "}
            <span className="text-accent">Fuel Your Code</span>?
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join our community of 10,000+ developers. Get exclusive access to
            events, discounts, and the best coffee for coders.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "Early event access",
              "Member discounts",
              "Weekly challenges",
              "Free birthday drink",
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Check className="h-4 w-4 text-accent" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Signup Form */}
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="developer@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 font-mono"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-mono"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                {"join()"}
              </Button>
            </form>
          ) : (
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 max-w-md mx-auto">
              <Coffee className="h-12 w-12 text-accent mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground mb-2">
                Welcome to the community!
              </p>
              <p className="text-sm text-muted-foreground font-mono">
                {"// Check your inbox for a welcome gift"}
              </p>
            </div>
          )}

          {/* Alternative Signup */}
          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Or sign up with
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="font-mono bg-transparent">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Terminal Style Footer */}
          <div className="mt-12 bg-card/50 backdrop-blur-sm rounded-lg border border-border p-4 max-w-lg mx-auto">
            <div className="font-mono text-sm text-left">
              <p className="text-muted-foreground">
                <span className="text-accent">$</span> npm install @caffe-syntax/membership
              </p>
              <p className="text-muted-foreground">
                <span className="text-accent">$</span> coffee --start --productivity=max
              </p>
              <p className="text-accent animate-pulse">
                {">"} Brewing excellence...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
