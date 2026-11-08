import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Code2,
  CookingPot,
  GraduationCap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-16 py-6 sm:py-12">
      <section className="relative overflow-hidden rounded-3xl border bg-card px-6 py-12 sm:px-12 sm:py-16">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative max-w-3xl space-y-7">
          <Badge variant="secondary" className="px-3 py-1">
            <Code2 />
            Personal portfolio
          </Badge>
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Curious mind. Always learning.
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hello, and welcome.
              <span className="mt-2 block text-muted-foreground">
                I’m an IT student exploring what technology can do.
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I’m learning how the digital world works, building my skills one
              step at a time, and making room for the things I enjoy along the
              way.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get to know me
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/hobbies"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border px-4 text-sm font-medium transition-colors hover:bg-muted"
            >
              Explore my hobbies
              <ArrowDownRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-xl space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            A little about me
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Learning, growing, and staying curious.
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            I’m studying Information Technology at Naga College Foundation.
            I’m interested in emerging technology and enjoy discovering new
            ways to improve my skills.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="h-full">
            <CardContent className="flex gap-4 p-6">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="size-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Currently studying</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Information Technology at Naga College Foundation.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="flex gap-4 p-6">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <CookingPot className="size-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Outside of class</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  I enjoy cooking and making time for creative exploration.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex flex-col gap-4 rounded-2xl border bg-muted/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Want to know more?</h2>
          <p className="text-sm text-muted-foreground">
            Take a look at my background, studies, and interests.
          </p>
        </div>
        <Link
          href="/about"
          className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted"
        >
          Visit my about page
          <ArrowRight className="size-4" />
        </Link>
      </section>
    </div>
  );
}