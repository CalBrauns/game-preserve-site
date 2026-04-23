import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, animate } from 'framer-motion'

const RIM_COLORS   = ['#ff1a1a', '#c8c8d8', '#ff1a1a', '#00d4ff', '#ff1a1a', '#1a5fff', '#ff1a1a']
const TRAIL_COLORS = ['#ff1a1a', '#1a5fff', '#ff1a1a', '#00d4ff']

export default function UFO() {
  const [beamOn, setBeamOn]     = useState(false)
  const [particles, setParticles] = useState([])

  const xPos       = useMotionValue(-160)
  const lastEmitX  = useRef(-999)
  const cancelRef  = useRef(false)

  // Fly left → right, loop forever
  useEffect(() => {
    cancelRef.current = false

    const runLoop = async () => {
      while (!cancelRef.current) {
        xPos.set(-160)
        await animate(xPos, window.innerWidth + 160, {
          duration: 16,
          ease: 'linear',
        })
        await new Promise(r => setTimeout(r, 250))
      }
    }

    runLoop()
    return () => { cancelRef.current = true }
  }, [xPos])

  // Emit particles as UFO moves
  useEffect(() => {
    const unsub = xPos.onChange(latest => {
      if (Math.abs(latest - lastEmitX.current) < 10) return
      lastEmitX.current = latest

      const count = Math.random() > 0.45 ? 2 : 1
      const burst = Array.from({ length: count }, (_, i) => ({
        id: `${Date.now()}-${i}-${Math.random()}`,
        // emit from left side of UFO (behind it as it moves right)
        x: latest + Math.random() * 20,
        y: 52 + (Math.random() - 0.5) * 18,
        dx: -(Math.random() * 30 + 8),
        dy: (Math.random() - 0.5) * 22,
        color: TRAIL_COLORS[Math.floor(Math.random() * 4)],
        size: Math.random() * 5 + 2.5,
        dur:  0.7 + Math.random() * 0.5,
      }))

      setParticles(prev => [...prev.slice(-35), ...burst])
    })
    return unsub
  }, [xPos])

  // Tractor beam fires periodically
  useEffect(() => {
    const fire = () => {
      setBeamOn(true)
      setTimeout(() => setBeamOn(false), 3200)
    }
    const first = setTimeout(fire, 4500)
    const loop  = setInterval(fire, 8000)
    return () => { clearTimeout(first); clearInterval(loop) }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 2,
        overflow: 'hidden',
      }}
    >
      {/* Particle trail */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.9, scale: 1, x: 0, y: 0 }}
          animate={{ opacity: 0, scale: 0.1, x: p.dx, y: p.dy }}
          transition={{ duration: p.dur, ease: 'easeOut' }}
          onAnimationComplete={() =>
            setParticles(prev => prev.filter(pp => pp.id !== p.id))
          }
          style={{
            position: 'absolute',
            left: p.x,
            top:  p.y,
            width:  p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 6px ${p.color}, 0 0 12px ${p.color}`,
          }}
        />
      ))}

      {/* UFO */}
      <motion.div
        style={{
          position: 'absolute',
          top: 32,
          left: 0,
          x: xPos,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        animate={{ y: [0, -9, 0], rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Glass dome */}
        <div
          style={{
            width: 46,
            height: 30,
            borderRadius: '50% 50% 0 0',
            background:
              'radial-gradient(ellipse at 38% 28%, rgba(255,220,210,0.95) 0%, rgba(220,50,30,0.65) 45%, rgba(100,10,5,0.5) 100%)',
            border: '1px solid rgba(255,26,26,0.5)',
            boxShadow: '0 0 14px rgba(255,26,26,0.55)',
            position: 'relative',
            zIndex: 2,
          }}
        />

        {/* Saucer body */}
        <div
          style={{
            width: 120,
            height: 30,
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse at 50% 18%, #e8e8e8 0%, #aaa 30%, #555 70%, #222 100%)',
            boxShadow:
              '0 0 20px rgba(255,26,26,0.3), inset 0 2px 4px rgba(255,255,255,0.12), 0 8px 18px rgba(0,0,0,0.75)',
            marginTop: -12,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Specular highlight */}
          <div
            style={{
              position: 'absolute',
              top: '8%', left: '14%', right: '14%',
              height: '26%',
              borderRadius: '50%',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.38), transparent)',
            }}
          />

          {/* Rim lights */}
          {RIM_COLORS.map((color, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [1, 0.08, 1], scale: [1, 0.55, 1] }}
              transition={{ duration: 1.0, repeat: Infinity, delay: i * 0.13, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '50%',
                left: `${12 + i * 13}%`,
                transform: 'translate(-50%, -50%)',
                width: 7, height: 7,
                borderRadius: '50%',
                background: color,
                boxShadow: `0 0 7px ${color}, 0 0 14px ${color}`,
              }}
            />
          ))}
        </div>

        {/* Engine glow */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4], scaleX: [0.8, 1.1, 0.8] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 60,
            height: 10,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,26,26,0.7) 0%, rgba(0,212,255,0.3) 60%, transparent 100%)',
            filter: 'blur(3px)',
            marginTop: -4,
          }}
        />

        {/* Tractor beam */}
        <AnimatePresence>
          {beamOn && (
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: 1,
                opacity: [0, 0.72, 0.48, 0.78, 0.44, 0.68, 0.5],
              }}
              exit={{ scaleY: 0, opacity: 0, transition: { duration: 0.35 } }}
              transition={{
                scaleY: { duration: 0.3, ease: 'easeOut' },
                opacity: { duration: 3.2, times: [0, 0.12, 0.3, 0.5, 0.65, 0.82, 1] },
              }}
              style={{
                transformOrigin: 'top center',
                width: 140,
                height: 200,
                background:
                  'linear-gradient(to bottom, rgba(255,26,26,0.8) 0%, rgba(255,26,26,0.38) 55%, rgba(255,26,26,0) 100%)',
                clipPath: 'polygon(33% 0%, 67% 0%, 100% 100%, 0% 100%)',
                filter: 'blur(5px)',
                marginTop: -6,
              }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
