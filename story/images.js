// Which picture to show for each scene. Files live in the /images folder.
// Picking order: scene's own `image` field > nodeImages > prefix match > default.

export const defaultImage = 'workshop-exterior.jpg'

// Matched against the start of the scene id, e.g. 'elf' matches 'elf-approach'
export const prefixImages = {
  intro: 'workshop-exterior.jpg',
  phone: 'phone.jpg',
  investigate: 'snowy-landscape.jpg',
  elf: 'elf-village.jpg',
  workshop: 'workshop-exterior.jpg',
  floor: 'toy-floor.jpg',
  office: 'santa-office.jpg',
  'mrs-claus': 'kitchen.jpg',
  noel: 'wardrobe.jpg',
  jack: 'cold-storage.jpg',
  stables: 'stables.jpg',
  handler: 'stables.jpg',
  loft: 'hayloft.jpg',
  ending: 'sleigh.jpg',
}

// One-off overrides for a single scene (these win over the prefix)
export const nodeImages = {
  // 'jack-cold-store-door': 'cold-storage-door.jpg',
  // 'ending-cold-case': 'empty-sleigh.jpg',
}

export function imageFor(node) {
  if (node.image) return node.image
  if (nodeImages[node.id]) return nodeImages[node.id]

  const prefix = Object.keys(prefixImages)
    .filter(p => node.id === p || node.id.startsWith(p + '-'))
    .sort((a, b) => b.length - a.length)[0]

  return prefix ? prefixImages[prefix] : defaultImage
}