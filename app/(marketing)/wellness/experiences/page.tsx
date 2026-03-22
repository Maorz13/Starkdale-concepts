import { PageHeader } from "@/components/page-header"
import { CardGrid } from "@/components/card-grid"
import { CTASection } from "@/components/cta-section"

export default function ExperiencesPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Wellness & Spa", href: "/wellness" },
          { label: "Spa Experiences" },
        ]}
        title="Spa Experiences"
        description="Thermal baths, fitness classes, beauty rituals, performances, and curated wellness goods — each designed to restore, energize, or transform."
      />

      <CardGrid
        tag="Explore"
        title="Our Experiences"
        description="Choose what your body and mind need today."
        items={[
          {
            title: "Thermal Baths",
            description: "Hot and cold immersion circuits inspired by global bathing traditions.",
            href: "/wellness/experiences/thermal-baths",
          },
          {
            title: "Classes",
            description: "Yoga, pilates, strength, and movement sessions.",
            href: "/wellness/experiences/classes",
          },
          {
            title: "Beauty Rituals",
            description: "Advanced skincare, body treatments, and rejuvenation protocols.",
            href: "/wellness/experiences/beauty-rituals",
          },
          {
            title: "Performances",
            description: "Live music, meditation sessions, and immersive wellness events.",
            href: "/wellness/experiences/performances",
          },
          {
            title: "Museum Shop",
            description: "Curated wellness products, supplements, and lifestyle goods.",
            href: "/wellness/experiences/museum-shop",
          },
        ]}
        columns={3}
      />

      <CTASection
        title="Experience the Spa"
        description="Book a spa day or schedule a visit to experience Starkdale's wellness offering firsthand."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "ROSEBAR Longevity", href: "/wellness/rosebar" }}
      />
    </>
  )
}
