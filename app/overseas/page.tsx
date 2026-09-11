import Image from "next/image"
import { Car, Globe, Truck } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { CooperationModes } from "@/components/cooperation-modes"
import { achievements, brandsSection, overseasOverview } from "@/lib/content"

const advantageIcons = { truck: Truck, globe: Globe, car: Car } as const

export const metadata = {
  title: "平台业务 | 久车GO",
  description: overseasOverview.brief,
}

export default function OverseasPage() {
  return (
    <main className="bg-background">
      {/* Cinematic hero */}
      <section className="relative overflow-hidden bg-[#07182d]">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#0867f2]/25 blur-[120px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full bg-[#22b8ff]/20 blur-[120px]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(120,180,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,180,255,0.35) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#22b8ff]/40 bg-[#22b8ff]/10 px-3 py-1 font-mono text-xs font-medium tracking-[0.22em] text-[#7fd4ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22b8ff] shadow-[0_0_10px_2px_rgba(34,184,255,0.9)]" />
              PLATFORM BUSINESS
            </span>
            <h1 className="mt-5 text-balance text-5xl font-black leading-[1.05] tracking-tight text-white lg:text-6xl">
              平台业务
            </h1>
            <div className="mt-8 h-px w-40 bg-gradient-to-r from-[#22b8ff] to-transparent" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60 text-pretty">
              {overseasOverview.brief}
            </p>
          </div>

          <div className="group relative">
            <div aria-hidden="true" className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#22b8ff]/60 via-transparent to-[#0867f2]/60 opacity-70 blur-[2px]" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#0f2a4a]">
              <Image
                src="/images/logistics.png"
                alt="轿运车队运输新车"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#07182d] via-transparent to-transparent opacity-60" />
              <span aria-hidden="true" className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-[#22b8ff]" />
              <span aria-hidden="true" className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-[#22b8ff]" />
              <span aria-hidden="true" className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-[#22b8ff]" />
              <span aria-hidden="true" className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-[#22b8ff]" />
            </div>
          </div>
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

        <div className="relative mt-14 overflow-hidden rounded-2xl border border-[#0f2a4a]/15 bg-secondary p-7 lg:p-9">
          <span aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#22b8ff] to-[#0867f2]" />
          <p className="max-w-4xl pl-3 text-sm leading-relaxed text-muted-foreground text-pretty">
            {overseasOverview.summary}
          </p>
        </div>

        <div className="mt-14">
          <div className="flex items-baseline gap-4">
            <h2 className="text-2xl font-black tracking-tight text-foreground">
              {overseasOverview.advantagesTitle}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {overseasOverview.cards.map((c, index) => {
              const Icon = advantageIcons[c.icon as keyof typeof advantageIcons]
              return (
                <article
                  key={c.title}
                  className="group relative flex min-h-72 flex-col justify-between overflow-hidden rounded-2xl border border-[#0f2a4a] bg-[#07182d] p-7 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#22b8ff]/50 hover:shadow-[0_28px_60px_-30px_rgba(34,184,255,0.5)]"
                >
                  {/* ambient glow on hover */}
                  <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#22b8ff]/0 blur-3xl transition-all duration-500 group-hover:bg-[#22b8ff]/25" />
                  {/* sweep */}
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                  <div className="relative flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#22b8ff] transition-all duration-500 group-hover:border-[#22b8ff]/50 group-hover:bg-[#22b8ff] group-hover:text-[#07182d]">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-4xl font-bold leading-none text-white/10 transition-colors duration-500 group-hover:text-[#22b8ff]/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="relative">
                    <p className="text-4xl font-black leading-none tabular-nums text-[#22b8ff] lg:text-5xl">
                      {c.value}
                    </p>
                    <div
                      className="mt-4 h-px w-10 bg-[#22b8ff] transition-all duration-500 ease-out group-hover:w-16"
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 text-lg font-bold tracking-tight text-white">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60 text-pretty">
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
      <section className="relative overflow-hidden border-y border-[#0f2a4a] bg-[#07182d]">
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#0867f2]/20 blur-[110px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#22b8ff]/15 blur-[110px]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(120,180,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,180,255,0.35) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs font-medium tracking-[0.18em] text-[#7fd4ff]">GLOBAL LOGISTICS</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#22b8ff]/40 to-transparent" />
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white lg:text-4xl">国际物流布局</h2>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-white/60 text-pretty">
            积极响应国家“一带一路”倡议，于 2014 年开展国际化战略布局，力争成为面向全球汽车品牌的汽车供应链服务先行者，业务范围覆盖美洲、欧洲、中亚、东南亚、东亚、中东、非洲等。
          </p>
          <div className="group relative mt-10 aspect-[16/7] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/hero-port.png"
              alt="国际物流港口整车滚装出口"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#07182d] via-transparent to-transparent opacity-70" />
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
                className={`group relative flex min-h-32 flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#22b8ff]/50 hover:bg-white/[0.06] ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
              >
                <span
                  className="absolute left-0 top-0 h-px w-0 bg-[#22b8ff] transition-all duration-500 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
                <h3 className="text-base font-bold tracking-tight text-white">{name}</h3>
                <p className="mt-auto pt-8 text-sm leading-relaxed text-white/55">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 合作品牌及模式 */}
      <section
        id="brands"
        className="scroll-mt-20 border-b border-border bg-secondary"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionHeading
            title={brandsSection.title}
            desc={brandsSection.summary}
          />
          <CooperationModes />
        </div>
      </section>

      {/* 出口业务成果 */}
      <section
        id="achievements"
        className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 lg:px-8"
      >
        <SectionHeading
          title={achievements.title}
          desc={achievements.summary}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.highlights.map((item, index) => (
            <article
              key={item.label}
              className="group relative flex min-h-52 flex-col justify-between overflow-hidden rounded-2xl border border-[#0f2a4a] bg-[#07182d] p-6 text-white transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#22b8ff]/50 hover:shadow-[0_28px_60px_-30px_rgba(34,184,255,0.5)]"
            >
              <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#22b8ff]/0 blur-3xl transition-all duration-500 group-hover:bg-[#22b8ff]/25" />
              <div className="relative">
                <span className="font-mono text-xs font-medium tracking-[0.18em] text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-5xl font-black leading-none text-[#22b8ff]">
                  <span className="font-mono tabular-nums">{item.value}</span>
                  <span className="ml-1 font-sans text-xl font-bold text-white">{item.unit}</span>
                </p>
                <div className="mt-4 h-px w-10 bg-[#22b8ff]/50 transition-all duration-500 ease-out group-hover:w-16 group-hover:bg-[#22b8ff]" aria-hidden="true" />
                <h3 className="mt-4 text-base font-bold">{item.label}</h3>
              </div>
              <p className="relative mt-8 text-sm leading-relaxed text-white/60 text-pretty">{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2">
          {achievements.cards.map((c) => (
            <div
              key={c.title}
              className="group relative bg-card p-7 transition-all duration-500 ease-out hover:z-10 hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(8,103,242,0.3)]"
            >
              <span
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#0867f2] to-[#22b8ff] transition-transform duration-500 ease-out group-hover:scale-x-100"
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
      </section>
    </main>
  )
}
