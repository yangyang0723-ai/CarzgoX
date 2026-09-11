"use client"

import { useState } from "react"
import { ArrowRight, Mail, MessageCircle, Phone, X } from "lucide-react"
import { contact } from "@/lib/content"

const items = [
  { icon: Phone, label: "电话", value: contact.phone, href: `tel:${contact.phone}` },
  { icon: Mail, label: "邮箱", value: contact.email, href: `mailto:${contact.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: "+86 138 0000 0000", href: "https://wa.me/8613800000000" },
  { icon: MessageCircle, label: "VK", value: "vk.com/changjiu_demo", href: "https://vk.com/changjiu_demo" },
]

export function ContactFloat() {
  const [open, setOpen] = useState(false)

  return (
    <aside className="fixed right-0 top-1/2 z-50 -translate-y-1/2" aria-label="联系我们">
      <div className="flex items-stretch">
        {open && (
          <div
            id="contact-float-panel"
            className="w-80 animate-in border border-r-0 border-border/60 bg-[#07182d] p-6 shadow-2xl fade-in slide-in-from-right-4 duration-300"
          >
            <div className="mb-5 flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-[#00c8ff]">
                  CONTACT US
                </p>
                <h2 className="mt-1.5 text-lg font-bold text-white">联系我们</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="关闭联系方式"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="grid gap-2">
              {items.map((item) => {
                const Icon = item.icon
                const Wrapper = item.href ? "a" : "div"
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className="group flex items-center gap-3 rounded-lg border border-transparent p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.06]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#00c8ff] transition-colors duration-300 group-hover:bg-[#0867f2] group-hover:text-white">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.6875rem] uppercase tracking-[0.1em] text-white/40">{item.label}</p>
                      <p className="mt-0.5 truncate text-sm font-medium text-white/90 transition-colors duration-300 group-hover:text-white">
                        {item.value}
                      </p>
                    </div>
                    {item.href && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-white/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#00c8ff]" aria-hidden="true" />
                    )}
                  </Wrapper>
                )
              })}
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="group flex min-h-36 w-12 items-center justify-center bg-[#0867f2] px-2 text-white shadow-lg transition-all duration-300 hover:w-14 hover:bg-[#0656d1]"
          aria-expanded={open}
          aria-controls="contact-float-panel"
        >
          <span className="flex flex-col items-center gap-2">
            <MessageCircle className="h-4 w-4 text-white/70 transition-colors duration-300 group-hover:text-[#00c8ff]" aria-hidden="true" />
            <span className="[writing-mode:vertical-rl] text-xs font-semibold tracking-[0.2em]">联系我们</span>
          </span>
        </button>
      </div>
    </aside>
  )
}
