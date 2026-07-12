import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    num: "01",
    title: "Interior Design",
    desc: "Full-cycle interior design for residential and commercial spaces. From concept development to complete style packages and material selection.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="3" y="3" width="26" height="26" />
        <path d="M3 12h26M12 12v17" />
        <circle cx="22" cy="20" r="3" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "3D Visualization",
    desc: "Photorealistic 3D renders and virtual walkthroughs so you can see exactly how your space will look before a single item is moved.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M16 3L29 10v12L16 29 3 22V10L16 3z" />
        <path d="M16 3v26M3 10l13 7 13-7" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Furniture Selection",
    desc: "Curated procurement of furniture, lighting, and decor from trusted European and Ukrainian suppliers — within your budget.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="4" y="14" width="24" height="8" rx="1" />
        <path d="M8 14V10a2 2 0 012-2h12a2 2 0 012 2v4" />
        <path d="M6 22v3M26 22v3" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Turnkey Solutions",
    desc: "Complete project management from design brief to final handover. We coordinate contractors, supervise works, and manage every detail.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M16 3a13 13 0 100 26A13 13 0 0016 3z" />
        <path d="M16 9v7l5 3" />
      </svg>
    ),
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".services-heading-wrap",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-heading-wrap",
            start: "top 82%",
          },
        },
      );

      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".services-grid", start: "top 78%" },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="services"
      ref={containerRef}
      style={{
        padding: "120px 48px",
        background: "var(--color-surface)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          className="services-heading-wrap"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "72px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
                What We Do
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 4vw, 64px)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "var(--color-text)",
              }}
            >
              Our <em style={{ color: "var(--color-gold)" }}>Services</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--color-text-muted)",
                maxWidth: "900px",
              }}
            >
              Every home has a story. We help you write it with thoughtful
              design choices, quality materials, and careful execution.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--color-border)",
            border: "1px solid var(--color-border)",
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.num}
              className="service-card"
              style={{
                background: "var(--color-surface)",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                cursor: "default",
                transition: "background 0.3s ease",
                opacity: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "var(--color-surface-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "var(--color-surface)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "var(--color-gold)" }}>
                  {service.icon}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "48px",
                    fontWeight: 300,
                    color: "rgba(201,169,110,0.15)",
                    lineHeight: 1,
                  }}
                >
                  {service.num}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "var(--color-text-muted)",
                  flexGrow: 1,
                }}
              >
                {service.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--color-gold)",
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  paddingTop: "8px",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                Learn More
                <svg width="14" height="8" viewBox="0 0 16 8" fill="none">
                  <path
                    d="M0 4H14M14 4L11 1M14 4L11 7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #services { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
