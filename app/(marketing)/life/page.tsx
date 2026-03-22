import { HeroSection } from "@/components/hero-section"
import { CardGrid } from "@/components/card-grid"
import { CTASection } from "@/components/cta-section"

export default function LifeAtStarkdalePage() {
  return (
    <>
      <HeroSection
        tag="Life at Starkdale"
        title="Community, Culture, and Connection"
        description="Where urban professionals find a second home built around shared values — nature, longevity, sustainability, and meaningful connection. A 658-acre living environment just 85 minutes from Manhattan."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Explore Residences", href: "/residences", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80"
        imagePlaceholder="Life at Starkdale"
      />

      <CardGrid
        tag="Explore"
        title="Ways to Live"
        description="From the pedestrian core of The Square to gathering venues, family play spaces, and the layers that make every day meaningful."
        items={[
          {
            title: "The Square",
            description: "Dining, cultural experiences, co-working spaces, and retail at the heart of Starkdale.",
            href: "/life/the-square",
            imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
          },
          {
            title: "Gathering Venues",
            description: "The Theatre, The Folly, and The Ballroom — spaces for performance, celebration, and connection.",
            href: "/life/gathering-venues",
            imageSrc: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
          },
          {
            title: "Play Village",
            description: "Childcare and 11 acres of sports — tennis, pickleball, bowling, basketball, soccer.",
            href: "/life/play-village",
            imageSrc: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=800&q=80",
          },
          {
            title: "Live Layers",
            description: "The Great Outdoors, fitness, ROSEBAR, social, spirituality, music, culinary, and more.",
            href: "/life/live-layers",
            imageSrc: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
          },
          {
            title: "Community Connectivity",
            description: "Smart infrastructure, health tech, mobility, and cultural platforms that keep the community connected.",
            href: "/life/community-connectivity",
            imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
          },
        ]}
        columns={3}
      />

      <CTASection
        title="Discover Life at Starkdale"
        description="Visit us to experience the community, culture, and connection that define life here."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  )
}
