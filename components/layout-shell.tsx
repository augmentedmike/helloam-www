"use client";

import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PersonalizationProvider } from "@/context/personalization-context";
import { ContactProvider } from "@/context/contact-context";

export default function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <PersonalizationProvider>
      <ContactProvider>
        <Navbar />
        <div style={{ paddingBottom: "4rem" }}>{children}</div>
        <Footer />
      </ContactProvider>
    </PersonalizationProvider>
  );
}
