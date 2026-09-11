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

function ConfigValue({ value }: { value: string }) {
  if (value === "-") {
    return (
      <span className="text-base text-muted-foreground/40" aria-label="无此配置">
        —
      </span>
    )
  }
  if (value.startsWith("●")) {
    const note = value.slice(1).replace(/^（|）$/g, "")
    return (
      <span className="inline-flex items-center justify-center gap-1.5">
        <Check className="h-4 w-4 text-primary" aria-label="有此配置" />
        {note && <span className="text-xs leading-tight text-muted-foreground">{note}</span>}
      </span>
    )
  }
  return <span className="text-foreground">{value}</span>
}

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

  return (
    <main className="bg-background">
      {/* Hero: 深色沉稳的汽车主视觉 */}
      <section className="relative overflow-hidden bg-foreground">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src={entry.image} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/60" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> 返回销售车型
          </Link>
          <div className="mt-10 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            <p className="text-xs font-medium tracking-[0.28em] text-background/60">VEHICLE CONFIGURATION</p>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-background text-balance lg:text-5xl">{entry.name}</h1>
          <p className="mt-3 text-sm text-background/70">
            {entry.brand} · {entry.module.trim()}
          </p>
        </div>
      </section>

      {/* 车型图片 + 概览 */}
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-secondary shadow-sm">
            <Image
              src={entry.image}
              alt={`${entry.brand} ${entry.name}车型`}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              <p className="text-xs font-medium tracking-[0.24em] text-primary">CONFIGURATION OVERVIEW</p>
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground lg:text-3xl">车型配置</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              以下为 60自在版与125探索+版的官方配置对比，黑色圆点表示有此配置，“-”表示无此配置。
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {["配置参数清晰可查", "支持车型咨询", "专业出口服务", "一站式购车支持"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 rounded-md border border-border bg-card px-4 py-3">
                  <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 配置对比表 */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
          <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
            <div className="min-w-[760px] text-sm">
              {/* 表头 */}
              <div className="sticky top-0 z-10 grid grid-cols-[minmax(13rem,1.4fr)_1fr_1fr] bg-foreground text-background">
                <div className="px-5 py-4 text-xs font-medium tracking-[0.2em] text-background/60">配置项</div>
                <div className="border-l border-background/15 px-5 py-4 text-center">
                  <span className="text-base font-bold">60自在版</span>
                </div>
                <div className="border-l border-background/15 bg-primary px-5 py-4 text-center text-primary-foreground">
                  <span className="text-base font-bold">125探索+版</span>
                </div>
              </div>
              {configSections.map((section) => (
                <div key={section.category}>
                  <div className="grid grid-cols-[minmax(13rem,1.4fr)_1fr_1fr] border-t border-border bg-accent">
                    <div className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wide text-accent-foreground">
                      <span className="h-3 w-1 rounded-full bg-primary" aria-hidden="true" />
                      {section.category}
                    </div>
                    <div className="border-l border-border/60" aria-hidden="true" />
                    <div className="border-l border-border/60 bg-primary/5" aria-hidden="true" />
                  </div>
                  {section.rows.map(([label, standard, premium], index) => (
                    <div
                      key={label}
                      className={`grid grid-cols-[minmax(13rem,1.4fr)_1fr_1fr] border-t border-border ${
                        index % 2 === 1 ? "bg-secondary/30" : "bg-card"
                      }`}
                    >
                      <div className="px-5 py-3.5 text-muted-foreground">{label}</div>
                      <div className="flex items-center justify-center border-l border-border px-4 py-3.5 text-center font-medium">
                        <ConfigValue value={standard} />
                      </div>
                      <div className="flex items-center justify-center border-l border-border bg-primary/5 px-4 py-3.5 text-center font-medium">
                        <ConfigValue value={premium} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
