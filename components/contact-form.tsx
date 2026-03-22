"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "sonner"

interface ContactFormProps {
  title?: string
  description?: string
  showInterest?: boolean
}

export function ContactForm({
  title = "Contact Us",
  description = "Tell us about what you're looking for and we'll be in touch.",
  showInterest = true,
}: ContactFormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast.success("Thank you! We'll be in touch soon.")
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" />
          </div>
          {showInterest && (
            <div className="space-y-2">
              <Label>Area of interest</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residences">Residences</SelectItem>
                  <SelectItem value="resort">Resort Stay</SelectItem>
                  <SelectItem value="wellness">Wellness & Spa</SelectItem>
                  <SelectItem value="rosebar">ROSEBAR Longevity</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={4} />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
