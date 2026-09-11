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
        <p className="text-xs font-medium tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground text-balance lg:text-3xl">
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
