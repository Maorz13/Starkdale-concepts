import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Bed,
  Bath,
  Maximize,
  Heart,
  Share2,
  ArrowLeftRight,
  Paintbrush,
  Calculator,
} from "lucide-react"

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "The Residences", href: "/residences" },
          { label: `Property ${id}` },
        ]}
        title={`Residence ${id.toUpperCase()}`}
        description="Cascades Neighborhood"
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex aspect-video items-center justify-center rounded-lg bg-muted text-muted-foreground md:col-span-2 md:aspect-[16/10]">
              Main Property Image
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <div className="flex aspect-video items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
                Gallery Image 2
              </div>
              <div className="flex aspect-video items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
                Gallery Image 3
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>Multifamily</Badge>
                <Badge variant="outline">Cascades</Badge>
              </div>
              <h2 className="mt-4 text-2xl font-bold">$1,250,000</h2>
              <div className="mt-2 flex items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Bed className="size-4" /> 3 Beds
                </span>
                <span className="flex items-center gap-1">
                  <Bath className="size-4" /> 2 Baths
                </span>
                <span className="flex items-center gap-1">
                  <Maximize className="size-4" /> 2,400 SF
                </span>
              </div>

              <Separator className="my-6" />

              <Tabs defaultValue="details">
                <TabsList>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="neighborhood">Neighborhood</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="mt-4 space-y-4">
                  <p className="text-muted-foreground">
                    This beautifully designed residence in the Cascades
                    neighborhood offers open-concept living with floor-to-ceiling
                    windows framing the natural landscape. Steps from 22 km of
                    trails and the community&apos;s 10-acre lake.
                  </p>
                  <p className="text-muted-foreground">
                    Every home at Starkdale is designed with longevity in
                    mind — natural materials, biophilic design principles, and
                    smart infrastructure for health monitoring and air quality.
                  </p>
                </TabsContent>
                <TabsContent value="features" className="mt-4">
                  <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    <li>Open-concept floor plan</li>
                    <li>Floor-to-ceiling windows</li>
                    <li>Chef&apos;s kitchen with island</li>
                    <li>Primary suite with walk-in closet</li>
                    <li>Smart home integration</li>
                    <li>EV charging ready</li>
                    <li>Biophilic design elements</li>
                    <li>Air quality monitoring</li>
                  </ul>
                </TabsContent>
                <TabsContent value="neighborhood" className="mt-4 space-y-4">
                  <p className="text-muted-foreground">
                    The Cascades neighborhood features 74 units nestled among
                    natural water features and lush greenery. Residents enjoy
                    direct trail access, proximity to the Spa, and a
                    short walk to The Square.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                  <CardDescription>
                    Customize, compare, or start the purchase process.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" asChild>
                    <Link href={`/residences/${id}/customize`}>
                      <Paintbrush className="size-4" /> Customize Property
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/residences/compare">
                      <ArrowLeftRight className="size-4" /> Compare Properties
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/residences/financing">
                      <Calculator className="size-4" /> Financing Tools
                    </Link>
                  </Button>
                  <Separator />
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="size-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Book a Tour</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
