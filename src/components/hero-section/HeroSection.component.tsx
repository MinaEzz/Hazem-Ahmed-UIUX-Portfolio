import Image from "next/image";
import HERO_BG from "@/assets/hero-background-image.webp";
import HAZEM_IMG from "@/assets/hazem-ahmed.png";
import TextSection from "./text-section/TextSection.component";
import Floating from "../common/animations/floating/Floating.component";

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="w-full min-h-screen relative overflow-hidden flex items-center justify-center pt-32 pb-16"
    >
      <Image
        src={HERO_BG}
        alt=""
        aria-hidden="true"
        draggable={false}
        priority
        className="absolute -z-10 object-cover object-center"
      />
      <div className="black-layer" aria-hidden="true" />

      <div className="container z-10">
        <div className="w-full flex items-center max-lg:flex-col gap-4">
          <TextSection />
          <div className="lg:w-[30%] md:w-[50%] max-md:aspect-[1]">
            <Floating>
              <Image
                src={HAZEM_IMG}
                alt="Portrait of Hazem Ahmed Alalfy"
                priority
              />
            </Floating>
          </div>
        </div>
      </div>
    </section>
  );
}
