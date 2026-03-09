"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { PronounTag } from "@/components/ui/pronoun-tag";
import { NameTag } from "@/components/ui/name-tag";
import { usePersonalization } from "@/context/personalization-context";

const HERO_IMAGES = [
  { src: "/am/am-room.jpg",    alt: "AM in your home — always on, always watching over things",     scene: "Home"   },
  { src: "/am/am-desk.jpg",    alt: "AM at your desk — running while you work",                     scene: "Office" },
  { src: "/am/am-student.jpg", alt: "AM in your dorm — never lets you fall behind",                 scene: "Dorm"   },
];

export default function Hero() {
  const { pronouns } = usePersonalization();
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  const [imgIdx, setImgIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setImgIdx((i) => (i + 1) % HERO_IMAGES.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const current = HERO_IMAGES[imgIdx];

  return (
    <section className="relative flex flex-col lg:flex-row min-h-dvh lg:items-stretch overflow-hidden">

      {/* ── MOBILE IMAGE — absolute full-bleed background, hidden on desktop ── */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/am/am-student.jpg"
          alt="AM in your dorm — never lets you fall behind"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "left center" }}
          sizes="100vw"
        />
        {/* Mobile scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #0a0a0a 55%, rgba(10,10,10,0.5) 80%, rgba(10,10,10,0.2) 100%)" }}
        />
      </div>

      {/* ── COPY ── */}
      <div className="relative z-10 flex flex-col justify-end min-h-dvh lg:min-h-0 lg:justify-center bg-transparent lg:bg-[#0a0a0a] px-8 sm:px-12 lg:px-16 xl:px-24 py-12 lg:py-0 lg:w-[52%] xl:w-[50%]">

        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-6 lg:mb-8"
          style={{ color: "#00E5FF" }}
        >
          Meet <NameTag style={{ fontSize: "inherit", color: "#00E5FF", borderBottomColor: "rgba(0,229,255,0.5)" }} />!
        </p>

        <h1
          className="text-4xl sm:text-5xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-5"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          <span style={{ color: "#00E5FF" }}>helloam.</span>
          <br />
          <span className="text-white"><PronounTag case="subject" /> lives on your desk.</span>
          <br />
          <span className="text-white"><PronounTag case="subject" /> runs </span>
          <span style={{ color: "#00E5FF" }}>your life.</span>
        </h1>

        <p className="text-base sm:text-lg font-medium mb-5 text-white">
          A Mac Mini. Pre-installed with AM — short for Amelia. Yours forever.
        </p>

        <p className="text-base leading-relaxed max-w-lg mb-8" style={{ color: "#aaaaaa" }}>
          <NameTag /> arrives as a physical device — set up, named, and ready to go.
          {" "}{cap(pronouns.subject)} wakes up knowing your day. {cap(pronouns.subject)} handles your email, your calendar,
          your finances, your work. {cap(pronouns.subject)} learns everything about you over time.
          <br /><br />
          <span className="font-semibold text-white">Not a subscription. Not a chatbot.</span>{" "}
          A digital companion who lives in your home and belongs to you alone.
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {[
            "Always on. Always yours.",
            "Bonded to one person only",
            "Learns everything you know",
            "Builds income while you sleep",
          ].map((text) => (
            <div
              key={text}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#cccccc",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#00E5FF" }} />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-100 whitespace-nowrap"
            style={{ background: "#00E5FF", color: "#0a0a0a", boxShadow: "0 0 48px rgba(0,229,255,0.3)" }}
          >
            Reserve Your AGI Companion
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-4 py-4 text-base font-medium transition-colors hover:text-white"
            style={{ color: "#666666" }}
          >
            See what {pronouns.subject} can do <span aria-hidden="true">→</span>
          </a>
        </div>

        <div
          className="flex items-center gap-3 mt-8 w-fit px-4 py-3 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,229,255,0.2)" }}
        >
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00E5FF" }} />
          <span className="text-sm font-medium text-white"><NameTag /> is always on</span>
        </div>
      </div>

      {/* ── DESKTOP IMAGE — rotating Home / Office / Dorm, only on lg+ ── */}
      <div className="relative hidden lg:block lg:w-[48%] xl:w-[50%]">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.15) 20%, transparent 45%), linear-gradient(to top, #0a0a0a 0%, transparent 18%)",
          }}
        />
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority
          className="object-cover transition-opacity duration-400"
          style={{
            objectPosition: "left center",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
          sizes="50vw"
        />

        {/* Scene label + dots */}
        <div className="absolute bottom-10 left-8 z-20 flex items-center gap-3">
          {/* Scene name badge */}
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-sm"
            style={{ background: "rgba(10,10,10,0.75)", border: "1px solid rgba(0,229,255,0.25)" }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00E5FF" }} />
            <span className="text-sm font-medium text-white">{current.scene}</span>
          </div>

          {/* Dot nav */}
          <div className="flex gap-1.5">
            {HERO_IMAGES.map((img, i) => (
              <button
                key={img.scene}
                onClick={() => { setVisible(false); setTimeout(() => { setImgIdx(i); setVisible(true); }, 400); }}
                title={img.scene}
                className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                style={{
                  background: i === imgIdx ? "#00E5FF" : "rgba(255,255,255,0.3)",
                  transform: i === imgIdx ? "scale(1.4)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ambient glow — desktop left edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-[40%] h-full hidden lg:block"
        style={{ background: "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(0,229,255,0.05) 0%, transparent 70%)" }}
      />
    </section>
  );
}
