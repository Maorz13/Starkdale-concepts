import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import { Music, Mic2, Radio, Theater, Star, Volume2 } from "lucide-react"

export default function MusicPage() {
  return (
    <>
      <HeroSection
        tag="Live Layers — Music"
        title="Sound Meets Soul"
        description="From intimate acoustic evenings to open-air performances under the sky, music at Starkdale is a living thread woven through community life — bringing people together in the way only shared sound can."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Explore Live Layers", href: "/life/live-layers", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&q=80"
        imagePlaceholder="Live music at Starkdale"
      />

      <FeatureGrid
        tag="Venues & Programming"
        title="Music in Every Setting"
        description="Starkdale's music infrastructure spans intimate indoor halls to open-air stages — each venue designed for a different kind of listening experience."
        features={[
          { icon: Theater, title: "The Music Hall", description: "An intimate indoor venue built for acoustic precision — concerts, recitals, and performances in a setting where every seat is a good one." },
          { icon: Star, title: "The Folly", description: "A 320-seat open-air venue for seasonal performances — summer concerts, evening events, and community gatherings under the sky." },
          { icon: Music, title: "Live Performances", description: "A rotating calendar of performances — from classical and jazz to contemporary and experimental — curated for the Starkdale community." },
          { icon: Mic2, title: "Resident Artists", description: "Musician residencies that bring working artists into the community, creating dialogue between performers and audiences." },
          { icon: Volume2, title: "Community Sessions", description: "Informal jams, listening parties, and music-centered gatherings for residents who play, sing, or simply love to listen." },
          { icon: Radio, title: "Year-Round Calendar", description: "Music programming runs across all seasons — indoor events in colder months, outdoor performances when the weather opens up." },
        ]}
        columns={3}
      />

      <ContentSection
        tag="The Music Hall"
        title="Built for the Experience"
        description="The Music Hall was designed with acoustics and intimacy in mind — a space where the performance feels personal regardless of the artist. A dedicated venue within the community signals that music isn't an afterthought at Starkdale. It's a design priority."
        imageSrc="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80"
        imagePlaceholder="Music Hall interior"
      />

      <ContentSection
        tag="The Folly"
        title="Open Air, Open Ears"
        description="The 320-seat Folly brings outdoor performance to life in a natural amphitheater setting. Warm evenings, good music, and the people you've come to know — it's the kind of summer night that becomes a memory. The Folly is where the Starkdale community gathers at its most relaxed."
        imageSrc="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80"
        imagePlaceholder="The Folly open-air venue"
        reverse
      />

      <CTASection
        title="Hear It for Yourself"
        description="Visit Starkdale and experience a performance at The Music Hall or The Folly — places that make music a regular part of how you live."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "All Live Layers", href: "/life/live-layers" }}
      />
    </>
  )
}
