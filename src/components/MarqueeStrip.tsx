import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

const spanStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "14px",
  fontStyle: "italic",
  letterSpacing: "0.08em",
  color: "var(--color-text-muted)",
  whiteSpace: "nowrap",
  flexShrink: 0,
};

export default function MarqueeStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const text = t("marquee.text");

  useGSAP(
    () => {
      // Animate the track from x:0 to xPercent:-50 (= one span width).
      // At -50% the content is identical to 0%, so the reset is invisible.
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 22,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: trackRef },
  );

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "18px 0",
        background: "var(--color-surface)",
      }}
    >
      {/* Two identical spans — at xPercent:-50 we've moved exactly one span,
          the visual loops back to the start seamlessly */}
      <div ref={trackRef} style={{ display: "flex", width: "max-content" }}>
        <span style={spanStyle}>{text}</span>
        <span style={spanStyle} aria-hidden="true">
          {text}
        </span>
      </div>
    </div>
  );
}
