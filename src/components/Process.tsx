import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    duration: "1–2 days",
    desc: "We meet to understand your lifestyle, preferences, and goals. We review the space, take measurements, and define the project scope and budget.",
  },
  {
    num: "02",
    title: "Concept & Design",
    duration: "2–3 weeks",
    desc: "Our team develops two or three distinct concept directions. We present mood boards, material palettes, and preliminary layouts for your feedback.",
  },
  {
    num: "03",
    title: "3D Visualization",
    duration: "1–2 weeks",
    desc: "Photorealistic renders of the approved concept let you experience the space before any works begin. Revisions until you love every corner.",
  },
  {
    num: "04",
    title: "Execution & Handover",
    duration: "4–12 weeks",
    desc: "We manage all contractors, deliveries, and installations. You receive a complete, move-in-ready space with our after-project support guarantee.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".process-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".process-header", start: "top 82%" },
        },
      );

      gsap.fromTo(
        ".process-step",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: { trigger: ".process-steps", start: "top 78%" },
        },
      );

      gsap.fromTo(
        ".process-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          transformOrigin: "top",
          scrollTrigger: { trigger: ".process-steps", start: "top 78%" },
        },
      );

      gsap.fromTo(
        ".process-img",
        { opacity: 0, scale: 0.94, x: 60 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".process-img", start: "top 78%" },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="process"
      ref={containerRef}
      style={{
        padding: "120px 48px",
        background: "var(--color-surface)",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          className="process-header"
          style={{
            marginBottom: "72px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
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
                How We Work
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
              Our <em style={{ color: "var(--color-gold)" }}>Process</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--color-text-muted)",
                maxWidth: "700px",
              }}
            >
              A transparent, collaborative process designed to deliver
              exceptional results on time and within budget.
            </p>
          </div>
        </div>

        {/* Steps + Image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Steps */}
          <div className="process-steps" style={{ position: "relative" }}>
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: "19px",
                top: "24px",
                bottom: "24px",
                width: "1px",
                background: "var(--color-border)",
              }}
            >
              <div
                className="process-line-fill"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, var(--color-gold), rgba(201,169,110,0.2))",
                  transformOrigin: "top",
                }}
              />
            </div>

            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="process-step"
                style={{
                  display: "flex",
                  gap: "32px",
                  marginBottom: i < STEPS.length - 1 ? "48px" : 0,
                  paddingLeft: "56px",
                  position: "relative",
                  opacity: 0,
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "4px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background:
                      i === 0 ? "var(--color-gold)" : "var(--color-surface)",
                    border: `2px solid ${i === 0 ? "var(--color-gold)" : "var(--color-border)"}`,
                    zIndex: 1,
                    transition: "background 0.3s",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "13px",
                        color: "var(--color-gold)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {step.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "26px",
                        fontWeight: 500,
                        color: "var(--color-text)",
                        lineHeight: 1,
                      }}
                    >
                      {step.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        color: "var(--color-text-muted)",
                        padding: "4px 10px",
                        border: "1px solid var(--color-border)",
                        marginLeft: "auto",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      lineHeight: 1.8,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div
            className="process-img img-overlay"
            style={{
              height: "560px",
              overflow: "hidden",
              borderRadius: "2px",
              opacity: 0,
              position: "sticky",
              top: "120px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1737898415581-7dea57a1905b?w=800&q=80"
              alt="Design process — open plan living space"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #process { padding: 80px 24px !important; }
          #process > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          .process-img { position: static !important; height: 300px !important; }
        }
      `}</style>
    </section>
  );
}
