import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import { Building2, Users, TreePine, Shield, Sparkles, Wifi } from "lucide-react"

export default function MultifamilyPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "The Residences", href: "/residences" },
          { label: "Multifamily Residences" },
        ]}
        title="Multifamily Residences"
        description="330 thoughtfully designed units across 600K+ sellable square feet, distributed throughout Starkdale's most connected neighborhoods."
      />

      <ContentSection
        tag="Overview"
        title="Community-Connected Living"
        description="Starkdale's multifamily residences combine the convenience of modern apartment living with direct access to nature, wellness, and a vibrant pedestrian community. Every unit is designed with biophilic principles, smart infrastructure, and longevity in mind."
        imageSrc="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
        imagePlaceholder="Multifamily Residences"
      />

      <FeatureGrid
        tag="Features"
        title="Designed for Longevity"
        features={[
          { icon: Building2, title: "330 Units", description: "Across multiple neighborhoods including Cascades, The Square, East Ridge, and West Ridge." },
          { icon: Users, title: "Community First", description: "Shared amenities, co-working spaces, and social programming built into the neighborhood fabric." },
          { icon: TreePine, title: "Nature at Your Door", description: "Direct trail access, green corridors, and biophilic design in every unit." },
          { icon: Shield, title: "Smart & Secure", description: "Health monitoring, air quality systems, and smart home integration as standard." },
          { icon: Sparkles, title: "Premium Finishes", description: "Customizable interior packages with natural materials and sustainable sourcing." },
          { icon: Wifi, title: "Connected Living", description: "High-speed infrastructure, EV charging, and community connectivity platform." },
        ]}
      />

      <CTASection
        title="Find Your Multifamily Home"
        description="Browse available multifamily units or schedule a visit to tour model residences."
        primaryAction={{ label: "Browse Units", href: "/residences" }}
        secondaryAction={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  )
}
