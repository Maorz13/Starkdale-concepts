import { PropertyCard } from "@/components/property-card"

const SAVED_PROPERTIES = [
  { id: "cas-101", title: "Cascades Residence 101", neighborhood: "Cascades", price: "$1,250,000", beds: 3, baths: 2, sqft: "2,400", type: "Multifamily" },
  { id: "wr-205", title: "West Ridge Home 205", neighborhood: "West Ridge", price: "$2,100,000", beds: 4, baths: 3, sqft: "3,800", type: "Single-Family" },
  { id: "sq-312", title: "The Square Unit 312", neighborhood: "The Square", price: "$890,000", beds: 2, baths: 2, sqft: "1,650", type: "Multifamily" },
]

export default function SavedPropertiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Saved Properties</h1>
        <p className="text-muted-foreground">
          Properties you&apos;ve added to your favorites.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SAVED_PROPERTIES.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  )
}
