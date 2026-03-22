import { notFound } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { CTASection } from "@/components/cta-section"

const LODGING_TYPES: Record<
  string,
  { name: string; description: string; capacity: string; highlights: string[]; imageSrc: string }
> = {
  "resort-wing-suites": {
    name: "Resort Wing Suites",
    description:
      "Contemporary suites in the heart of resort life, offering convenience and style with full access to Music Hall, fitness, and the broader Starkdale community.",
    capacity: "Suites",
    highlights: [
      "Central resort location",
      "Full resort amenity access",
      "Steps from Music Hall and fitness",
      "Designed for short and extended stays",
    ],
    imageSrc: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
  },
  "resort-cabins": {
    name: "Resort Cabins",
    description:
      "Rustic cabins blend natural materials with resort comfort, offering a woodsy retreat while keeping full access to resort programming and amenities.",
    capacity: "Cabins",
    highlights: [
      "Rustic charm with modern comfort",
      "Full resort amenity access",
      "Proximity to trails and nature",
      "Ideal for families and groups",
    ],
    imageSrc: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1200&q=80",
  },
  "spa-wing-suites": {
    name: "Spa Wing Suites",
    description:
      "Suites steps from the spa and ROSEBAR Longevity Center, designed for guests who want wellness at the center of their stay.",
    capacity: "Suites",
    highlights: [
      "Direct spa and ROSEBAR access",
      "Longevity-focused design",
      "Thermal bath proximity",
      "Restorative stay experience",
    ],
    imageSrc: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80",
  },
  "spa-cabins": {
    name: "Spa Cabins",
    description:
      "Cabins immersed in wellness and thermal access, where rustic living meets cutting-edge longevity programming.",
    capacity: "Cabins",
    highlights: [
      "Spa and thermal access",
      "ROSEBAR programming nearby",
      "Nature-forward setting",
      "Recovery and rejuvenation focus",
    ],
    imageSrc: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&q=80",
  },
  "onsen-villas": {
    name: "Onsen Villas",
    description:
      "Japanese-inspired villas with private onsen, offering the highest level of privacy and thermal therapy within a single accommodation.",
    capacity: "Villas",
    highlights: [
      "Private onsen in each villa",
      "Maximum privacy and tranquility",
      "Japanese bathing traditions",
      "Premium wellness experience",
    ],
    imageSrc: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=1200&q=80",
  },
  "starkdale-bnb-keys": {
    name: "Starkdale BNB Keys",
    description:
      "Flexible BNB program for extended stays, blending the familiarity of home with full access to Starkdale's resort and wellness offerings.",
    capacity: "Keys",
    highlights: [
      "Flexible extended-stay option",
      "Full community and amenity access",
      "Ideal for trial stays and relocation",
      "Integrated with Starkdale lifestyle",
    ],
    imageSrc: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  "historic-home-keys": {
    name: "Historic Home Keys",
    description:
      "Keys to restored historic homes on the Starkdale grounds, where heritage architecture meets contemporary comfort and community access.",
    capacity: "Keys",
    highlights: [
      "Restored historic homes",
      "Unique architectural character",
      "Full resort and community access",
      "Heritage meets modern living",
    ],
    imageSrc: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80",
  },
  "annex-keys": {
    name: "Annex Keys",
    description:
      "Additional flexible lodging options that extend the Starkdale stay experience with variety and adaptability for different guest needs.",
    capacity: "Keys",
    highlights: [
      "Flexible accommodation format",
      "Full resort and community access",
      "Varied layouts and configurations",
      "Extended-stay friendly",
    ],
    imageSrc: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80",
  },
}

export default async function LodgingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const lodging = LODGING_TYPES[slug]
  if (!lodging) notFound()

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Resort", href: "/resort" },
          { label: "Lodging Options", href: "/resort/lodging" },
          { label: lodging.name },
        ]}
        title={lodging.name}
        description={lodging.description}
      />

      <ContentSection
        tag={lodging.capacity}
        title={`Highlights of ${lodging.name}`}
        description={lodging.description}
        imageSrc={lodging.imageSrc}
        imagePlaceholder={`${lodging.name} Imagery`}
      >
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {lodging.highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <div className="size-1.5 rounded-full bg-primary" />
              {h}
            </li>
          ))}
        </ul>
      </ContentSection>

      <CTASection
        title={`Experience ${lodging.name}`}
        description="Visit us or inquire about availability for this lodging type."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "All Lodging Options", href: "/resort/lodging" }}
      />
    </>
  )
}
