import { PageHeader } from "@/components/page-header"
import { PropertyCard } from "@/components/property-card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Link from "next/link"

const SAMPLE_PROPERTIES = [
  { id: "cas-101", title: "Cascades Residence 101", neighborhood: "Cascades", price: "$1,250,000", beds: 3, baths: 2, sqft: "2,400", type: "Multifamily" },
  { id: "wr-205", title: "West Ridge Home 205", neighborhood: "West Ridge", price: "$2,100,000", beds: 4, baths: 3, sqft: "3,800", type: "Single-Family" },
  { id: "sq-312", title: "The Square Unit 312", neighborhood: "The Square", price: "$890,000", beds: 2, baths: 2, sqft: "1,650", type: "Multifamily" },
  { id: "pr-05", title: "Private Reserve Estate 5", neighborhood: "Private Reserve", price: "$4,500,000", beds: 5, baths: 4, sqft: "5,200", type: "Single-Family" },
  { id: "er-118", title: "East Ridge Villa 118", neighborhood: "East Ridge", price: "$1,750,000", beds: 4, baths: 3, sqft: "3,200", type: "Multifamily" },
  { id: "cr-07", title: "The Crescent Home 7", neighborhood: "The Crescent", price: "$3,200,000", beds: 4, baths: 3, sqft: "4,100", type: "Single-Family" },
  { id: "pv-22", title: "Play Village Unit 22", neighborhood: "Play Village", price: "$980,000", beds: 3, baths: 2, sqft: "1,900", type: "Multifamily" },
  { id: "ls-10", title: "Lakeside Residence 10", neighborhood: "Lakeside", price: "$2,800,000", beds: 4, baths: 3, sqft: "3,600", type: "Single-Family" },
  { id: "bc-03", title: "Base Camp Cabin 3", neighborhood: "Base Camp", price: "$1,450,000", beds: 3, baths: 2, sqft: "2,200", type: "Single-Family" },
]

export default function ResidencesPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "The Residences" }]}
        title="Explore All Residences"
        description="Browse 330 multifamily units and 113 custom single-family homes across 10 unique neighborhoods on 658 acres."
      >
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search residences..." className="w-64 pl-9" />
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Neighborhood" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Neighborhoods</SelectItem>
              <SelectItem value="cascades">Cascades</SelectItem>
              <SelectItem value="private-reserve">Private Reserve</SelectItem>
              <SelectItem value="base-camp">Base Camp</SelectItem>
              <SelectItem value="the-square">The Square</SelectItem>
              <SelectItem value="west-ridge">West Ridge</SelectItem>
              <SelectItem value="lakeside">Lakeside</SelectItem>
              <SelectItem value="play-village">Play Village</SelectItem>
              <SelectItem value="east-ridge">East Ridge</SelectItem>
              <SelectItem value="the-crescent">The Crescent</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="multifamily">Multifamily</SelectItem>
              <SelectItem value="single-family">Single-Family</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" asChild>
            <Link href="/residences/compare">Compare Properties</Link>
          </Button>
        </div>
      </PageHeader>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
