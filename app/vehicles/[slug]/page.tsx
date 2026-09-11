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
    <main>
      <section className="border-b border-border bg-primary">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
          <Link href="/vehicles" className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> 返回销售车型
          </Link>
          <p className="mt-10 text-xs font-medium tracking-[0.24em] text-primary-foreground/70">VEHICLE CONFIGURATION</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary-foreground">{entry.name}</h1>
          <p className="mt-2 text-sm text-primary-foreground/75">{entry.brand} · {entry.module.trim()}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden border border-border bg-secondary">
          <Image src={entry.image} alt={`${entry.brand} ${entry.name}车型`} fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-primary">CONFIGURATION OVERVIEW</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">车型配置</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">以下为 60自在版与125探索+版的官方配置对比，黑色圆点表示有此配置，“-”表示无此配置。</p>
          <div className="mt-8 overflow-x-auto border border-border">
            <div className="min-w-[760px] text-sm">
              <div className="grid grid-cols-[minmax(12rem,1.35fr)_1fr_1fr] bg-accent font-bold text-accent-foreground">
                <div className="px-4 py-3">配置项</div>
                <div className="border-l border-accent-foreground/20 px-4 py-3 text-center">60自在版</div>
                <div className="border-l border-accent-foreground/20 px-4 py-3 text-center">125探索+版</div>
              </div>
              {configSections.map((section) => (
                <div key={section.category}>
                  <div className="border-t border-border bg-secondary px-4 py-2 text-xs font-bold tracking-wide text-primary">{section.category}</div>
                  {section.rows.map(([label, standard, premium]) => (
                    <div key={label} className="grid grid-cols-[minmax(12rem,1.35fr)_1fr_1fr] border-t border-border">
                      <div className="px-4 py-3 text-foreground">{label}</div>
                      <div className="border-l border-border px-4 py-3 text-center font-medium text-foreground">{standard}</div>
                      <div className="border-l border-border px-4 py-3 text-center font-medium text-foreground">{premium}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {["配置参数清晰可查", "支持车型咨询", "专业出口服务", "一站式购车支持"].map((item) => (
              <li key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
