import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Wifi,
  Plug,
  Coffee,
  Github,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const hours = [
  { day: "Monday - Friday", time: "7:00 AM - 10:00 PM" },
  { day: "Saturday", time: "8:00 AM - 11:00 PM" },
  { day: "Sunday", time: "8:00 AM - 8:00 PM" },
];

const amenities = [
  { icon: Wifi, label: "Gigabit WiFi" },
  { icon: Plug, label: "Power at every seat" },
  { icon: Coffee, label: "Unlimited refills (members)" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/mhdkhier24-collab", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function LocationInfo() {
  return (
    <div>
      <Badge variant="outline" className="mb-4 font-mono">
        {"<Location />"}
      </Badge>
      <h2 className="text-2xl font-bold text-foreground mb-6">Visit Us</h2>

      {/* Map Placeholder */}
      <Card className="bg-card border-border mb-6 overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-accent mx-auto mb-2" />
            <p className="text-sm text-muted-foreground font-mono">
              {"// Interactive map coming soon"}
            </p>
          </div>
        </div>
      </Card>

      {/* Contact Info Cards */}
      <div className="space-y-4">
        {/* Address */}
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-sm text-muted-foreground">
                  123 Tech Boulevard, Suite 100
                  <br />
                  Innovation District
                  <br />
                  daraa, izraa
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hours */}
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <div className="space-y-1">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="text-foreground font-mono">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a
                    href="tel:+14155551234"
                    className="text-sm text-muted-foreground hover:text-accent"
                  >
                    (415) 555-1234
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:hello@caffesyntax.com"
                    className="text-sm text-muted-foreground hover:text-accent"
                  >
                    hello@caffesyntax.com
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Amenities */}
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-3">Tech Amenities</h3>
            <div className="flex flex-wrap gap-3">
              {amenities.map((amenity) => (
                <div
                  key={amenity.label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <amenity.icon className="h-4 w-4 text-accent" />
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-3">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
