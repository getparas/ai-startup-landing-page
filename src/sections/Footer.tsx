import { Instagram, LogoIcon, X, Youtube } from "@/assets";

export const Footer = () => {
  return (
    <footer className="border-t border-white/15 py-20 md:py-24">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 lg:flex-1">
            <LogoIcon className="size-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>
          <nav className="flex flex-col gap-5 lg:flex-1 lg:flex-row lg:justify-center lg:gap-8">
            <a
              href="#"
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Features
            </a>
            <a
              href="#"
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Company
            </a>
            <a
              href="#"
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-xs text-white/70 transition hover:text-white md:text-sm"
            >
              Changelog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <X className="text-white/40 transition hover:text-white" />
            <Instagram className="text-white/40 transition hover:text-white" />
            <Youtube className="text-white/40 transition hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};
