import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroAction {
  label: string
  href: string
  variant?: "default" | "outline" | "secondary"
}

interface HeroSectionProps {
  tag?: string
  title: string
  description: string
  actions?: HeroAction[]
  imageSrc?: string
  imagePlaceholder?: string
  reverse?: boolean
  className?: string
}

export function HeroSection({
  tag,
  title,
  description,
  actions = [],
  imageSrc,
  imagePlaceholder = "Image",
  reverse = false,
  className,
}: HeroSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[&>*:first-child]:order-2"
          )}
        >
          <div className="flex flex-col gap-6">
            {tag && (
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {tag}
              </p>
            )}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              {description}
            </p>
            {actions.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {actions.map((action) => (
                  <Button
                    key={action.label}
                    asChild
                    size="lg"
                    variant={action.variant ?? "default"}
                  >
                    <Link href={action.href}>{action.label}</Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:aspect-square">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imagePlaceholder}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <span className="flex size-full items-center justify-center text-sm text-muted-foreground">
                {imagePlaceholder}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
