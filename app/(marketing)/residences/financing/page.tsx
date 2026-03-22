"use client"

import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Separator } from "@/components/ui/separator"
import { Calculator, FileText } from "lucide-react"
import { useState } from "react"

export default function FinancingPage() {
  const [homePrice, setHomePrice] = useState(1500000)
  const [downPayment, setDownPayment] = useState([20])
  const [term, setTerm] = useState([30])

  const downAmount = homePrice * (downPayment[0] / 100)
  const loanAmount = homePrice - downAmount
  const rate = 0.065 / 12
  const n = term[0] * 12
  const monthly = Math.round(
    (loanAmount * (rate * Math.pow(1 + rate, n))) /
      (Math.pow(1 + rate, n) - 1)
  )

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "The Residences", href: "/residences" },
          { label: "Financing & Mortgage Tools" },
        ]}
        title="Financing & Mortgage Tools"
        description="Estimate monthly payments and request a personalized mortgage proposal from our financing partners."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="size-5" /> Mortgage Calculator
                </CardTitle>
                <CardDescription>
                  Adjust the sliders to estimate your monthly payment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Home Price</Label>
                    <span className="text-sm font-medium">
                      ${homePrice.toLocaleString()}
                    </span>
                  </div>
                  <Input
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    step={50000}
                    min={500000}
                    max={10000000}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Down Payment</Label>
                    <span className="text-sm font-medium">
                      {downPayment[0]}% (${downAmount.toLocaleString()})
                    </span>
                  </div>
                  <Slider
                    value={downPayment}
                    onValueChange={setDownPayment}
                    min={5}
                    max={50}
                    step={5}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Loan Term</Label>
                    <span className="text-sm font-medium">{term[0]} years</span>
                  </div>
                  <Slider
                    value={term}
                    onValueChange={setTerm}
                    min={10}
                    max={30}
                    step={5}
                  />
                </div>

                <Separator />

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Estimated Monthly Payment
                  </p>
                  <p className="text-4xl font-bold">
                    ${monthly.toLocaleString()}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Based on 6.5% interest rate. For illustration only.
                  </p>
                </div>
              </CardContent>
            </Card>

            <ContactForm
              title="Request a Mortgage Proposal"
              description="Submit your details and our financing partners will prepare a personalized mortgage proposal."
              showInterest={false}
            />
          </div>
        </div>
      </section>
    </>
  )
}
