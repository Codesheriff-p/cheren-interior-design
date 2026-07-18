import { useTranslation } from "react-i18next";

export default function LangSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontFamily: "var(--font-body)",
        fontSize: "12px",
      }}
    >
      <button
        onClick={() => i18n.changeLanguage("ro")}
        style={{
          background: "none",
          border: "none",
          color: i18n.language === "ro" ? "var(--color-gold)" : "var(--color-text-muted)",
          fontWeight: i18n.language === "ro" ? 700 : 400,
          cursor: "pointer",
        }}
      >
        RO
      </button>
      <span style={{ color: "var(--color-text-muted)" }}>/</span>
      <button
        onClick={() => i18n.changeLanguage("en")}
        style={{
          background: "none",
          border: "none",
          color: i18n.language === "en" ? "var(--color-gold)" : "var(--color-text-muted)",
          fontWeight: i18n.language === "en" ? 700 : 400,
          cursor: "pointer",
        }}
      >
        EN
      </button>
    </div>
  );
}
