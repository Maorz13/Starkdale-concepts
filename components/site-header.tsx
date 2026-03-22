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
      { title: "All Residences", href: "/residences" },
      { title: "Multifamily Residences", href: "/residences/multifamily" },
      { title: "Custom Single-Family Homes", href: "/residences/single-family" },
      { title: "Neighborhoods", href: "/residences/neighborhoods" },
      { title: "Financing & Mortgage Tools", href: "/residences/financing" },
    ],
  },
  {
    title: "Wellness & Longevity",
    href: "/wellness",
    children: [
      { title: "ROSEBAR Longevity Center", href: "/wellness/rosebar" },
      { title: "The Spa", href: "/wellness/spa" },
    ],
  },
  {
    title: "Live Layers",
    href: "/life/live-layers",
    children: [
      { title: "The Great Outdoors", href: "/life/live-layers/outdoors" },
      { title: "Fitness", href: "/life/live-layers/fitness" },
      { title: "ROSEBAR", href: "/wellness/rosebar" },
      { title: "Social", href: "/life/live-layers/social" },
      { title: "Spirituality", href: "/life/live-layers/spirituality" },
      { title: "Music", href: "/life/live-layers/music" },
      { title: "Culinary", href: "/life/live-layers/culinary" },
      { title: "Charity", href: "/life/live-layers/charity" },
      { title: "Arts", href: "/life/live-layers/arts" },
      { title: "Design & Sustainability", href: "/life/live-layers/design" },
    ],
  },
  {
    title: "Resort",
    href: "/resort",
    children: [
      { title: "The Resort", href: "/resort" },
      { title: "Accommodation", href: "/resort/lodging" },
    ],
  },
  {
    title: "Community",
    href: "/community",
    children: [
      { title: "The Square", href: "/community/the-square" },
      { title: "Play Village", href: "/community/play-village" },
      { title: "Gathering Venues", href: "/community/gathering-venues" },
      { title: "Community & Technology", href: "/community/connectivity" },
    ],
  },
  {
    title: "Our Vision",
    href: "/vision",
    noDropdown: true,
    children: [],
  },
  {
    title: "My Starkdale",
    href: "/profile",
    noDropdown: true,
    children: [],
  },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight">Starkdale</span>
        </Link>

        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList>
            {NAV_ITEMS.map((item) =>
              item.noDropdown ? (
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
                  <NavigationMenuTrigger className="text-sm">{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-max p-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={child.href}
                              className="block select-none whitespace-nowrap rounded-md px-3 py-2.5 text-sm leading-snug no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {child.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
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
                {NAV_ITEMS.filter((item) => item.noDropdown).map((item) => (
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
                  {NAV_ITEMS.filter((item) => !item.noDropdown).map((item) => (
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
  )
}
