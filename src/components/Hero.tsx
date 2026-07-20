import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1738168362059-44a0b8a80b39?w=600&q=80",
    alt: "Modern kitchen with wooden floor",
  },
  {
    src: "https://images.unsplash.com/photo-1738168273959-952fdc961991?w=600&q=80",
    alt: "Living room with couch and desk",
  },
  {
    src: "https://images.unsplash.com/photo-1738168269267-241954441823?w=600&q=80",
    alt: "Living room with flat screen TV",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const titleWords = t("hero.title").split(" ");

  useGSAP(
    () => {
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
    <section
      ref={containerRef}
      id="hero"
      style={{
        minHeight: "100vh",
        padding: "0 48px",
        paddingTop: "120px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, var(--color-bg) 0%, #100F0D 100%)",
      }}
    >
      {/* Left — Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          paddingTop: "20px",
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
            fontSize: "clamp(48px, 5.5vw, 80px)",
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
            fontSize: "16px",
            lineHeight: 1.8,
            color: "var(--color-text-muted)",
            maxWidth: "480px",
            opacity: 0,
          }}
        >
          {t("hero.subtitle")}
        </p>

        <div
          className="hero-cta"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
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
              padding: "16px 40px",
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
      <div style={{ position: "relative", height: "600px" }}>
        {/* Main large image */}
        <div
          className="hero-img-1 img-overlay"
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
            alt={HERO_IMAGES[0].alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            loading="eager"
          />
        </div>

        {/* Bottom-left overlapping */}
        <div
          className="hero-img-2 img-overlay"
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
            alt={HERO_IMAGES[1].alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            loading="eager"
          />
        </div>

        {/* Small floating accent */}
        <div
          className="hero-img-3 img-overlay"
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
            alt={HERO_IMAGES[2].alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            loading="eager"
          />
        </div>

        {/* Floating label */}
        <div
          className="hero-img-1"
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
            grid-template-columns: 1fr !important;
            padding: 100px 24px 60px !important;
            gap: 40px !important;
          }
          section#hero > div:last-of-type {
            height: 320px !important;
          }
          .hero-scroll-cue { display: none !important; }
        }
      `}</style>
    </section>
  );
}
