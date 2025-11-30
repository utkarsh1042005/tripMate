"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 transition-all duration-300 hover:scale-105">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary to-accent shadow-lg shadow-primary/25 ring-1 ring-primary/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:ring-primary/30">
              <Plane className="h-5 w-5 text-primary-foreground transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              TripMate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="#features"
              className="group relative px-4 py-2 text-[15px] font-medium text-foreground/70 transition-all duration-200 hover:text-foreground"
            >
              <span className="relative z-10">Features</span>
              <div className="absolute inset-0 rounded-lg bg-secondary opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
              <div className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-12"></div>
            </Link>
            <Link
              href="#destinations"
              className="group relative px-4 py-2 text-[15px] font-medium text-foreground/70 transition-all duration-200 hover:text-foreground"
            >
              <span className="relative z-10">Destinations</span>
              <div className="absolute inset-0 rounded-lg bg-secondary opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
              <div className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-12"></div>
            </Link>
            <Link
              href="#pricing"
              className="group relative px-4 py-2 text-[15px] font-medium text-foreground/70 transition-all duration-200 hover:text-foreground"
            >
              <span className="relative z-10">Pricing</span>
              <div className="absolute inset-0 rounded-lg bg-secondary opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
              <div className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-12"></div>
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary to-accent px-6 py-2.5 font-semibold text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 hover:ring-primary/50">
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-all duration-200 hover:bg-secondary hover:scale-105 active:scale-95 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="animate-in slide-in-from-top-2 fade-in-0 border-t border-border/50 py-6 duration-300 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                href="#features"
                className="group relative overflow-hidden rounded-lg px-4 py-3 text-[15px] font-medium text-foreground/80 transition-all duration-200 hover:bg-secondary hover:text-foreground"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                href="#destinations"
                className="group relative overflow-hidden rounded-lg px-4 py-3 text-[15px] font-medium text-foreground/80 transition-all duration-200 hover:bg-secondary hover:text-foreground"
                onClick={toggleMenu}
              >
                Destinations
              </Link>
              <Link
                href="#pricing"
                className="group relative overflow-hidden rounded-lg px-4 py-3 text-[15px] font-medium text-foreground/80 transition-all duration-200 hover:bg-secondary hover:text-foreground"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Button
                className="group relative mt-3 overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary to-accent font-semibold text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
                onClick={toggleMenu}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
