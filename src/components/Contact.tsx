import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-left",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-left", start: "top 78%" },
        },
      );
      gsap.fromTo(
        ".contact-right",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-right", start: "top 78%" },
        },
      );
    },
    { scope: containerRef },
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to your API endpoint
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      style={{
        padding: "120px 48px",
        background: "var(--color-surface)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left — Info */}
        <div
          className="contact-left"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            opacity: 0,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "20px",
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
                Start a Project
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 4vw, 64px)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "var(--color-text)",
                marginBottom: "24px",
              }}
            >
              Let's create{" "}
              <em style={{ color: "var(--color-gold)" }}>something</em>{" "}
              beautiful.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--color-text-muted)",
                maxWidth: "400px",
              }}
            >
              Ready to transform your space? Tell us about your project and
              we'll arrange a free 30-minute consultation to discuss your
              vision.
            </p>
          </div>

          {/* Contact details */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {[
              {
                label: "Email",
                value: "hello@prydumano.design",
                icon: (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
              },
              {
                label: "Phone",
                value: "+380 32 000 0000",
                icon: (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
              },
              {
                label: "Studio",
                value: "Lviv, Ukraine",
                icon: (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-gold)",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                      marginBottom: "2px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "var(--color-text)",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Background image accent */}
          <div
            style={{
              position: "relative",
              height: "260px",
              overflow: "hidden",
              borderRadius: "2px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1738168266307-1d1515cbca2b?w=700&q=80"
              alt="Our design studio"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.6)",
              }}
              loading="lazy"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontStyle: "italic",
                  color: "var(--color-text)",
                  textAlign: "center",
                  padding: "0 24px",
                }}
              >
                "Every space tells a story.
                <br />
                Let's write yours."
              </p>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact-right" style={{ opacity: 0 }}>
          {submitted ? (
            <div
              style={{
                border: "1px solid rgba(201,169,110,0.3)",
                padding: "60px 48px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle
                  cx="24"
                  cy="24"
                  r="23"
                  stroke="var(--color-gold)"
                  strokeWidth="1.2"
                />
                <path
                  d="M14 24l7 7 13-14"
                  stroke="var(--color-gold)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "32px",
                  color: "var(--color-text)",
                }}
              >
                Message Sent
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.7,
                }}
              >
                Thank you for reaching out. We'll review your project and get
                back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "36px" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 400,
                  color: "var(--color-text)",
                  paddingBottom: "24px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                Tell us about your project
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "32px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <label
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    required
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <label
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    required
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "32px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <label
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Phone
                  </label>
                  <input
                    className="form-input"
                    type="tel"
                    placeholder="+380 xx xxx xxxx"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <label
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Service Needed
                  </label>
                  <select
                    className="form-input"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    style={{ cursor: "pointer", background: "transparent" }}
                  >
                    <option value="" style={{ background: "#161412" }}>
                      Select a service
                    </option>
                    <option value="interior" style={{ background: "#161412" }}>
                      Interior Design
                    </option>
                    <option value="3d" style={{ background: "#161412" }}>
                      3D Visualization
                    </option>
                    <option value="furniture" style={{ background: "#161412" }}>
                      Furniture Selection
                    </option>
                    <option value="turnkey" style={{ background: "#161412" }}>
                      Turnkey Solution
                    </option>
                  </select>
                </div>
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                  }}
                >
                  Project Description *
                </label>
                <textarea
                  className="form-input"
                  required
                  rows={5}
                  placeholder="Tell us about your space, vision, and timeline..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  style={{ resize: "vertical", fontFamily: "var(--font-body)" }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "18px 48px",
                  background: "var(--color-gold)",
                  border: "none",
                  color: "var(--color-bg)",
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontWeight: 500,
                  alignSelf: "flex-start",
                  transition: "all 0.3s ease",
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
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact { padding: 80px 24px !important; }
          #contact > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .contact-right form > div:nth-child(2),
          .contact-right form > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
