import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import { Dumbbell, Users, PersonStanding, Trophy, Timer, Activity } from "lucide-react"

export default function FitnessPage() {
  return (
    <>
      <HeroSection
        tag="Live Layers — Fitness"
        title="Move with Purpose"
        description="Fitness at Starkdale isn't a scheduled obligation — it's built into the landscape. Classes, equipment, trails, and community programming that make an active lifestyle the natural default."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Explore Live Layers", href: "/life/live-layers", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
        imagePlaceholder="Fitness at Starkdale"
      />

      <FeatureGrid
        tag="How You'll Move"
        title="Fitness for Every Body"
        description="From high-performance strength work to contemplative movement, the fitness layer serves every intention and every schedule."
        features={[
          { icon: Dumbbell, title: "Strength & Conditioning", description: "Fully equipped training spaces for resistance work, functional movement, and performance-oriented programming." },
          { icon: Users, title: "Group Classes", description: "A rotating schedule of instructor-led classes — from HIIT and boot camp to yoga flows and recovery sessions." },
          { icon: Activity, title: "Trail Running", description: "22 km of dedicated trails designed for runners of all levels — a daily route or a weekend long run through 658 acres." },
          { icon: Trophy, title: "Sports Courts", description: "Tennis, pickleball, basketball, soccer, and bowling — 11 acres of sports facilities for competitive and casual play alike." },
          { icon: PersonStanding, title: "Personal Training", description: "Expert coaches available for one-on-one programming tailored to your goals, fitness history, and schedule." },
          { icon: Timer, title: "Recovery Programming", description: "Stretching, mobility, and recovery sessions integrated into the weekly calendar — movement that restores as much as it challenges." },
        ]}
        columns={3}
      />

      <ContentSection
        tag="Indoor Facilities"
        title="Equipment That Matches Your Ambition"
        description="The fitness facilities at Starkdale are designed for people who take their health seriously. Commercial-grade equipment, dedicated training zones, and enough space to move without compromise — whether you're preparing for a race or simply maintaining the consistency you've built over years."
        imageSrc="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80"
        imagePlaceholder="Fitness facility interior"
      />

      <ContentSection
        tag="Outdoor Movement"
        title="The Landscape Is the Gym"
        description="Trail runs through old-growth forest, hill sprints at Basecamp, open-water swims at Lakeside — at Starkdale, the outdoors extends your fitness options in every direction. Movement here isn't confined to four walls."
        imageSrc="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&q=80"
        imagePlaceholder="Outdoor trail running"
        reverse
      />

      <CTASection
        title="Train Here"
        description="Visit Starkdale to see the facilities, join a class, and understand how an active lifestyle becomes effortless when the environment is designed for it."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "ROSEBAR Longevity", href: "/wellness/rosebar" }}
      />
    </>
  )
}
