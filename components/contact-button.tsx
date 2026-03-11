"use client";

import { useState, type ReactNode } from "react";
import ContactModal from "@/components/contact-modal";

interface ContactButtonProps {
  category?: string;
  subject?: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

export default function ContactButton({ category = "General", subject, className, style, children }: ContactButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className} style={style}>
        {children}
      </button>
      <ContactModal open={open} onClose={() => setOpen(false)} category={category} subject={subject} />
    </>
  );
}
