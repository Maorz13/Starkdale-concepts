import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ContentSectionProps {
  tag?: string
  title: string
  description: string
  imageSrc?: string
  imagePlaceholder?: string
  reverse?: boolean
  children?: React.ReactNode
  className?: string
}

export function ContentSection({
  tag,
  title,
  description,
  imageSrc,
  imagePlaceholder = "Image",
  reverse = false,
  children,
  className,
}: ContentSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[&>*:first-child]:order-2"
          )}
        >
          <div className="flex flex-col gap-4">
            {tag && (
              <Badge variant="secondary" className="uppercase tracking-widest">
                {tag}
              </Badge>
            )}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground">{description}</p>
            {children}
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imagePlaceholder}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
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
