import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1738168362059-44a0b8a80b39?auto=format&fit=crop&w=900&q=80&fm=webp",
    srcSet:
      "https://images.unsplash.com/photo-1738168362059-44a0b8a80b39?auto=format&fit=crop&w=480&q=80&fm=webp 480w, https://images.unsplash.com/photo-1738168362059-44a0b8a80b39?auto=format&fit=crop&w=720&q=80&fm=webp 720w, https://images.unsplash.com/photo-1738168362059-44a0b8a80b39?auto=format&fit=crop&w=900&q=80&fm=webp 900w",
    sizes: "(max-width: 768px) 100vw, 40vw",
    alt: "Modern kitchen with wooden floor",
  },
  {
    src: "https://images.unsplash.com/photo-1738168273959-952fdc961991?auto=format&fit=crop&w=720&q=80&fm=webp",
    srcSet:
      "https://images.unsplash.com/photo-1738168273959-952fdc961991?auto=format&fit=crop&w=360&q=80&fm=webp 360w, https://images.unsplash.com/photo-1738168273959-952fdc961991?auto=format&fit=crop&w=540&q=80&fm=webp 540w, https://images.unsplash.com/photo-1738168273959-952fdc961991?auto=format&fit=crop&w=720&q=80&fm=webp 720w",
    sizes: "(max-width: 768px) 100vw, 32vw",
    alt: "Living room with couch and desk",
  },
  {
    src: "https://images.unsplash.com/photo-1738168269267-241954441823?auto=format&fit=crop&w=720&q=80&fm=webp",
    srcSet:
      "https://images.unsplash.com/photo-1738168269267-241954441823?auto=format&fit=crop&w=320&q=80&fm=webp 320w, https://images.unsplash.com/photo-1738168269267-241954441823?auto=format&fit=crop&w=480&q=80&fm=webp 480w, https://images.unsplash.com/photo-1738168269267-241954441823?auto=format&fit=crop&w=720&q=80&fm=webp 720w",
    sizes: "(max-width: 768px) 100vw, 24vw",
    alt: "Living room with flat screen TV",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const titleWords = t("hero.title").split(" ");
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useGSAP(
    () => {
      if (prefersReducedMotion || isMobile) {
        gsap.set(
          ".hero-tag, .hero-sub, .hero-cta, .hero-img-1, .hero-img-2, .hero-img-3, .hero-scroll-cue, .hero-word",
          { opacity: 1, y: 0 },
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-tag",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5 },
      )
        .fromTo(
          ".hero-word",
          { y: "110%" },
          { y: "0%", duration: 1.1, stagger: 0.08 },
          "-=0.4",
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          ".hero-img-1",
          { opacity: 0, y: 40, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2 },
          "-=0.8",
        )
        .fromTo(
          ".hero-img-2",
          { opacity: 0, y: 60, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2 },
          "-=0.9",
        )
        .fromTo(
          ".hero-img-3",
          { opacity: 0, y: 80, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2 },
          "-=0.9",
        )
        .fromTo(
          ".hero-scroll-cue",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <>
      <section
        ref={containerRef}
        id="hero"
        style={{
          minHeight: "100vh",
          padding: isMobile ? "0 20px" : "0 48px",
          paddingTop: isMobile ? "96px" : "120px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "28px" : "60px",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, var(--color-bg) 0%, #100F0D 100%)",
        }}
      >
        {/* Left — Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "24px" : "32px",
            paddingTop: isMobile ? "0" : "20px",
          }}
        >
          <div
            className="hero-tag"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              opacity: 0,
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
              {t("hero.tag")}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile
                ? "clamp(36px, 10vw, 48px)"
                : "clamp(48px, 5.5vw, 80px)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "var(--color-text)",
            }}
          >
            {titleWords.map((word, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  verticalAlign: "bottom",
                  marginRight: i < titleWords.length - 1 ? "0.25em" : 0,
                }}
              >
                <span
                  className="hero-word"
                  style={{
                    display: "inline-block",
                    fontStyle: word.endsWith(".") ? "italic" : "normal",
                    color: word.endsWith(".")
                      ? "var(--color-gold)"
                      : "var(--color-text)",
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p
            className="hero-sub"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: isMobile ? "15px" : "16px",
              lineHeight: 1.8,
              color: "var(--color-text-muted)",
              maxWidth: isMobile ? "none" : "480px",
              opacity: 0,
            }}
          >
            {t("hero.subtitle")}
          </p>

          <div
            className="hero-cta"
            style={{
              display: "flex",
              gap: isMobile ? "12px" : "20px",
              alignItems: isMobile ? "stretch" : "center",
              flexDirection: isMobile ? "column" : "row",
              opacity: 0,
            }}
          >
            <button
              onClick={() =>
                document
                  .querySelector("#portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                padding: isMobile ? "14px 24px" : "16px 40px",
                background: "var(--color-gold)",
                border: "none",
                color: "var(--color-bg)",
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontWeight: 500,
                transition: "background 0.3s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "var(--color-gold-light)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "var(--color-gold)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
              }}
            >
              {t("hero.cta")}
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "none",
                border: "none",
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                letterSpacing: "0.08em",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "color 0.3s ease",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
            >
              {t("hero.aboutUs")}
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path
                  d="M0 4H14M14 4L11 1M14 4L11 7"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right — Floating Image Grid */}
        <div
          className="hero-image-grid"
          style={{ position: "relative", height: isMobile ? "320px" : "600px" }}
        >
          {/* Main large image */}
          <div
            className="hero-img-1 hero-image-main img-overlay"
            style={{
              position: "absolute",
              top: "40px",
              right: "0",
              width: "72%",
              height: "65%",
              borderRadius: "2px",
              overflow: "hidden",
              opacity: 0,
            }}
          >
            <img
              src={HERO_IMAGES[0].src}
              srcSet={HERO_IMAGES[0].srcSet}
              sizes={HERO_IMAGES[0].sizes}
              alt={HERO_IMAGES[0].alt}
              width={900}
              height={700}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Bottom-left overlapping */}
          <div
            className="hero-img-2 hero-image-secondary img-overlay"
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "54%",
              height: "46%",
              borderRadius: "2px",
              overflow: "hidden",
              opacity: 0,
              border: "3px solid var(--color-bg)",
            }}
          >
            <img
              src={HERO_IMAGES[1].src}
              srcSet={HERO_IMAGES[1].srcSet}
              sizes={HERO_IMAGES[1].sizes}
              alt={HERO_IMAGES[1].alt}
              width={700}
              height={600}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Small floating accent */}
          <div
            className="hero-img-3 hero-image-accent img-overlay"
            style={{
              position: "absolute",
              bottom: "30px",
              right: "10px",
              width: "36%",
              height: "32%",
              borderRadius: "2px",
              overflow: "hidden",
              opacity: 0,
            }}
          >
            <img
              src={HERO_IMAGES[2].src}
              srcSet={HERO_IMAGES[2].srcSet}
              sizes={HERO_IMAGES[2].sizes}
              alt={HERO_IMAGES[2].alt}
              width={500}
              height={400}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Floating label */}
          <div
            className="hero-img-1 hero-metric"
            style={{
              position: "absolute",
              top: "10px",
              right: "12px",
              padding: "10px 16px",
              background: "rgba(13,12,10,0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(201,169,110,0.2)",
              borderRadius: "2px",
              opacity: 0,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                fontWeight: 500,
                color: "var(--color-gold)",
              }}
            >
              200+
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
              }}
            >
              Projects Done
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="hero-scroll-cue"
          role="button"
          tabIndex={0}
          onClick={() =>
            document
              .querySelector("#portfolio")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              document
                .querySelector("#portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{
            position: "absolute",
            bottom: "40px",
            left: "48px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            opacity: 0,
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "48px",
              background:
                "linear-gradient(to bottom, transparent, var(--color-gold))",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              writingMode: "horizontal-tb",
            }}
          >
            Scroll to Explore
          </span>
        </div>

        <style>{`
        @media (max-width: 767px) {
          section#hero {
            min-height: auto !important;
            grid-template-columns: 1fr !important;
            padding: 92px 20px 56px !important;
            gap: 28px !important;
          }
          section#hero > div:first-child {
            gap: 24px !important;
            padding-top: 0 !important;
          }
          section#hero h1 {
            max-width: 10ch !important;
          }
          .hero-sub {
            font-size: 15px !important;
            max-width: none !important;
          }
          .hero-cta {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
          }
          .hero-cta button {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-image-grid {
            height: 320px !important;
            width: 100% !important;
          }
          .hero-image-main {
            top: 12px !important;
            right: 6px !important;
            width: 74% !important;
            height: 64% !important;
          }
          .hero-image-secondary {
            left: 0 !important;
            bottom: 0 !important;
            width: 58% !important;
            height: 42% !important;
          }
          .hero-image-accent {
            bottom: 16px !important;
            right: 6px !important;
            width: 34% !important;
            height: 30% !important;
          }
          .hero-metric {
            top: 8px !important;
            right: 8px !important;
            padding: 8px 12px !important;
          }
          .hero-scroll-cue { display: none !important; }
        }
      `}</style>
      </section>
    </>
  );
}
