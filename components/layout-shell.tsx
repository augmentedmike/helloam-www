"use client";

import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PersonalizationProvider } from "@/context/personalization-context";

export default function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <PersonalizationProvider>
      <Navbar />
      <div style={{ paddingBottom: "4rem" }}>{children}</div>
      <Footer />
    </PersonalizationProvider>
  );
}
