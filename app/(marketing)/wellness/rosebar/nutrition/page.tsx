import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import {
  UtensilsCrossed,
  Pill,
  Leaf,
  Scale,
} from "lucide-react"

export default function NutritionPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Wellness & Spa", href: "/wellness" },
          { label: "ROSEBAR", href: "/wellness/rosebar" },
          { label: "Nutrition" },
        ]}
        title="Bespoke Nutrition & Formulations"
        description="Personalized nutrition plans and supplement formulations — designed around your body, your goals, and your lifestyle."
      />

      <ContentSection
        tag="Our Approach"
        title="Food as Medicine, Formulated for You"
        description="ROSEBAR's nutrition program starts with your data: biomarkers, genetics, and health goals. From there, our team builds bespoke meal plans, metabolic optimization strategies, and supplement formulations tailored to you. No generic protocols — only evidence-based nutrition that supports longevity and fits how you actually live."
        imageSrc="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80"
        imagePlaceholder="Bespoke Nutrition"
      />

      <FeatureGrid
        tag="Services"
        title="Nutrition Programs"
        description="Comprehensive support for dietary optimization, metabolic health, and targeted supplementation."
        features={[
          {
            icon: UtensilsCrossed,
            title: "Personalized Meal Planning",
            description: "Dietary protocols designed around your biomarkers, preferences, and long-term health goals.",
          },
          {
            icon: Scale,
            title: "Metabolic Optimization",
            description: "Strategies for blood sugar stability, gut health, and sustainable weight management.",
          },
          {
            icon: Pill,
            title: "Supplement Formulations",
            description: "Custom and targeted supplement stacks based on your deficiencies, genetics, and goals.",
          },
          {
            icon: Leaf,
            title: "Sustainable Eating",
            description: "Nutrition that supports both your healthspan and the planet — practical, lasting habits.",
          },
        ]}
        columns={4}
      />

      <CTASection
        title="Begin Your Nutrition Journey"
        description="Schedule a consultation to learn how our nutrition team uses your data to design a truly personalized eating plan."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Meet Our Experts", href: "/wellness/rosebar/experts" }}
      />
    </>
  )
}
