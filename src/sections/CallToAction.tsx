import { GridLines, Stars } from "@/assets";
import { Button } from "@/components";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-xl border border-white/15 py-24"
          style={{
            backgroundImage: `url(${Stars.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${GridLines.src})`,
            }}
          ></div>
          <div className="relative">
            <h2 className="mx-auto max-w-sm text-center text-5xl font-medium tracking-tighter md:text-6xl">
              AI-driven SEO for everyone.
            </h2>
            <p className="mx-auto mt-5 max-w-xs px-4 text-center text-lg tracking-tight text-white/70 md:text-xl">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="mt-5 flex justify-center">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
