import SociaMediaItem from "@/components/common/social-media-item/SociaMediaItem.component";
import { SOCIAL_MEDIA, COUNTS } from "@/data";
import Button from "@/UI/button/Button.component";
import CountItem from "./count-item/CountItem.component";

export default function TextSection() {
  return (
    <div
      role="region"
      aria-labelledby="hero-title"
      className="w-full flex flex-1 flex-col gap-6 max-lg:items-center max-lg:text-center"
    >
      <p className="text-2xl capitalize text-white font-semibold">
        Hi I am <br /> Hazem Ahmed Alalfy
      </p>
      <h1
        id="hero-title"
        className="text-6xl capitalize text-[#639AFF] font-bold"
      >
        Senior <br /> UX/Product Designer
      </h1>

      <ul className="w-fit flex items-center gap-4" role="list">
        {SOCIAL_MEDIA.map((item) => {
          return (
            <li key={item.title} role="listitem">
              <SociaMediaItem {...item} />;
            </li>
          );
        })}
      </ul>

      <div className="w-fit flex max-md:flex-col items-center gap-4">
        <Button
          variant="default"
          size="lg"
          href="#contact"
          className="w-[12.75rem]"
        >
          Contact Me
        </Button>
        <Button
          variant="outlined"
          size="lg"
          // href=""
          download={true}
          className="w-[12.75rem]"
        >
          Download CV
        </Button>
      </div>

      <ul
        role="list"
        className="lg:w-fit w-full rounded-md grid grid-cols-3 max-md:grid-cols-1 gap-4 md:!py-4 max-md:!px-4"
        style={{
          boxShadow: `
      0 0 4px 0 #2231FF
    `,
        }}
      >
        {COUNTS.map((item, index) => {
          return (
            <li
              key={item.title}
              role="listitem"
              className={`${
                index > 0 ? "md:border-l max-md:border-t border-[#959595]" : ""
              }`}
            >
              <CountItem {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
