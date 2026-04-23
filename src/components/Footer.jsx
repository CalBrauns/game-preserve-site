import { Link } from 'react-router-dom'
import { config } from '../siteConfig'

const DOT_COLORS = ['#00bfff', '#bf00ff', '#ff0033', '#39ff14']

function MarqueeLights() {
  return (
    <div style={{ display: 'flex', gap: '6px', padding: '4px 12px', overflow: 'hidden', background: 'rgba(3,0,18,0.97)' }}>
      {Array.from({ length: 300 }).map((_, i) => (
        <span
          key={i}
          className="marquee-dot"
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            flexShrink: 0,
            backgroundColor: DOT_COLORS[i % DOT_COLORS.length],
            boxShadow: `0 0 5px ${DOT_COLORS[i % DOT_COLORS.length]}`,
            animationDelay: `${(i * 0.15) % 1.4}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: 'rgba(3,0,18,0.97)', borderTop: '1px solid rgba(57,255,20,0.2)', marginTop: 'auto' }}>
      <MarqueeLights />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
        {/* Brand */}
        <div>
          <p className="neon-green font-pixel" style={{ fontSize: '0.7rem', marginBottom: 12 }}>
            {config.logo} {config.nameWord1} {config.nameWord2}
          </p>
          <p style={{ color: '#666', fontSize: '0.75rem', lineHeight: 1.7 }}>
            {config.footerTagline}
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="neon-purple font-pixel" style={{ fontSize: '0.55rem', marginBottom: 12, letterSpacing: '0.12em' }}>NAVIGATE</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {config.nav.map(({ to, label }) => (
              <Link key={to} to={to} style={{ color: '#888', fontSize: '0.75rem', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#39ff14'}
                onMouseLeave={e => e.target.style.color = '#888'}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="neon-blue font-pixel" style={{ fontSize: '0.55rem', marginBottom: 12, letterSpacing: '0.12em' }}>CONTACT</p>
          <div style={{ color: '#888', fontSize: '0.75rem', lineHeight: 2 }}>
            <p>📍 {config.address}</p>
            <p>🕐 {config.hours.weekday}</p>
            <p>🕐 {config.hours.weekend}</p>
            <p style={{ marginTop: 8 }}>📧 {config.email}</p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '16px 24px', textAlign: 'center' }}>
        <p className="font-pixel" style={{ fontSize: '0.45rem', color: '#444', letterSpacing: '0.1em' }}>
          {config.copyright}
        </p>
      </div>
    </footer>
  )
}
