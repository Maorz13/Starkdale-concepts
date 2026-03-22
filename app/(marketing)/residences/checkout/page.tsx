"use client"

import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Lock, ShieldCheck } from "lucide-react"
import { toast } from "sonner"

export default function CheckoutPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "The Residences", href: "/residences" },
          { label: "Checkout" },
        ]}
        title="Complete Your Purchase"
        description="Secure online property purchase. All transactions are encrypted and protected."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="co-first">First name</Label>
                      <Input id="co-first" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="co-last">Last name</Label>
                      <Input id="co-last" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="co-email">Email</Label>
                    <Input id="co-email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="co-phone">Phone</Label>
                    <Input id="co-phone" type="tel" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="size-5" /> Payment Details
                  </CardTitle>
                  <CardDescription>
                    Secure payment processing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="exp-month">Exp. month</Label>
                      <Input id="exp-month" placeholder="MM" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="exp-year">Exp. year</Label>
                      <Input id="exp-year" placeholder="YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms of sale and privacy policy
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex h-24 items-center justify-center rounded bg-muted text-sm text-muted-foreground">
                    Property Image
                  </div>
                  <div>
                    <p className="font-medium">Cascades Residence 101</p>
                    <p className="text-sm text-muted-foreground">
                      3 Bed / 2 Bath / 2,400 SF
                    </p>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between text-sm">
                    <span>Property price</span>
                    <span>$1,250,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Reservation deposit</span>
                    <span>$25,000</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-semibold">
                    <span>Due today</span>
                    <span>$25,000</span>
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  <Button
                    className="w-full"
                    onClick={() =>
                      toast.success("Reservation submitted! Check your email for confirmation.")
                    }
                  >
                    <Lock className="size-4" /> Place Reservation
                  </Button>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <ShieldCheck className="size-3" /> SSL encrypted & secure
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
