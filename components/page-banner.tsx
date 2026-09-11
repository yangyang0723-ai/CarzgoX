import Image from "next/image"
import { GlobeWireframe } from "@/components/globe-wireframe"

interface PageBannerProps {
  eyebrow: string
  title: string
  image: string
  alt: string
}

export function PageBanner({ eyebrow, title, image, alt }: PageBannerProps) {
  return (
    <section className="relative isolate flex min-h-[360px] items-center overflow-hidden bg-[#07182d] lg:min-h-[440px]">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="animate-banner-zoom object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07182d] via-[#0f2a4a]/75 to-[#07182d]/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07182d]/90 via-[#0f2a4a]/30 to-transparent" />
      <div aria-hidden="true" className="bg-tech-grid absolute inset-0 -z-10 text-white/[0.04]" />
      <div
        aria-hidden="true"
        className="animate-banner-sweep pointer-events-none absolute inset-y-0 -z-10 w-1/4 bg-gradient-to-r from-transparent via-[#00c8ff]/20 to-transparent"
      />
      <GlobeWireframe className="animate-globe-spin pointer-events-none absolute -right-24 top-1/2 -z-10 h-[420px] w-[420px] text-[#00c8ff]/10 lg:-right-10" />

      <div className="relative mx-auto w-full max-w-6xl px-5 lg:px-8">
        <div className="tech-corners max-w-fit py-8 pl-6 pr-14 text-[#00c8ff]/30 lg:pl-8 lg:pr-20">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 animate-data-pulse rounded-full bg-[#00c8ff]" aria-hidden="true" />
            <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#00c8ff]">{eyebrow}</p>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">{title}</h1>
          <div className="mt-6 h-px w-16 bg-gradient-to-r from-[#00c8ff] to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
