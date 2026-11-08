import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code2, CookingPot, Sparkles } from "lucide-react";

const hobbies = [
  {
    title: "Cooking",
    category: "A creative break",
    description:
      "I enjoy cooking and trying things out in the kitchen. It’s a fun way to be creative, learn as I go, and share something good.",
    icon: CookingPot,
    accent: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Exploring technology",
    category: "Curiosity in action",
    description:
      "I like keeping up with exciting technologies and learning how they shape the way we live and work.",
    icon: Code2,
    accent: "bg-primary/10 text-primary",
  },
  {
    title: "Learning new things",
    category: "Always in progress",
    description:
      "Whether I’m building my skills with Git and GitHub or discovering a new topic, I enjoy the process of learning step by step.",
    icon: BookOpen,
    accent: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
];

export default function Hobbies() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 py-4 sm:py-8">
      <header className="space-y-4">
        <Badge variant="secondary" className="px-3 py-1">
          <Sparkles />
          Beyond the classroom
        </Badge>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Hobbies & interests
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            A few things I enjoy make life more interesting and keep me curious,
            creative, and open to learning.
          </p>
        </div>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;

          return (
            <Card className="h-full" key={hobby.title}>
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-2xl bg-muted">
                  <Icon className={`size-6 ${hobby.accent}`} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {hobby.category}
                </p>
                <CardTitle className="text-xl">{hobby.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {hobby.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <section className="rounded-2xl border bg-muted/40 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          A balance that works for me
        </p>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I like pairing curiosity with hands-on practice—learning about
          technology, getting creative in the kitchen, and staying open to
          whatever I might discover next.
        </p>
      </section>
    </div>
  );
}
