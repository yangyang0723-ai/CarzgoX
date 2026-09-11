import { Mail, MapPin, Phone } from "lucide-react"
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
      <section className="border-b border-border bg-primary pt-16">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <p className="text-xs font-medium tracking-[0.24em] text-primary-foreground/80">
            CONTACT US
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl">
            联系我们
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid gap-px bg-border md:grid-cols-3">
          {items.map((i) => (
            <div key={i.label} className="bg-card p-8">
              <i.icon className="h-5 w-5 text-primary" />
              <p className="mt-5 text-xs tracking-[0.16em] text-muted-foreground">
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
