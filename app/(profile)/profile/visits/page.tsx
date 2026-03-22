"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { CalendarDays, Clock, MapPin } from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"

const VISITS = [
  {
    id: "V-001",
    date: "Saturday, March 22, 2026",
    time: "10:00 AM",
    type: "Full Community Tour",
    status: "Confirmed",
    location: "Starkdale Sales Center",
  },
  {
    id: "V-002",
    date: "Saturday, April 5, 2026",
    time: "2:00 PM",
    type: "Residences & Spa Tour",
    status: "Pending",
    location: "Starkdale Sales Center",
  },
]

export default function VisitsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Scheduled Visits
          </h1>
          <p className="text-muted-foreground">
            Manage your upcoming visits to Starkdale.
          </p>
        </div>
        <Button asChild>
          <Link href="/contact">Schedule New Visit</Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {VISITS.map((visit) => (
          <Card key={visit.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{visit.type}</CardTitle>
                <Badge
                  variant={
                    visit.status === "Confirmed" ? "default" : "secondary"
                  }
                >
                  {visit.status}
                </Badge>
              </div>
              <CardDescription>Reference: {visit.id}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CalendarDays className="size-4 text-muted-foreground" />
                {visit.date}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="size-4 text-muted-foreground" />
                {visit.time}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="size-4 text-muted-foreground" />
                {visit.location}
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  toast.info("Reschedule feature coming soon.")
                }
              >
                Change Date
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="sm">
                    Cancel Visit
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Cancel this visit?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will cancel your {visit.type} scheduled for{" "}
                      {visit.date}. You can always schedule a new visit later.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Keep Visit</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() =>
                        toast.success("Visit cancelled.")
                      }
                    >
                      Cancel Visit
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
