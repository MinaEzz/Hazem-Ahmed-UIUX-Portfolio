import SectionContentWrapper from "../common/section-content-wrapper/SectionContentWrapper.component";
import SectionHeader from "../common/section-header/SectionHeader.component";
import ContactForm from "./contact-form/ContactForm.component";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full pd-y-s"
    >
      <div className="container">
        <SectionContentWrapper>
          <SectionHeader
            id="contact-heading"
            title="Contact Me"
            desc="Cultivating Connections: Reach Out and Connect with Me"
          />
          <ContactForm />
        </SectionContentWrapper>
      </div>
    </section>
  );
}
