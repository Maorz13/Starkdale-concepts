import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import { HandHeart, Users, Globe, Building, Sprout, Star } from "lucide-react"

export default function CharityPage() {
  return (
    <>
      <HeroSection
        tag="Live Layers — Charity"
        title="Purpose-Driven Living"
        description="Longevity isn't just about how long you live — it's about why. The charity layer at Starkdale creates meaningful opportunities to give back, stay connected to the world, and live with intention beyond yourself."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Explore Live Layers", href: "/life/live-layers", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80"
        imagePlaceholder="Community giving and charity at Starkdale"
      />

      <FeatureGrid
        tag="How We Give"
        title="Giving Built Into Community Life"
        description="Charitable programming at Starkdale is woven into the social fabric — not a separate obligation, but a natural expression of the values that brought this community together."
        features={[
          { icon: HandHeart, title: "Community Service", description: "Organized volunteer programs and service days that connect residents to the surrounding region and its needs." },
          { icon: Building, title: "Fundraising Events", description: "Community-hosted charity events, auctions, and galas that turn the social layer into a platform for giving." },
          { icon: Globe, title: "Local Partnerships", description: "Long-term relationships with local nonprofits, schools, and environmental organizations that reflect Starkdale's values." },
          { icon: Sprout, title: "Environmental Stewardship", description: "Land conservation, habitat protection, and environmental initiatives that extend Starkdale's commitment to the natural world." },
          { icon: Users, title: "Mentorship Programs", description: "Opportunities for residents to share professional expertise, mentorship, and resources with the broader community." },
          { icon: Star, title: "Cause-Led Programming", description: "Seasonal campaigns and resident-initiated causes that reflect the community's evolving priorities and passions." },
        ]}
        columns={3}
      />

      <ContentSection
        tag="The Research on Purpose"
        title="Purpose Is a Longevity Factor"
        description="The science is clear: people who live with a sense of purpose live longer. The charity layer at Starkdale isn't idealism — it's evidence-based. Giving back, mentoring others, and staying connected to something larger than yourself are measurable contributors to healthspan and wellbeing."
        imageSrc="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80"
        imagePlaceholder="Purpose and community impact"
      />

      <ContentSection
        tag="Local Roots"
        title="Connected to the Region"
        description="Starkdale exists within a broader landscape — upstate New York communities, local farms, schools, and ecosystems. The charity layer ensures that the community's prosperity radiates outward, creating genuine ties between Starkdale residents and the people and places that surround them."
        imageSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80"
        imagePlaceholder="Local community and partnerships"
        reverse
      />

      <CTASection
        title="Live with Purpose"
        description="Starkdale is designed for people who want their lives to mean something. Visit us and learn how the charity layer connects individual wellbeing to collective good."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "All Live Layers", href: "/life/live-layers" }}
      />
    </>
  )
}
