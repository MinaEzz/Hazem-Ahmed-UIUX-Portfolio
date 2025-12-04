import Button from "@/UI/button/Button.component";
import { BiArrowBack } from "react-icons/bi";

export default function NotFound() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="w-full flex flex-col items-center gap-2">
          <h1 className="text-6xl text-center font-medium text-[#2231ff] capitalize">
            <span className="font-bold">Ooops...</span>
            <br />
            Page not found
          </h1>
          <p className="text-lg text-center font-medium text-[#C4C2C2]">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <Button variant="default" size="lg" href="/" className="mt-6">
            <BiArrowBack className="w-5 h-5" />
            <span>Back to Home</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
