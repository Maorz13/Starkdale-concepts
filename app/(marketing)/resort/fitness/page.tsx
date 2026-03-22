import { Dumbbell, Heart, Users, Zap } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"

export default function FitnessPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Resort", href: "/resort" },
          { label: "Fitness" },
        ]}
        title="Fitness"
        description="State-of-the-art facilities and programming for movement, strength, and longevity."
      />

      <ContentSection
        tag="The Facilities"
        title="Built for Movement"
        description="Our fitness center integrates equipment, personal training, and group classes into the broader Starkdale wellness ecosystem. Whether you're preparing for trail runs at Base Camp, recovering from ROSEBAR therapies, or simply maintaining an active lifestyle, the facilities support your goals. Connected to the Spa and resort grounds, fitness at Starkdale is part of how we extend healthspan."
        imageSrc="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
        imagePlaceholder="Fitness Center"
      />

      <FeatureGrid
        tag="Offerings"
        title="Fitness at Starkdale"
        description="From strength and conditioning to group classes and outdoor programming."
        features={[
          {
            icon: Dumbbell,
            title: "Strength & Conditioning",
            description: "State-of-the-art equipment and space for strength training, functional fitness, and conditioning work.",
          },
          {
            icon: Zap,
            title: "Group Classes",
            description: "Yoga, pilates, HIIT, and movement classes led by experienced instructors, often connected to the Spa.",
          },
          {
            icon: Heart,
            title: "Longevity Integration",
            description: "Fitness programming designed to complement ROSEBAR diagnostics and longevity protocols.",
          },
          {
            icon: Users,
            title: "Outdoor Programming",
            description: "Trail running, adventure races, and outdoor fitness tied to Base Camp and the 22 km trail network.",
          },
        ]}
        columns={2}
      />

      <CTASection
        title="Move at Starkdale"
        description="Visit us to tour the fitness facilities and experience our programming firsthand."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Explore Resort", href: "/resort" }}
      />
    </>
  )
}
