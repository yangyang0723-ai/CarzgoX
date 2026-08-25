import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import {
  achievements,
  brandsSection,
  contact,
  hero,
  overseasOverview,
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

      {/* 海外业务优势 */}
      <section className="bg-primary">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-primary-foreground lg:text-2xl">
            海外业务优势
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {overseasOverview.cards.map((card, index) => (
              <article
                key={card.title}
                className="flex flex-col border border-primary-foreground/25 bg-primary-foreground p-7"
              >
                <p className="text-xs font-medium tracking-[0.16em] text-primary/65">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-primary">
                  {card.title}
                </h3>
                <div className="mt-5 h-px bg-border" />
                <ul className="mt-5 flex flex-col gap-3">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 销售车型 */}
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
