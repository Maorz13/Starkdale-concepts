import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import {
  Snowflake,
  Wind,
  Syringe,
  Sun,
  Zap,
} from "lucide-react"

export default function BiohackingPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Wellness & Spa", href: "/wellness" },
          { label: "ROSEBAR", href: "/wellness/rosebar" },
          { label: "Biohacking" },
        ]}
        title="Biohacking & Advanced Therapies"
        description="Science-backed interventions to optimize cellular health, recovery, and performance — available within your community."
      />

      <ContentSection
        tag="Our Philosophy"
        title="Optimize, Don&apos;t Just Maintain"
        description="Biohacking at ROSEBAR means applying the latest longevity science to your daily life. We offer proven therapies — cryotherapy, hyperbaric oxygen, IV formulations, red light, and more — in a setting designed for consistency. These aren't one-off treatments; they're tools you can integrate into an ongoing optimization protocol, backed by your diagnostic data."
        imageSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80"
        imagePlaceholder="Biohacking Therapies"
      />

      <FeatureGrid
        tag="Therapies"
        title="Advanced Therapy Suite"
        description="Evidence-based interventions to enhance recovery, cellular function, and long-term healthspan."
        features={[
          {
            icon: Snowflake,
            title: "Cryotherapy",
            description: "Whole-body and localized cold exposure to reduce inflammation, boost recovery, and support metabolic health.",
          },
          {
            icon: Wind,
            title: "Hyperbaric Oxygen",
            description: "Pressurized oxygen therapy to enhance healing, cognitive function, and cellular repair.",
          },
          {
            icon: Syringe,
            title: "IV Therapy",
            description: "Personalized IV formulations for hydration, nutrient delivery, and targeted cellular support.",
          },
          {
            icon: Sun,
            title: "Red Light Therapy",
            description: "LED and laser modalities to support mitochondrial function, skin health, and recovery.",
          },
          {
            icon: Zap,
            title: "Electrical Stimulation",
            description: "PEMF, TENS, and other modalities for muscle recovery, circulation, and cellular signaling.",
          },
        ]}
        columns={4}
      />

      <CTASection
        title="Explore Biohacking at ROSEBAR"
        description="Learn about our therapy suite, protocols, and how biohacking fits into your personalized longevity plan."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Advanced Diagnostics", href: "/wellness/rosebar/diagnostics" }}
      />
    </>
  )
}
