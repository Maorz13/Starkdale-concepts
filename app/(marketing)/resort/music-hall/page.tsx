import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { CTASection } from "@/components/cta-section"

export default function MusicHallPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Resort", href: "/resort" },
          { label: "Music Hall" },
        ]}
        title="Music Hall"
        description="Live performances and cultural events at the heart of Starkdale's community gathering."
      />

      <ContentSection
        tag="Live Experiences"
        title="Where Sound Meets Soul"
        description="The Music Hall brings artists, musicians, and performers to Starkdale for intimate concerts, cultural celebrations, and community events. From acoustic evenings to full-scale performances, it's a place where residents and guests connect through shared experiences. Part of our 400-person Theatre and open-air Folly venues, the Music Hall anchors Starkdale's cultural programming with warmth and intention."
        imageSrc="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1200&q=80"
        imagePlaceholder="Music Hall Interior"
      />

      <CTASection
        title="Experience Live at Starkdale"
        description="Visit us to explore the Music Hall and our full cultural programming."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Explore Resort", href: "/resort" }}
      />
    </>
  )
}
