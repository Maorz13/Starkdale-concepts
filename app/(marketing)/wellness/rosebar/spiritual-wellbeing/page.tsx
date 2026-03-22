import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import {
  Heart,
  Wind,
  Move,
  Brain,
} from "lucide-react"

export default function SpiritualWellbeingPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Wellness & Spa", href: "/wellness" },
          { label: "ROSEBAR", href: "/wellness/rosebar" },
          { label: "Spiritual Wellbeing" },
        ]}
        title="Spiritual Wellbeing & Movement"
        description="Meditation, breathwork, movement, and mindfulness — the practices that connect body, mind, and purpose."
      />

      <ContentSection
        tag="Our Philosophy"
        title="Longevity Begins From Within"
        description="At ROSEBAR we believe spiritual health is inseparable from physical longevity. Stress, purpose, and connection shape how we age. Our programs integrate meditation, breathwork, mindful movement, and contemplative practices — not as add-ons, but as core pillars of a complete longevity protocol. Science and stillness, side by side."
        imageSrc="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
        imagePlaceholder="Spiritual Wellbeing"
      />

      <FeatureGrid
        tag="Programs"
        title="Practices & Offerings"
        description="A range of modalities to support mental clarity, emotional resilience, and embodied presence."
        features={[
          {
            icon: Brain,
            title: "Meditation & Mindfulness",
            description: "Guided and silent meditation, mindfulness training, and practices to reduce stress and enhance focus.",
          },
          {
            icon: Wind,
            title: "Breathwork",
            description: "Structured breathing protocols for nervous system regulation, energy, and recovery.",
          },
          {
            icon: Move,
            title: "Mindful Movement",
            description: "Yoga, tai chi, and somatic practices that integrate body awareness with longevity goals.",
          },
          {
            icon: Heart,
            title: "Purpose & Connection",
            description: "Workshops and sessions on meaning, community, and the emotional dimensions of a long life.",
          },
        ]}
        columns={4}
      />

      <CTASection
        title="Explore Spiritual Wellbeing at ROSEBAR"
        description="Connect with our team to learn about meditation programs, breathwork sessions, and mindful movement offerings."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Meet Our Experts", href: "/wellness/rosebar/experts" }}
      />
    </>
  )
}
