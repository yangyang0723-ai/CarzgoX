"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type ShowcaseVehicle = {
  name: string
  brand: string
  module: string
  image: string
  href: string
}

export function VehicleShowcase({ vehicles }: { vehicles: ShowcaseVehicle[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = vehicles[activeIndex]

  return (
    <div className="mt-12 grid gap-0 overflow-hidden rounded-2xl border border-border lg:grid-cols-[1.4fr_1fr]">
      {/* 焦点展示区 */}
      <Link
        href={active.href}
        className="group relative order-1 flex aspect-[4/3] w-full flex-col justify-end overflow-hidden bg-[#07182d] lg:aspect-auto lg:min-h-[26rem]"
      >
        {vehicles.map((v, i) => (
          <Image
            key={v.name}
            src={v.image}
            alt={`${v.brand} ${v.name} 车型展示`}
            fill
            sizes="(min-width: 1024px) 56vw, 100vw"
            className={`object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.04] ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07182d]/90 via-[#07182d]/10 to-transparent" />

        <div className="relative z-10 flex flex-col gap-3 p-6 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00c8ff]">
            {active.module}
          </p>
          <h3 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            {active.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <span>{active.brand}</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="inline-flex items-center gap-1.5 font-bold text-white transition-transform group-hover:translate-x-1">
              查看详情
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>

      {/* 车型列表联动区 */}
      <div className="order-2 flex flex-col divide-y divide-border bg-card">
        {vehicles.map((v, i) => (
          <button
            key={v.name}
            type="button"
            onMouseEnter={() => setActiveIndex(i)}
            onFocus={() => setActiveIndex(i)}
            onClick={() => setActiveIndex(i)}
            aria-pressed={i === activeIndex}
            className={`group relative flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 lg:px-8 ${
              i === activeIndex ? "bg-[#f4f7fb]" : "hover:bg-[#f4f7fb]/60"
            }`}
          >
            <span
              className={`absolute inset-y-0 left-0 w-0.5 bg-primary transition-transform duration-300 ${
                i === activeIndex ? "scale-y-100" : "scale-y-0"
              }`}
              aria-hidden="true"
            />
            <span className="flex flex-col gap-1">
              <span
                className={`text-base font-bold tracking-tight transition-colors ${
                  i === activeIndex ? "text-primary" : "text-card-foreground"
                }`}
              >
                {v.name}
              </span>
              <span className="text-xs text-muted-foreground">{v.brand}</span>
            </span>
            <ArrowRight
              className={`h-4 w-4 shrink-0 text-primary transition-all duration-300 ${
                i === activeIndex ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
              }`}
              aria-hidden="true"
            />
          </button>
        ))}
        <Link
          href="/vehicles"
          className="flex items-center justify-between gap-4 px-6 py-5 text-sm font-bold text-primary transition-colors hover:bg-[#f4f7fb]/60 lg:px-8"
        >
          查看全部车型
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
