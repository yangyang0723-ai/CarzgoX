import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { contact, nav } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 lg:flex-row lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center bg-primary text-sm font-bold text-primary-foreground">
              久
            </span>
            <span className="text-base font-bold tracking-tight text-foreground">
              久车GO
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            来久车GO，买中国车。整车出口、跨境物流、清关配套一站式全链路服务。
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-medium tracking-[0.16em] text-muted-foreground">
            栏目导航
          </h3>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-medium tracking-[0.16em] text-muted-foreground">
            联系我们
          </h3>
          <p className="flex items-center gap-2 text-sm text-foreground">
            <Phone className="h-4 w-4 shrink-0 text-primary" />
            {contact.phone}
          </p>
          <p className="flex items-center gap-2 text-sm text-foreground">
            <Mail className="h-4 w-4 shrink-0 text-primary" />
            {contact.email}
          </p>
          <p className="flex max-w-xs items-start gap-2 text-sm text-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {contact.address}
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground lg:px-8">
          长久集团 · 久车GO 海外业务
        </div>
      </div>
    </footer>
  )
}
