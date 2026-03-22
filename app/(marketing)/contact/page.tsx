import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { ScheduleVisitForm } from "@/components/schedule-visit-form"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Contact Us" }]}
        title="Get in Touch"
        description="Whether you're exploring residences, planning a resort stay, or curious about wellness programs — we'd love to hear from you."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <ScheduleVisitForm />
            </div>

            <div className="space-y-6">
              <ContactForm />

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Starkdale Farms, Upstate New York
                        <br />
                        1h 25min drive from Midtown Manhattan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">hello@starkdale.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Sales Office Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Mon–Fri: 9am–6pm
                        <br />
                        Sat–Sun: 10am–4pm
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
