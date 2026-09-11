"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ChevronDown, Globe, Menu, X } from "lucide-react"
import { nav, languages } from "@/lib/content"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState(languages[0])
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(!isHome)

  useEffect(() => {
    if (!isHome) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHome])

  const transparent = isHome && !scrolled

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-500",
        transparent
          ? "border-transparent bg-transparent"
          : "border-border bg-background/90 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center text-sm font-bold tracking-tight transition-colors duration-500",
              transparent ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground",
            )}
          >
            久
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "text-base font-bold tracking-tight transition-colors duration-500",
                transparent ? "text-background" : "text-foreground",
              )}
            >
              久车GO
            </span>
            <span
              className={cn(
                "mt-0.5 text-[10px] tracking-[0.18em] transition-colors duration-500",
                transparent ? "text-background/70" : "text-muted-foreground",
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
                  data-active={active}
                  className={cn(
                    "relative inline-flex items-center gap-1 px-3.5 py-2 text-sm transition-colors duration-500",
                    isHome && "nav-underline",
                    active
                      ? cn("font-medium", transparent ? "text-background" : "text-primary")
                      : transparent
                        ? "text-background/75 hover:text-background"
                        : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  {hasChildren && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
                  {active && !isHome && <span className="absolute inset-x-3.5 -bottom-px h-0.5 bg-primary" />}
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
              "hidden items-center gap-1 border px-1 py-1 transition-colors duration-500 md:flex",
              transparent ? "border-background/30" : "border-border",
            )}
          >
            <Globe
              className={cn(
                "mx-1 h-3.5 w-3.5 transition-colors duration-500",
                transparent ? "text-background/70" : "text-muted-foreground",
              )}
            />
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={cn(
                  "px-2 py-0.5 text-xs transition-colors duration-500",
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : transparent
                      ? "text-background/70 hover:text-background"
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
              "flex h-9 w-9 items-center justify-center border transition-colors duration-500 md:hidden",
              transparent ? "border-background/30 text-background" : "border-border text-foreground",
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
