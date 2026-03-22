import { HeroSection } from "@/components/hero-section"
import { ContentSection } from "@/components/content-section"
import { CardGrid } from "@/components/card-grid"
import { CTASection } from "@/components/cta-section"

export default function RosebarPage() {
  return (
    <>
      <HeroSection
        tag="ROSEBAR — Longevity Center"
        title="The Future of Health Is Here"
        description="Led by Dr. Mark Hyman, ROSEBAR integrates cutting-edge longevity science with holistic healing. Advanced diagnostics, biohacking therapies, bespoke nutrition, and spiritual wellbeing — all under one roof."
        actions={[
          { label: "Our Experts", href: "/wellness/rosebar/experts" },
          { label: "Explore Treatments", href: "/wellness/rosebar/longevity-club", variant: "outline" },
        ]}
        imageSrc="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80"
        imagePlaceholder="ROSEBAR Longevity Center"
      />

      <ContentSection
        tag="Dr. Mark Hyman"
        title="World-Class Leadership"
        description="Dr. Mark Hyman, a pioneer in functional medicine and longevity science, leads ROSEBAR's vision. His approach combines the latest in molecular biology, genomics, and integrative health to create truly personalized pathways to a longer, healthier life."
        imageSrc="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80"
        imagePlaceholder="Dr. Mark Hyman"
        reverse
      />

      <CardGrid
        tag="Treatments"
        title="Comprehensive Longevity Programs"
        description="From advanced diagnostics to spiritual wellbeing, ROSEBAR covers every dimension of health and longevity."
        items={[
          { title: "Longevity Club", description: "Membership-based access to ongoing health optimization programs", href: "/wellness/rosebar/longevity-club", imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" },
          { title: "Advanced Diagnostics", description: "Full-body assessments, genetic testing, and personalized health mapping", href: "/wellness/rosebar/diagnostics", imageSrc: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80" },
          { title: "Biohacking & Therapies", description: "Cryotherapy, hyperbaric oxygen, IV therapy, and cellular optimization", href: "/wellness/rosebar/biohacking", imageSrc: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80" },
          { title: "Bespoke Nutrition", description: "Personalized nutrition plans, supplement formulations, and metabolic optimization", href: "/wellness/rosebar/nutrition", imageSrc: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80" },
          { title: "Spiritual Wellbeing", description: "Meditation, breathwork, movement, and mindfulness programs", href: "/wellness/rosebar/spiritual-wellbeing", imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" },
          { title: "Immersive Retreats", description: "Multi-day programs for deep health transformation and renewal", href: "/wellness/rosebar/retreats", imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80" },
        ]}
        columns={3}
      />

      <CTASection
        title="Begin Your Longevity Journey"
        description="Connect with our team to learn about ROSEBAR membership, treatments, and immersive retreat programs."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Meet Our Experts", href: "/wellness/rosebar/experts" }}
      />
    </>
  )
}
