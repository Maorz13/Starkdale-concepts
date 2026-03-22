import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { Badge } from "@/components/ui/badge"

const NEIGHBORHOODS: Record<
  string,
  { name: string; units: string; description: string; highlights: string[]; aerialImage: string; lifestyleImage: string }
> = {
  cascades: {
    name: "Cascades",
    units: "74 units",
    description:
      "Nestled among natural water features and lush greenery, Cascades offers a serene living experience with direct trail access and proximity to the Spa.",
    highlights: [
      "Natural water features throughout",
      "Direct access to 22 km trail network",
      "Walking distance to the Spa",
      "Mix of multifamily and townhome styles",
    ],
    aerialImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1400&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&q=80",
  },
  "private-reserve": {
    name: "Private Reserve",
    units: "10 homesites",
    description:
      "The most exclusive enclave at Starkdale, Private Reserve offers just 10 homesites on expansive lots with maximum privacy and custom architectural freedom.",
    highlights: [
      "Lots up to 4 acres",
      "Full custom architectural freedom",
      "Maximum privacy and seclusion",
      "Premium old-growth surroundings",
    ],
    aerialImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1400&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
  },
  "base-camp": {
    name: "Base Camp",
    units: "Adventure hub",
    description:
      "The gateway to Starkdale's outdoor recreation — Base Camp is where trails begin, adventure races start, and nature hikes launch year-round.",
    highlights: [
      "Trailhead access point",
      "Adventure race staging area",
      "Winter sports equipment hub",
      "Nature education programs",
    ],
    aerialImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80",
  },
  "the-square": {
    name: "The Square",
    units: "115 units + 22 keys",
    description:
      "The pedestrian core of Starkdale, The Square combines 70K SF of retail and dining with 55K SF of cultural and co-working space, generating ~34K annual local visitors.",
    highlights: [
      "70K SF retail and dining",
      "55K SF cultural and co-working",
      "Car-free pedestrian environment",
      "Community gathering focal point",
    ],
    aerialImage: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1400&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
  },
  "the-resort": {
    name: "The Resort",
    units: "170 keys",
    description:
      "Home to the resort experience — 170 keys spanning suites, cabins, and villas, all immersed in Starkdale's longevity-focused hospitality.",
    highlights: [
      "Resort Wing and Spa Wing Suites",
      "Resort and Spa Cabins",
      "Onsen Villas",
      "Full resort amenity access",
    ],
    aerialImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
  },
  "west-ridge": {
    name: "West Ridge",
    units: "103 units",
    description:
      "Sweeping valley views define West Ridge, where 103 units sit along the western ridgeline with stunning sunset panoramas.",
    highlights: [
      "Western sunset views",
      "Ridgeline elevation",
      "Mixed housing types",
      "Connected to central trail loop",
    ],
    aerialImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1400&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
  },
  lakeside: {
    name: "Lakeside",
    units: "22 keys",
    description:
      "On the shores of Starkdale's 10-acre recreational lake, Lakeside offers water-forward living with direct access to kayaking, paddle boarding, swimming, and fishing.",
    highlights: [
      "Direct lake access",
      "5K SF beach barn",
      "Water sports equipment",
      "Biking and walking paths",
    ],
    aerialImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1499363536502-87642509e31b?w=1200&q=80",
  },
  "play-village": {
    name: "Play Village",
    units: "39 units",
    description:
      "Family-oriented living adjacent to 11 acres of sports facilities — tennis, pickleball, bowling, indoor basketball, and soccer — plus childcare services.",
    highlights: [
      "11 acres of sports facilities",
      "Childcare services",
      "Tennis and pickleball courts",
      "Indoor basketball and bowling",
    ],
    aerialImage: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=1400&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=1200&q=80",
  },
  "east-ridge": {
    name: "East Ridge",
    units: "118 units",
    description:
      "Morning sun and eastern exposure define East Ridge, where 118 units enjoy bright, energy-efficient living along the community's eastern boundary.",
    highlights: [
      "Eastern morning sun exposure",
      "118 residences",
      "Energy-efficient orientation",
      "Trail network access",
    ],
    aerialImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80",
  },
  "the-crescent": {
    name: "The Crescent",
    units: "18 units",
    description:
      "A small, architecturally distinct collection of 18 premium homes arranged along a gentle curve, offering a boutique neighborhood experience.",
    highlights: [
      "Just 18 premium homes",
      "Distinctive curved layout",
      "Boutique community feel",
      "Premium finishes standard",
    ],
    aerialImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&q=80",
    lifestyleImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const neighborhood = NEIGHBORHOODS[slug]
  if (!neighborhood) notFound()

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "The Residences", href: "/residences" },
          { label: "Neighborhoods", href: "/residences/neighborhoods" },
          { label: neighborhood.name },
        ]}
        title={neighborhood.name}
        description={neighborhood.description}
      >
        <Badge variant="secondary" className="mt-4">
          {neighborhood.units}
        </Badge>
      </PageHeader>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-xl bg-muted">
            <Image
              src={neighborhood.aerialImage}
              alt={`${neighborhood.name} Neighborhood Aerial View`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <ContentSection
        tag="Highlights"
        title={`Living in ${neighborhood.name}`}
        description={neighborhood.description}
        imageSrc={neighborhood.lifestyleImage}
        imagePlaceholder={`${neighborhood.name} Lifestyle`}
      >
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {neighborhood.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="size-1.5 rounded-full bg-primary" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button asChild>
            <Link href="/residences">Browse Available Homes</Link>
          </Button>
        </div>
      </ContentSection>

      <CTASection
        title={`Discover ${neighborhood.name}`}
        description="Visit us to walk the grounds and see available homes in person."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "All Neighborhoods", href: "/residences/neighborhoods" }}
      />
    </>
  )
}
