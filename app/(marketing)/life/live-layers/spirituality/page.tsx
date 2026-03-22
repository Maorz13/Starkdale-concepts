import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import { Wind, Leaf, Moon, Sun, TreePine, Sparkles } from "lucide-react"

export default function SpiritualityPage() {
  return (
    <>
      <HeroSection
        tag="Live Layers — Spirituality"
        title="Space for Stillness"
        description="Spiritual health is inseparable from physical longevity. At Starkdale, 658 acres of nature, dedicated contemplative spaces, and a year-round calendar of practices make stillness as accessible as a morning walk."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Explore Live Layers", href: "/life/live-layers", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
        imagePlaceholder="Stillness and nature at Starkdale"
      />

      <FeatureGrid
        tag="Practices & Spaces"
        title="Every Path to Inner Wellbeing"
        description="Whether your practice is rooted in movement, breath, silence, or nature, Starkdale provides the space and the programming to support it."
        features={[
          { icon: Wind, title: "Breathwork", description: "Guided breathwork sessions that reduce stress, improve focus, and support deeper physiological recovery." },
          { icon: Leaf, title: "Yoga", description: "Daily yoga classes across styles — restorative, vinyasa, and yin — held indoors and in the open air." },
          { icon: Moon, title: "Meditation", description: "Structured and self-guided meditation, with dedicated quiet spaces and guided programs for all experience levels." },
          { icon: TreePine, title: "Nature Immersion", description: "Contemplative walks, forest bathing, and unstructured time in 658 acres of land designed to quiet the mind." },
          { icon: Sun, title: "Morning Rituals", description: "Sunrise sessions, outdoor movement, and early-morning gatherings that set the tone for the day." },
          { icon: Sparkles, title: "Integrated Wellbeing", description: "Spiritual practices woven into the ROSEBAR longevity framework — treating inner health as a pillar of long life." },
        ]}
        columns={3}
      />

      <ContentSection
        tag="Nature as Teacher"
        title="658 Acres of Quiet"
        description="The most profound spiritual practice at Starkdale may simply be walking outside. The trail network, the lake, the forest canopy, and the absence of urban noise create conditions for reflection that are genuinely rare — and available every day, year-round."
        imageSrc="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80"
        imagePlaceholder="Forest and nature trails"
      />

      <ContentSection
        tag="ROSEBAR Integration"
        title="Science Meets Spirit"
        description="ROSEBAR's Spiritual Wellbeing program bridges the gap between inner practices and measurable health outcomes — incorporating meditation, breathwork, and mindfulness into personalized longevity plans guided by Dr. Mark Hyman's team."
        imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80"
        imagePlaceholder="Spiritual wellness and ROSEBAR"
        reverse
      />

      <CTASection
        title="Find Your Stillness"
        description="Visit Starkdale and experience what it means to live in a place that actively supports your inner life — not just your physical one."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "ROSEBAR Longevity", href: "/wellness/rosebar" }}
      />
    </>
  )
}
