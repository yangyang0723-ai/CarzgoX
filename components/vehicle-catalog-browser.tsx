"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

type Model = { name: string; image: string }
type Brand = { brand: string; models: Model[] }
type Module = { module: string; brands: Brand[] }

const vehicleSlug = (name: string) => encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))

export function VehicleCatalogBrowser({ catalog }: { catalog: Module[] }) {
  const [activeModule, setActiveModule] = useState(0)
  const current = catalog[activeModule]

  return (
    <div>
      {/* Category tabs — dark segmented control with sliding glow indicator */}
      <div className="relative flex w-full max-w-max flex-wrap gap-1 rounded-xl border border-[#0f2a4a] bg-[#0f2a4a] p-1.5 shadow-[0_18px_40px_-24px_rgba(15,42,74,0.9)]">
        {catalog.map((group, i) => {
          const isActive = i === activeModule
          const count = group.brands.reduce((sum, b) => sum + b.models.length, 0)
          return (
            <button
              key={group.module}
              onClick={() => setActiveModule(i)}
              className={cn(
                "group relative flex items-center gap-2 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-bold tracking-tight transition-all duration-300",
                isActive ? "text-white" : "text-slate-400 hover:text-slate-200",
              )}
            >
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0867f2] to-[#22b8ff] shadow-[0_0_22px_-2px_rgba(34,184,255,0.7)]"
                />
              )}
              <span className="relative z-10">{group.module.trim()}</span>
              <span
                className={cn(
                  "relative z-10 flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-semibold tabular-nums transition-colors duration-300",
                  isActive ? "bg-white/25 text-white" : "bg-white/10 text-slate-300",
                )}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Brand sections for active category */}
      <div className="mt-12 flex flex-col gap-16">
        {current.brands.map((b) => (
          <div key={b.brand}>
            <div className="flex items-baseline gap-4">
              <h3 className="text-xl font-black tracking-tight text-foreground">{b.brand}</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
            </div>

            <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {b.models.map((model) => (
                <Link
                  key={model.name}
                  href={`/vehicles/${vehicleSlug(model.name)}`}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#22b8ff] hover:shadow-[0_30px_60px_-28px_rgba(8,103,242,0.6)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0f2a4a]">
                    <Image
                      src={model.image}
                      alt={`${b.brand} ${model.name} 车型`}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                      className={cn(
                        "object-cover transition-transform duration-700 ease-out group-hover:scale-110",
                        model.name === "SONATA" || model.name === "VS8" ? "scale-[3] group-hover:scale-[3.3]" : "",
                      )}
                    />
                    {/* cinematic dark overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07182d] via-[#07182d]/10 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
                    {/* diagonal sweep of light */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 ease-out group-hover:left-[150%]"
                    />
                  </div>
                  {/* top accent line */}
                  <span
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#0867f2] to-[#22b8ff] transition-transform duration-500 ease-out group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between px-4 py-3.5">
                    <span className="text-sm font-bold tracking-tight text-card-foreground transition-colors duration-300 group-hover:text-primary">
                      {model.name}
                    </span>
                    <span className="text-primary opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0.5 group-hover:opacity-100">
                      &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
