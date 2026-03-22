import { PageHeader } from "@/components/page-header"
import { CardGrid } from "@/components/card-grid"
import { CTASection } from "@/components/cta-section"

export default function GatheringVenuesPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Life at Starkdale", href: "/life" },
          { label: "Gathering Venues" },
        ]}
        title="Gathering Venues"
        description="Spaces for performance, celebration, and connection. From intimate evenings to large-scale events, our venues are designed to bring the community together."
      />

      <CardGrid
        tag="Venues"
        title="Spaces to Gather"
        description="Three distinct venues — each with its own character and capacity — for concerts, celebrations, talks, and community events."
        items={[
          {
            title: "The Theatre",
            description: "A 400-person venue for live performances, screenings, talks, and cultural events. State-of-the-art acoustics and immersive experiences.",
            href: "#",
          },
          {
            title: "The Folly",
            description: "A 320-seat open-air venue where nature meets performance. Concerts, gatherings, and events under the sky.",
            href: "#",
          },
          {
            title: "The Ballroom",
            description: "A transformable space for celebrations, galas, and large community events. Flexible design adapts to the occasion.",
            href: "#",
          },
        ]}
        columns={3}
      />

      <CTASection
        title="Host or Attend"
        description="Visit us to tour our gathering venues and see how Starkdale comes together for performance, celebration, and connection."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Explore The Square", href: "/life/the-square" }}
      />
    </>
  )
}
