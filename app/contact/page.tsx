import { Mail, MapPin, Phone } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { contact } from "@/lib/content"

export const metadata = {
  title: "联系我们 | 久车GO",
  description: `电话 ${contact.phone} · 邮箱 ${contact.email} · ${contact.address}`,
}

const items = [
  { icon: Phone, label: "电话", value: contact.phone, href: `tel:${contact.phone}` },
  { icon: Mail, label: "邮箱", value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: "地址", value: contact.address, href: undefined },
]

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="CONTACT US" title="联系我们" />

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((i) => (
            <div
              key={i.label}
              className="group flex flex-col border border-border bg-card p-8 transition-colors hover:border-primary"
            >
              <span className="flex h-12 w-12 items-center justify-center border border-border bg-secondary transition-colors group-hover:border-primary/40">
                <i.icon className="h-5 w-5 text-primary" />
              </span>
              <p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground">
                {i.label}
              </p>
              {i.href ? (
                <a
                  href={i.href}
                  className="mt-2 block text-sm leading-relaxed text-card-foreground transition-colors hover:text-primary"
                >
                  {i.value}
                </a>
              ) : (
                <p className="mt-2 text-sm leading-relaxed text-card-foreground">
                  {i.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
