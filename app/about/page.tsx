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

      {/* 集团业务版图 */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="BUSINESS PORTFOLIO" title={about.businessTitle} />
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {about.businesses.map((business, index) => (
              <article
                key={business.name}
                className={`flex min-h-72 flex-col bg-card p-6 lg:p-7 ${
                  index === about.businesses.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-card-foreground">
                      {business.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs tracking-[0.16em] text-primary">
                      {business.english}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-8 text-base font-semibold leading-relaxed text-foreground text-pretty">
                  {business.position}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {business.description}
                </p>
              </article>
            ))}
          </div>
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
