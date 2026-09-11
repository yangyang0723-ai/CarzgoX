import { vehicleCatalog } from "@/lib/content"
import { VehicleCatalogBrowser } from "@/components/vehicle-catalog-browser"

export const metadata = {
  title: "销售车型 | 久车GO",
  description: "久车GO 海外业务销售车型目录。",
}

export default function VehiclesPage() {
  return (
    <>
      <section className="border-b border-border bg-primary pt-16">
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
        <VehicleCatalogBrowser catalog={vehicleCatalog} />
      </section>
    </>
  )
}
