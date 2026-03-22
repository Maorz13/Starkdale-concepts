import { PageHeader } from "@/components/page-header"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const COMPARE_PROPERTIES = [
  { id: "cas-101", name: "Cascades 101", type: "Multifamily", neighborhood: "Cascades", beds: 3, baths: 2, sqft: "2,400", price: "$1,250,000", lot: "N/A" },
  { id: "wr-205", name: "West Ridge 205", type: "Single-Family", neighborhood: "West Ridge", beds: 4, baths: 3, sqft: "3,800", price: "$2,100,000", lot: "2.1 acres" },
  { id: "pr-05", name: "Private Reserve 5", type: "Single-Family", neighborhood: "Private Reserve", beds: 5, baths: 4, sqft: "5,200", price: "$4,500,000", lot: "4.0 acres" },
]

export default function ComparePage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "The Residences", href: "/residences" },
          { label: "Compare Properties" },
        ]}
        title="Compare Properties"
        description="View properties side by side to find the perfect fit for your lifestyle."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[160px]">Feature</TableHead>
                {COMPARE_PROPERTIES.map((p) => (
                  <TableHead key={p.id}>{p.name}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Image</TableCell>
                {COMPARE_PROPERTIES.map((p) => (
                  <TableCell key={p.id}>
                    <div className="flex h-24 w-40 items-center justify-center rounded bg-muted text-xs text-muted-foreground">
                      Image
                    </div>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Type</TableCell>
                {COMPARE_PROPERTIES.map((p) => (
                  <TableCell key={p.id}>
                    <Badge variant="secondary">{p.type}</Badge>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Neighborhood</TableCell>
                {COMPARE_PROPERTIES.map((p) => (
                  <TableCell key={p.id}>{p.neighborhood}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Price</TableCell>
                {COMPARE_PROPERTIES.map((p) => (
                  <TableCell key={p.id} className="font-semibold">{p.price}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bedrooms</TableCell>
                {COMPARE_PROPERTIES.map((p) => (
                  <TableCell key={p.id}>{p.beds}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bathrooms</TableCell>
                {COMPARE_PROPERTIES.map((p) => (
                  <TableCell key={p.id}>{p.baths}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Square Feet</TableCell>
                {COMPARE_PROPERTIES.map((p) => (
                  <TableCell key={p.id}>{p.sqft}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Lot Size</TableCell>
                {COMPARE_PROPERTIES.map((p) => (
                  <TableCell key={p.id}>{p.lot}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Actions</TableCell>
                {COMPARE_PROPERTIES.map((p) => (
                  <TableCell key={p.id}>
                    <Button size="sm" asChild>
                      <Link href={`/residences/${p.id}`}>View Details</Link>
                    </Button>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  )
}
