import { MapPin, Star, Calendar } from "lucide-react"
import Image from "next/image"

export default function DestinationsSection() {
  const destinations = [
    {
      name: "Bali",
      tag: "Tropical Paradise",
      description: "Discover pristine beaches, ancient temples, and vibrant culture in Indonesia's island gem.",
      image: "/destinations/bali.jpg",
    },
    {
      name: "Paris",
      tag: "City of Love",
      description: "Experience world-class art, cuisine, and romance in the heart of France.",
      image: "/destinations/paris.jpg",
    },
    {
      name: "Ladakh",
      tag: "Himalayan Wonder",
      description: "Journey through stunning mountain passes, serene lakes, and ancient Buddhist monasteries.",
      image: "/destinations/ladakh.jpg",
    },
    {
      name: "Tokyo",
      tag: "Modern Meets Traditional",
      description: "Immerse yourself in cutting-edge technology alongside ancient temples and traditions.",
      image: "/destinations/tokyo.jpg",
    },
  ]

  return (
    <section id="destinations" className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Popular Destinations</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Explore Amazing{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From tropical beaches to mountain peaks, discover your next adventure with curated travel experiences.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col justify-between min-h-[320px]">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-lg">
                    <Star className="w-3.5 h-3.5 text-white fill-white drop-shadow-md" />
                    <span className="text-xs font-semibold text-white drop-shadow-md">{destination.tag}</span>
                  </div>
                </div>

                {/* Title and Description */}
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-white group-hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                    {destination.name}
                  </h3>

                  <p className="text-sm text-white leading-relaxed text-pretty drop-shadow-md">
                    {destination.description}
                  </p>

                  {/* CTA Link */}
                  <div className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 drop-shadow-lg">
                    <span className="text-sm">Explore trips</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/20 bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
            <Calendar className="w-5 h-5" />
            <span>View All Destinations</span>
          </button>
        </div>
      </div>
    </section>
  )
}
