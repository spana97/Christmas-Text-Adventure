import { textNodes } from '../story/index.js'

const byId = new Map(textNodes.map((n) => [n.id, n]))

// 1) static soft-lock check: every scene must keep at least one ungated option
const gatedOnly = textNodes.filter(
  (n) => n.options.length > 0 && n.options.every((o) => o.requiredState)
)
console.log('scenes where ALL options are gated (possible soft-lock):', gatedOnly.map((n) => n.id).join(', ') || 'none')

// 2) random playthroughs with real state + gating
let seed = 12345
const rnd = () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296)
const reached = new Set()
const endingCounts = {}
const stuck = new Map()
const finalEndings = ['ending-the-vice-head-elf', 'ending-hostile-takeover', 'ending-early-retirement', 'ending-cold-case']
let finished = 0, capped = 0
const RUNS = 300000

for (let r = 0; r < RUNS; r++) {
  let id = 'intro-prologue'
  let state = { cigarettes: true, phone: true }
  for (let step = 0; step < 600; step++) {
    reached.add(id)
    const n = byId.get(id)
    const visible = n.options.filter((o) => !o.requiredState || o.requiredState(state))
    if (visible.length === 0) { stuck.set(id, (stuck.get(id) ?? 0) + 1); break }
    const o = visible[Math.floor(rnd() * visible.length)]
    if (typeof o.nextText === 'number') { finished++; break }
    if (finalEndings.includes(o.nextText)) endingCounts[o.nextText] = (endingCounts[o.nextText] ?? 0) + 1
    state = { ...state, ...(o.setState ?? {}) }
    id = o.nextText
    if (step === 599) capped++
  }
}

console.log('runs:', RUNS, '| completed:', finished, '| hit step cap:', capped)
console.log('scenes reached:', reached.size, '/', textNodes.length)
console.log('never reached:', textNodes.filter((n) => !reached.has(n.id)).map((n) => n.id).join(', ') || 'none')
console.log('ending hits:', endingCounts)
console.log('stuck scenes:', stuck.size ? Object.fromEntries(stuck) : 'none')