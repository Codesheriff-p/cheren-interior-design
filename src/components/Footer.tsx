const FOOTER_LINKS = {
  Studio: ['About Us', 'Our Team', 'Careers', 'Press'],
  Services: ['Interior Design', '3D Visualization', 'Furniture Selection', 'Turnkey Solutions'],
  Connect: ['Instagram', 'Behance', 'Pinterest', 'Houzz'],
}

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-bg)',
      borderTop: '1px solid var(--color-border)',
    }}>
      {/* Main footer content */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '80px 48px 48px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '60px',
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: 'var(--color-text)',
              marginBottom: '4px',
            }}>
              PRYDUMANO
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
            }}>
              Design Studio
            </p>
          </div>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            lineHeight: 1.8,
            color: 'var(--color-text-muted)',
            maxWidth: '300px',
          }}>
            A team of interior designers from Lviv, Ukraine — creating spaces that feel as good as they look since 2016.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            {['Instagram', 'Behance', 'Pinterest'].map(s => (
              <a
                key={s}
                href="#"
                aria-label={s}
                style={{
                  width: '36px',
                  height: '36px',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                  fontSize: '11px',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'var(--color-gold)'
                  el.style.color = 'var(--color-gold)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.color = 'var(--color-text-muted)'
                }}
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
              marginBottom: '4px',
            }}>
              {title}
            </h4>
            {links.map(link => (
              <a
                key={link}
                href="#"
                className="link-gold"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--color-text-muted)',
                  textDecoration: 'none',
                }}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '24px 48px',
        borderTop: '1px solid var(--color-border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          color: 'var(--color-text-muted)',
          letterSpacing: '0.04em',
        }}>
          © {new Date().getFullYear()} Prydumano Design. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['Privacy Policy', 'Terms of Service'].map(link => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-gold)')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-muted)')}
            >
              {link}
            </a>
          ))}
        </div>
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
  )
}
