"use client";

import { motion } from "framer-motion";

import {
  LogoAcme,
  LogoApex,
  LogoCelestial,
  LogoEcho,
  LogoPulse,
  LogoQuantum,
} from "@/assets";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex flex-1 overflow-hidden pr-14 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              className="flex flex-none -translate-x-1/2 gap-14"
            >
              {[
                LogoAcme,
                LogoApex,
                LogoCelestial,
                LogoEcho,
                LogoPulse,
                LogoQuantum,
                LogoAcme,
                LogoApex,
                LogoCelestial,
                LogoEcho,
                LogoPulse,
                LogoQuantum,
              ].map((logo) => (
                <img src={logo.src} key={logo.src} className="h-6 w-auto" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
