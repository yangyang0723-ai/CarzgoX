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
      {/* Category tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-6">
        {catalog.map((group, i) => {
          const isActive = i === activeModule
          const count = group.brands.reduce((sum, b) => sum + b.models.length, 0)
          return (
            <button
              key={group.module}
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

      {/* Brand sections for active category */}
      <div className="mt-10 flex flex-col gap-14">
        {current.brands.map((b) => (
          <div key={b.brand}>
            <div className="flex items-baseline gap-4">
              <h3 className="text-lg font-bold tracking-tight text-foreground">{b.brand}</h3>
              <span className="font-mono text-xs font-medium tracking-[0.18em] text-muted-foreground">
                {String(b.models.length).padStart(2, "0")} MODELS
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {b.models.map((model) => (
                <Link
                  key={model.name}
                  href={`/vehicles/${vehicleSlug(model.name)}`}
                  className="group relative flex flex-col overflow-hidden border border-border bg-card transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-[0_20px_50px_-24px_rgba(8,103,242,0.35)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <Image
                      src={model.image}
                      alt={`${b.brand} ${model.name} 车型`}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                      className={cn(
                        "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                        model.name === "SONATA" || model.name === "VS8" ? "scale-[3] group-hover:scale-[3.08]" : "",
                      )}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07182d]/40 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
                  </div>
                  <span
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between px-3.5 py-3">
                    <span className="text-sm font-semibold tracking-tight text-card-foreground">
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
