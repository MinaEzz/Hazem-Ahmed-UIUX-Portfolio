"use client";
import SectionContentWrapper from "../common/section-content-wrapper/SectionContentWrapper.component";
import SectionHeader from "../common/section-header/SectionHeader.component";
import FilterButtons from "./filter-buttons/FilterButtons.component";
import ProjectsGrid from "./projects-grid/ProjectsGrid.component";

export default function ProjectsSection() {
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
          <ProjectsGrid />
        </SectionContentWrapper>
      </div>
    </section>
  );
}
