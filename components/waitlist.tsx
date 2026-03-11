"use client";

import WaitlistForm from "./waitlist-form";
import { usePersonalization } from "@/context/personalization-context";

export default function Waitlist() {
  const { name } = usePersonalization();

  return (
    <section id="waitlist" className="relative px-6 py-24 overflow-hidden">
      <div className="relative z-10 max-w-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#00E5FF" }}>
            Stay in the loop
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Get launch updates.
          </h2>
          <p className="text-base" style={{ color: "#888" }}>
            Not ready to pre-order? Join the mailing list and we&apos;ll let you know when {name} is ready to ship.
          </p>
        </div>

        <WaitlistForm />
      </div>
    </section>
  );
}
