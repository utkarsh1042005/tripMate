import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">© 2025 TripMate. All rights reserved.</p>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Terms
            </Link>
            <Link href="/support" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Support
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
