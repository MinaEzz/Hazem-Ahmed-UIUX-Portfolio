"use client";
import useScreenSize from "@/hooks/useScreenSize.hook";
import SectionContentWrapper from "../common/section-content-wrapper/SectionContentWrapper.component";
import SectionHeader from "../common/section-header/SectionHeader.component";
import DesktopPortfolio from "./desktop-portfolio/DesktopPortfolio.component";
import MobilePortfolio from "./mobile-portfolio/MobilePortfolio.component";
import FilterButtons from "./filter-buttons/FilterButtons.component";
import { useGetProjects } from "@/hooks/useGetProjects.hook";
import { RingLoader } from "react-spinners";

export default function PortfolioSection() {
  const screenSize = useScreenSize();
  const { projects, isLoading } = useGetProjects();

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
          {isLoading ? (
            <div className="w-full flex flex-col items-center text-center gap-2">
              <RingLoader size={102} color="#2231ff" className="mx-auto" />
              <span className="text-xl text-[#C4C2C2] capitalize">
                Loading...
              </span>
            </div>
          ) : screenSize > 850 ? (
            <DesktopPortfolio projects={projects} />
          ) : (
            <MobilePortfolio />
          )}
        </SectionContentWrapper>
      </div>
    </section>
  );
}
