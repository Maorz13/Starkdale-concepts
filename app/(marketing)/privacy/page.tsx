import { PageHeader } from "@/components/page-header"

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Privacy Policy" }]}
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
      />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold">Information We Collect</h2>
              <p className="mt-2 text-muted-foreground">
                We collect information you provide directly, such as when you
                create an account, submit a contact form, schedule a visit, or
                make a purchase. This may include your name, email address,
                phone number, and payment information.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">How We Use Your Information</h2>
              <p className="mt-2 text-muted-foreground">
                We use your information to provide and improve our services,
                communicate with you about properties and programs, process
                transactions, and personalize your experience on the Starkdale
                platform.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Data Protection</h2>
              <p className="mt-2 text-muted-foreground">
                We implement industry-standard security measures to protect your
                personal information. All transactions are encrypted using SSL
                technology. We do not sell your personal information to third
                parties.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Cookies & Analytics</h2>
              <p className="mt-2 text-muted-foreground">
                We use cookies and similar technologies to enhance your
                experience, analyze site usage, and assist in our marketing
                efforts. You can manage cookie preferences through your browser
                settings.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Your Rights</h2>
              <p className="mt-2 text-muted-foreground">
                You have the right to access, correct, or delete your personal
                information at any time. Contact us at privacy@starkdale.com for
                any data-related requests.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Contact</h2>
              <p className="mt-2 text-muted-foreground">
                For questions about this privacy policy, please contact us at
                privacy@starkdale.com or through our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
