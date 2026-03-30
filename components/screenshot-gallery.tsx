const ACCENT = "#00E5FF";

type Screenshot = {
  src: string;
  alt: string;
};

const SCREENSHOTS: Screenshot[] = [
  {
    src: "/board/board-01.webp",
    alt: "AM Board kanban view showing multiple tasks in-progress and in-review columns — March 28",
  },
  {
    src: "/board/board-02.webp",
    alt: "AM Board with a card detail panel open, displaying acceptance criteria and work log — March 28",
  },
  {
    src: "/board/board-03.webp",
    alt: "AM Board showing the full backlog column with prioritised cards — March 28 morning",
  },
  {
    src: "/board/board-04.webp",
    alt: "AM Board task card with attached screenshots and file uploads — March 28 noon",
  },
  {
    src: "/board/board-05.webp",
    alt: "AM Board displaying shipped cards and completed work log entries — March 27 evening",
  },
  {
    src: "/board/board-06.webp",
    alt: "AM Board in-progress column with a high-priority active task — March 27 afternoon",
  },
  {
    src: "/board/board-07.webp",
    alt: "AM Board showing card creation and criteria generation — March 25 evening",
  },
  {
    src: "/board/board-08.webp",
    alt: "AM Board early session with backlog populated and first tasks moving — March 25 morning",
  },
];

export default function ScreenshotGallery() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: ACCENT }}
          >
            Live screenshots
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            The real board — live screenshots
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#666" }}>
            These are authentic screenshots captured during real AM sessions — no mock-ups,
            no staging. The kanban board, card detail, and work logs exactly as they appear.
          </p>
        </div>

        {/* Responsive grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 420px), 1fr))",
          }}
        >
          {SCREENSHOTS.map((shot, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="w-full h-auto block"
                style={{ display: "block" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
