import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { contact, nav } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050e1b]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 lg:flex-row lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
              久
            </span>
            <span className="text-base font-bold tracking-tight text-white">
              CarzgoX
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            来CarzgoX，买中国车。整车出口、跨境物流、清关配套一站式全链路服务。
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-medium tracking-[0.16em] text-white/40">
            栏目导航
          </h3>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition-colors hover:text-[#00c8ff]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-medium tracking-[0.16em] text-white/40">
            联系我们
          </h3>
          <p className="flex items-center gap-2 text-sm text-white/80">
            <Phone className="h-4 w-4 shrink-0 text-[#00c8ff]" />
            {contact.phone}
          </p>
          <p className="flex items-center gap-2 text-sm text-white/80">
            <Mail className="h-4 w-4 shrink-0 text-[#00c8ff]" />
            {contact.email}
          </p>
          <p className="flex max-w-xs items-start gap-2 text-sm text-white/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#00c8ff]" />
            {contact.address}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/40 lg:px-8">
          长久集团 · 久车GO 海外业务
        </div>
      </div>
    </footer>
  )
}
