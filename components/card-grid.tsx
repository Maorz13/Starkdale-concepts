import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CardItem {
  title: string
  description: string
  href: string
  imageSrc?: string
  imagePlaceholder?: string
}

interface CardGridProps {
  tag?: string
  title: string
  description?: string
  items: CardItem[]
  columns?: 2 | 3 | 4
  className?: string
}

export function CardGrid({
  tag,
  title,
  description,
  items,
  columns = 3,
  className,
}: CardGridProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {tag && (
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {tag}
            </p>
          )}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          )}
        </div>
        <div
          className={cn(
            "grid gap-6",
            columns === 2 && "sm:grid-cols-2",
            columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
            columns === 4 && "sm:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <Card className="h-full transition-colors group-hover:border-primary/50">
                <div className="relative aspect-video overflow-hidden rounded-t-lg bg-muted">
                  {item.imageSrc ? (
                    <Image
                      src={item.imageSrc}
                      alt={item.imagePlaceholder ?? item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <span className="flex size-full items-center justify-center text-sm text-muted-foreground">
                      {item.imagePlaceholder ?? item.title}
                    </span>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
