import Image from "next/image"
import { Check } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { achievements, brandsSection, overseasOverview } from "@/lib/content"

export const metadata = {
  title: "海外业务 | 久车GO",
  description: overseasOverview.brief,
}

export default function OverseasPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <Image
          src="/images/logistics.png"
          alt="轿运车队运输新车"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary/85" />
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <p className="text-xs font-medium tracking-[0.24em] text-primary-foreground/80">
            OVERSEAS BUSINESS
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl">
            海外业务
          </h1>
        </div>
      </section>

      {/* 业务概况 */}
      <section
        id="overview"
        className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 lg:px-8"
      >
        <SectionHeading
          eyebrow="BUSINESS OVERVIEW"
          title={overseasOverview.title}
        />

        <div className="mt-14 border-l-2 border-primary bg-secondary p-7 lg:p-9">
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground text-pretty">
            {overseasOverview.summary}
          </p>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            {overseasOverview.advantagesTitle}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {overseasOverview.cards.map((c, index) => (
              <article key={c.title} className="flex h-full flex-col border border-border bg-card p-7">
                <p className="text-xs font-medium tracking-[0.16em] text-primary/65">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-primary">
                  {c.title}
                </h3>
                <div className="mt-4 h-px bg-border" />
                <ul className="mt-5 flex flex-col gap-3">
                  {c.items.map((i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary"
                      />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 国际物流布局 */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="GLOBAL LOGISTICS" title="国际物流布局" />
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground text-pretty">
            积极响应国家“一带一路”倡议，于 2014 年开展国际化战略布局，力争成为面向全球汽车品牌的汽车供应链服务先行者，业务范围覆盖美洲、欧洲、中亚、东南亚、东亚、中东、非洲等。
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
            {[
              ["国际铁路", "中欧班列资源 · 境外段优质资源"],
              ["国际海运", "自营国际滚装船 · 大型船公司"],
              ["国际空运", "丰富货代经验及资源"],
              ["国际公路", "TIR 一站直达 · 跨境公路运输"],
              ["海外服务体系", "海外基地 · 境外落地分拨"],
            ].map(([name, description]) => (
              <div key={name} className="bg-card p-6">
                <h3 className="text-base font-bold tracking-tight text-card-foreground">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 模块2 合作品牌及模式 */}
      <section
        id="brands"
        className="scroll-mt-20 border-y border-border bg-secondary"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionHeading
            title={brandsSection.title}
            desc={brandsSection.summary}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {brandsSection.models.map((m) => (
              <div
                key={m.no}
                className="flex h-full flex-col border border-border bg-card p-7"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold tracking-tight text-primary">
                    {m.no}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-card-foreground">
                    {m.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-accent px-2.5 py-1 text-xs text-accent-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-xs font-medium tracking-[0.16em] text-muted-foreground">
                  {m.label}
                </p>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {m.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground text-pretty">
                        {i}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 模块3 出口业务成果 */}
      <section
        id="achievements"
        className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 lg:px-8"
      >
        <SectionHeading
          title={achievements.title}
          desc={achievements.summary}
        />
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
          {achievements.cards.map((c) => (
            <div key={c.title} className="bg-card p-7">
              <h3 className="text-base font-bold tracking-tight text-card-foreground">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
