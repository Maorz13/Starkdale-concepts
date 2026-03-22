"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { MapPin, Building2 } from "lucide-react"

const LOCATIONS = [
  {
    value: "nyc",
    label: "New York Office",
    icon: Building2,
    detail: "Midtown Manhattan",
  },
  {
    value: "starkdale",
    label: "Starkdale Farms",
    icon: MapPin,
    detail: "Upstate New York",
  },
]

export function ScheduleVisitForm() {
  const [location, setLocation] = useState<string>("nyc")
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule a Visit</CardTitle>
        <CardDescription>
          Experience Starkdale in person. Book a guided tour of the community,
          residences, spa, and resort.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Location</Label>
          <div className="grid grid-cols-2 gap-3">
            {LOCATIONS.map(({ value, label, icon: Icon, detail }) => (
              <button
                key={value}
                type="button"
                onClick={() => setLocation(value)}
                className={cn(
                  "flex flex-col items-start gap-1 rounded-lg border p-4 text-left transition-all duration-150 hover:border-primary/50 hover:bg-accent",
                  location === value
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-border bg-background"
                )}
              >
                <Icon className={cn("size-4", location === value ? "text-primary" : "text-muted-foreground")} />
                <span className="text-sm font-medium">{label}</span>
                <span className="text-xs text-muted-foreground">{detail}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Preferred date</Label>
          <div className="rounded-lg border">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={{ before: new Date() }}
              className="w-full"
            />
          </div>
        </div>

        <Button className="w-full">Request Visit</Button>
      </CardContent>
    </Card>
  )
}
