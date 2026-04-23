import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TIERS = [
  {
    icon: '🎮',
    title: 'DAY PASS',
    price: '$15',
    unit: 'per person',
    color: 'neon-green',
    border: 'border-neon-green',
    hex: '#1a5fff',
    features: [
      'Unlimited play all day',
      'All 125+ machines included',
      'No quarters needed',
      'Re-entry same day',
    ],
    cta: 'BUY AT DOOR',
    highlight: false,
  },
  {
    icon: '👥',
    title: 'GROUP RATE',
    price: '$10',
    unit: 'per person (15+)',
    color: 'neon-blue',
    border: 'border-neon-blue',
    hex: '#00d4ff',
    features: [
      'Groups of 15 or more',
      'Same unlimited access',
      'Great for field trips & outings',
      'Call ahead to reserve',
    ],
    cta: 'CALL TO BOOK',
    highlight: false,
  },
  {
    icon: '⭐',
    title: 'INDIVIDUAL MEMBERSHIP',
    price: '$30',
    unit: 'per month',
    color: 'neon-red',
    border: 'border-neon-red',
    hex: '#ff1a1a',
    features: [
      'Unlimited visits all month',
      'Skip the line entry',
      '1 guest pass per month',
      'Member events & discounts',
    ],
    cta: 'JOIN NOW',
    highlight: true,
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'FAMILY MEMBERSHIP',
    price: '$60',
    unit: 'per month',
    color: 'neon-purple',
    border: 'border-neon-purple',
    hex: '#c8c8d8',
    features: [
      'Up to 4 family members',
      'Unlimited visits all month',
      '2 guest passes per month',
      'Priority party booking',
    ],
    cta: 'JOIN NOW',
    highlight: false,
  },
  {
    icon: '🎉',
    title: 'PRIVATE PARTY ROOM',
    price: '$250',
    unit: 'for 2 hours',
    color: 'neon-red',
    border: 'border-neon-red',
    hex: '#ff1a1a',
    features: [
      '10 guests included',
      'Private room + full arcade access',
      'Perfect for birthdays & events',
      'Add-ons available',
    ],
    cta: 'BOOK A PARTY',
    highlight: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Order() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="neon-red font-pixel" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', marginBottom: 12 }}>
          ── INSERT COIN TO CONTINUE ──
        </p>
        <h1
          className="neon-green"
          style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, letterSpacing: '0.06em', marginBottom: 16 }}
        >
          PRICING
        </h1>
        <p style={{ color: '#777', fontSize: '0.85rem', marginBottom: 52, maxWidth: 500 }}>
          One flat fee. Every machine on free play. No quarters, no tokens — just pure arcade action all day long.
        </p>
      </motion.div>

      <motion.div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 24 }}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {TIERS.map(tier => (
          <motion.div
            key={tier.title}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className={`comic-card ${tier.border}`}
            style={{
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              position: 'relative',
              background: tier.highlight
                ? `linear-gradient(145deg, rgba(255,26,26,0.08) 0%, rgba(8,2,30,0.9) 100%)`
                : 'rgba(8,2,30,0.82)',
            }}
          >
            {tier.highlight && (
              <span
                className="font-pixel"
                style={{
                  position: 'absolute',
                  top: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#ff1a1a',
                  color: '#fff',
                  fontSize: '0.38rem',
                  letterSpacing: '0.12em',
                  padding: '4px 12px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 0 14px #ff1a1a',
                }}
              >
                MOST POPULAR
              </span>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: '2rem' }}>{tier.icon}</span>
              <p className={`font-pixel ${tier.color}`} style={{ fontSize: '0.5rem', letterSpacing: '0.1em', lineHeight: 1.6 }}>
                {tier.title}
              </p>
            </div>

            <div>
              <span
                className={tier.color}
                style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '2.4rem', fontWeight: 900 }}
              >
                {tier.price}
              </span>
              <span style={{ color: '#666', fontSize: '0.78rem', marginLeft: 8 }}>{tier.unit}</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
              {tier.features.map(f => (
                <li key={f} style={{ color: '#bbb', fontSize: '0.8rem', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: tier.hex, flexShrink: 0 }}>▸</span>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              to="/location"
              className={`btn-${tier.color.replace('neon-', 'neon-')}`}
              style={{
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none',
                border: `2px solid ${tier.hex}`,
                color: tier.hex,
                background: 'transparent',
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '0.5rem',
                letterSpacing: '0.1em',
                padding: '0.75rem 1rem',
                cursor: 'pointer',
                boxShadow: `0 0 8px ${tier.hex}`,
                transition: 'background 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${tier.hex}22`
                e.currentTarget.style.boxShadow = `0 0 18px ${tier.hex}`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.boxShadow = `0 0 8px ${tier.hex}`
              }}
            >
              {tier.cta}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="comic-card border-neon-blue"
        style={{ padding: '24px 28px', marginTop: 48, display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <span style={{ fontSize: '2rem' }}>📞</span>
        <div style={{ flex: 1 }}>
          <p className="neon-blue font-pixel" style={{ fontSize: '0.55rem', marginBottom: 8, letterSpacing: '0.1em' }}>QUESTIONS ABOUT PRICING?</p>
          <p style={{ color: '#999', fontSize: '0.8rem', lineHeight: 1.7 }}>
            Group bookings, party packages, and membership sign-ups can be arranged by calling your nearest location.
            Walk-ins welcome — day passes sold at the door.
          </p>
        </div>
        <Link to="/location" className="btn-neon-blue" style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}>
          FIND LOCATION
        </Link>
      </motion.div>

      <motion.p
        className="font-pixel"
        style={{ fontSize: '0.45rem', color: '#555', marginTop: 48, letterSpacing: '0.1em', textAlign: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        ★ ALL MACHINES SET TO FREE PLAY — NO QUARTERS NEEDED ★
      </motion.p>
    </div>
  )
}
