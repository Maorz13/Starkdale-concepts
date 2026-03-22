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

const TEAM_MEMBERS = [
  {
    name: "Dr. Mark Hyman",
    role: "Chief Wellness Advisor",
    initials: "MH",
    bio: "Pioneer in functional medicine and longevity science, leading ROSEBAR's health transformation programs.",
  },
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    initials: "SC",
    bio: "Visionary behind Starkdale's concept of integrating longevity science into residential community design.",
  },
  {
    name: "David Archer",
    role: "Chief Architect",
    initials: "DA",
    bio: "Leads the architectural vision across all 10 neighborhoods, blending sustainability with modern luxury.",
  },
  {
    name: "Maria Santos",
    role: "VP of Community",
    initials: "MS",
    bio: "Creates the social fabric of Starkdale — events, programs, and the connective tissue between residents.",
  },
  {
    name: "James Park",
    role: "Director of Wellness",
    initials: "JP",
    bio: "Oversees the 100K SF spa, fitness programs, and integration of longevity science into daily life.",
  },
  {
    name: "Emily Ross",
    role: "Director of Hospitality",
    initials: "ER",
    bio: "Manages resort operations across 214 keys, ensuring every guest experiences the Starkdale lifestyle.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "The Vision", href: "/vision" },
          { label: "About Us" },
        ]}
        title="The People Behind Starkdale"
        description="A team of architects, scientists, wellness experts, and community builders creating a new model for how we live."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe the wellness economy isn&apos;t just about retreats and
              treatments — it&apos;s about where and how you live every day.
              Starkdale is the first of five planned living environments that
              prove a longer, healthier life is a design problem worth solving.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <Card key={member.name}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="size-12">
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join the Starkdale Community"
        description="Get in touch with our team to learn more about residences, wellness programs, or partnership opportunities."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  )
}
