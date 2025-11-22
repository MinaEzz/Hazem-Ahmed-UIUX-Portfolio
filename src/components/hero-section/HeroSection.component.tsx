import Image from "next/image";
import HERO_BG from "@/assets/hero-background-image.webp";
import HAZEM_IMG from "@/assets/hazem-ahmed.png";
import TextSection from "./text-section/TextSection.component";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen relative overflow-hidden flex items-center justify-center pt-32 pb-16"
    >
      <Image
        src={HERO_BG}
        className="absolute -z-10 object-cover object-center"
        alt=""
      />
      <div className="black-layer" />

      <div className="container z-10">
        <div className="w-full flex items-center max-lg:flex-col gap-4">
          <TextSection />
          <div className="lg:w-[30%] md:w-[50%] max-md:aspect-[1] mx-auto">
            <Image src={HAZEM_IMG} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
