import type { LucideIcon } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureGridProps {
  tag?: string
  title: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
}

export function FeatureGrid({
  tag,
  title,
  description,
  features,
  columns = 3,
  className,
}: FeatureGridProps) {
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
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="mb-2 size-8 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
