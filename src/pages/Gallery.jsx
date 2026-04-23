import { motion } from 'framer-motion'

const GALLERY_ITEMS = [
  { id: 1,  label: 'The Main Floor',          emoji: '🕹️',  color: '#1a5fff', desc: 'Wall-to-wall cabinets — classic arcade at its finest'    },
  { id: 2,  label: 'Pinball Alley',            emoji: '🎰',  color: '#ff1a1a', desc: 'A full row of restored Williams & Bally machines'          },
  { id: 3,  label: 'Street Fighter Corner',    emoji: '🥊',  color: '#1a5fff', desc: 'Original SF II cabinet — challenges always welcome'       },
  { id: 4,  label: 'Mortal Kombat Duo',        emoji: '💀',  color: '#ff1a1a', desc: 'Side-by-side cabs for the ultimate showdown'               },
  { id: 5,  label: 'The Woodlands Location',   emoji: '🏬',  color: '#00d4ff', desc: '473 Sawdust Rd — our original Spring TX arcade'            },
  { id: 6,  label: 'NASA / Webster Location',  emoji: '🚀',  color: '#c8c8d8', desc: '20810 Gulf Fwy — serving the Clear Lake area'              },
  { id: 7,  label: 'Pac-Man & Ms. Pac-Man',    emoji: '👾',  color: '#1a5fff', desc: 'Side by side — the dream setup'                           },
  { id: 8,  label: 'The Twilight Zone Pinball', emoji: '🌀', color: '#ff1a1a', desc: 'One of the most sought-after machines in the world'        },
  { id: 9,  label: 'Beat Em Up Row',           emoji: '🐢',  color: '#1a5fff', desc: 'TMNT, X-Men, Simpsons — all set to 4-player co-op'        },
  { id: 10, label: 'Daytona USA Sit-Down',     emoji: '🏎️', color: '#00d4ff', desc: 'Full cockpit cab — feel the asphalt'                       },
  { id: 11, label: 'Token Wall',               emoji: '🪙',  color: '#c8c8d8', desc: 'A tribute wall of tokens from arcades past'                },
  { id: 12, label: 'Party Room',               emoji: '🎉',  color: '#ff1a1a', desc: 'Private room for birthdays & group events'                 },
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
          ── A LOOK INSIDE ──
        </p>
        <h1 className="neon-green" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, letterSpacing: '0.06em', marginBottom: 16 }}>
          GALLERY
        </h1>
        <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: 48 }}>
          A glimpse of the floor, the machines, and the vibe. Best experienced in person.
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
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 + (i % 3) }}
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
        ★ TAG US @GAMEPRESERVEHOUSTON TO GET FEATURED ★
      </motion.p>
    </div>
  )
}
