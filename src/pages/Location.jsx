import { motion } from 'framer-motion'

const LOCATIONS = [
  {
    name: 'THE WOODLANDS',
    address: '473 Sawdust Rd',
    city: 'Spring, TX 77380',
    phone: '(281) 353-5189',
    mapsUrl: 'https://maps.google.com/?q=473+Sawdust+Rd+Spring+TX+77380',
    color: 'neon-green',
    border: 'border-neon-green',
    hex: '#1a5fff',
    hours: [
      { days: 'Monday – Thursday', hours: '12:00 PM – 10:00 PM' },
      { days: 'Friday',            hours: '12:00 PM – 11:00 PM' },
      { days: 'Saturday',          hours: '10:00 AM – 11:00 PM' },
      { days: 'Sunday',            hours: '12:00 PM – 9:00 PM'  },
    ],
  },
  {
    name: 'NASA / WEBSTER',
    address: '20810 Gulf Freeway Suite Z',
    city: 'Webster, TX 77598',
    phone: '(832) 948-7030',
    mapsUrl: 'https://maps.google.com/?q=20810+Gulf+Freeway+Webster+TX+77598',
    color: 'neon-red',
    border: 'border-neon-red',
    hex: '#ff1a1a',
    hours: [
      { days: 'Monday – Thursday', hours: '12:00 PM – 10:00 PM' },
      { days: 'Friday',            hours: '12:00 PM – 11:00 PM' },
      { days: 'Saturday',          hours: '10:00 AM – 11:00 PM' },
      { days: 'Sunday',            hours: '12:00 PM – 9:00 PM'  },
    ],
  },
]

function LocationCard({ loc, delay }) {
  return (
    <motion.div
      className={`comic-card ${loc.border}`}
      style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 28 }}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <div>
        <p className={`font-pixel ${loc.color}`} style={{ fontSize: '0.6rem', letterSpacing: '0.14em', marginBottom: 16 }}>
          📍 {loc.name}
        </p>
        <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: 2.1 }}>
          {loc.address}<br />
          {loc.city}
        </p>
        <p style={{ color: '#666', fontSize: '0.8rem', marginTop: 4 }}>
          📞 {loc.phone}
        </p>
        <a
          href={loc.mapsUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            marginTop: 20,
            border: `2px solid ${loc.hex}`,
            color: loc.hex,
            background: 'transparent',
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '0.5rem',
            letterSpacing: '0.1em',
            padding: '0.7rem 1.2rem',
            textDecoration: 'none',
            boxShadow: `0 0 8px ${loc.hex}`,
            transition: 'background 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `${loc.hex}22`
            e.currentTarget.style.boxShadow = `0 0 18px ${loc.hex}`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.boxShadow = `0 0 8px ${loc.hex}`
          }}
        >
          OPEN IN MAPS
        </a>
      </div>

      <div>
        <p className={`font-pixel ${loc.color}`} style={{ fontSize: '0.5rem', letterSpacing: '0.12em', marginBottom: 16 }}>
          🕐 HOURS
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {loc.hours.map(({ days, hours }) => (
            <div key={days} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 8, flexWrap: 'wrap', gap: 4 }}>
              <span style={{ color: '#999', fontSize: '0.78rem' }}>{days}</span>
              <span className={loc.color} style={{ fontSize: '0.78rem', fontWeight: 700 }}>{hours}</span>
            </div>
          ))}
        </div>
        <p style={{ color: '#555', fontSize: '0.72rem', marginTop: 14 }}>Hours may vary on holidays — call ahead to confirm.</p>
      </div>
    </motion.div>
  )
}

export default function Location() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="neon-blue font-pixel" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', marginBottom: 12 }}>
          ── TWO LOCATIONS ──
        </p>
        <h1 className="neon-green" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, letterSpacing: '0.06em', marginBottom: 12 }}>
          FIND US
        </h1>
        <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: 48 }}>
          Serving the greater Houston area — Spring / The Woodlands and the NASA / Webster area.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28, marginBottom: 40 }}>
        {LOCATIONS.map((loc, i) => (
          <LocationCard key={loc.name} loc={loc} delay={0.1 + i * 0.15} />
        ))}
      </div>

      {/* Contact */}
      <motion.div
        className="comic-card border-neon-blue"
        style={{ padding: '24px 28px', display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap', marginBottom: 24 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span style={{ fontSize: '2rem' }}>📧</span>
        <div style={{ flex: 1 }}>
          <p className="neon-blue font-pixel" style={{ fontSize: '0.55rem', marginBottom: 8, letterSpacing: '0.1em' }}>GENERAL INQUIRIES</p>
          <p style={{ color: '#999', fontSize: '0.85rem' }}>info@gamepreservehouston.com</p>
        </div>
      </motion.div>

      {/* Parking note */}
      <motion.div
        className="comic-card border-neon-red"
        style={{ padding: '20px 24px', display: 'flex', gap: 16, alignItems: 'center' }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span style={{ fontSize: '1.8rem' }}>🚗</span>
        <div>
          <p className="neon-red font-pixel" style={{ fontSize: '0.55rem', marginBottom: 6 }}>PARKING</p>
          <p style={{ color: '#999', fontSize: '0.8rem', lineHeight: 1.6 }}>
            Both locations offer free on-site parking. Walk-ins welcome — day passes sold at the door.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
