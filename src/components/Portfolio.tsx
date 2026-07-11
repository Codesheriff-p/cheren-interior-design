import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1738168279272-c08d6dd22002?w=800&q=80",
    alt: "Minimalist living room",
    title: "Apartment on Lychakivska",
    type: "Residential · 80 m²",
    span: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1738168362059-44a0b8a80b39?w=800&q=80",
    alt: "Modern kitchen with dining",
    title: "Family Kitchen Redesign",
    type: "Kitchen · 24 m²",
    span: "wide",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1738168255255-dcfcc906a665?w=800&q=80",
    alt: "Bedroom with wooden shelf",
    title: "Bedroom Suite · Park View",
    type: "Bedroom · 18 m²",
    span: "normal",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1738168346641-6aedb68a6c99?w=800&q=80",
    alt: "White modern kitchen",
    title: "Scandinavian Kitchen",
    type: "Kitchen · 28 m²",
    span: "normal",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1738168246881-40f35f8aba0a?w=800&q=80",
    alt: "Living room with green couch",
    title: "Sage & Linen Living Room",
    type: "Living Room · 35 m²",
    span: "wide",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1737898397476-54ba8cdbe8a5?w=800&q=80",
    alt: "Bathroom with mirror",
    title: "Spa Bathroom Concept",
    type: "Bathroom · 12 m²",
    span: "tall",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1737898378296-94dc316cd443?w=800&q=80",
    alt: "Dining room with chairs",
    title: "Dining Terrace",
    type: "Dining · 22 m²",
    span: "normal",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1737898415581-7dea57a1905b?w=800&q=80",
    alt: "Open plan kitchen living",
    title: "Open-Plan Studio",
    type: "Studio · 55 m²",
    span: "normal",
  },
];

const FILTERS = [
  "All",
  "Residential",
  "Kitchen",
  "Living Room",
  "Bedroom",
  "Bathroom",
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type.includes(activeFilter));

  useGSAP(
    () => {
      gsap.fromTo(
        ".portfolio-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".portfolio-header", start: "top 82%" },
        },
      );

      gsap.fromTo(
        ".portfolio-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".portfolio-grid", start: "top 78%" },
        },
      );
    },
    { scope: containerRef, dependencies: [activeFilter] },
  );

  return (
    <section
      id="portfolio"
      ref={containerRef}
      style={{ padding: "120px 48px" }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div className="portfolio-header" style={{ marginBottom: "56px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                width: "40px",
                height: "1px",
                background: "var(--color-gold)",
                display: "block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
              }}
            >
              Our Work
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 4vw, 64px)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "var(--color-text)",
              }}
            >
              Selected <em style={{ color: "var(--color-gold)" }}>Projects</em>
            </h2>

            {/* Filters */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    padding: "8px 20px",
                    background:
                      activeFilter === f ? "var(--color-gold)" : "transparent",
                    border: `1px solid ${activeFilter === f ? "var(--color-gold)" : "var(--color-border)"}`,
                    color:
                      activeFilter === f
                        ? "var(--color-bg)"
                        : "var(--color-text-muted)",
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div
          className="portfolio-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "220px",
            gap: "16px",
          }}
        >
          {filtered.map((project, i) => {
            const colSpans: Record<string, string> = {
              tall: "span 4 / span 4",
              wide: "span 8 / span 8",
              normal: "span 4 / span 4",
            };
            const rowSpans: Record<string, string> = {
              tall: "span 2 / span 2",
              wide: "span 1 / span 1",
              normal: "span 1 / span 1",
            };
            // Alternate wide/normal for visual interest
            const effectiveSpan =
              i % 5 === 1 ? "wide" : i % 5 === 0 ? "tall" : "normal";

            return (
              <div
                key={project.id}
                className="portfolio-card img-overlay"
                style={{
                  gridColumn: colSpans[effectiveSpan],
                  gridRow: rowSpans[effectiveSpan],
                  overflow: "hidden",
                  borderRadius: "2px",
                  position: "relative",
                  cursor: "pointer",
                  opacity: 0,
                }}
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(13,12,10,0.9) 0%, rgba(13,12,10,0.2) 50%, transparent 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "24px",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }}
                  className="portfolio-overlay"
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--color-gold)",
                      marginBottom: "6px",
                    }}
                  >
                    {project.type}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "var(--color-text)",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Always-visible overlay for touch */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px",
                    background:
                      "linear-gradient(to top, rgba(13,12,10,0.8) 0%, transparent 100%)",
                  }}
                  className="portfolio-always-label"
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget
                      .previousElementSibling as HTMLElement;
                    if (overlay) overlay.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget
                      .previousElementSibling as HTMLElement;
                    if (overlay) overlay.style.opacity = "0";
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      color: "var(--color-text)",
                      opacity: 0.9,
                    }}
                  >
                    {project.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <button
            style={{
              padding: "16px 48px",
              border: "1px solid var(--color-border)",
              background: "transparent",
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = "var(--color-gold)";
              el.style.color = "var(--color-gold)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = "var(--color-border)";
              el.style.color = "var(--color-text-muted)";
            }}
          >
            View All Projects
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #portfolio { padding: 80px 24px !important; }
          .portfolio-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-auto-rows: 200px !important;
          }
          .portfolio-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
