import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Coffee } from "lucide-react";

const team = [
  {
    name: "Mhd kheir AL-Sweidany",
    role: "Founder & CEO",
    bio: "Former software engineer turned coffee enthusiast. 10+ years in tech, certified barista.",
    avatar: "MK",
    skills: ["Full-Stack Dev", "Coffee Roasting"],
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Ahmed tkheen",
    role: "Head Barista-Developer",
    bio: "Writes code by day, pulls espresso shots by evening. Believes debugging and brewing are the same art.",
    avatar: "AH",
    skills: ["Python", "Latte Art"],
    social: { github: "#", linkedin: "#" },
  },
  {
    name: "Shahed",
    role: "Community Manager",
    bio: "Connects developers and organizes events. Previously ran tech meetups for 5 years.",
    avatar: "SH",
    skills: ["Event Planning", "Dev Rel"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Amr",
    role: "Head of Operations",
    bio: "Keeps everything running smoothly. Background in hospitality and startup operations.",
    avatar: "AM",
    skills: ["Operations", "Strategy"],
    social: { linkedin: "#" },
  },
];

export function Team() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 font-mono">
              {"<Team />"}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A blend of tech expertise and coffee passion. Every team member is
              both a developer and a barista - because we believe in practicing
              what we preach.
            </p>
          </div>

          {/* Barista-as-Dev Concept */}
          <div className="bg-card border border-border rounded-lg p-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Coffee className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  The Barista-as-Developer Concept
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our unique approach to staffing
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every barista at Caffe Syntax has a tech background. They can help
              debug your code while making your latte. It&apos;s not just a gimmick -
              it creates genuine connections and conversations that enhance the
              community experience.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-accent/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <Avatar className="h-16 w-16 border-2 border-accent">
                      <AvatarFallback className="bg-primary text-primary-foreground font-mono text-lg">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm text-accent font-mono mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {member.bio}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-2">
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            className="p-1.5 rounded-full hover:bg-muted transition-colors"
                            aria-label={`${member.name}'s GitHub`}
                          >
                            <Github className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="p-1.5 rounded-full hover:bg-muted transition-colors"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <Linkedin className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            className="p-1.5 rounded-full hover:bg-muted transition-colors"
                            aria-label={`${member.name}'s Twitter`}
                          >
                            <Twitter className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
