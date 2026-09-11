import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { vehicleCatalog } from "@/lib/content"

const vehicleSlug = (name: string) => encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))

export const metadata = {
  title: "销售车型 | 久车GO",
  description: "久车GO 海外业务销售车型目录。",
}

export default function VehiclesPage() {
  return (
    <>
      <PageHero eyebrow="VEHICLE CATALOG" title="销售车型" />

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
                    <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {b.models.map((model) => (
                  <Link
                    key={model.name}
                    href={`/vehicles/${vehicleSlug(model.name)}`}
                    className="group overflow-hidden border border-border bg-secondary"
                  >
                          <figcaption className="px-3 py-2.5 text-sm font-medium text-secondary-foreground">
                            {model.name}
                          </figcaption>
                          <div className="relative aspect-[4/3] overflow-hidden bg-background">
                            <Image
                              src={model.image}
                              alt={`${b.brand} ${model.name} 车型`}
                              fill
                              sizes="(min-width: 1280px) 18vw, (min-width: 640px) 40vw, 90vw"
                              className={`object-cover transition-transform duration-500 hover:scale-105 ${
                                model.name === "SONATA" || model.name === "VS8" ? "scale-[3] hover:scale-[3.1]" : ""
                              }`}
                            />
                          </div>
                  </Link>
                ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}
