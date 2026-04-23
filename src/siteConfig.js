export const config = {
  // ── Brand ────────────────────────────────────────────────
  logo:       '🕹️',
  nameWord1:  'THE GAME',
  nameWord2:  'PRESERVE',
  footerTagline: "The 80's are back.\nA family arcade experience\nlike no other.",
  copyright:  '© 2025 THE GAME PRESERVE',

  // ── Hero ─────────────────────────────────────────────────
  heroLabel:    '★ ★ ★   THE 80\'S ARE BACK   ★ ★ ★',
  heroServices: 'FREE PLAY · 125+ GAMES · NO QUARTERS NEEDED',
  heroSub:      'FAMILY ORIENTED · CLASSIC ARCADE EXPERIENCE',
  heroCTAs: [
    { label: 'GET DAY PASS',  to: '/order',    style: 'btn-neon-green'  },
    { label: 'VIEW GAMES',    to: '/menu',     style: 'btn-neon-purple' },
  ],

  // ── Feature cards ────────────────────────────────────────
  features: [
    { icon: '🎮', title: 'FREE PLAY',       desc: 'No quarters, no tokens. Every machine set to unlimited play. Pay once and game all day.',             neonClass: 'neon-green',  borderClass: 'border-neon-green'  },
    { icon: '👾', title: '125+ GAMES',      desc: 'Classic arcade cabinets, pinball machines, and retro favorites spanning decades of gaming history.', neonClass: 'neon-purple', borderClass: 'border-neon-purple' },
    { icon: '🏆', title: 'MEMBERSHIPS',     desc: 'Monthly passes for individuals and families. Includes guest passes and unlimited daily access.',      neonClass: 'neon-blue',   borderClass: 'border-neon-blue'   },
    { icon: '🎉', title: 'PRIVATE PARTIES', desc: 'Book the party room for birthdays and events. 2 hours, 10 guests included starting at $250.',         neonClass: 'neon-red',    borderClass: 'border-neon-red'    },
  ],

  // ── CTA strip ────────────────────────────────────────────
  ctaEyebrow: 'INSERT COIN TO CONTINUE',
  ctaHeading:  'Come Relive the Golden Age of Arcade',
  ctaButtons: [
    { label: 'FIND US',      to: '/location', style: 'btn-neon-blue'  },
    { label: 'SEE THE GAMES', to: '/gallery', style: 'btn-neon-red'   },
  ],

  // ── Contact ──────────────────────────────────────────────
  address:   '473 Sawdust Rd, Spring TX  |  20810 Gulf Fwy, Webster TX',
  hours: {
    weekday: 'Mon–Fri: Check location for hours',
    weekend: 'Sat–Sun: Check location for hours',
  },
  email: 'info@gamepreservehouston.com',

  // ── Nav links ────────────────────────────────────────────
  nav: [
    { to: '/',         label: 'HOME'     },
    { to: '/menu',     label: 'GAMES'    },
    { to: '/order',    label: 'PRICING'  },
    { to: '/gallery',  label: 'GALLERY'  },
    { to: '/reviews',  label: 'REVIEWS'  },
    { to: '/location', label: 'LOCATION' },
  ],
}
