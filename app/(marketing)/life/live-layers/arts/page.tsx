import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import { Palette, Frame, PenTool, Users, Aperture, Sparkles } from "lucide-react"

export default function ArtsPage() {
  return (
    <>
      <HeroSection
        tag="Live Layers — Arts"
        title="Creative Expression"
        description="Art at Starkdale isn't confined to gallery walls — it's embedded in the architecture, the landscape, and the community's daily life. The arts layer enriches the mind and creates shared experiences that deepen belonging."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Explore Live Layers", href: "/life/live-layers", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80"
        imagePlaceholder="Arts and creative expression at Starkdale"
      />

      <FeatureGrid
        tag="Creative Life Here"
        title="Art in Every Form"
        description="From curated exhibitions to hands-on workshops, the arts layer at Starkdale gives residents both the inspiration and the space to engage creatively — as makers or as an audience."
        features={[
          { icon: Frame, title: "Galleries", description: "Rotating exhibitions featuring established and emerging artists, installed throughout The Square and community spaces." },
          { icon: Aperture, title: "Artist Residencies", description: "Working artists invited to live, create, and share their practice with the community — bringing new creative energy every season." },
          { icon: PenTool, title: "Workshops", description: "Hands-on sessions in painting, ceramics, photography, and other disciplines — open to all levels, from curious beginners to practiced makers." },
          { icon: Palette, title: "Public Art", description: "Commissioned installations and murals woven into the landscape and architecture — art that rewards attention on an ordinary walk." },
          { icon: Users, title: "Community Projects", description: "Collaborative art initiatives that bring residents together around shared creative projects and public expressions of community identity." },
          { icon: Sparkles, title: "Cultural Programming", description: "Film screenings, literary events, and cross-disciplinary gatherings that expand the definition of art to include storytelling, film, and ideas." },
        ]}
        columns={3}
      />

      <ContentSection
        tag="Art & Architecture"
        title="A Built Environment Worth Looking At"
        description="Starkdale's architectural commitment extends to the arts — buildings designed with aesthetic intention, public spaces that double as canvases, and a landscape that's been shaped with the eye of a designer. The entire community is, in a sense, a work of art."
        imageSrc="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80"
        imagePlaceholder="Architecture and design as art"
      />

      <ContentSection
        tag="The Studio Mindset"
        title="For Those Who Make"
        description="Whether you paint on weekends, write early in the morning, or have always wanted to learn ceramics, Starkdale provides the space, the community, and the time to pursue creative work seriously. Residency programs and workshop series ensure there's always something happening for people who make things."
        imageSrc="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80"
        imagePlaceholder="Studio and workshop space"
        reverse
      />

      <CTASection
        title="Come and Create"
        description="Visit Starkdale to see the current exhibitions, meet the artists in residence, and discover how creativity becomes part of everyday life."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "All Live Layers", href: "/life/live-layers" }}
      />
    </>
  )
}
