import { HeroSection } from "@/components/hero-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CardGrid } from "@/components/card-grid"
import { CTASection } from "@/components/cta-section"
import { Droplets, Dumbbell, Sparkles, Leaf, Heart, Music } from "lucide-react"

export default function WellnessPage() {
  return (
    <>
      <HeroSection
        tag="Wellness & Spa"
        title="Restore. Renew. Transform."
        description="100,000 square feet of world-class spa, longevity science, and holistic healing — designed not as a destination, but as part of your daily life at Starkdale."
        actions={[
          { label: "ROSEBAR Longevity", href: "/wellness/rosebar" },
          { label: "Spa Experiences", href: "/wellness/experiences", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80"
        imagePlaceholder="Spa & Wellness Center"
      />

      <FeatureGrid
        tag="The Spa"
        title="A New Approach to Wellness"
        description="Our spa integrates thermal therapy, fitness, beauty rituals, and longevity science into a single, cohesive experience."
        features={[
          { icon: Droplets, title: "Thermal Baths", description: "Hot and cold immersion circuits inspired by global bathing traditions." },
          { icon: Dumbbell, title: "Fitness", description: "State-of-the-art equipment, personal training, and movement classes." },
          { icon: Sparkles, title: "Beauty Rituals", description: "Advanced skincare, body treatments, and rejuvenation protocols." },
          { icon: Heart, title: "Longevity Science", description: "ROSEBAR's cutting-edge diagnostics, biohacking, and personalized programs." },
          { icon: Music, title: "Performances", description: "Live music, meditation sessions, and immersive wellness events." },
          { icon: Leaf, title: "Museum Shop", description: "Curated wellness products, supplements, and lifestyle goods." },
        ]}
      />

      <CardGrid
        tag="Experiences"
        title="Spa Experiences"
        description="Each experience is designed to restore, energize, or transform — choose what your body and mind need today."
        items={[
          { title: "Thermal Baths", description: "Hot and cold circuits for circulation and recovery", href: "/wellness/experiences/thermal-baths", imageSrc: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80" },
          { title: "Fitness Classes", description: "Yoga, pilates, strength, and movement", href: "/wellness/experiences/classes", imageSrc: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" },
          { title: "Beauty Rituals", description: "Advanced skincare and rejuvenation", href: "/wellness/experiences/beauty-rituals", imageSrc: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
          { title: "Performances", description: "Live music and immersive wellness events", href: "/wellness/experiences/performances", imageSrc: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80" },
          { title: "Museum Shop", description: "Curated wellness products and lifestyle goods", href: "/wellness/experiences/museum-shop", imageSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
        ]}
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
