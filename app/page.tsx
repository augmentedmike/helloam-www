import Hero from "@/components/hero";
import Lifestyle from "@/components/lifestyle";
import Features from "@/components/features";
import SoulRestore from "@/components/soul-restore";
import Device from "@/components/device";
import Comparisons from "@/components/comparisons";
import Plans from "@/components/plans";
import Manifesto from "@/components/manifesto";
import Waitlist from "@/components/waitlist";
import Pilot from "@/components/pilot";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <main style={{ background: "#0a0a0a", color: "#ededed", minHeight: "100vh" }}>
      {/* Hero — digital worker for teams */}
      <Hero />
      {/* Personas — PM / Developer / Support */}
      <Lifestyle />
      {/* Capabilities by role */}
      <Features />
      {/* Why AM is different — persistent context, outcome ownership */}
      <SoulRestore />
      {/* How it works — 3-step: connect, assign, review */}
      <Device />
      {/* Comparisons — vs Devin, Fin, Linear/Notion AI */}
      <Comparisons />
      {/* SaaS pricing */}
      <Plans />
      {/* Digital worker manifesto */}
      <Manifesto />
      {/* Waitlist / early access CTA */}
      <Waitlist />
      {/* Early access program */}
      <Pilot />
      {/* B2B FAQ */}
      <FAQ />
    </main>
  );
}
