"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Model = { name: string; image: string }
type Brand = { brand: string; models: Model[] }
type Module = { module: string; brands: Brand[] }

const vehicleSlug = (name: string) => encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))

/** 每个品牌在首页最多展示的车型数量，保持区块紧凑 */
const MAX_MODELS_PER_BRAND = 3

export function VehicleHomeBrowser({ catalog }: { catalog: Module[] }) {
  const [activeModule, setActiveModule] = useState(0)
  const current = catalog[activeModule]

  return (
    <div>
      {/* 分类标签 */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-6">
        {catalog.map((group, i) => {
          const isActive = i === activeModule
          const count = group.brands.reduce((sum, b) => sum + b.models.length, 0)
          return (
            <button
              key={group.module}
              type="button"
              onClick={() => setActiveModule(i)}
              className={cn(
                "group relative flex items-center gap-2.5 px-5 py-3 text-sm font-bold tracking-tight transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted",
              )}
            >
              {group.module.trim()}
              <span
                className={cn(
                  "text-xs font-medium tabular-nums",
                  isActive ? "text-primary-foreground/70" : "text-muted-foreground",
                )}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* 当前分类下的品牌分区 */}
      <div className="mt-10 flex flex-col gap-12">
        {current.brands.map((b) => (
          <div key={b.brand}>
            <div className="flex items-baseline gap-4">
              <h3 className="text-base font-bold tracking-tight text-foreground">{b.brand}</h3>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {b.models.slice(0, MAX_MODELS_PER_BRAND).map((model) => (
                <Link
                  key={model.name}
                  href={`/vehicles/${vehicleSlug(model.name)}`}
                  className="group flex flex-col overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <Image
                      src={model.image}
                      alt={`${b.brand} ${model.name} 车型`}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 45vw"
                      className={cn(
                        "object-cover transition-transform duration-500 group-hover:scale-105",
                        model.name === "SONATA" || model.name === "VS8" ? "scale-[3] group-hover:scale-[3.08]" : "",
                      )}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="flex items-center justify-between px-3.5 py-3">
                    <span className="text-sm font-semibold tracking-tight text-card-foreground">
                      {model.name}
                    </span>
                    <span className="text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                      &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/vehicles"
        className="mt-12 flex w-fit items-center gap-1.5 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
      >
        查看全部车型
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  )
}
