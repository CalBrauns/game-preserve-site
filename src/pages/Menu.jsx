import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CATEGORIES = ['ALL', 'PINBALL', 'CLASSIC ARCADE', 'FIGHTING', 'RACING', 'BEAT EM UPS']

const ITEMS = [
  { category: 'PINBALL',        name: 'Addams Family',              desc: 'One of the best-selling pinball machines ever made. Gomez, Morticia, and the gang await.',                   icon: '🎰', color: 'neon-blue'   },
  { category: 'PINBALL',        name: 'Medieval Madness',           desc: 'Destroy castles, battle trolls, and rescue maidens. A beloved Williams classic.',                            icon: '🏰', color: 'neon-red'    },
  { category: 'PINBALL',        name: 'The Twilight Zone',          desc: 'Pinball goes to another dimension. Features the iconic Power Ball mode.',                                     icon: '🌀', color: 'neon-purple'  },
  { category: 'PINBALL',        name: 'Indiana Jones',              desc: 'Adventure across three movie themes. Hit the idol to start your quest.',                                       icon: '🎩', color: 'neon-green'   },
  { category: 'PINBALL',        name: 'Star Trek: TNG',             desc: 'Boldly go where no ball has gone before. Features video mode and multiple hurry-ups.',                        icon: '🚀', color: 'neon-blue'   },
  { category: 'PINBALL',        name: 'Creature from the Black Lagoon', desc: 'Bally classic with a built-in video screen. Unique gameplay combining two eras.',                        icon: '🐊', color: 'neon-red'    },
  { category: 'CLASSIC ARCADE', name: 'Pac-Man',                   desc: 'The original dot muncher. Eat pellets, dodge ghosts, become a legend.',                                        icon: '👾', color: 'neon-green'   },
  { category: 'CLASSIC ARCADE', name: 'Ms. Pac-Man',               desc: 'The beloved sequel — faster, smarter, and with moving fruit.',                                                 icon: '🎀', color: 'neon-red'    },
  { category: 'CLASSIC ARCADE', name: 'Galaga',                    desc: 'Defend the galaxy from insect invaders. Let them capture your ship for double firepower.',                     icon: '🛸', color: 'neon-blue'   },
  { category: 'CLASSIC ARCADE', name: 'Donkey Kong',               desc: 'Jump barrels, rescue Pauline. The game that launched Mario.',                                                  icon: '🦍', color: 'neon-red'    },
  { category: 'CLASSIC ARCADE', name: 'Space Invaders',            desc: 'The game that started it all. Pixelated aliens, one row at a time.',                                           icon: '👽', color: 'neon-green'   },
  { category: 'CLASSIC ARCADE', name: 'Centipede',                 desc: 'Blast the centipede, dodge the spiders. A true Atari classic.',                                                icon: '🐛', color: 'neon-purple'  },
  { category: 'CLASSIC ARCADE', name: 'Asteroids',                 desc: 'You and your ship against the universe. Rotate, thrust, fire.',                                                icon: '☄️',  color: 'neon-blue'   },
  { category: 'CLASSIC ARCADE', name: 'Frogger',                   desc: 'Get your frog safely across the road and river. Harder than it looks.',                                        icon: '🐸', color: 'neon-green'   },
  { category: 'FIGHTING',       name: 'Street Fighter II',         desc: 'The grandfather of competitive fighting games. Hadouken!',                                                      icon: '🥊', color: 'neon-red'    },
  { category: 'FIGHTING',       name: 'Mortal Kombat II',          desc: 'Finish him. The most iconic arcade fighter of the 90s.',                                                        icon: '💀', color: 'neon-red'    },
  { category: 'FIGHTING',       name: 'Tekken 3',                  desc: 'King of Iron Fist Tournament. 3D fighting at its finest.',                                                      icon: '🤜', color: 'neon-blue'   },
  { category: 'FIGHTING',       name: 'Marvel vs. Capcom 2',       desc: '56 characters, infinite possibilities. Build your dream team.',                                                 icon: '🦸', color: 'neon-purple'  },
  { category: 'RACING',         name: 'Out Run',                   desc: 'Wind in your hair, Ferrari at full speed. The iconic Sega racer.',                                              icon: '🏎️',  color: 'neon-red'    },
  { category: 'RACING',         name: 'Daytona USA',               desc: 'Three tracks, three difficulties. One of the greatest arcade racers ever made.',                               icon: '🏁', color: 'neon-blue'   },
  { category: 'RACING',         name: "Cruis'n USA",               desc: 'Coast to coast across America in this classic N64-era racer.',                                                  icon: '🚗', color: 'neon-green'   },
  { category: 'BEAT EM UPS',    name: 'Teenage Mutant Ninja Turtles', desc: 'Up to 4 players. Save April, defeat Shredder. Pizza not included.',                                         icon: '🐢', color: 'neon-green'   },
  { category: 'BEAT EM UPS',    name: 'X-Men',                     desc: '6-player Konami classic. Cyclops, Wolverine, Storm — pick your hero.',                                         icon: '⚡', color: 'neon-blue'   },
  { category: 'BEAT EM UPS',    name: 'The Simpsons',              desc: 'Homer, Marge, Bart, and Lisa save Maggie. Up to 4 players of pure chaos.',                                     icon: '🍩', color: 'neon-red'    },
  { category: 'BEAT EM UPS',    name: 'Double Dragon',             desc: "The original beat 'em up. Brothers Billy and Jimmy take on the Black Warriors.",                               icon: '👊', color: 'neon-purple'  },
]

const borderMap = { 'neon-green': 'border-neon-green', 'neon-purple': 'border-neon-purple', 'neon-red': 'border-neon-red', 'neon-blue': 'border-neon-blue' }

function GameCard({ item }) {
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
        <h3 className={`font-pixel ${item.color}`} style={{ fontSize: '0.55rem', letterSpacing: '0.08em', lineHeight: 1.5, marginBottom: 6 }}>
          {item.name}
        </h3>
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
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="neon-purple font-pixel" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', marginBottom: 12 }}>
          ── 125+ GAMES AVAILABLE ──
        </p>
        <h1 className="neon-green" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, letterSpacing: '0.06em', marginBottom: 48 }}>
          THE GAMES
        </h1>
      </motion.div>

      <motion.div
        style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}
        initial="hidden" animate="show"
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
              padding: '8px 14px', fontSize: '0.5rem', letterSpacing: '0.08em', cursor: 'pointer', border: '2px solid',
              background:   active === cat ? 'rgba(26,95,255,0.15)' : 'transparent',
              borderColor:  active === cat ? '#1a5fff' : '#444',
              color:        active === cat ? '#1a5fff' : '#888',
              boxShadow:    active === cat ? '0 0 8px #1a5fff' : 'none',
              transition: 'all 0.2s',
            }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial="hidden" animate="show"
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}
        >
          {filtered.map(item => <GameCard key={item.name} item={item} />)}
        </motion.div>
      </AnimatePresence>

      <motion.p
        className="font-pixel"
        style={{ fontSize: '0.45rem', color: '#555', marginTop: 48, letterSpacing: '0.1em', textAlign: 'center' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
      >
        ★ ALL MACHINES SET TO FREE PLAY — NO QUARTERS NEEDED ★
      </motion.p>
    </div>
  )
}
