import { Mail, MapPin, Phone } from "lucide-react"
import { PageBanner } from "@/components/page-banner"
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
      <PageBanner
        eyebrow="CONTACT US"
        title="联系我们"
        image="/images/banners/contact-banner.png"
        alt="现代企业办公环境"
      />

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid gap-px bg-border md:grid-cols-3">
          {items.map((i) => (
            <div
              key={i.label}
              className="group bg-card p-8 transition-all duration-300 hover:z-10 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="flex h-11 w-11 items-center justify-center border border-border bg-secondary transition-all duration-300 group-hover:border-primary group-hover:bg-primary">
                <i.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </span>
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
