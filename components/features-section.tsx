"use client"

import { Calendar, Wallet, RefreshCw, Sparkles } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Smart Itineraries",
    description: "AI-powered travel plans that adapt to your preferences, budget, and travel style in seconds.",
  },
  {
    icon: Wallet,
    title: "Budget Planning",
    description: "Track expenses, set budgets, and get recommendations that fit your financial goals perfectly.",
  },
  {
    icon: RefreshCw,
    title: "Real-time Updates",
    description: "Stay informed with live flight updates, weather alerts, and instant notifications for your trips.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Calendar className="w-4 h-4" />
          <span>Powerful Features</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Everything you need to plan
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            your perfect trip
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From smart itineraries to budget tracking, TripMate has all the tools you need for stress-free travel
          planning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icon container with gradient background */}
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <feature.icon className="w-7 h-7" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

            {/* Decorative gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-primary/5 -z-10 transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
