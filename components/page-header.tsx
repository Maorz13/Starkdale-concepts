import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeaderProps {
  breadcrumbs?: BreadcrumbItem[]
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export function PageHeader({
  breadcrumbs = [],
  title,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <section className={cn("border-b bg-muted/30 py-12 md:py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs.length > 0 && (
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.label} className="contents">
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {i === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={crumb.href ?? "#"}>
                        {crumb.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </span>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
