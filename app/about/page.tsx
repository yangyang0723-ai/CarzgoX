import Image from "next/image"
import { Car, Flame, Gauge, HeartHandshake, Lightbulb, ShieldCheck, Users } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { about } from "@/lib/content"

const changjiuBusinessIcons = [ShieldCheck, Car, Gauge]
const changjiuValueIcons = [Users, HeartHandshake, Lightbulb, Flame]

export const metadata = {
  title: "关于我们 | 久车GO",
  description: about.paragraphs[0],
}


export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-primary">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <p className="text-xs font-medium tracking-[0.24em] text-primary-foreground/80">
            ABOUT US
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl">
            关于我们
          </h1>
        </div>
      </section>

      {/* 集团介绍 */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="GROUP PROFILE" title={about.title} />
        <div className="mt-8 flex max-w-3xl flex-col gap-5">
          {about.paragraphs.map((p) => (
            <p
              key={p.slice(0, 12)}
              className="text-sm leading-relaxed text-muted-foreground text-pretty lg:text-base"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* 集团业务版图 */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-[100rem] px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="BUSINESS PORTFOLIO" title={about.businessTitle} />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            {about.businesses.map((business, index) => (
              <article
                key={business.name}
                className="group flex flex-col overflow-hidden border border-border bg-card"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                  <Image
                    src={business.image}
                    alt={`${business.name}业务场景`}
                    fill
                    sizes="(min-width: 768px) 19vw, (min-width: 640px) 48vw, 92vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-0 top-0 bg-primary px-2 py-1 font-mono text-[0.6875rem] text-primary-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold tracking-tight text-card-foreground">
                    {business.name}
                  </h3>
                  <p className="mt-1 font-mono text-[0.6875rem] tracking-[0.14em] text-primary">
                    {business.english}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground text-pretty">
                    {business.position}
                  </p>
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted-foreground text-pretty">
                    {business.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 长久股份介绍 */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <p className="text-xs font-medium tracking-[0.24em] text-primary-foreground/70">
            {about.changjiuShares.eyebrow}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-6 border-b border-primary-foreground/15 pb-10">
            <h2 className="text-2xl font-bold tracking-tight text-pretty lg:text-3xl">
              {about.changjiuShares.title}
            </h2>
            <div className="inline-flex items-center gap-2 border border-primary-foreground/25 px-4 py-2 text-xs tracking-[0.04em] text-primary-foreground/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              港股上市 · <span className="font-mono">HONG KONG LISTED</span>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <h3 className="text-lg font-bold tracking-tight text-primary-foreground/90 lg:text-xl">
              {about.changjiuShares.overviewTitle}
            </h3>
            <p className="text-sm leading-relaxed text-primary-foreground/75 text-pretty lg:text-base">
              {about.changjiuShares.overview}
            </p>
          </div>
        </div>
      </section>

      {/* 三大核心业务板块 */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="CORE BUSINESS" title={about.changjiuShares.businessTitle} />
          <div className="mt-10 divide-y divide-border border-y border-border">
            {about.changjiuShares.businesses.map(([title, description], index) => {
              const Icon = changjiuBusinessIcons[index]
              return (
                <div
                  key={title}
                  className="grid gap-4 py-8 sm:grid-cols-[auto_auto_1fr] sm:items-start sm:gap-8"
                >
                  <span className="font-mono text-sm text-primary/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-secondary">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
                      {description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 企业价值观 */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="CORE VALUES" title={about.changjiuShares.valuesTitle} />
          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
            {about.changjiuShares.values.map(([title, description], index) => {
              const Icon = changjiuValueIcons[index]
              return (
                <div key={title} className="flex flex-col gap-4 bg-card p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-bold tracking-tight text-card-foreground">{title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </>
  )
}
