import { PageHeader } from "@/components/page-header"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CTASection } from "@/components/cta-section"

const EXPERTS = [
  {
    name: "Dr. Mark Hyman",
    role: "Chief Wellness Advisor",
    initials: "MH",
    bio: "Pioneer in functional medicine and longevity science, leading ROSEBAR's health transformation programs and integrating cutting-edge diagnostics with holistic healing.",
  },
  {
    name: "Dr. Elena Vasquez",
    role: "Director of Advanced Diagnostics",
    initials: "EV",
    bio: "Specializes in genomic medicine and biomarker analysis. Builds personalized health maps that inform every treatment and lifestyle recommendation.",
  },
  {
    name: "Dr. James Chen",
    role: "Head of Biohacking & Therapies",
    initials: "JC",
    bio: "Expert in cellular optimization, cryotherapy, hyperbaric oxygen, and IV therapy. Brings the latest longevity science from research into daily practice.",
  },
  {
    name: "Maya Foster",
    role: "Lead Nutritionist",
    initials: "MF",
    bio: "Creates bespoke nutrition plans and supplement formulations. Focuses on metabolic optimization and sustainable eating that supports long-term healthspan.",
  },
  {
    name: "Thomas Reed",
    role: "Director of Spiritual Wellbeing",
    initials: "TR",
    bio: "Integrates meditation, breathwork, and movement into ROSEBAR's programs. Believes spiritual health is inseparable from physical longevity.",
  },
  {
    name: "Dr. Sarah Kim",
    role: "Longevity Club Medical Director",
    initials: "SK",
    bio: "Oversees membership health optimization pathways. Ensures each member receives a truly personalized, data-driven approach to longevity.",
  },
]

export default function ExpertsPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Wellness & Spa", href: "/wellness" },
          { label: "ROSEBAR", href: "/wellness/rosebar" },
          { label: "Our Experts" },
        ]}
        title="Our Experts"
        description="ROSEBAR's world-class team brings together longevity science, functional medicine, and holistic healing — each expert dedicated to your health transformation."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXPERTS.map((expert) => (
              <Card key={expert.name}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="size-12">
                    <AvatarFallback>{expert.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{expert.name}</CardTitle>
                    <CardDescription>{expert.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{expert.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Connect With Our Team"
        description="Schedule a consultation or learn more about ROSEBAR's programs and how our experts can support your longevity journey."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Explore ROSEBAR", href: "/wellness/rosebar" }}
      />
    </>
  )
}
