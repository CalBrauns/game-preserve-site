import { motion } from 'framer-motion'

const GALLERY_ITEMS = [
  { id: 1,  label: 'The Main Floor',         emoji: '🎮', color: '#39ff14',  desc: 'Arcade machines lined wall to wall' },
  { id: 2,  label: 'Nebula Mocha Bar',        emoji: '☕', color: '#bf00ff',  desc: 'Our signature purple espresso station' },
  { id: 3,  label: 'Mars Attacks Wall',       emoji: '👽', color: '#ff0033',  desc: 'Giant mural of the Martian ambassador' },
  { id: 4,  label: 'Japanese Snack Display',  emoji: '🍡', color: '#39ff14',  desc: 'Rows of imported treats from Japan' },
  { id: 5,  label: 'Neon Sign Row',           emoji: '✨', color: '#00bfff',  desc: 'Custom neon art from local makers' },
  { id: 6,  label: 'Comic Wall',              emoji: '📚', color: '#bf00ff',  desc: 'Floor-to-ceiling vintage comics' },
  { id: 7,  label: 'Matcha Boba Station',     emoji: '🥤', color: '#39ff14',  desc: 'Watch your drink get made' },
  { id: 8,  label: 'Retro Star Wars Corner',  emoji: '🚀', color: '#ff0033',  desc: 'Original trilogy posters and figures' },
  { id: 9,  label: 'Alien Aquarium',          emoji: '🐟', color: '#00bfff',  desc: 'Glowing jellyfish tank ambiance' },
  { id: 10, label: 'Outdoor Patio',           emoji: '🌌', color: '#bf00ff',  desc: 'Stargazing tables under the sky' },
  { id: 11, label: 'Arcade Token Wall',       emoji: '🎰', color: '#ff0033',  desc: 'Vintage tokens from closed arcades' },
  { id: 12, label: 'The Cosmic Bean Logo',    emoji: '👾', color: '#39ff14',  desc: 'Our hand-painted entrance sign' },
]

export default function Gallery() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="neon-red font-pixel" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', marginBottom: 12 }}>
          ── VISUAL TRANSMISSIONS ──
        </p>
        <h1 className="neon-green" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, letterSpacing: '0.06em', marginBottom: 16 }}>
          GALLERY
        </h1>
        <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: 48 }}>
          A peek inside Cosmic Bean. Photos by our regulars and the Martian crew.
        </p>
      </motion.div>

      <motion.div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
      >
        {GALLERY_ITEMS.map((item, i) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              show:   { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: `0 0 28px ${item.color}`,
              transition: { duration: 0.2 },
            }}
            className="comic-card"
            style={{
              borderColor: item.color,
              boxShadow: `0 0 8px ${item.color}, inset 0 0 8px ${item.color}18`,
              aspectRatio: i % 5 === 0 ? '16/9' : '4/3',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              padding: 24,
              background: `linear-gradient(135deg, #0d0d1f 0%, ${item.color}08 100%)`,
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.span
              style={{ fontSize: '3.5rem' }}
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: Math.random() * 3 + 1 }}
            >
              {item.emoji}
            </motion.span>
            <p className="font-pixel" style={{ color: item.color, fontSize: '0.5rem', letterSpacing: '0.1em', textAlign: 'center', textShadow: `0 0 6px ${item.color}` }}>
              {item.label}
            </p>
            <p style={{ color: '#666', fontSize: '0.7rem', textAlign: 'center' }}>{item.desc}</p>
            <span className="font-pixel" style={{ position: 'absolute', top: 8, right: 8, fontSize: '0.4rem', color: item.color, opacity: 0.6 }}>
              #{String(item.id).padStart(2, '0')}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="font-pixel"
        style={{ fontSize: '0.45rem', color: '#555', marginTop: 48, letterSpacing: '0.1em', textAlign: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        ★ TAG US @COSMICBEANCOFFEE TO GET FEATURED ★
      </motion.p>
    </div>
  )
}
