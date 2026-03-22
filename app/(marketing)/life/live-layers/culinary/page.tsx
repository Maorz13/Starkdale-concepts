import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import { UtensilsCrossed, Salad, ChefHat, ShoppingBasket, Coffee, Flame } from "lucide-react"

export default function CulinaryPage() {
  return (
    <>
      <HeroSection
        tag="Live Layers — Culinary"
        title="Food as Culture"
        description="At Starkdale, food is more than fuel. It's the daily ritual that gathers people, the dinner table where friendships deepen, and the farm-to-table philosophy that connects eating to the land just outside your door."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Explore Live Layers", href: "/life/live-layers", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
        imagePlaceholder="Culinary experience at Starkdale"
      />

      <FeatureGrid
        tag="What's on the Table"
        title="A Complete Food Culture"
        description="From breakfast at The Square to long communal dinners, the culinary layer at Starkdale reflects the same health-forward intentionality that shapes every other aspect of life here."
        features={[
          { icon: UtensilsCrossed, title: "Restaurants & Dining", description: "Multiple dining destinations along The Square — from casual café to refined evening dining, all with a focus on quality ingredients and thoughtful preparation." },
          { icon: Salad, title: "Farm-to-Table", description: "Menus built around seasonal, locally sourced ingredients — a philosophy that honors both nutrition and the local ecosystem." },
          { icon: ChefHat, title: "Communal Kitchens", description: "Shared kitchen spaces for cooking classes, collaborative meals, and resident-hosted dinners that bring the community together." },
          { icon: ShoppingBasket, title: "Artisan Market", description: "Local producers, specialty foods, and seasonal goods available regularly — making high-quality ingredients a standing part of daily life." },
          { icon: Coffee, title: "Daily Rituals", description: "Morning coffee, afternoon snacks, evening wine — The Square provides the backdrop for the small daily rituals that make a place feel like home." },
          { icon: Flame, title: "Culinary Events", description: "Cooking demonstrations, tasting dinners, and food-focused community events that celebrate the pleasure of eating well together." },
        ]}
        columns={3}
      />

      <ContentSection
        tag="The Square"
        title="Dining at the Center of It All"
        description="The Square's 70,000 sq ft of dining and retail creates the conditions for a food culture that's alive daily — not just on weekends. Whether it's a quick breakfast before a trail run or a slow dinner with neighbors, the options here match the pace you want to keep."
        imageSrc="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200&q=80"
        imagePlaceholder="The Square dining"
      />

      <ContentSection
        tag="Nourishment & Longevity"
        title="Eating as a Health Practice"
        description="In partnership with ROSEBAR and Dr. Mark Hyman's nutritional framework, Starkdale's culinary program treats food as medicine — not in an austere way, but in one that makes eating well genuinely pleasurable. The best longevity nutrition is food you actually want to eat."
        imageSrc="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80"
        imagePlaceholder="Healthy culinary nutrition"
        reverse
      />

      <CTASection
        title="Taste What's Possible"
        description="Visit Starkdale and sit down to a meal at The Square — the best way to understand what it means when food is built into a community's identity."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "ROSEBAR Longevity", href: "/wellness/rosebar" }}
      />
    </>
  )
}
