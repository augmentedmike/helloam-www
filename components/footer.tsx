export default function Footer() {
  return (
    <footer
      className="px-6 py-12"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/am-headshot.jpg"
              alt="Amelia"
              width={40}
              height={40}
              className="h-10 w-10 object-cover rounded-full flex-shrink-0"
              style={{ border: "1.5px solid rgba(0,229,255,0.3)" }}
            />
            <div className="text-center sm:text-left">
              <p className="font-semibold text-sm" style={{ color: "#f5f5f5" }}>helloam.bot</p>
              <p className="text-xs mt-1" style={{ color: "#a3a3a3" }}>
                Digital worker platform for PMs, developers, and support teams.
              </p>
              <p className="text-xs mt-1" style={{ color: "#6b6b6b" }}>
                Built in Austin, TX · Tylt LLC
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { label: "Integrations", href: "/integrations",                              external: false },
              { label: "Press",        href: "/press",                                  external: false },
              { label: "Contact",      href: "/contact",                                external: false },
              { label: "GitHub",       href: "https://github.com/augmentedmike/am-agi", external: true  },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-xs font-medium transition-colors text-[#a3a3a3] hover:text-[#f5f5f5]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "#6b6b6b" }}>
            © 2026 Tylt LLC · Delaware · All rights reserved
          </p>
          <div className="flex gap-4">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms",   href: "/terms" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs transition-colors text-[#6b6b6b] hover:text-[#a3a3a3]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
