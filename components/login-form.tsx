"use client"

import Link from "next/link"
import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export function LoginForm({ className }: { className?: string }) {
  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast.success("Welcome back to Starkdale!")
  }

  function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast.success("Account created! Check your email for verification.")
  }

  return (
    <div className={cn("grid gap-6 md:grid-cols-2", className)}>
      <Card>
        <CardHeader className="text-center">
          <Link href="/" className="mx-auto mb-4 flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Leaf className="size-4" />
            </div>
            <span className="text-lg font-semibold">Starkdale</span>
          </Link>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="w-full">
              <TabsTrigger value="login" className="flex-1">
                Log In
              </TabsTrigger>
              <TabsTrigger value="signup" className="flex-1">
                Sign Up
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="mt-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input id="login-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Log In
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  <Link href="#" className="underline hover:text-foreground">
                    Forgot password?
                  </Link>
                </p>
              </form>
            </TabsContent>
            <TabsContent value="signup" className="mt-4">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="signup-first">First name</Label>
                    <Input id="signup-first" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-last">Last name</Label>
                    <Input id="signup-last" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="hidden items-center justify-center rounded-xl bg-muted md:flex">
        <div className="px-8 text-center">
          <p className="text-2xl font-bold tracking-tight">
            Your Healthiest Chapter
            <br />
            Starts Here
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            658 acres of nature, longevity science, and community — just 85
            minutes from Manhattan.
          </p>
        </div>
      </div>
    </div>
  )
}
