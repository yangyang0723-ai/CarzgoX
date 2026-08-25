import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { about } from "@/lib/content"

export const metadata = {
  title: "关于我们 | 久车GO",
  description: about.paragraphs[0],
}

const links = [
  { label: "海外业务", href: "/overseas" },
  { label: "销售车型", href: "/vehicles" },
  { label: "联系我们", href: "/contact" },
]

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-primary">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <p className="text-xs font-medium tracking-[0.24em] text-primary-foreground/80">
            ABOUT US
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl">
            关于我们
          </h1>
        </div>
      </section>

      {/* 集团介绍 */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="GROUP PROFILE" title={about.title} />
        <div className="mt-8 flex max-w-3xl flex-col gap-5">
          {about.paragraphs.map((p) => (
            <p
              key={p.slice(0, 12)}
              className="text-sm leading-relaxed text-muted-foreground text-pretty lg:text-base"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* 国际物流布局 */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionHeading
            eyebrow="GLOBAL LOGISTICS"
            title={about.logisticsTitle}
          />
          <div className="relative mt-10 aspect-[16/7] overflow-hidden border border-border">
            <Image
              src="/images/hero-port.png"
              alt="国际物流港口整车滚装出口"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 快捷入口 */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid gap-px bg-border md:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center justify-between bg-card p-7 transition-colors hover:bg-secondary"
            >
              <span className="text-base font-bold tracking-tight text-card-foreground">
                {l.label}
              </span>
              <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
