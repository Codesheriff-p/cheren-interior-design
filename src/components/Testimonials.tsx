import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80&fm=webp",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=80&fm=webp",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96&q=80&fm=webp",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80&fm=webp",
];
const INITIALS = ["MC", "AV", "BR", "DM"];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", {
    returnObjects: true,
  }) as Array<{ quote: string; name: string; project: string }>;
  const [active, setActive] = useState(0);
  const [imageError, setImageError] = useState<Set<number>>(new Set());

  useGSAP(
    () => {
      gsap.fromTo(
        ".testimonials-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".testimonials-header", start: "top 82%" },
        },
      );
      gsap.fromTo(
        ".testimonials-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".testimonials-grid", start: "top 78%" },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="testimonials"
      ref={containerRef}
      style={{ padding: "120px 48px" }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          className="testimonials-header"
          style={{
            marginBottom: "64px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            textAlign: "center",
          }}
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
              {t("testimonials.tag")}
            </span>
            <span
              style={{
                width: "40px",
                height: "1px",
                background: "var(--color-gold)",
                display: "block",
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4vw, 60px)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--color-text)",
            }}
          >
            {t("testimonials.title")}
            <br />
            <em style={{ color: "var(--color-gold)" }}>
              {t("testimonials.titleHighlight")}
            </em>
          </h2>
        </div>

        {/* Cards */}
        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="testimonials-card"
              onClick={() => setActive(i)}
              style={{
                background:
                  active === i
                    ? "var(--color-surface-2)"
                    : "var(--color-surface)",
                border: `1px solid ${active === i ? "rgba(201,169,110,0.4)" : "var(--color-border)"}`,
                padding: "40px 36px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                opacity: 0,
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                if (active !== i) {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(201,169,110,0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== i) {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "var(--color-border)";
                }
              }}
            >
              {/* Quote mark */}
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                <path
                  d="M0 24V12C0 5.37 4.48 1.17 13.44 0L14.4 2.4C10.56 3.12 7.84 4.57 6.24 6.75 4.8 8.79 4.08 11.07 4.08 13.59h5.76V24H0zm17.6 0V12c0-6.63 4.48-10.83 13.44-12L32 2.4c-3.84.72-6.56 2.17-8.16 4.35-1.44 2.04-2.16 4.32-2.16 6.84h5.76V24H17.6z"
                  fill="rgba(201,169,110,0.3)"
                />
              </svg>

              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "17px",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  color: "var(--color-text)",
                  flexGrow: 1,
                }}
              >
                {item.quote}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(201,169,110,0.2)",
                    border: "1px solid rgba(201,169,110,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--color-gold)",
                    flexShrink: 0,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {!imageError.has(i) && (
                    <img
                      src={AVATARS[i]}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                      onError={() => {
                        setImageError((prev) => new Set(prev).add(i));
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  {imageError.has(i) && <span>{INITIALS[i]}</span>}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--color-text)",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      color: "var(--color-gold)",
                      marginTop: "2px",
                    }}
                  >
                    {item.project}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #testimonials { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
