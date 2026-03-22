"use client"

import { PageHeader } from "@/components/page-header"
import { CTASection } from "@/components/cta-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TheSquarePage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Life at Starkdale", href: "/life" },
          { label: "The Square" },
        ]}
        title="The Square"
        description="The pedestrian core of Starkdale — 70,000 square feet of retail and dining, 55,000 square feet of cultural and co-working space, welcoming approximately 34,000 annual visitors. Where community gathers, creates, and connects."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="dining" className="w-full">
            <TabsList className="mb-8 flex-wrap h-auto gap-2 p-2">
              <TabsTrigger value="dining">Dining</TabsTrigger>
              <TabsTrigger value="cultural">Cultural Experiences</TabsTrigger>
              <TabsTrigger value="coworking">Co-working Spaces</TabsTrigger>
              <TabsTrigger value="retail">Retail & Shopping</TabsTrigger>
            </TabsList>
            <TabsContent value="dining">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold">Dining</h3>
                <p className="text-muted-foreground">
                  Restaurants, cafés, and eateries woven into the pedestrian fabric of The Square. From quick bites to leisurely meals, dining at Starkdale reflects the same values — seasonal, thoughtful, and community-centered. Farm-to-table concepts, wellness-focused options, and spaces where neighbors become regulars.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="cultural">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold">Cultural Experiences</h3>
                <p className="text-muted-foreground">
                  Art, performance, and cultural programming embedded in daily life. Galleries, workshops, and events that invite participation. The Square hosts exhibitions, talks, and experiences that reflect the creative, health-aware community — from design showcases to longevity-focused conversations.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="coworking">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold">Co-working Spaces</h3>
                <p className="text-muted-foreground">
                  Purpose-built spaces for remote work and collaboration. High-speed connectivity, private pods, and communal areas where urban professionals can work productively without leaving Starkdale. The 55,000 square feet of cultural and co-working space supports the hybrid lifestyle — city intensity during the week, focused work or creative projects on weekends.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="retail">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold">Retail & Shopping</h3>
                <p className="text-muted-foreground">
                  Curated retail reflecting Starkdale's aesthetic and values. Wellness products, sustainable goods, outdoor gear, and lifestyle essentials. Shops that feel like extensions of home — thoughtful, design-forward, and aligned with a life oriented around nature and longevity.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <CTASection
        title="Experience The Square"
        description="Visit us to walk The Square, explore dining and retail, and see how community life unfolds here."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "Explore Residences", href: "/residences" }}
      />
    </>
  )
}
