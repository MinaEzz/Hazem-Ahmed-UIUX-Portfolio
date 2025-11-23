import SectionContentWrapper from "../common/section-content-wrapper/SectionContentWrapper.component";
import SectionHeader from "../common/section-header/SectionHeader.component";
import SkillItem from "./skill-item/SkillItem.component";
import { SKILLS } from "@/data";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="w-full pd-y-s"
    >
      <div className="container">
        <SectionContentWrapper>
          <SectionHeader
            id="skills-heading"
            title="Tools Skills"
            desc="User Interface and User Experience and Also video editing."
          />

          <ul className="w-full grid lg:grid-cols-5 max-md:grid-cols-1 grid-cols-2 gap-y-6">
            {SKILLS.map((item) => {
              return (
                <li key={item.title}>
                  <SkillItem {...item} />
                </li>
              );
            })}
          </ul>
        </SectionContentWrapper>
      </div>
    </section>
  );
}
