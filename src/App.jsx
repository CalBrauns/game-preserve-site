import { Routes, Route } from 'react-router-dom'
import { useMemo } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Location from './pages/Location'
import Order from './pages/Order'
import Gallery from './pages/Gallery'
import Reviews from './pages/Reviews'

function StarField() {
  const stars = useMemo(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 0.5,
      duration: `${Math.random() * 4 + 2}s`,
      delay: `${Math.random() * 4}s`,
    })), [])

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {stars.map(s => (
        <span key={s.id} className="star" style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDuration: s.duration, animationDelay: s.delay }} />
      ))}
    </div>
  )
}

function ShootingStars() {
  const stars = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      top:      `${-15 + Math.random() * 10}%`,
      left:     `${-20 + Math.random() * 90}%`,
      width:    `${80 + Math.floor(Math.random() * 100)}px`,
      duration: `${(28 + Math.random() * 28).toFixed(1)}s`,
      delay:    `${-(Math.random() * 40).toFixed(1)}s`,
    })), [])

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {stars.map(s => (
        <div key={s.id} className="shooting-star" style={{ top: s.top, left: s.left, width: s.width, animationDuration: s.duration, animationDelay: s.delay }} />
      ))}
    </div>
  )
}

export default function App() {
  return (
    <>
      <StarField />
      <ShootingStars />
      <div className="scanline" />
      <Navbar />
      <main style={{ paddingTop: '100px', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/order" element={<Order />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
