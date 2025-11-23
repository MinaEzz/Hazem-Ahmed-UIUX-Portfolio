import Image from "next/image";
import SectionContentWrapper from "../common/section-content-wrapper/SectionContentWrapper.component";
import SectionHeader from "../common/section-header/SectionHeader.component";
import TextSection from "./text-section/TextSection.component";
import HAZEM_IMG from "@/assets/hazem-ahmed.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full pd-y-s"
    >
      <div className="container">
        <SectionContentWrapper>
          <SectionHeader
            id="about-heading"
            title="About Me"
            desc="User Interface and User Experience and Also video editing."
          />

          <div className="w-full flex items-center justify-around max-lg:flex-col gap-4">
            <div className="lg:w-[30%] md:w-[50%] max-md:aspect-[1]">
              <Image
                src={HAZEM_IMG}
                alt="Portrait of Hazem Ahmed Alalfy"
                priority
              />
            </div>
            <TextSection />
          </div>
        </SectionContentWrapper>
      </div>
    </section>
  );
}
