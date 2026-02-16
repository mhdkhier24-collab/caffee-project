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
  const { cartOrders, toggleCart, showCart, increaseQuantity,
    decreaseQuantity } = useCart();

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
                  {cartOrders.reduce((sum, item) => sum + item.quantity, 0)}

                </span>
              )}
            </Button>

            {/* Cart Modal */}
            {/* Cart Modal */}
            {showCart && (
              <div
                ref={cartRef}
                className="fixed top-20 right-6 w-[380px] bg-background border border-border rounded-2xl 
               shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[999] flex flex-col
               animate-in fade-in slide-in-from-top-2 duration-200"
              >
                {/* Header */}
                <div className="p-4 border-b flex items-center justify-between bg-muted/40 backdrop-blur-sm rounded-t-2xl">
                  <h3 className="font-semibold text-lg">Your Cart</h3>
                  <span className="text-xs text-muted-foreground">
                    {cartOrders.reduce((sum, item) => sum + item.quantity, 0)} items
                  </span>
                </div>

                {/* Scroll Area */}
                <div className="max-h-72 overflow-y-auto">
                  {cartOrders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-muted-foreground text-sm">
                      <Coffee className="h-8 w-8 mb-3 opacity-50" />
                      Your cart is empty
                    </div>
                  ) : (
                    cartOrders.map((order, i) => (
                      <div
                        key={i}
                        className="border-b p-4 text-sm hover:bg-muted/40 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <div className="space-y-1">
                            <p className="font-medium">{order.name}</p>
                            <p className="text-xs text-muted-foreground">
                              ${order.total.toFixed(2)}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => decreaseQuantity(i)}
                              className="w-7 h-7 flex items-center justify-center rounded-md border 
                             hover:bg-muted transition"
                            >
                              -
                            </button>

                            <span className="font-medium w-6 text-center">
                              {order.quantity}
                            </span>

                            <button
                              onClick={() => increaseQuantity(i)}
                              className="w-7 h-7 flex items-center justify-center rounded-md border 
                             hover:bg-muted transition"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Total */}
                {cartOrders.length > 0 && (
                  <div className="border-t p-4 font-semibold flex justify-between bg-muted/20 rounded-b-2xl">
                    <span>Total:</span>
                    <span>
                      $
                      {cartOrders
                        .reduce(
                          (sum, item) => sum + item.total * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
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