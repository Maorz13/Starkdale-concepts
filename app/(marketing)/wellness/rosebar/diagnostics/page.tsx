import { PageHeader } from "@/components/page-header"
import { ContentSection } from "@/components/content-section"
import { FeatureGrid } from "@/components/feature-grid"
import { CTASection } from "@/components/cta-section"
import {
  Dna,
  TestTube2,
  Map,
  Stethoscope,
} from "lucide-react"

export default function DiagnosticsPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Wellness & Spa", href: "/wellness" },
          { label: "ROSEBAR", href: "/wellness/rosebar" },
          { label: "Advanced Diagnostics" },
        ]}
        title="Advanced Diagnostics & Consultations"
        description="Data-driven health assessment — from genetics to biomarkers — to build your personalized longevity roadmap."
      />

      <ContentSection
        tag="Our Approach"
        title="Know Your Body. Optimize Your Future."
        description="ROSEBAR's diagnostics go beyond routine checkups. We combine genetic testing, comprehensive biomarker analysis, and deep consultations to create a complete health map. This map informs every treatment, nutrition plan, and therapy we recommend — so your longevity journey is built on evidence, not guesswork."
        imageSrc="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80"
        imagePlaceholder="Advanced Diagnostics"
      />

      <FeatureGrid
        tag="Services"
        title="Diagnostic Services"
        description="A full suite of advanced testing and consultation options to understand and optimize your health."
        features={[
          {
            icon: Dna,
            title: "Genetic Testing",
            description: "Genomic profiling to understand predisposition, metabolism, and personalized intervention opportunities.",
          },
          {
            icon: TestTube2,
            title: "Biomarker Analysis",
            description: "Comprehensive blood and lab panels tracking inflammation, metabolic health, hormones, and longevity markers.",
          },
          {
            icon: Map,
            title: "Health Mapping",
            description: "Integration of all data into a clear, actionable health roadmap with prioritized interventions.",
          },
          {
            icon: Stethoscope,
            title: "Expert Consultations",
            description: "One-on-one sessions with our longevity specialists to interpret results and design your plan.",
          },
        ]}
        columns={4}
      />

      <CTASection
        title="Begin With a Full Assessment"
        description="Schedule a consultation to learn about our diagnostic protocols and how we build your personalized longevity plan."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Meet Our Experts", href: "/wellness/rosebar/experts" }}
      />
    </>
  )
}
