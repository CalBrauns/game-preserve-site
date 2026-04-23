import { motion } from 'framer-motion'

const HOURS = [
  { days: 'Monday – Friday', hours: '7:00 AM – 9:00 PM' },
  { days: 'Saturday',        hours: '8:00 AM – 10:00 PM' },
  { days: 'Sunday',          hours: '9:00 AM – 8:00 PM' },
]

function InfoCard({ title, children, neonClass, borderClass, delay = 0 }) {
  return (
    <motion.div
      className={`comic-card ${borderClass}`}
      style={{ padding: '28px 24px' }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <h2 className={`font-pixel ${neonClass}`} style={{ fontSize: '0.6rem', letterSpacing: '0.12em', marginBottom: 20 }}>
        {title}
      </h2>
      {children}
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
          ── COORDINATES CONFIRMED ──
        </p>
        <h1 className="neon-green" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, letterSpacing: '0.06em', marginBottom: 48 }}>
          FIND US
        </h1>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 40 }}>
        <InfoCard title="📍 ADDRESS" neonClass="neon-green" borderClass="border-neon-green" delay={0.1}>
          <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: 2 }}>
            42 Nebula Avenue, Unit 7<br />
            Houston, TX 77001<br />
            <span style={{ color: '#666', fontSize: '0.78rem' }}>Near the corner of Stardust Blvd & Galactic Dr</span>
          </p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-neon-green" style={{ marginTop: 20, display: 'inline-block' }}>
            OPEN IN MAPS
          </a>
        </InfoCard>

        <InfoCard title="🕐 HOURS" neonClass="neon-purple" borderClass="border-neon-purple" delay={0.2}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {HOURS.map(({ days, hours }) => (
              <div key={days} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 10 }}>
                <span style={{ color: '#999', fontSize: '0.8rem' }}>{days}</span>
                <span className="neon-purple" style={{ fontSize: '0.8rem', fontWeight: 700 }}>{hours}</span>
              </div>
            ))}
          </div>
          <p style={{ color: '#666', fontSize: '0.72rem', marginTop: 16 }}>🛸 Last order 30 minutes before close</p>
        </InfoCard>

        <InfoCard title="📡 CONTACT" neonClass="neon-blue" borderClass="border-neon-blue" delay={0.3}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              ['📞 Phone',     '(713) 555-0042'],
              ['📧 Email',     'hello@cosmicbean.coffee'],
              ['📸 Instagram', '@cosmicbeancoffee'],
              ['🐦 Twitter/X', '@cosmicbeancafe'],
            ].map(([label, value]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 10 }}>
                <span style={{ color: '#999', fontSize: '0.8rem' }}>{label}</span>
                <span style={{ color: '#ccc', fontSize: '0.8rem' }}>{value}</span>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>

      {/* Map placeholder */}
      <motion.div
        className="comic-card border-neon-green"
        style={{ height: 360, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, background: 'linear-gradient(135deg, #0d0d1f 0%, #0a0a1a 100%)' }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.span
          style={{ fontSize: '4rem' }}
          animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          🛸
        </motion.span>
        <p className="neon-green font-pixel" style={{ fontSize: '0.55rem', letterSpacing: '0.15em' }}>
          INTERACTIVE MAP INCOMING
        </p>
        <p style={{ color: '#666', fontSize: '0.75rem' }}>Drop a Google Maps embed here</p>
      </motion.div>

      {/* Parking */}
      <motion.div
        className="comic-card border-neon-red"
        style={{ padding: '20px 24px', marginTop: 24, display: 'flex', gap: 16, alignItems: 'center' }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span style={{ fontSize: '1.8rem' }}>🚗</span>
        <div>
          <p className="neon-red font-pixel" style={{ fontSize: '0.55rem', marginBottom: 6 }}>PARKING INFO</p>
          <p style={{ color: '#999', fontSize: '0.8rem', lineHeight: 1.6 }}>
            Free parking in the Nebula Plaza lot behind the building. Street parking available on Stardust Blvd. We also have a UFO pad — just kidding, please use the lot.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
