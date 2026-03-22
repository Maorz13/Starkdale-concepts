import { PageHeader } from "@/components/page-header"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import {
  Users,
  Brain,
  Wifi,
  Heart,
  Car,
  GraduationCap,
} from "lucide-react"

export default function CommunityConnectivityPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Life at Starkdale", href: "/life" },
          { label: "Community Connectivity" },
        ]}
        title="Community Connectivity"
        description="The technologies and platforms that keep Starkdale connected — from member networks and operational intelligence to smart infrastructure, health tech, mobility, and cultural platforms."
      />

      <FeatureGrid
        tag="Platforms"
        title="Connected Community"
        description="Infrastructure and technology designed for seamless, intelligent community life."
        features={[
          {
            icon: Users,
            title: "Member Connectivity",
            description: "Platforms that connect residents, facilitate neighbor introductions, and support community initiatives and events.",
          },
          {
            icon: Brain,
            title: "Operational Intelligence",
            description: "Systems that keep amenities, services, and experiences running smoothly and responsively.",
          },
          {
            icon: Wifi,
            title: "Smart Infrastructure",
            description: "Connected systems for energy, security, and environmental management that support a sustainable, resilient community.",
          },
          {
            icon: Heart,
            title: "Health & Longevity Tech",
            description: "Integration with ROSEBAR and wellness data to support personalized health insights and longevity-focused living.",
          },
          {
            icon: Car,
            title: "Mobility & Autonomous Transport",
            description: "Transport solutions that connect Starkdale to the city and support seamless movement within the community.",
          },
          {
            icon: GraduationCap,
            title: "Education & Cultural Platforms",
            description: "Programs, talks, workshops, and digital resources that support lifelong learning and cultural engagement.",
          },
        ]}
        columns={3}
      />

      <CTASection
        title="Discover Community Connectivity"
        description="Visit us to learn how Starkdale's technology and platforms support connected, intelligent community living."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Explore Residences", href: "/residences" }}
      />
    </>
  )
}
