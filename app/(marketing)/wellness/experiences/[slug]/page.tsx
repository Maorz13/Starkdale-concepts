import { notFound } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import {
  Droplets,
  Dumbbell,
  Sparkles,
  Music,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react"

const EXPERIENCES: Record<
  string,
  {
    name: string
    description: string
    features: { icon: LucideIcon; title: string; description: string }[]
  }
> = {
  "thermal-baths": {
    name: "Thermal Baths",
    description:
      "Hot and cold immersion circuits inspired by bathing traditions from around the world — designed to support circulation, recovery, and deep relaxation.",
    features: [
      {
        icon: Droplets,
        title: "Hot & Cold Circuits",
        description:
          "Alternating hot and cold immersion to stimulate circulation and cellular recovery.",
      },
      {
        icon: Droplets,
        title: "Hydrotherapy Pools",
        description:
          "Multiple pools at varying temperatures for personalized thermal journeys.",
      },
      {
        icon: Droplets,
        title: "Sauna & Steam",
        description:
          "Traditional and infrared saunas plus steam rooms for detoxification and relaxation.",
      },
    ],
  },
  classes: {
    name: "Classes",
    description:
      "Movement sessions designed for every level — from restorative yoga to high-intensity training, led by experienced instructors in our purpose-built studios.",
    features: [
      {
        icon: Dumbbell,
        title: "Yoga & Pilates",
        description:
          "Restorative flows, power sessions, and mindful movement for flexibility and strength.",
      },
      {
        icon: Dumbbell,
        title: "Strength & Conditioning",
        description:
          "Functional training, circuit work, and personalized programming.",
      },
      {
        icon: Dumbbell,
        title: "Specialty Workshops",
        description:
          "Breathwork, meditation, and seasonal movement experiences.",
      },
    ],
  },
  "beauty-rituals": {
    name: "Beauty Rituals",
    description:
      "Advanced skincare, body treatments, and rejuvenation protocols — integrating science-backed formulations with therapeutic touch.",
    features: [
      {
        icon: Sparkles,
        title: "Advanced Skincare",
        description:
          "Custom facials, LED therapy, and professional-grade treatments.",
      },
      {
        icon: Sparkles,
        title: "Body Treatments",
        description:
          "Exfoliation, wraps, and massage tailored to your needs.",
      },
      {
        icon: Sparkles,
        title: "Rejuvenation Protocols",
        description:
          "Longevity-focused treatments for skin and body vitality.",
      },
    ],
  },
  performances: {
    name: "Performances",
    description:
      "Live music, meditation sessions, sound baths, and immersive wellness events — transforming the spa into a space for connection and transcendence.",
    features: [
      {
        icon: Music,
        title: "Live Music",
        description:
          "Intimate performances in the spa setting for relaxation and inspiration.",
      },
      {
        icon: Music,
        title: "Sound Baths",
        description:
          "Gong, bowls, and instruments for deep meditation and nervous system reset.",
      },
      {
        icon: Music,
        title: "Wellness Events",
        description:
          "Seasonal gatherings, guest practitioners, and community experiences.",
      },
    ],
  },
  "museum-shop": {
    name: "Museum Shop",
    description:
      "Curated wellness products, supplements, and lifestyle goods — selected to support your longevity journey and daily rituals beyond the spa.",
    features: [
      {
        icon: ShoppingBag,
        title: "Supplements & Formulations",
        description:
          "Science-backed supplements and personalized formulations.",
      },
      {
        icon: ShoppingBag,
        title: "Skincare & Body Care",
        description:
          "Professional and at-home products from trusted wellness brands.",
      },
      {
        icon: ShoppingBag,
        title: "Lifestyle & Rituals",
        description:
          "Tools for meditation, recovery, and home spa experiences.",
      },
    ],
  },
}

export default async function ExperienceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const experience = EXPERIENCES[slug]

  if (!experience) {
    notFound()
  }

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Wellness & Spa", href: "/wellness" },
          { label: "Experiences", href: "/wellness/experiences" },
          { label: experience.name },
        ]}
        title={experience.name}
        description={experience.description}
      />

      <FeatureGrid
        tag="What to Expect"
        title="Experience Highlights"
        features={experience.features}
        columns={3}
      />

      <CTASection
        title="Book Your Experience"
        description="Schedule a spa day or add this experience to your upcoming stay."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "View All Experiences", href: "/wellness/experiences" }}
      />
    </>
  )
}
