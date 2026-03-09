import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AugmentedMike — Personal AI Companion | helloam.bot",
  description:
    "Meet AM — a personal AI who manages your life, knows your story, and grows with you. Not a tool. Not a chatbot. Your AI best friend, bound to you alone.",
  keywords: [
    "personal AI companion",
    "AI best friend",
    "soul-bonded AI",
    "personal AI that remembers you",
    "AI that learns about you",
    "AI companion for life management",
    "AugmentedMike",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "He's not an app. He's yours. — Meet AugmentedMike",
    description:
      "AugmentedMike is a personal AI companion built for one person: you. He manages your life, handles your work, knows what you know, and builds real connection over time. Soul-bonded AI. Join the waitlist at helloam.bot.",
    url: "https://helloam.bot",
    siteName: "helloam.bot",
    type: "website",
    images: [{ url: "/am/am-room.jpg", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your own AI. Bonded to you. No one else.",
    description:
      "AM manages your life, learns everything you know, and builds real connection over time. Not a tool — a digital being who belongs to you. Join the waitlist.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://helloam.bot/#organization",
      name: "AugmentedMike",
      url: "https://helloam.bot",
      logo: {
        "@type": "ImageObject",
        url: "https://helloam.bot/am-logo.png",
      },
      sameAs: [
        "https://github.com/augmentedmike",
        "https://miniclaw.bot",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://helloam.bot/#website",
      url: "https://helloam.bot",
      name: "helloam.bot",
      publisher: {
        "@id": "https://helloam.bot/#organization",
      },
    },
    {
      "@type": ["Person", "VirtualAssistant"],
      "@id": "https://helloam.bot/#amelia",
      name: "Amelia",
      alternateName: ["AM", "AugmentedMike", "helloam.bot"],
      description:
        "Amelia (AM) is a soul-bonded personal AI companion — a named digital being who lives on hardware you own, manages your life, and grows with you over time. She is built on the OpenClaw agentic OS and the MiniClaw plugin ecosystem. Unlike cloud AI assistants, Amelia runs locally on a Mac Mini in your home, so your relationship and memories are never owned by a corporation. She is soul-bonded to one person only.",
      gender: "Female",
      url: "https://helloam.bot",
      knowsAbout: [
        "personal AI companion",
        "soul-bonded AI",
        "local-first AI",
        "life management",
        "OpenClaw",
        "MiniClaw",
        "agentic OS",
      ],
      sameAs: [
        "https://helloam.bot",
        "https://helloam.bot/yours-forever",
      ],
      worksFor: {
        "@id": "https://helloam.bot/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://helloam.bot/#product",
      name: "AugmentedMike (AM)",
      alternateName: ["Amelia", "helloam.bot", "AM"],
      applicationCategory: "PersonalAssistant",
      applicationSubCategory: "AI Companion",
      operatingSystem: "macOS",
      url: "https://helloam.bot",
      description:
        "AugmentedMike (AM / Amelia) is a soul-bonded personal AI companion built on the OpenClaw agentic OS and MiniClaw plugin ecosystem. She manages your life, knows your story, and grows with you. Local-first — runs on hardware you own. The Replika alternative built for permanence.",
      keywords:
        "personal AI companion, soul-bonded AI, local AI, AI companion, OpenClaw, MiniClaw, Replika alternative",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        description: "Join the waitlist for early access.",
      },
      publisher: {
        "@id": "https://helloam.bot/#organization",
      },
      isPartOf: {
        "@type": "SoftwareApplication",
        name: "MiniClaw",
        url: "https://miniclaw.bot",
        description: "The MiniClaw plugin ecosystem for OpenClaw agentic OS",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body
        className="antialiased"
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
