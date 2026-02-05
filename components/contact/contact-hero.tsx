import { Badge } from "@/components/ui/badge";
import { MessageSquare, MapPin, Clock } from "lucide-react";

export function ContactHero() {
  return (
    <section className="py-16 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 font-mono">
            {"<Contact />"}
          </Badge>

          {/* Icons */}
          <div className="flex justify-center items-center gap-6 mb-6">
            <MapPin className="h-8 w-8 text-primary" />
            <MessageSquare className="h-10 w-10 text-accent" />
            <Clock className="h-8 w-8 text-primary" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-accent">Touch</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a question, want to host an event, or just want to say hi?
            We&apos;d love to hear from you. Drop us a message or visit our
            location.
          </p>
        </div>
      </div>
    </section>
  );
}
