import {
  Leaf,
  HeartPulse,
  Sun,
  TreePine,
  Lightbulb,
  Shield,
} from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeatureGrid } from "@/components/feature-grid"
import { ContentSection } from "@/components/content-section"
import { CTASection } from "@/components/cta-section"

export default function VisionPage() {
  return (
    <>
      <HeroSection
        tag="Our Vision"
        title="Living Longer, Living Better"
        description="Starkdale is built on a fundamental belief: where you live shapes how long and how well you live. We've designed every acre, every building, and every program to extend your lifespan and healthspan."
        actions={[
          { label: "About Our Team", href: "/vision/about", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80"
        imagePlaceholder="Starkdale Vision"
      />

      <FeatureGrid
        tag="Longevity Principles"
        title="The Science Behind the Vision"
        description="Starkdale integrates six pillars of longevity into the built environment and daily life."
        features={[
          {
            icon: HeartPulse,
            title: "Preventative Health",
            description:
              "Proactive diagnostics, personalized wellness plans, and continuous health optimization through ROSEBAR.",
          },
          {
            icon: TreePine,
            title: "Nature Connection",
            description:
              "22 km of trails, lakeside activities, and green spaces designed to reduce stress and restore balance.",
          },
          {
            icon: Sun,
            title: "Active Living",
            description:
              "11 acres of sports facilities, fitness programs, and movement-centric community design.",
          },
          {
            icon: Leaf,
            title: "Sustainable Design",
            description:
              "Architecture and infrastructure built with ecological responsibility and long-term resilience.",
          },
          {
            icon: Lightbulb,
            title: "Continuous Learning",
            description:
              "Cultural programs, co-working spaces, and educational platforms that keep minds sharp.",
          },
          {
            icon: Shield,
            title: "Community & Purpose",
            description:
              "A curated community of like-minded individuals who share values around health, nature, and meaningful living.",
          },
        ]}
      />

      <ContentSection
        tag="How We Make It Happen"
        title="From Vision to Living Environment"
        description="Every decision at Starkdale — from the placement of trails to the design of kitchens — is informed by longevity research. We partner with world-class experts including Dr. Mark Hyman to translate science into daily life."
        imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80"
        imagePlaceholder="Master Plan"
        reverse
      />

      <CTASection
        title="See the Vision in Person"
        description="Visit us to experience how 658 acres of intentional design can transform your life."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Explore Residences", href: "/residences" }}
      />
    </>
  )
}
