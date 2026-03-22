import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { CardGrid } from "@/components/card-grid"
import { CTASection } from "@/components/cta-section"

export default function ResortPage() {
  return (
    <>
      <HeroSection
        tag="Resort"
        title="The Starkdale Resort"
        description="Experience the lifestyle before making it home. 214 keys across suites, cabins, villas, and our Starkdale BNB program — all immersed in the same longevity-focused community, just 85 minutes from Manhattan."
        actions={[
          { label: "Explore Lodging", href: "/resort/lodging" },
          { label: "Contact Us", href: "/contact", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
        imagePlaceholder="Resort Overview"
      />

      <ContentSection
        tag="The Resort"
        title="Stay Before You Stay"
        description="Our resort isn't just a preview — it's the full Starkdale experience. From the Music Hall's live performances to our state-of-the-art fitness center and eight distinct lodging options, guests immerse themselves in the same wellness-forward, community-centered lifestyle our residents call home. Located on 658 acres in Upstate NY, an hour and twenty-five minutes from Manhattan."
        imageSrc="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80"
        imagePlaceholder="Resort Experience"
      />

      <CardGrid
        tag="Explore"
        title="Resort Amenities & Lodging"
        description="Discover live performances, fitness facilities, and accommodation options designed for every style of stay."
        items={[
          {
            title: "Music Hall",
            description: "Live performances and cultural events",
            href: "/resort/music-hall",
            imageSrc: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
          },
          {
            title: "Fitness",
            description: "State-of-the-art fitness facilities and programming",
            href: "/resort/fitness",
            imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
          },
          {
            title: "Lodging Options",
            description: "Suites, cabins, villas, and BNB keys",
            href: "/resort/lodging",
            imageSrc: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
          },
        ]}
        columns={3}
      />

      <CTASection
        title="Experience the Resort"
        description="Book a stay or schedule a visit to immerse yourself in the Starkdale lifestyle before making it home."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Explore Lodging", href: "/resort/lodging" }}
      />
    </>
  )
}
