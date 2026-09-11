"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export type PlatformModule = {
  href: string
  title: string
  brief: string
  image: string
  alt: string
  label: string
}

export function PlatformBusiness({ modules }: { modules: PlatformModule[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className="mt-10">
      {/* 桌面端：动态展开面板 */}
      <div className="hidden gap-3 md:flex md:h-[520px]">
        {modules.map((m, i) => {
          const isActive = i === active
          return (
            <article
              key={m.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`group relative isolate cursor-pointer overflow-hidden border border-border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive ? "flex-[3.2] border-primary" : "flex-[1]"
              }`}
            >
              <Image
                src={m.image}
                alt={m.alt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className={`object-cover transition-transform duration-[1200ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
              {/* 渐变遮罩 */}
              <div
                className={`absolute inset-0 -z-0 transition-opacity duration-700 ${
                  isActive
                    ? "bg-gradient-to-t from-foreground/95 via-foreground/55 to-foreground/10"
                    : "bg-gradient-to-t from-foreground/90 via-foreground/70 to-foreground/40"
                }`}
                aria-hidden="true"
              />
              {/* 顶部蓝色进度线 */}
              <span
                className={`absolute inset-x-0 top-0 z-10 h-1 origin-left bg-primary transition-transform duration-700 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
                aria-hidden="true"
              />

              {/* 折叠态：竖排英文标签 */}
              <div
                className={`absolute inset-0 z-10 flex items-end p-6 transition-opacity duration-300 ${
                  isActive ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
              >
                <div className="flex flex-col items-start gap-4">
                  <span className="h-8 w-px bg-primary" aria-hidden="true" />
                  <p className="whitespace-nowrap text-[0.7rem] font-medium tracking-[0.28em] text-background/70 [writing-mode:vertical-lr]">
                    {m.label}
                  </p>
                  <h3 className="text-lg font-bold tracking-tight text-background [writing-mode:vertical-lr]">
                    {m.title}
                  </h3>
                </div>
              </div>

              {/* 展开态：完整内容 */}
              <div
                className={`absolute inset-0 z-10 flex flex-col justify-end p-8 transition-all duration-500 ${
                  isActive ? "translate-y-0 opacity-100 delay-150" : "translate-y-6 opacity-0"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-primary" aria-hidden="true" />
                  <p className="text-xs font-medium tracking-[0.28em] text-background/70">
                    {m.label}
                  </p>
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-background">
                  {m.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-background/80 text-pretty">
                  {m.brief}
                </p>
                <Link
                  href={m.href}
                  className="cta-lift group/link mt-6 flex w-fit items-center gap-2 border border-background/30 bg-background/5 px-5 py-2.5 text-sm font-medium text-background backdrop-blur-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  查看更多
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          )
        })}
      </div>

      {/* 移动端：堆叠卡片 */}
      <div className="grid gap-6 md:hidden">
        {modules.map((m) => (
          <article
            key={m.href}
            className="group relative isolate overflow-hidden border border-border"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={m.image}
                alt={m.alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent"
                aria-hidden="true"
              />
              <span className="absolute inset-x-0 top-0 h-1 bg-primary" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center gap-2">
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                  <p className="text-[0.7rem] font-medium tracking-[0.24em] text-background/70">
                    {m.label}
                  </p>
                </div>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-background">
                  {m.title}
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-3 bg-card p-5">
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {m.brief}
              </p>
              <Link
                href={m.href}
                className="flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                查看更多
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
