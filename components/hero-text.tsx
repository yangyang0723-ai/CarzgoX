"use client"

import { heroByLanguage } from "@/lib/content"
import { useLanguage } from "@/lib/language-context"

export function HeroText() {
  const { lang } = useLanguage()
  const content = heroByLanguage[lang]

  return (
    <>
      <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight text-white text-balance lg:text-7xl">
        {content.tagline}
      </h1>
      <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/75 text-pretty lg:text-base">
        {content.sub}
      </p>
    </>
  )
}
