"use client";

import { createContext, useContext, useCallback, useState, type ReactNode } from "react";
import ContactModal from "@/components/contact-modal";

interface ContactContextValue {
  openContact: (category?: string, subject?: string) => void;
}

const ContactContext = createContext<ContactContextValue>({ openContact: () => {} });

export function useContact() {
  return useContext(ContactContext);
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ open: boolean; category: string; subject?: string }>({
    open: false, category: "General",
  });

  const openContact = useCallback((category = "General", subject?: string) => {
    setState({ open: true, category, subject });
  }, []);

  const closeContact = useCallback(() => {
    setState((s) => ({ ...s, open: false }));
  }, []);

  return (
    <ContactContext.Provider value={{ openContact }}>
      {children}
      <ContactModal
        open={state.open}
        onClose={closeContact}
        category={state.category}
        subject={state.subject}
      />
    </ContactContext.Provider>
  );
}
