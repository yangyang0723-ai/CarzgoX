import { vehicleCatalog } from "@/lib/content"

export const metadata = {
  title: "销售车型 | 久车GO",
  description: "久车GO 海外业务销售车型目录。",
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
            销售车型
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

    </>
  )
}
