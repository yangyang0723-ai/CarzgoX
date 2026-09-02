import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { vehicleCatalog } from "@/lib/content"

const getSlug = (name: string) => encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))

const configRows = [
  ["车型级别", "中型 / 紧凑型乘用车"],
  ["能源类型", "燃油 / 新能源（以实际车型为准）"],
  ["座位布局", "5 座舒适空间"],
  ["动力系统", "高效动力系统"],
  ["安全配置", "主动安全与被动安全系统"],
  ["智能配置", "智能互联与辅助驾驶功能"],
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
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">以下为车型配置占位信息，具体配置以实际销售车型及官方发布信息为准。</p>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {configRows.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[7rem_1fr] gap-4 py-4 text-sm">
                <span className="text-muted-foreground">{label}</span>
                <span className="font-medium text-foreground">{value}</span>
              </div>
            ))}
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
