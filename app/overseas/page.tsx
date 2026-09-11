import Image from "next/image"
import { Car, Globe, Truck } from "lucide-react"
import { PageBanner } from "@/components/page-banner"
import { SectionHeading } from "@/components/section-heading"
import { CooperationModes } from "@/components/cooperation-modes"
import { achievements, brandsSection, overseasOverview } from "@/lib/content"
import { cn } from "@/lib/utils"

const advantageIcons = { truck: Truck, globe: Globe, car: Car } as const

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
            {overseasOverview.cards.map((c, index) => {
              const Icon = advantageIcons[c.icon as keyof typeof advantageIcons]
              return (
                <article
                  key={c.title}
                  className="group flex min-h-72 flex-col justify-between border border-border bg-card p-7 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#0f2a4a] hover:bg-[#0f2a4a] hover:shadow-[0_24px_60px_-28px_rgba(15,42,74,0.45)]"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      aria-hidden="true"
                      className="h-7 w-7 text-primary transition-colors duration-500 ease-out group-hover:text-accent"
                    />
                    <span className="font-mono text-sm font-medium tracking-[0.16em] text-muted-foreground/50 transition-colors duration-500 ease-out group-hover:text-primary-foreground/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <p className="text-4xl font-bold leading-none tabular-nums text-primary transition-colors duration-500 ease-out group-hover:text-accent lg:text-5xl">
                      {c.value}
                    </p>
                    <div
                      className="mt-4 h-px w-10 bg-primary/30 transition-all duration-500 ease-out group-hover:w-16 group-hover:bg-accent"
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 text-lg font-bold tracking-tight text-card-foreground transition-colors duration-500 ease-out group-hover:text-primary-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty transition-colors duration-500 ease-out group-hover:text-primary-foreground/75">
                      {c.desc}
                    </p>
                  </div>
                </article>
              )
            })}
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
                className={`group relative flex min-h-32 flex-col overflow-hidden border border-border bg-card p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-24px_rgba(8,103,242,0.3)] ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
              >
                <span
                  className="absolute left-0 top-0 h-px w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
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
              className="group relative bg-card p-7 transition-all duration-500 ease-out hover:z-10 hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(8,103,242,0.3)]"
            >
              <span
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />
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
              className="group tech-corners relative flex min-h-52 flex-col justify-between bg-primary p-6 text-primary-foreground text-accent/0 transition-all duration-500 ease-out hover:-translate-y-1 hover:text-accent/40 hover:shadow-[0_24px_60px_-28px_rgba(0,200,255,0.45)]"
            >
              <div>
                <p className="text-4xl leading-none text-accent">
                  <span className="font-mono tabular-nums">{item.value}</span>
                  <span className="ml-1 font-sans text-xl text-primary-foreground">{item.unit}</span>
                </p>
                <div className="mt-4 h-px w-10 bg-accent/50 transition-all duration-500 ease-out group-hover:w-16 group-hover:bg-accent" aria-hidden="true" />
                <h3 className="mt-4 text-base font-bold">{item.label}</h3>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-primary-foreground/80 text-pretty">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
