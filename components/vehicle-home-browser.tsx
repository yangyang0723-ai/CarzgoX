"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Model = { name: string; image: string }
type Brand = { brand: string; models: Model[] }
type Module = { module: string; brands: Brand[] }

const vehicleSlug = (name: string) => encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))

export function VehicleHomeBrowser({ catalog }: { catalog: Module[] }) {
  const [activeModule, setActiveModule] = useState(0)
  const [activeModel, setActiveModel] = useState(0)

  const current = catalog[activeModule]

  const flatModels = useMemo(
    () => current.brands.flatMap((b) => b.models.map((m) => ({ ...m, brand: b.brand }))),
    [current],
  )
  const spotlight = flatModels[Math.min(activeModel, flatModels.length - 1)] ?? flatModels[0]

  function handleModuleChange(i: number) {
    setActiveModule(i)
    setActiveModel(0)
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07182d] shadow-[0_40px_80px_-35px_rgba(8,24,45,0.55)]">
      {/* 统一科技底纹 —— 贯穿标签与内容 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.1) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#0867f2]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#00c8ff]/10 blur-3xl"
      />

      {/* 分类标签 —— 高对比胶囊式，突出当前选中项 */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 border-b border-white/10 px-6 py-5 lg:px-8">
        {catalog.map((group, i) => {
          const isActive = i === activeModule
          const count = group.brands.reduce((sum, b) => sum + b.models.length, 0)
          return (
            <button
              key={group.module}
              type="button"
              onClick={() => handleModuleChange(i)}
              className={cn(
                "group relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold tracking-tight transition-all duration-300",
                isActive
                  ? "bg-gradient-to-r from-[#0867f2] to-[#00c8ff] text-white shadow-[0_8px_24px_-8px_rgba(0,200,255,0.55)]"
                  : "text-white/50 hover:bg-white/[0.06] hover:text-white/90",
              )}
            >
              <span>{group.module.trim()}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[0.6875rem] font-semibold tabular-nums transition-colors",
                  isActive ? "bg-white/20 text-white" : "bg-white/10 text-white/40",
                )}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* 焦点展示 + 品牌车型列表 —— 同一深色画布 */}
      <div className="relative z-10 grid gap-px lg:grid-cols-[1.3fr_1fr]">
        {/* 左侧：焦点大图 */}
        <Link
          key={`${activeModule}-${spotlight?.name}`}
          href={`/vehicles/${vehicleSlug(spotlight?.name ?? "")}`}
          className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden lg:aspect-auto lg:h-[520px]"
        >
          <Image
            src={spotlight?.image ?? "/placeholder.svg"}
            alt={`${spotlight?.brand} ${spotlight?.name} 车型展示`}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className={cn(
              "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
              spotlight?.name === "SONATA" || spotlight?.name === "VS8" ? "scale-[2.2]" : "",
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07182d] via-[#07182d]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#07182d]/40 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#07182d]/60" />

          {/* HUD 角标装饰 */}
          <span className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-[#00c8ff]/0 transition-colors duration-500 group-hover:border-[#00c8ff]/80" />
          <span className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-[#00c8ff]/0 transition-colors duration-500 group-hover:border-[#00c8ff]/80" />
          <span className="pointer-events-none absolute bottom-24 left-4 h-8 w-8 border-b-2 border-l-2 border-[#00c8ff]/0 transition-colors delay-75 duration-500 group-hover:border-[#00c8ff]/80 lg:bottom-28" />
          <span className="pointer-events-none absolute bottom-24 right-4 h-8 w-8 border-b-2 border-r-2 border-[#00c8ff]/0 transition-colors delay-75 duration-500 group-hover:border-[#00c8ff]/80 lg:bottom-28" />

          <div className="relative z-10 flex items-end justify-between gap-4 p-7 lg:p-9">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00c8ff]">
                {spotlight?.brand}
              </p>
              <h3 className="mt-3 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                {spotlight?.name}
              </h3>
            </div>
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-[#00c8ff] group-hover:bg-[#00c8ff] group-hover:text-[#07182d]">
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>

        {/* 右侧：品牌车型列表 —— 玻璃质感面板，融入同一深色背景 */}
        <div className="flex max-h-[460px] flex-col gap-6 overflow-y-auto bg-white/[0.03] p-5 pr-4 backdrop-blur-sm lg:h-[520px] lg:max-h-[520px] lg:border-l lg:border-white/10">
          {current.brands.map((b) => (
            <div key={b.brand}>
              <div className="flex items-baseline gap-4">
                <h4 className="text-sm font-bold tracking-tight text-white">{b.brand}</h4>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="mt-3 flex flex-col gap-1">
                {b.models.map((model) => {
                  const flatIndex = flatModels.findIndex(
                    (m) => m.name === model.name && m.brand === b.brand,
                  )
                  const isActive = flatIndex === activeModel
                  return (
                    <button
                      key={model.name}
                      type="button"
                      onClick={() => setActiveModel(flatIndex)}
                      className={cn(
                        "group flex items-center gap-3 rounded-xl border-l-2 px-3 py-2.5 text-left transition-all",
                        isActive
                          ? "border-[#00c8ff] bg-white/[0.06] shadow-[inset_0_0_0_1px_rgba(0,200,255,0.15)]"
                          : "border-transparent hover:border-white/20 hover:bg-white/[0.04]",
                      )}
                    >
                      <span className="relative h-11 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-white/10">
                        <Image
                          src={model.image}
                          alt=""
                          fill
                          sizes="56px"
                          className={cn(
                            "object-cover",
                            model.name === "SONATA" || model.name === "VS8" ? "scale-[2.2]" : "",
                          )}
                        />
                      </span>
                      <span
                        className={cn(
                          "flex-1 text-sm font-semibold tracking-tight transition-colors",
                          isActive ? "text-[#00c8ff]" : "text-white/80 group-hover:text-white",
                        )}
                      >
                        {model.name}
                      </span>
                      <ArrowRight
                        className={cn(
                          "h-3.5 w-3.5 flex-shrink-0 text-[#00c8ff] transition-all",
                          isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                        )}
                      />
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
