import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { CTASection } from "@/components/cta-section"

export default function LiveLayersPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Life at Starkdale", href: "/life" },
          { label: "Live Layers" },
        ]}
        title="Live Layers"
        description="The layers that make every day meaningful — The Great Outdoors, fitness, longevity, social connection, creativity, and purpose. Each layer enriches life at Starkdale."
      />

      <ContentSection
        tag="The Great Outdoors"
        title="Lakeside, Basecamp, and Beyond"
        description="Lakeside offers 10 acres of water sports — biking, kayaking, paddle boarding, fishing, and swimming — with a 5,000 square foot beach barn. Basecamp hosts trails, adventure races, nature hikes, and winter sports. The outdoor layer is foundational: 22 km of trails, nature immersion, and activities that connect residents to the land and to each other."
        imageSrc="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80"
        imagePlaceholder="Lakeside & Basecamp"
      />

      <ContentSection
        tag="Fitness"
        title="Move with Purpose"
        description="Classes, equipment, and programming that support an active, health-forward lifestyle. From strength and conditioning to group classes and outdoor trail running — fitness at Starkdale is woven into the landscape."
        imageSrc="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
        imagePlaceholder="Fitness"
        reverse
      />

      <ContentSection
        tag="ROSEBAR"
        title="Longevity at the Core"
        description="Longevity science, biohacking, diagnostics, and transformative wellness at the heart of Starkdale. ROSEBAR integrates cutting-edge health optimization into your daily routine — not as a destination, but as a way of life."
        imageSrc="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80"
        imagePlaceholder="ROSEBAR"
      />

      <ContentSection
        tag="Social"
        title="Connection That Lasts"
        description="Community events, gatherings, and connections that build lasting relationships. From neighborhood dinners to cultural celebrations, the social layer creates bonds between residents who share values around health, nature, and meaningful living."
        imageSrc="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80"
        imagePlaceholder="Social"
        reverse
      />

      <ContentSection
        tag="Spirituality"
        title="Space for Stillness"
        description="Space for reflection, movement practices, and inner wellbeing. Meditation, breathwork, yoga, and contemplative walks through 658 acres of nature — spiritual health is inseparable from physical longevity."
        imageSrc="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
        imagePlaceholder="Spirituality"
      />

      <ContentSection
        tag="Music"
        title="Sound Meets Soul"
        description="Live performances, concerts, and musical experiences across venues. From intimate acoustic evenings in the Music Hall to open-air performances at The Folly, music is a thread that runs through community life."
        imageSrc="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&q=80"
        imagePlaceholder="Music"
        reverse
      />

      <ContentSection
        tag="Culinary"
        title="Food as Culture"
        description="Dining, cooking, and food culture integrated into community life. The Square's restaurants, farm-to-table experiences, and communal kitchens make food a daily celebration — nourishing both body and connection."
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
        imagePlaceholder="Culinary"
      />

      <ContentSection
        tag="Charity"
        title="Purpose-Driven Living"
        description="Purpose-driven programming and opportunities to give back. Community service, fundraising events, and local partnerships ensure Starkdale residents stay connected to the broader world with intention."
        imageSrc="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80"
        imagePlaceholder="Charity"
        reverse
      />

      <ContentSection
        tag="Arts"
        title="Creative Expression"
        description="Visual arts, exhibitions, and creative expression. Galleries, artist residencies, and community workshops bring creativity into daily life — enriching the mind and fostering shared experiences."
        imageSrc="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80"
        imagePlaceholder="Arts"
      />

      <ContentSection
        tag="Design & Sustainability"
        title="Built to Last"
        description="Architecture, materials, and practices that honor the environment and long-term resilience. Every structure at Starkdale reflects a commitment to sustainable design — from energy-efficient homes to smart infrastructure."
        imageSrc="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80"
        imagePlaceholder="Design & Sustainability"
        reverse
      />

      <CTASection
        title="Experience the Layers"
        description="Visit us to walk the trails, explore Lakeside and Basecamp, and see how these layers shape life at Starkdale."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "ROSEBAR Longevity", href: "/wellness/rosebar" }}
      />
    </>
  )
}
