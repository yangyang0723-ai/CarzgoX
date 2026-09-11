import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
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

      {/* Contact cards */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex items-baseline gap-4">
          <h2 className="text-3xl font-black tracking-tight text-foreground">联系方式</h2>
          <span className="font-mono text-xs font-medium tracking-[0.18em] text-primary">GET IN TOUCH</span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((i, index) => {
            const Wrapper = i.href ? "a" : "div"
            return (
              <Wrapper
                key={i.label}
                href={i.href}
                className="group relative overflow-hidden rounded-2xl border border-[#0f2a4a]/20 bg-[#07182d] p-7 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#22b8ff]/60 hover:shadow-[0_30px_60px_-30px_rgba(8,103,242,0.7)]"
              >
                {/* grid texture */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.12] transition-opacity duration-500 group-hover:opacity-[0.22]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(120,180,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,180,255,0.35) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* corner glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#22b8ff]/20 blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* sweep highlight */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 ease-out group-hover:left-full"
                />

                <div className="relative flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#22b8ff]/30 bg-[#22b8ff]/10 text-[#7fd4ff] transition-all duration-500 ease-out group-hover:border-[#22b8ff] group-hover:bg-[#22b8ff] group-hover:text-[#07182d] group-hover:shadow-[0_0_20px_2px_rgba(34,184,255,0.5)]">
                    <i.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs font-medium tracking-[0.16em] text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="relative mt-6 font-mono text-[11px] tracking-[0.2em] text-[#7fd4ff]/70">{i.en}</p>
                <p className="relative mt-1 text-xs tracking-[0.16em] text-white/50">{i.label}</p>

                <p className="relative mt-3 text-base font-semibold leading-relaxed text-white transition-colors duration-500 group-hover:text-[#7fd4ff]">
                  {i.value}
                </p>
                <div className="relative mt-4 flex items-center justify-between">
                  <span className="text-xs text-white/40">{i.hint}</span>
                  {i.href ? (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-500 group-hover:border-[#22b8ff] group-hover:text-[#22b8ff]">
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  ) : null}
                </div>
              </Wrapper>
            )
          })}
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
