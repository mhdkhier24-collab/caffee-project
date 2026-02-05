"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Coffee, Sparkles, Plus, Minus } from "lucide-react";

const baseOptions = [
  { id: "espresso", name: "Espresso", price: 3.5 },
  { id: "cold-brew", name: "Cold Brew", price: 4.0 },
  { id: "drip", name: "Drip Coffee", price: 2.5 },
  { id: "tea", name: "Tea Base", price: 3.0 },
];

const milkOptions = [
  { id: "none", name: "No Milk", price: 0 },
  { id: "whole", name: "Whole Milk", price: 0 },
  { id: "oat", name: "Oat Milk", price: 0.75 },
  { id: "almond", name: "Almond Milk", price: 0.75 },
  { id: "soy", name: "Soy Milk", price: 0.5 },
];

const flavorOptions = [
  { id: "vanilla", name: "Vanilla", price: 0.5 },
  { id: "caramel", name: "Caramel", price: 0.5 },
  { id: "hazelnut", name: "Hazelnut", price: 0.5 },
  { id: "mocha", name: "Mocha", price: 0.75 },
  { id: "lavender", name: "Lavender", price: 0.75 },
];

const extraOptions = [
  { id: "extra-shot", name: "Extra Shot", price: 1.0 },
  { id: "whipped", name: "Whipped Cream", price: 0.5 },
  { id: "cinnamon", name: "Cinnamon Dust", price: 0 },
  { id: "cocoa", name: "Cocoa Powder", price: 0 },
];

export function BuildYourBrew() {
  const [base, setBase] = useState("espresso");
  const [milk, setMilk] = useState("none");
  const [flavors, setFlavors] = useState<string[]>([]);
  const [extras, setExtras] = useState<string[]>([]);
  const [shots, setShots] = useState(1);

  const toggleFlavor = (id: string) => {
    setFlavors((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const toggleExtra = (id: string) => {
    setExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let total = 0;
    total += baseOptions.find((b) => b.id === base)?.price || 0;
    total += milkOptions.find((m) => m.id === milk)?.price || 0;
    flavors.forEach((f) => {
      total += flavorOptions.find((fo) => fo.id === f)?.price || 0;
    });
    extras.forEach((e) => {
      total += extraOptions.find((eo) => eo.id === e)?.price || 0;
    });
    total += (shots - 1) * 1.0; // Extra shots
    return total.toFixed(2);
  };

  const generateBrewName = () => {
    const baseName = baseOptions.find((b) => b.id === base)?.name || "";
    const milkName = milk !== "none" ? milkOptions.find((m) => m.id === milk)?.name : "";
    const flavorNames = flavors.map((f) => flavorOptions.find((fo) => fo.id === f)?.name).join(" ");
    
    return `${flavorNames} ${milkName} ${baseName}`.trim().replace(/\s+/g, " ");
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 font-mono">
            {"<BuildYourBrew />"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customize Your Order
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Like writing your own function, build your perfect drink from scratch.
            Mix and match to create your signature brew.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Base Selection */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="font-mono font-semibold text-foreground mb-4">
                  {"// Select base"}
                </h3>
                <RadioGroup value={base} onValueChange={setBase} className="grid grid-cols-2 gap-4">
                  {baseOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-3">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label htmlFor={option.id} className="flex justify-between w-full cursor-pointer">
                        <span>{option.name}</span>
                        <span className="text-muted-foreground">${option.price.toFixed(2)}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Shot Count */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="font-mono font-semibold text-foreground mb-4">
                  {"// Espresso shots"}
                </h3>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShots(Math.max(1, shots - 1))}
                    disabled={shots <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-2xl font-mono font-bold w-12 text-center">{shots}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShots(Math.min(5, shots + 1))}
                    disabled={shots >= 5}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {shots > 1 && `+$${((shots - 1) * 1.0).toFixed(2)} for extra shots`}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Milk Selection */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="font-mono font-semibold text-foreground mb-4">
                  {"// Choose milk"}
                </h3>
                <RadioGroup value={milk} onValueChange={setMilk} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {milkOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-3">
                      <RadioGroupItem value={option.id} id={`milk-${option.id}`} />
                      <Label htmlFor={`milk-${option.id}`} className="flex justify-between w-full cursor-pointer">
                        <span>{option.name}</span>
                        {option.price > 0 && (
                          <span className="text-muted-foreground">+${option.price.toFixed(2)}</span>
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Flavors */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="font-mono font-semibold text-foreground mb-4">
                  {"// Add flavors"}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {flavorOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={`flavor-${option.id}`}
                        checked={flavors.includes(option.id)}
                        onCheckedChange={() => toggleFlavor(option.id)}
                      />
                      <Label htmlFor={`flavor-${option.id}`} className="flex justify-between w-full cursor-pointer">
                        <span>{option.name}</span>
                        <span className="text-muted-foreground">+${option.price.toFixed(2)}</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Extras */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="font-mono font-semibold text-foreground mb-4">
                  {"// Extras"}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {extraOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={`extra-${option.id}`}
                        checked={extras.includes(option.id)}
                        onCheckedChange={() => toggleExtra(option.id)}
                      />
                      <Label htmlFor={`extra-${option.id}`} className="flex justify-between w-full cursor-pointer">
                        <span>{option.name}</span>
                        {option.price > 0 && (
                          <span className="text-muted-foreground">+${option.price.toFixed(2)}</span>
                        )}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <Card className="bg-background border-border sticky top-24">
              <CardContent className="p-6">
                <div className="text-center">
                  {/* Cup Visual */}
                  <div className="w-32 h-40 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/40 rounded-b-3xl rounded-t-lg border-2 border-primary/30">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Coffee className="h-4 w-4 text-primary" />
                      </div>
                      {/* Steam */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-1 h-4 bg-muted-foreground/30 rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Brew Name */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {generateBrewName() || "Your Custom Brew"}
                  </h3>

                  {/* Summary */}
                  <div className="text-left bg-muted/50 rounded-lg p-4 font-mono text-sm mb-6">
                    <p className="text-muted-foreground mb-2">{"// Your order:"}</p>
                    <p className="text-foreground">
                      {shots}x shot{shots > 1 ? "s" : ""} {baseOptions.find((b) => b.id === base)?.name}
                    </p>
                    {milk !== "none" && (
                      <p className="text-foreground">+ {milkOptions.find((m) => m.id === milk)?.name}</p>
                    )}
                    {flavors.map((f) => (
                      <p key={f} className="text-foreground">
                        + {flavorOptions.find((fo) => fo.id === f)?.name}
                      </p>
                    ))}
                    {extras.map((e) => (
                      <p key={e} className="text-foreground">
                        + {extraOptions.find((eo) => eo.id === e)?.name}
                      </p>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center mb-6 text-lg">
                    <span className="text-muted-foreground">Total:</span>
                    <span className="text-3xl font-bold text-accent font-mono">${calculateTotal()}</span>
                  </div>

                  {/* Add to Order Button */}
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-mono">
                    <Sparkles className="mr-2 h-4 w-4" />
                    {"order.create()"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
