"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, ChevronRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary-rgb)/0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--accent-rgb)/0.1)_0%,transparent_50%)]"></div>

      <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                AI-Powered Travel Planning
              </div>

              {/* Heading */}
              <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Plan Your Dream{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                    Adventure
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-accent/30"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10C49.5 3 150.5 3 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                in Minutes
              </h1>

              {/* Subheading */}
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-xl">
                Create personalized itineraries with AI assistance. Discover hidden gems, book accommodations, and
                explore the world with confidence. Your perfect journey starts here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary to-accent px-8 py-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 hover:ring-primary/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Plan a Trip
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group rounded-xl border-2 border-border px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/5 bg-transparent"
              >
                <span className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                    <Play className="h-4 w-4 fill-primary text-primary" />
                  </div>
                  Watch Demo
                </span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary to-accent"></div>
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-accent to-primary"></div>
                  <div className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary via-accent to-primary"></div>
                </div>
                <span className="font-medium">10,000+ travelers trust us</span>
              </div>
            </div>
          </div>

          <div className="relative lg:flex lg:items-center lg:justify-end">
            {/* Decorative elements */}
            <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-accent/20 blur-3xl"></div>

            {/* Itinerary Card */}
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-2xl backdrop-blur-sm">
                {/* Card Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Tokyo Adventure</h3>
                    <p className="mt-1 text-sm text-muted-foreground">7-day journey through Japan</p>
                  </div>
                  <div className="rounded-lg bg-primary/10 px-3 py-1.5">
                    <span className="text-sm font-semibold text-primary">AI Generated</span>
                  </div>
                </div>

                {/* Itinerary Items */}
                <div className="space-y-4">
                  {/* Day 1 */}
                  <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-muted/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-muted/50">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-foreground">Day 1: Arrival</h4>
                          <span className="text-xs text-muted-foreground">Mon, Jun 15</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Shibuya Crossing & Tokyo Tower</p>
                      </div>
                    </div>
                  </div>

                  {/* Day 2 */}
                  <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-muted/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-muted/50">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary text-accent-foreground shadow-lg">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-foreground">Day 2: Culture</h4>
                          <span className="text-xs text-muted-foreground">Tue, Jun 16</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Senso-ji Temple & Asakusa</p>
                      </div>
                    </div>
                  </div>

                  {/* Day 3 */}
                  <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-muted/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-muted/50">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground shadow-lg">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-foreground">Day 3: Adventure</h4>
                          <span className="text-xs text-muted-foreground">Wed, Jun 17</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Mount Fuji Day Trip</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 flex items-center justify-between rounded-lg bg-primary/5 p-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Estimated Budget</p>
                    <p className="text-2xl font-bold text-foreground">$2,450</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg border-primary/30 transition-all duration-300 hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    View Full Plan
                  </Button>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-4 -top-4 rounded-xl border border-border/50 bg-card p-3 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-xs font-semibold text-foreground">Live Planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
