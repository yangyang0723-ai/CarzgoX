import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { vehicleCatalog } from "@/lib/content"

const getSlug = (name: string) => encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))

type ConfigSection = { category: string; rows: string[][] }
type VehicleConfig = {
  columns: [string, string]
  premiumBadge: string
  intro: string
  sections: ConfigSection[]
  footnotes?: string[]
}

const defaultConfig: VehicleConfig = {
  columns: ["60自在版", "125探索+版"],
  premiumBadge: "高配",
  intro: "60自在版与125探索+版官方配置对比，覆盖动力、安全、智能与设计全维度参数。",
  sections: [
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
  ],
}

const configByVehicle: Record<string, VehicleConfig> = {
  MUFASA: {
    columns: ["2.0L DLX 2WD 6AT 豪华版", "2.0L LUX 2WD 6AT 尊贵版"],
    premiumBadge: "尊贵版",
    intro: "2.0L DLX 豪华版与 2.0L LUX 尊贵版官方配置对比，覆盖动力、安全、智能网联与设计全维度参数。",
    sections: [
      {
        category: "基础参数",
        rows: [
          ["上市时间", "2025.11.07", "2025.11.07"],
          ["能源类型", "汽油", "汽油"],
          ["环保标准", "国VI", "国VI"],
          ["长×宽×高（mm）", "4475×1850×1685", "4475×1850×1685"],
          ["轴距（mm）", "2680", "2680"],
          ["发动机", "多点喷射 自然吸气", "多点喷射 自然吸气"],
          ["发动机排量（ml）", "1999", "1999"],
          ["最大功率（kW）", "118", "118"],
          ["最大扭矩（N·m）", "193", "193"],
          ["变速箱", "6速自动", "6速自动"],
          ["车身结构", "5门5座SUV", "5门5座SUV"],
          ["转向系统", "电动助力", "电动助力"],
          ["悬架系统（前/后）", "麦弗逊式独立悬架/多连杆式独立悬架", "麦弗逊式独立悬架/多连杆式独立悬架"],
          ["燃油箱容积（L）", "54", "54"],
          ["最小离地间隙（mm）", "147", "147"],
          ["最高车速（km/h）", "187", "187"],
          ["WLTC综合油耗（L/100km）", "7.29", "7.37"],
          ["轮胎规格", "225/60 R17", "225/55 R18"],
          ["驱动方式", "前驱", "前驱"],
          ["整车整备质量（kg）", "1440", "1460"],
          ["最大满载质量（kg）", "1910", "1910"],
          ["全路径驾驶模式选择", "●", "●"],
        ],
      },
      {
        category: "安全",
        rows: [
          ["前排双气囊", "●", "●"],
          ["前排侧气囊", "●", "●"],
          ["侧气帘", "●", "●"],
          ["ESC 车身电子稳定系统", "●", "●"],
          ["HAC 上坡辅助系统", "●", "●"],
          ["ESS 紧急制动提醒系统", "●", "●"],
          ["TPMS 胎压监测系统", "●", "●"],
          ["发动机防盗系统", "●", "●"],
        ],
      },
      {
        category: "智心合一安全系统",
        rows: [
          ["RVM 倒车影像", "●", "●"],
          ["PDW-R 后泊车雷达", "-", "●"],
          ["PDW-F 前泊车雷达", "-", "●"],
          ["FCW 前方碰撞预警", "●", "●"],
          ["FCA 前方防碰撞辅助（识别车辆/行人/二轮车）", "●", "●"],
          ["FCA-JT 前方防碰撞辅助-交叉路对向车", "-", "●"],
          ["LDW 车道偏离预警", "●", "●"],
          ["LKA 车道防偏离辅助", "●", "●"],
          ["DAW 驾驶员注意力警告", "●", "●"],
          ["LVDA 前车出发提醒", "●", "●"],
          ["LFA 车道居中保持", "●", "●"],
          ["HBA 远近光自动切换", "●", "●"],
          ["SCC 自适应巡航控制（带停走功能）", "-", "●"],
          ["NSCC 基于导航的自适应巡航", "-", "●"],
          ["HDA 高速公路驾驶辅助", "-", "●"],
          ["ISLW 限速预警", "●", "●"],
          ["ISLA 限速辅助", "●", "●"],
        ],
      },
      {
        category: "外观设计",
        rows: [
          ["垂直 LED 前大灯", "●", "●"],
          ["参数化 LED 隐藏式日行灯", "●", "●"],
          ["曲率引擎式 LED 组合尾灯", "●", "●"],
          ["外后视镜带 LED 侧转向灯", "●", "●"],
          ["参数化倒车引导灯", "●", "●"],
          ["全景天窗", "-", "●"],
          ["无骨雨刷", "●", "●"],
          ["鲨鱼鳍天线", "-", "●"],
          ["车顶行李架", "●", "●"],
          ["D 柱黑色装饰", "●", "●"],
        ],
      },
      {
        category: "黑色时尚外观套件",
        rows: [
          ["熏黑 LED 隐藏式日行灯", "-", "●"],
          ["黑色前格栅装饰条", "-", "●"],
          ["黑色组合尾灯内装饰板", "-", "●"],
        ],
      },
      {
        category: "内部配置",
        rows: [
          ["视觉一体式 12.3 英寸智慧双联屏", "●", "●"],
          ["D 型真皮多功能方向盘", "●", "●"],
          ["方向盘 4 向调节", "●", "●"],
          ["自动控制前大灯", "●", "●"],
          ["智能钥匙 + 一键启动", "●", "●"],
          ["电动调节外后视镜", "●", "●"],
          ["电动折叠外后视镜", "●", "●"],
          ["电加热外后视镜", "●", "●"],
          ["电子手刹（带自动驻车）", "●", "●"],
          ["定速巡航", "●", "-"],
          ["车窗一键上下（防夹）", "●（前排）", "●（前排）"],
          ["皮质座椅", "●", "●"],
          ["驾驶席座椅电动 6 向调节", "●", "●"],
          ["前排座椅加热", "●", "●"],
          ["后排平板电脑支架", "●", "●"],
          ["副驾驶席座椅靠背放平", "●", "●"],
          ["后排座椅靠背角度可调", "●", "●"],
          ["开合式储物盒", "●", "●"],
          ["隐藏式车门内板储物盒", "●", "●"],
          ["自动空调", "-", "●"],
          ["空调空气净化系统", "-", "●"],
          ["车内 PM2.5 空气质量监测", "-", "●"],
          ["后排空调出风口", "●", "●"],
        ],
      },
      {
        category: "多媒体",
        rows: [
          ["蓝牙（带同时双机连接功能）", "●", "●"],
          ["USB 接口", "4", "4"],
          ["CarLife 手机互联（支持 Android + iOS）", "●", "●"],
          ["扬声器", "4", "6"],
        ],
      },
      {
        category: "智能网联及蓝牙服务",
        rows: [
          ["BLE 手机蓝牙钥匙（智能钥匙/近程控制/共享蓝牙钥匙等）", "-", "●"],
          ["车家互控", "-", "●"],
          ["车载实时导航系统", "-", "●"],
          ["远程车辆控制（启动/关闭引擎、车门解锁/上锁、闪灯、鸣笛、车辆状态查询等）", "-", "●"],
          ["紧急救援服务（气囊弹出自动报警/SOS）", "-", "●"],
          ["车辆关怀服务（车辆诊断/客户通知信息）", "-", "●"],
          ["个性化账户（Bluelink账户联动/百度账户联动）", "-", "●"],
          ["DuerOS 智能语音交互功能（自然语言识别 & 场景应对）", "-", "●"],
          ["随心听（QQ音乐/有声读物/新闻资讯）", "-", "●"],
          ["视频服务（爱奇艺）", "-", "●"],
          ["OTA 远程升级", "-", "●"],
          ["访客模式", "-", "●"],
          ["后排静音模式", "-", "●"],
        ],
      },
      {
        category: "选装包",
        rows: [
          ["选装包#1（1000元）ETC 车载装置", "○", "○"],
          ["选装包#2（4000元）全景天窗 + 225/55 R18 轮胎", "○", "-"],
          ["选装包#3（4000元）智能家居便利包", "-", "○"],
        ],
      },
    ],
    footnotes: [
      "[1] Bluelink 相关服务 5 年免费（含无限流量），仅限新车自购车日起一年内首次开通服务。",
      "[2] 爱奇艺视频服务：需另外付费开通。",
      "[3] 智能家居便利包：12.3 英寸智慧双联屏 + SVM360 全景影像 + BVM 盲区显示系统 + 感应开启式电动尾门。",
    ],
  },
}

const isDot = (v: string) => v.startsWith("●")
const isOptional = (v: string) => v.startsWith("○")

function ConfigValue({ value, premium }: { value: string; premium?: boolean }) {
  if (isDot(value)) {
    const dotClass = premium
      ? "bg-[#22b8ff] shadow-[0_0_8px_1px_rgba(34,184,255,0.7)]"
      : "bg-[#0867f2] shadow-[0_0_8px_1px_rgba(8,103,242,0.6)]"
    return (
      <span className="inline-flex items-center justify-center">
        <span className={`h-2 w-2 rounded-full ${dotClass}`} />
        {value.length > 1 && <span className="ml-1.5 text-xs text-muted-foreground">{value.slice(1)}</span>}
      </span>
    )
  }
  if (isOptional(value)) {
    return (
      <span className="inline-flex items-center justify-center">
        <span className="h-2 w-2 rounded-full border-[1.5px] border-primary/70" />
        <span className="ml-1.5 text-[11px] font-medium text-primary/80">选装</span>
        {value.length > 1 && <span className="ml-1 text-xs text-muted-foreground">{value.slice(1)}</span>}
      </span>
    )
  }
  if (value === "-") {
    return <span className="text-muted-foreground/40">—</span>
  }
  return <span className="text-foreground">{value}</span>
}

const gridCols = "grid grid-cols-[minmax(14rem,1.5fr)_1fr_1fr]"

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
  const config = configByVehicle[entry.name] ?? defaultConfig
  const hasOptional = config.sections.some((s) => s.rows.some((r) => isOptional(r[1]) || isOptional(r[2])))

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
                {config.intro}
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
          以下为 {config.columns[0]} 与 {config.columns[1]} 的官方配置对比，蓝色圆点表示配备该项
          {hasOptional ? "，空心圆点表示可选装" : ""}，&ldquo;—&rdquo;表示无此配置。
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#0f2a4a]/20 shadow-[0_30px_70px_-40px_rgba(15,42,74,0.5)]">
          <div className="overflow-x-auto">
            <div className="min-w-[820px] text-sm">
              <div className={`${gridCols} bg-[#0f2a4a] font-bold text-white`}>
                <div className="px-4 py-4">配置项</div>
                <div className="border-l border-white/10 px-4 py-4 text-center">{config.columns[0]}</div>
                <div className="border-l border-white/10 px-4 py-4 text-center">
                  <span className="inline-flex items-center gap-1.5">
                    {config.columns[1]}
                    <span className="rounded bg-[#22b8ff] px-1.5 py-0.5 text-[10px] font-bold text-[#07182d]">{config.premiumBadge}</span>
                  </span>
                </div>
              </div>
              {config.sections.map((section) => (
                <div key={section.category}>
                  <div className="flex items-center gap-2 border-t border-border bg-secondary px-4 py-2.5 text-xs font-bold tracking-wide text-primary">
                    <span className="h-3 w-0.5 rounded-full bg-primary" />
                    {section.category}
                  </div>
                  {section.rows.map(([label, standard, premium]) => (
                    <div
                      key={label}
                      className={`${gridCols} border-t border-border transition-colors duration-200 hover:bg-primary/[0.04]`}
                    >
                      <div className="px-4 py-3 text-foreground">{label}</div>
                      <div className="border-l border-border px-4 py-3 text-center font-medium">
                        <ConfigValue value={standard} />
                      </div>
                      <div className="border-l border-border px-4 py-3 text-center font-medium">
                        <ConfigValue value={premium} premium />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {config.footnotes && config.footnotes.length > 0 && (
          <ul className="mt-6 space-y-1.5">
            {config.footnotes.map((note) => (
              <li key={note} className="text-xs leading-relaxed text-muted-foreground/80">
                {note}
              </li>
            ))}
          </ul>
        )}

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
