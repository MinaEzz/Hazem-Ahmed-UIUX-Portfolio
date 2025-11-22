import FooterHeader from "./footer-header/FooterHeader.component";
import FooterBody from "./footer-body/FooterBody.component";

export default function Footer() {
  return (
    <footer className="w-full p-4 flex flex-col items-center justify-center gap-6 bg-white/4">
      <FooterHeader />
      <FooterBody />

      <div className="max-md:w-[90%] lg:w-[50%] w-[70%] border-t border-[#707070] pt-4">
        <p className="text-base text-[#707070] font-bold text-center">
          Designed by @Hazem Ahmed UI/UX designer
        </p>
      </div>
    </footer>
  );
}
