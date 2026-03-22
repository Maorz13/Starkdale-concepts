import { PageHeader } from "@/components/page-header"
import { CardGrid } from "@/components/card-grid"
import { CTASection } from "@/components/cta-section"

const LODGING_ITEMS = [
  {
    title: "Resort Wing Suites",
    description: "Contemporary suites in the heart of resort life",
    href: "/resort/lodging/resort-wing-suites",
  },
  {
    title: "Resort Cabins",
    description: "Rustic cabins with full resort amenity access",
    href: "/resort/lodging/resort-cabins",
  },
  {
    title: "Spa Wing Suites",
    description: "Suites steps from the spa and longevity center",
    href: "/resort/lodging/spa-wing-suites",
  },
  {
    title: "Spa Cabins",
    description: "Cabins immersed in wellness and thermal access",
    href: "/resort/lodging/spa-cabins",
  },
  {
    title: "Onsen Villas",
    description: "Japanese-inspired villas with private onsen",
    href: "/resort/lodging/onsen-villas",
  },
  {
    title: "Starkdale BNB Keys",
    description: "Flexible BNB program for extended stays",
    href: "/resort/lodging/starkdale-bnb-keys",
  },
  {
    title: "Historic Home Keys",
    description: "Keys to restored historic homes on the grounds",
    href: "/resort/lodging/historic-home-keys",
  },
  {
    title: "Annex Keys",
    description: "Additional flexible lodging options",
    href: "/resort/lodging/annex-keys",
  },
]

export default function LodgingPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Resort", href: "/resort" },
          { label: "Lodging Options" },
        ]}
        title="Lodging Options"
        description="214 keys across eight distinct accommodation types — from suites and cabins to Onsen villas and our Starkdale BNB program."
      />

      <CardGrid
        tag="Accommodations"
        title="Choose Your Stay"
        description="Each lodging type offers a different flavor of the Starkdale experience, all immersed in the same longevity-focused community."
        items={LODGING_ITEMS}
        columns={4}
      />

      <CTASection
        title="Book Your Stay"
        description="Visit us or inquire about availability for your preferred lodging type."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Explore Resort", href: "/resort" }}
      />
    </>
  )
}
