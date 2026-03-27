import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/layout-shell";
import WebMCPPolyfill from "@/components/webmcp-polyfill";
import { LocaleProvider } from "@/context/locale-context";

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
  title: "AM — The AI That Does the Work | helloam.bot",
  description:
    "AM is your team's autonomous digital worker — handling triage, code tasks, and ticket resolution 24/7 so your team ships faster with less overhead.",
  keywords: [
    "AI digital worker",
    "AI for product managers",
    "AI for developers",
    "AI support agent",
    "autonomous AI teammate",
    "backlog triage AI",
    "AI ticket resolution",
    "helloam.bot",
  ],
  metadataBase: new URL("https://helloam.bot"),
  alternates: {
    canonical: "https://helloam.bot",
  },
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "The AI that does the work — AM",
    description:
      "AM takes end-to-end ownership of your team's high-volume work — triage, code, and support. Ship faster without adding headcount. Get early access at helloam.bot.",
    url: "https://helloam.bot",
    siteName: "helloam.bot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI that does the work — AM",
    description:
      "AM autonomously handles triage, code tasks, and ticket resolution — 24/7. One worker, your whole team covered. Get early access at helloam.bot.",
    images: ["/og-image.png"],
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
      name: "helloam.bot",
      url: "https://helloam.bot",
      logo: {
        "@type": "ImageObject",
        url: "https://helloam.bot/am-logo.png",
      },
      sameAs: [
        "https://twitter.com/augmentedmike",
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
      potentialAction: {
        "@type": "SearchAction",
        target: "https://helloam.bot/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://helloam.bot/#product",
      name: "AM",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://helloam.bot",
      image: "https://helloam.bot/og-image.png",
      description:
        "AM is a digital worker platform for PMs, developers, and support teams. It handles backlog triage, code tasks, and ticket resolution autonomously — 24/7.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://helloam.bot",
        description: "Free early access pilot. Team pricing from $149/seat/month.",
      },
      publisher: {
        "@id": "https://helloam.bot/#organization",
      },
      potentialAction: [
        {
          "@type": "JoinAction",
          name: "Get Early Access",
          target: "https://helloam.bot/#waitlist",
          description: "Join the waitlist for early access to the AM digital worker platform.",
        },
        {
          "@type": "ApplyAction",
          name: "Apply for Early Access Program",
          target: "https://helloam.bot/#pilot",
          description: "Apply for the AM early access program for teams.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://helloam.bot/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is AM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AM is a digital worker platform for PMs, developers, and support teams. It handles backlog triage, code tasks, and ticket resolution autonomously — 24/7. AM is not an assistant that responds to prompts; it owns end-to-end outcomes across three team functions.",
          },
        },
        {
          "@type": "Question",
          name: "How is AM different from Devin or GitHub Copilot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GitHub Copilot is a coding assistant — it helps you write code, but you're still doing the work. Devin is end-to-end for engineering only. AM covers PM, developer, and support team functions under one platform with shared context. AM also has persistent context across your whole team, not just one user.",
          },
        },
        {
          "@type": "Question",
          name: "What integrations does AM support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AM integrates with Jira, Linear, GitHub, GitLab, Slack, Zendesk, Intercom, Notion, Confluence, and more. It works inside your existing tools without requiring workflow changes.",
          },
        },
        {
          "@type": "Question",
          name: "Is my company's data secure with AM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AM processes data under a data processing agreement and does not train on your company's data. All data is encrypted in transit and at rest. Enterprise plans include SSO, RBAC, and audit logs. SOC 2 Type II in progress.",
          },
        },
        {
          "@type": "Question",
          name: "What happens when AM encounters something it can't handle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AM is built to escalate, not fail silently. When it encounters a situation outside its confidence threshold, it surfaces the issue to a human with full context and a recommended path forward.",
          },
        },
        {
          "@type": "Question",
          name: "How does AM pricing work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AM is priced by team size and usage. Starter is $149/seat/month for one team function. Growth is $499/month for three team functions (PM, developer, support). Enterprise pricing is custom. All plans include a 30-day pilot.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://helloam.bot/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://helloam.bot",
        },
      ],
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
      <head>
        {/* WebMCP — Web Model Context Protocol for AI agent tool discovery */}
        <meta name="model-context-protocol" content="supported" />
        <meta name="webmcp-version" content="1.0" />
        <meta name="webmcp-site" content="helloam.bot" />
        <link rel="modelcontext" href="/.well-known/modelcontext" />
        <script defer src="/webmcp-tools.js" />
        <script defer src="/webmcp-init-helloam.js" />
        {/* Plausible Analytics — privacy-first, no cookies, GDPR compliant */}
        <script
          defer
          data-domain="helloam.bot"
          src="https://plausible.io/js/script.outbound-links.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(e,c){if(!c.__SV){var l,h;window.mixpanel=c;c._i=[];c.init=function(q,r,f){function t(d,a){var g=a.split(".");2==g.length&&(d=d[g[0]],a=g[1]);d[a]=function(){d.push([a].concat(Array.prototype.slice.call(arguments,0)))}}var b=c;"undefined"!==typeof f?b=c[f]=[]:f="mixpanel";b.people=b.people||[];b.toString=function(d){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);d||(a+=" (stub)");return a};b.people.toString=function(){return b.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders start_session_recording stop_session_recording people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");for(h=0;h<l.length;h++)t(b,l[h]);var n="set set_once union unset remove delete".split(" ");b.get_group=function(){function d(p){a[p]=function(){b.push([g,[p].concat(Array.prototype.slice.call(arguments,0))])}}for(var a={},g=["get_group"].concat(Array.prototype.slice.call(arguments,0)),m=0;m<n.length;m++)d(n[m]);return a};c._i.push([q,r,f])};c.__SV=1.2;var k=e.createElement("script");k.type="text/javascript";k.async=!0;k.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\\/\\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=e.getElementsByTagName("script")[0];e.parentNode.insertBefore(k,e)}})(document,window.mixpanel||[]);mixpanel.init('1de02420ce309e01b8be52f6c73a84c6',{autocapture:true,record_sessions_percent:100});`,
          }}
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif", background: "#0a0a0a", color: "#ededed" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <WebMCPPolyfill />
        <LocaleProvider>
          <LayoutShell>{children}</LayoutShell>
        </LocaleProvider>
      </body>
    </html>
  );
}
