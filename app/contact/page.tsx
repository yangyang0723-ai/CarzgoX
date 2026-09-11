import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react"
import { contact } from "@/lib/content"

export const metadata = {
  title: "联系我们 | 久车GO",
  description: `电话 ${contact.phone} · 邮箱 ${contact.email} · ${contact.address}`,
}

const items = [
  {
    icon: Phone,
    label: "电话",
    en: "PHONE",
    value: contact.phone,
    href: `tel:${contact.phone}`,
    hint: "工作日 9:00 - 18:00",
  },
  {
    icon: Mail,
    label: "邮箱",
    en: "EMAIL",
    value: contact.email,
    href: `mailto:${contact.email}`,
    hint: "商务合作与咨询",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    en: "WHATSAPP",
    value: contact.whatsapp,
    href: `https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`,
    hint: "海外客户即时沟通",
  },
  {
    icon: Share2,
    label: "VK",
    en: "VK",
    value: contact.vk,
    href: `https://${contact.vk}`,
    hint: "俄语区社媒关注",
  },
  {
    icon: MapPin,
    label: "地址",
    en: "ADDRESS",
    value: contact.address,
    href: undefined,
    hint: "欢迎莅临洽谈",
  },
]

export default function ContactPage() {
  return (
    <main className="bg-background">
      {/* Cinematic hero */}
      <section className="relative overflow-hidden bg-[#07182d]">
        {/* ambient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#0867f2]/25 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full bg-[#22b8ff]/20 blur-[120px]"
        />
        {/* grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(120,180,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,180,255,0.35) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#22b8ff]/40 bg-[#22b8ff]/10 px-3 py-1 font-mono text-xs font-medium tracking-[0.22em] text-[#7fd4ff]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22b8ff] shadow-[0_0_10px_2px_rgba(34,184,255,0.9)]" />
            CONTACT US
          </span>
          <h1 className="mt-6 text-balance text-5xl font-black leading-[1.05] tracking-tight text-white lg:text-7xl">
            联系我们
          </h1>
          <div className="mt-8 h-px w-40 bg-gradient-to-r from-[#22b8ff] to-transparent" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
            无论是整车出口、车源合作还是海外业务咨询，我们的团队随时为您提供稳定、透明、高效的一站式支持。
          </p>
        </div>
      </section>

      {/* Contact content - split layout */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <ul className="divide-y divide-border/70 border-y border-border/70">
              {items.map((i) => {
                const Wrapper = i.href ? "a" : "div"
                return (
                  <li key={i.label}>
                    <Wrapper
                      href={i.href}
                      className="group flex items-center gap-5 py-6 transition-colors"
                    >
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_10px_30px_-10px_rgba(8,103,242,0.7)]">
                        <i.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm tracking-wide text-muted-foreground">{i.label}</p>
                        <p className="mt-1.5 break-words text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                          {i.value}
                        </p>
                      </div>
                    </Wrapper>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Right: cinematic car image */}
          <div className="relative overflow-hidden rounded-2xl border-b-4 border-primary shadow-[0_40px_80px_-40px_rgba(8,24,45,0.6)]">
            <img
              src="/images/contact-car.png"
              alt="停放在地下车库中的银色轿车"
              className="h-full min-h-[420px] w-full object-cover lg:min-h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-[#07182d] px-7 py-14 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#0867f2]/30 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -bottom-16 h-64 w-64 rounded-full bg-[#22b8ff]/20 blur-[110px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(120,180,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,180,255,0.35) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-balance text-3xl font-black leading-tight tracking-tight text-white lg:text-4xl">
                准备好开启海外整车合作了吗？
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
                拨打电话或发送邮件，我们将第一时间与您对接车源、报价与出口方案。
              </p>
            </div>
            <a
              href={`tel:${contact.phone}`}
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-[#0867f2] to-[#22b8ff] px-8 py-4 text-sm font-bold text-white shadow-[0_20px_50px_-20px_rgba(34,184,255,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_60px_-18px_rgba(34,184,255,1)]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              立即联系
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
