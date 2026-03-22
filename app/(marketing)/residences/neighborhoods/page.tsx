import { PageHeader } from "@/components/page-header"
import { CardGrid } from "@/components/card-grid"

const NEIGHBORHOODS = [
  { title: "Cascades", description: "74 units nestled among natural water features and lush greenery", href: "/residences/neighborhoods/cascades" },
  { title: "Private Reserve", description: "10 exclusive homesites with maximum privacy on expansive lots", href: "/residences/neighborhoods/private-reserve" },
  { title: "Base Camp", description: "Adventure-oriented living near trails and the outdoor recreation hub", href: "/residences/neighborhoods/base-camp" },
  { title: "The Square", description: "115 units + 22 keys at the pedestrian core with retail and dining", href: "/residences/neighborhoods/the-square" },
  { title: "The Resort", description: "170 keys immersed in the hospitality and spa experience", href: "/residences/neighborhoods/the-resort" },
  { title: "West Ridge", description: "103 units with sweeping valley views along the western ridgeline", href: "/residences/neighborhoods/west-ridge" },
  { title: "Lakeside", description: "22 keys on the shores of the 10-acre recreational lake", href: "/residences/neighborhoods/lakeside" },
  { title: "Play Village", description: "39 units adjacent to 11 acres of sports and childcare facilities", href: "/residences/neighborhoods/play-village" },
  { title: "East Ridge", description: "118 units enjoying morning sun along the eastern ridgeline", href: "/residences/neighborhoods/east-ridge" },
  { title: "The Crescent", description: "18 premium units on a gentle, architecturally distinct curve", href: "/residences/neighborhoods/the-crescent" },
]

export default function NeighborhoodsPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "The Residences", href: "/residences" },
          { label: "Neighborhoods" },
        ]}
        title="Ten Unique Neighborhoods"
        description="Each of Starkdale's neighborhoods has its own character, landscape, and relationship to the community. Explore them all."
      />

      <CardGrid
        title=""
        items={NEIGHBORHOODS}
        columns={3}
      />
    </>
  )
}
