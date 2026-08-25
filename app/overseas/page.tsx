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

      {/* 模块1 业务概况 */}
      <section
        id="overview"
        className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 lg:px-8"
      >
        <SectionHeading
          eyebrow="模块 01"
          title={overseasOverview.title}
          desc={overseasOverview.summary}
        />
        <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
          {overseasOverview.cards.map((c) => (
            <div key={c.title} className="bg-card p-7">
              <h3 className="text-base font-bold tracking-tight text-card-foreground">
                {c.title}
              </h3>
              <div className="mt-3 h-0.5 w-8 bg-primary" />
              <ul className="mt-4 flex flex-col gap-2">
                {c.items.map((i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 模块2 合作品牌及模式 */}
      <section
        id="brands"
        className="scroll-mt-20 border-y border-border bg-secondary"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionHeading
            eyebrow="模块 02"
            title={brandsSection.title}
            desc={brandsSection.summary}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {brandsSection.models.map((m) => (
              <div
                key={m.no}
                className="flex flex-col border border-border bg-card p-7"
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
          eyebrow="模块 03"
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

        <div className="mt-14">
          <h3 className="text-lg font-bold tracking-tight text-foreground">
            核心数据
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {achievements.stats.map((s) => (
              <div key={s.label} className="bg-secondary p-7">
                <p className="flex items-baseline gap-1 text-primary">
                  <span className="text-3xl font-bold tracking-tight">
                    {s.value}
                  </span>
                  <span className="text-sm">{s.unit}</span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
