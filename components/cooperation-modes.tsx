"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { brandsSection } from "@/lib/content"

export function CooperationModes() {
  const [active, setActive] = useState(0)
  const current = brandsSection.models[active]

  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-6">
      {/* 左侧列表 */}
      <div className="flex flex-col gap-4">
        {brandsSection.models.map((m, index) => {
          const isActive = index === active
          return (
            <button
              key={m.no}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={isActive}
              className={`group flex items-center justify-between gap-4 border px-6 py-5 text-left transition-all duration-300 ${
                isActive
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border bg-card hover:border-primary/30 hover:bg-secondary"
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-medium tracking-[0.1em] text-muted-foreground">
                  {m.no}
                </span>
                <span
                  className={`text-base font-bold tracking-tight transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-card-foreground"
                  }`}
                >
                  {m.title}
                </span>
              </div>
              <ArrowRight
                className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                  isActive ? "translate-x-0.5" : "group-hover:translate-x-0.5"
                }`}
              />
            </button>
          )
        })}
      </div>

      {/* 右侧详情面板 */}
      <div className="relative overflow-hidden border border-[#0f2a4a] bg-[#07182d] p-8 text-primary-foreground lg:p-10">
        {/* 装饰性环形图案 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-0 h-full w-2/3 opacity-60"
        >
          <div className="absolute right-6 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute right-32 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute -right-6 top-1/3 h-32 w-32 rounded-full border border-white/10" />
        </div>

        <div className="relative flex h-full flex-col">
          <div className="flex flex-wrap gap-2">
            {current.tags.map((t) => (
              <span
                key={t}
                className="bg-accent/15 px-3 py-1.5 text-xs font-medium tracking-wide text-accent"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="mt-6 text-2xl font-bold tracking-tight text-primary-foreground lg:text-3xl">
            {current.title}
          </h3>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/70 text-pretty">
            {current.summary}
          </p>

          <ul className="mt-6 flex flex-col gap-2.5">
            {current.items.map((i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm leading-relaxed text-primary-foreground/70 text-pretty">
                  {i}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="/contact"
            className="group mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold text-primary-foreground"
          >
            <span className="border-b border-primary-foreground/40 pb-1 transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
              沟通合作方案
            </span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  )
}
