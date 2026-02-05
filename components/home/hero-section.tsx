"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Coffee, Code, Sparkles, ChevronDown } from "lucide-react";

const codeLines = [
  'const coffee = await brew("espresso");',
  "while (coding) { sip(coffee); }",
  'import { energy } from "caffeine";',
  "function debug() { return coffee; }",
  "// TODO: Get more coffee",
];

export function HeroSection() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const line = codeLines[currentLine];
    let charIndex = 0;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setDisplayedText(line.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(false);
          }, 2000);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    } else {
      const nextLine = (currentLine + 1) % codeLines.length;
      setCurrentLine(nextLine);
      setDisplayedText("");
      setIsTyping(true);
    }
  }, [currentLine, isTyping]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        {/* Binary rain effect */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute font-mono text-xs text-foreground animate-pulse"
              style={{
                left: `${i * 5}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              {Math.random() > 0.5 ? "01100011" : "01101111"}
            </div>
          ))}
        </div>
        {/* Coffee steam particles */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-headline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border mb-8 backdrop-blur-sm">
            <Coffee className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">
              Where coffee meets code
            </span>
            <Code className="h-4 w-4 text-accent" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Fuel Your</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Code
            </span>
          </h1>

          {/* Code Terminal */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-card/90 backdrop-blur-sm rounded-lg border border-border overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">
                  caffe-syntax.js
                </span>
              </div>
              {/* Terminal Body */}
              <div className="p-4 font-mono text-sm md:text-base text-left">
                <span className="text-accent">{">"}</span>
                <span className="text-foreground ml-2">{displayedText}</span>
                <span className="animate-pulse text-accent">|</span>
              </div>
            </div>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium craft coffee for programmers, developers, and tech
            enthusiasts. Debug your morning with our specially curated brews.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-base px-8"
            >
              <Link href="/menu">
                <Coffee className="mr-2 h-5 w-5" />
                {"view.menu()"}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-mono text-base px-8 bg-transparent"
            >
              <Link href="/events">
                <Sparkles className="mr-2 h-5 w-5" />
                {"join.community()"}
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground font-mono">
                10K+
              </div>
              <div className="text-sm text-muted-foreground">Devs Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground font-mono">
                25+
              </div>
              <div className="text-sm text-muted-foreground">Tech Brews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground font-mono">
                100+
              </div>
              <div className="text-sm text-muted-foreground">Events Hosted</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
