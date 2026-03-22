"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "sonner"

const INTERESTS = [
  "Residences",
  "Wellness & Spa",
  "ROSEBAR Longevity",
  "Resort Stays",
  "Outdoor Activities",
  "Music & Culture",
  "Culinary Experiences",
  "Fitness & Sports",
  "Community Events",
  "Design & Architecture",
]

export default function DetailsPage() {
  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast.success("Your details have been updated.")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Details</h1>
        <p className="text-muted-foreground">
          Update your personal information and interests.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Keep your contact details up to date.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" defaultValue="Jane" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="jane@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" defaultValue="New York" />
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>My Interests</CardTitle>
            <CardDescription>
              Select your interests to personalize your Starkdale experience.
              This affects the content and recommendations you see.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {INTERESTS.map((interest) => (
                <div key={interest} className="flex items-center gap-2">
                  <Checkbox
                    id={interest}
                    defaultChecked={
                      interest === "Residences" ||
                      interest === "Wellness & Spa" ||
                      interest === "Outdoor Activities"
                    }
                  />
                  <Label htmlFor={interest} className="text-sm">
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <Button
              variant="outline"
              onClick={() => toast.success("Interests updated.")}
            >
              Update Interests
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
