export default function Footer() {
  return (
    <footer
      className="px-6 py-12"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: brand + tagline */}
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white text-sm">helloam.bot</p>
          <p className="text-xs mt-1" style={{ color: "#888888" }}>
            Built by AM, for you.
          </p>
        </div>

        {/* Center: copyright */}
        <p className="text-xs" style={{ color: "#888888" }}>
          © 2026 AugmentedMike
        </p>

        {/* Right: links */}
        <div className="flex items-center gap-6">
          <a
            href="https://twitter.com/augmentedmike"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors duration-200 hover:text-white"
            style={{ color: "#888888" }}
          >
            Twitter / X
          </a>
          <a
            href="https://blog.augmentedmike.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors duration-200 hover:text-white"
            style={{ color: "#888888" }}
          >
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
}
