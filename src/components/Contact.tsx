import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

// ─── Replace these three values with your EmailJS credentials ───────────────
//  Dashboard → https://dashboard.emailjs.com
//  Service ID  : Email Services → your service → Service ID
//  Template ID : Email Templates → your template → Template ID
//  Public Key  : Account → General → Public Key
const EMAILJS_SERVICE_ID = "service_e771xa9";
const EMAILJS_TEMPLATE_ID = "template_yy2xy3i";
const EMAILJS_PUBLIC_KEY = "IxOvs1RP2asNGV7t3";
// ────────────────────────────────────────────────────────────────────────────
//  In your EmailJS template, use these variables:
//    {{from_name}}    → sender's name
//    {{from_email}}   → sender's email
//    {{phone}}        → phone number
//    {{service}}      → selected service
//    {{message}}      → project description
// ────────────────────────────────────────────────────────────────────────────

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
};

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormState>({
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
    setStatus("sending");

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "", service: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const isSending = status === "sending";

  return (
    <section
      id="contact"
      ref={containerRef}
      style={{ padding: "120px 48px", background: "var(--color-surface)" }}
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
        {/* ── Left — Info ───────────────────────────────────────────── */}
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
                value: "chereninterior@gmail.com",
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
                value: "+40 766 334 491",
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
                value: "Bucharest",
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

          {/* Image accent */}
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

        {/* ── Right — Form ──────────────────────────────────────────── */}
        <div className="contact-right" style={{ opacity: 0 }}>
          {/* Success state */}
          {status === "sent" ? (
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
              <button
                onClick={() => setStatus("idle")}
                style={{
                  marginTop: "8px",
                  background: "none",
                  border: "1px solid var(--color-border)",
                  padding: "10px 28px",
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "var(--color-gold)";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--color-gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "var(--color-border)";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--color-text-muted)";
                }}
              >
                Send Another
              </button>
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
                    placeholder="+40 xxx xxx xxx"
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
                    <option
                      value="Interior Design"
                      style={{ background: "#161412" }}
                    >
                      Interior Design
                    </option>
                    <option
                      value="3D Visualization"
                      style={{ background: "#161412" }}
                    >
                      3D Visualization
                    </option>
                    <option
                      value="Furniture Selection"
                      style={{ background: "#161412" }}
                    >
                      Furniture Selection
                    </option>
                    <option
                      value="Turnkey Solution"
                      style={{ background: "#161412" }}
                    >
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

              {/* Error banner */}
              {status === "error" && (
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "#e07070",
                    padding: "12px 16px",
                    border: "1px solid rgba(224,112,112,0.3)",
                    lineHeight: 1.5,
                  }}
                >
                  Something went wrong. Please check your connection and try
                  again, or email us directly at hello@prydumano.design
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                style={{
                  padding: "18px 48px",
                  background: isSending
                    ? "var(--color-gold-dark)"
                    : "var(--color-gold)",
                  border: "none",
                  color: "var(--color-bg)",
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  cursor: isSending ? "not-allowed" : "pointer",
                  fontWeight: 500,
                  alignSelf: "flex-start",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  opacity: isSending ? 0.8 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isSending) {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "var(--color-gold-light)";
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    isSending ? "var(--color-gold-dark)" : "var(--color-gold)";
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(0)";
                }}
              >
                {isSending ? (
                  <>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{ animation: "spin 1s linear infinite" }}
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="20"
                        strokeDashoffset="10"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  "Send Message →"
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          #contact { padding: 80px 24px !important; }
          #contact > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          .contact-right form > div:nth-child(2),
          .contact-right form > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
