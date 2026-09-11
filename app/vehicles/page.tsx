import { vehicleCatalog } from "@/lib/content"
import { PageBanner } from "@/components/page-banner"
import { VehicleCatalogBrowser } from "@/components/vehicle-catalog-browser"

export const metadata = {
  title: "销售车型 | 久车GO",
  description: "久车GO 海外业务销售车型目录。",
}

export default function VehiclesPage() {
  const moduleCount = vehicleCatalog.length
  const brandCount = vehicleCatalog.reduce((sum, m) => sum + m.brands.length, 0)
  const modelCount = vehicleCatalog.reduce(
    (sum, m) => sum + m.brands.reduce((s, b) => s + b.models.length, 0),
    0,
  )

  const stats = [
    { value: String(modelCount).padStart(2, "0"), label: "在售车型", sub: "MODELS" },
    { value: String(brandCount).padStart(2, "0"), label: "合作品牌", sub: "BRANDS" },
    { value: String(moduleCount).padStart(2, "0"), label: "业务板块", sub: "SEGMENTS" },
    { value: "4", label: "出口大区", sub: "REGIONS" },
  ]

  return (
    <>
      <PageBanner
        eyebrow="VEHICLE CATALOG"
        title="销售车型"
        image="/images/banners/vehicles-banner.png"
        alt="待出口车辆整齐停靠港口"
      />

      {/* Cinematic stats band — matches detail page hero styling */}
      <section className="relative overflow-hidden bg-[#07182d]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(34,184,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,184,255,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#0867f2] opacity-25 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#22b8ff] opacity-20 blur-[100px]"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-16 lg:px-8">
          <div className="flex flex-col gap-3">
            <span className="flex w-max items-center gap-2 rounded-full border border-[#22b8ff]/40 bg-[#22b8ff]/10 px-3.5 py-1 font-mono text-xs font-semibold tracking-[0.22em] text-[#7fd3ff]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22b8ff] shadow-[0_0_10px_2px_rgba(34,184,255,0.8)]" />
              GLOBAL VEHICLE SUPPLY
            </span>
            <h2 className="text-balance text-3xl font-black tracking-tight text-white lg:text-4xl">
              全球车源 · 一站直供
            </h2>
            <p className="max-w-2xl text-pretty leading-relaxed text-slate-300">
              整合主机厂直供资源，覆盖新车直出、外贸及多元车型，为海外商户提供稳定、透明、高效的整车出口选择。
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative flex flex-col gap-1 bg-[#0b2038] px-6 py-7 transition-colors duration-300 hover:bg-[#0f2a4a]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#0867f2] to-[#22b8ff] transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <div className="flex items-end gap-1">
                  <span className="bg-gradient-to-r from-[#4aa8ff] to-[#22b8ff] bg-clip-text text-4xl font-black tabular-nums text-transparent lg:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mb-1.5 font-mono text-[10px] font-medium tracking-[0.2em] text-[#7fd3ff]">
                    {stat.sub}
                  </span>
                </div>
                <span className="text-sm font-semibold text-slate-200">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <VehicleCatalogBrowser catalog={vehicleCatalog} />
      </section>
    </>
  )
}
