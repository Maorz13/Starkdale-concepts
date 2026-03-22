"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  {
    title: "Residences",
    href: "/residences",
    children: [
      { title: "All Residences", href: "/residences", description: "Browse the full offering of multifamily units and custom single-family homes across all neighborhoods.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=240&q=80" },
      { title: "Multifamily Residences", href: "/residences/multifamily", description: "330+ units across 600,000 sq ft — from studios to large family homes designed for community living.", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=240&q=80" },
      { title: "Custom Single-Family Homes", href: "/residences/single-family", description: "113 custom homes on 1–4 acre lots, available in Traditional, Modern, and Agricultural architectural styles.", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=240&q=80" },
      { title: "Neighborhoods", href: "/residences/neighborhoods", description: "Ten distinct districts — each with its own character, views, and relationship to the land.", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=240&q=80" },
    ],
  },
  {
    title: "Wellness & Longevity",
    href: "/wellness",
    children: [
      { title: "ROSEBAR Longevity Center", href: "/wellness/rosebar", description: "Cutting-edge longevity science, biohacking, and preventative medicine led by Dr. Mark Hyman.", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=240&q=80" },
      { title: "The Spa", href: "/wellness/spa", description: "100,000 sq ft of thermal therapy, fitness, and restorative treatments at the heart of Starkdale.", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=240&q=80" },
    ],
  },
  {
    title: "Live Layers",
    href: "/life/live-layers",
    children: [
      { title: "The Great Outdoors", href: "/life/live-layers/outdoors", description: "22 km of trails, a 10-acre lake, Basecamp adventures, and year-round outdoor programming.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=240&q=80" },
      { title: "Fitness", href: "/life/live-layers/fitness", description: "Classes, equipment, trail running, and sports courts designed for a health-forward lifestyle.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=240&q=80" },
      { title: "ROSEBAR", href: "/wellness/rosebar", description: "Science-backed health optimization, biohacking, and personalized longevity programs.", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=240&q=80" },
      { title: "Social", href: "/life/live-layers/social", description: "Community events, neighborhood dinners, and shared experiences that build lasting bonds.", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=240&q=80" },
      { title: "Spirituality", href: "/life/live-layers/spirituality", description: "Meditation, yoga, breathwork, and nature immersion for inner wellbeing and longevity.", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=240&q=80" },
      { title: "Music", href: "/life/live-layers/music", description: "Live performances and music programming across The Music Hall and the open-air Folly.", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=240&q=80" },
      { title: "Culinary", href: "/life/live-layers/culinary", description: "Farm-to-table dining, communal kitchens, and a food culture rooted in nourishment.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=240&q=80" },
      { title: "Charity", href: "/life/live-layers/charity", description: "Purpose-driven programming and opportunities to give back to the community and environment.", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=240&q=80" },
      { title: "Arts", href: "/life/live-layers/arts", description: "Galleries, artist residencies, workshops, and public art woven into daily life.", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=240&q=80" },
      { title: "Design & Sustainability", href: "/life/live-layers/design", description: "Eco-conscious architecture, smart infrastructure, and buildings built to last.", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=240&q=80" },
    ],
  },
  {
    title: "Resort",
    href: "/resort",
    children: [
      { title: "The Resort", href: "/resort", description: "214-key resort with suites, cabins, and Onsen villas for guests and extended stays.", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=240&q=80" },
      { title: "Accommodation", href: "/resort/lodging", description: "Browse lodging options — from resort suites to private lakeside cabins.", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=240&q=80" },
    ],
  },
  {
    title: "Community",
    href: "/community",
    children: [
      { title: "The Square", href: "/community/the-square", description: "70,000 sq ft of walkable dining, retail, and cultural spaces at the heart of Starkdale.", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=240&q=80" },
      { title: "Play Village", href: "/community/play-village", description: "Ultimate childcare experiences and 11 acres of sports facilities for families.", image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=240&q=80" },
      { title: "Gathering Venues", href: "/community/gathering-venues", description: "A 400-person Theater, open-air Folly, and transformable Ballroom for events and performances.", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=240&q=80" },
      { title: "Community Connectivity", href: "/community/connectivity", description: "Smart platforms and technology that keep the Starkdale community seamlessly connected.", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=240&q=80" },
    ],
  },
  {
    title: "Our Vision",
    href: "/vision",
    children: [
      { title: "Our Vision / Philosophy", href: "/vision", description: "The ideas, values, and long-term thinking behind Starkdale's design and community.", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=240&q=80" },
    ],
  },
  {
    title: "My Starkdale",
    href: "/profile",
    children: [
      { title: "My Profile", href: "/profile/details", description: "Manage your personal details, preferences, and account settings.", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=240&q=80" },
      { title: "Saved Properties", href: "/profile/saved-properties", description: "View and compare the residences you've bookmarked.", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=240&q=80" },
      { title: "My Proposals", href: "/profile/proposals", description: "Track active purchase proposals and financing conversations.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=240&q=80" },
      { title: "My Visits", href: "/profile/visits", description: "Manage your scheduled site visits and past appointments.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=240&q=80" },
    ],
  },
]

function MegaMenuContent({ children }: { children: { title: string; href: string; description: string; image: string }[] }) {
  const [hovered, setHovered] = useState<string | null>(null)
  const [lastHovered, setLastHovered] = useState<string | null>(null)
  const hoveredItem = children.find((c) => c.title === hovered)
  const displayedItem = hoveredItem ?? children.find((c) => c.title === lastHovered)

  return (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex gap-1">
        {children.map((child) => (
          <NavigationMenuLink asChild key={child.href}>
            <Link
              href={child.href}
              onMouseEnter={() => { setHovered(child.title); setLastHovered(child.title) }}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "select-none rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap no-underline outline-none transition-all duration-150 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                hovered === child.title && "bg-accent text-accent-foreground"
              )}
            >
              {child.title}
            </Link>
          </NavigationMenuLink>
        ))}
      </div>
      <div className={cn(
        "overflow-hidden transition-all duration-200 ease-out",
        hoveredItem ? "mt-2 border-t pt-3 pb-4 h-[164px]" : "h-0"
      )}>
        <div className={cn(
          "flex items-center gap-4 transition-all duration-200 ease-out",
          hoveredItem ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        )}>
          <img
            src={displayedItem?.image ?? ""}
            alt={displayedItem?.title ?? ""}
            className="size-[120px] shrink-0 rounded-md object-cover"
          />
          <p className="text-sm text-muted-foreground line-clamp-2">
            {displayedItem?.description ?? ""}
          </p>
        </div>
      </div>
    </div>
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 backdrop-blur-xl bg-black/5 transition-opacity duration-300 ease-in-out",
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />
      <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">Starkdale</span>
        </Link>

        <NavigationMenu viewport={false} className="hidden lg:flex" onValueChange={(val) => setMenuOpen(!!val)}>
          <NavigationMenuList>
            {NAV_ITEMS.map((item) =>
              item.children.length === 0 ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="text-sm px-3 transition-transform duration-150 hover:-translate-y-0.5">{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent className="!fixed !left-0 !top-16 !w-screen !mt-0 !rounded-none !shadow-none !z-50 border-t data-open:slide-in-from-top-2 data-open:!duration-200 data-closed:slide-out-to-top-2 data-closed:!duration-150">
                    <MegaMenuContent children={item.children} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link href="/explore">Explore Starkdale</Link>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm flex flex-col">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                    <span className="font-semibold">Starkdale</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 p-4 overflow-y-auto flex-1">
                {NAV_ITEMS.filter((item) => item.children.length === 0).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium"
                  >
                    {item.title}
                  </Link>
                ))}
                <Accordion type="multiple" className="w-full">
                  {NAV_ITEMS.filter((item) => item.children.length > 0).map((item) => (
                    <AccordionItem key={item.title} value={item.title}>
                      <AccordionTrigger className="text-sm font-medium">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-2 pl-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="flex flex-col gap-2 pt-2 border-t">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/explore" onClick={() => setMobileOpen(false)}>
                      Explore Starkdale
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    </>
  )
}
