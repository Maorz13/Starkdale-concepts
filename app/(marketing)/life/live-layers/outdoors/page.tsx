import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import { Waves, Mountain, Bike, Fish, Snowflake, Footprints } from "lucide-react"

export default function OutdoorsPage() {
  return (
    <>
      <HeroSection
        tag="Live Layers — The Great Outdoors"
        title="Lakeside, Basecamp, and Beyond"
        description="658 acres of trails, water, and wilderness just 90 minutes from Midtown. The outdoor layer is the foundation of life at Starkdale — connecting residents to nature, to each other, and to themselves."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Explore Live Layers", href: "/life/live-layers", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80"
        imagePlaceholder="Starkdale outdoors — trails and lake"
      />

      <FeatureGrid
        tag="What's Outside"
        title="Every Kind of Adventure"
        description="From calm mornings on the lake to high-intensity adventure races, the outdoor infrastructure at Starkdale is built for all seasons and all levels."
        features={[
          { icon: Waves, title: "Lakeside", description: "10-acre water sports lake with kayaking, paddle boarding, swimming, and fishing — plus a 5,000 sq ft beach barn." },
          { icon: Mountain, title: "Basecamp", description: "The hub for adventure races, nature hikes, and winter sports. A staging point for exploration in every direction." },
          { icon: Footprints, title: "22 km of Trails", description: "A network of trails winding through 658 acres — for walking, trail running, cycling, and quiet morning reflection." },
          { icon: Bike, title: "Water Sports", description: "Biking, kayaking, paddle boarding, and swimming in a pristine natural setting just steps from your front door." },
          { icon: Snowflake, title: "Winter Sports", description: "Snow trails, winter hikes, and seasonal programming keep the outdoor layer alive year-round." },
          { icon: Fish, title: "Fishing", description: "A calm, stocked lake perfect for casting a line — one of the quieter, more restorative outdoor rituals at Starkdale." },
        ]}
        columns={3}
      />

      <ContentSection
        tag="Lakeside"
        title="Water as a Way of Life"
        description="The 10-acre Lakeside is more than a recreational amenity — it's a daily ritual. Paddle out at sunrise, swim at midday, or end the evening watching the light shift across the water from the beach barn. Whether you're active or simply present, the lake draws you in."
        imageSrc="https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1200&q=80"
        imagePlaceholder="Lakeside water sports"
      />

      <ContentSection
        tag="Basecamp"
        title="The Starting Point for Everything"
        description="Basecamp anchors the adventurous end of Starkdale's outdoor spectrum. Organized adventure races, guided nature hikes, and winter programming give residents a shared calendar of outdoor experiences — building community through challenge and discovery."
        imageSrc="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80"
        imagePlaceholder="Basecamp trails and adventure"
        reverse
      />

      <CTASection
        title="Come Outside"
        description="Visit us to walk the trails, paddle the lake, and experience what 658 acres of nature can do for your sense of wellbeing."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "All Live Layers", href: "/life/live-layers" }}
      />
    </>
  )
}
