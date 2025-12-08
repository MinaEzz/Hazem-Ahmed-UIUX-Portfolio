import ToUp from "@/components/common/animations/to-up/ToUp.component";
import Button from "@/UI/button/Button.component";
import { FiDownload } from "react-icons/fi";

export default function TextSection() {
  return (
    <div className="max-lg:w-full w-[50%] flex flex-col max-lg:items-center gap-6">
      <p className="text-lg text-[#D7D1D1] capitalize font-medium lg:text-justify text-center">
        I’m a passionate UX/UI designer dedicated to crafting user-centered
        digital experiences that are both functional and visually engaging. With
        a strong foundation in human-centered design principles, I bridge the
        gap between aesthetics and usability — ensuring every interface is
        intuitive, accessible, and aligned with business goals. My process
        blends research, wireframing, prototyping, and pixel-perfect execution,
        resulting in designs that not only look great but also deliver
        measurable results.
      </p>
      <ToUp>
        <Button
          variant="default"
          size="md"
          href="/Hazem Ahmed CV.pdf"
          download={true}
        >
          <FiDownload className="w-4 h-4" />
          Download CV
        </Button>
      </ToUp>
    </div>
  );
}
