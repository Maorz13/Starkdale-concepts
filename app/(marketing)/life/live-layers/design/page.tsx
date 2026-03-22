import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import { Building2, Zap, Leaf, TreePine, Sun, Wrench } from "lucide-react"

export default function DesignPage() {
  return (
    <>
      <HeroSection
        tag="Live Layers — Design & Sustainability"
        title="Built to Last"
        description="Every structure at Starkdale reflects a commitment to sustainable design — from energy-efficient homes to smart infrastructure. Beauty and responsibility aren't in tension here. They're the same thing."
        actions={[
          { label: "Explore Residences", href: "/residences" },
          { label: "Explore Live Layers", href: "/life/live-layers", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80"
        imagePlaceholder="Sustainable architecture at Starkdale"
      />

      <FeatureGrid
        tag="Design Principles"
        title="What We Build On"
        description="Starkdale's design philosophy begins with one question: what does a built environment look like when human health and ecological health are treated as inseparable?"
        features={[
          { icon: Leaf, title: "Sustainable Materials", description: "Structures built with materials chosen for environmental impact, durability, and health — no toxic off-gassing, no short-term thinking." },
          { icon: Zap, title: "Energy Efficiency", description: "High-performance building envelopes, renewable energy integration, and smart systems that reduce consumption without reducing comfort." },
          { icon: Building2, title: "Architectural Variety", description: "Three distinct styles — Traditional, Modern, and Agricultural — offering aesthetic choice while maintaining community coherence." },
          { icon: TreePine, title: "Land Stewardship", description: "658 acres managed with conservation in mind — trails, water features, and open space that protect the ecosystem while enabling access." },
          { icon: Sun, title: "Passive Design", description: "Buildings oriented and shaped to maximize natural light, minimize heat gain, and reduce reliance on mechanical systems." },
          { icon: Wrench, title: "Smart Infrastructure", description: "Connected systems for energy management, water use, and community services — infrastructure that improves life without intruding on it." },
        ]}
        columns={3}
      />

      <ContentSection
        tag="The Residences"
        title="Homes Designed for Longevity"
        description="Starkdale's 330 multifamily units and 113 custom single-family homes are designed with the same rigor applied to the community itself. Healthy materials, natural light, efficient systems, and connection to the outdoors — a home that actively supports the life you're building here."
        imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
        imagePlaceholder="Starkdale residences"
      />

      <ContentSection
        tag="Sustainability at Scale"
        title="A Community That Earns Its Place"
        description="Building 2.5 million square feet with genuine ecological integrity requires systems thinking at every level — site planning, materials sourcing, energy infrastructure, water management, and long-term stewardship. Starkdale approaches development as a responsibility to the land, not a transaction with it."
        imageSrc="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80"
        imagePlaceholder="Sustainable community planning"
        reverse
      />

      <CTASection
        title="See How It's Built"
        description="Visit Starkdale and walk through the homes, the trails, and the community spaces. The design philosophy is best understood by being inside it."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Explore Residences", href: "/residences" }}
      />
    </>
  )
}
