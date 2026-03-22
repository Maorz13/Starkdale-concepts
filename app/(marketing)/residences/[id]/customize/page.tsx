import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Share2 } from "lucide-react"

const ROOM_OPTIONS = [
  { room: "Living Room", options: ["Modern Minimalist", "Warm Contemporary", "Classic Elegance"] },
  { room: "Kitchen", options: ["Chef's Kitchen", "Open Island", "European Galley"] },
  { room: "Primary Bedroom", options: ["Serene Retreat", "Loft Style", "Garden Suite"] },
  { room: "Bathroom", options: ["Spa Inspired", "Modern Monochrome", "Natural Stone"] },
]

export default async function CustomizePage({
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
          { label: `Property ${id}`, href: `/residences/${id}` },
          { label: "Customize" },
        ]}
        title="Customize Your Property"
        description="Personalize interior finishes, layouts, and features. Share your customized vision with family and friends, or export as PDF."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex aspect-video items-center justify-center rounded-xl bg-muted text-muted-foreground">
                Interactive 3D Customization View
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Room Selections</CardTitle>
                  <CardDescription>
                    Choose finishes for each room
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue={ROOM_OPTIONS[0].room}>
                    <TabsList className="w-full">
                      {ROOM_OPTIONS.map((r) => (
                        <TabsTrigger key={r.room} value={r.room} className="text-xs">
                          {r.room}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {ROOM_OPTIONS.map((r) => (
                      <TabsContent key={r.room} value={r.room} className="mt-4 space-y-2">
                        {r.options.map((opt) => (
                          <label
                            key={opt}
                            className="flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-accent"
                          >
                            <div className="size-10 rounded bg-muted" />
                            <span className="text-sm font-medium">{opt}</span>
                          </label>
                        ))}
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>

              <div className="flex gap-2">
                <Button className="flex-1">
                  <Share2 className="size-4" /> Share
                </Button>
                <Button variant="outline" className="flex-1">
                  <Download className="size-4" /> Export PDF
                </Button>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link href={`/residences/${id}`}>Back to Property</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
