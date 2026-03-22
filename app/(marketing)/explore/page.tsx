import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play, Maximize2, Volume2 } from "lucide-react"

export default function ExplorePage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Explore Starkdale" }]}
        title="Immersive Experience"
        description="Navigate Starkdale as if you were there — explore homes, trails, the spa, resort, and main street through our interactive video experience."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-muted">
            <div className="flex flex-col items-center gap-4">
              <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
                <Play className="size-8 text-primary" />
              </div>
              <p className="text-lg font-medium">Immersive Video Experience</p>
              <p className="max-w-md text-center text-sm text-muted-foreground">
                A high-quality, AI-personalized journey through 658 acres of
                nature, architecture, and community — adapted to your interests.
              </p>
            </div>

            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button variant="secondary" size="icon">
                <Volume2 className="size-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <Maximize2 className="size-4" />
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border p-6 text-center">
              <p className="text-3xl font-bold">658</p>
              <p className="text-sm text-muted-foreground">Acres of nature</p>
            </div>
            <div className="rounded-xl border p-6 text-center">
              <p className="text-3xl font-bold">10</p>
              <p className="text-sm text-muted-foreground">Unique neighborhoods</p>
            </div>
            <div className="rounded-xl border p-6 text-center">
              <p className="text-3xl font-bold">85</p>
              <p className="text-sm text-muted-foreground">Minutes from Manhattan</p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/residences">Explore Residences</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
