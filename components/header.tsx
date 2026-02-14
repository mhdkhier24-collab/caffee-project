"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, Coffee, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/components/CartContext";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];


export function Header() {
  const { cartOrders, toggleCart, showCart } = useCart();

  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const cartRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // اغلاق السلة عند الضغط خارجها
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        if (showCart) toggleCart();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCart, toggleCart]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Coffee className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            {/* Cart Icon */}
            <Button
              variant="ghost" size="icon"
              onClick={toggleCart}
              className="rounded-full relative"
            >
              <Coffee className="h-5 w-5" />
              {cartOrders.length > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-accent rounded-full">
                  {cartOrders.length}
                </span>
              )}
            </Button>

            {/* Cart Modal */}
            {showCart && (
              <div
                ref={cartRef}
                className="absolute right-0 mt-12 w-64 bg-background border border-border rounded-lg shadow-lg p-4 z-50"
              >
                <h4 className="font-bold mb-2">Your Cart</h4>
                {cartOrders.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No items yet</p>
                ) : (
                  cartOrders.map((order, i) => (
                    <div key={i} className="border-b last:border-b-0 py-1 text-sm">
                      {order.name} - ${order.total}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* CTA Button - Desktop */}
            <Button
              asChild
              className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90 font-mono"
            >
              <Link href="/events">Join Community</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-md transition-all",
                    pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-mono"
              >
                <Link href="/events" onClick={() => setIsOpen(false)}>
                  Join Community
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}