import SectionContentWrapper from "../common/section-content-wrapper/SectionContentWrapper.component";
import SectionHeader from "../common/section-header/SectionHeader.component";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="w-full pd-y-s"
    >
      <div className="container">
        <SectionContentWrapper>
          <SectionHeader id="portfolio-heading" title="Portfolio" />
        </SectionContentWrapper>
      </div>
    </section>
  );
}
