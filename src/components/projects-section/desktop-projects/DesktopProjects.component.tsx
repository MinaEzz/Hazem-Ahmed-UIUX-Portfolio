import ProjectCard from "../project-card/ProjectCard.component";
import IProject from "@/types/projects.types";
import { useAppSelector } from "@/lib/store/hooks";

export default function DesktopProjects({
  projects = [],
}: {
  projects: IProject[];
}) {
  const filterBy = useAppSelector((state) => state.projectsFilter.selected);
  const filteredProjects = projects.filter(
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
              // href={project.link}
            />
          </li>
        );
      })}
    </ul>
  );
}
