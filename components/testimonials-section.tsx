"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Solo Traveler",
    location: "Mumbai, India",
    image: "/indian-woman-portrait.png",
    content:
      "TripMate made planning my Europe trip so effortless. The AI-generated itinerary saved me hours of research, and the budget tracking kept me on point throughout my journey.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Digital Nomad",
    location: "San Francisco, USA",
    image: "/professional-man-portrait.png",
    content:
      "As someone who travels frequently, TripMate has become my go-to platform. The real-time updates and smart recommendations have transformed how I plan my trips.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Family Vacation Planner",
    location: "Bangalore, India",
    image: "/indian-woman-smiling.png",
    content:
      "Planning a family trip to Ladakh was stressful until I found TripMate. The collaborative features let everyone add their preferences, and we had an amazing vacation!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Adventure Enthusiast",
    location: "Singapore",
    image: "/asian-man-portrait.png",
    content:
      "The destination recommendations are spot-on! TripMate introduced me to hidden gems I would never have discovered on my own. Absolutely worth every penny.",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    role: "Business Traveler",
    location: "Delhi, India",
    image: "/indian-professional-man.png",
    content:
      "TripMate streamlined my business trips with smart itinerary planning. The integration with my calendar and automated booking reminders are game-changers.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Backpacker",
    location: "London, UK",
    image: "/woman-backpacker-portrait.jpg",
    content:
      "Best travel planning tool for budget travelers! The cost breakdown and money-saving tips helped me extend my Southeast Asia trip by two weeks.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Travelers</span>{" "}
            Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of happy travelers who have transformed their trip planning experience with TripMate
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-primary/30"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-foreground mb-6 leading-relaxed text-pretty">{testimonial.content}</p>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <p className="text-sm text-muted-foreground">Happy Travelers</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              120+
            </div>
            <p className="text-sm text-muted-foreground">Countries Covered</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              1M+
            </div>
            <p className="text-sm text-muted-foreground">Trips Planned</p>
          </div>
        </div>
      </div>
    </section>
  )
}
