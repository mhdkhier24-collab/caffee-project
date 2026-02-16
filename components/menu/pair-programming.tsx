"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coffee, Cookie, Plus } from "lucide-react";
import { useCart, Order } from "@/components/CartContext";



const combos = [
  {
    id: 1,
    name: "The Debug Duo",
    description: "Debug Drip + Syntax Scone",
    items: ["Pour-over coffee", "Fresh baked scone"],
    originalPrice: "$9.00",
    comboPrice: "$7.50",
    savings: "Save $1.50",
  },
  {
    id: 2,
    name: "Late Night Deploy",
    description: "Cold Brew Kernel + Cookie Cache",
    items: ["18-hour cold brew", "Chocolate chip cookies (3)"],
    originalPrice: "$10.50",
    comboPrice: "$8.50",
    savings: "Save $2.00",
  },
  {
    id: 3,
    name: "Morning Standup",
    description: "Espresso Protocol + Toast Module",
    items: ["Double espresso", "Avocado toast"],
    originalPrice: "$12.00",
    comboPrice: "$10.00",
    savings: "Save $2.00",
  },
  {
    id: 4,
    name: "Refactor Reward",
    description: "Mocha Stack + Brownie Buffer",
    items: ["Mocha with whipped cream", "Fudge brownie"],
    originalPrice: "$11.50",
    comboPrice: "$9.50",
    savings: "Save $2.00",
  },
];

export function PairProgramming() {
  const { addToCart } = useCart();
  const handleAddCombo = async (combo: any) => {
    const priceNumber = parseFloat(combo.comboPrice.replace("$", ""));

    const newOrder: Order = {
      id: crypto.randomUUID(), // أو Date.now().toString()
      name: combo.name,
      base: "N/A",             // لأنه combo ما عنده base
      milk: "N/A",             // لأنه combo ما عنده milk
      flavors: [],             // array فارغ
      extras: [],              // array فارغ
      shots: 0,                // ما في shots للcombo
      total: parseFloat(combo.comboPrice.replace("$", "")),
      quantity: 1,
    };

    // يضيف للسلة
    addToCart(newOrder);

    // يخزن بالـ orders.json
    await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 font-mono">
            {"<PairProgramming />"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pair Programming Combos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Like a good pair programming session, some things just work better together.
            Save when you bundle coffee with our fresh treats.
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {combos.map((combo) => (
            <Card key={combo.id} className="bg-card border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-mono mb-1">
                      {combo.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{combo.description}</p>
                  </div>
                  <Badge className="bg-accent/20 text-accent border-0">
                    {combo.savings}
                  </Badge>
                </div>

                {/* Items */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Coffee className="h-6 w-6 text-primary" />
                  </div>
                  <Plus className="h-4 w-4 text-muted-foreground" />
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                    <Cookie className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <ul className="text-sm text-muted-foreground">
                      {combo.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground line-through mr-2">
                      {combo.originalPrice}
                    </span>
                    <span className="text-2xl font-bold text-accent font-mono">
                      {combo.comboPrice}
                    </span>
                  </div>
                  <Button
                    onClick={() => handleAddCombo(combo)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono"
                  >
                    Add Combo
                  </Button>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
