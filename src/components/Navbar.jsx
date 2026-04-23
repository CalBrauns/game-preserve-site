import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { config } from '../siteConfig'

const DOT_COLORS = ['#1a5fff', '#ff1a1a', '#c8c8d8', '#00d4ff']

function MarqueeLights() {
  return (
    <div style={{ display: 'flex', gap: '6px', padding: '4px 12px', overflow: 'hidden', background: 'rgba(3,0,18,0.98)' }}>
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
          }}
        />
      ))}
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: 'rgba(4,0,22,0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(26,95,255,0.3)',
      }}
    >
      <MarqueeLights />

      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 24px' }}>
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '1.6rem' }}>{config.logo}</span>
          <span className="neon-green font-pixel" style={{ fontSize: '0.65rem', letterSpacing: '0.15em' }}>
            {config.nameWord1} {config.nameWord2}
          </span>
        </NavLink>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="hidden-mobile">
          {config.nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'neon-green font-pixel' : 'font-pixel'}
              style={({ isActive }) => ({
                fontSize: '0.55rem',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                color: isActive ? undefined : '#888',
                transition: 'color 0.2s',
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="neon-green font-pixel show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', display: 'none' }}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background: 'rgba(4,0,22,0.97)', padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: 20, borderTop: '1px solid rgba(26,95,255,0.2)' }}>
          {config.nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? 'neon-green font-pixel' : 'font-pixel'}
              style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textDecoration: 'none', color: undefined }}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
      `}</style>
    </header>
  )
}
