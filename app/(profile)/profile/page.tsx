import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, FileText, CalendarDays, UserCircle } from "lucide-react"

const OVERVIEW_CARDS = [
  {
    title: "Saved Properties",
    description: "3 properties saved",
    icon: Heart,
    href: "/profile/saved-properties",
  },
  {
    title: "My Proposals",
    description: "1 active proposal",
    icon: FileText,
    href: "/profile/proposals",
  },
  {
    title: "Scheduled Visits",
    description: "2 upcoming visits",
    icon: CalendarDays,
    href: "/profile/visits",
  },
  {
    title: "My Details",
    description: "Profile & interests",
    icon: UserCircle,
    href: "/profile/details",
  },
]

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back. Here&apos;s an overview of your Starkdale activity.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {OVERVIEW_CARDS.map((card) => (
          <Link key={card.href} href={card.href} className="group">
            <Card className="h-full transition-colors group-hover:border-primary/50">
              <CardHeader className="flex flex-row items-center gap-3">
                <card.icon className="size-5 text-muted-foreground" />
                <div>
                  <CardTitle className="text-base">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Saved Cascades Residence 101</p>
                  <p className="text-muted-foreground">2 days ago</p>
                </div>
                <Heart className="size-4 text-muted-foreground" />
              </li>
              <li className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-medium">Scheduled a visit</p>
                  <p className="text-muted-foreground">3 days ago</p>
                </div>
                <CalendarDays className="size-4 text-muted-foreground" />
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Generated proposal for West Ridge 205</p>
                  <p className="text-muted-foreground">1 week ago</p>
                </div>
                <FileText className="size-4 text-muted-foreground" />
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full" asChild>
              <Link href="/residences">Browse Residences</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/wellness">Explore Wellness</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
