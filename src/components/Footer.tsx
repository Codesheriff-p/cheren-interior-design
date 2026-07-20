import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

export default function Footer() {
  const { t } = useTranslation();
  const footerLinks = {
    studio: t("footer.links.studio", { returnObjects: true }) as string[],
    services: t("footer.links.services", { returnObjects: true }) as string[],
  };
  return (
    <footer
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "80px 48px 48px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr", // 3 columns: brand + Studio + Services
          gap: "60px",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Logo block — img lives in its own div, not a <p> */}
          <div>
            <img
              src={logo}
              alt="Prydumano Design"
              style={{
                width: "140px",
                height: "auto",
                display: "block",
                marginBottom: "8px",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
              }}
            >
              {t("footer.brandTag")}
            </p>
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "var(--color-text-muted)",
              maxWidth: "300px",
            }}
          >
            {t("footer.brandCopy")}
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div
            key={title}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                marginBottom: "4px",
              }}
            >
              {title === "studio" ? "Studio" : "Services"}
            </h4>
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="link-gold-2"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "24px 48px",
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "12px",
            color: "var(--color-text-muted)",
            letterSpacing: "0.04em",
          }}
        >
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div:first-child {
            grid-template-columns: 1fr 1fr !important;
            padding: 60px 24px 40px !important;
          }
          footer > div:first-child > div:first-child {
            grid-column: 1 / -1;
          }
          footer > div:last-child {
            padding: 20px 24px !important;
          }
        }
        @media (max-width: 480px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
