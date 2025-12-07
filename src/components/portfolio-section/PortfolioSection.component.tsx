"use client";
import useScreenSize from "@/hooks/useScreenSize.hook";
import SectionContentWrapper from "../common/section-content-wrapper/SectionContentWrapper.component";
import SectionHeader from "../common/section-header/SectionHeader.component";
import DesktopPortfolio from "./desktop-portfolio/DesktopPortfolio.component";
import MobilePortfolio from "./mobile-portfolio/MobilePortfolio.component";
import FilterButtons from "./filter-buttons/FilterButtons.component";

export default function PortfolioSection() {
  const screenSize = useScreenSize();
  return (
    <section
      id="projects"
      aria-labelledby="portfolio-heading"
      className="w-full pd-y-s"
    >
      <div className="container">
        <SectionContentWrapper>
          <SectionHeader id="portfolio-heading" title="Portfolio">
            <FilterButtons />
          </SectionHeader>
          {screenSize > 850 ? <DesktopPortfolio /> : <MobilePortfolio />}
        </SectionContentWrapper>
      </div>
    </section>
  );
}
