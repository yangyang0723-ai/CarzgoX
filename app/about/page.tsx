import Image from "next/image"
import { Car, Flame, Gauge, HeartHandshake, Lightbulb, ShieldCheck, Users } from "lucide-react"
import { PageBanner } from "@/components/page-banner"
import { SectionHeading } from "@/components/section-heading"
import { about } from "@/lib/content"

const changjiuBusinessIcons = [ShieldCheck, Car, Gauge]
const changjiuValueIcons = [Users, HeartHandshake, Lightbulb, Flame]

const groupHighlights = [
  { value: "34", unit: "年", label: "创建于1992年", description: "深耕汽车行业30余年，中国领先的综合性汽车产业服务商" },
  { value: "1.5", unit: "万+", label: "长久员工", description: "全球员工1.5万余人，支撑各业务板块发展" },
  { value: "400", unit: "亿", label: "年营业额", description: "年度营业额近400亿元，业务持续稳定发展" },
  { value: "170", unit: "家+", label: "下属分子公司", description: "网络布局涉及全国及部分海外公司（德国、波兰、俄罗斯）" },
]

export const metadata = {
  title: "关于我们 | 久车GO",
  description: about.paragraphs[0],
}


export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="ABOUT US"
        title="企业背景"
        image="/images/banners/about-banner.png"
        alt="长久集团企业总部建筑"
      />

      {/* 集团介绍 */}
      <section id="group-profile" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-20 lg:px-8">
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
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {groupHighlights.map((item) => (
              <article
                key={item.label}
                className="group tech-corners relative flex min-h-56 flex-col justify-between overflow-hidden bg-[#0a1a2c] p-7 text-primary-foreground text-accent/0 transition-all duration-500 ease-out hover:-translate-y-1 hover:text-accent/40 hover:shadow-[0_24px_60px_-28px_rgba(0,200,255,0.45)]"
              >
                <div
                  className="absolute -right-8 -top-10 h-32 w-32 rounded-full border border-primary-foreground/10 transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />
                <div className="relative">
                  <p className="text-4xl leading-none tracking-tight text-accent">
                    <span className="font-mono tabular-nums">{item.value}</span>
                    <span className="ml-1 font-sans text-xl text-primary-foreground">{item.unit}</span>
                  </p>
                  <div className="mt-4 h-px w-10 bg-accent transition-all duration-500 ease-out group-hover:w-16" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-bold tracking-tight">{item.label}</h3>
                </div>
                <p className="relative mt-8 text-sm leading-relaxed text-primary-foreground/75 text-pretty">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 集团业务版图 */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-[100rem] px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="BUSINESS PORTFOLIO" title={about.businessTitle} />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            {about.businesses.map((business, index) => (
              <article
                key={business.name}
                className="group flex flex-col overflow-hidden border border-border bg-card transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_50px_-24px_rgba(8,103,242,0.35)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                  <Image
                    src={business.image}
                    alt={`${business.name}业务场景`}
                    fill
                    sizes="(min-width: 768px) 19vw, (min-width: 640px) 48vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07182d]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-0 top-0 bg-primary px-2 py-1 font-mono text-[0.6875rem] text-primary-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold tracking-tight text-card-foreground">
                    {business.name}
                  </h3>
                  <p className="mt-1 font-mono text-[0.6875rem] tracking-[0.14em] text-primary">
                    {business.english}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground text-pretty">
                    {business.position}
                  </p>
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted-foreground text-pretty">
                    {business.description}
                  </p>
                  <div className="mt-4 h-px w-8 bg-primary/30 transition-all duration-500 ease-out group-hover:w-14 group-hover:bg-primary" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 长久股份介绍 */}
      <section
        id="changjiu-shares"
        className="scroll-mt-24 border-t border-border text-primary-foreground"
        style={{ backgroundColor: "#0a1a2c" }}
      >
        <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          {/* 标题区：以股票代码作为视觉主体 */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.24em] text-primary-foreground/60">
                {about.changjiuShares.eyebrow}
              </p>
              <p className="mt-6 font-mono text-5xl font-bold leading-none tracking-tight lg:text-7xl">
                HK.6959
              </p>
              <h2 className="mt-5 text-xl font-bold tracking-tight text-primary-foreground/90 lg:text-2xl">
                长久股份
              </h2>
            </div>

            <dl className="flex shrink-0 divide-x divide-primary-foreground/15 border-y border-primary-foreground/15">
              {[
                ["上市地", "香港交易所"],
                ["行业定位", "汽车流通综合服务"],
                ["集团积淀", "30+ 年"],
              ].map(([label, value]) => (
                <div key={label} className="px-5 py-4 lg:px-6">
                  <dt className="text-[0.6875rem] tracking-[0.14em] text-primary-foreground/50">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-primary-foreground lg:text-base">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 企业概况 */}
          <div className="mt-16 border-t border-primary-foreground/15 pt-10 lg:grid lg:grid-cols-12 lg:gap-10">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-primary-foreground/60 lg:col-span-3">
              {about.changjiuShares.overviewTitle}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/80 text-pretty lg:col-span-9 lg:mt-0 lg:text-lg">
              {about.changjiuShares.overview}
            </p>
          </div>

          {/* 三大核心业务板块 */}
          <div className="mt-20">
            <div className="flex items-center gap-5">
              <h3 className="shrink-0 text-lg font-bold tracking-tight lg:text-xl">
                {about.changjiuShares.businessTitle}
              </h3>
              <span className="h-px flex-1 bg-primary-foreground/15" aria-hidden="true" />
            </div>

            <div className="mt-8 grid gap-px bg-primary-foreground/15 md:grid-cols-3">
              {about.changjiuShares.businesses.map(([title, description], index) => {
                const Icon = changjiuBusinessIcons[index]
                return (
                  <div
                    key={title}
                    className="group relative flex flex-col gap-5 bg-[#0f2a4a] p-7 transition-colors duration-500 ease-out hover:bg-primary"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-primary-foreground transition-colors duration-500 ease-out group-hover:text-accent" aria-hidden="true" />
                      <span className="font-mono text-3xl font-bold leading-none text-primary-foreground/20 transition-colors duration-500 ease-out group-hover:text-accent/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold tracking-tight text-primary-foreground">
                        {title}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70 text-pretty">
                        {description}
                      </p>
                    </div>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 企业价值观 */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <SectionHeading eyebrow="CORE VALUES" title={about.changjiuShares.valuesTitle} />

          <div className="mt-12 flex flex-col">
            {about.changjiuShares.values.map(([title, description], index) => {
              const Icon = changjiuValueIcons[index]
              return (
                <article
                  key={title}
                  className="group border-t border-border py-9 transition-colors duration-300 last:border-b hover:bg-secondary/60 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-4"
                >
                  <div className="flex items-center gap-4 lg:col-span-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-secondary transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                      <Icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground">
                        {title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground text-pretty lg:col-span-8 lg:mt-0">
                    {description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

    </>
  )
}
