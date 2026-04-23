import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CATEGORIES = ['ALL', 'HOT DRINKS', 'COLD DRINKS', 'JAPANESE SNACKS', 'COSMIC SPECIALS']

const ITEMS = [
  { category: 'HOT DRINKS',      name: 'Alien Green Latte',      desc: 'Ceremonial matcha with oat milk foam art. Straight from the rice fields of Sector 9.',                          price: '$6.50',  icon: '🍵', color: 'neon-green' },
  { category: 'HOT DRINKS',      name: 'Mars Attack Espresso',   desc: 'Triple shot red-eye with a blood-orange twist. Ack ack ack.',                                                   price: '$5.00',  icon: '☕', color: 'neon-red' },
  { category: 'HOT DRINKS',      name: 'Nebula Mocha',           desc: 'Dark chocolate espresso with purple galaxy foam. Made with butterfly pea powder.',                              price: '$6.75',  icon: '🌌', color: 'neon-purple' },
  { category: 'HOT DRINKS',      name: 'Galactic Chai',          desc: 'Spiced masala chai brewed with cardamom, star anise, and interstellar spices.',                                price: '$5.50',  icon: '✨', color: 'neon-blue' },
  { category: 'HOT DRINKS',      name: 'Stardust Americano',     desc: 'Double espresso over hot water. Classic. Powerful. Like the force.',                                            price: '$4.50',  icon: '⚡', color: 'neon-green' },
  { category: 'HOT DRINKS',      name: 'Comet Tail Cortado',     desc: 'Equal parts espresso and steamed milk. A smooth streak across your morning.',                                  price: '$5.25',  icon: '☄️', color: 'neon-red' },
  { category: 'COLD DRINKS',     name: 'Cosmic Freeze',          desc: 'Iced espresso with galaxy swirl syrup and oat milk. Blue and green layers.',                                   price: '$7.00',  icon: '🥤', color: 'neon-blue' },
  { category: 'COLD DRINKS',     name: 'UFO Blue Lemonade',      desc: 'Electric blue butterfly pea lemonade with lavender syrup and a color-changing trick.',                         price: '$5.75',  icon: '🛸', color: 'neon-blue' },
  { category: 'COLD DRINKS',     name: 'Zero Gravity Cold Brew', desc: 'Slow-dripped 24-hour cold brew. Smooth, dark, weightless on your tongue.',                                    price: '$6.00',  icon: '🌑', color: 'neon-green' },
  { category: 'COLD DRINKS',     name: 'Matcha Boba Galaxy',     desc: 'Iced matcha with tapioca pearls, honey, and oat milk. Japanese meets outer space.',                           price: '$7.50',  icon: '🍡', color: 'neon-green' },
  { category: 'COLD DRINKS',     name: 'Ramune Float',           desc: 'Original ramune soda topped with vanilla soft serve and a cherry.',                                            price: '$6.25',  icon: '🥛', color: 'neon-purple' },
  { category: 'COLD DRINKS',     name: 'Red Planet Hibiscus',    desc: 'Tart hibiscus iced tea with honey, chili rim, and a lemon wheel.',                                             price: '$5.50',  icon: '🌺', color: 'neon-red' },
  { category: 'JAPANESE SNACKS', name: 'Pocky Pack',             desc: 'Chocolate or strawberry. The snack that transcends all galaxies.',                                             price: '$3.50',  icon: '🍫', color: 'neon-purple' },
  { category: 'JAPANESE SNACKS', name: 'Mochi Ice Cream',        desc: 'Strawberry, matcha, or mango. Pick your planet.',                                                              price: '$4.00',  icon: '🍡', color: 'neon-green' },
  { category: 'JAPANESE SNACKS', name: 'Taiyaki Waffle',         desc: 'Fish-shaped waffle filled with red bean paste or vanilla custard. Served warm.',                              price: '$5.00',  icon: '🐟', color: 'neon-red' },
  { category: 'JAPANESE SNACKS', name: 'Hi-Chew Assorted',       desc: 'A mystery bag of Hi-Chew flavors. Grape, strawberry, mango, and secret flavors.',                            price: '$2.50',  icon: '🍬', color: 'neon-blue' },
  { category: 'JAPANESE SNACKS', name: 'Melon Pan',              desc: 'Soft Japanese melon bread with a crisp cookie crust. Baked fresh daily.',                                     price: '$4.25',  icon: '🍞', color: 'neon-green' },
  { category: 'JAPANESE SNACKS', name: 'Dorayaki',               desc: 'Two fluffy pancakes sandwiching sweet red bean paste. Doraemon approved.',                                    price: '$4.50',  icon: '🥞', color: 'neon-purple' },
  { category: 'COSMIC SPECIALS', name: 'Alien Affogato',         desc: 'A shot of espresso poured over matcha mochi ice cream. Hot meets cold from two worlds.',                     price: '$8.00',  icon: '👽', color: 'neon-green' },
  { category: 'COSMIC SPECIALS', name: 'Martian Bowl',           desc: 'Acai base with matcha granola, mochi bites, and fresh fruit. A balanced orbit.',                             price: '$9.50',  icon: '🌿', color: 'neon-red' },
  { category: 'COSMIC SPECIALS', name: 'The Kessel Run',         desc: "Our fastest drink — cold brew + espresso shot + caramel. Made in 12 parsecs.",                               price: '$8.50',  icon: '🚀', color: 'neon-blue' },
  { category: 'COSMIC SPECIALS', name: 'Ack Ack Combo',          desc: "Any drink + any Japanese snack. Named after the Martian ambassador's favorite order.",                        price: '$11.00', icon: '🎭', color: 'neon-purple' },
]

const borderMap = { 'neon-green': 'border-neon-green', 'neon-purple': 'border-neon-purple', 'neon-red': 'border-neon-red', 'neon-blue': 'border-neon-blue' }

function MenuItem({ item }) {
  return (
    <motion.div
      layout
      variants={{
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        show:   { opacity: 1, scale: 1,   y: 0,  transition: { duration: 0.35, ease: 'easeOut' } },
        exit:   { opacity: 0, scale: 0.9, y: -10, transition: { duration: 0.2 } },
      }}
      className={`comic-card ${borderMap[item.color]}`}
      style={{ padding: '20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}
    >
      <span style={{ fontSize: '2rem', flexShrink: 0 }}>{item.icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6, gap: 8 }}>
          <h3 className={`font-pixel ${item.color}`} style={{ fontSize: '0.55rem', letterSpacing: '0.08em', lineHeight: 1.5 }}>
            {item.name}
          </h3>
          <span className={`font-pixel ${item.color}`} style={{ fontSize: '0.6rem', whiteSpace: 'nowrap' }}>
            {item.price}
          </span>
        </div>
        <p style={{ color: '#888', fontSize: '0.78rem', lineHeight: 1.6 }}>{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Menu() {
  const [active, setActive] = useState('ALL')
  const filtered = active === 'ALL' ? ITEMS : ITEMS.filter(i => i.category === active)

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="neon-purple font-pixel" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', marginBottom: 12 }}>
          ── TRANSMISSIONS FROM THE KITCHEN ──
        </p>
        <h1 className="neon-green" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, letterSpacing: '0.06em', marginBottom: 48 }}>
          THE MENU
        </h1>
      </motion.div>

      {/* Category tabs */}
      <motion.div
        style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
      >
        {CATEGORIES.map(cat => (
          <motion.button
            key={cat}
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActive(cat)}
            className="font-pixel"
            style={{
              padding: '8px 14px',
              fontSize: '0.5rem',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              border: '2px solid',
              background: active === cat ? 'rgba(57,255,20,0.15)' : 'transparent',
              borderColor: active === cat ? '#39ff14' : '#444',
              color: active === cat ? '#39ff14' : '#888',
              boxShadow: active === cat ? '0 0 8px #39ff14' : 'none',
              transition: 'all 0.2s',
            }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Items — AnimatePresence swaps the grid when category changes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}
        >
          {filtered.map(item => <MenuItem key={item.name} item={item} />)}
        </motion.div>
      </AnimatePresence>

      <motion.p
        className="font-pixel"
        style={{ fontSize: '0.45rem', color: '#555', marginTop: 48, letterSpacing: '0.1em', textAlign: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        ★ SEASONAL SPECIALS ROTATE WEEKLY · ASK YOUR SERVER FOR TODAY'S TRANSMISSIONS ★
      </motion.p>
    </div>
  )
}
