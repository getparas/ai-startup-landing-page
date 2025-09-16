"use client";

import { LogoIcon } from "@/assets";
import { Button } from "@/components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navLinks = [
    { label: "Features", href: "#" },
    { label: "Developers", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Changelog", href: "#" },
  ];
  return (
    <header className="sticky top-0 z-10 border-b border-white/15 py-4 md:border-none">
      <div className="absolute inset-0 -z-10 backdrop-blur md:hidden"></div>
      <div className="container">
        <div className="relative mx-auto flex max-w-2xl items-center justify-between rounded-xl border-white/15 md:border md:p-2.5">
          <div className="absolute inset-0 -z-10 hidden backdrop-blur md:block"></div>
          <div>
            <div className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15">
              <LogoIcon className="size-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button>Join waitlist</Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu cursor-pointer md:hidden"
              onClick={toggleMobileMenu}
            >
              <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                className={twMerge(
                  "origin-left transition",
                  isMobileMenuOpen && "-translate-y-1 rotate-45",
                )}
              ></line>
              <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                className={twMerge(
                  "transition",
                  isMobileMenuOpen && "opacity-0",
                )}
              ></line>
              <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                className={twMerge(
                  "origin-left transition",
                  isMobileMenuOpen && "translate-y-1 -rotate-45",
                )}
              ></line>
            </svg>
          </div>
        </div>
        <div className="mx-auto mt-4 max-w-3xl md:hidden">
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 backdrop-blur">
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="border-b border-white/10 py-2 text-white/70 transition hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
