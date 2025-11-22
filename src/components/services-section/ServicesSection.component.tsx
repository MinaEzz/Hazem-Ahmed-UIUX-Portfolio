import SectionHeader from "../common/section-header/SectionHeader.component";
import { SERVICES } from "@/data";
import ServiceCard from "./service-card/ServiceCard.component";

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full pd-y-s"
    >
      <div className="container">
        <div className="w-full flex flex-col gap-16">
          <SectionHeader
            id="services-heading"
            title="Services"
            desc="Crafting user experiences, designing intuitive interfaces."
          />
          <ul className="w-full grid lg:grid-cols-3 max-md:grid-cols-1 grid-cols-2 gap-4">
            {SERVICES.map((item) => {
              return (
                <li key={item.title}>
                  <ServiceCard {...item} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
