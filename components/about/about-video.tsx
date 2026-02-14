











export function AboutVideo() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">

                    {/* 16:9 Container */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-xl">

                        <video
                            src="/videos/about.MP4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                        />

                    </div>

                </div>
            </div>
        </section>
    );
}