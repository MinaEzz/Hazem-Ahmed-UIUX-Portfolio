import SectionContentWrapper from "../common/section-content-wrapper/SectionContentWrapper.component";
import SectionHeader from "../common/section-header/SectionHeader.component";
import { SERVICES } from "@/data";
import ServiceCard from "./service-card/ServiceCard.component";
import ScaleWithOpacity from "../common/animations/scale-with-opacity/ScaleWithOpacity.component";

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full pd-y-s"
    >
      <div className="container">
        <SectionContentWrapper>
          <SectionHeader
            id="services-heading"
            title="Services"
            desc="Crafting user experiences, designing intuitive interfaces."
          />
          <ul className="w-full grid lg:grid-cols-3 max-md:grid-cols-1 grid-cols-2 gap-4">
            {SERVICES.map((item, index) => {
              return (
                <li key={index}>
                  <ScaleWithOpacity className="h-full" delay={0.3 * index}>
                    <ServiceCard {...item} />
                  </ScaleWithOpacity>
                </li>
              );
            })}
          </ul>
        </SectionContentWrapper>
      </div>
    </section>
  );
}
