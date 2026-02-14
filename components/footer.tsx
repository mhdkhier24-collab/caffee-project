'use client';

import Link from "next/link";
import { Coffee, Terminal, Github, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Events", href: "/events" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/mhdkhier24-collab", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Coffee className="h-8 w-8 text-primary" />
                <Terminal className="absolute -bottom-1 -right-1 h-4 w-4 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-lg font-bold tracking-tight text-foreground">
                  {"<"}Caffe Syntax{"/>"}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground -mt-1">
                  Fuel Your Code
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Where coffee meets code. Premium brews for the developer community.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"

                  className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-mono font-semibold text-foreground mb-4 text-sm">
              {"// Navigation"}
            </h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-mono font-semibold text-foreground mb-4 text-sm">
              {"// Legal"}
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-mono font-semibold text-foreground mb-4 text-sm">
              {"// Subscribe"}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get coding tips & exclusive offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="dev@email.com"
                className="font-mono text-sm"
              />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Join
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} Caffe Syntax. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-accent">{"<"}</span>
            Made with caffeine & passion
            <span className="text-accent">{"/>"}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
