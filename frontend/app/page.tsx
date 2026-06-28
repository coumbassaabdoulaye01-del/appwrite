export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
        Next.js
      </span>
      <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
        Appwrite Frontend
      </h1>
      <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
        The dev script is wired up. Start building your frontend here in
        {" "}
        <code className="font-mono text-foreground">frontend/app/page.tsx</code>.
      </p>
    </main>
  )
}
