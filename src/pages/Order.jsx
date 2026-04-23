import { useState } from 'react'
import { Link } from 'react-router-dom'

const QUICK_ITEMS = [
  { name: 'Alien Green Latte', price: '$6.50', icon: '🍵' },
  { name: 'Mars Attack Espresso', price: '$5.00', icon: '☕' },
  { name: 'Cosmic Freeze', price: '$7.00', icon: '🥤' },
  { name: 'Matcha Boba Galaxy', price: '$7.50', icon: '🍡' },
  { name: 'Alien Affogato', price: '$8.00', icon: '👽' },
  { name: 'Ack Ack Combo', price: '$11.00', icon: '🎭' },
]

export default function Order() {
  const [submitted, setSubmitted] = useState(false)
  const [cart, setCart] = useState([])
  const [form, setForm] = useState({ name: '', notes: '', pickup: '15' })

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(c => c.name === item.name)
      if (existing) return prev.map(c => c.name === item.name ? { ...c, qty: c.qty + 1 } : c)
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const removeFromCart = (name) => setCart(prev => prev.filter(c => c.name !== name))

  const total = cart.reduce((sum, item) => {
    return sum + parseFloat(item.price.replace('$', '')) * item.qty
  }, 0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cart.length === 0) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: 24 }}>👽</div>
        <h2 className="neon-green" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '2rem', fontWeight: 900, marginBottom: 16 }}>
          ORDER RECEIVED
        </h2>
        <p className="font-pixel neon-purple" style={{ fontSize: '0.55rem', letterSpacing: '0.12em', marginBottom: 16 }}>
          TRANSMISSION CONFIRMED
        </p>
        <p style={{ color: '#999', fontSize: '0.85rem', lineHeight: 1.8, marginBottom: 32 }}>
          The Martian kitchen crew has received your order, {form.name}.<br />
          Your drinks will be ready in approximately {form.pickup} minutes.<br />
          Ack ack ack — that means thank you!
        </p>
        <button className="btn-neon-green" onClick={() => { setSubmitted(false); setCart([]); }}>
          NEW ORDER
        </button>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
      <p className="neon-red font-pixel" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', marginBottom: 12 }}>
        ── BEAM YOUR ORDER TO THE KITCHEN ──
      </p>
      <h1
        className="neon-green"
        style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, letterSpacing: '0.06em', marginBottom: 48 }}
      >
        ORDER
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }}>

        {/* Quick picks */}
        <div>
          <p className="neon-purple font-pixel" style={{ fontSize: '0.55rem', letterSpacing: '0.12em', marginBottom: 20 }}>
            QUICK PICKS
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            {QUICK_ITEMS.map(item => (
              <button
                key={item.name}
                onClick={() => addToCart(item)}
                className="comic-card border-neon-green"
                style={{
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  background: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(57,255,20,0.08)'}
                onMouseLeave={e => e.currentTarget.style.background = 'none'}
              >
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <div>
                  <p style={{ color: '#ccc', fontSize: '0.75rem', marginBottom: 2 }}>{item.name}</p>
                  <p className="neon-green" style={{ fontSize: '0.8rem', fontWeight: 700 }}>{item.price}</p>
                </div>
              </button>
            ))}
          </div>
          <p style={{ marginTop: 12, color: '#666', fontSize: '0.75rem' }}>
            Want the full menu?{' '}
            <Link to="/menu" style={{ color: '#bf00ff' }}>Browse all items →</Link>
          </p>
        </div>

        {/* Cart + form */}
        <div className="comic-card border-neon-purple" style={{ padding: '28px' }}>
          <p className="neon-purple font-pixel" style={{ fontSize: '0.55rem', letterSpacing: '0.12em', marginBottom: 20 }}>
            YOUR CART
          </p>

          {cart.length === 0 ? (
            <p style={{ color: '#555', fontSize: '0.8rem', marginBottom: 24 }}>No items yet — add something above 👆</p>
          ) : (
            <div style={{ marginBottom: 24 }}>
              {cart.map(item => (
                <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: '#ccc', fontSize: '0.8rem' }}>
                    {item.icon} {item.name} × {item.qty}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span className="neon-green" style={{ fontSize: '0.8rem' }}>
                      ${(parseFloat(item.price.replace('$', '')) * item.qty).toFixed(2)}
                    </span>
                    <button onClick={() => removeFromCart(item.name)} style={{ background: 'none', border: 'none', color: '#ff0033', cursor: 'pointer', fontSize: '0.9rem' }}>✕</button>
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12 }}>
                <span className="font-pixel" style={{ fontSize: '0.55rem', color: '#888' }}>TOTAL</span>
                <span className="neon-green font-pixel" style={{ fontSize: '0.65rem' }}>${total.toFixed(2)}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label className="font-pixel" style={{ fontSize: '0.5rem', color: '#888', display: 'block', marginBottom: 8, letterSpacing: '0.1em' }}>
                YOUR NAME
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Commander ..."
                style={{
                  width: '100%',
                  background: '#0a0a1a',
                  border: '1px solid #39ff14',
                  color: '#e0e0e0',
                  padding: '10px 14px',
                  fontSize: '0.85rem',
                  outline: 'none',
                  fontFamily: 'Orbitron, sans-serif',
                  boxShadow: '0 0 6px rgba(57,255,20,0.2)',
                }}
              />
            </div>

            <div>
              <label className="font-pixel" style={{ fontSize: '0.5rem', color: '#888', display: 'block', marginBottom: 8, letterSpacing: '0.1em' }}>
                PICKUP TIME
              </label>
              <select
                value={form.pickup}
                onChange={e => setForm(f => ({ ...f, pickup: e.target.value }))}
                style={{
                  background: '#0a0a1a',
                  border: '1px solid #39ff14',
                  color: '#e0e0e0',
                  padding: '10px 14px',
                  fontSize: '0.85rem',
                  outline: 'none',
                  fontFamily: 'Orbitron, sans-serif',
                  cursor: 'pointer',
                  minWidth: 180,
                }}
              >
                <option value="10">~10 minutes</option>
                <option value="15">~15 minutes</option>
                <option value="20">~20 minutes</option>
                <option value="30">~30 minutes</option>
              </select>
            </div>

            <div>
              <label className="font-pixel" style={{ fontSize: '0.5rem', color: '#888', display: 'block', marginBottom: 8, letterSpacing: '0.1em' }}>
                SPECIAL INSTRUCTIONS (OPTIONAL)
              </label>
              <textarea
                value={form.notes}
                onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                rows={3}
                placeholder="Oat milk, extra hot, beam directly to table 7..."
                style={{
                  width: '100%',
                  background: '#0a0a1a',
                  border: '1px solid rgba(57,255,20,0.4)',
                  color: '#e0e0e0',
                  padding: '10px 14px',
                  fontSize: '0.85rem',
                  outline: 'none',
                  fontFamily: 'Orbitron, sans-serif',
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              type="submit"
              className="btn-neon-green"
              style={{ alignSelf: 'flex-start', opacity: cart.length === 0 ? 0.4 : 1 }}
              disabled={cart.length === 0}
            >
              BEAM ORDER 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
