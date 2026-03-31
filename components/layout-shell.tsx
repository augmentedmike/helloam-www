"use client";

import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PersonalizationProvider } from "@/context/personalization-context";
import { useScrollDepth } from "@/hooks/use-scroll-depth";

function ScrollTracker() {
  useScrollDepth();
  return null;
}

export default function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <PersonalizationProvider>
      <ScrollTracker />
      <Navbar />
      <div style={{ paddingBottom: "4rem" }}>{children}</div>
      <Footer />
    </PersonalizationProvider>
  );
}
