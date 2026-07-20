import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 10, suffix: "+" },
  { value: 1, suffix: " year" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-tag",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: ".about-tag", start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".about-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-heading", start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".about-body",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          scrollTrigger: { trigger: ".about-body", start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          scrollTrigger: { trigger: ".about-stats", start: "top 80%" },
        },
      );

      // Animate stat numbers
      STATS.forEach((stat, i) => {
        gsap.fromTo(
          `.stat-num-${i}`,
          { textContent: "0" },
          {
            textContent: stat.value,
            duration: 1.8,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: { trigger: `.stat-num-${i}`, start: "top 85%" },
          },
        );
      });

      gsap.fromTo(
        ".about-img-main",
        { opacity: 0, x: 60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-img-main", start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".about-img-small",
        { opacity: 0, x: 40, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-img-small", start: "top 80%" },
          delay: 0.3,
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="about"
      ref={containerRef}
      style={{
        padding: "120px 48px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {/* Left — Text */}
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div
          className="about-tag"
          style={{ display: "flex", alignItems: "center", gap: "16px" }}
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
            {t("about.tag")}
          </span>
        </div>

        <h2
          className="about-heading"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 4vw, 62px)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "var(--color-text)",
          }}
        >
          {t("about.heading")
            .split(" ")
            .map((word, i, arr) => (
              <span key={i}>
                {word}
                {i < arr.length - 1 ? " " : ""}
              </span>
            ))}
        </h2>

        <div
          className="about-body"
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              lineHeight: 1.9,
              color: "var(--color-text-muted)",
            }}
          >
            {t("about.paragraph1")}
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              lineHeight: 1.9,
              color: "var(--color-text-muted)",
            }}
          >
            {t("about.paragraph2")}
          </p>
        </div>

        {/* Stats */}
        <div
          className="about-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            marginTop: "16px",
            paddingTop: "32px",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="about-stat"
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "48px",
                  fontWeight: 400,
                  color: "var(--color-text)",
                  lineHeight: 1,
                }}
              >
                <span className={`stat-num-${i}`}>0</span>
                <span style={{ color: "var(--color-gold)" }}>
                  {stat.suffix}
                </span>
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                }}
              >
                {i === 0
                  ? t("about.stats.projectsCompleted")
                  : t("about.stats.yearsOfExperience")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Images */}
      <div style={{ position: "relative", height: "580px" }}>
        <div
          className="about-img-main img-overlay"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "85%",
            height: "72%",
            overflow: "hidden",
            borderRadius: "2px",
            opacity: 0,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1738168251394-9241984c8292?auto=format&fit=crop&w=700&q=80&fm=webp"
            alt="Living room with natural light"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            loading="lazy"
          />
        </div>

        <div
          className="about-img-small img-overlay"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "52%",
            height: "42%",
            overflow: "hidden",
            borderRadius: "2px",
            border: "4px solid var(--color-bg)",
            opacity: 0,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1737898378311-9432ddabc399?auto=format&fit=crop&w=500&q=80&fm=webp"
            alt="Elegant hallway design"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            loading="lazy"
          />
        </div>

        {/* Decorative dot grid */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "-10px",
            width: "80px",
            height: "80px",
            backgroundImage:
              "radial-gradient(circle, rgba(201,169,110,0.25) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about {
            grid-template-columns: 1fr !important;
            padding: 80px 24px !important;
            gap: 48px !important;
          }
          #about > div:last-child {
            height: 380px !important;
          }
        }
      `}</style>
    </section>
  );
}
