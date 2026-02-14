"use client";

import { useEffect, useRef, useState } from "react";

export function AboutVideo() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`py-20 bg-background transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">

                        {/* Video */}
                        <video
                            src="/videos/about.MP4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="
                w-full
                h-[220px]
                sm:h-[320px]
                md:h-[420px]
                lg:h-[520px]
                object-cover
                scale-105
                animate-[slowZoom_20s_linear_infinite]
              "
                        />

                        {/* Cinematic Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

                    </div>

                </div>
            </div>
        </section>
    );
}