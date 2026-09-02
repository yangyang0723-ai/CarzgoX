"use client"

import { useState } from "react"
import { Mail, Phone, MessageCircle, X } from "lucide-react"
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
          <div id="contact-float-panel" className="w-72 border border-r-0 border-border bg-card p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
              <div>
                <p className="font-mono text-[0.6875rem] tracking-[0.16em] text-primary">CONTACT US</p>
                <h2 className="mt-1 text-base font-bold text-card-foreground">联系我们</h2>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="p-1 text-muted-foreground hover:text-foreground" aria-label="关闭联系方式">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="grid gap-4">
              {items.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="mt-1 block break-words text-sm text-card-foreground hover:text-primary">{item.value}</a>
                      ) : (
                        <p className="mt-1 text-sm leading-relaxed text-card-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
        <button type="button" onClick={() => setOpen((value) => !value)} className="flex min-h-36 w-11 items-center justify-center bg-primary px-2 text-primary-foreground shadow-lg transition-colors hover:bg-primary/90" aria-expanded={open} aria-controls="contact-float-panel">
          <span className="[writing-mode:vertical-rl] text-xs font-semibold tracking-[0.2em]">联系我们</span>
        </button>
      </div>
    </aside>
  )
}
