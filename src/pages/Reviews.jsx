import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const REVIEWS = [
  { id: 1, name: 'Zara K.',       avatar: '👩‍🚀', stars: 5, date: 'April 2025',    text: 'The Alien Green Latte literally changed my life. The matcha is so smooth and the foam art was a tiny UFO. I come here every morning before work now.',                                                                               tag: 'HOT DRINKS',      color: '#39ff14' },
  { id: 2, name: 'Aku from Mars', avatar: '👽',   stars: 5, date: 'March 2025',    text: 'ACK ACK ACK. Translation: best coffee on this planet or any other. The Mars Attack Espresso is named after me and it shows. Ack.',                                                                                                     tag: 'COSMIC SPECIALS', color: '#ff0033' },
  { id: 3, name: 'Trevor M.',     avatar: '🧑‍💻', stars: 5, date: 'April 2025',    text: 'Spent four hours here playing Galaga and drinking cold brew. Nobody bothered me. Perfect vibes, neon lights everywhere, absolutely my new office.',                                                                                    tag: 'ARCADE',          color: '#bf00ff' },
  { id: 4, name: 'Yuki T.',       avatar: '👩',   stars: 5, date: 'February 2025', text: 'The Japanese snack selection is unreal. I found Melon Pan and Dorayaki in the same place in Houston. The Matcha Boba is as good as anything in Tokyo.',                                                                                tag: 'JAPANESE SNACKS', color: '#00bfff' },
  { id: 5, name: 'Marcus D.',     avatar: '🧔',   stars: 4, date: 'April 2025',    text: "The Kessel Run cold brew is dangerously strong. I ran a 5k after drinking one. Four stars only because I now can't stop coming back and my wallet is hurting.",                                                                        tag: 'COLD DRINKS',     color: '#39ff14' },
  { id: 6, name: 'Priya S.',      avatar: '👩‍🎨', stars: 5, date: 'March 2025',    text: "The comic wall alone is worth the trip. Whoever designed this place is a genius. The Alien Affogato — espresso poured over mochi — is the best dessert drink I've ever had.",                                                         tag: 'COSMIC SPECIALS', color: '#bf00ff' },
  { id: 7, name: 'Dad (Bert)',    avatar: '👴',   stars: 5, date: 'January 2025',  text: "My granddaughter brought me here. I don't understand half the decorations but the coffee is the best I've had in 40 years. Also there was a very friendly green alien painted on the wall.",                                          tag: 'ATMOSPHERE',      color: '#ff0033' },
  { id: 8, name: 'Space_Cadet99', avatar: '🧑‍🚀', stars: 5, date: 'April 2025',    text: 'The UFO Blue Lemonade changes color when you add ice. I showed everyone at the table and we all got one. Cannot overstate how fun this place is.',                                                                                     tag: 'COLD DRINKS',     color: '#00bfff' },
]

function Stars({ count }) {
  return (
    <span>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < count ? '#ffcc00' : '#333', fontSize: '0.9rem' }}>★</span>
      ))}
    </span>
  )
}

function ReviewCard({ review }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.97 },
        show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="comic-card"
      style={{
        borderColor: review.color,
        boxShadow: `0 0 8px ${review.color}60, inset 0 0 8px ${review.color}10`,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: '1.8rem' }}>{review.avatar}</span>
          <div>
            <p style={{ color: '#e0e0e0', fontWeight: 700, fontSize: '0.85rem' }}>{review.name}</p>
            <p style={{ color: '#666', fontSize: '0.7rem' }}>{review.date}</p>
          </div>
        </div>
        <span className="font-pixel" style={{ fontSize: '0.4rem', padding: '4px 8px', border: `1px solid ${review.color}`, color: review.color }}>
          {review.tag}
        </span>
      </div>
      <Stars count={review.stars} />
      <p style={{ color: '#bbb', fontSize: '0.82rem', lineHeight: 1.7, fontStyle: 'italic' }}>"{review.text}"</p>
    </motion.div>
  )
}

export default function Reviews() {
  const [form, setForm] = useState({ name: '', text: '', stars: 5 })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const avgRating = (REVIEWS.reduce((s, r) => s + r.stars, 0) / REVIEWS.length).toFixed(1)

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="neon-blue font-pixel" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', marginBottom: 12 }}>
          ── SIGNALS FROM ACROSS THE GALAXY ──
        </p>
        <h1 className="neon-green" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, letterSpacing: '0.06em', marginBottom: 24 }}>
          REVIEWS
        </h1>
      </motion.div>

      {/* Rating summary */}
      <motion.div
        className="comic-card border-neon-green"
        style={{ padding: '24px 28px', display: 'inline-flex', alignItems: 'center', gap: 20, marginBottom: 48 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div style={{ textAlign: 'center' }}>
          <p className="neon-green" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}>
            {avgRating}
          </p>
          <Stars count={5} />
        </div>
        <div>
          <p style={{ color: '#ccc', fontSize: '0.85rem', marginBottom: 4 }}>{REVIEWS.length} reviews from verified earthlings</p>
          <p className="font-pixel" style={{ fontSize: '0.45rem', color: '#666', letterSpacing: '0.1em' }}>AND AT LEAST ONE MARTIAN</p>
        </div>
      </motion.div>

      {/* Reviews grid */}
      <motion.div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20, marginBottom: 64 }}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
      >
        {REVIEWS.map(r => <ReviewCard key={r.id} review={r} />)}
      </motion.div>

      <hr className="section-divider" style={{ marginBottom: 48 }} />

      {/* Leave a review */}
      <motion.div
        className="comic-card border-neon-purple"
        style={{ padding: '32px', maxWidth: 600 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="neon-purple font-pixel" style={{ fontSize: '0.6rem', letterSpacing: '0.12em', marginBottom: 24 }}>
          LEAVE A TRANSMISSION
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ textAlign: 'center', padding: '20px 0' }}
            >
              <span style={{ fontSize: '3rem' }}>📡</span>
              <p className="neon-green font-pixel" style={{ fontSize: '0.55rem', marginTop: 16 }}>REVIEW RECEIVED!</p>
              <p style={{ color: '#888', fontSize: '0.8rem', marginTop: 8 }}>Thanks for transmitting your thoughts, {form.name}.</p>
              <button className="btn-neon-purple" style={{ marginTop: 20 }} onClick={() => setSubmitted(false)}>
                WRITE ANOTHER
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              <div>
                <label className="font-pixel" style={{ fontSize: '0.48rem', color: '#888', display: 'block', marginBottom: 8, letterSpacing: '0.1em' }}>YOUR NAME</label>
                <input type="text" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Explorer ..."
                  style={{ width: '100%', background: '#0a0a1a', border: '1px solid #bf00ff', color: '#e0e0e0', padding: '10px 14px', fontSize: '0.85rem', outline: 'none', fontFamily: 'Orbitron, sans-serif', boxShadow: '0 0 6px rgba(191,0,255,0.2)' }}
                />
              </div>

              <div>
                <label className="font-pixel" style={{ fontSize: '0.48rem', color: '#888', display: 'block', marginBottom: 10, letterSpacing: '0.1em' }}>RATING</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[1, 2, 3, 4, 5].map(n => (
                    <motion.button key={n} type="button" whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}
                      onClick={() => setForm(f => ({ ...f, stars: n }))}
                      style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: n <= form.stars ? '#ffcc00' : '#333', transition: 'color 0.15s' }}
                    >★</motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-pixel" style={{ fontSize: '0.48rem', color: '#888', display: 'block', marginBottom: 8, letterSpacing: '0.1em' }}>YOUR REVIEW</label>
                <textarea required value={form.text} onChange={e => setForm(f => ({ ...f, text: e.target.value }))} rows={4} placeholder="Tell the galaxy what you thought..."
                  style={{ width: '100%', background: '#0a0a1a', border: '1px solid rgba(191,0,255,0.4)', color: '#e0e0e0', padding: '10px 14px', fontSize: '0.85rem', outline: 'none', fontFamily: 'Orbitron, sans-serif', resize: 'vertical' }}
                />
              </div>

              <motion.button type="submit" className="btn-neon-purple" style={{ alignSelf: 'flex-start' }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                TRANSMIT REVIEW 📡
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
