import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import LangSwitcher from "./LangSwitcher";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const NAV_LINKS = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.portfolio"), href: "#portfolio" },
    { label: t("nav.process"), href: "#process" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 },
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "16px 48px" : "10px 48px",
          backgroundColor: scrolled ? "rgba(13,12,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "none",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "22px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            color: "var(--color-text)",
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            width={120}
            height={60}
            style={{ width: "120px", height: "auto" }}
          />
        </a>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "40px",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="link-gold"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  padding: 0,
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <LangSwitcher />
          </li>
          <li>
            <button
              onClick={() => handleNavClick("#contact")}
              style={{
                padding: "10px 28px",
                border: "1px solid var(--color-gold)",
                background: "transparent",
                color: "var(--color-gold)",
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "var(--color-gold)";
                el.style.color = "var(--color-bg)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.background = "transparent";
                el.style.color = "var(--color-gold)";
              }}
            >
              {t("nav.getInTouch")}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: menuOpen ? "var(--color-gold)" : "var(--color-text)",
              transition: "all 0.3s",
              transform: menuOpen
                ? "rotate(45deg) translate(4px, 4px)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: menuOpen ? "var(--color-gold)" : "var(--color-text)",
              transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: menuOpen ? "var(--color-gold)" : "var(--color-text)",
              transition: "all 0.3s",
              transform: menuOpen
                ? "rotate(-45deg) translate(4px, -4px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "rgba(13,12,10,0.97)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-display)",
              fontSize: "40px",
              fontWeight: 300,
              color: "var(--color-text)",
              letterSpacing: "0.05em",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-gold)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text)")
            }
          >
            {link.label}
          </button>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          nav { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </>
  );
}
