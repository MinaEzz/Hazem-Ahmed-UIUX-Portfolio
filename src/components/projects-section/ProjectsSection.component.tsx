"use client";
import useScreenSize from "@/hooks/useScreenSize.hook";
import SectionContentWrapper from "../common/section-content-wrapper/SectionContentWrapper.component";
import SectionHeader from "../common/section-header/SectionHeader.component";
import DesktopProjects from "./desktop-projects/DesktopProjects.component";
import MobileProjects from "./mobile-porjects/MobileProjects.component";
import FilterButtons from "./filter-buttons/FilterButtons.component";
import { useGetProjects } from "@/hooks/useGetProjects.hook";
import { RingLoader } from "react-spinners";

export default function ProjectsSection() {
  const screenSize = useScreenSize();
  const { projects, isLoading } = useGetProjects();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full pd-y-s"
    >
      <div className="container">
        <SectionContentWrapper>
          <SectionHeader id="projects-heading" title="Projects">
            <FilterButtons />
          </SectionHeader>
          {isLoading ? (
            <div className="w-full flex flex-col items-center text-center gap-2">
              <RingLoader size={102} color="#2231ff" className="mx-auto" />
              <span className="text-xl text-[#C4C2C2] capitalize">
                Loading...
              </span>
            </div>
          ) : screenSize > 1024 ? (
            <DesktopProjects projects={projects} />
          ) : (
            <MobileProjects projects={projects} />
          )}
        </SectionContentWrapper>
      </div>
    </section>
  );
}
