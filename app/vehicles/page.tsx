import Image from "next/image"
import { MapPin, Route } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { portStores, vehicleCatalog } from "@/lib/content"

export const metadata = {
  title: "车型目录 | 久车GO",
  description: "久车GO 海外业务在售车型目录及口岸店布局。",
}

export default function VehiclesPage() {
  return (
    <>
      <section className="border-b border-border bg-primary">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <p className="text-xs font-medium tracking-[0.24em] text-primary-foreground/80">
            VEHICLE CATALOG
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl">
            车型目录
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="flex flex-col gap-14">
          {vehicleCatalog.map((group) => (
            <div key={group.module}>
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  {group.module}
                </h2>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:flex-wrap">
                {group.brands.map((b) => (
                  <div
                    key={b.brand}
                    className="flex flex-col border border-border bg-card p-7 lg:min-w-64 lg:flex-1"
                  >
                    <h3 className="text-base font-bold tracking-tight text-card-foreground">
                      {b.brand}
                    </h3>
                    <div className="mt-3 h-0.5 w-8 bg-primary" />
                    <div className="mt-4 flex flex-wrap gap-2">
                      {b.models.map((m) => (
                        <span
                          key={m}
                          className="bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 口岸店 */}
      <section
        id="port-stores"
        className="scroll-mt-20 border-t border-border bg-secondary"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
          <SectionHeading eyebrow="PORT STORES" title="口岸店" />
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <Image
                src="/images/port-store.png"
                alt="霍尔果斯口岸国际汽车市场"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-px bg-border">
              <div className="bg-card p-7">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-base font-bold tracking-tight text-card-foreground">
                  现有口岸店
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {portStores.current}
                </p>
              </div>
              <div className="bg-card p-7">
                <Route className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-base font-bold tracking-tight text-card-foreground">
                  战略规划
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {portStores.plan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
