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
        <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          {/* 标题区：以股票代码作为视觉主体 */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.24em] text-primary-foreground/60">
                {about.changjiuShares.eyebrow}
              </p>
              <p className="mt-6 font-mono text-5xl font-bold leading-none tracking-tight lg:text-7xl">
                HK.6959
              </p>
              <h2 className="mt-5 text-xl font-bold tracking-tight text-primary-foreground/90 lg:text-2xl">
                长久股份
              </h2>
            </div>

            <dl className="flex shrink-0 divide-x divide-primary-foreground/15 border-y border-primary-foreground/15">
              {[
                ["上市地", "香港交易所"],
                ["行业定位", "汽车流通综合服务"],
                ["集团积淀", "30+ 年"],
              ].map(([label, value]) => (
                <div key={label} className="px-5 py-4 lg:px-6">
                  <dt className="text-[0.6875rem] tracking-[0.14em] text-primary-foreground/50">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-primary-foreground lg:text-base">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 企业概况 */}
          <div className="mt-16 border-t border-primary-foreground/15 pt-10 lg:grid lg:grid-cols-12 lg:gap-10">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-primary-foreground/60 lg:col-span-3">
              {about.changjiuShares.overviewTitle}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/80 text-pretty lg:col-span-9 lg:mt-0 lg:text-lg">
              {about.changjiuShares.overview}
            </p>
          </div>

          {/* 三大核心业务板块 */}
          <div className="mt-20">
            <div className="flex items-center gap-5">
              <h3 className="shrink-0 text-lg font-bold tracking-tight lg:text-xl">
                {about.changjiuShares.businessTitle}
              </h3>
              <span className="h-px flex-1 bg-primary-foreground/15" aria-hidden="true" />
            </div>

            <div className="mt-8 grid gap-px bg-primary-foreground/15 md:grid-cols-3">
              {about.changjiuShares.businesses.map(([title, description], index) => {
                const Icon = changjiuBusinessIcons[index]
                return (
                  <div key={title} className="group relative flex flex-col gap-5 bg-primary p-7">
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                      <span className="font-mono text-3xl font-bold leading-none text-primary-foreground/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold tracking-tight text-primary-foreground">
                        {title}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70 text-pretty">
                        {description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 企业价值观 */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <SectionHeading eyebrow="CORE VALUES" title={about.changjiuShares.valuesTitle} />

          <div className="mt-12 flex flex-col">
            {about.changjiuShares.values.map(([title, description], index) => {
              const Icon = changjiuValueIcons[index]
              return (
                <article
                  key={title}
                  className="border-t border-border py-9 last:border-b lg:grid lg:grid-cols-12 lg:gap-10"
                >
                  <div className="flex items-center gap-4 lg:col-span-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-secondary">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground">
                        {title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground text-pretty lg:col-span-8 lg:mt-0">
                    {description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

    </>
  )
}
