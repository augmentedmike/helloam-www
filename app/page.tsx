import Hero from "@/components/hero";
import HeroChat from "@/components/hero-chat";
import IntroducingAm from "@/components/introducing-am";
import Lifestyle from "@/components/lifestyle";
import Features from "@/components/features";
import MemorySection from "@/components/memory-section";
import GitHistory from "@/components/git-history";
import SoulRestore from "@/components/soul-restore";
import Device from "@/components/device";
import Comparisons from "@/components/comparisons";
import Plans from "@/components/plans";
import Manifesto from "@/components/manifesto";
import Pilot from "@/components/pilot";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <main style={{ background: "#0a0a0a", color: "#ededed", minHeight: "100vh" }}>
      {/* Hero — your team, multiplied */}
      <Hero />
      {/* Chat showcase — AM working in real time */}
      <HeroChat />
      {/* Introducing Amelia */}
      <IntroducingAm />
      {/* Personas — PM / Developer / Support / Sales / Content / Email */}
      <Lifestyle />
      {/* Capabilities by role */}
      <Features />
      {/* Memory — AM never forgets */}
      <MemorySection />
      {/* Git atomic history */}
      <GitHistory />
      {/* Why AM is different — persistent context, outcome ownership */}
      <SoulRestore />
      {/* How it works — 3-step: connect, assign, review */}
      <Device />
      {/* Comparisons — vs Devin, Fin, Linear/Notion AI */}
      <Comparisons />
      {/* Support — free email + live session */}
      <Plans />
      {/* Digital worker manifesto */}
      <Manifesto />
      {/* Early access program */}
      <Pilot />
      {/* B2B FAQ */}
      <FAQ />
    </main>
  );
}
