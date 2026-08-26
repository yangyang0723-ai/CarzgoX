import Image from "next/image"
import {
  Globe2,
  Package,
  Plane,
  Ship,
  Train,
  Truck,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { about } from "@/lib/content"

export const metadata = {
  title: "关于我们 | 久车GO",
  description: about.paragraphs[0],
}

const logisticsIcons = {
  rail: Train,
  ship: Ship,
  air: Plane,
  road: Truck,
  network: Globe2,
  package: Package,
} as const


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

      {/* 国际物流布局 */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionHeading
            eyebrow="GLOBAL LOGISTICS"
            title={about.logisticsTitle}
          />
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground text-pretty">
            {about.logisticsSummary}
          </p>

          <div className="relative mt-10 aspect-[16/7] overflow-hidden border border-border">
            <Image
              src="/images/hero-port.png"
              alt="国际物流港口整车滚装出口"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {about.logisticsCapabilities.map((item) => {
              const Icon = logisticsIcons[item.icon as keyof typeof logisticsIcons]
              return (
                <div key={item.name} className="flex gap-4 bg-card p-6">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-card-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground text-pretty">
                      {item.description}
                    </p>
                    <p className="mt-1.5 font-mono text-xs leading-relaxed text-muted-foreground">
                      {item.english}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </>
  )
}
