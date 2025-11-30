"use client"

import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Explorer",
    price: "Free",
    period: "Forever",
    description: "Perfect for casual travelers planning their first adventure",
    features: [
      "Up to 3 trip plans per month",
      "Basic itinerary builder",
      "Weather forecasts",
      "Destination guides",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Nomad",
    price: "₹499",
    period: "per month",
    description: "Ideal for frequent travelers who want advanced planning tools",
    features: [
      "Unlimited trip plans",
      "AI-powered recommendations",
      "Budget tracking & optimization",
      "Real-time flight & hotel alerts",
      "Collaborative trip planning",
      "Priority customer support",
      "Offline access to itineraries",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "GlobeTrotter",
    price: "Custom",
    period: "Contact us",
    description: "Tailored solutions for travel agencies and businesses",
    features: [
      "Everything in Nomad",
      "Custom integrations",
      "Dedicated account manager",
      "White-label solutions",
      "Advanced analytics",
      "Team collaboration tools",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Choose Your Perfect{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Travel Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Start planning your dream trips with flexible pricing options designed for every type of traveler
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`relative group ${plan.popular ? "md:-mt-4 md:scale-105" : ""}`}>
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold shadow-lg animate-pulse">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 ease-out ${
                  plan.popular
                    ? "bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-2 border-transparent shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
                    : "bg-card/50 border border-border hover:border-primary/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
                }`}
                style={
                  plan.popular
                    ? {
                        backgroundImage:
                          "linear-gradient(white, white), linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                      }
                    : undefined
                }
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 transition-transform duration-300 group-hover:scale-105">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 transition-transform duration-300 group-hover:scale-105">
                      <span
                        className={`text-5xl font-bold ${plan.popular ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" : ""}`}
                      >
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 transition-all duration-300 group-hover:translate-x-1"
                        style={{ transitionDelay: `${index * 30}ms` }}
                      >
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 ${
                            plan.popular
                              ? "bg-gradient-to-br from-primary to-accent group-hover:scale-110"
                              : "bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110"
                          }`}
                        >
                          <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-primary"}`} />
                        </div>
                        <span className="text-sm text-foreground/80 group-hover:text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`relative w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 overflow-hidden ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-[1.05] active:scale-[0.98]"
                        : "bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20 hover:border-primary hover:scale-[1.05] active:scale-[0.98]"
                    }`}
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <span className="relative z-10">{plan.cta}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans include 14-day money-back guarantee. No credit card required for free plan.
        </p>
      </div>
    </section>
  )
}
