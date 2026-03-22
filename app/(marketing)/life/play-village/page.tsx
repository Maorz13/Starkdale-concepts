import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import {
  Target,
  CircleDot,
  Circle,
  Activity,
  Goal,
  Baby,
} from "lucide-react"

export default function PlayVillagePage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Life at Starkdale", href: "/life" },
          { label: "Play Village" },
        ]}
        title="Play Village"
        description="11 acres of sports, play, and childcare — where families and kids thrive alongside the adult-oriented wellness and culture of Starkdale."
      />

      <ContentSection
        tag="Family-Oriented"
        title="Sports and Childcare at the Heart of Community"
        description="Play Village brings together childcare, tennis, pickleball, bowling, indoor basketball, and soccer across 11 dedicated acres. Designed for urban families seeking a healthier weekend lifestyle, it gives children meaningful time in nature and sport while parents enjoy ROSEBAR, trails, or the Square. A community where the whole family finds their place."
        imageSrc="https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=1200&q=80"
        imagePlaceholder="Play Village"
      />

      <FeatureGrid
        tag="Amenities"
        title="Sports & Childcare"
        description="From court sports to indoor facilities and trusted childcare."
        features={[
          {
            icon: Target,
            title: "Tennis",
            description: "Courts for casual play and lessons, set within the natural landscape of Starkdale.",
          },
          {
            icon: CircleDot,
            title: "Pickleball",
            description: "Popular, accessible courts for all ages and skill levels.",
          },
          {
            icon: Circle,
            title: "Bowling",
            description: "Indoor lanes for family fun and social play.",
          },
          {
            icon: Activity,
            title: "Indoor Basketball",
            description: "Climate-controlled courts for year-round play.",
          },
          {
            icon: Goal,
            title: "Soccer",
            description: "Fields for pickup games and organized play.",
          },
          {
            icon: Baby,
            title: "Childcare",
            description: "Trusted care and programming so parents can enjoy Starkdale while kids engage in age-appropriate play.",
          },
        ]}
        columns={3}
      />

      <CTASection
        title="Explore Play Village"
        description="Visit us to see the sports facilities, childcare, and family-oriented spaces at Play Village."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Explore Residences", href: "/residences" }}
      />
    </>
  )
}
