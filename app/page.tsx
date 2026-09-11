import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowDown } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { HeroText } from "@/components/hero-text"
import { GlobeWireframe } from "@/components/globe-wireframe"
import { VehicleHomeBrowser } from "@/components/vehicle-home-browser"
import {
  achievements,
  brandsSection,
  overseasOverview,
  portStores,
  vehicleCatalog,
} from "@/lib/content"

const partnerBrands = [
  { name: "北京现代", slug: "hyundai", hasLogo: true },
  { name: "一汽奔腾", slug: "bestune", hasLogo: false },
  { name: "岚图汽车", slug: "voyah", hasLogo: false },
  { name: "吉利汽车", slug: "geely", hasLogo: false },
  { name: "一汽丰田", slug: "toyota", hasLogo: true },
  { name: "一汽大众", slug: "volkswagen", hasLogo: true },
  { name: "一汽奥迪", slug: "audi", hasLogo: true },
  { name: "捷达", slug: "jetta", hasLogo: false },
  { name: "东风汽车", slug: "dongfeng", hasLogo: false },
  { name: "起亚", slug: "kia", hasLogo: true },
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
      {/* 首屏 Banner —— 明亮真实摄影 + 轻量渐变 + 地球线框元素 */}
      <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-[#0f2a4a] lg:min-h-[760px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/banner-sample.png"
          aria-label="汽车物流港口运输视频"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        >
          <source src="/videos/home-banner-sample.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07182d]/85 via-[#0f2a4a]/35 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07182d]/65 via-[#0f2a4a]/20 to-transparent" />
        <GlobeWireframe className="pointer-events-none absolute -right-24 top-1/2 -z-10 h-[560px] w-[560px] -translate-y-1/2 text-[#00c8ff]/20 lg:-right-10" />

        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-24 text-center lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#00c8ff]">
            CarzgoX · Global Auto Export
          </p>
          <HeroText />
        </div>

        <div className="absolute inset-x-0 bottom-0 hidden items-center justify-between border-t border-white/20 bg-gradient-to-t from-[#07182d]/50 to-transparent px-5 py-5 lg:flex lg:px-8">
          <span className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-white/70">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce text-white/70" aria-hidden="true" />
          <span className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-white/70">
            CarzgoX · One-Stop Auto Export Platform
          </span>
        </div>
      </section>

      {/* 平台业务三大模块 —— 浅灰背景 + 编号卡片 */}
      <section className="bg-[#f4f7fb] py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Platform Business
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance lg:text-4xl">
              平台业务
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
              整合供应链与海外渠道资源，构建整车出海全链路服务体系。
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {modules.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07182d]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {m.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {m.brief}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    查看更多
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>

                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 车型目录 —— 白色内容区承载统一的深色科技面板 */}
      <section className="relative isolate border-t border-border bg-background">
        <div className="relative mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <SectionHeading eyebrow="VEHICLE CATALOG" title="销售车型" align="center" />

          <div className="mt-10">
            <VehicleHomeBrowser catalog={vehicleCatalog} />
          </div>
        </div>
      </section>

      {/* 全球网络 / 口岸店 ���— 深蓝大面积背景 + 物流路线元素 */}
      <section className="relative isolate overflow-hidden border-t border-white/10 bg-[#07182d]">
        <GlobeWireframe className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-[520px] w-[520px] -translate-y-1/2 text-[#00c8ff]/10" />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/port-store.png"
              alt="霍尔果斯口岸国际汽车市场"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-[#00c8ff] lg:text-left">
              Global Network
            </p>
            <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-white lg:text-left lg:text-4xl">
              口岸店
            </h2>
            <div className="mt-10 rounded-xl border border-white/15 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                现有口岸店
              </p>
              <p className="mt-3 text-base font-medium leading-relaxed text-white">
                {portStores.current}
              </p>
            </div>
            <div className="mt-6 rounded-xl border border-white/15 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                战略规划
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75 text-pretty">
                {portStores.plan}
              </p>
            </div>
            <Link
              href="/vehicles#port-stores"
              className="mt-10 flex w-fit items-center gap-1.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              查看更多
              <ArrowRight className="h-3.5 w-3.5 text-[#00c8ff]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 合作品牌 —— 白色内容区 */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="PARTNER BRANDS" title="合作品牌" align="center" />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {partnerBrands.map((brand) => (
              <div
                key={brand.name}
                className="flex h-32 flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-9 items-center justify-center">
                  {brand.hasLogo ? (
                    <img
                      src={`https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${brand.slug}/default.svg`}
                      alt=""
                      aria-hidden="true"
                      className="h-9 w-auto max-w-[6rem] object-contain"
                    />
                  ) : (
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
                      aria-hidden="true"
                    >
                      {brand.name.charAt(0)}
                    </div>
                  )}
                </div>
                <span className="text-center text-xs font-semibold leading-snug tracking-tight text-card-foreground">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
