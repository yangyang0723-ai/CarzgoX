import { vehicleCatalog } from "@/lib/content"
import { PageBanner } from "@/components/page-banner"
import { VehicleCatalogBrowser } from "@/components/vehicle-catalog-browser"

export const metadata = {
  title: "销售车型 | 久车GO",
  description: "久车GO 海外业务销售车型目录。",
}

export default function VehiclesPage() {
  return (
    <>
      <PageBanner
        eyebrow="VEHICLE CATALOG"
        title="销售车型"
        image="/images/banners/vehicles-banner.png"
        alt="待出口车辆整齐停靠港口"
      />

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <VehicleCatalogBrowser catalog={vehicleCatalog} />
      </section>
    </>
  )
}
