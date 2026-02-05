"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What tech amenities do you offer?",
    answer:
      "Every seat has access to power outlets. We have gigabit WiFi, standing desk options, monitor rental for extended work sessions, and quiet zones for focused coding. We also have meeting rooms available for team sessions.",
  },
  {
    question: "Do I need to be a developer to visit?",
    answer:
      "Not at all! While we're designed with developers in mind, everyone is welcome. Our coffee is great regardless of your profession, and our community events often include non-technical creative workshops too.",
  },
  {
    question: "How do I join your community events?",
    answer:
      "Check our Events page for the full calendar. Most events are free for members and have a small fee for non-members. Registration opens one week before each event. Sign up for our newsletter to get early access.",
  },
  {
    question: "Do you offer WiFi password-free access?",
    answer:
      "Yes! Our WiFi is open with a simple splash page. For enhanced security needs, we also offer a VPN-ready network for enterprise customers and members.",
  },
  {
    question: "Can I host my own tech meetup here?",
    answer:
      "Absolutely! We love hosting community events. Contact us with your event details and we'll work out the logistics. We offer special rates for non-profits and student organizations.",
  },
  {
    question: "What are your membership options?",
    answer:
      "We offer three tiers: Free (newsletter + event access), Pro ($29/month - priority seating, member discounts, free event entry), and Enterprise (custom pricing for companies).",
  },
  {
    question: "Are your beans ethically sourced?",
    answer:
      "Yes, we only work with farms that practice sustainable agriculture and pay fair wages. We visit our partner farms annually and publish transparency reports on our sourcing practices.",
  },
  {
    question: "Do you have locations outside the main cafe?",
    answer:
      "We're currently operating our flagship location and running pop-ups at tech conferences. Check our social media for pop-up announcements. Permanent expansion is planned for 2027.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono">
              {"<FAQ />"}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about Caffe Syntax and our tech amenities.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-accent/50"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our team is happy to help with any other inquiries.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-accent hover:underline"
            >
              {"contact.us()"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
