import { CONTACT, SOCIAL_MEDIA } from "@/data";
import SociaMediaItem from "../../social-media-item/SociaMediaItem.component";
import ContactItem from "./contact-item/ContactItem.component";

export default function FooterBody() {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <ul className="w-fit flex items-center flex-wrap gap-4" role="list">
        {SOCIAL_MEDIA.map((item) => {
          return (
            <li key={item.title} role="listitem">
              <SociaMediaItem {...item} />
            </li>
          );
        })}
      </ul>

      <ul
        className="w-full flex items-center justify-center flex-wrap gap-4"
        role="list"
      >
        {CONTACT.map((item) => {
          return (
            <li key={item.title} role="listitem">
              <ContactItem {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
