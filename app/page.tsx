import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { PlatformBusiness } from "@/components/platform-business"
import { ScrollReveal } from "@/components/scroll-reveal"
import { HeroParallax } from "@/components/hero-parallax"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinematic",
})

const vehicleSlug = (name: string) => encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))
import {
  achievements,
  brandsSection,
  hero,
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
    href: "/overseas#overview",
    title: "业务介绍",
    brief: overseasOverview.brief,
    image: "/images/logistics.png",
    alt: "轿运车队运输新车",
    label: "OVERVIEW",
  },
  {
    href: "/overseas#brands",
    title: brandsSection.title,
    brief: brandsSection.brief,
    image: "/images/kd-plant.png",
    alt: "KD 汽车组装工厂生产线",
    label: "BRANDS",
  },
  {
    href: "/overseas#achievements",
    title: achievements.title,
    brief: achievements.brief,
    image: "/images/port-store.png",
    alt: "口岸国际汽车市场",
    label: "ACHIEVEMENTS",
  },
]

export default function HomePage() {
  return (
    <div className={`home-cinematic font-cinematic ${inter.variable}`}>
      {/* 轮播图 / 视频位：首屏轻微视差，深色叠加，禁用粒子特效 */}
      <section className="relative isolate flex min-h-[560px] items-center overflow-hidden lg:min-h-[680px]">
        <HeroParallax>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/banner-sample.png"
            aria-label="汽车物流港口运输视频"
            className="h-full w-full object-cover"
          >
            <source src="/videos/home-banner-sample.mp4" type="video/mp4" />
          </video>
        </HeroParallax>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111111]/96 via-[#111111]/82 to-[#111111]/40" />

        <div className="mx-auto w-full max-w-6xl px-5 py-20 lg:px-8">
          <div
            data-reveal
            className="flex items-center gap-3 opacity-0 [animation:cinematic-in_0.9s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards]"
          >
            <span className="h-px w-10 bg-primary" aria-hidden="true" />
            <p className="font-display text-xs font-medium tracking-[0.32em] text-background/70">
              OVERSEAS BUSINESS
            </p>
          </div>
          <h1
            data-reveal
            className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.02em] text-background text-balance opacity-0 [animation:cinematic-in_1s_cubic-bezier(0.16,1,0.3,1)_0.25s_forwards] lg:text-6xl"
          >
            {hero.tagline}
          </h1>
          <p
            data-reveal
            className="mt-6 max-w-xl text-sm leading-relaxed tracking-wide text-background/80 text-pretty opacity-0 [animation:cinematic-in_1s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards] lg:text-base"
          >
            {hero.sub}
          </p>
          <div
            data-reveal
            className="mt-10 opacity-0 [animation:cinematic-in_1s_cubic-bezier(0.16,1,0.3,1)_0.55s_forwards]"
          >
            <Link
              href="/contact"
              className="cta-lift inline-flex items-center gap-2.5 bg-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground"
            >
              立即询盘
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 平台业务三大模块 */}
      <ScrollReveal as="section" className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="PLATFORM BUSINESS" title="平台业务" />
        <PlatformBusiness modules={modules} />
      </ScrollReveal>

      {/* 车型目录 */}
      <ScrollReveal as="section" className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="VEHICLE CATALOG" title="销售车型" />
          <Link
            href="/vehicles"
            className="cta-lift flex items-center gap-1.5 text-sm font-medium text-primary"
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
                        <Link
                          key={model.name}
                          href={`/vehicles/${vehicleSlug(model.name)}`}
                          className="vehicle-card group overflow-hidden border border-border bg-card"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                            <Image
                              src={model.image}
                              alt={`${brand.brand} ${model.name} 车型`}
                              fill
                              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 28vw, 45vw"
                              className={`object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110 ${
                                model.name === "SONATA" || model.name === "VS8" ? "scale-[3] group-hover:scale-[3.15]" : ""
                              }`}
                            />
                          </div>
                          <figcaption className="border-t border-border px-3 py-2.5 text-sm font-medium text-card-foreground">
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
      </ScrollReveal>

      {/* 口岸店 */}
      <ScrollReveal as="section" className="border-t border-border bg-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="vehicle-card relative aspect-[4/3] overflow-hidden border border-background/15">
            <Image
              src="/images/port-store.png"
              alt="霍尔果斯口岸国际汽车市场"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              <p className="text-xs font-medium tracking-[0.24em] text-background/70">
                PORT STORES
              </p>
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-background">
              口岸店
            </h2>
            <div className="mt-8 border-t border-background/15 pt-6">
              <p className="text-xs tracking-[0.16em] text-background/55">
                现有口岸店
              </p>
              <p className="mt-2 text-base font-medium text-background">
                {portStores.current}
              </p>
            </div>
            <div className="mt-6 border-t border-background/15 pt-6">
              <p className="text-xs tracking-[0.16em] text-background/55">
                战略规划
              </p>
              <p className="mt-2 text-sm leading-relaxed text-background/75 text-pretty">
                {portStores.plan}
              </p>
            </div>
            <Link
              href="/vehicles#port-stores"
              className="cta-lift mt-8 flex w-fit items-center gap-1.5 text-sm font-medium text-primary"
            >
              查看更多
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* 合作品牌 */}
      <ScrollReveal as="section" className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
          <SectionHeading eyebrow="PARTNER BRANDS" title="合作品牌" />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {partnerBrands.map((brand) => (
              <div
                key={brand.name}
                className="vehicle-card flex h-24 items-center justify-center border border-border bg-card px-5 py-4"
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
      </ScrollReveal>
    </div>
  )
}
