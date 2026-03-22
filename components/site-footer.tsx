import Link from "next/link"
import { Leaf } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"
import { Separator } from "@/components/ui/separator"

const FOOTER_SECTIONS = [
  {
    title: "Residences",
    links: [
      { title: "Explore All", href: "/residences" },
      { title: "Neighborhoods", href: "/residences/neighborhoods" },
      { title: "Multifamily", href: "/residences/multifamily" },
      { title: "Single-Family", href: "/residences/single-family" },
      { title: "Financing", href: "/residences/financing" },
    ],
  },
  {
    title: "Wellness & Resort",
    links: [
      { title: "The Spa", href: "/wellness" },
      { title: "ROSEBAR Longevity", href: "/wellness/rosebar" },
      { title: "Spa Experiences", href: "/wellness/experiences" },
      { title: "The Resort", href: "/resort" },
      { title: "Lodging Options", href: "/resort/lodging" },
    ],
  },
  {
    title: "Life at Starkdale",
    links: [
      { title: "The Square", href: "/life/the-square" },
      { title: "Gathering Venues", href: "/life/gathering-venues" },
      { title: "Play Village", href: "/life/play-village" },
      { title: "Live Layers", href: "/life/live-layers" },
      { title: "Community", href: "/life/community-connectivity" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Our Vision", href: "/vision" },
      { title: "About Us", href: "/vision/about" },
      { title: "Contact Us", href: "/contact" },
      { title: "Explore Starkdale", href: "/explore" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Leaf className="size-4" />
              </div>
              <span className="text-lg font-semibold tracking-tight">Starkdale</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A living environment on 658 acres in Upstate New York, designed to
              extend lifespan and healthspan through community, nature, and
              longevity science.
            </p>
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">Stay in the loop</p>
              <NewsletterForm />
            </div>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Starkdale Farms. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="text-xs text-muted-foreground hover:text-foreground">
              Accessibility
            </Link>
            <Link href="/legal" className="text-xs text-muted-foreground hover:text-foreground">
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
