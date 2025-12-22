"use client";
import { useAppSelector } from "@/lib/store/hooks";
import ProjectCard from "./project-card/ProjectCard.component";
import { useGetProjects } from "@/hooks/useGetProjects.hook";
import { RingLoader } from "react-spinners";

export default function ProjectsGrid() {
  const { projects, isLoading } = useGetProjects();
  const sortedProjects = projects.sort((a, b) =>
    a.company.toLocaleLowerCase().localeCompare(b.company)
  );
  const filterBy = useAppSelector((state) => state.projectsFilter.selected);
  const filteredProjects = sortedProjects.filter(
    (project) => filterBy === "all" || project.category === filterBy
  );

  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-center text-center gap-2">
        <RingLoader size={104} color="#2231ff" className="mx-auto" />
        <span className="text-xl text-[#C4C2C2] capitalize">Loading...</span>
      </div>
    );
  }

  return (
    <ul className="w-full grid 2xl:grid-cols-3 max-md:grid-cols-1 grid-cols-2 gap-6">
      {filteredProjects.map((project) => {
        return (
          <li key={project.title}>
            <ProjectCard
              title={project.title}
              image={project.image}
              href={project.pdfUrl}
            />
          </li>
        );
      })}
    </ul>
  );
}
