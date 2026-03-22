import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { CardGrid } from "@/components/card-grid"
import { CTASection } from "@/components/cta-section"

export default function RetreatsPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Wellness & Spa", href: "/wellness" },
          { label: "ROSEBAR", href: "/wellness/rosebar" },
          { label: "Retreats" },
        ]}
        title="Immersive Programs & Retreats"
        description="Multi-day experiences designed for deep transformation — combining longevity science, holistic healing, and nature immersion."
      />

      <ContentSection
        tag="Designed for Transformation"
        title="Multi-Day Retreats for Lasting Change"
        description="Our immersive programs take you beyond a single treatment. Over days or a week, you work with our longevity experts, experience advanced diagnostics, biohacking therapies, and bespoke nutrition — all while surrounded by Starkdale's 658 acres of nature. Whether you seek a weekend reset or an intensive week-long transformation, each retreat is crafted to create measurable shifts in health, energy, and clarity."
        imageSrc="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80"
        imagePlaceholder="Retreat Experience"
      />

      <CardGrid
        tag="Programs"
        title="Retreat Programs"
        description="Choose the depth and duration that fits your goals."
        items={[
          {
            title: "7-Day Longevity Reset",
            description: "Full-body optimization with advanced diagnostics, personalized protocols, and daily treatments.",
            href: "/contact",
            imageSrc: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
          },
          {
            title: "Weekend Detox",
            description: "A focused 2-night reset: thermal circuits, IV therapy, nutrition consultations, and mindfulness.",
            href: "/contact",
            imageSrc: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
          },
          {
            title: "Mind-Body Intensive",
            description: "Five days integrating biohacking, movement, breathwork, and spiritual wellbeing practices.",
            href: "/contact",
            imageSrc: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
          },
          {
            title: "Executive Renewal",
            description: "Tailored for high-performers: compressed protocols, private sessions, and quick recovery focus.",
            href: "/contact",
            imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
          },
        ]}
        columns={4}
      />

      <CTASection
        title="Reserve Your Place"
        description="Connect with our team to learn about dates, availability, and program details for your chosen retreat."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Explore ROSEBAR", href: "/wellness/rosebar" }}
      />
    </>
  )
}
