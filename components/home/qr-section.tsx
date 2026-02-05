"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { QrCode, Sparkles, Trophy, Code } from "lucide-react";

export function QRSection() {
  const [inputValue, setInputValue] = useState("");
  const [qrGenerated, setQrGenerated] = useState(false);

  const handleGenerate = () => {
    if (inputValue.trim()) {
      setQrGenerated(true);
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 font-mono text-6xl text-foreground">
          {"{}"}
        </div>
        <div className="absolute bottom-10 right-10 font-mono text-6xl text-foreground">
          {"</>"}
        </div>
        <div className="absolute top-1/2 left-1/4 font-mono text-4xl text-foreground">
          {"[]"}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4 font-mono">
              {"<InteractiveChallenge />"}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Scan for
              <span className="text-accent"> Coding Challenge</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Generate your unique QR code and unlock daily coding challenges.
              Solve them at the cafe and earn loyalty points, exclusive
              discounts, and bragging rights among fellow developers.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Trophy className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Earn Loyalty Points
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Complete challenges to unlock free drinks
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Exclusive Rewards
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Access member-only events and discounts
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Code className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Level Up Skills
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Daily problems in JS, Python, and more
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Generator Card */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <div className="text-center">
                {/* QR Display */}
                <div className="w-48 h-48 mx-auto mb-6 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  {qrGenerated ? (
                    <div className="relative">
                      <QrCode className="h-32 w-32 text-foreground" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                          <Code className="h-4 w-4 text-accent-foreground" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <QrCode className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground font-mono">
                        Enter your dev handle
                      </p>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="space-y-4">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-mono">
                      @
                    </span>
                    <Input
                      type="text"
                      placeholder="your_github_handle"
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        setQrGenerated(false);
                      }}
                      className="pl-8 font-mono"
                    />
                  </div>
                  <Button
                    onClick={handleGenerate}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-mono"
                    disabled={!inputValue.trim()}
                  >
                    <QrCode className="mr-2 h-4 w-4" />
                    {"generateQR()"}
                  </Button>
                </div>

                {qrGenerated && (
                  <p className="mt-4 text-sm text-accent font-mono animate-pulse">
                    QR Generated! Scan at the cafe to start your challenge.
                  </p>
                )}

                {/* Daily Challenge Preview */}
                <div className="mt-6 p-4 bg-muted rounded-lg text-left">
                  <p className="text-xs text-muted-foreground font-mono mb-2">
                    {"// Today's Challenge Preview"}
                  </p>
                  <p className="text-sm text-foreground font-mono">
                    {"function reverseString(str) {"}
                  </p>
                  <p className="text-sm text-muted-foreground font-mono pl-4">
                    {"// Your solution here..."}
                  </p>
                  <p className="text-sm text-foreground font-mono">{"}"}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
