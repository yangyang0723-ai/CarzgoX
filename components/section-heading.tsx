import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
}: {
  eyebrow?: string
  title: string
  desc?: string
  align?: "left" | "center"
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          <p className="text-xs font-medium tracking-[0.24em] text-primary">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground text-balance lg:text-[2rem] lg:leading-tight">
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-4 text-sm leading-relaxed text-muted-foreground text-pretty lg:text-base ${
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  )
}
