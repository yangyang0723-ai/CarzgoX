import Image from "next/image"
import { PageBanner } from "@/components/page-banner"
import { SectionHeading } from "@/components/section-heading"
import { CooperationModes } from "@/components/cooperation-modes"
import { achievements, brandsSection, overseasOverview } from "@/lib/content"

export const metadata = {
  title: "平台业务 | 久车GO",
  description: overseasOverview.brief,
}

export default function OverseasPage() {
  return (
    <>
      <PageBanner
        eyebrow="PLATFORM BUSINESS"
        title="平台业务"
        image="/images/logistics.png"
        alt="轿运车队运输新车"
      />

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
              <article
                key={c.title}
                className="group flex h-full flex-col border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"
              >
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
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {[
              ["国际铁路", "中欧班列资源 · 境外段优质资源"],
              ["国际海运", "自营国际滚装船 · 大型船公司"],
              ["国际空运", "丰富货代经验及资源"],
              ["国际公路", "TIR 一站直达 · 跨境公路运输"],
              ["海外服务体系", "海外基地 · 境外落地分拨"],
            ].map(([name, description], index) => (
              <article
                key={name}
                className={`group flex min-h-32 flex-col border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-background hover:shadow-lg ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
              >
                <h3 className="text-base font-bold tracking-tight text-card-foreground">{name}</h3>
                <p className="mt-auto pt-8 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
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
          <CooperationModes />
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
            <div
              key={c.title}
              className="bg-card p-7 transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-base font-bold tracking-tight text-card-foreground">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.highlights.map((item) => (
            <article
              key={item.label}
              className="group flex min-h-52 flex-col justify-between rounded-2xl border border-primary/20 bg-primary p-6 text-primary-foreground transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-xl"
            >
              <div>
                <p className="font-serif text-4xl leading-none text-accent">
                  {item.value}<span className="ml-1 text-xl text-primary-foreground">{item.unit}</span>
                </p>
                <h3 className="mt-6 text-base font-bold">{item.label}</h3>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-primary-foreground/80 text-pretty">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
