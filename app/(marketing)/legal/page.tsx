import { PageHeader } from "@/components/page-header"

export default function LegalPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Legal" }]}
        title="Legal Information"
        description="Terms of use, disclaimers, and legal notices for the Starkdale platform."
      />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold">Terms of Use</h2>
              <p className="mt-2 text-muted-foreground">
                By accessing and using the Starkdale platform, you agree to be
                bound by these terms. The platform is provided for informational
                and transactional purposes related to Starkdale Farms properties,
                hospitality, and wellness services.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Property Listings</h2>
              <p className="mt-2 text-muted-foreground">
                All property listings, floor plans, renderings, and pricing are
                subject to change without notice. Images and visualizations are
                artist&apos;s representations and may not reflect the final
                delivered product. Consult with our sales team for the most
                current information.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Intellectual Property</h2>
              <p className="mt-2 text-muted-foreground">
                All content on this platform — including text, images, logos,
                design elements, and software — is the property of Starkdale
                Farms and is protected by copyright and trademark laws.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Limitation of Liability</h2>
              <p className="mt-2 text-muted-foreground">
                Starkdale Farms shall not be liable for any indirect, incidental,
                or consequential damages arising from the use of this platform.
                The information provided is for general purposes and should not
                be considered financial or legal advice.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Governing Law</h2>
              <p className="mt-2 text-muted-foreground">
                These terms are governed by the laws of the State of New York.
                Any disputes shall be resolved in the courts of New York State.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Contact</h2>
              <p className="mt-2 text-muted-foreground">
                For legal inquiries, please contact legal@starkdale.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
