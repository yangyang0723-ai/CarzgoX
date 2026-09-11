"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ChevronDown, Globe, Menu, X } from "lucide-react"
import { nav, languages } from "@/lib/content"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang } = useLanguage()

  const isHome = pathname === "/"
  const transparent = isHome && !scrolled && !open

  useEffect(() => {
    if (!isHome) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHome])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        transparent
          ? "border-white/10 bg-transparent"
          : "border-border bg-background/90 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center bg-primary text-sm font-bold tracking-tight text-primary-foreground">
            C
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "text-base font-bold tracking-tight",
                transparent ? "text-white" : "text-foreground",
              )}
            >
              CarzgoX
            </span>
            <span
              className={cn(
                "mt-0.5 text-[10px] tracking-[0.18em]",
                transparent ? "text-white/60" : "text-muted-foreground",
              )}
            >
              OVERSEAS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href
            const hasChildren = "children" in item && item.children
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "relative inline-flex items-center gap-1 px-3.5 py-2 text-sm transition-colors",
                    active
                      ? transparent
                        ? "font-medium text-white"
                        : "font-medium text-primary"
                      : transparent
                        ? "text-white/70 hover:text-white"
                        : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  {hasChildren && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
                  {active && (
                    <span
                      className={cn(
                        "absolute inset-x-3.5 -bottom-px h-0.5",
                        transparent ? "bg-white" : "bg-primary",
                      )}
                    />
                  )}
                </Link>
                {hasChildren && (
                  <div className="invisible absolute left-1/2 top-full z-50 min-w-44 -translate-x-1/2 translate-y-1 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="border border-border bg-background p-1 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block whitespace-nowrap px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className={cn(
              "hidden items-center gap-1 border px-1 py-1 md:flex",
              transparent ? "border-white/25" : "border-border",
            )}
          >
            <Globe
              className={cn("mx-1 h-3.5 w-3.5", transparent ? "text-white/70" : "text-muted-foreground")}
            />
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={cn(
                  "px-2 py-0.5 text-xs transition-colors",
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : transparent
                      ? "text-white/70 hover:text-white"
                      : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "关闭菜单" : "打开菜单"}
            className={cn(
              "flex h-9 w-9 items-center justify-center border md:hidden",
              transparent ? "border-white/25 text-white" : "border-border text-foreground",
            )}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {nav.map((item) => (
              <div key={item.href} className="border-b border-border last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-foreground"
                >
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <div className="mb-2 border-l border-border pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-muted-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-2 py-3">
              {languages.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={cn(
                    "border border-border px-2.5 py-1 text-xs",
                    lang === l
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
