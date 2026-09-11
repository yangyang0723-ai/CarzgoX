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

      {/* 集团介绍 —— 电影感深色数据带 */}
      <section
        id="group-profile"
        className="scroll-mt-24 relative overflow-hidden text-primary-foreground"
        style={{ backgroundColor: "#07182d" }}
      >
        {/* 网格纹理 */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
          aria-hidden="true"
        />
        {/* 双色光晕 */}
        <div
          className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full opacity-40 blur-[120px]"
          style={{ background: "radial-gradient(circle, #0867f2 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, #22b8ff 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-24 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_10px_2px_rgba(34,184,255,0.7)]" aria-hidden="true" />
            <span className="font-mono text-[0.6875rem] tracking-[0.24em] text-primary-foreground/80">GROUP PROFILE</span>
          </div>

          <h2 className="mt-7 text-3xl font-bold tracking-tight text-balance lg:text-5xl">{about.title}</h2>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-accent via-primary to-transparent" aria-hidden="true" />

          <div className="mt-8 flex max-w-3xl flex-col gap-5">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 12)} className="text-sm leading-relaxed text-primary-foreground/75 text-pretty lg:text-base">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {groupHighlights.map((item, index) => (
              <article
                key={item.label}
                className="group relative flex min-h-56 flex-col justify-between overflow-hidden rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.03] p-7 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_28px_70px_-30px_rgba(34,184,255,0.6)]"
              >
                {/* 悬停光晕 */}
                <div
                  className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, #22b8ff 0%, transparent 70%)" }}
                  aria-hidden="true"
                />
                {/* 扫光 */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" aria-hidden="true" />

                <div className="relative">
                  <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-accent/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-5xl leading-none tracking-tight">
                    <span className="bg-gradient-to-br from-accent to-primary bg-clip-text font-mono font-bold tabular-nums text-transparent">
                      {item.value}
                    </span>
                    <span className="ml-1 font-sans text-xl text-primary-foreground/90">{item.unit}</span>
                  </p>
                  <div className="mt-4 h-px w-10 bg-accent transition-all duration-500 ease-out group-hover:w-20" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-bold tracking-tight">{item.label}</h3>
                </div>
                <p className="relative mt-6 text-sm leading-relaxed text-primary-foreground/65 text-pretty">
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
                className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_28px_60px_-26px_rgba(8,103,242,0.5)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                  <Image
                    src={business.image}
                    alt={`${business.name}业务场景`}
                    fill
                    sizes="(min-width: 768px) 19vw, (min-width: 640px) 48vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* 电影感遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07182d]/85 via-[#07182d]/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* 扫光 */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" aria-hidden="true" />
                  <span className="absolute left-0 top-0 bg-primary px-2 py-1 font-mono text-[0.6875rem] text-primary-foreground shadow-[0_4px_16px_rgba(8,103,242,0.5)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold tracking-tight text-card-foreground">{business.name}</h3>
                  <p className="mt-1 font-mono text-[0.6875rem] tracking-[0.14em] text-primary">{business.english}</p>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground text-pretty">
                    {business.position}
                  </p>
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted-foreground text-pretty">
                    {business.description}
                  </p>
                  <div className="mt-4 h-px w-8 bg-primary/30 transition-all duration-500 ease-out group-hover:w-16 group-hover:bg-primary" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 长久股份介绍 —— 电影感深色 */}
      <section
        id="changjiu-shares"
        className="scroll-mt-24 relative overflow-hidden border-t border-border text-primary-foreground"
        style={{ backgroundColor: "#07182d" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, #0867f2 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-24 lg:px-8">
          {/* 标题区：以股票代码作为视觉主体 */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_10px_2px_rgba(34,184,255,0.7)]" aria-hidden="true" />
                <span className="font-mono text-[0.6875rem] tracking-[0.24em] text-primary-foreground/80">
                  {about.changjiuShares.eyebrow}
                </span>
              </div>
              <p className="mt-7 bg-gradient-to-br from-primary-foreground via-primary-foreground to-accent bg-clip-text font-mono text-6xl font-bold leading-none tracking-tight text-transparent lg:text-8xl">
                HK.6959
              </p>
              <h2 className="mt-5 text-xl font-bold tracking-tight text-primary-foreground/90 lg:text-2xl">长久股份</h2>
            </div>

            <dl className="flex shrink-0 divide-x divide-primary-foreground/15 rounded-lg border border-primary-foreground/15 bg-primary-foreground/[0.03] backdrop-blur-sm">
              {[
                ["上市地", "香港交易所"],
                ["行业定位", "汽车流通综合服务"],
                ["集团积淀", "30+ 年"],
              ].map(([label, value]) => (
                <div key={label} className="px-5 py-4 lg:px-6">
                  <dt className="text-[0.6875rem] tracking-[0.14em] text-primary-foreground/50">{label}</dt>
                  <dd className="mt-2 text-sm font-semibold text-primary-foreground lg:text-base">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 企业概况 */}
          <div className="mt-16 border-t border-primary-foreground/15 pt-10 lg:grid lg:grid-cols-12 lg:gap-10">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-accent lg:col-span-3">
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
              <span className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" aria-hidden="true" />
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {about.changjiuShares.businesses.map(([title, description], index) => {
                const Icon = changjiuBusinessIcons[index]
                return (
                  <div
                    key={title}
                    className="group relative flex flex-col gap-5 overflow-hidden rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.03] p-7 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_28px_70px_-30px_rgba(34,184,255,0.6)]"
                  >
                    <div
                      className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: "radial-gradient(circle, #22b8ff 0%, transparent 70%)" }}
                      aria-hidden="true"
                    />
                    <div className="relative flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 transition-all duration-500 ease-out group-hover:border-accent group-hover:bg-accent">
                        <Icon className="h-6 w-6 text-accent transition-colors duration-500 ease-out group-hover:text-[#07182d]" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-4xl font-bold leading-none text-primary-foreground/15 transition-colors duration-500 ease-out group-hover:text-accent/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="relative">
                      <h4 className="text-base font-bold tracking-tight text-primary-foreground">{title}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70 text-pretty">{description}</p>
                    </div>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-primary transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
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
                  className="group relative overflow-hidden border-t border-border py-9 transition-colors duration-300 last:border-b hover:bg-secondary/60 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-4"
                >
                  {/* 悬停时左侧强调条 */}
                  <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-gradient-to-b from-primary to-accent transition-transform duration-500 ease-out group-hover:scale-y-100" aria-hidden="true" />
                  <div className="flex items-center gap-4 lg:col-span-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:shadow-[0_12px_30px_-12px_rgba(8,103,242,0.6)]">
                      <Icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
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
