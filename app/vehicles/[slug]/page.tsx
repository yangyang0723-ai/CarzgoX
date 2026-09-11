import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { vehicleCatalog } from "@/lib/content"

const getSlug = (name: string) => encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))

const configSections = [
  {
    category: "基础参数",
    rows: [
      ["长×宽×高（mm）", "4806×1886×1490", "4806×1886×1490"],
      ["轴距（mm）", "2756", "2756"],
      ["后备箱容积（L）", "609", "609"],
      ["油箱容积（L）", "52", "52"],
      ["CLTC工况纯电续航（km）", "60", "125"],
      ["CLTC工况馈电油耗（L/100km）", "2.8", "2.9"],
      ["排放标准", "国VI", "国VI"],
      ["整备质量（kg）", "1505", "1580"],
      ["最高车速（km/h）", "180", "180"],
    ],
  },
  {
    category: "动力系统",
    rows: [
      ["雷神超级电混系统", "EM-i 雷神电混2.0", "EM-i 雷神电混2.0"],
      ["发动机", "1.5", "1.5"],
      ["发动机最大功率（kW）", "82", "82"],
      ["发动机最大扭矩（N·m）", "136", "136"],
      ["变速箱类型", "E-DHT", "E-DHT"],
      ["电机类型", "P1+P3", "P1+P3"],
      ["驱动型式", "前驱", "前驱"],
      ["电机峰值功率（kW）", "120", "120"],
      ["电机峰值扭矩（N·m）", "210", "210"],
      ["电池类型", "磷酸铁锂", "磷酸铁锂"],
      ["电池能量（kWh）", "8.5", "17"],
      ["交流慢充功率（kW）", "3.3", "3.3"],
    ],
  },
  {
    category: "重点配置",
    rows: [
      ["悬架系统（前/后）", "麦弗逊独立悬架/扭力梁非独立悬架", "麦弗逊独立悬架/扭力梁非独立悬架"],
      ["制动器类型", "前通风盘式/后盘式", "前通风盘式/后盘式"],
      ["215/60 R16轮胎", "●", "-"],
      ["215/55 R17轮胎", "-", "●（限时赠送吉星五曜轮毂）"],
      ["转向系统", "EPS电动助力转向", "EPS电动助力转向"],
      ["驾驶模式", "智能/纯电/增程/性能", "智能/纯电/增程/性能"],
      ["对外放电", "●（限时赠送）", "●（限时赠送）"],
      ["V2V车辆对车辆供电", "●（限时赠送）", "●（限时赠送）"],
      ["动力回收系统", "●", "●"],
    ],
  },
  {
    category: "设计与智能",
    rows: [
      ["车身颜色", "曜变黑/脂玉白/砚染灰/丝锦银/沁釉蓝", "曜变黑/脂玉白/砚染灰/丝锦银/沁釉蓝"],
      ["内饰颜色", "烟雨墨黛/澄湖映雪白/苏堤暖棕", "烟雨墨黛/澄湖映雪白/苏堤暖棕"],
      ["LED大灯", "●", "●"],
      ["LED转向灯", "●", "●"],
      ["车窗一键升降（带防夹）", "●", "●"],
      ["AGS主动进气格栅", "-", "●"],
      ["电子怀挡式换挡", "●", "●"],
      ["方向盘4向调节", "●", "●"],
      ["外后视镜电动调节", "●", "●"],
      ["外后视镜加热", "●", "●"],
      ["自动空调", "●", "●"],
      ["10.25英寸高清仪表", "液晶组合仪表", "全液晶仪表"],
      ["2音区语音控制", "●", "●"],
      ["手机蓝牙钥匙", "●", "●"],
      ["整车远程OTA升级", "●", "●"],
    ],
  },
  {
    category: "安全与科技",
    rows: [
      ["前排双安全气囊", "●", "●"],
      ["前排座椅侧安全气囊", "●", "●"],
      ["安全带未系提醒", "主驾", "前排"],
      ["后排儿童座椅固定装置", "●", "●"],
      ["神盾电池安全系统", "●", "●"],
      ["TPMS直接式数显胎压监测", "间接式", "●"],
      ["L2级基础辅助驾驶", "-", "●"],
      ["ACC自适应巡航", "-", "●"],
      ["摄像头数量", "1", "5"],
      ["超声波雷达数量", "-", "4"],
      ["辅助驾驶芯片（算力）", "-", "●"],
      ["高德810导航", "●", "●"],
      ["车载网络", "4G", "4G"],
    ],
  },
]

const isDot = (v: string) => v.startsWith("●")

export async function generateStaticParams() {
  return vehicleCatalog.flatMap((group) =>
    group.brands.flatMap((brand) => brand.models.map((model) => ({ slug: getSlug(model.name) }))),
  )
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = vehicleCatalog
    .flatMap((group) => group.brands.flatMap((brand) => brand.models.map((model) => ({ ...model, brand: brand.brand, module: group.module }))))
    .find((model) => getSlug(model.name) === slug)

  if (!entry) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground">未找到该车型</h1>
        <Link href="/vehicles" className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> 返回销售车型
        </Link>
      </main>
    )
  }

  const isZoomed = entry.name === "SONATA" || entry.name === "VS8"

  return (
    <main className="bg-background">
      {/* Cinematic hero */}
      <section className="relative overflow-hidden bg-[#07182d]">
        {/* ambient glows */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#0867f2]/25 blur-[120px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full bg-[#22b8ff]/20 blur-[120px]" />
        {/* grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(120,180,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,180,255,0.35) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <Link
            href="/vehicles"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" /> 返回销售车型
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#22b8ff]/40 bg-[#22b8ff]/10 px-3 py-1 font-mono text-xs font-medium tracking-[0.22em] text-[#7fd4ff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22b8ff] shadow-[0_0_10px_2px_rgba(34,184,255,0.9)]" />
                VEHICLE CONFIGURATION
              </span>
              <h1 className="mt-5 text-balance text-5xl font-black leading-[1.05] tracking-tight text-white lg:text-6xl">
                {entry.name}
              </h1>
              <p className="mt-4 text-base text-white/70">
                {entry.brand} <span className="mx-2 text-white/30">/</span> {entry.module.trim()}
              </p>
              <div className="mt-8 h-px w-40 bg-gradient-to-r from-[#22b8ff] to-transparent" />
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
                60自在版与125探索+版官方配置对比，覆盖动力、安全、智能与设计全维度参数。
              </p>
            </div>

            <div className="group relative">
              {/* glowing frame */}
              <div aria-hidden="true" className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#22b8ff]/60 via-transparent to-[#0867f2]/60 opacity-70 blur-[2px]" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0f2a4a]">
                <Image
                  src={entry.image}
                  alt={`${entry.brand} ${entry.name}车型`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className={`object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${isZoomed ? "scale-[3] group-hover:scale-[3.15]" : ""}`}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#07182d] via-transparent to-transparent opacity-60" />
                {/* corner ticks */}
                <span aria-hidden="true" className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-[#22b8ff]" />
                <span aria-hidden="true" className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-[#22b8ff]" />
                <span aria-hidden="true" className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-[#22b8ff]" />
                <span aria-hidden="true" className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-[#22b8ff]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Config table */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="flex items-baseline gap-4">
          <h2 className="text-3xl font-black tracking-tight text-foreground">车型配置</h2>
          <span className="font-mono text-xs font-medium tracking-[0.18em] text-primary">FULL SPEC</span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          以下为 60自在版与 125探索+版的官方配置对比，蓝色圆点表示配备该项，&ldquo;-&rdquo;表示无此配置。
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#0f2a4a]/20 shadow-[0_30px_70px_-40px_rgba(15,42,74,0.5)]">
          <div className="overflow-x-auto">
            <div className="min-w-[760px] text-sm">
              <div className="grid grid-cols-[minmax(12rem,1.35fr)_1fr_1fr] bg-[#0f2a4a] font-bold text-white">
                <div className="px-4 py-4">配置项</div>
                <div className="border-l border-white/10 px-4 py-4 text-center">60自在版</div>
                <div className="border-l border-white/10 px-4 py-4 text-center">
                  <span className="inline-flex items-center gap-1.5">
                    125探索+版
                    <span className="rounded bg-[#22b8ff] px-1.5 py-0.5 text-[10px] font-bold text-[#07182d]">高配</span>
                  </span>
                </div>
              </div>
              {configSections.map((section) => (
                <div key={section.category}>
                  <div className="flex items-center gap-2 border-t border-border bg-secondary px-4 py-2.5 text-xs font-bold tracking-wide text-primary">
                    <span className="h-3 w-0.5 rounded-full bg-primary" />
                    {section.category}
                  </div>
                  {section.rows.map(([label, standard, premium]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[minmax(12rem,1.35fr)_1fr_1fr] border-t border-border transition-colors duration-200 hover:bg-primary/[0.04]"
                    >
                      <div className="px-4 py-3 text-foreground">{label}</div>
                      <div className="border-l border-border px-4 py-3 text-center font-medium">
                        {isDot(standard) ? (
                          <span className="inline-flex items-center justify-center">
                            <span className="h-2 w-2 rounded-full bg-[#0867f2] shadow-[0_0_8px_1px_rgba(8,103,242,0.6)]" />
                            <span className="ml-1.5 text-xs text-muted-foreground">{standard.slice(1)}</span>
                          </span>
                        ) : standard === "-" ? (
                          <span className="text-muted-foreground/40">—</span>
                        ) : (
                          <span className="text-foreground">{standard}</span>
                        )}
                      </div>
                      <div className="border-l border-border px-4 py-3 text-center font-medium">
                        {isDot(premium) ? (
                          <span className="inline-flex items-center justify-center">
                            <span className="h-2 w-2 rounded-full bg-[#22b8ff] shadow-[0_0_8px_1px_rgba(34,184,255,0.7)]" />
                            <span className="ml-1.5 text-xs text-muted-foreground">{premium.slice(1)}</span>
                          </span>
                        ) : premium === "-" ? (
                          <span className="text-muted-foreground/40">—</span>
                        ) : (
                          <span className="text-foreground">{premium}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["配置参数清晰可查", "支持车型咨询", "专业出口服务", "一站式购车支持"].map((item) => (
            <li
              key={item}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#22b8ff] hover:shadow-[0_20px_40px_-28px_rgba(8,103,242,0.6)]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
