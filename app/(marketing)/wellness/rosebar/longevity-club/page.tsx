import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import {
  CalendarCheck,
  BarChart3,
  Users,
  Sparkles,
} from "lucide-react"

export default function LongevityClubPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Wellness & Spa", href: "/wellness" },
          { label: "ROSEBAR", href: "/wellness/rosebar" },
          { label: "Longevity Club" },
        ]}
        title="Longevity Club"
        description="Membership-based access to ongoing health optimization — your personalized pathway to a longer, healthier life."
      />

      <ContentSection
        tag="Membership"
        title="A Community Committed to Healthspan"
        description="The Longevity Club isn't a gym or a spa — it's a membership that gives you ongoing access to ROSEBAR's full ecosystem: advanced diagnostics, biohacking therapies, bespoke nutrition, and spiritual wellbeing. Members work with our team to build a data-driven, personalized plan that evolves with them over time."
        imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
        imagePlaceholder="Longevity Club"
      />

      <FeatureGrid
        tag="Benefits"
        title="What Membership Includes"
        description="Every Longevity Club member receives a tailored experience built around their goals, biomarkers, and lifestyle."
        features={[
          {
            icon: BarChart3,
            title: "Ongoing Health Mapping",
            description: "Regular biomarker tracking and health assessments that inform your evolving optimization plan.",
          },
          {
            icon: CalendarCheck,
            title: "Personalized Programming",
            description: "Scheduled therapies, treatments, and consultations designed around your data and goals.",
          },
          {
            icon: Users,
            title: "Expert-Led Care",
            description: "Direct access to ROSEBAR's team of longevity specialists, nutritionists, and wellness advisors.",
          },
          {
            icon: Sparkles,
            title: "Full Facility Access",
            description: "Use of biohacking suites, diagnostics, nutrition consultations, and spiritual wellbeing programs.",
          },
        ]}
        columns={4}
      />

      <CTASection
        title="Join the Longevity Club"
        description="Connect with our team to learn about membership tiers, availability, and how to begin your health optimization journey."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Meet Our Experts", href: "/wellness/rosebar/experts" }}
      />
    </>
  )
}
