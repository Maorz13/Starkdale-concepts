import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTASectionProps {
  title: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
  className?: string
}

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("bg-primary text-primary-foreground", className)}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="h-10 px-6">
              <Link href={primaryAction.href}>{primaryAction.label}</Link>
            </Button>
            {secondaryAction && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-10 px-6 border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href={secondaryAction.href}>
                  {secondaryAction.label}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
