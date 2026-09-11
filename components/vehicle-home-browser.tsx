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
    <div>
      {/* 分类标签 —— 深色科技胶囊 */}
      <div className="relative inline-flex flex-wrap items-center gap-1 overflow-hidden rounded-2xl border border-white/10 bg-[#07182d] p-1.5 shadow-[0_20px_45px_-20px_rgba(8,24,45,0.55)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,200,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.12) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#00c8ff]/20 blur-3xl"
        />
        {catalog.map((group, i) => {
          const isActive = i === activeModule
          const count = group.brands.reduce((sum, b) => sum + b.models.length, 0)
          return (
            <button
              key={group.module}
              type="button"
              onClick={() => handleModuleChange(i)}
              className={cn(
                "relative z-10 flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold tracking-tight transition-all duration-300",
                isActive
                  ? "bg-white text-[#07182d] shadow-[0_0_0_1px_rgba(0,200,255,0.45),0_10px_24px_-8px_rgba(0,0,0,0.35)]"
                  : "text-white/55 hover:text-white",
              )}
            >
              <span>{group.module.trim()}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[0.6875rem] font-semibold tabular-nums transition-colors",
                  isActive ? "bg-[#0867f2]/10 text-[#0867f2]" : "bg-white/10 text-white/45",
                )}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* 焦点展示 + 品牌车型列表 */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* 左侧：焦点大图 */}
        <Link
          key={`${activeModule}-${spotlight?.name}`}
          href={`/vehicles/${vehicleSlug(spotlight?.name ?? "")}`}
          className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl bg-[#07182d] shadow-[0_30px_60px_-25px_rgba(8,24,45,0.45)] lg:aspect-auto lg:min-h-[440px]"
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#07182d] via-[#07182d]/25 to-transparent" />

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

        {/* 右侧：品牌车型列表 */}
        <div className="flex max-h-[440px] flex-col gap-6 overflow-y-auto rounded-2xl border border-border bg-card p-5 pr-4 shadow-sm lg:max-h-none">
          {current.brands.map((b) => (
            <div key={b.brand}>
              <div className="flex items-baseline gap-4">
                <h4 className="text-sm font-bold tracking-tight text-foreground">{b.brand}</h4>
                <div className="h-px flex-1 bg-border" />
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
                          ? "border-[#00c8ff] bg-gradient-to-r from-primary/10 via-secondary to-secondary shadow-[inset_0_0_0_1px_rgba(8,103,242,0.12)]"
                          : "border-transparent hover:border-border hover:bg-secondary/60",
                      )}
                    >
                      <span className="relative h-11 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
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
                          isActive ? "text-primary" : "text-card-foreground group-hover:text-primary",
                        )}
                      >
                        {model.name}
                      </span>
                      <ArrowRight
                        className={cn(
                          "h-3.5 w-3.5 flex-shrink-0 text-primary transition-all",
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
