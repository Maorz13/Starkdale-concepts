import Link from "next/link"
import { Bed, Bath, Maximize, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface PropertyCardProps {
  id: string
  title: string
  neighborhood: string
  price: string
  beds: number
  baths: number
  sqft: string
  type: string
}

export function PropertyCard({
  id,
  title,
  neighborhood,
  price,
  beds,
  baths,
  sqft,
  type,
}: PropertyCardProps) {
  return (
    <Card className="group h-full">
      <Link href={`/residences/${id}`}>
        <div className="relative flex aspect-video items-center justify-center rounded-t-lg bg-muted text-sm text-muted-foreground">
          Property Image
          <Badge variant="secondary" className="absolute right-3 top-3">
            {type}
          </Badge>
        </div>
      </Link>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">
              <Link href={`/residences/${id}`} className="hover:underline">
                {title}
              </Link>
            </CardTitle>
            <p className="text-sm text-muted-foreground">{neighborhood}</p>
          </div>
          <Button variant="ghost" size="icon" className="shrink-0">
            <Heart className="size-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-xl font-semibold">{price}</p>
      </CardContent>
      <CardFooter className="gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Bed className="size-4" /> {beds}
        </span>
        <span className="flex items-center gap-1">
          <Bath className="size-4" /> {baths}
        </span>
        <span className="flex items-center gap-1">
          <Maximize className="size-4" /> {sqft}
        </span>
      </CardFooter>
    </Card>
  )
}
