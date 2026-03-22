import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import { CalendarDays, UtensilsCrossed, Globe, Users, MapPin, Heart } from "lucide-react"

export default function SocialPage() {
  return (
    <>
      <HeroSection
        tag="Live Layers — Social"
        title="Connection That Lasts"
        description="A community of people who share your values around health, nature, and meaningful living. The social layer at Starkdale is what transforms a residence into a place you genuinely want to be."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Explore Live Layers", href: "/life/live-layers", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80"
        imagePlaceholder="Community gathering at Starkdale"
      />

      <FeatureGrid
        tag="How Community Forms"
        title="Built-In Ways to Connect"
        description="The social calendar at Starkdale gives residents regular, organic opportunities to meet neighbors and build lasting relationships — without any forced effort."
        features={[
          { icon: CalendarDays, title: "Community Events", description: "A year-round calendar of organized events — seasonal celebrations, wellness workshops, and neighborhood gatherings." },
          { icon: UtensilsCrossed, title: "Neighborhood Dinners", description: "Shared meals that bring residents together around food, conversation, and the simple act of eating well with others." },
          { icon: Globe, title: "Cultural Celebrations", description: "Events that honor the diverse backgrounds of the Starkdale community — festivals, exhibitions, and shared experiences." },
          { icon: Users, title: "Interest Groups", description: "From book clubs to hiking groups and wine tastings, resident-led gatherings form naturally around shared interests." },
          { icon: MapPin, title: "The Square", description: "A pedestrian-friendly main street with 70,000 sq ft of dining and retail — the daily social nucleus of Starkdale." },
          { icon: Heart, title: "Shared Values", description: "A community built around health, longevity, and nature-connected living — the foundation for relationships that go deeper than proximity." },
        ]}
        columns={3}
      />

      <ContentSection
        tag="The Square"
        title="Where Daily Life Happens"
        description="The Square is the social heart of Starkdale — a walkable main street designed for the kind of spontaneous encounters that turn neighbors into friends. Morning coffee, evening drinks, a run into someone you know. The Square makes community feel effortless."
        imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80"
        imagePlaceholder="The Square at Starkdale"
      />

      <ContentSection
        tag="Shared Identity"
        title="People Who Get It"
        description="Starkdale residents share something that's hard to find — a real commitment to living well, not just talking about it. That shared identity creates an unusually high-trust, like-minded community where connection happens quickly and authentically."
        imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
        imagePlaceholder="Community social life"
        reverse
      />

      <CTASection
        title="Meet Your Community"
        description="Visit Starkdale to experience the social energy in person — walk The Square, attend an event, and see what it feels like to be among people who share your values."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "All Live Layers", href: "/life/live-layers" }}
      />
    </>
  )
}
