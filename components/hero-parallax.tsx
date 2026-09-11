"use client"

import { useEffect, useRef } from "react"

/** 首屏背景轻微视差：随滚动缓慢位移，不引入粒子或杂乱特效 */
export function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.18, 80)
        el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.06)`
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={ref} className="absolute inset-0 -z-10 will-change-transform">
      {children}
    </div>
  )
}
