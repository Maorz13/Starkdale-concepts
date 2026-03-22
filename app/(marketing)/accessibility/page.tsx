import { PageHeader } from "@/components/page-header"

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Accessibility Statement" }]}
        title="Accessibility Statement"
        description="Our commitment to making Starkdale accessible to everyone."
      />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold">Our Commitment</h2>
              <p className="mt-2 text-muted-foreground">
                Starkdale is committed to ensuring digital accessibility for
                people with disabilities. We continually improve the user
                experience for everyone and apply relevant accessibility
                standards.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Standards</h2>
              <p className="mt-2 text-muted-foreground">
                This website aims to conform to the Web Content Accessibility
                Guidelines (WCAG) 2.1, Level AA. These guidelines help make web
                content more accessible to a wider range of people with
                disabilities.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Features</h2>
              <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                <li>Semantic HTML structure for screen reader compatibility</li>
                <li>Keyboard navigation support throughout the platform</li>
                <li>Sufficient color contrast ratios</li>
                <li>Alt text for all meaningful images</li>
                <li>Responsive design for all device sizes</li>
                <li>Focus indicators on interactive elements</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Physical Accessibility</h2>
              <p className="mt-2 text-muted-foreground">
                Starkdale Farms is designed with physical accessibility in
                mind. Common areas, pathways, and amenities are built to
                accommodate visitors and residents of all mobility levels.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Feedback</h2>
              <p className="mt-2 text-muted-foreground">
                We welcome your feedback on the accessibility of this website.
                If you encounter any barriers, please contact us at
                accessibility@starkdale.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
