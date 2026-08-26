import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import {
  achievements,
  brandsSection,
  hero,
  overseasOverview,
  portStores,
  vehicleCatalog,
} from "@/lib/content"

const modules = [
  {
    href: "/overseas#overview",
    title: "业务介绍",
    brief: overseasOverview.brief,
    image: "/images/logistics.png",
    alt: "轿运车队运输新车",
  },
  {
    href: "/overseas#brands",
    title: brandsSection.title,
    brief: brandsSection.brief,
    image: "/images/kd-plant.png",
    alt: "KD 汽车组装工厂生产线",
  },
  {
    href: "/overseas#achievements",
    title: achievements.title,
    brief: achievements.brief,
    image: "/images/port-store.png",
    alt: "口岸国际汽车市场",
  },
]

export default function HomePage() {
  return (
    <>
      {/* 轮播图 / 视频位 */}
      <section className="relative isolate flex min-h-[520px] items-center overflow-hidden lg:min-h-[620px]">
        <Image
          src="/images/hero-port.png"
          alt="港口整车出口滚装码头"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/25" />

        <div className="mx-auto w-full max-w-6xl px-5 py-20 lg:px-8">
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-primary-foreground text-balance lg:text-6xl">
            {hero.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/85 text-pretty lg:text-base">
            {hero.sub}
          </p>
        </div>
      </section>

      {/* 海外业务三大模块 */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="OVERSEAS BUSINESS" title="海外业务" />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {modules.map((m) => (
            <article
              key={m.href}
              className="group flex flex-col border border-border bg-card transition-colors hover:border-primary"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-bold tracking-tight text-card-foreground">
                  {m.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {m.brief}
                </p>
                <Link
                  href={m.href}
                  className="mt-2 flex items-center gap-1.5 text-sm font-medium text-primary"
                >
                  查看更多
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 车型目录 */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="VEHICLE CATALOG" title="销售车型" />
          <Link
            href="/vehicles"
            className="flex items-center gap-1.5 text-sm font-medium text-primary"
          >
            查看更多
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          {vehicleCatalog.map((group) => (
            <div key={group.module} className="border-t border-border pt-5">
              <div className="flex items-center gap-4">
                <p className="shrink-0 text-xs font-medium tracking-[0.16em] text-primary">
                  {group.module}
                </p>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="mt-5 flex flex-col gap-6">
                {group.brands.map((brand) => (
                  <div key={brand.brand} className="grid gap-4 md:grid-cols-[7rem_1fr]">
                    <h3 className="pt-1 text-base font-bold tracking-tight text-card-foreground">
                      {brand.brand}
                    </h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                      {brand.models.map((model) => (
                        <figure
                          key={model.name}
                          className="group overflow-hidden border border-border bg-card"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                            <Image
                              src={model.image}
                              alt={`${brand.brand} ${model.name} 车型`}
                              fill
                              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 28vw, 45vw"
                              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                                model.name === "SONATA" ? "scale-[2.8] group-hover:scale-[2.9]" : ""
                              }`}
                            />
                          </div>
                          <figcaption className="border-t border-border px-3 py-2.5 text-sm font-medium text-card-foreground">
                            {model.name}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 口岸店 */}
      <section className="border-t border-border bg-primary">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden border border-primary-foreground/20">
            <Image
              src="/images/port-store.png"
              alt="霍尔果斯口岸国际汽车市场"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-primary-foreground/70">
              PORT STORES
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-primary-foreground">
              口岸店
            </h2>
            <div className="mt-8 border-t border-primary-foreground/20 pt-6">
              <p className="text-xs tracking-[0.16em] text-primary-foreground/60">
                现有口岸店
              </p>
              <p className="mt-2 text-base font-medium text-primary-foreground">
                {portStores.current}
              </p>
            </div>
            <div className="mt-6 border-t border-primary-foreground/20 pt-6">
              <p className="text-xs tracking-[0.16em] text-primary-foreground/60">
                战略规划
              </p>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80 text-pretty">
                {portStores.plan}
              </p>
            </div>
            <Link
              href="/vehicles#port-stores"
              className="mt-8 flex w-fit items-center gap-1.5 text-sm font-medium text-primary-foreground"
            >
              查看更多
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
