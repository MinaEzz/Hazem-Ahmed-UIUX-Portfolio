import Slider from "react-slick";
import IProject from "@/types/projects.types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppSelector } from "@/lib/store/hooks";
import ProjectCard from "../project-card/ProjectCard.component";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
  dotsClass: "slick-dots",
};

export default function MobileProjects({
  projects = [],
}: {
  projects: IProject[];
}) {
  const filterBy = useAppSelector((state) => state.projectsFilter.selected);
  const filteredProjects = projects.filter(
    (project) => filterBy === "all" || project.category === filterBy
  );

  return (
    <div className="w-full text-white">
      <Slider {...settings}>
        {filteredProjects.map((project) => {
          return <ProjectCard key={project.title} {...project} />;
        })}
      </Slider>
    </div>
  );
}
