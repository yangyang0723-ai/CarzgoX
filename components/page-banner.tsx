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
    <section className="relative isolate flex min-h-[320px] items-center overflow-hidden bg-[#07182d] lg:min-h-[380px]">
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07182d]/95 via-[#0f2a4a]/70 to-[#07182d]/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07182d]/85 via-[#0f2a4a]/25 to-transparent" />
      <div
        aria-hidden="true"
        className="animate-banner-sweep pointer-events-none absolute inset-y-0 -z-10 w-1/3 bg-gradient-to-r from-transparent via-[#00c8ff]/30 to-transparent"
      />
      <GlobeWireframe className="animate-globe-spin pointer-events-none absolute -right-24 top-1/2 -z-10 h-[420px] w-[420px] text-[#00c8ff]/15 lg:-right-10" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-16 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#00c8ff]">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white lg:text-4xl">{title}</h1>
      </div>
    </section>
  )
}
