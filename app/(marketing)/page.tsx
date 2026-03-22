import {
  TreePine,
  Heart,
  Mountain,
  Users,
  Sparkles,
  Home,
} from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CardGrid } from "@/components/card-grid"
import { CTASection } from "@/components/cta-section"
import { ContentSection } from "@/components/content-section"

export default function HomePage() {
  return (
    <>
      <HeroSection
        tag="658 Acres in Upstate New York"
        title="Live Longer. Live Better."
        description="Starkdale is a living environment designed to extend your lifespan and healthspan — where nature, longevity science, and community converge just 85 minutes from Manhattan."
        actions={[
          { label: "Explore Residences", href: "/residences" },
          { label: "Contact Us", href: "/contact", variant: "outline" },
        ]}
        imageSrc="/assets/hero-starkdale.png"
        imagePlaceholder="Starkdale Aerial View"
      />

      <FeatureGrid
        tag="Why Starkdale"
        title="A New Standard for Living"
        description="More than a home — a proactive, preventative lifestyle woven into 658 acres of nature, architecture, and community."
        features={[
          {
            icon: Heart,
            title: "Longevity Science",
            description:
              "ROSEBAR Longevity Center with Dr. Mark Hyman — biohacking, diagnostics, and personalized health programs.",
          },
          {
            icon: TreePine,
            title: "Nature Immersion",
            description:
              "22 km of trails, a 10-acre lake, and adventure basecamp — all steps from your door.",
          },
          {
            icon: Mountain,
            title: "Thoughtful Architecture",
            description:
              "Traditional, Modern, and Agriculture styles across 10 distinct neighborhoods on 1–4 acre lots.",
          },
          {
            icon: Users,
            title: "Like-Minded Community",
            description:
              "Curated community of urban professionals who value health, sustainability, and meaningful connection.",
          },
          {
            icon: Sparkles,
            title: "World-Class Spa",
            description:
              "100,000 SF spa with thermal baths, fitness, beauty rituals, and immersive wellness programs.",
          },
          {
            icon: Home,
            title: "Accessible Ownership",
            description:
              "Designed for first-time second-home buyers — community-first, not ultra-exclusive.",
          },
        ]}
      />

      <CardGrid
        tag="Neighborhoods"
        title="Ten Distinct Neighborhoods"
        description="From lakeside retreats to the pedestrian-first Square, each neighborhood offers a unique character within the Starkdale community."
        items={[
          { title: "Cascades", description: "74 units nestled among natural water features", href: "/residences/neighborhoods/cascades", imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80" },
          { title: "Private Reserve", description: "10 exclusive homesites with maximum privacy", href: "/residences/neighborhoods/private-reserve", imageSrc: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80" },
          { title: "The Square", description: "115 units + retail at the community's pedestrian core", href: "/residences/neighborhoods/the-square", imageSrc: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80" },
          { title: "West Ridge", description: "103 units with sweeping valley views", href: "/residences/neighborhoods/west-ridge", imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80" },
          { title: "East Ridge", description: "118 units along the eastern ridgeline", href: "/residences/neighborhoods/east-ridge", imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80" },
          { title: "The Crescent", description: "18 premium units on a gentle curve", href: "/residences/neighborhoods/the-crescent", imageSrc: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80" },
        ]}
        columns={3}
      />

      <ContentSection
        tag="Wellness & Spa"
        title="Extend Your Healthspan"
        description="Our 100,000 SF spa and ROSEBAR Longevity Center integrate cutting-edge science with holistic healing — thermal baths, advanced diagnostics, biohacking, and bespoke nutrition."
        imageSrc="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=80"
        imagePlaceholder="Spa & Wellness Center"
        reverse
      />

      <ContentSection
        tag="The Resort"
        title="Stay Before You Stay"
        description="Experience Starkdale before making it home. 214 keys across resort suites, spa cabins, Onsen villas, and our Starkdale BNB program — all immersed in the same longevity-focused lifestyle."
        imageSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
        imagePlaceholder="Resort Overview"
      />

      <CTASection
        title="Your Healthiest Chapter Starts Here"
        description="85 minutes from Midtown Manhattan. Visit us or explore available residences today."
        primaryAction={{ label: "Explore Residences", href: "/residences" }}
        secondaryAction={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  )
}
