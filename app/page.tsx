import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowDown } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { HeroText } from "@/components/hero-text"

const vehicleSlug = (name: string) => encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))
import {
  achievements,
  brandsSection,
  overseasOverview,
  portStores,
  vehicleCatalog,
} from "@/lib/content"

const partnerBrands = [
  { name: "北京现代", slug: "hyundai", svg: "default" },
  { name: "一汽奔腾", slug: "bestune" },
  { name: "岚图汽车", slug: "voyah" },
  { name: "吉利汽车", slug: "geely" },
  { name: "一汽丰田", slug: "toyota" },
  { name: "一汽大众", slug: "volkswagen", svg: "default" },
  { name: "一汽奥迪", slug: "audi", svg: "default" },
  { name: "捷达", slug: "jetta" },
  { name: "东风汽车", slug: "dongfeng" },
  { name: "起亚", slug: "kia", svg: "default" },
]

const modules = [
  {
    no: "01",
    href: "/overseas#overview",
    title: "业务介绍",
    brief: overseasOverview.brief,
    image: "/images/logistics.png",
    alt: "轿运车队运输新车",
  },
  {
    no: "02",
    href: "/overseas#brands",
    title: brandsSection.title,
    brief: brandsSection.brief,
    image: "/images/kd-plant.png",
    alt: "KD 汽车组装工厂生产线",
  },
  {
    no: "03",
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
      <section className="relative isolate flex min-h-[640px] items-center overflow-hidden lg:min-h-[760px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/banner-sample.png"
          aria-label="汽车物流港口运输视频"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        >
          <source src="/videos/home-banner-sample.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

        <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-24 lg:px-8">
          <p className="text-xs font-medium tracking-[0.3em] text-white/70">
            CHANGJIU OVERSEAS
          </p>
          <HeroText />
        </div>

        <div className="absolute inset-x-0 bottom-0 hidden items-center justify-between border-t border-white/15 px-5 py-5 lg:flex lg:px-8">
          <span className="text-[0.6875rem] font-medium tracking-[0.28em] text-white/60">
            SCROLL
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce text-white/60" aria-hidden="true" />
          <span className="text-[0.6875rem] font-medium tracking-[0.28em] text-white/60">
            久车GO · 整车出海服务平台
          </span>
        </div>
      </section>

      {/* 平台业务三大模块 */}
      <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-8">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] text-primary">
              PLATFORM BUSINESS
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance lg:text-4xl">
              平台业务
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
            整合供应链与海外渠道资源，构建整车出海全链路服务体系。
          </p>
        </div>

        <div className="mt-2">
          {modules.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="group grid grid-cols-1 gap-6 border-b border-border py-10 transition-colors lg:grid-cols-[5rem_1fr_18rem] lg:items-center lg:gap-10"
            >
              <span className="font-mono text-sm tracking-[0.1em] text-muted-foreground transition-colors group-hover:text-primary">
                {m.no}
              </span>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary lg:text-3xl">
                  {m.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty lg:text-base">
                  {m.brief}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  查看更多
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>

              <div className="relative h-40 w-full overflow-hidden lg:h-32">
                <Image
                  src={m.image}
                  alt={m.alt}
                  fill
                  sizes="(min-width: 1024px) 18rem, 100vw"
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 车型目录 */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
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

          <div className="mt-12 flex flex-col gap-10">
            {vehicleCatalog.map((group) => (
              <div key={group.module} className="border-t border-border pt-6">
                <div className="flex items-center gap-4">
                  <p className="shrink-0 text-xs font-medium tracking-[0.2em] text-primary">
                    {group.module}
                  </p>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="mt-6 flex flex-col gap-8">
                  {group.brands.map((brand) => (
                    <div key={brand.brand} className="grid gap-4 md:grid-cols-[7rem_1fr]">
                      <h3 className="pt-1 text-base font-bold tracking-tight text-card-foreground">
                        {brand.brand}
                      </h3>
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                        {brand.models.map((model) => (
                          <Link
                            key={model.name}
                            href={`/vehicles/${vehicleSlug(model.name)}`}
                            className="group overflow-hidden bg-card"
                          >
                            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                              <Image
                                src={model.image}
                                alt={`${brand.brand} ${model.name} 车型`}
                                fill
                                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 28vw, 45vw"
                                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                                  model.name === "SONATA" || model.name === "VS8" ? "scale-[3] group-hover:scale-[3.1]" : ""
                                }`}
                              />
                            </div>
                            <figcaption className="border-t border-border px-3 py-2.5 text-sm font-medium text-card-foreground transition-colors group-hover:text-primary">
                              {model.name}
                            </figcaption>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 口岸店 */}
      <section className="border-t border-border bg-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/port-store.png"
              alt="霍尔果斯口岸国际汽车市场"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.28em] text-background/60">
              PORT STORES
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-background lg:text-4xl">
              口岸店
            </h2>
            <div className="mt-10 border-t border-background/15 pt-6">
              <p className="text-xs tracking-[0.2em] text-background/50">
                现有口岸店
              </p>
              <p className="mt-3 text-base font-medium leading-relaxed text-background">
                {portStores.current}
              </p>
            </div>
            <div className="mt-6 border-t border-background/15 pt-6">
              <p className="text-xs tracking-[0.2em] text-background/50">
                战略规划
              </p>
              <p className="mt-3 text-sm leading-relaxed text-background/75 text-pretty">
                {portStores.plan}
              </p>
            </div>
            <Link
              href="/vehicles#port-stores"
              className="mt-10 flex w-fit items-center gap-1.5 text-sm font-medium text-background"
            >
              查看更多
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 合作品牌 */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="PARTNER BRANDS" title="合作品牌" />
          <div className="mt-12 grid grid-cols-2 divide-x divide-y divide-border border border-border sm:grid-cols-3 md:grid-cols-5">
            {partnerBrands.map((brand) => (
              <div
                key={brand.name}
                className="flex h-24 items-center justify-center px-5 py-4 transition-colors hover:bg-secondary"
              >
                {brand.svg ? (
                  <img
                    src={`https://thesvg.org/icons/${brand.slug}/${brand.svg}.svg`}
                    alt={`${brand.name} Logo`}
                    className="h-10 w-full max-w-[9rem] object-contain"
                  />
                ) : (
                  <span className="text-base font-bold tracking-tight text-card-foreground">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
