import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { CardGrid } from "@/components/card-grid"
import { CTASection } from "@/components/cta-section"

export default function SingleFamilyPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "The Residences", href: "/residences" },
          { label: "Custom Single-Family Residences" },
        ]}
        title="Custom Single-Family Homes"
        description="113 homes on 1–4 acre lots across Starkdale's most scenic neighborhoods. Choose from three architectural styles and customize every detail."
      />

      <ContentSection
        tag="500K+ Sellable SF"
        title="Your Vision, Our Expertise"
        description="Every single-family home at Starkdale begins with your vision. Select your lot, choose an architectural style, and work with our design team to create a home that reflects how you want to live — surrounded by nature, connected to community, and optimized for longevity."
        imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
        imagePlaceholder="Custom Home Design Process"
      />

      <CardGrid
        tag="Architectural Styles"
        title="Three Distinct Expressions"
        description="Each style is designed to harmonize with the Starkdale landscape while reflecting different sensibilities."
        items={[
          {
            title: "Traditional",
            description: "Classic proportions and timeless materials rooted in the Hudson Valley architectural heritage. Warm, welcoming, and elegant.",
            href: "/residences",
            imageSrc: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
            imagePlaceholder: "Traditional Style Home",
          },
          {
            title: "Modern",
            description: "Clean lines, expansive glass, and open floor plans that blur the boundary between interior and landscape.",
            href: "/residences",
            imageSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
            imagePlaceholder: "Modern Style Home",
          },
          {
            title: "Agriculture",
            description: "Inspired by the region's agrarian roots — barn-influenced forms, natural materials, and deep connection to the land.",
            href: "/residences",
            imageSrc: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
            imagePlaceholder: "Agriculture Style Home",
          },
        ]}
        columns={3}
      />

      <CTASection
        title="Start Designing Your Home"
        description="Explore available lots, choose your style, and begin the customization process."
        primaryAction={{ label: "Browse Available Lots", href: "/residences" }}
        secondaryAction={{ label: "Schedule a Consultation", href: "/contact" }}
      />
    </>
  )
}
