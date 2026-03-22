"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { toast } from "sonner"

export function NewsletterForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast.success("Thank you! You've been added to our newsletter.")
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="your@email.com"
        required
        className="max-w-[220px]"
      />
      <Button type="submit" size="icon" variant="outline">
        <Send className="size-4" />
        <span className="sr-only">Subscribe</span>
      </Button>
    </form>
  )
}
