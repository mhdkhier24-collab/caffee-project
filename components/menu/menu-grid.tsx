"use client";

import React from "react"
import Image from "next/image";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Database,
  RefreshCw,
  Layers,
  Zap,
  Server,
  Cloud,
  Binary,
  Terminal,
  Braces,
  Coffee,
  Flame,
  Snowflake,
} from "lucide-react";
import { useCart } from "@/components/CartContext"


type CaffeineLevel = "all" | "low" | "medium" | "high" | "extreme";
type Temperature = "all" | "hot" | "cold";
type Category = "all" | "espresso" | "brewed" | "specialty" | "cold" | "treats";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  prices: { byte: string; mega: string; giga: string };
  icon: React.ElementType;
  caffeineLevel: "low" | "medium" | "high" | "extreme";
  temperature: "hot" | "cold";
  category: "espresso" | "brewed" | "specialty" | "cold" | "treats";
  tags: string[];
  image?: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Espresso Protocol",
    description: "Pure, concentrated energy. The foundation of every great codebase. Single or double shot.",
    prices: { byte: "$3.50", mega: "$4.50", giga: "$5.50" },
    icon: Cpu,
    caffeineLevel: "high",
    temperature: "hot",
    category: "espresso",
    tags: ["Classic", "Quick"],
    image: "/image/photo3.jpg",
  },
  {
    id: 2,
    name: "Cold Brew Kernel",
    description: "Smooth, low-level performance. 18-hour steeped for optimal execution speed.",
    prices: { byte: "$4.50", mega: "$5.50", giga: "$6.50" },
    icon: Database,
    caffeineLevel: "high",
    temperature: "cold",
    category: "cold",
    tags: ["Smooth", "Strong"],
    image: "/image/photo2.jpg",
  },
  {
    id: 3,
    name: "Latte Loop",
    description: "Iterative comfort in every sip. Silky steamed milk with perfect espresso balance.",
    prices: { byte: "$4.00", mega: "$5.00", giga: "$6.00" },
    icon: RefreshCw,
    caffeineLevel: "medium",
    temperature: "hot",
    category: "espresso",
    tags: ["Creamy", "Popular"],
    image: "/image/photo4.jpg",
  },
  {
    id: 4,
    name: "Matcha Core",
    description: "Clean cache. High performance.Finest matcha green tea, whisked to perfection. Zero jitters, sustained focus.",
    prices: { byte: "$5.00", mega: "$6.00", giga: "$7.00" },
    icon: Layers,
    caffeineLevel: "medium",
    temperature: "hot",
    category: "specialty",
    tags: ["Sweet", "Indulgent"],
    image: "/image/photo1.jpg",
  },
  {
    id: 5,
    name: "Syntax Shot",
    description: "Quick, precise, powerful. Triple shot of espresso for those critical deadlines.",
    prices: { byte: "$3.50", mega: "-", giga: "-" },
    icon: Zap,
    caffeineLevel: "extreme",
    temperature: "hot",
    category: "espresso",
    tags: ["Intense", "Fast"],
    image: "/image/photo5.jpg",
  },
  {
    id: 6,
    name: "API Americano",
    description: "Clean and straightforward. Espresso diluted with hot water for extended runtime.",
    prices: { byte: "$3.00", mega: "$4.00", giga: "$5.00" },
    icon: Server,
    caffeineLevel: "medium",
    temperature: "hot",
    category: "espresso",
    tags: ["Classic", "Light"],
    image: "/image/photo11.jpg",
  },
  {
    id: 7,
    name: "Cloud Cappuccino",
    description: "Light, fluffy foam over rich espresso. Distributed flavor in every layer.",
    prices: { byte: "$4.00", mega: "$5.00", giga: "$6.00" },
    icon: Cloud,
    caffeineLevel: "medium",
    temperature: "hot",
    category: "espresso",
    tags: ["Foamy", "Balanced"],
    image: "/image/photo9.jpg",
  },
  {
    id: 8,
    name: "Binary Brew",
    description: "Simple drip coffee. Two states: empty or full. Keep it running all day.",
    prices: { byte: "$2.50", mega: "$3.50", giga: "$4.50" },
    icon: Binary,
    caffeineLevel: "medium",
    temperature: "hot",
    category: "brewed",
    tags: ["Simple", "Refillable"],
    image: "/image/photo6.jpg",
  },
  {
    id: 9,
    name: "Terminal Tea",
    description: "Command-line clarity. Premium loose-leaf options for the non-coffee coder.",
    prices: { byte: "$3.00", mega: "$4.00", giga: "$5.00" },
    icon: Terminal,
    caffeineLevel: "low",
    temperature: "hot",
    category: "brewed",
    tags: ["Calm", "Variety"],
    image: "/image/photo10.jpg",
  },
  {
    id: 10,
    name: "JSON Juice",
    description: "Fresh-pressed structured data. Orange, apple, or our signature green mix.",
    prices: { byte: "$4.00", mega: "$5.00", giga: "$6.00" },
    icon: Braces,
    caffeineLevel: "low",
    temperature: "cold",
    category: "cold",
    tags: ["Healthy", "Fresh"],
    image: "/image/photo7.jpg",
  },
  {
    id: 11,
    name: "Frappe Function",
    description: "Blended iced coffee with your choice of flavor modules. Returns sweetness.",
    prices: { byte: "$5.00", mega: "$6.00", giga: "$7.00" },
    icon: Snowflake,
    caffeineLevel: "medium",
    temperature: "cold",
    category: "cold",
    tags: ["Sweet", "Blended"],
    image: "/image/photo8.jpg",
  },
  {
    id: 12,
    name: "Debug Drip",
    description: "Single-origin pour-over. Carefully extracted to reveal every flavor note.",
    prices: { byte: "$4.00", mega: "$5.00", giga: "$6.00" },
    icon: Coffee,
    caffeineLevel: "high",
    temperature: "hot",
    category: "brewed",
    tags: ["Premium", "Artisan"],
    image: "/image/photo12.jpg",
  },
];

const caffeineFilters: { value: CaffeineLevel; label: string }[] = [
  { value: "all", label: "All Levels" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "extreme", label: "Extreme" },
];

const temperatureFilters: { value: Temperature; label: string; icon: React.ElementType }[] = [
  { value: "all", label: "All", icon: Coffee },
  { value: "hot", label: "Hot", icon: Flame },
  { value: "cold", label: "Cold", icon: Snowflake },
];

const categoryFilters: { value: Category; label: string }[] = [
  { value: "all", label: "All Items" },
  { value: "espresso", label: "Espresso Based" },
  { value: "brewed", label: "Brewed" },
  { value: "specialty", label: "Specialty" },
  { value: "cold", label: "Cold Drinks" },
];

export function MenuGrid() {
  const [caffeineFilter, setCaffeineFilter] = useState<CaffeineLevel>("all");
  const [tempFilter, setTempFilter] = useState<Temperature>("all");
  const [categoryFilter, setCategoryFilter] = useState<Category>("all");
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter((item) => {
    if (caffeineFilter !== "all" && item.caffeineLevel !== caffeineFilter) return false;
    if (tempFilter !== "all" && item.temperature !== tempFilter) return false;
    if (categoryFilter !== "all" && item.category !== categoryFilter) return false;
    return true;
  });

  const getCaffeineLevelColor = (level: string) => {
    switch (level) {
      case "low": return "bg-green-500/20 text-green-600 dark:text-green-400";
      case "medium": return "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400";
      case "high": return "bg-orange-500/20 text-orange-600 dark:text-orange-400";
      case "extreme": return "bg-red-500/20 text-red-600 dark:text-red-400";
      default: return "bg-muted text-muted-foreground";
    }
  };
  const handleAddItem = async (item: MenuItem) => {
    // حوّل السعر لنص رقمي
    const price = item.prices.byte !== "-" ? parseFloat(item.prices.byte.replace("$", "")) : 0;

    // جهّز البيانات بنفس شكل Order
    const newOrder = {
      id: crypto.randomUUID(),
      name: item.name,
      base: "default",
      milk: "none",
      flavors: [],
      extras: [],
      shots: 1,
      total: price,
      quantity: 1,
    };

    // أضف للسلة
    addToCart(newOrder);

    // أرسل للـ API ليحفظ في orders.json
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder),
      });
      const data = await res.json();
      console.log("Order saved:", data);
    } catch (err) {
      console.error("Failed to save order:", err);
    }
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="mb-10 space-y-6">
          {/* Category Filter */}
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-3">
              {"// Filter by category"}
            </p>
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((filter) => (
                <Button
                  key={filter.value}
                  variant={categoryFilter === filter.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategoryFilter(filter.value)}
                  className="font-mono"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Temperature & Caffeine Filters */}
          <div className="flex flex-wrap gap-8">
            {/* Temperature */}
            <div>
              <p className="text-sm font-mono text-muted-foreground mb-3">
                {"// Temperature"}
              </p>
              <div className="flex gap-2">
                {temperatureFilters.map((filter) => (
                  <Button
                    key={filter.value}
                    variant={tempFilter === filter.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTempFilter(filter.value)}
                    className="font-mono"
                  >
                    <filter.icon className="h-4 w-4 mr-1" />
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Caffeine Level */}
            <div>
              <p className="text-sm font-mono text-muted-foreground mb-3">
                {"// Caffeine level"}
              </p>
              <div className="flex flex-wrap gap-2">
                {caffeineFilters.map((filter) => (
                  <Button
                    key={filter.value}
                    variant={caffeineFilter === filter.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCaffeineFilter(filter.value)}
                    className="font-mono"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6 font-mono">
          {"// Found"} {filteredItems.length} {"items"}
        </p>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="bg-card border-border hover:border-accent/50 transition-all group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Container للصورة */}
                <div className="relative w-48 h-48 mx-auto my-4 rounded-lg overflow-hidden">
                  <Image
                    src={item.image ?? "/image/default.jpg"} // fallback إذا ما فيه صورة
                    alt={item.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>




                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className={getCaffeineLevelColor(item.caffeineLevel)} variant="secondary">
                      {item.caffeineLevel} caffeine
                    </Badge>
                    <Badge variant="outline" className="font-mono text-xs">
                      {item.temperature === "hot" ? <Flame className="h-3 w-3 mr-1" /> : <Snowflake className="h-3 w-3 mr-1" />}
                      {item.temperature}
                    </Badge>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-foreground mb-2 font-mono group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Prices */}
                  <div className="flex justify-between items-center text-sm border-t border-border pt-4">
                    <div className="text-center">
                      <span className="block text-xs text-muted-foreground font-mono">Byte</span>
                      <span className="font-semibold text-foreground">{item.prices.byte}</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-xs text-muted-foreground font-mono">Mega</span>
                      <span className="font-semibold text-foreground">{item.prices.mega}</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-xs text-muted-foreground font-mono">Giga</span>
                      <span className="font-semibold text-foreground">{item.prices.giga}</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleAddItem(item)}
                    className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-mono"
                  >
                    order.create()
                  </Button>

                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Coffee className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground font-mono">
              {"// No items match your filters"}
            </p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={() => {
                setCaffeineFilter("all");
                setTempFilter("all");
                setCategoryFilter("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
