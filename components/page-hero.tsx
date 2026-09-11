import Image from "next/image"

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-foreground">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-20"
          />
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-b from-foreground/70 via-foreground/85 to-foreground"
            aria-hidden="true"
          />
        </>
      )}
      {/* 精密感装饰网格线 */}
      <div
        className="absolute inset-y-0 right-0 -z-10 hidden w-px bg-background/10 lg:block lg:right-1/4"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-primary" aria-hidden="true" />
          <p className="text-xs font-medium tracking-[0.28em] text-background/70">
            {eyebrow}
          </p>
        </div>
        <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-background text-balance lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-background/70 text-pretty lg:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
