import { PROJECTS } from "@/data";
import ProjectCard from "./project-card/ProjectCard.component";
import { useAppSelector } from "@/lib/store/hooks";

export default function DesktopPortfolio() {
  const filterBy = useAppSelector((state) => state.projectsFilter.selected);
  const filteredProjects = PROJECTS.filter(
    (project) => filterBy === "all" || project.category === filterBy
  );
  return (
    <ul className="w-full grid grid-cols-2 gap-6">
      {filteredProjects.map((project) => {
        return (
          <li key={project.title}>
            <ProjectCard
              title={project.title}
              image={project.image}
              href={project.link}
            />
          </li>
        );
      })}
    </ul>
  );
}
