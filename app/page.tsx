import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import {
  achievements,
  brandsSection,
  contact,
  hero,
  portStores,
  vehicleCatalog,
} from "@/lib/content"

const modules = [
  {
    href: "/overseas#data",
    label: "模块 01",
    title: "核心数据",
    brief: "年均发运量近300万台，自有轿运车超2000辆，可控船只10艘。",
    image: "/images/logistics.png",
    alt: "轿运车队运输新车",
  },
  {
    href: "/overseas#brands",
    label: "模块 02",
    title: brandsSection.title,
    brief: brandsSection.brief,
    image: "/images/kd-plant.png",
    alt: "KD 汽车组装工厂生产线",
  },
  {
    href: "/overseas#achievements",
    label: "模块 03",
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
          <p className="text-xs font-medium tracking-[0.24em] text-primary-foreground/80">
            久车GO · 海外业务
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-primary-foreground text-balance lg:text-6xl">
            {hero.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/85 text-pretty lg:text-base">
            {hero.sub}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/overseas"
              className="flex items-center gap-2 bg-background px-6 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90"
            >
              海外业务
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/vehicles"
              className="flex items-center gap-2 border border-primary-foreground/45 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              车型目录
            </Link>
          </div>
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
                <span className="text-xs font-medium tracking-[0.16em] text-primary">
                  {m.label}
                </span>
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
          <SectionHeading eyebrow="VEHICLE CATALOG" title="车型目录" />
          <Link
            href="/vehicles"
            className="flex items-center gap-1.5 text-sm font-medium text-primary"
          >
            查看更多
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {vehicleCatalog.map((group) => (
            <div key={group.module} className="border border-border bg-card p-6">
              <p className="text-xs font-medium tracking-[0.16em] text-primary">
                {group.module}
              </p>
              <div className="mt-5 flex flex-col gap-5">
                {group.brands.map((b) => (
                  <div key={b.brand}>
                    <h3 className="text-base font-bold tracking-tight text-card-foreground">
                      {b.brand}
                    </h3>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {b.models.map((m) => (
                        <span
                          key={m}
                          className="bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                        >
                          {m}
                        </span>
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

      {/* 联系我们 */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="CONTACT US" title="联系我们" />
          <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
            {[
              { icon: Phone, label: "电话", value: contact.phone },
              { icon: Mail, label: "邮箱", value: contact.email },
              { icon: MapPin, label: "地址", value: contact.address },
            ].map((c) => (
              <div key={c.label} className="bg-card p-7">
                <c.icon className="h-5 w-5 text-primary" />
                <p className="mt-4 text-xs tracking-[0.16em] text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-card-foreground">
                  {c.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
