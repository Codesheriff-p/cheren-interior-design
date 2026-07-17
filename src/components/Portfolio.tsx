import { useRef, useState, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const INITIAL_COUNT = 8;

const PROJECTS = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1738168279272-c08d6dd22002?w=800&q=80",
    alt: "Minimalist living room",
    title: "Apartment on Lychakivska",
    type: "Residential · 80 m²",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1738168362059-44a0b8a80b39?w=800&q=80",
    alt: "Modern kitchen with dining",
    title: "Family Kitchen Redesign",
    type: "Kitchen · 24 m²",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1738168255255-dcfcc906a665?w=800&q=80",
    alt: "Bedroom with wooden shelf",
    title: "Bedroom Suite · Park View",
    type: "Bedroom · 18 m²",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1738168346641-6aedb68a6c99?w=800&q=80",
    alt: "White modern kitchen",
    title: "Scandinavian Kitchen",
    type: "Kitchen · 28 m²",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1738168246881-40f35f8aba0a?w=800&q=80",
    alt: "Living room with green couch",
    title: "Sage & Linen Living Room",
    type: "Living Room · 35 m²",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1737898397476-54ba8cdbe8a5?w=800&q=80",
    alt: "Bathroom with mirror",
    title: "Spa Bathroom Concept",
    type: "Bathroom · 12 m²",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1737898378296-94dc316cd443?w=800&q=80",
    alt: "Dining room with chairs",
    title: "Dining Terrace",
    type: "Dining · 22 m²",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1737898415581-7dea57a1905b?w=800&q=80",
    alt: "Open plan kitchen living",
    title: "Open-Plan Studio",
    type: "Studio · 55 m²",
  },
  // ── Extra projects revealed on "View All" ──
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    alt: "Contemporary home office with bookshelves",
    title: "The Study",
    type: "Residential · 16 m²",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    alt: "Luxury master bedroom suite",
    title: "Master Suite Retreat",
    type: "Bedroom · 32 m²",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
    alt: "Living room with natural light",
    title: "Zen Living Space",
    type: "Living Room · 40 m²",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Modern home with pool terrace",
    title: "Garden & Pool Villa",
    type: "Residential · 90 m²",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    alt: "Minimalist monochrome bathroom",
    title: "Monochrome Wash",
    type: "Bathroom · 10 m²",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Professional chef kitchen",
    title: "Chef's Kitchen",
    type: "Kitchen · 36 m²",
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

const COL_SPAN: Record<string, string> = {
  tall:   "span 4 / span 4",
  wide:   "span 8 / span 8",
  normal: "span 4 / span 4",
};
const ROW_SPAN: Record<string, string> = {
  tall:   "span 2 / span 2",
  wide:   "span 1 / span 1",
  normal: "span 1 / span 1",
};

function getSpan(globalIndex: number): "tall" | "wide" | "normal" {
  if (globalIndex % 5 === 0) return "tall";
  if (globalIndex % 5 === 1) return "wide";
  return "normal";
}

type Project = (typeof PROJECTS)[0];

function ProjectCard({
  project,
  globalIndex,
  className = "",
}: {
  project: Project;
  globalIndex: number;
  className?: string;
}) {
  const span = getSpan(globalIndex);
  return (
    <div
      className={`portfolio-card img-overlay ${className}`}
      style={{
        gridColumn: COL_SPAN[span],
        gridRow: ROW_SPAN[span],
        overflow: "hidden",
        borderRadius: "2px",
        position: "relative",
        cursor: "pointer",
        opacity: 0, // GSAP will animate this in
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

      {/* Hover overlay */}
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
    </div>
  );
}

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const extraRef    = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isExpanded,   setIsExpanded]   = useState(false);

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type.includes(activeFilter));

  const initialProjects = filtered.slice(0, INITIAL_COUNT);
  const extraProjects   = filtered.slice(INITIAL_COUNT);
  const hasExtra        = extraProjects.length > 0;

  // ── Collapse the extra section instantly when filter changes (before paint) ──
  useLayoutEffect(() => {
    if (extraRef.current) {
      gsap.set(extraRef.current, { maxHeight: 0 });
    }
    setIsExpanded(false);
  }, [activeFilter]);

  // ── Scroll-entry animations (re-run on filter change) ──
  const { contextSafe } = useGSAP(
    () => {
      gsap.fromTo(
        ".portfolio-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".portfolio-header",
            start: "top 82%",
          },
        },
      );

      // Only animate cards in the *initial* grid — extras are handled by toggle
      gsap.fromTo(
        ".portfolio-grid .portfolio-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".portfolio-grid",
            start: "top 78%",
          },
        },
      );
    },
    { scope: containerRef, dependencies: [activeFilter] },
  );

  // ── Toggle expand / collapse — wrapped in contextSafe for proper cleanup ──
  const handleToggle = contextSafe(() => {
    const extra = extraRef.current;
    if (!extra) return;

    if (!isExpanded) {
      // ── EXPAND ──
      setIsExpanded(true);

      gsap.to(extra, {
        maxHeight: 4000,      // more than any realistic grid height
        duration: 0.95,
        ease: "power3.out",
      });

      // Stagger extra cards in after the curtain starts rising
      gsap.fromTo(
        extra.querySelectorAll(".extra-card"),
        { opacity: 0, y: 52, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.09,
          ease: "power3.out",
          delay: 0.18,
        },
      );
    } else {
      // ── COLLAPSE ──
      // Fade cards out first, then close the curtain
      gsap.to(extra.querySelectorAll(".extra-card"), {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      });

      gsap.to(extra, {
        maxHeight: 0,
        duration: 0.75,
        delay: 0.28,
        ease: "power3.in",
        onComplete: () => setIsExpanded(false),
      });
    }
  });

  return (
    <section
      id="portfolio"
      ref={containerRef}
      style={{ padding: "120px 48px" }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* ── Header ── */}
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
              Selected{" "}
              <em style={{ color: "var(--color-gold)" }}>Projects</em>
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
                      activeFilter === f
                        ? "var(--color-gold)"
                        : "transparent",
                    border: `1px solid ${
                      activeFilter === f
                        ? "var(--color-gold)"
                        : "var(--color-border)"
                    }`,
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

        {/* ── Initial grid (always visible) ── */}
        <div
          className="portfolio-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "220px",
            gap: "16px",
          }}
        >
          {initialProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} globalIndex={i} />
          ))}
        </div>

        {/* ── Extra grid — hidden until "View All" is clicked ── */}
        <div ref={extraRef} className="extra-wrapper">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gridAutoRows: "220px",
              gap: "16px",
              paddingTop: "16px", // matches the main grid gap
            }}
          >
            {extraProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                globalIndex={INITIAL_COUNT + i}
                className="extra-card"
              />
            ))}
          </div>
        </div>

        {/* ── CTA button ── */}
        {hasExtra && (
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <button
              onClick={handleToggle}
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
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--color-gold)";
                el.style.color = "var(--color-gold)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--color-border)";
                el.style.color = "var(--color-text-muted)";
              }}
            >
              {isExpanded ? (
                <>
                  Show Less
                  {/* Up chevron */}
                  <svg width="10" height="7" viewBox="0 0 10 7" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M1 6L5 2L9 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </>
              ) : (
                <>
                  View All Projects
                  {/* Down chevron + count badge */}
                  <span
                    style={{
                      display: "inline-block",
                      padding: "2px 7px",
                      border: "1px solid currentColor",
                      borderRadius: "20px",
                      fontSize: "10px",
                      letterSpacing: "0.06em",
                      lineHeight: 1.4,
                      opacity: 0.7,
                    }}
                  >
                    +{extraProjects.length}
                  </span>
                  <svg width="10" height="7" viewBox="0 0 10 7" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <style>{`
        /* Extra wrapper: collapses to zero height, GSAP drives max-height */
        .extra-wrapper {
          max-height: 0;
          overflow: hidden;
        }

        @media (max-width: 767px) {
          #portfolio { padding: 80px 24px !important; }

          .portfolio-grid,
          .extra-wrapper > div {
            grid-template-columns: 1fr 1fr !important;
            grid-auto-rows: 200px !important;
          }
          .portfolio-card {
            grid-column: span 1 !important;
            grid-row:    span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
